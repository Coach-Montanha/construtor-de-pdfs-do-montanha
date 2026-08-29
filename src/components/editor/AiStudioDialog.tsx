import React, { useState } from "react";
import { Article } from "../../types/magazine";
import {
  generateFullArticleByTopic,
  generateAiImageUrl,
  getEditorialCuratedImage,
} from "../../lib/ai-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sparkles,
  Wand2,
  BookOpen,
  CheckCircle2,
  Loader2,
  Flame,
  Zap,
} from "lucide-react";

interface AiStudioDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArticle: (article: Article) => void;
  apiKey?: string;
}

export const AiStudioDialog: React.FC<AiStudioDialogProps> = ({
  isOpen,
  onClose,
  onAddArticle,
  apiKey,
}) => {
  const [topic, setTopic] = useState<string>("");
  const [category, setCategory] = useState<string>("HIPERTROFIA & PERFORMANCE");
  const [tone, setTone] = useState<string>("motivational");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedResult, setGeneratedResult] = useState<{
    title: string;
    subtitle: string;
    content: string;
    pullQuotes: string[];
    keyTakeaways: string[];
    suggestedImagePrompt: string;
    estimatedReadTime: number;
  } | null>(null);

  const predefinedPautas = [
    {
      topic: "Periodização Ondulatória e Ganho de Força Máxima",
      cat: "TREINAMENTO",
    },
    {
      topic: "Jejum Intermitente, Autofagia e Sensibilidade à Insulina",
      cat: "NUTRIÇÃO & METABOLISMO",
    },
    {
      topic: "Biohacking Circadiano: Otimizando a Testosterona Natural",
      cat: "BIOHACKING",
    },
    {
      topic: "A Regra dos 10%: Como Superar Platôs Sem Lesões",
      cat: "FISIOLOGIA",
    },
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Por favor, digite o tema da matéria.");
      return;
    }

    try {
      setIsLoading(true);
      const result = await generateFullArticleByTopic(topic, category, tone, apiKey);
      setGeneratedResult(result);
    } catch (err: any) {
      alert("Erro ao gerar matéria: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyToMagazine = () => {
    if (!generatedResult) return;

    // Pick a curated image or generate AI image
    const heroImage = generateAiImageUrl(
      generatedResult.suggestedImagePrompt || `${generatedResult.title} dark fitness gym 8k`
    );

    const newArticle: Article = {
      id: "art-" + Date.now(),
      title: generatedResult.title,
      subtitle: generatedResult.subtitle,
      category: category.toUpperCase(),
      author: "Coach Montanha",
      authorBio: "Redação Revista Montanha",
      authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage: heroImage,
      heroImageCaption: `Matéria Especial: ${generatedResult.title}`,
      heroImagePrompt: generatedResult.suggestedImagePrompt,
      content: generatedResult.content,
      pullQuotes: generatedResult.pullQuotes || [],
      calloutBox: {
        title: "PONTO DE ATENÇÃO DO COACH",
        content: "A aplicação rigorosa destes princípios gera resultados em tempo recorde.",
      },
      keyTakeaways: generatedResult.keyTakeaways || [],
      layoutTemplate: "editorial-lead",
      tags: [category, "Exclusivo", "Revista"],
      estimatedReadTime: generatedResult.estimatedReadTime || 4,
      featuredOnCover: true,
    };

    onAddArticle(newArticle);
    onClose();
    setGeneratedResult(null);
    setTopic("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-900 border-slate-800 text-slate-100 p-6 custom-scrollbar">
        <DialogHeader className="border-b border-slate-800 pb-3">
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Gerador Inteligente de Matérias de Revista com IA</span>
          </DialogTitle>
        </DialogHeader>

        {!generatedResult ? (
          <div className="space-y-5 my-4">
            <p className="text-xs text-slate-300">
              Digite qualquer tópico ou ideia que você gostaria de incluir na revista. A IA irá redigir a matéria completa já dividida em subtítulos editoriais, com citações de destaque, resumo e sugestões de imagem.
            </p>

            {/* Quick Presets */}
            <div>
              <Label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">
                Sugestões de Pautas Rápidas:
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {predefinedPautas.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setTopic(p.topic);
                      setCategory(p.cat);
                    }}
                    className="text-left p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all text-xs text-slate-200 flex items-start gap-2 group"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110" />
                    <div>
                      <span className="text-[9px] font-bold text-amber-400 block uppercase">
                        {p.cat}
                      </span>
                      <span className="font-semibold">{p.topic}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-xs font-bold text-slate-300 mb-1 block">TEMA OU ASSUNTO DA MATÉRIA</Label>
              <Input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Como acelerar o ganho de massa muscular após os 30 anos"
                className="bg-slate-800 border-slate-700 text-white font-semibold text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs font-bold text-slate-300 mb-1 block">CATEGORIA</Label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="EX: TREINAMENTO, NUTRIÇÃO"
                  className="bg-slate-800 border-slate-700 text-white text-xs"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-300 mb-1 block">TOM EDITORIAL</Label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-md px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="motivational">Inspirador & Alta Performance (Estilo Montanha)</option>
                  <option value="journalistic">Jornalístico & Elegante (Estilo Time / Vogue)</option>
                  <option value="scientific">Científico & Fisiológico (Com base em estudos)</option>
                  <option value="executive">Executivo & Liderança (Estilo Forbes)</option>
                </select>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isLoading || !topic.trim()}
              className="w-full h-11 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Redigindo Matéria Editorial Completa com IA...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Gerar Artigo Completo com Diagramação</span>
                </>
              )}
            </Button>
          </div>
        ) : (
          /* Generated Preview View */
          <div className="space-y-4 my-4">
            <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Matéria Redigida com Sucesso!
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setGeneratedResult(null)}
                className="h-7 text-xs text-slate-400 hover:text-white"
              >
                Gerar Outra
              </Button>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3">
              <div className="border-b border-slate-700 pb-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  {category}
                </span>
                <h3 className="text-lg font-black text-white uppercase mt-0.5">
                  {generatedResult.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  {generatedResult.subtitle}
                </p>
              </div>

              {/* Pull quotes preview */}
              {generatedResult.pullQuotes && generatedResult.pullQuotes.length > 0 && (
                <div className="bg-slate-900 p-2.5 rounded border-l-4 border-amber-500 text-xs italic text-slate-300">
                  "{generatedResult.pullQuotes[0]}"
                </div>
              )}

              {/* Content snippet */}
              <div className="text-xs text-slate-300 leading-relaxed font-mono max-h-48 overflow-y-auto p-2 bg-slate-900 rounded border border-slate-800">
                {generatedResult.content}
              </div>
            </div>

            <DialogFooter className="pt-2 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setGeneratedResult(null)}
                className="border-slate-700 bg-slate-800 text-slate-300"
              >
                Refazer
              </Button>
              <Button
                onClick={handleApplyToMagazine}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Inserir Matéria na Revista</span>
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
