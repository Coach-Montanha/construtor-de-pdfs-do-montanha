import { MagazineProject, RepositoryDocument } from "../types/magazine";

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: {
              access_token?: string;
              expires_in?: number;
              error?: string;
              error_description?: string;
            }) => void;
          }) => {
            requestAccessToken: (options?: { prompt?: string }) => void;
          };
          revoke: (token: string, done: () => void) => void;
        };
      };
    };
  }
}

// Chaves de Armazenamento Local
const GD_TOKEN_KEY = "montanha_gdrive_token";
const GD_EXPIRES_AT_KEY = "montanha_gdrive_expires_at";
const GD_EMAIL_KEY = "montanha_gdrive_email";
const GD_FOLDER_ID_KEY = "montanha_gdrive_folder_id";
const GD_CLIENT_ID_KEY = "montanha_gdrive_client_id";
const GD_LAST_SYNC_KEY = "montanha_gdrive_last_sync";

// Client ID padrão ou configurável pelo treinador
export const DEFAULT_GOOGLE_CLIENT_ID =
  "984281729481-64581q4c5q2tpt3n67vh38d33194cksk.apps.googleusercontent.com";

export const DEDICATED_FOLDER_NAME = "Montanha Magazine - Acervo & Artigos";
export const MASTER_PROJECT_FILENAME = "montanha_magazine_projeto.json";

export interface GoogleDriveStatus {
  isConnected: boolean;
  email: string | null;
  folderId: string | null;
  folderName: string;
  lastSync: string | null;
  clientId: string;
}

/**
 * Carrega dinamicamente o script oficial do Google Identity Services (GIS)
 */
export function loadGoogleGisScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return resolve();
    if (window.google?.accounts?.oauth2) return resolve();

    const existingScript = document.getElementById("google-gis-sdk");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      existingScript.addEventListener("error", (e) => reject(e));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-gis-sdk";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });
}

/**
 * Obtém o Client ID configurado (salvo pelo usuário ou padrão)
 */
export function getGoogleClientId(): string {
  if (typeof window === "undefined") return DEFAULT_GOOGLE_CLIENT_ID;
  return (
    localStorage.getItem(GD_CLIENT_ID_KEY) ||
    DEFAULT_GOOGLE_CLIENT_ID
  );
}

/**
 * Salva um Client ID personalizado
 */
export function setGoogleClientId(clientId: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(GD_CLIENT_ID_KEY, clientId.trim());
}

/**
 * Retorna o status atual da conexão com o Google Drive
 */
export function getGoogleDriveStatus(): GoogleDriveStatus {
  if (typeof window === "undefined") {
    return {
      isConnected: false,
      email: null,
      folderId: null,
      folderName: DEDICATED_FOLDER_NAME,
      lastSync: null,
      clientId: DEFAULT_GOOGLE_CLIENT_ID,
    };
  }

  const token = localStorage.getItem(GD_TOKEN_KEY);
  const expiresAt = Number(localStorage.getItem(GD_EXPIRES_AT_KEY) || "0");
  const isExpired = Date.now() >= expiresAt;

  return {
    isConnected: !!token && !isExpired,
    email: localStorage.getItem(GD_EMAIL_KEY),
    folderId: localStorage.getItem(GD_FOLDER_ID_KEY),
    folderName: DEDICATED_FOLDER_NAME,
    lastSync: localStorage.getItem(GD_LAST_SYNC_KEY),
    clientId: getGoogleClientId(),
  };
}

/**
 * Retorna o access token atual se válido
 */
export function getValidGoogleAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem(GD_TOKEN_KEY);
  const expiresAt = Number(localStorage.getItem(GD_EXPIRES_AT_KEY) || "0");
  if (!token || Date.now() >= expiresAt) return null;
  return token;
}

/**
 * Dispara evento de mudança de estado da conexão
 */
function notifyStatusChanged() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("montanha-gdrive-status-changed"));
  }
}

