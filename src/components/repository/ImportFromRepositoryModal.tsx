import React, { useState, useMemo } from "react";
import {
  MagazineProject,
  RepositoryDocument,
} from "../../types/magazine";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  FolderOpen,
  Search,
  Wand2,
  FileDown,
  FileText,
  Clock,
  Check,
  ArrowRight,
  Archive,
  Sparkles,
  Copy,
} from "lucide-react";
import { getDocumentUsageTracker } from "../../lib/editions-archive";

interface ImportFromRepositoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
  onImportWithAi: (doc: RepositoryDocument) => void;
  onImportDirect: (doc: RepositoryDocument) => void;
  onNavigateToAcervo: () => void;
}

export const ImportFromRepositoryModal: React.FC<ImportFromRepositoryModalProps> = ({
  isOpen,
  onClose,
  project,
  onImportWithAi,
  onImportDirect,
  onNavigateToAcervo,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterMode, setFilterMode] = useState<"all" | "unused" | "current" | "previous">("all");
  const documents = project.contentRepository || [];

  const docsWithTracker = useMemo(() => {
    return documents.map((doc) => {
      const tracker = getDocumentUsageTracker(doc, project);
      return { doc, tracker };
    });
  }, [documents, project]);

  const unusedCount = docsWithTracker.filter((item) => item.tracker.isUnusedDraft).length;
  const currentCount = docsWithTracker.filter((item) => item.tracker.isInCurrentMagazine).length;
  const previousCount = docsWithTracker.filter((item) => item.tracker.previousEditions.length > 0).length;

  const filteredDocs = docsWithTracker.filter(({ doc, tracker }) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.rawContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (filterMode === "unused") return tracker.isUnusedDraft;
    if (filterMode === "current") return tracker.isInCurrentMagazine;
    if (filterMode === "previous") return tracker.previousEditions.length > 0;
    return true;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="theme-app-card max-w-3xl max-h-[85vh] overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
              <FolderOpen className="w-5 h-5 text-amber-500" />
              <span>Importar Artigo do Acervo Editorial</span>
            </DialogTitle>
            <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
              {documents.length} DOCUMENTOS NO ACERVO
            </span>
          </div>
          <p className="text-xs opacity-75 mt-0.5">
            Selecione um texto do seu banco de arquivos para auto-diagramar com IA ou carregar diretamente no editor da revista.
          </p>
        </DialogHeader>

        {/* Search & Filter Bar */}
        <div className="space-y-2.5 my-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 opacity-50" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar nos artigos e rascunhos do acervo..."
              className="theme-app-input pl-9 text-xs h-9 border-2 w-full"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold opacity-75 uppercase mr-1">Filtrar:</span>
            <button
              type="button"
              onClick={() => setFilterMode("all")}
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer ${
                filterMode === "all" ? "bg-amber-400 text-black font-black border-black" : "opacity-70 hover:opacity-100"
              }`}
            >
              Todos ({documents.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("unused")}
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                filterMode === "unused" ? "bg-amber-400 text-black font-black border-black" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Sparkles className="w-2.5 h-2.5 text-amber-600" />
              <span>Inéditos ({unusedCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("current")}
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                filterMode === "current" ? "bg-emerald-600 text-white font-black border-emerald-800" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Check className="w-2.5 h-2.5 stroke-[3]" />
              <span>Na Revista ({currentCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("previous")}
              className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                filterMode === "previous" ? "bg-indigo-600 text-white font-black border-indigo-800" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Archive className="w-2.5 h-2.5" />
              <span>Edições Anteriores ({previousCount})</span>
            </button>
          </div>
        </div>

        {/* Document Cards List */}
        <div className="space-y-3 my-2 max-h-[50vh] overflow-y-auto custom-scrollbar pr-1">
          {documents.length === 0 ? (
            <div className="theme-app-card-subtle p-8 rounded-xl border-2 text-center space-y-3">
              <FolderOpen className="w-10 h-10 text-amber-500 mx-auto opacity-50" />
              <h4 className="text-sm font-black uppercase">Seu acervo de textos está vazio</h4>
              <p className="text-xs opacity-75 max-w-sm mx-auto">
                Você ainda não adicionou nenhum documento ao acervo. Faça upload de arquivos <code>.txt</code> / <code>.md</code> ou crie novos rascunhos.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => {
                    onClose();
                    onNavigateToAcervo();
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black cursor-pointer shadow-xs"
                >
                  <span>Ir para o Acervo & Textos</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          ) : filteredDocs.length === 0 ? (
            <div className="text-center py-8 opacity-75 text-xs font-bold">
              Nenhum texto corresponde aos filtros ativos.
            </div>
          ) : (
            filteredDocs.map(({ doc, tracker }) => {
              const cardBorder = tracker.isInCurrentMagazine
                ? "border-emerald-500/70 bg-emerald-500/5 ring-1 ring-emerald-500/20"
                : tracker.previousEditions.length > 0
                ? "border-indigo-400/70 bg-indigo-500/5 ring-1 ring-indigo-400/20"
                : "";

              return (
                <div
                  key={doc.id}
                  className={`theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col justify-between space-y-2.5 shadow-xs hover:border-amber-500 ${cardBorder}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                        {doc.category || "GERAL"}
                      </span>
                      {doc.sourceFileName && (
                        <span className="text-[9px] font-mono opacity-60 flex items-center gap-1 truncate max-w-[130px]">
                          <FileText className="w-3 h-3 shrink-0" />
                          <span className="truncate">{doc.sourceFileName}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[9.5px] font-bold text-amber-600 flex-wrap">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {doc.wordCount} palavras
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{Math.max(1, Math.round(doc.wordCount / 130))} min
                      </span>

                      {tracker.isInCurrentMagazine ? (
                        <span className="bg-emerald-600 text-white text-[8.5px] font-black px-2 py-0.5 rounded uppercase ml-1 flex items-center gap-1 shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                          NA REVISTA {tracker.currentPageNumber ? `(PÁG. ${tracker.currentPageNumber})` : ""}
                        </span>
                      ) : tracker.previousEditions.length > 0 ? (
                        <span className="bg-indigo-600 text-white text-[8.5px] font-black px-2 py-0.5 rounded uppercase ml-1 flex items-center gap-1 shadow-xs">
                          <Archive className="w-2.5 h-2.5" />
                          PUBLICADO NA {tracker.previousEditions.map((e) => `ED. #${e.editionNumber}`).join(", ")}
                        </span>
                      ) : (
                        <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[8.5px] font-bold px-2 py-0.5 rounded uppercase ml-1 border border-slate-300 dark:border-slate-700 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                          <span>INÉDITO</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-black text-sm uppercase tracking-tight leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs opacity-75 line-clamp-2 mt-1 leading-relaxed">
                      {doc.rawContent}
                    </p>
                  </div>

                  <div className="pt-2 border-t flex flex-wrap items-center justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        onClose();
                        onImportDirect(doc);
                      }}
                      className="h-8 text-xs font-bold border-2 border-current cursor-pointer flex items-center gap-1"
                    >
                      {tracker.previousEditions.length > 0 && !tracker.isInCurrentMagazine ? (
                        <Copy className="w-3.5 h-3.5 text-indigo-500" />
                      ) : (
                        <FileDown className="w-3.5 h-3.5 text-amber-500" />
                      )}
                      <span>
                        {tracker.isInCurrentMagazine
                          ? "Importar Novamente"
                          : tracker.previousEditions.length > 0
                          ? "Reutilizar da Ed. Anterior"
                          : "Importar Direto (Manual)"}
                      </span>
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => {
                        onClose();
                        onImportWithAi(doc);
                      }}
                      className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-black" />
                      <span>⚡ {tracker.isInCurrentMagazine ? "Rediagramar com IA" : "Analisar & Diagramar com IA"}</span>
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <DialogFooter className="border-t pt-3 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => {
              onClose();
              onNavigateToAcervo();
            }}
            className="text-xs font-bold hover:underline cursor-pointer flex items-center gap-1 text-amber-600"
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Gerenciar / Fazer Upload no Acervo</span>
          </Button>

          <Button variant="outline" onClick={onClose} className="h-8 text-xs font-bold border-2">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
