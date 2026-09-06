import React, { useState, useEffect } from "react";
import { MagazineProject } from "../../types/magazine";
import {
  ArchivedEdition,
  getArchivedEditions,
  archiveCurrentProject,
  deleteArchivedEdition,
  duplicateEditionForNextRelease,
  exportAllEditionsArchive,
  updateArchivedEdition,
} from "../../lib/editions-archive";
import { exportProjectToFile } from "../../lib/cloud-sync";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import {
  BookOpen,
  CheckCircle2,
  Copy,
  Download,
  Trash2,
  Edit3,
  Calendar,
  Layers,
  FileText,
  Sparkles,
  Archive,
  FolderArchive,
  ArrowRight,
  Plus,
  Clock,
  Check,
  Palette,
} from "lucide-react";

interface EditionsArchiveViewProps {
  currentProject: MagazineProject;
  onLoadEditionIntoStudio: (project: MagazineProject) => void;
}

export const EditionsArchiveView: React.FC<EditionsArchiveViewProps> = ({
  currentProject,
  onLoadEditionIntoStudio,
}) => {
  const [editions, setEditions] = useState<ArchivedEdition[]>([]);
  const [isArchiveModalOpen, setIsArchiveModalOpen] = useState(false);
  const [archiveNotes, setArchiveNotes] = useState("");
  const [archiveStatus, setArchiveStatus] = useState<"approved" | "published" | "archived">("approved");
  const [customEdNumber, setCustomEdNumber] = useState(currentProject.editionNumber || "01");

  // Estado para criação guiada da Próxima Edição
  const [isNextEditionModalOpen, setIsNextEditionModalOpen] = useState(false);
  const [targetEditionForDuplicate, setTargetEditionForDuplicate] = useState<ArchivedEdition | MagazineProject | null>(null);
  const [nextEditionNum, setNextEditionNum] = useState("02");
  const [nextEditionDate, setNextEditionDate] = useState("Outubro 2026");
  const [duplicateMode, setDuplicateMode] = useState<"keep-articles" | "clean-articles">("keep-articles");

  // Reload archive on mount and custom events
  const refreshList = () => {
    setEditions(getArchivedEditions());
  };

  useEffect(() => {
    refreshList();
    window.addEventListener("montanha-archive-changed", refreshList);
    return () => window.removeEventListener("montanha-archive-changed", refreshList);
  }, []);

  const handleOpenArchiveCurrent = () => {
    setCustomEdNumber(currentProject.editionNumber || "01");
    setArchiveNotes(`Edição aprovada para impressão e distribuição digital em ${new Date().toLocaleDateString("pt-BR")}.`);
    setIsArchiveModalOpen(true);
  };

  const handleConfirmArchiveCurrent = () => {
    archiveCurrentProject(currentProject, {
      notes: archiveNotes,
      status: archiveStatus,
      customEditionNumber: customEdNumber,
    });
    setIsArchiveModalOpen(false);
    refreshList();
  };

  const handleLoadEdition = (edition: ArchivedEdition) => {
    const confirm = window.confirm(
      `Deseja abrir a Edição #${edition.editionNumber} ("${edition.title}") no editor?\n\nTodas as matérias, capas e configurações serão carregadas no estúdio para reedição e republicação.`
    );
    if (confirm) {
      onLoadEditionIntoStudio(edition.projectSnapshot);
    }
  };

  const handleOpenNextEditionModal = (source: ArchivedEdition | MagazineProject) => {
    setTargetEditionForDuplicate(source);
    const curNum = (source as { editionNumber?: string }).editionNumber || "01";
    const numInt = parseInt(curNum.replace(/\D/g, ""), 10);
    const nNum = isNaN(numInt) ? "02" : numInt + 1 < 10 ? `0${numInt + 1}` : `${numInt + 1}`;
    setNextEditionNum(nNum);

    const currentYear = new Date().getFullYear();
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const nextMonthIdx = (new Date().getMonth() + 1) % 12;
    setNextEditionDate(`${months[nextMonthIdx]} ${currentYear}`);
    setDuplicateMode("keep-articles");
    setIsNextEditionModalOpen(true);
  };

  const handleConfirmCreateNextEdition = () => {
    if (!targetEditionForDuplicate) return;

    // Arquiva a edição atual no acervo automaticamente para segurança total
    archiveCurrentProject(currentProject, {
      notes: `Edição #${currentProject.editionNumber || "01"} arquivada automaticamente antes de iniciar a Edição #${nextEditionNum}.`,
      status: "approved",
      customEditionNumber: currentProject.editionNumber || "01",
    });

    const newProj = duplicateEditionForNextRelease(targetEditionForDuplicate, {
      customNextNumber: nextEditionNum,
      customDate: nextEditionDate,
      mode: duplicateMode,
    });

    setIsNextEditionModalOpen(false);
    refreshList();
    onLoadEditionIntoStudio(newProj);
  };

  const handleDelete = (edition: ArchivedEdition) => {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir a Edição #${edition.editionNumber} do arquivo?\nEsta ação não poderá ser desfeita.`
    );
    if (confirm) {
      deleteArchivedEdition(edition.id);
      refreshList();
    }
  };

  // Stats calculation
  const totalEditions = editions.length;
  const totalPagesSum = editions.reduce((acc, e) => acc + (e.totalPages || 0), 0);
  const totalArticlesSum = editions.reduce((acc, e) => acc + (e.totalArticles || 0), 0);

  return (
    <div className="space-y-6 font-sans">
      {/* Header Banner */}
      <div className="theme-app-card p-5 rounded-xl border-2 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
              REPOSITÓRIO DE PUBLICAÇÕES
            </span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase flex items-center gap-1">
              <FolderArchive className="w-3.5 h-3.5" />
              <span>ARQUIVO DE EDIÇÕES APROVADAS</span>
            </span>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Acervo de Edições Produzidas & Histórico Editorial
          </h2>
          <p className="text-xs opacity-75 mt-0.5 max-w-2xl">
            Acesse qualquer edição já aprovada para reabrir no estúdio, fazer revisões, atualizar matérias ou criar uma nova edição sequencial para futuras republicações.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            onClick={() => handleOpenNextEditionModal(currentProject)}
            className="h-9 bg-black text-amber-400 hover:bg-zinc-900 font-black text-xs border-2 border-amber-500 flex items-center gap-1.5 shadow-xs cursor-pointer"
            title="Criar a próxima edição sequencial utilizando a estrutura atual como modelo"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Criar Próxima Edição a Partir Desta</span>
          </Button>

          <Button
            size="sm"
            onClick={handleOpenArchiveCurrent}
            className="h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>Aprovar & Arquivar Edição Atual</span>
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={exportAllEditionsArchive}
            className="h-9 font-bold text-xs border-2 flex items-center gap-1.5 cursor-pointer"
            title="Exportar backup completo de todas as edições em arquivo .JSON"
          >
            <Download className="w-3.5 h-3.5 text-amber-500" />
            <span>Backup do Acervo</span>
          </Button>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="theme-app-card p-3.5 rounded-xl border-2 shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">EDIÇÕES NO ARQUIVO</span>
          <div className="text-xl font-black mt-0.5 flex items-center gap-2">
            <Archive className="w-4 h-4 text-amber-500" />
            <span>{totalEditions}</span>
          </div>
          <span className="text-[10px] opacity-75">Exemplares salvos</span>
        </div>

        <div className="theme-app-card p-3.5 rounded-xl border-2 shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">TOTAL DE PÁGINAS</span>
          <div className="text-xl font-black mt-0.5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>{totalPagesSum} Páginas</span>
          </div>
          <span className="text-[10px] opacity-75">Diagramadas no estúdio</span>
        </div>

        <div className="theme-app-card p-3.5 rounded-xl border-2 shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">MATÉRIAS ARQUIVADAS</span>
          <div className="text-xl font-black mt-0.5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-500" />
            <span>{totalArticlesSum} Artigos</span>
          </div>
          <span className="text-[10px] opacity-75">Textos catalogados</span>
        </div>

        <div className="theme-app-card p-3.5 rounded-xl border-2 shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase opacity-75 block">EDIÇÃO EM PRODUÇÃO</span>
          <div className="text-xl font-black mt-0.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Ed. #{currentProject.editionNumber || "01"}</span>
          </div>
          <span className="text-[10px] opacity-75">Aberta no editor</span>
        </div>
      </div>

      {/* Grid of Archived Editions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Edições Aprovadas & Catalogadas ({editions.length})</span>
          </h3>
          <span className="text-[11px] opacity-75 font-mono">
            Clique em "Reeditar" para carregar no estúdio
          </span>
        </div>

        {editions.length === 0 ? (
          <div className="theme-app-card p-8 rounded-xl border-2 text-center space-y-3">
            <FolderArchive className="w-10 h-10 text-amber-500 mx-auto opacity-75" />
            <h4 className="font-bold text-sm uppercase">Nenhuma edição arquivada ainda</h4>
            <p className="text-xs opacity-75 max-w-md mx-auto">
              Quando você aprovar uma edição da revista, ela aparecerá aqui com sua capa, matérias e dados prontos para reedição e republicação.
            </p>
            <Button
              size="sm"
              onClick={handleOpenArchiveCurrent}
              className="bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black"
            >
              Aprovar Edição Atual Agora
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {editions.map((edition) => (
              <div
                key={edition.id}
                className="theme-app-card p-4 rounded-xl border-2 space-y-4 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-all"
              >
                <div className="space-y-3">
                  {/* Top info row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-400 text-black font-mono font-black text-xs px-2.5 py-1 rounded border border-black uppercase">
                        EDIÇÃO #{edition.editionNumber}
                      </span>
                      <span className="text-[11px] font-bold opacity-75 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        <span>{edition.date}</span>
                      </span>
                    </div>

                    <span
                      className={`text-[9px] font-mono font-black px-2 py-0.5 rounded border uppercase ${
                        edition.status === "approved"
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                          : edition.status === "published"
                          ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30"
                          : "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/30"
                      }`}
                    >
                      {edition.status === "approved"
                        ? "✓ APROVADA"
                        : edition.status === "published"
                        ? "● PUBLICADA"
                        : "ARQUIVADA"}
                    </span>
                  </div>

                  {/* Thumbnail and Title */}
                  <div className="flex gap-3">
                    {edition.coverImage ? (
                      <div className="w-20 h-28 rounded-lg overflow-hidden border-2 border-current shrink-0 bg-slate-900 shadow-xs relative">
                        <img
                          src={edition.coverImage}
                          alt={`Capa Edição ${edition.editionNumber}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/70 p-0.5 text-[8px] font-black text-amber-400 font-mono text-center truncate">
                          ED. #{edition.editionNumber}
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-28 rounded-lg border-2 border-dashed border-current flex flex-col items-center justify-center shrink-0 bg-amber-400/5">
                        <BookOpen className="w-6 h-6 text-amber-500" />
                        <span className="text-[9px] font-mono font-bold mt-1">ED. #{edition.editionNumber}</span>
                      </div>
                    )}

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h4 className="font-black text-sm uppercase leading-tight truncate">
                        {edition.title}
                      </h4>
                      <p className="text-xs opacity-75 line-clamp-2 leading-snug">
                        {edition.subtitle}
                      </p>
                      {edition.mainHeadline && (
                        <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 line-clamp-1">
                          "{edition.mainHeadline}"
                        </div>
                      )}

                      {/* Metrics tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold">
                          {edition.totalPages} Págs A4
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold">
                          {edition.totalArticles} Matérias
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold">
                          {edition.totalWords} palavras
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Observações */}
                  {edition.notes && (
                    <div className="p-2.5 rounded-lg theme-app-card-subtle text-[11px] opacity-85 border">
                      <span className="font-bold block text-[9px] font-mono uppercase text-amber-500 mb-0.5">
                        NOTAS DO EDITOR:
                      </span>
                      {edition.notes}
                    </div>
                  )}
                </div>

                {/* Card action buttons */}
                <div className="pt-3 border-t flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Button
                      size="sm"
                      onClick={() => handleLoadEdition(edition)}
                      className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black flex items-center gap-1 cursor-pointer shadow-xs"
                      title="Carregar esta edição completa no estúdio para reedição ou republicação"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Reeditar no Estúdio</span>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleOpenNextEditionModal(edition)}
                      className="h-8 font-bold text-xs border-2 flex items-center gap-1 cursor-pointer"
                      title="Usar esta edição como matriz para a próxima edição sequencial"
                    >
                      <Copy className="w-3.5 h-3.5 text-amber-500" />
                      <span>Duplicar p/ Próxima</span>
                    </Button>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => exportProjectToFile(edition.projectSnapshot)}
                      className="h-8 px-2 border-2 cursor-pointer"
                      title="Baixar arquivo de backup (.JSON) desta edição"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(edition)}
                      className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-500/10 border-2 border-current cursor-pointer"
                      title="Excluir edição do acervo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Aprovar e Arquivar Edição Atual */}
      <Dialog open={isArchiveModalOpen} onOpenChange={setIsArchiveModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <span>Aprovar & Arquivar Edição Atual</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2 text-xs">
            <p className="opacity-80 leading-relaxed">
              Você está salvando um snapshot definitivo da edição atual. Ela ficará catalogada no seu acervo e poderá ser reaberta e reeditada a qualquer momento.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-[11px] font-bold">NÚMERO DA EDIÇÃO</Label>
                <Input
                  value={customEdNumber}
                  onChange={(e) => setCustomEdNumber(e.target.value)}
                  className="mt-1 font-mono font-bold"
                  placeholder="Ex: 01, 02..."
                />
              </div>

              <div>
                <Label className="text-[11px] font-bold">STATUS DESTE EXEMPLAR</Label>
                <select
                  value={archiveStatus}
                  onChange={(e) => setArchiveStatus(e.target.value as any)}
                  className="w-full mt-1 h-9 rounded-md border-2 border-current px-2.5 font-bold text-xs theme-app-input"
                >
                  <option value="approved">Aprovada para Publicação</option>
                  <option value="published">Publicada / Distribuída</option>
                  <option value="archived">Arquivada para Histórico</option>
                </select>
              </div>
            </div>

            <div>
              <Label className="text-[11px] font-bold">NOTAS & OBSERVAÇÕES DO EDITOR</Label>
              <Input
                value={archiveNotes}
                onChange={(e) => setArchiveNotes(e.target.value)}
                className="mt-1 text-xs"
                placeholder="Ex: Edição impressa finalizada, enviada para gráfica..."
              />
            </div>

            <div className="p-3 rounded-lg theme-app-card-subtle border text-[11px] space-y-1">
              <div className="font-bold flex items-center justify-between">
                <span>{currentProject.title}</span>
                <span className="font-mono text-amber-500">Edição #{customEdNumber}</span>
              </div>
              <div className="opacity-75">
                Contém {currentProject.articles.length} matérias e todas as configurações de capa, contracapa e tipografia.
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" size="sm" onClick={() => setIsArchiveModalOpen(false)}>
              Cancelar
            </Button>
            <Button
              size="sm"
              onClick={handleConfirmArchiveCurrent}
              className="bg-amber-400 hover:bg-amber-500 text-black font-black"
            >
              Salvar no Acervo de Edições
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal Assistente de Criação da Próxima Edição */}
      <Dialog open={isNextEditionModalOpen} onOpenChange={setIsNextEditionModalOpen}>
        <DialogContent className="theme-app-card max-w-lg p-6 border-2 shadow-2xl font-sans">
          <DialogHeader className="border-b-2 border-current pb-3">
            <DialogTitle className="text-base font-black flex items-center gap-2 uppercase">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Iniciar Nova Edição da Montanha Magazine</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 my-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300">
              ✓ <strong>Backup Automático:</strong> O conteúdo da sua edição atual será arquivado com segurança no acervo antes de iniciar a nova edição.
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs font-black uppercase">Número da Nova Edição</Label>
                <Input
                  value={nextEditionNum}
                  onChange={(e) => setNextEditionNum(e.target.value)}
                  placeholder="Ex: 02"
                  className="font-mono font-bold text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-black uppercase">Mês & Ano da Publicação</Label>
                <Input
                  value={nextEditionDate}
                  onChange={(e) => setNextEditionDate(e.target.value)}
                  placeholder="Ex: Outubro 2026"
                  className="font-bold text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-black uppercase">Como você prefere iniciar os artigos?</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div
                  onClick={() => setDuplicateMode("keep-articles")}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    duplicateMode === "keep-articles"
                      ? "border-amber-500 bg-amber-500/15"
                      : "theme-app-card-subtle hover:border-black/30"
                  }`}
                >
                  <div className="font-black text-xs flex items-center gap-1.5 mb-1">
                    <Copy className="w-3.5 h-3.5 text-amber-500" />
                    <span>Manter Artigos como Modelo</span>
                  </div>
                  <p className="text-[10.5px] opacity-75 leading-tight">
                    Mantém o esqueleto das 4 matérias para você apenas substituir os textos e fotos um por um.
                  </p>
                </div>

                <div
                  onClick={() => setDuplicateMode("clean-articles")}
                  className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    duplicateMode === "clean-articles"
                      ? "border-amber-500 bg-amber-500/15"
                      : "theme-app-card-subtle hover:border-black/30"
                  }`}
                >
                  <div className="font-black text-xs flex items-center gap-1.5 mb-1">
                    <FileText className="w-3.5 h-3.5 text-amber-500" />
                    <span>Estrutura Limpa</span>
                  </div>
                  <p className="text-[10.5px] opacity-75 leading-tight">
                    Mantém Capa, Expediente e Carta do Editor, e deixa 1 matéria base para você criar as novas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="border-t-2 border-current pt-3 flex items-center justify-between">
            <Button variant="ghost" onClick={() => setIsNextEditionModalOpen(false)} className="text-xs font-bold">
              Cancelar
            </Button>
            <Button
              onClick={handleConfirmCreateNextEdition}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-10 px-5 border-2 border-black shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Iniciar Edição #{nextEditionNum} no Estúdio</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
