import React, { useState } from "react";
import { Article } from "../../types/magazine";
import {
  generateFullArticleByTopic,
  generateAiImageUrl,
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
  Zap,
} from "lucide-react";

interface AiStudioDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArticle: (article: Article) => void;
}

export const AiStudioDialog: React.FC<AiStudioDialogProps> = ({
  isOpen,
  onClose,
  onAddArticle,
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
      const result = await generateFullArticleByTopic(topic, category, tone);
      setGeneratedResult(result);
    } catch (err: any) {
      alert("Erro ao gerar matéria: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyToMagazine = () => {
    if (!generatedResult) return;

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
      <DialogContent className="theme-app-card max-w-3xl max-h-[85vh] overflow-y-auto p-6 custom-scrollbar font-sans border-2 shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3">
          <DialogTitle className="text-xl font-black flex items-center gap-2 uppercase">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Gerador Inteligente de Matérias com IA</span>
          </DialogTitle>
        </DialogHeader>

        {!generatedResult ? (
          <div className="space-y-5 my-4">
            <p className="text-xs opacity-80 leading-relaxed font-medium">
              Digite qualquer tópico ou ideia que você gostaria de incluir na revista. A IA irá redigir a matéria completa já dividida em subtítulos editoriais, com citações de destaque, resumo e sugestões de imagem.
            </p>

            {/* Quick Presets */}
            <div>
              <Label className="text-[11px] font-bold uppercase mb-2 block opacity-80">
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
                    className="theme-app-card-subtle text-left p-2.5 rounded-lg border-2 hover:border-black transition-all text-xs flex items-start gap-2 group shadow-xs"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110" />
                    <div>
                      <span className="text-[9px] font-bold text-amber-600 block uppercase">
                        {p.cat}
                      </span>
                      <span className="font-bold leading-tight">{p.topic}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-xs font-bold mb-1 block">TEMA OU ASSUNTO DA MATÉRIA</Label>
              <Input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Como acelerar o ganho de massa muscular após os 30 anos"
                className="theme-app-input font-bold text-sm border-2"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs font-bold mb-1 block">CATEGORIA</Label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="EX: TREINAMENTO, NUTRIÇÃO"
                  className="theme-app-input text-xs border-2"
                />
              </div>

              <div>
                <Label className="text-xs font-bold mb-1 block">TOM EDITORIAL</Label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="theme-app-input w-full rounded-md px-3 py-2 text-xs font-bold border-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
              className="w-full h-11 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md border-2 border-black flex items-center justify-center gap-2"
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
            <div className="bg-amber-400 text-black border-2 border-black p-3 rounded-lg flex items-center justify-between shadow-xs">
              <span className="text-xs font-black flex items-center gap-1.5 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                Matéria Redigida com Sucesso!
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setGeneratedResult(null)}
                className="h-7 text-xs font-bold"
              >
                Gerar Outra
              </Button>
            </div>

            <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3 shadow-xs">
              <div className="border-b-2 pb-2">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                  {category}
                </span>
                <h3 className="text-lg font-black uppercase mt-0.5">
                  {generatedResult.title}
                </h3>
                <p className="text-xs font-medium mt-1 opacity-80">
                  {generatedResult.subtitle}
                </p>
              </div>

              {/* Pull quotes preview */}
              {generatedResult.pullQuotes && generatedResult.pullQuotes.length > 0 && (
                <div className="theme-app-card p-2.5 rounded border-l-4 border-amber-500 text-xs italic font-medium">
                  "{generatedResult.pullQuotes[0]}"
                </div>
              )}

              {/* Content snippet */}
              <div className="theme-app-card text-xs leading-relaxed font-mono max-h-48 overflow-y-auto p-2 rounded border">
                {generatedResult.content}
              </div>
            </div>

            <DialogFooter className="pt-2 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setGeneratedResult(null)}
                className="border-2 font-bold"
              >
                Refazer
              </Button>
              <Button
                onClick={handleApplyToMagazine}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 flex items-center gap-2 border-2 border-black"
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
