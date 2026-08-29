import { MagazineProject } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT } from "./sample-data";

const LOCAL_STORAGE_KEY = "montanha_magazine_project";
const CLOUD_SYNC_API_URL = "/api/project";

/**
 * Salva o projeto localmente e sincroniza em segundo plano com o servidor/nuvem
 */
export async function syncProjectToCloud(project: MagazineProject): Promise<boolean> {
  // 1. Sempre salvar no localStorage para cache offline imediato
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(project));
      localStorage.setItem("montanha_last_saved_at", new Date().toISOString());
    } catch (e) {
      console.warn("Aviso ao salvar no localStorage:", e);
    }
  }

  // 2. Sincronizar com o servidor da aplicação para que outros dispositivos acessem
  try {
    const res = await fetch(CLOUD_SYNC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    if (res.ok) {
      return true;
    }
  } catch (err) {
    // Modo offline ou servidor em transição
    console.info("Sync em nuvem aguardando conexão:", err);
  }

  return false;
}

/**
 * Busca o projeto mais atualizado: tenta primeiro o servidor/nuvem, depois localStorage, ou URL hash
 */
export async function loadLatestProject(): Promise<MagazineProject> {
  // 1. Verificar se há projeto embutido no link / URL Hash (compartilhamento direto)
  if (typeof window !== "undefined") {
    const hashProject = loadProjectFromUrl();
    if (hashProject) {
      // Limpar a URL para não poluir a barra de endereço
      window.history.replaceState(null, "", window.location.pathname);
      return hashProject;
    }
  }

  // 2. Tentar buscar a versão mais recente do servidor/nuvem
  try {
    const res = await fetch(CLOUD_SYNC_API_URL);
    if (res.ok) {
      const cloudData = await res.json();
      if (cloudData && cloudData.articles && cloudData.articles.length > 0) {
        // Atualizar cache local
        if (typeof window !== "undefined") {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cloudData));
        }
        return {
          ...INITIAL_MAGAZINE_PROJECT,
          ...cloudData,
          pageVisibility: {
            ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
            ...(cloudData.pageVisibility || {}),
          },
        };
      }
    }
  } catch (e) {
    console.info("Servidor cloud offline, recorrendo ao cache local...");
  }

  // 3. Fallback para localStorage
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_MAGAZINE_PROJECT,
          ...parsed,
          pageVisibility: {
            ...INITIAL_MAGAZINE_PROJECT.pageVisibility,
            ...(parsed.pageVisibility || {}),
          },
        };
      } catch (e) {
        console.error("Erro ao decodificar projeto do localStorage:", e);
      }
    }
  }

  // 4. Default inicial
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
      // Omitir chaves privadas na URL
      geminiApiKey: undefined,
    };
    const jsonStr = JSON.stringify(cleanProject);
    const encoded = btoa(encodeURIComponent(jsonStr));
    const url = new URL(window.location.origin);
    url.searchParams.set("sync_data", encoded);
    return url.toString();
  } catch (e) {
    console.error("Erro ao gerar link de compartilhamento:", e);
    return window.location.href;
  }
}

/**
 * Lê os dados do projeto da URL caso tenha sido aberto via link de compartilhamento
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
