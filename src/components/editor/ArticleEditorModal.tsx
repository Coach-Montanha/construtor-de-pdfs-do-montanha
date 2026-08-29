import React, { useState } from "react";
import {
  Article,
  LayoutTemplate,
  WorkoutExercise,
  WorkoutProtocol,
  ProductPromotion,
  FacilitySpotlight,
} from "../../types/magazine";
import {
  polishEditorialText,
  generateEditorialHeadlines,
  extractPullQuotes,
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
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Sparkles,
  Wand2,
  Quote,
  Image as ImageIcon,
  Layout,
  Plus,
  Trash2,
  Loader2,
  Dumbbell,
  Tag,
  Building,
  MapPin,
} from "lucide-react";

interface ArticleEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
  onSave: (updated: Article) => void;
  apiKey?: string;
}

export const ArticleEditorModal: React.FC<ArticleEditorModalProps> = ({
  isOpen,
  onClose,
  article,
  onSave,
  apiKey,
}) => {
  const [formData, setFormData] = useState<Article>(
    article || {
      id: "art-" + Date.now(),
      title: "",
      subtitle: "",
      category: "MONTANHA METHOD",
      author: "Coach Montanha",
      authorBio: "Master Kettlebell Instructor // CSCS",
      authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "",
      heroImagePrompt: "",
      content: "",
      pullQuotes: [],
      calloutBox: {
        title: "DESTAQUE DA REDAÇÃO",
        content: "",
      },
      keyTakeaways: [],
      layoutTemplate: "editorial-lead",
      tags: [],
      estimatedReadTime: 4,
      featuredOnCover: true,
    }
  );

  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiStatusMsg, setAiStatusMsg] = useState<string>("");
  const [newQuoteInput, setNewQuoteInput] = useState<string>("");

  React.useEffect(() => {
    if (article) {
      setFormData(article);
    }
  }, [article, isOpen]);

  // AI Actions
  const handlePolishText = async () => {
    if (!formData.content) return;
    try {
      setIsAiLoading(true);
      setAiStatusMsg("Polindo e refinando texto com IA...");
      const polished = await polishEditorialText(formData.content, "journalistic", apiKey);
      setFormData((prev) => ({
        ...prev,
        content: polished,
        estimatedReadTime: Math.max(2, Math.round(polished.split(/\s+/).length / 150)),
      }));
    } catch (err: any) {
      alert("Erro ao polir texto: " + err.message);
    } finally {
      setIsAiLoading(false);
      setAiStatusMsg("");
    }
  };

  const handleSuggestHeadlines = async () => {
    try {
      setIsAiLoading(true);
      setAiStatusMsg("Gerando manchetes de impacto...");
      const suggestions = await generateEditorialHeadlines(
        formData.title,
        formData.content,
        apiKey
      );
      if (suggestions.length > 0) {
        const top = suggestions[0];
        setFormData((prev) => ({
          ...prev,
          title: top.title,
          subtitle: top.subtitle,
          category: top.category || prev.category,
        }));
      }
    } catch (err: any) {
      alert("Erro: " + err.message);
    } finally {
      setIsAiLoading(false);
      setAiStatusMsg("");
    }
  };

  const handleExtractQuotes = async () => {
    if (!formData.content) return;
    try {
      setIsAiLoading(true);
      setAiStatusMsg("Extraindo citações de destaque...");
      const quotes = await extractPullQuotes(formData.content, apiKey);
      setFormData((prev) => ({
        ...prev,
        pullQuotes: quotes,
      }));
    } catch (err: any) {
      alert("Erro: " + err.message);
    } finally {
      setIsAiLoading(false);
      setAiStatusMsg("");
    }
  };

  const handleGenerateAiImage = () => {
    const prompt = formData.heroImagePrompt || `${formData.title} ${formData.category} fitness editorial`;
    const aiUrl = generateAiImageUrl(prompt);
    setFormData((prev) => ({
      ...prev,
      heroImage: aiUrl,
      heroImageCaption: `Ilustração gerada para: ${formData.title}`,
    }));
  };

  const handleCuratedImage = () => {
    const curated = getEditorialCuratedImage(formData.category, Math.floor(Math.random() * 5));
    setFormData((prev) => ({
      ...prev,
      heroImage: curated,
      heroImageCaption: "Fotografia Editorial de Alta Resolução",
    }));
  };

  const handleAddQuote = () => {
    if (newQuoteInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        pullQuotes: [...prev.pullQuotes, newQuoteInput.trim()],
      }));
      setNewQuoteInput("");
    }
  };

  const handleRemoveQuote = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      pullQuotes: prev.pullQuotes.filter((_, i) => i !== idx),
    }));
  };

  // Workout Protocol Management
  const updateWorkoutProtocol = (field: keyof WorkoutProtocol, value: any) => {
    const defaultProto: WorkoutProtocol = {
      workoutTitle: formData.title || "WORKOUT PROTOCOL",
      warmupPrep: "MOBILITY PREP (5 MIN): Thoracic spine bridges, Halos com kettlebell leve (3x10 cada lado).",
      exercises: [
        {
          code: "A1",
          name: "EXERCÍCIO PRINCIPAL",
          setsReps: "5 SÉRIES × 5 REPETIÇÕES",
          tempoRest: "TEMPO: 20X1 // DESCANSO: 90s",
          keyPoints: "Trave o core e execute com máxima potência.",
        },
      ],
      finisher: "FINISHER: Heavy Carry ou Snatch protocol.",
      videoQrUrl: "https://coachmontanha.com.br",
    };

    setFormData((prev) => ({
      ...prev,
      workoutProtocol: {
        ...(prev.workoutProtocol || defaultProto),
        [field]: value,
      },
    }));
  };

  const handleAddWorkoutExercise = () => {
    const currentExercises = formData.workoutProtocol?.exercises || [];
    const nextCode = currentExercises.length === 0 ? "A1" : currentExercises.length === 1 ? "A2" : currentExercises.length === 2 ? "B1" : currentExercises.length === 3 ? "B2" : "FINISHER";
    const newEx: WorkoutExercise = {
      code: nextCode,
      name: "NOVO EXERCÍCIO NÃO-CONVENCIONAL",
      setsReps: "4 SÉRIES × 8 REPETIÇÕES",
      tempoRest: "TEMPO: 2011 // DESCANSO: 60s",
      keyPoints: "Postura impecável e alinhamento biomecânico.",
    };
    updateWorkoutProtocol("exercises", [...currentExercises, newEx]);
  };

  const handleUpdateExercise = (idx: number, field: keyof WorkoutExercise, value: string) => {
    const currentExercises = [...(formData.workoutProtocol?.exercises || [])];
    if (currentExercises[idx]) {
      currentExercises[idx] = { ...currentExercises[idx], [field]: value };
      updateWorkoutProtocol("exercises", currentExercises);
    }
  };

  const handleRemoveExercise = (idx: number) => {
    const currentExercises = (formData.workoutProtocol?.exercises || []).filter((_, i) => i !== idx);
    updateWorkoutProtocol("exercises", currentExercises);
  };

  // Product Promotion Management
  const updateProductPromotion = (field: keyof ProductPromotion, value: any) => {
    const defaultPromo: ProductPromotion = {
      slogan: "FORGED IN IRON // BUILT FOR WAR",
      productName: formData.title || "MONTANHA COMPETITION GEAR",
      productSubtitle: formData.subtitle || "Equipamento forjado para suportar o treino mais brutal do planeta.",
      productImage: formData.heroImage,
      promoBadgeText: "SPECIAL LAUNCH OFFER // 15% OFF",
      couponCode: "MONTANHA15",
      ctaUrl: "WWW.MONTANHAIRON.COM.BR",
      specBadges: [
        { title: "GRAVITY CAST", subtitle: "Single pour ductile iron" },
        { title: "POWDER COAT", subtitle: "Matte textured grip" },
        { title: "CALIBRATED", subtitle: "+/- 0.5% precision" },
        { title: "LIFETIME SPEC", subtitle: "Indestructible warranty" },
      ],
      features: ["Fundição maciça", "Acabamento antiferrugem"],
    };

    setFormData((prev) => ({
      ...prev,
      productPromotion: {
        ...(prev.productPromotion || defaultPromo),
        [field]: value,
      },
    }));
  };

  // Facility Spotlight Management
  const updateFacilitySpotlight = (field: keyof FacilitySpotlight, value: any) => {
    const defaultFac: FacilitySpotlight = {
      facilityName: formData.title || "MONTANHA PERFORMANCE LAB",
      headCoach: formData.author || "COACH MONTANHA",
      location: "SÃO PAULO // SP - BRASIL",
      website: "WWW.MONTANHALAB.COM.BR",
      methodsUsed: ["KETTLEBELLS", "STEEL MACES", "CLUBBELLS", "CALISTHENICS", "MOBILITY"],
      specialties: ["Condicionamento Tático", "Força Não-Convencional"],
      galleryPhotos: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
      ],
      overviewText: formData.content || "Santuário dedicado ao treinamento de força não-convencional e biomecânica avançada.",
      missionText: "Forjar corpos indestrutíveis e mentes espartanas preparadas para qualquer desafio.",
      philosophyText: "Sem máquinas guiadas. Sem desculpas. Apenas você contra a gravidade e o ferro.",
      anchoredQuote: "O ambiente certo não apenas inspira o esforço; ele torna a mediocridade insuportável.",
    };

    setFormData((prev) => ({
      ...prev,
      facilitySpotlight: {
        ...(prev.facilitySpotlight || defaultFac),
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    if (!formData.title) {
      alert("Por favor, preencha o título do artigo.");
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-800 text-slate-100 p-6 custom-scrollbar font-sans">
        <DialogHeader className="border-b border-slate-800 pb-3">
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-white">
            <Wand2 className="w-5 h-5 text-amber-400" />
            <span>Editor Editorial de Artigos, Treinos & Anúncios</span>
          </DialogTitle>
        </DialogHeader>

        {/* AI Loading Banner */}
        {isAiLoading && (
          <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg flex items-center gap-3 text-amber-400 animate-pulse">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-semibold">{aiStatusMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {/* Left Column: Basic Details & Titles */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label className="text-xs font-bold text-slate-300">CATEGORIA DA MATÉRIA</Label>
              </div>
              <Input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value.toUpperCase() })}
                placeholder="EX: MONTANHA METHOD, GEAR & PROMO, STUDIO SPOTLIGHT"
                className="bg-slate-800 border-slate-700 text-white font-bold"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <Label className="text-xs font-bold text-slate-300">MANCHETE / TÍTULO PRINCIPAL (H1)</Label>
                <button
                  type="button"
                  onClick={handleSuggestHeadlines}
                  disabled={isAiLoading}
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20"
                >
                  <Sparkles className="w-3 h-3" />
                  Sugerir Títulos com IA
                </button>
              </div>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Título impactante em caixa alta"
                className="bg-slate-800 border-slate-700 text-white font-black text-base"
              />
            </div>

            <div>
              <Label className="text-xs font-bold text-slate-300 mb-1 block">SUBTÍTULO / DECK EDITORIAL</Label>
              <Textarea
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="1 a 2 frases resumindo a ideia central da matéria"
                className="bg-slate-800 border-slate-700 text-white text-xs h-16"
              />
            </div>

            {/* Author Info */}
            <div className="grid grid-cols-2 gap-3 bg-slate-800/60 p-3 rounded-lg border border-slate-700">
              <div>
                <Label className="text-[11px] font-semibold text-slate-400">Autor</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Nome do Autor"
                  className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
                />
              </div>
              <div>
                <Label className="text-[11px] font-semibold text-slate-400">Bio Curta</Label>
                <Input
                  value={formData.authorBio || ""}
                  onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                  placeholder="Credenciais / Cargo"
                  className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
                />
              </div>
            </div>

            {/* Template Selection */}
            <div>
              <Label className="text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-amber-400" />
                <span>TEMPLATE DE DIAGRAMAÇÃO</span>
              </Label>
              <select
                value={formData.layoutTemplate}
                onChange={(e) =>
                  setFormData({ ...formData, layoutTemplate: e.target.value as LayoutTemplate })
                }
                className="w-full bg-slate-800 border border-slate-700 text-amber-400 rounded-md px-3 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="editorial-lead">Standard Feature / Artigo Técnico (3 Colunas + Drop Cap + Hero Banner)</option>
                <option value="workout-protocol">Workout Protocol & Exercise Breakdowns (Clusters A1/A2, QR Code, Warmup)</option>
                <option value="product-ad">Full-Page Product & Gear Promotion (Anúncio Full, Cupom, QR Code, Tech Specs)</option>
                <option value="facility-spotlight">Studio / Facility Spotlight (Collage de Fotos, Tech Sheet, Manifesto)</option>
                <option value="two-column-quote">2 Colunas Clássicas com Citação Central</option>
                <option value="infographic-tips">Guia Prático com Cards de Dicas Numeradas</option>
              </select>
            </div>
          </div>

          {/* Right Column: Hero Image & Quotes */}
          <div className="space-y-4">
            {/* Hero Image Controls */}
            <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>FOTO HERO DO ARTIGO</span>
                </Label>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCuratedImage}
                    className="text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-white font-medium"
                    title="Buscar foto curada de alta resolução"
                  >
                    Foto Curada
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerateAiImage}
                    className="text-[10px] bg-amber-500 hover:bg-amber-600 px-2 py-1 rounded text-slate-950 font-bold flex items-center gap-1"
                    title="Gerar foto por IA"
                  >
                    <Sparkles className="w-3 h-3" />
                    Gerar por IA
                  </button>
                </div>
              </div>

              <Input
                value={formData.heroImage}
                onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                placeholder="URL da imagem (Unsplash, IA ou link direto)"
                className="bg-slate-800 border-slate-700 text-white text-xs"
              />

              {formData.heroImage && (
                <div className="relative h-28 w-full rounded-md overflow-hidden border border-slate-600">
                  <img
                    src={formData.heroImage}
                    alt="Preview"
                    className="w-full h-full object-cover filter contrast-125"
                  />
                </div>
              )}
            </div>

            {/* Pull Quotes Manager */}
            <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-amber-400" />
                  <span>CITAÇÕES DE DESTAQUE (PULL QUOTES)</span>
                </Label>
                <button
                  type="button"
                  onClick={handleExtractQuotes}
                  disabled={isAiLoading || !formData.content}
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Extrair com IA
                </button>
              </div>

              <div className="space-y-1.5 max-h-24 overflow-y-auto">
                {formData.pullQuotes.map((q, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 bg-slate-900 px-2.5 py-1.5 rounded text-xs border border-slate-700"
                  >
                    <span className="italic text-slate-300 line-clamp-1">"{q}"</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveQuote(idx)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={newQuoteInput}
                  onChange={(e) => setNewQuoteInput(e.target.value)}
                  placeholder="Nova citação de impacto..."
                  className="bg-slate-800 border-slate-700 text-white text-xs h-8"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddQuote();
                    }
                  }}
                />
                <Button
                  size="sm"
                  type="button"
                  onClick={handleAddQuote}
                  className="h-8 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  <Plus className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 1. WORKOUT PROTOCOL BUILDER ---------------- */}
        {formData.layoutTemplate === "workout-protocol" && (
          <div className="bg-slate-800/80 p-4 rounded-xl border-2 border-amber-400/60 space-y-4 my-2">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-amber-400" />
                <h3 className="font-black text-sm text-white uppercase tracking-tight">
                  Configuração do Protocolo de Treino (Clusters A1/A2 e QR Code)
                </h3>
              </div>
              <Button
                size="sm"
                onClick={handleAddWorkoutExercise}
                className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-black flex items-center gap-1"
              >
                <Plus className="w-3 h-3" />
                Adicionar Exercício
              </Button>
            </div>

            {/* Warm-Up / Mobility Box */}
            <div>
              <Label className="text-xs font-bold text-amber-400 uppercase">FASE 0: MOBILIDADE & AQUECIMENTO</Label>
              <Input
                value={formData.workoutProtocol?.warmupPrep || ""}
                onChange={(e) => updateWorkoutProtocol("warmupPrep", e.target.value)}
                placeholder="Ex: MOBILITY & ACTIVATION (5 MIN): T-spine bridges, halos..."
                className="bg-slate-900 border-slate-700 text-white text-xs mt-1"
              />
            </div>

            {/* Exercises List */}
            <div className="space-y-3">
              {(formData.workoutProtocol?.exercises || []).map((ex, idx) => (
                <div key={idx} className="bg-slate-900/90 p-3 rounded-lg border border-slate-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={ex.code}
                      onChange={(e) => handleUpdateExercise(idx, "code", e.target.value.toUpperCase())}
                      placeholder="A1 / B1"
                      className="bg-slate-800 border-slate-700 text-amber-400 font-mono font-black text-xs h-7 w-20 text-center"
                    />
                    <Input
                      value={ex.name}
                      onChange={(e) => handleUpdateExercise(idx, "name", e.target.value.toUpperCase())}
                      placeholder="NOME DO EXERCÍCIO"
                      className="bg-slate-800 border-slate-700 text-white font-bold text-xs h-7 flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveExercise(idx)}
                      className="text-red-400 hover:text-red-300 p-1"
                      title="Remover exercício"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Input
                      value={ex.setsReps}
                      onChange={(e) => handleUpdateExercise(idx, "setsReps", e.target.value.toUpperCase())}
                      placeholder="Séries e Reps (ex: 5 SÉRIES × 5 REPS)"
                      className="bg-slate-800 border-slate-700 text-amber-400 font-mono text-xs h-7"
                    />
                    <Input
                      value={ex.tempoRest}
                      onChange={(e) => handleUpdateExercise(idx, "tempoRest", e.target.value.toUpperCase())}
                      placeholder="Tempo e Descanso (ex: TEMPO: 20X1 // REST: 90s)"
                      className="bg-slate-800 border-slate-700 text-slate-300 font-mono text-xs h-7"
                    />
                  </div>

                  <Input
                    value={ex.keyPoints}
                    onChange={(e) => handleUpdateExercise(idx, "keyPoints", e.target.value)}
                    placeholder="Instruções de execução e pontos-chave biomecânicos..."
                    className="bg-slate-800 border-slate-700 text-slate-300 text-xs h-7"
                  />
                </div>
              ))}
            </div>

            {/* Finisher & Video URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-700">
              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">DIRETRIZES DO FINISHER</Label>
                <Input
                  value={formData.workoutProtocol?.finisher || ""}
                  onChange={(e) => updateWorkoutProtocol("finisher", e.target.value)}
                  placeholder="Ex: FINISHER: Heavy Sandbag Carry (3x50m)..."
                  className="bg-slate-900 border-slate-700 text-white text-xs mt-1"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">LINK DO VÍDEO TUTORIAL (QR CODE)</Label>
                <Input
                  value={formData.workoutProtocol?.videoQrUrl || ""}
                  onChange={(e) => updateWorkoutProtocol("videoQrUrl", e.target.value)}
                  placeholder="https://coachmontanha.com.br/demo-01"
                  className="bg-slate-900 border-slate-700 text-white text-xs mt-1 font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 2. PRODUCT AD BUILDER ---------------- */}
        {formData.layoutTemplate === "product-ad" && (
          <div className="bg-slate-800/80 p-4 rounded-xl border-2 border-amber-400/60 space-y-4 my-2">
            <div className="flex items-center gap-2 border-b border-slate-700 pb-2">
              <Tag className="w-4 h-4 text-amber-400" />
              <h3 className="font-black text-sm text-white uppercase tracking-tight">
                Configuração da Página de Anúncio / Produto & Gear
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">SLOGAN DE IMPACTO (HERO SLOGAN)</Label>
                <Input
                  value={formData.productPromotion?.slogan || ""}
                  onChange={(e) => updateProductPromotion("slogan", e.target.value.toUpperCase())}
                  placeholder="Ex: FORGED IN IRON // BUILT FOR WAR"
                  className="bg-slate-900 border-slate-700 text-white font-black text-xs mt-1"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">BADGE PROMOCIONAL / DESCONTO</Label>
                <Input
                  value={formData.productPromotion?.promoBadgeText || ""}
                  onChange={(e) => updateProductPromotion("promoBadgeText", e.target.value.toUpperCase())}
                  placeholder="Ex: SPECIAL LAUNCH OFFER // 15% OFF"
                  className="bg-slate-900 border-slate-700 text-amber-400 font-bold text-xs mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">CÓDIGO DO CUPOM (COUPON CODE)</Label>
                <Input
                  value={formData.productPromotion?.couponCode || ""}
                  onChange={(e) => updateProductPromotion("couponCode", e.target.value.toUpperCase())}
                  placeholder="Ex: MONTANHA15"
                  className="bg-slate-900 border-slate-700 text-amber-400 font-mono font-black text-xs mt-1"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">URL DO PRODUTO / LOJA</Label>
                <Input
                  value={formData.productPromotion?.ctaUrl || ""}
                  onChange={(e) => updateProductPromotion("ctaUrl", e.target.value.toUpperCase())}
                  placeholder="Ex: WWW.MONTANHAIRON.COM.BR"
                  className="bg-slate-900 border-slate-700 text-white font-mono text-xs mt-1"
                />
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 3. FACILITY SPOTLIGHT BUILDER ---------------- */}
        {formData.layoutTemplate === "facility-spotlight" && (
          <div className="bg-slate-800/80 p-4 rounded-xl border-2 border-amber-400/60 space-y-4 my-2">
            <div className="flex items-center gap-2 border-b border-slate-700 pb-2">
              <Building className="w-4 h-4 text-amber-400" />
              <h3 className="font-black text-sm text-white uppercase tracking-tight">
                Configuração do Studio & Facility Spotlight
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">NOME DO ESPAÇO / ESTÚDIO</Label>
                <Input
                  value={formData.facilitySpotlight?.facilityName || ""}
                  onChange={(e) => updateFacilitySpotlight("facilityName", e.target.value.toUpperCase())}
                  placeholder="Ex: MONTANHA PERFORMANCE & IRON LAB"
                  className="bg-slate-900 border-slate-700 text-white font-black text-xs mt-1"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">HEAD COACH / DIRETOR</Label>
                <Input
                  value={formData.facilitySpotlight?.headCoach || ""}
                  onChange={(e) => updateFacilitySpotlight("headCoach", e.target.value.toUpperCase())}
                  placeholder="Ex: COACH MONTANHA"
                  className="bg-slate-900 border-slate-700 text-amber-400 font-bold text-xs mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">LOCALIZAÇÃO / CIDADE</Label>
                <Input
                  value={formData.facilitySpotlight?.location || ""}
                  onChange={(e) => updateFacilitySpotlight("location", e.target.value.toUpperCase())}
                  placeholder="Ex: SÃO PAULO // SP - BRASIL"
                  className="bg-slate-900 border-slate-700 text-white text-xs mt-1"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-amber-400 uppercase">WEBSITE / CONTATO</Label>
                <Input
                  value={formData.facilitySpotlight?.website || ""}
                  onChange={(e) => updateFacilitySpotlight("website", e.target.value.toUpperCase())}
                  placeholder="Ex: WWW.MONTANHALAB.COM.BR"
                  className="bg-slate-900 border-slate-700 text-white text-xs mt-1 font-mono"
                />
              </div>
            </div>

            <div>
              <Label className="text-xs font-bold text-amber-400 uppercase">CITAÇÃO DE IMPACTO ANCORADA (PULL QUOTE)</Label>
              <Input
                value={formData.facilitySpotlight?.anchoredQuote || ""}
                onChange={(e) => updateFacilitySpotlight("anchoredQuote", e.target.value)}
                placeholder="Ex: O ambiente certo não apenas inspira o esforço; ele torna a mediocridade insuportável."
                className="bg-slate-900 border-slate-700 text-white text-xs mt-1"
              />
            </div>
          </div>
        )}

        {/* Full Article Content Editor */}
        <div className="space-y-2 mt-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold text-slate-300">
              CORPO DO ARTIGO / TEXTO EDITORIAL (PARÁGRAFOS)
            </Label>
            <Button
              size="sm"
              type="button"
              onClick={handlePolishText}
              disabled={isAiLoading || !formData.content}
              className="h-7 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
            >
              <Wand2 className="w-3 h-3" />
              <span>Polir Texto com IA Editorial</span>
            </Button>
          </div>
          <Textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Escreva ou cole seu artigo aqui. Separe parágrafos com quebra de linha dupla. Use **Subtítulo** para criar seções."
            className="bg-slate-800 border-slate-700 text-white text-xs font-mono min-h-[180px] leading-relaxed"
          />
        </div>

        <DialogFooter className="border-t border-slate-800 pt-4 mt-4 flex items-center justify-between">
          <Button variant="ghost" onClick={onClose} className="text-slate-400 hover:text-white">
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6"
          >
            Salvar Artigo na Revista
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
