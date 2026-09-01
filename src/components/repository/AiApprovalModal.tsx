import React, { useState } from "react";
import {
  Article,
  LayoutTemplate,
  RepositoryDocument,
} from "../../types/magazine";
import {
  EditorialAnalysisResult,
} from "../../lib/ai-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ImagePicker } from "../ui/image-picker";
import {
  Sparkles,
  CheckCircle2,
  Layout,
  Quote,
  Lightbulb,
  Layers,
  FileText,
  Wand2,
  Edit3,
  Sliders,
} from "lucide-react";

interface AiApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: EditorialAnalysisResult | null;
  sourceDoc: RepositoryDocument | null;
  onApprove: (article: Article, sourceDocId?: string) => void;
  onOpenAdvancedEditor: (draftArticle: Article) => void;
}

export const AiApprovalModal: React.FC<AiApprovalModalProps> = ({
  isOpen,
  onClose,
  analysis,
  sourceDoc,
  onApprove,
  onOpenAdvancedEditor,
}) => {
  if (!analysis) return null;

  const initialTitle = sourceDoc?.title?.trim()
    ? sourceDoc.title.trim().toUpperCase()
    : analysis.title;
  const initialCategory = sourceDoc?.category?.trim()
    ? sourceDoc.category.trim().toUpperCase()
    : analysis.category;

  const [title, setTitle] = useState<string>(initialTitle);
  const [subtitle, setSubtitle] = useState<string>(analysis.subtitle);
  const [category, setCategory] = useState<string>(initialCategory);
  const [author, setAuthor] = useState<string>(analysis.author);
  const [authorBio, setAuthorBio] = useState<string>(analysis.authorBio);
  const [pageSpan, setPageSpan] = useState<1 | 2>(analysis.recommendedPageSpan);
  const [layoutTemplate, setLayoutTemplate] = useState<LayoutTemplate>(
    analysis.recommendedTemplate as LayoutTemplate
  );
  const [heroImage, setHeroImage] = useState<string>(analysis.suggestedHeroImage);
  const [secondaryImage, setSecondaryImage] = useState<string>(
    analysis.suggestedSecondaryImage || ""
  );
  const [formattedContent, setFormattedContent] = useState<string>(
    analysis.formattedContent
  );
  const [pullQuotes, setPullQuotes] = useState<string[]>(analysis.pullQuotes);
  const [keyTakeaways, setKeyTakeaways] = useState<string[]>(analysis.keyTakeaways);

  // Synchronize when analysis or sourceDoc changes
  React.useEffect(() => {
    if (analysis) {
      const resolvedTitle = sourceDoc?.title?.trim()
        ? sourceDoc.title.trim().toUpperCase()
        : analysis.title;
      const resolvedCategory = sourceDoc?.category?.trim()
        ? sourceDoc.category.trim().toUpperCase()
        : analysis.category;

      setTitle(resolvedTitle);
      setSubtitle(analysis.subtitle);
      setCategory(resolvedCategory);
      setAuthor(analysis.author);
      setAuthorBio(analysis.authorBio);
      setPageSpan(analysis.recommendedPageSpan);
      setLayoutTemplate(analysis.recommendedTemplate as LayoutTemplate);
      setHeroImage(analysis.suggestedHeroImage);
      setSecondaryImage(analysis.suggestedSecondaryImage || "");
      setFormattedContent(analysis.formattedContent);
      setPullQuotes(analysis.pullQuotes);
      setKeyTakeaways(analysis.keyTakeaways);
    }
  }, [analysis, sourceDoc]);

  const handleCreateArticle = (): Article => {
    return {
      id: "art-" + Date.now(),
      title,
      subtitle,
      category,
      author,
      authorBio,
      authorPhoto:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage,
      heroImageCaption: "Registro editorial de alta performance // Montanha Media",
      heroImagePrompt: analysis.heroImagePrompt,
      secondaryImage: pageSpan === 2 ? secondaryImage : "",
      secondaryImageCaption: pageSpan === 2 ? "Detalhes técnicos do protocolo" : "",
      pageSpan,
      quotePlacement: "end",
      textDensity: "normal",
      content: formattedContent,
      pullQuotes,
      keyTakeaways,
      layoutTemplate,
      tags: [category, "Alta Performance"],
      estimatedReadTime: analysis.estimatedReadTime || 4,
      featuredOnCover: true,
      enabled: true,
    };
  };

  const handleConfirmApproval = () => {
    const newArt = handleCreateArticle();
    onApprove(newArt, sourceDoc?.id);
    onClose();
  };

  const handleEditFurther = () => {
    const newArt = handleCreateArticle();
    onOpenAdvancedEditor(newArt);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="theme-app-card max-w-4xl max-h-[92vh] overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Pedido de Aprovação da Diagramação por IA</span>
            </DialogTitle>
            <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
              DIAGNÓSTICO EDITORIAL
            </span>
          </div>
          <p className="text-xs opacity-75 mt-0.5">
            A IA avaliou o volume, tom e densidade do seu texto e propõe a estrutura abaixo para publicação no PDF.
          </p>
        </DialogHeader>

        {/* AI Rationale Diagnostic Banner */}
        <div className="my-2 p-3.5 rounded-xl border-2 border-amber-500/40 bg-amber-500/10 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-amber-700">
              <Wand2 className="w-4 h-4 text-amber-600" />
              <span>Diagnóstico & Parecer de Enquadramento:</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
              <span className="bg-white/80 px-2 py-0.5 rounded border border-black/20 text-black">
                {analysis.wordCount} PALAVRAS
              </span>
              <span className="bg-white/80 px-2 py-0.5 rounded border border-black/20 text-black">
                {analysis.estimatedReadTime} MIN DE LEITURA
              </span>
            </div>
          </div>
          <p className="text-xs font-bold leading-snug opacity-90">
            {analysis.rationale}
          </p>
        </div>

        <div className="space-y-4 my-2">
          {/* 1. Page Span & Layout Template Selection */}
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3">
            <h4 className="font-black text-xs uppercase tracking-tight flex items-center gap-1.5 text-amber-600">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>1. Enquadramento de Páginas & Template Editorial</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs font-bold">EXTENSÃO DO ARTIGO NA REVISTA</Label>
                <select
                  value={pageSpan}
                  onChange={(e) => setPageSpan(parseInt(e.target.value) as 1 | 2)}
                  className="w-full theme-app-input text-xs font-black mt-1 border-2 p-2 rounded cursor-pointer"
                >
                  <option value={1}>1 Página A4 (Compacto / Padrão)</option>
                  <option value={2}>2 Páginas A4 (Página Dupla Especial - Recomendado para textos longos)</option>
                </select>
              </div>

              <div>
                <Label className="text-xs font-bold">TEMPLATE DE DIAGRAMAÇÃO</Label>
                <select
                  value={layoutTemplate}
                  onChange={(e) => setLayoutTemplate(e.target.value as LayoutTemplate)}
                  className="w-full theme-app-input text-xs font-bold mt-1 border-2 p-2 rounded cursor-pointer"
                >
                  <option value="editorial-lead">Standard Feature (Colunas Fluidas + Drop Cap)</option>
                  <option value="workout-protocol">Workout Protocol (Clusters A1/A2 + QR Code)</option>
                  <option value="product-ad">Product Promotion (Anúncio Full + Cupom)</option>
                  <option value="facility-spotlight">Facility Spotlight (Fotos + Spec Sheet)</option>
                  <option value="two-column-quote">2 Colunas Clássicas com Citação Central</option>
                  <option value="infographic-tips">Infográfico Prático com Dicas</option>
                </select>
              </div>
            </div>
          </div>

          {/* 2. Headlines, Subtitle & Metadata */}
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3">
            <h4 className="font-black text-xs uppercase tracking-tight flex items-center gap-1.5 text-amber-600">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>2. Manchete, Subtítulo & Categoria da Edição</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <Label className="text-xs font-bold">MANCHETE PRINCIPAL (H1)</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value.toUpperCase())}
                  className="theme-app-input font-black text-xs mt-1 border-2"
                />
              </div>

              <div>
                <Label className="text-xs font-bold">CATEGORIA</Label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value.toUpperCase())}
                  className="theme-app-input font-mono font-bold text-xs mt-1 border-2 text-amber-600"
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-bold">SUBTÍTULO / DECK EDITORIAL</Label>
              <Input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="theme-app-input text-xs mt-1 border-2 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <Label className="text-xs font-bold">AUTOR DA MATÉRIA</Label>
                <Input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="theme-app-input text-xs mt-1 border-2 font-bold"
                />
              </div>
              <div>
                <Label className="text-xs font-bold">BIO / CREDENCIAL</Label>
                <Input
                  value={authorBio}
                  onChange={(e) => setAuthorBio(e.target.value)}
                  className="theme-app-input text-xs mt-1 border-2"
                />
              </div>
            </div>
          </div>

          {/* 3. Pull Quotes & Key Takeaways Extracted */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Pull Quotes */}
            <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2">
              <Label className="text-xs font-black uppercase flex items-center gap-1 text-amber-600">
                <Quote className="w-3.5 h-3.5" />
                <span>Citação de Impacto Extraída (Pull Quote)</span>
              </Label>
              <Textarea
                value={pullQuotes[0] || ""}
                onChange={(e) => setPullQuotes([e.target.value, ...pullQuotes.slice(1)])}
                className="theme-app-input text-xs h-20 italic font-bold border-2"
                placeholder="Frase célebre de impacto posicionada ao final do artigo..."
              />
            </div>

            {/* Key Takeaways */}
            <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2">
              <Label className="text-xs font-black uppercase flex items-center gap-1 text-amber-600">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Pontos-Chave & Conclusões</span>
              </Label>
              <Textarea
                value={keyTakeaways.join("\n")}
                onChange={(e) =>
                  setKeyTakeaways(e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))
                }
                className="theme-app-input text-xs h-20 font-mono border-2"
                placeholder="1 ponto chave por linha..."
              />
            </div>
          </div>

          {/* 4. Photography Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2">
              <ImagePicker
                label="Foto Principal de Abertura (Hero)"
                value={heroImage}
                onChange={(url) => setHeroImage(url)}
                aspectRatio="landscape"
                placeholderPrompt={analysis.heroImagePrompt}
                helperText="Upload ou IA"
              />
            </div>

            {pageSpan === 2 && (
              <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2">
                <ImagePicker
                  label="Foto Secundária (Página 2)"
                  value={secondaryImage}
                  onChange={(url) => setSecondaryImage(url)}
                  aspectRatio="landscape"
                  placeholderPrompt={analysis.secondaryImagePrompt || "Athletic training details..."}
                  helperText="Exibida na 2ª página"
                />
              </div>
            )}
          </div>

          {/* 5. Formatted Text Content Preview */}
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-black uppercase flex items-center gap-1.5 text-amber-600">
                <Edit3 className="w-3.5 h-3.5" />
                <span>Texto Formatado pela IA (com Destaques, Subtítulos e Marca-Texto)</span>
              </Label>
              <span className="text-[10px] font-mono opacity-75">
                Você pode editar antes de aprovar
              </span>
            </div>

            <Textarea
              value={formattedContent}
              onChange={(e) => setFormattedContent(e.target.value)}
              className="theme-app-input text-xs h-36 font-sans leading-relaxed border-2"
              placeholder="Conteúdo do artigo..."
            />
          </div>
        </div>

        {/* Footer Actions */}
        <DialogFooter className="border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={handleEditFurther}
            className="h-9 font-bold text-xs border-2 flex items-center gap-1 cursor-pointer w-full sm:w-auto"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-500" />
            <span>Ajustar no Editor Avançado</span>
          </Button>

          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-9 font-bold text-xs border-2 flex-1 sm:flex-initial"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirmApproval}
              className="h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs px-5 border-2 border-black shadow-md cursor-pointer flex items-center gap-1.5 flex-1 sm:flex-initial"
            >
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>✓ Aprovar & Inserir na Revista</span>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
