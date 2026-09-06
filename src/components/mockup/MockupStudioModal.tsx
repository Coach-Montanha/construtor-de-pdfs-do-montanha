import React, { useState, useRef, useEffect } from "react";
import { MagazineProject } from "../../types/magazine";
import { generateAiMockupSceneUrl } from "../../lib/ai-service";
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
  Sliders,
  CheckCircle2,
  ShieldCheck,
  Layers,
} from "lucide-react";

interface MockupStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
}

interface PrebuiltScene {
  id: string;
  name: string;
  description: string;
  url: string;
  format: "stories" | "feed" | "banner";
  icon: any;
  tag: string;
}

export const MockupStudioModal: React.FC<MockupStudioModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  // Capa Real garantida da revista
  const [coverUrl, setCoverUrl] = useState<string>("/real-cover.png");
  const [activeTab, setActiveTab] = useState<"official" | "custom">("official");

  // Cenários oficiais pré-compostos em alta definição com a Capa Real
  const officialScenes: PrebuiltScene[] = [
    {
      id: "wood-desk",
      name: "Mesa de Madeira na Recepção",
      description: "Revista física pousada sobre mesa rústica de carvalho na recepção com luz natural e desfoque de iPhone",
      url: "/mockups/mockup-wood-desk-real.jpg",
      format: "stories",
      icon: Coffee,
      tag: "Mais Pedida",
    },
    {
      id: "hands-box",
      name: "Em Mãos no Box de CrossFit",
      description: "Mãos atléticas segurando a revista real aberta em primeiro plano com atletas e barras em bokeh f/1.4",
      url: "/mockups/mockup-hands-real.jpg",
      format: "stories",
      icon: Hand,
      tag: "Instagram Stories",
    },
    {
      id: "gym-floor",
      name: "Drop Pad no Chão da Academia",
      description: "Revista física apoiada em 3D sobre o drop pad emborrachado com anilhas e barras ao fundo",
      url: "/mockups/mockup-gym-floor-real.jpg",
      format: "stories",
      icon: Dumbbell,
      tag: "Alta Performance",
    },
    {
      id: "official-1",
      name: "Mão & Medalhão de Lançamento",
      description: "Capa real em mãos com medalhão dourado 'Lançamento Oficial da Montanha' e rack olímpico ao fundo",
      url: "/mockup-stories-1.jpg",
      format: "stories",
      icon: Trophy,
      tag: "Edição Oficial",
    },
    {
      id: "official-2",
      name: "Drop Pad 3D com Equipamentos",
      description: "Revista física real em perspectiva tridimensional sobre drop pad ao lado de anilhas pesadas",
      url: "/mockup-stories-2.jpg",
      format: "stories",
      icon: Layers,
      tag: "Edição Oficial",
    },
  ];

  const [selectedScene, setSelectedScene] = useState<PrebuiltScene>(officialScenes[0]!);

  // Estado para criação de cenário livre com IA + Composição da Capa Real
  const [customPrompt, setCustomPrompt] = useState<string>(
    "Mesa de mármore branco em recepção moderna com plantas ao fundo e luz suave de janela"
  );
  const [customFormat, setCustomFormat] = useState<"stories" | "feed" | "banner">("stories");
  const [isGeneratingScene, setIsGeneratingScene] = useState<boolean>(false);
  const [bgSceneUrl, setBgSceneUrl] = useState<string>("/mockups/scene-wood-desk.jpg");

  // Controles de enquadramento da revista no cenário customizado
  const [magScale, setMagScale] = useState<number>(100); // 60 a 140%
  const [magAngle, setMagAngle] = useState<number>(-6); // -25 a 25 graus
  const [magPosY, setMagPosY] = useState<number>(68); // 30% a 85% do topo
  const [magGloss, setMagGloss] = useState<number>(45); // 0 a 100% de brilho glossy
  const [magPose, setMagPose] = useState<"table" | "stand" | "front">("table");

  const [copied, setCopied] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Renderizar a Composição no Canvas sempre que os parâmetros mudarem (para o modo personalizado)
  useEffect(() => {
    if (activeTab !== "custom") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = customFormat === "stories" ? 1080 : customFormat === "feed" ? 1080 : 1920;
    const height = customFormat === "stories" ? 1920 : customFormat === "feed" ? 1080 : 1080;

    canvas.width = width;
    canvas.height = height;

    const bgImg = new Image();
    bgImg.crossOrigin = "anonymous";
    bgImg.src = bgSceneUrl;

    const coverImg = new Image();
    coverImg.crossOrigin = "anonymous";
    coverImg.src = coverUrl;

    let loadedCount = 0;
    const onLoaded = () => {
      loadedCount++;
      if (loadedCount < 2) return;

      // 1. Desenhar Fundo
      ctx.clearRect(0, 0, width, height);
      // Preenchimento com aspect-ratio cover
      const bgAspect = bgImg.width / bgImg.height;
      const targetAspect = width / height;
      let sx = 0, sy = 0, sw = bgImg.width, sh = bgImg.height;
      if (bgAspect > targetAspect) {
        sw = bgImg.height * targetAspect;
        sx = (bgImg.width - sw) / 2;
      } else {
        sh = bgImg.width / targetAspect;
        sy = (bgImg.height - sh) / 2;
      }
      ctx.drawImage(bgImg, sx, sy, sw, sh, 0, 0, width, height);

      // 2. Calcular Dimensões e Posição da Revista
      const baseW = width * 0.42 * (magScale / 100);
      const baseH = baseW * 1.414; // proporção A4
      const cx = width / 2;
      const cy = height * (magPosY / 100);

      ctx.save();
      ctx.translate(cx, cy);

      if (magPose === "table") {
        ctx.rotate((magAngle * Math.PI) / 180);
      } else if (magPose === "stand") {
        ctx.rotate(((magAngle / 2) * Math.PI) / 180);
      }

      // 3. Sombra Realista Suave (Ambient Occlusion + Drop Shadow)
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
      ctx.shadowBlur = width * 0.04;
      ctx.shadowOffsetX = width * 0.015;
      ctx.shadowOffsetY = height * 0.02;
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(-baseW / 2 + 10, -baseH / 2 + 15, baseW - 10, baseH - 5);
      ctx.restore();

      // Sombra de contato escura
      ctx.fillStyle = "rgba(10, 5, 0, 0.4)";
      ctx.fillRect(-baseW / 2 + 4, -baseH / 2 + 8, baseW - 4, baseH - 4);

      // 4. Espessura das Páginas / Lombada 3D
      ctx.fillStyle = "#EAE5DF";
      ctx.fillRect(-baseW / 2 + 3, -baseH / 2 + 3, baseW, baseH);
      ctx.fillStyle = "#D5CFCA";
      ctx.fillRect(-baseW / 2 + 1, -baseH / 2 + 1, baseW, baseH);

      // 5. Desenhar Capa Real
      ctx.drawImage(coverImg, -baseW / 2, -baseH / 2, baseW, baseH);

      // 6. Camada de Reflexo Glossy Realista
      if (magGloss > 0) {
        const glare = ctx.createLinearGradient(-baseW / 2, -baseH / 2, baseW / 2, baseH / 2);
        const alpha = (magGloss / 100) * 0.35;
        glare.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        glare.addColorStop(0.4, `rgba(255, 255, 255, ${alpha * 0.4})`);
        glare.addColorStop(0.7, "rgba(255, 255, 255, 0)");
        glare.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glare;
        ctx.fillRect(-baseW / 2, -baseH / 2, baseW, baseH);
      }

      ctx.restore();
    };

    bgImg.onload = onLoaded;
    coverImg.onload = onLoaded;
  }, [activeTab, bgSceneUrl, coverUrl, customFormat, magScale, magAngle, magPosY, magGloss, magPose]);

  // Gerar Novo Cenário de Fundo com IA
  const handleGenerateCustomScene = () => {
    if (!customPrompt.trim()) return;
    setIsGeneratingScene(true);

    const url = generateAiMockupSceneUrl(customPrompt, customFormat);
    const testImg = new Image();
    testImg.crossOrigin = "anonymous";
    testImg.onload = () => {
      setBgSceneUrl(url);
      setIsGeneratingScene(false);
    };
    testImg.onerror = () => {
      setBgSceneUrl(url);
      setIsGeneratingScene(false);
    };
    testImg.src = url;
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async (urlOrCanvas: string, filename: string) => {
    if (activeTab === "custom" && canvasRef.current) {
      const canvas = canvasRef.current;
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    try {
      const resp = await fetch(urlOrCanvas);
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
      window.open(urlOrCanvas, "_blank");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="theme-app-card max-w-5xl max-h-[94vh] flex flex-col p-4 sm:p-6 custom-scrollbar font-sans border-2 shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <DialogTitle className="text-lg sm:text-xl font-black flex items-center gap-2 uppercase">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Estúdio de Mockups Publicitários da Capa Real</span>
              </DialogTitle>
              <p className="text-xs opacity-75 mt-0.5">
                Crie propagandas hiper-realistas para Stories e Feed referenciando <strong>sempre a revista real</strong> da sua edição, sem capas imaginárias.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold self-start sm:self-auto shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Capa Oficial Garantida</span>
            </div>
          </div>
        </DialogHeader>

        {/* Barra de Seleção da Capa Real Referenciada */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-11 rounded overflow-hidden border border-black shadow-xs shrink-0 bg-white">
              <img src={coverUrl} alt="Capa Real" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-black text-slate-900 dark:text-amber-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Capa Real da Edição Referenciada</span>
              </div>
              <p className="text-[10px] opacity-75">
                Edição Nº 01 • "Por Que Mulheres Deveriam Levantar Peso" • Montanha Magazine
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCoverUrl(coverUrl === "/real-cover.png" ? project.coverConfig?.backgroundImage || "/real-cover.png" : "/real-cover.png")}
            className="text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
          >
            Alternar Versão
          </button>
        </div>

        {/* Abas: Cenários Prontos vs Cenário Customizado com IA */}
        <div className="flex items-center gap-2 border-b shrink-0 pt-1 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab("official")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "official"
                ? "bg-amber-400 text-black shadow-xs"
                : "opacity-75 hover:opacity-100 theme-app-card"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Cenários Oficiais da Capa Real (Recomendado)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("custom")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === "custom"
                ? "bg-amber-400 text-black shadow-xs"
                : "opacity-75 hover:opacity-100 theme-app-card"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Criar Novo Cenário com IA & Capa Real</span>
          </button>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2 overflow-y-auto custom-scrollbar flex-1 min-h-0">
          {/* LADO ESQUERDO: CONTROLES */}
          <div className="md:col-span-5 space-y-4">
            {activeTab === "official" ? (
              /* CENÁRIOS OFICIAIS PRÉ-COMPOSTOS */
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" />
                  <span>Escolha o Cenário Desejado:</span>
                </label>
                <div className="flex flex-col gap-2">
                  {officialScenes.map((scene) => {
                    const Icon = scene.icon;
                    const isSelected = selectedScene.id === scene.id;
                    return (
                      <div
                        key={scene.id}
                        onClick={() => setSelectedScene(scene)}
                        className={`p-2.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                          isSelected
                            ? "border-amber-500 bg-amber-500/15 shadow-sm"
                            : "theme-app-card-subtle hover:border-black/30"
                        }`}
                      >
                        <div className="w-12 h-20 rounded-lg overflow-hidden border shrink-0 bg-black">
                          <img src={scene.url} alt={scene.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="font-black text-xs truncate">{scene.name}</span>
                            <span className="text-[9px] font-mono font-bold bg-amber-400 text-black px-1.5 py-0.2 rounded">
                              {scene.tag}
                            </span>
                          </div>
                          <p className="text-[11px] opacity-75 leading-tight line-clamp-2">
                            {scene.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* CRIAR NOVO CENÁRIO COM IA & COMPOSIÇÃO */
              <div className="space-y-3.5">
                {/* Formato */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider">
                    1. Formato de Saída
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setCustomFormat("stories")}
                      className={`p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                        customFormat === "stories"
                          ? "bg-amber-400 text-black border-black shadow-xs"
                          : "theme-app-card hover:opacity-80"
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Stories 9:16</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomFormat("feed")}
                      className={`p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                        customFormat === "feed"
                          ? "bg-amber-400 text-black border-black shadow-xs"
                          : "theme-app-card hover:opacity-80"
                      }`}
                    >
                      <Square className="w-4 h-4" />
                      <span>Feed 1:1</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCustomFormat("banner")}
                      className={`p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${
                        customFormat === "banner"
                          ? "bg-amber-400 text-black border-black shadow-xs"
                          : "theme-app-card hover:opacity-80"
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                      <span>Paisagem 16:9</span>
                    </button>
                  </div>
                </div>

                {/* Prompt do Cenário */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider flex items-center justify-between">
                    <span>2. Descreva o Ambiente com IA</span>
                    <span className="text-[10px] opacity-70 font-normal">A capa real será aplicada</span>
                  </label>
                  <Textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    rows={2}
                    placeholder="Ex: Mesa de café na recepção da academia com iluminação de janela..."
                    className="text-xs rounded-lg border-2"
                  />
                  <Button
                    onClick={handleGenerateCustomScene}
                    disabled={isGeneratingScene || !customPrompt.trim()}
                    className="w-full h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-sm border border-black flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isGeneratingScene ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Gerando Cenário & Renderizando Capa Real...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Gerar Fundo com IA & Aplicar Capa Real</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Ajustes de Enquadramento da Revista */}
                <div className="p-3 rounded-xl border theme-app-card-subtle space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-black uppercase">
                    <span className="flex items-center gap-1">
                      <Sliders className="w-3.5 h-3.5 text-amber-500" />
                      <span>3. Ajustes da Revista Real</span>
                    </span>
                  </div>

                  {/* Pose */}
                  <div className="grid grid-cols-3 gap-1 text-[10px] font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        setMagPose("table");
                        setMagAngle(-6);
                        setMagPosY(68);
                      }}
                      className={`py-1 rounded border cursor-pointer ${
                        magPose === "table" ? "bg-amber-400 text-black" : "theme-app-card"
                      }`}
                    >
                      Deitada Mesa
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMagPose("stand");
                        setMagAngle(4);
                        setMagPosY(52);
                      }}
                      className={`py-1 rounded border cursor-pointer ${
                        magPose === "stand" ? "bg-amber-400 text-black" : "theme-app-card"
                      }`}
                    >
                      Em Pé 3D
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMagPose("front");
                        setMagAngle(0);
                        setMagPosY(50);
                      }}
                      className={`py-1 rounded border cursor-pointer ${
                        magPose === "front" ? "bg-amber-400 text-black" : "theme-app-card"
                      }`}
                    >
                      Frontal
                    </button>
                  </div>

                  {/* Sliders: Tamanho, Ângulo, Posição */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between font-semibold">
                      <span>Tamanho da Revista:</span>
                      <span className="font-mono">{magScale}%</span>
                    </div>
                    <input
                      type="range"
                      min={60}
                      max={140}
                      value={magScale}
                      onChange={(e) => setMagScale(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-300 rounded cursor-pointer accent-amber-500"
                    />

                    <div className="flex justify-between font-semibold pt-1">
                      <span>Posição Vertical:</span>
                      <span className="font-mono">{magPosY}%</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={85}
                      value={magPosY}
                      onChange={(e) => setMagPosY(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-300 rounded cursor-pointer accent-amber-500"
                    />

                    <div className="flex justify-between font-semibold pt-1">
                      <span>Brilho Glossy do Papel:</span>
                      <span className="font-mono">{magGloss}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={magGloss}
                      onChange={(e) => setMagGloss(Number(e.target.value))}
                      className="w-full h-1 bg-zinc-300 rounded cursor-pointer accent-amber-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* LADO DIREITO: PALCO DE VISUALIZAÇÃO INTERATIVO */}
          <div className="md:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl border-2 theme-app-card-subtle min-h-[400px]">
            {activeTab === "official" ? (
              /* VISUALIZAÇÃO DA CENA OFICIAL */
              <div className="flex flex-col items-center w-full h-full gap-3">
                <div className="relative rounded-xl overflow-hidden border-2 border-black shadow-2xl bg-black max-h-[56vh] aspect-[9/16] flex items-center justify-center">
                  <img
                    src={selectedScene.url}
                    alt={selectedScene.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white font-mono text-[9px] px-2 py-0.5 rounded border border-white/20">
                    Capa Real da Montanha Magazine
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-1 w-full">
                  <Button
                    onClick={() =>
                      handleDownload(
                        selectedScene.url,
                        `montanha_${selectedScene.id}_stories_9x16.jpg`
                      )
                    }
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-10 px-5 border-2 border-black shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Mockup em Alta Resolução (HD)</span>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => handleCopyLink(selectedScene.url)}
                    className="font-bold text-xs h-10 border theme-app-card flex items-center gap-1.5 cursor-pointer"
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
              /* VISUALIZAÇÃO DA COMPOSIÇÃO CUSTOMIZADA NO CANVAS */
              <div className="flex flex-col items-center w-full h-full gap-3">
                <div
                  className={`relative rounded-xl overflow-hidden border-2 border-black shadow-2xl bg-black max-h-[56vh] flex items-center justify-center ${
                    customFormat === "stories"
                      ? "aspect-[9/16]"
                      : customFormat === "feed"
                      ? "aspect-square"
                      : "aspect-video"
                  }`}
                >
                  <canvas ref={canvasRef} className="w-full h-full object-contain" />

                  {isGeneratingScene && (
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4">
                      <div className="w-10 h-10 rounded-full border-4 border-amber-400 border-t-transparent animate-spin mb-2" />
                      <span className="text-white text-xs font-black uppercase">
                        Gerando Novo Cenário e Compondo Capa Real...
                      </span>
                    </div>
                  )}

                  <div className="absolute top-2 left-2 bg-black/80 text-white font-mono text-[9px] px-2 py-0.5 rounded border border-white/20">
                    Composição Real-Time (Capa Real)
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-1 w-full">
                  <Button
                    onClick={() =>
                      handleDownload(
                        "",
                        `montanha_custom_mockup_${customFormat}_${Date.now()}.jpg`
                      )
                    }
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-10 px-5 border-2 border-black shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Mockup Renderizado (HD)</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="border-t-2 border-current pt-3 flex items-center justify-between shrink-0">
          <span className="text-[11px] opacity-75 font-medium hidden sm:inline">
            🔒 100% Livre de Alucinações: Todos os mockups utilizam a foto real da atleta, tipografia e títulos oficiais da Montanha Magazine.
          </span>
          <Button variant="ghost" onClick={onClose} className="font-bold text-xs">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
