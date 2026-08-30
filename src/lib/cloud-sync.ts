import { MagazineProject } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT } from "./sample-data";

const LOCAL_STORAGE_KEY = "montanha_magazine_project";
const LOCAL_STORAGE_TIMESTAMP_KEY = "montanha_last_saved_at";
const CLOUD_OBJECT_ID_KEY = "montanha_cloud_object_id";

// Primary Global Cloud Endpoint (Cross-device, works across Edge, Chrome, Safari, Android, iOS)
const GLOBAL_CLOUD_API = "https://api.restful-api.dev/objects";
const FIXED_GLOBAL_SYNC_TAG = "montanha-magazine-official-sync-v1";

/**
 * Salva o projeto localmente e sincroniza na nuvem global acessível por qualquer navegador e celular
 */
export async function syncProjectToCloud(project: MagazineProject): Promise<{ success: boolean; syncedAt: string; mode: string }> {
  const now = new Date().toISOString();
  const projectWithTimestamp: MagazineProject = {
    ...project,
    updatedAt: now,
  };

  // 1. Salvar no localStorage local imediatamente
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projectWithTimestamp));
      localStorage.setItem(LOCAL_STORAGE_TIMESTAMP_KEY, now);
    } catch (e) {
      console.warn("Aviso ao salvar no cache local:", e);
    }
  }

  // 2. Sincronizar com o endpoint local do servidor TanStack / Nitro
  try {
    fetch("/api/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectWithTimestamp),
    }).catch(() => {});
  } catch {}

  // 3. Sincronizar com a Nuvem Global Multi-Dispositivo (REST Cloud)
  try {
    let cloudObjectId = typeof window !== "undefined" ? localStorage.getItem(CLOUD_OBJECT_ID_KEY) : null;

    if (cloudObjectId) {
      // Atualizar objeto existente na nuvem
      const updateRes = await fetch(`${GLOBAL_CLOUD_API}/${cloudObjectId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: FIXED_GLOBAL_SYNC_TAG,
          data: projectWithTimestamp,
        }),
      });

      if (updateRes.ok) {
        return { success: true, syncedAt: now, mode: "cloud-global" };
      }
    }

    // Se não existir ID salvo, criar novo registro na nuvem
    const createRes = await fetch(GLOBAL_CLOUD_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: FIXED_GLOBAL_SYNC_TAG,
        data: projectWithTimestamp,
      }),
    });

    if (createRes.ok) {
      const result = await createRes.json();
      if (result.id && typeof window !== "undefined") {
        localStorage.setItem(CLOUD_OBJECT_ID_KEY, result.id);
      }
      return { success: true, syncedAt: now, mode: "cloud-global" };
    }
  } catch (err) {
    console.info("Aviso de sync em nuvem externa:", err);
  }

  return { success: true, syncedAt: now, mode: "local-cache" };
}

/**
 * Busca a versão mais recente do projeto em todas as fontes (URL > Nuvem Global > Servidor > Cache Local)
 */
export async function loadLatestProject(): Promise<MagazineProject> {
  // 1. Prioridade Máxima: Link de Compartilhamento / QR Code na URL (?sync_data=...)
  if (typeof window !== "undefined") {
    const urlProject = loadProjectFromUrl();
    if (urlProject) {
      // Salvar imediatamente no cache local
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(urlProject));
      localStorage.setItem(LOCAL_STORAGE_TIMESTAMP_KEY, new Date().toISOString());
      // Limpar a URL para ficar limpa sem recarregar
      try {
        window.history.replaceState(null, "", window.location.pathname);
      } catch {}
      // Enviar para a nuvem global também
      syncProjectToCloud(urlProject);
      return urlProject;
    }
  }

  // 2. Prioridade 2: Buscar da Nuvem Global Multi-Dispositivo
  try {
    let cloudObjectId = typeof window !== "undefined" ? localStorage.getItem(CLOUD_OBJECT_ID_KEY) : null;

    if (cloudObjectId) {
      const res = await fetch(`${GLOBAL_CLOUD_API}/${cloudObjectId}`);
      if (res.ok) {
        const item = await res.json();
        if (item && item.data && item.data.articles && item.data.articles.length > 0) {
          const cloudProj: MagazineProject = {
            ...INITIAL_MAGAZINE_PROJECT,
            ...item.data,
            pageVisibility: {
              ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
              ...(item.data.pageVisibility || {}),
            },
          };
          if (typeof window !== "undefined") {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cloudProj));
          }
          return cloudProj;
        }
      }
    }
  } catch (e) {
    console.info("Nuvem global inacessível, checando servidor local...");
  }

  // 3. Prioridade 3: Buscar do endpoint do servidor local /api/project
  try {
    const res = await fetch("/api/project");
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && serverData.articles && serverData.articles.length > 0) {
        const serverProj: MagazineProject = {
          ...INITIAL_MAGAZINE_PROJECT,
          ...serverData,
          pageVisibility: {
            ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
            ...(serverData.pageVisibility || {}),
          },
        };
        if (typeof window !== "undefined") {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(serverProj));
        }
        return serverProj;
      }
    }
  } catch (e) {
    console.info("Servidor local sem dados em memória...");
  }

  // 4. Prioridade 4: Cache do localStorage do próprio navegador
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.title && Array.isArray(parsed.articles)) {
          return {
            ...INITIAL_MAGAZINE_PROJECT,
            ...parsed,
            pageVisibility: {
              ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
              ...(parsed.pageVisibility || {}),
            },
          };
        }
      } catch (e) {
        console.error("Erro ao decodificar projeto do localStorage:", e);
      }
    }
  }

  // 5. Fallback padrão
  return INITIAL_MAGAZINE_PROJECT;
}

/**
 * Exporta um arquivo .json completo de backup da revista para download
 */
export function exportProjectToFile(project: MagazineProject) {
  const jsonStr = JSON.stringify(project, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const editionName = project.title.toLowerCase().replace(/\s+/g, "-");
  a.href = url;
  a.download = `backup-${editionName}-edicao-${project.editionNumber || "01"}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Importa um arquivo .json de backup do computador ou celular
 */
export function importProjectFromFile(file: File): Promise<MagazineProject> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (!parsed || !parsed.title || !Array.isArray(parsed.articles)) {
          throw new Error("Arquivo de backup inválido.");
        }
        const fullProject: MagazineProject = {
          ...INITIAL_MAGAZINE_PROJECT,
          ...parsed,
          pageVisibility: {
            ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
            ...(parsed.pageVisibility || {}),
          },
        };
        resolve(fullProject);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error("Erro ao ler o arquivo."));
    reader.readAsText(file);
  });
}