/**
 * Inicia o fluxo de conexão com o Google Drive via OAuth2 popup
 */
export async function connectGoogleDrive(customClientId?: string): Promise<{
  success: boolean;
  email?: string;
  folderId?: string;
  error?: string;
}> {
  await loadGoogleGisScript();

  if (!window.google?.accounts?.oauth2) {
    return {
      success: false,
      error: "Google Identity Services não carregou no navegador.",
    };
  }

  const clientId = (customClientId || getGoogleClientId()).trim();
  if (!clientId) {
    return { success: false, error: "Google Client ID não informado." };
  }

  return new Promise((resolve) => {
    try {
      const tokenClient = window.google!.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope:
          "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email",
        callback: async (resp) => {
          if (resp.error || !resp.access_token) {
            resolve({
              success: false,
              error: resp.error_description || resp.error || "Falha na autorização.",
            });
            return;
          }

          const token = resp.access_token;
          const expiresIn = resp.expires_in || 3600;
          const expiresAt = Date.now() + expiresIn * 1000 - 60000; // margem de 1 min

          localStorage.setItem(GD_TOKEN_KEY, token);
          localStorage.setItem(GD_EXPIRES_AT_KEY, String(expiresAt));

          // 1. Obter e-mail do usuário
          let email = "";
          try {
            const userRes = await fetch(
              "https://www.googleapis.com/oauth2/v2/userinfo",
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            if (userRes.ok) {
              const userData = await userRes.json();
              email = userData.email || "";
              localStorage.setItem(GD_EMAIL_KEY, email);
            }
          } catch (e) {
            console.warn("Aviso ao buscar e-mail do Google:", e);
          }

          // 2. Localizar ou criar a pasta dedicada no Google Drive
          try {
            const folderId = await ensureDedicatedFolder(token);
            localStorage.setItem(GD_FOLDER_ID_KEY, folderId);
            notifyStatusChanged();
            resolve({
              success: true,
              email,
              folderId,
            });
          } catch (folderErr: any) {
            resolve({
              success: false,
              error:
                folderErr?.message || "Não foi possível criar a pasta no Google Drive.",
            });
          }
        },
      });

      tokenClient.requestAccessToken({ prompt: "consent" });
    } catch (err: any) {
      resolve({
        success: false,
        error: err?.message || "Erro ao inicializar conexão com Google.",
      });
    }
  });
}

/**
 * Desconecta a conta do Google Drive
 */
export function disconnectGoogleDrive(): void {
  if (typeof window === "undefined") return;
  const token = localStorage.getItem(GD_TOKEN_KEY);
  if (token && window.google?.accounts?.oauth2) {
    try {
      window.google.accounts.oauth2.revoke(token, () => {});
    } catch {}
  }

  localStorage.removeItem(GD_TOKEN_KEY);
  localStorage.removeItem(GD_EXPIRES_AT_KEY);
  localStorage.removeItem(GD_EMAIL_KEY);
  localStorage.removeItem(GD_FOLDER_ID_KEY);
  notifyStatusChanged();
}

/**
 * Localiza ou cria a pasta dedicada 'Montanha Magazine - Acervo & Artigos'
 */
