import { MagazineProject } from "../types/magazine";
import { INITIAL_MAGAZINE_PROJECT } from "./sample-data";
import { calculateMagazineTotalPages, countWords } from "./magazine-utils";

export interface ArchivedEdition {
  id: string;
  editionNumber: string;
  title: string;
  subtitle: string;
  date: string;
  themeId: string;
  coverImage?: string;
  mainHeadline: string;
  totalPages: number;
  totalArticles: number;
  totalWords: number;
  status: "approved" | "published" | "archived";
  notes?: string;
  approvedAt: string;
  projectSnapshot: MagazineProject;
}

const ARCHIVE_STORAGE_KEY = "montanha_magazine_editions_archive";

/**
 * Retorna uma edição modelo inicial para preencher o arquivo caso esteja vazio
 */
function createInitialSampleEdition(): ArchivedEdition {
  const proj = INITIAL_MAGAZINE_PROJECT;
  const totalPages = calculateMagazineTotalPages(proj);
  const totalWords = proj.articles.reduce((acc, a) => acc + countWords(a.content), 0);

  return {
    id: "ed-montanha-01-approved",
    editionNumber: proj.editionNumber || "01",
    title: proj.title || "Revista Montanha",
    subtitle: proj.subtitle || "Força, Biomecânica & Performance Sem Atalhos",
    date: proj.date || "Setembro 2026",
    themeId: proj.themeId,
    coverImage: proj.coverConfig.backgroundImage,
    mainHeadline: proj.coverConfig.mainHeadline,
    totalPages,
    totalArticles: proj.articles.length,
    totalWords,
    status: "approved",
    notes: "Edição de estreia aprovada para diagramação impressa e publicação digital.",
    approvedAt: new Date().toISOString(),
    projectSnapshot: JSON.parse(JSON.stringify(proj)),
  };
}

/**
 * Obtém todas as edições aprovadas e arquivadas
 */
export function getArchivedEditions(): ArchivedEdition[] {
  if (typeof window === "undefined") return [createInitialSampleEdition()];

  try {
    const raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
    if (!raw) {
      const initialList = [createInitialSampleEdition()];
      localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(initialList));
      return initialList;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    const initialList = [createInitialSampleEdition()];
    localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(initialList));
    return initialList;
  } catch (err) {
    console.error("Erro ao ler arquivo de edições:", err);
    return [createInitialSampleEdition()];
  }
}

/**
 * Salva a lista de edições arquivadas
 */
function saveArchivedList(list: ArchivedEdition[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent("montanha-archive-changed"));
  } catch (err) {
    console.error("Erro ao salvar arquivo de edições:", err);
  }
}

/**
 * Aprova e arquiva o projeto atual
 */
export function archiveCurrentProject(
  project: MagazineProject,
  options?: {
    notes?: string;
    status?: "approved" | "published" | "archived";
    customEditionNumber?: string;
  }
): ArchivedEdition {
  const currentList = getArchivedEditions();
  const totalPages = calculateMagazineTotalPages(project);
  const totalWords = project.articles.reduce((acc, a) => acc + countWords(a.content), 0);

  const editionNumber = options?.customEditionNumber || project.editionNumber || `0${currentList.length + 1}`;
  const now = new Date().toISOString();

  // Verifica se já existe uma edição com este mesmo ID ou número para atualizar ou criar nova
  const existingIdx = currentList.findIndex(
    (e) => e.editionNumber.trim().toLowerCase() === editionNumber.trim().toLowerCase()
  );

  const newEntry: ArchivedEdition = {
    id: existingIdx >= 0 ? currentList[existingIdx]!.id : `edition-${Date.now()}`,
    editionNumber,
    title: project.title,
    subtitle: project.subtitle,
    date: project.date,
    themeId: project.themeId,
    coverImage: project.coverConfig.backgroundImage,
    mainHeadline: project.coverConfig.mainHeadline,
    totalPages,
    totalArticles: project.articles.length,
    totalWords,
    status: options?.status || "approved",
    notes: options?.notes || "Edição aprovada pelo Coach Montanha.",
    approvedAt: now,
    projectSnapshot: JSON.parse(JSON.stringify(project)),
  };

  let updatedList: ArchivedEdition[];
  if (existingIdx >= 0) {
    updatedList = [...currentList];
    updatedList[existingIdx] = newEntry;
  } else {
    updatedList = [newEntry, ...currentList];
  }

  saveArchivedList(updatedList);
  return newEntry;
}

/**
 * Exclui uma edição do arquivo
 */
export function deleteArchivedEdition(id: string): void {
  const currentList = getArchivedEditions();
  const filtered = currentList.filter((e) => e.id !== id);
  saveArchivedList(filtered);
}

/**
 * Atualiza campos parciais de uma edição arquivada (ex: status, notas)
 */
export function updateArchivedEdition(
  id: string,
  updates: Partial<Pick<ArchivedEdition, "status" | "notes" | "title" | "date">>
): void {
  const currentList = getArchivedEditions();
  const updated = currentList.map((item) => (item.id === id ? { ...item, ...updates } : item));
  saveArchivedList(updated);
}

/**
 * Duplica uma edição arquivada como base para a próxima edição
 */
export function duplicateEditionForNextRelease(sourceEdition: ArchivedEdition): MagazineProject {
  const snapshot: MagazineProject = JSON.parse(JSON.stringify(sourceEdition.projectSnapshot));
  
  // Calcular próximo número
  const numInt = parseInt(sourceEdition.editionNumber.replace(/\D/g, ""), 10);
  const nextNum = isNaN(numInt) ? "02" : numInt + 1 < 10 ? `0${numInt + 1}` : `${numInt + 1}`;

  const currentYear = new Date().getFullYear();
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const currentMonth = months[new Date().getMonth()] ?? "Janeiro";

  const duplicatedProject: MagazineProject = {
    ...snapshot,
    id: `proj-edition-${nextNum}-${Date.now()}`,
    editionNumber: nextNum,
    date: `${currentMonth} ${currentYear}`,
    coverConfig: {
      ...snapshot.coverConfig,
      issueBadge: `EDIÇÃO #${nextNum}`,
      issueDate: `${currentMonth.toUpperCase()} ${currentYear}`,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return duplicatedProject;
}

/**
 * Exporta todo o acervo de edições em arquivo JSON
 */
export function exportAllEditionsArchive(): void {
  const list = getArchivedEditions();
  const jsonStr = JSON.stringify(list, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `arquivo-edicoes-montanha-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