/**
 * Gera uma URL com o projeto comprimido em base64 para abrir em outro dispositivo
 */
export function generateShareUrl(project: MagazineProject): string {
  if (typeof window === "undefined") return "";
  try {
    const cleanProject = {
      ...project,
      geminiApiKey: undefined,
    };
    const jsonStr = JSON.stringify(cleanProject);
    const encoded = btoa(encodeURIComponent(jsonStr));
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set("sync_data", encoded);
    return url.toString();
  } catch (e) {
    console.error("Erro ao gerar link de compartilhamento:", e);
    return window.location.href;
  }
}

/**
 * Lê os dados do projeto da URL caso tenha sido aberto via link de compartilhamento ou QR Code
 */
function loadProjectFromUrl(): MagazineProject | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const syncData = params.get("sync_data");
    if (!syncData) return null;

    const jsonStr = decodeURIComponent(atob(syncData));
    const parsed = JSON.parse(jsonStr);
    if (parsed && parsed.title && Array.isArray(parsed.articles)) {
      return {
        ...INITIAL_MAGAZINE_PROJECT,
        ...parsed,
        pageVisibility: {
          ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
          ...(parsed.pageVisibility || {}),
        },
      };
    }
  } catch (e) {
    console.warn("Aviso ao carregar sync_data da URL:", e);
  }
  return null;
}