export async function ensureDedicatedFolder(token: string): Promise<string> {
  const cachedFolderId = localStorage.getItem(GD_FOLDER_ID_KEY);
  if (cachedFolderId) {
    // Validar se a pasta ainda existe
    try {
      const checkRes = await fetch(
        `https://www.googleapis.com/drive/v3/files/${cachedFolderId}?fields=id,name,trashed`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (checkRes.ok) {
        const checkData = await checkRes.json();
        if (!checkData.trashed) {
          return cachedFolderId;
        }
      }
    } catch {}
  }

  // Buscar pasta por nome
  const query = encodeURIComponent(
    `name = '${DEDICATED_FOLDER_NAME}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
  );
  const searchRes = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)&spaces=drive`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (searchRes.ok) {
    const data = await searchRes.json();
    if (data.files && data.files.length > 0) {
      const folderId = data.files[0].id;
      localStorage.setItem(GD_FOLDER_ID_KEY, folderId);
      return folderId;
    }
  }

  // Criar a pasta se não existir
  const createRes = await fetch("https://www.googleapis.com/drive/v3/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: DEDICATED_FOLDER_NAME,
      mimeType: "application/vnd.google-apps.folder",
      description:
        "Pasta dedicada do Montanha Magazine Studio para sincronização de textos, artigos e revistas.",
    }),
  });

  if (!createRes.ok) {
    const errorText = await createRes.text();
    throw new Error(`Falha ao criar pasta no Drive: ${errorText}`);
  }

  const createdData = await createRes.json();
  const folderId = createdData.id;
  localStorage.setItem(GD_FOLDER_ID_KEY, folderId);
  return folderId;
}

/**
 * Sincroniza o projeto e todos os textos do acervo para a pasta do Google Drive
 */
