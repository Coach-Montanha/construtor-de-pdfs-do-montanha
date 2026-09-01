import { MagazineProject } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT } from "./sample-data";

const LOCAL_STORAGE_KEY = "montanha_magazine_project";
const LOCAL_STORAGE_TIMESTAMP_KEY = "montanha_last_saved_at";
const LOCAL_STORAGE_KEY = "montanha_magazine_project";
const LOCAL_STORAGE_TIMESTAMP_KEY = "montanha_last_saved_at";

/**
 * Salva o projeto localmente no navegador com segurança (Local-First)
 */
export async function syncProjectToCloud(project: MagazineProject): Promise<{ success: boolean; syncedAt: string; mode: string }> {
  const now = new Date().toISOString();
  const projectWithTimestamp: MagazineProject = {
    ...project,
    updatedAt: now,
  };

  // Salvar no localStorage local isolado
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projectWithTimestamp));
      localStorage.setItem(LOCAL_STORAGE_TIMESTAMP_KEY, now);
      return { success: true, syncedAt: now, mode: "local-cache" };
    } catch (e) {
      console.warn("Aviso ao salvar no cache local:", e);
    }
  }

  return { success: true, syncedAt: now, mode: "local-cache" };
}

/**
 * Busca a versão mais recente do projeto de forma segura (URL > Cache Local > Padrão)
 */
export async function loadLatestProject(): Promise<MagazineProject> {
  // 1. Prioridade 1: Link de Compartilhamento / QR Code na URL (?sync_data=...)
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
      return urlProject;
    }
  }

  // 2. Prioridade 2: Cache do localStorage do próprio navegador
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

  // 3. Fallback padrão
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
    const jsonStr = JSON.stringify(project);
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

    // Proteção contra payloads excessivamente grandes via URL
    if (syncData.length > 500000) {
      console.warn("sync_data excede o tamanho seguro.");
      return null;
    }

    const jsonStr = decodeURIComponent(atob(syncData));
    const parsed = JSON.parse(jsonStr);
    if (parsed && typeof parsed === "object" && typeof parsed.title === "string" && Array.isArray(parsed.articles)) {
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
