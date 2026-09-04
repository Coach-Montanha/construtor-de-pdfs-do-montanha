import React, { useState } from "react";
import { MagazineProject } from "../../types/magazine";
import { generateAiMockupUrl } from "../../lib/ai-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  Sparkles,
  Download,
  Copy,
  Check,
  RefreshCw,
  Smartphone,
  Square,
  Monitor,
  Dumbbell,
  Coffee,
  Trophy,
  Hand,
  Image as ImageIcon,
} from "lucide-react";

interface MockupStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
}

export const MockupStudioModal: React.FC<MockupStudioModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [prompt, setPrompt] = useState<string>(
    "Fundo de academia de CrossFit moderna com anilhas pretas, barras olímpicas no chão com marcas de magnésio e efeito de desfoque iPhone retrato f/1.4"
  );
  const [format, setFormat] = useState<"stories" | "feed" | "banner">("stories");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedUrl, setGeneratedUrl] = useState<string>("/mockup-stories-1.jpg");
  const [copied, setCopied] = useState<boolean>(false);

  const promptPresets = [
    {
      label: "Box de CrossFit com Anilhas & Blur",
      icon: Dumbbell,
      text: "Fundo de academia de CrossFit moderna com anilhas pretas no chão emborrachado, barras olímpicas com magnésio no ar e efeito de desfoque iPhone retrato f/1.4",
      format: "stories" as const,
    },
    {
      label: "Mão Segurando a Revista no Treino",
      icon: Hand,
      text: "Uma mão atlética segurando a revista física aberta no centro de um ginásio de alta performance com aparelhos de musculação ao fundo desfocados pelo modo retrato",
      format: "stories" as const,
    },
    {
      label: "Mesa de Madeira na Recepção",
      icon: Coffee,
      text: "Revista física pousada sobre mesa de madeira rústica na recepção de um centro de treinamento de elite, com luz natural de janela e plantas ao fundo em desfoque suave",
      format: "feed" as const,
    },
    {
      label: "Pódio & Equipamentos de Elite",
      icon: Trophy,
      text: "Revista em destaque sobre uma caixa de salto pliométrica de madeira no box de crossfit, com kettlebells pretos ao lado e iluminação lateral cinematográfica dourada",
      format: "stories" as const,
    },
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);

    const title = project.title || "MONTANHA MAGAZINE";
    const url = generateAiMockupUrl(prompt, format, title);

    // Pré-carrega a imagem
    const img = new Image();
    img.onload = () => {
      setGeneratedUrl(url);
      setIsGenerating(false);
    };
    img.onerror = () => {
      setGeneratedUrl(url);
      setIsGenerating(false);
    };
    img.src = url;
  };

  const handleCopyLink = () => {
    if (!generatedUrl) return;
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async (urlToDownload: string, filename: string) => {
    try {
      const resp = await fetch(urlToDownload);
      const blob = await resp.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(urlToDownload, "_blank");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="theme-app-card max-w-4xl max-h-[92vh] flex flex-col p-4 sm:p-6 custom-scrollbar font-sans border-2 shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3 shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg sm:text-xl font-black flex items-center gap-2 uppercase">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
              <span>Estúdio de Mockups Publicitários com IA</span>
            </DialogTitle>
            <span className="text-[10px] font-mono font-bold bg-amber-400 text-black px-2 py-0.5 rounded border border-black uppercase hidden sm:inline">
              IA GENERATIVA • FOTO REALISTA
            </span>
          </div>
          <p className="text-xs opacity-75 mt-1">
            Gere mockups comerciais da capa real da revista em qualquer cenário que você imaginar. Basta descrever o ambiente!
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-3 overflow-y-auto custom-scrollbar flex-1 min-h-0">
          {/* Coluna de Controles (5 colunas) */}
          <div className="md:col-span-5 space-y-4">
            {/* Escolha do Formato */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <span>1. Formato de Saída</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setFormat("stories")}
                  className={`p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    format === "stories"
                      ? "bg-amber-400 text-black border-black shadow-xs"
                      : "theme-app-card hover:opacity-80"
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Stories 9:16</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormat("feed")}
                  className={`p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    format === "feed"
                      ? "bg-amber-400 text-black border-black shadow-xs"
                      : "theme-app-card hover:opacity-80"
                  }`}
                >
                  <Square className="w-4 h-4" />
                  <span>Feed 1:1</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormat("banner")}
                  className={`p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    format === "banner"
                      ? "bg-amber-400 text-black border-black shadow-xs"
                      : "theme-app-card hover:opacity-80"
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  <span>Paisagem 16:9</span>
                </button>
              </div>
            </div>

            {/* Prompt de Cenário */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider flex items-center justify-between">
                <span>2. Descreva o Cenário com IA</span>
                <span className="text-[10px] font-normal opacity-70">Desfoque iPhone automático</span>
              </label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                placeholder="Ex: Fundo de academia de crossfit com halteres e barras olímpicas ao fundo com desfoque de retrato do iPhone..."
                className="text-xs font-sans rounded-lg border-2 focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Sugestões Prontas de Prompts */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold opacity-75 uppercase">
                Ideias Prontas para Clicar:
              </label>
              <div className="flex flex-col gap-1.5">
                {promptPresets.map((preset, idx) => {
                  const Icon = preset.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setPrompt(preset.text);
                        setFormat(preset.format);
                      }}
                      className="text-left p-2 rounded-lg border theme-app-card hover:bg-amber-400/10 hover:border-amber-400 text-[11px] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold line-clamp-1">{preset.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botão de Geração */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full h-11 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md border-2 border-black flex items-center justify-center gap-2 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Renderizando Mockup Realista com IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Mockup com IA Agora</span>
                </>
              )}
            </Button>

            {/* Galeria de Mockups Oficiais com a Capa Real */}
            <div className="pt-2 border-t space-y-2">
              <label className="text-[11px] font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Mockups Oficiais da Edição (Capa Real)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div
                  onClick={() => setGeneratedUrl("/mockup-stories-1.jpg")}
                  className={`p-1.5 rounded-lg border-2 cursor-pointer transition-all ${
                    generatedUrl === "/mockup-stories-1.jpg"
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-transparent theme-app-card-subtle hover:border-black/30"
                  }`}
                >
                  <div className="aspect-[9/16] rounded overflow-hidden mb-1 border">
                    <img src="/mockup-stories-1.jpg" alt="Mockup 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[10px] font-bold text-center truncate">Mão & Box Real</div>
                </div>

                <div
                  onClick={() => setGeneratedUrl("/mockup-stories-2.jpg")}
                  className={`p-1.5 rounded-lg border-2 cursor-pointer transition-all ${
                    generatedUrl === "/mockup-stories-2.jpg"
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-transparent theme-app-card-subtle hover:border-black/30"
                  }`}
                >
                  <div className="aspect-[9/16] rounded overflow-hidden mb-1 border">
                    <img src="/mockup-stories-2.jpg" alt="Mockup 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[10px] font-bold text-center truncate">Drop Pad 3D</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Visualização (7 colunas) */}
          <div className="md:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl border-2 theme-app-card-subtle min-h-[360px]">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center">
                <div className="w-12 h-12 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
                <div className="space-y-1">
                  <div className="font-black text-sm uppercase">Criando Cena Fotográfica com IA</div>
                  <p className="text-xs opacity-75 max-w-xs">
                    Aplicando iluminação de estúdio, acabamento impresso e profundidade de campo iPhone f/1.4...
                  </p>
                </div>
              </div>
            ) : generatedUrl ? (
              <div className="flex flex-col items-center w-full h-full gap-3">
                <div
                  className={`relative rounded-xl overflow-hidden border-2 border-black shadow-2xl bg-black max-h-[56vh] flex items-center justify-center ${
                    format === "stories" ? "aspect-[9/16]" : format === "feed" ? "aspect-square" : "aspect-video"
                  }`}
                >
                  <img
                    src={generatedUrl}
                    alt="Mockup Gerado por IA"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Botões de Ação do Mockup */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1 w-full">
                  <Button
                    onClick={() =>
                      handleDownload(
                        generatedUrl,
                        `montanha_mockup_${format}_${Date.now()}.jpg`
                      )
                    }
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-9 px-4 border border-black shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar Imagem Alta Resolução</span>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleCopyLink}
                    className="font-bold text-xs h-9 border theme-app-card flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Link Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Link</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 opacity-60">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-xs">Descreva o cenário e clique em "Gerar Mockup com IA"</p>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="border-t-2 border-current pt-3 flex items-center justify-between shrink-0">
          <span className="text-[11px] opacity-75 font-medium hidden sm:inline">
            ✨ Dica: Todas as imagens são exportadas sem logotipos extras, no padrão profissional para anúncios e Stories.
          </span>
          <Button variant="ghost" onClick={onClose} className="font-bold text-xs">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