export async function syncProjectToGoogleDrive(
  project: MagazineProject
): Promise<{ success: boolean; syncedAt: string; error?: string }> {
  const token = getValidGoogleAccessToken();
  if (!token) {
    return { success: false, syncedAt: "", error: "Google Drive não conectado." };
  }

  try {
    const folderId = await ensureDedicatedFolder(token);
    const now = new Date().toISOString();

    // 1. Salvar o arquivo mestre do projeto (JSON)
    await uploadOrUpdateFile(
      token,
      folderId,
      MASTER_PROJECT_FILENAME,
      "application/json",
      JSON.stringify(
        {
          ...project,
          updatedAt: now,
        },
        null,
        2
      )
    );

    // 2. Salvar individualmente cada texto do acervo como .md legível no Google Drive
    // Isso permite que o treinador veja, edite ou compartilhe os textos diretamente pelo Drive
    const docs = project.contentRepository || [];
    for (const doc of docs) {
      const safeTitle = (doc.title || "TEXTO")
        .replace(/[\\/:*?"<>|]/g, "_")
        .trim();
      const fileName = `[Acervo] ${safeTitle}.md`;
      const fileHeader = `---
title: "${doc.title}"
category: "${doc.category || "GERAL"}"
sourceFileName: "${doc.sourceFileName || ""}"
wordCount: ${doc.wordCount || 0}
updatedAt: "${doc.updatedAt || now}"
---

${doc.rawContent}
`;
      await uploadOrUpdateFile(
        token,
        folderId,
        fileName,
        "text/markdown",
        fileHeader
      );
    }

    localStorage.setItem(GD_LAST_SYNC_KEY, now);
    notifyStatusChanged();

    return { success: true, syncedAt: now };
  } catch (err: any) {
    console.error("Erro ao sincronizar com Google Drive:", err);
    return {
      success: false,
      syncedAt: "",
      error: err?.message || "Erro desconhecido na sincronização.",
    };
  }
}

/**
 * Puxa o projeto mais recente diretamente da pasta do Google Drive
 */
export async function fetchProjectFromGoogleDrive(): Promise<{
  project: MagazineProject | null;
  syncedAt: string;
  error?: string;
}> {
  const token = getValidGoogleAccessToken();
  if (!token) {
    return { project: null, syncedAt: "", error: "Google Drive não conectado." };
  }

  try {
    const folderId = await ensureDedicatedFolder(token);

    // Buscar o arquivo mestre
    const query = encodeURIComponent(
      `name = '${MASTER_PROJECT_FILENAME}' and '${folderId}' in parents and trashed = false`
    );
    const searchRes = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,modifiedTime)&spaces=drive`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!searchRes.ok) {
      throw new Error("Falha ao buscar projeto no Google Drive.");
    }

    const data = await searchRes.json();
    if (!data.files || data.files.length === 0) {
      return { project: null, syncedAt: "", error: "Projeto ainda não salvo no Drive." };
    }

    const fileId = data.files[0].id;
    const modifiedTime = data.files[0].modifiedTime || new Date().toISOString();

    // Baixar o conteúdo do arquivo
    const contentRes = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!contentRes.ok) {
      throw new Error("Falha ao baixar conteúdo do projeto.");
    }

    const projectData = (await contentRes.json()) as MagazineProject;
    return {
      project: projectData,
      syncedAt: modifiedTime,
    };
  } catch (err: any) {
    console.error("Erro ao recuperar do Google Drive:", err);
    return {
      project: null,
      syncedAt: "",
      error: err?.message || "Falha ao recuperar do Drive.",
    };
  }
}

/**
/**
 * Retorna a URL direta para abrir a pasta dedicada no Google Drive
 */
export function getGoogleDriveFolderUrl(folderId?: string | null): string {
  const id =
    folderId ||
    (typeof window !== "undefined"
      ? localStorage.getItem(GD_FOLDER_ID_KEY)
      : null);
  if (id) {
    return `https://drive.google.com/drive/folders/${id}`;
  }
  return "https://drive.google.com/drive/my-drive";
}

export interface PullFromDriveResult {
  newDocs: RepositoryDocument[];
  updatedDocs: RepositoryDocument[];
  totalFound: number;
}

/**
 * Puxa e sincroniza arquivos de texto (.txt, .md) diretamente da pasta do Google Drive
 */
export async function pullNewTextsFromGoogleDrive(
  currentDocs: RepositoryDocument[]
): Promise<PullFromDriveResult> {
  const token = getValidGoogleAccessToken();
  if (!token) return { newDocs: [], updatedDocs: [], totalFound: 0 };

  const folderId = await ensureDedicatedFolder(token);

  // Listar arquivos que não sejam o arquivo mestre JSON
  const query = encodeURIComponent(
    `'${folderId}' in parents and mimeType != 'application/vnd.google-apps.folder' and name != '${MASTER_PROJECT_FILENAME}' and trashed = false`
  );
  const listRes = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,modifiedTime,mimeType)&spaces=drive`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!listRes.ok) return { newDocs: [], updatedDocs: [], totalFound: 0 };
  const data = await listRes.json();
  const files: { id: string; name: string; modifiedTime: string }[] =
    data.files || [];

  const existingMap = new Map<string, RepositoryDocument>();
  currentDocs.forEach((d) => {
    existingMap.set(d.title.trim().toLowerCase(), d);
  });

  const newDocs: RepositoryDocument[] = [];
  const updatedDocs: RepositoryDocument[] = [];

  for (const file of files) {
    const cleanTitle = file.name
      .replace(/^\[Acervo\]\s*/i, "")
      .replace(/^\[Materia\]\s*/i, "")
      .replace(/\.[^/.]+$/, "")
      .trim()
      .toUpperCase();

    const existingDoc = existingMap.get(cleanTitle.toLowerCase());
    const fileTime = new Date(file.modifiedTime || 0).getTime();
    const docTime = existingDoc ? new Date(existingDoc.updatedAt || 0).getTime() : 0;

    // Se já existe e não foi modificado mais recentemente no Drive, pular
    if (existingDoc && fileTime <= docTime) {
      continue;
    }

    try {
      const textRes = await fetch(
        `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (textRes.ok) {
        let rawContent = await textRes.text();
        // Se tiver frontmatter, extrair o conteúdo limpo
        const frontmatterMatch = rawContent.match(/^---\n[\s\S]*?\n---\n/);
        if (frontmatterMatch) {
          rawContent = rawContent.slice(frontmatterMatch[0].length).trim();
        }

        const words = rawContent
          .trim()
          .split(/\s+/)
          .filter(Boolean).length;

        if (existingDoc) {
          // Atualizar texto existente com a versão mais recente do Drive
          updatedDocs.push({
            ...existingDoc,
            rawContent,
            wordCount: words,
            updatedAt: file.modifiedTime || new Date().toISOString(),
          });
        } else {
          // Novo texto adicionado ao acervo
          newDocs.push({
            id: `gdoc-${file.id}`,
            title: cleanTitle,
            rawContent,
            category: "GERAL",
            sourceFileName: file.name,
            wordCount: words,
            status: "draft",
            createdAt: file.modifiedTime || new Date().toISOString(),
            updatedAt: file.modifiedTime || new Date().toISOString(),
          });
        }
      }
    } catch (e) {
      console.warn("Aviso ao baixar texto do Drive:", file.name, e);
    }
  }

  return { newDocs, updatedDocs, totalFound: files.length };
}

