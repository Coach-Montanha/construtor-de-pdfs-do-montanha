import React, { useState } from "react";
import {
  MagazineProject,
  RepositoryDocument,
  Article,
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
  Plus,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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
  const documents = project.contentRepository || [];

  const filteredDocs = documents.filter((doc) => {
    return (
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.rawContent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
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

        {/* Search Bar */}
        <div className="relative my-3">
          <Search className="w-4 h-4 absolute left-3 top-2.5 opacity-50" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar nos artigos e rascunhos do acervo..."
            className="theme-app-input pl-9 text-xs h-9 border-2 w-full"
          />
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
              Nenhum texto corresponde à pesquisa "{searchQuery}".
            </div>
          ) : (
            filteredDocs.map((doc) => {
              const isPublished = doc.status === "published";
              return (
                <div
                  key={doc.id}
                  className={`theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col justify-between space-y-2.5 shadow-xs hover:border-amber-500 ${
                    isPublished ? "border-emerald-500/40 bg-emerald-500/5" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                        {doc.category || "GERAL"}
                      </span>
                      {doc.sourceFileName && (
                        <span className="text-[9px] font-mono opacity-60 flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {doc.sourceFileName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[9.5px] font-bold text-amber-600">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {doc.wordCount} palavras
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{Math.max(1, Math.round(doc.wordCount / 130))} min
                      </span>
                      {isPublished && (
                        <span className="bg-emerald-500 text-white text-[8px] font-black px-1.5 py-0.2 rounded uppercase ml-1 flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" />
                          PUBLICADO
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
                      <FileDown className="w-3.5 h-3.5 text-amber-500" />
                      <span>Importar Direto (Manual)</span>
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
                      <span>⚡ Analisar & Diagramar com IA</span>
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