/**
 * Salva um único documento do acervo diretamente no Google Drive
 */
export async function uploadSingleDocumentToGoogleDrive(
  doc: RepositoryDocument
): Promise<boolean> {
  const token = getValidGoogleAccessToken();
  if (!token) return false;

  try {
    const folderId = await ensureDedicatedFolder(token);
    const safeTitle = (doc.title || "TEXTO")
      .replace(/[\\/:*?"<>|]/g, "_")
      .trim();
    const fileName = `[Acervo] ${safeTitle}.md`;
    const fileHeader = `---
title: "${doc.title}"
category: "${doc.category || "GERAL"}"
sourceFileName: "${doc.sourceFileName || ""}"
wordCount: ${doc.wordCount || 0}
updatedAt: "${doc.updatedAt || new Date().toISOString()}"
---

${doc.rawContent}
`;

    await uploadOrUpdateFile(
      token,
      folderId,
      fileName,
      "text/markdown",
      fileHeader
    );
    return true;
  } catch (err) {
    console.warn("Aviso ao salvar documento no Drive:", err);
    return false;
  }
}

/**
 * Helper interno: Cria ou atualiza um arquivo na pasta do Google Drive via multipart upload
 */
async function uploadOrUpdateFile(
  token: string,
  folderId: string,
  fileName: string,
  contentType: string,
  content: string
): Promise<string> {
  // Verificar se já existe arquivo com esse nome na pasta
  const query = encodeURIComponent(
    `name = '${fileName.replace(/'/g, "\\'")}' and '${folderId}' in parents and trashed = false`
  );
  const searchRes = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id)&spaces=drive`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  let existingId: string | null = null;
  if (searchRes.ok) {
    const data = await searchRes.json();
    if (data.files && data.files.length > 0) {
      existingId = data.files[0].id;
    }
  }

  if (existingId) {
    // Atualizar arquivo existente
    const updateRes = await fetch(
      `https://www.googleapis.com/upload/drive/v3/files/${existingId}?uploadType=media`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": contentType,
        },
        body: content,
      }
    );
    if (!updateRes.ok) {
      throw new Error(`Falha ao atualizar arquivo '${fileName}' no Drive.`);
    }
    return existingId;
  }

  // Criar novo arquivo usando multipart/related
  const boundary = "-------314159265358979323846";
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const metadata = {
    name: fileName,
    parents: [folderId],
    mimeType: contentType,
  };

  const multipartRequestBody =
    delimiter +
    "Content-Type: application/json; charset=UTF-8\r\n\r\n" +
    JSON.stringify(metadata) +
    delimiter +
    `Content-Type: ${contentType}\r\n\r\n` +
    content +
    closeDelimiter;

  const createRes = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `multipart/related; boundary=${boundary}`,
      },
      body: multipartRequestBody,
    }
  );

  if (!createRes.ok) {
    const errText = await createRes.text();
    throw new Error(`Falha ao enviar arquivo '${fileName}' para o Drive: ${errText}`);
  }

  const result = await createRes.json();
  return result.id;
}
