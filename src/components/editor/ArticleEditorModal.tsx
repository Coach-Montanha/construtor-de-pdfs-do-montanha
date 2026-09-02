import React, { useState, useEffect, useRef } from "react";
import {
  Article,
  LayoutTemplate,
  WorkoutProtocol,
  WorkoutExercise,
  ProductPromotion,
  FacilitySpotlight,
} from "../../types/magazine";
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
import { Switch } from "../ui/switch";
import {
  Sparkles,
  Plus,
  Trash2,
  Wand2,
  Image as ImageIcon,
  Quote,
  Layout,
  Tag,
  Dumbbell,
  Building,
  Loader2,
  Check,
  Bold,
  Italic,
  Underline,
  Highlighter,
  Heading3,
  List,
  Eye,
  Edit3,
  AlertCircle,
} from "lucide-react";
import {
  polishEditorialText,
  generateEditorialHeadlines,
  extractPullQuotes,
} from "../../lib/ai-service";

interface ArticleEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
  onSave: (article: Article) => void;
}

export const ArticleEditorModal: React.FC<ArticleEditorModalProps> = ({
  isOpen,
  onClose,
  article,
  onSave,
}) => {
  const [formData, setFormData] = useState<Article>({
    id: "art-" + Date.now(),
    title: "",
    subtitle: "",
    category: "MONTANHA METHOD",
    author: "Coach Montanha",
    authorBio: "Master Coach & Fundador",
    authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
    heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    heroImageCaption: "",
    content: "",
    pullQuotes: [],
    keyTakeaways: [],
    layoutTemplate: "editorial-lead",
    tags: ["Força", "Alta Performance"],
    estimatedReadTime: 4,
    featuredOnCover: false,
    enabled: true,
  });

  const [newQuoteInput, setNewQuoteInput] = useState<string>("");
  const [newTakeawayInput, setNewTakeawayInput] = useState<string>("");
  const [newTagInput, setNewTagInput] = useState<string>("");
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiStatusMsg, setAiStatusMsg] = useState<string>("");
  const [previewFormatted, setPreviewFormatted] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const applyFormatting = (prefix: string, suffix: string, defaultPlaceholder = "texto") => {
    const el = textareaRef.current;
    if (!el) {
      setFormData((prev) => ({ ...prev, content: (prev.content || "") + `${prefix}${defaultPlaceholder}${suffix}` }));
      return;
    }

    const start = el.selectionStart ?? 0;
    const end = el.selectionEnd ?? 0;
    const currentVal = formData.content || "";

    const selectedText = currentVal.substring(start, end);
    const textToWrap = selectedText || defaultPlaceholder;
    const replacement = `${prefix}${textToWrap}${suffix}`;

    const newVal = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    setFormData((prev) => ({ ...prev, content: newVal }));

    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + prefix.length, start + prefix.length + textToWrap.length);
    }, 40);
  };

  const [polishSuccess, setPolishSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (article) {
      setFormData({
        ...article,
        pullQuotes: Array.isArray(article.pullQuotes) ? article.pullQuotes : [],
        keyTakeaways: Array.isArray(article.keyTakeaways) ? article.keyTakeaways : [],
        tags: Array.isArray(article.tags) ? article.tags : [],
        heroImagePosition: article.heroImagePosition || "50% 50%",
        secondaryImagePosition: article.secondaryImagePosition || "50% 50%",
        bottomSpotlightPosition: article.bottomSpotlightPosition || "50% 50%",
        enabled: article.enabled !== false,
      });
    } else {
      setFormData({
        id: "art-" + Date.now(),
        title: "",
        subtitle: "",
        category: "MONTANHA METHOD",
        author: "Coach Montanha",
        authorBio: "Master Coach & Fundador",
        authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
        heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
        heroImageCaption: "",
        heroImagePosition: "50% 50%",
        secondaryImagePosition: "50% 50%",
        bottomSpotlightPosition: "50% 50%",
        content: "",
        pullQuotes: [],
        keyTakeaways: [],
        layoutTemplate: "editorial-lead",
        tags: ["Força", "Alta Performance"],
        estimatedReadTime: 4,
        featuredOnCover: false,
        enabled: true,
      });
    }
    setSaveError(null);
  }, [article, isOpen]);

  const [saveError, setSaveError] = useState<string | null>(null);

  const handleSave = () => {
    if (!formData.title.trim()) {
      setSaveError("Por favor, preencha o título da matéria.");
      return;
    }
    setSaveError(null);
    onSave(formData);
    onClose();
  };

  const handleAddQuote = () => {
    if (!newQuoteInput.trim()) return;
    const current = Array.isArray(formData.pullQuotes) ? formData.pullQuotes : [];
    setFormData((prev) => ({
      ...prev,
      pullQuotes: [...current, newQuoteInput.trim()],
    }));
    setNewQuoteInput("");
  };

  const handleRemoveQuote = (idx: number) => {
    const current = Array.isArray(formData.pullQuotes) ? formData.pullQuotes : [];
    setFormData((prev) => ({
      ...prev,
      pullQuotes: current.filter((_, i) => i !== idx),
    }));
  };

  const handleAddTakeaway = () => {
    if (!newTakeawayInput.trim()) return;
    setFormData({
      ...formData,
      keyTakeaways: [...(formData.keyTakeaways || []), newTakeawayInput.trim()],
    });
    setNewTakeawayInput("");
  };

  const handleRemoveTakeaway = (idx: number) => {
    setFormData({
      ...formData,
      keyTakeaways: (formData.keyTakeaways || []).filter((_, i) => i !== idx),
    });
  };

  const handleAddTag = () => {
    if (!newTagInput.trim()) return;
    setFormData({
      ...formData,
      tags: [...formData.tags, newTagInput.trim()],
    });
    setNewTagInput("");
  };

  const handleRemoveTag = (idx: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== idx),
    });
  };

  // AI Actions
  const handlePolishText = async (tone: "motivational" | "journalistic" | "scientific" = "journalistic") => {
    if (!formData.content) return;
    setIsAiLoading(true);
    setPolishSuccess(null);
    setAiStatusMsg("Polindo texto com linguagem editorial rica (negrito, itálico, destaques)...");
    try {
      const polished = await polishEditorialText(formData.content, tone);
      setFormData((prev) => ({ ...prev, content: polished }));
      setPolishSuccess(`✓ Texto aprimorado com sucesso em tom ${tone === "motivational" ? "Motivacional" : "Jornalístico"}! Formatação rica aplicada.`);
      setTimeout(() => setPolishSuccess(null), 5000);
    } catch (err: any) {
      alert("Erro no polimento: " + err.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSuggestHeadlines = async () => {
    if (!formData.content && !formData.title) return;
    setIsAiLoading(true);
    setAiStatusMsg("Criando sugestões de manchetes impactantes...");
    try {
      const suggestions = await generateEditorialHeadlines(formData.title, formData.content);
      if (suggestions.length > 0) {
        const pick = suggestions[0]!;
        setFormData((prev) => ({
          ...prev,
          title: pick.title,
          subtitle: pick.subtitle,
          category: pick.category || prev.category,
        }));
      }
    } catch (err: any) {
      alert("Erro na IA: " + err.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleExtractQuotes = async () => {
    if (!formData.content) return;
    setIsAiLoading(true);
    setAiStatusMsg("Extraindo citações de destaque tipográfico...");
    try {
      const quotes = await extractPullQuotes(formData.content);
      setFormData((prev) => ({ ...prev, pullQuotes: quotes }));
    } catch (err: any) {
      alert("Erro na IA: " + err.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  // Workout Protocol helpers
  const updateWorkoutProtocol = <K extends keyof WorkoutProtocol>(
    field: K,
    value: WorkoutProtocol[K]
  ) => {
    setFormData({
      ...formData,
      workoutProtocol: {
        workoutTitle: formData.workoutProtocol?.workoutTitle || formData.title,
        warmupPrep: formData.workoutProtocol?.warmupPrep || "",
        exercises: formData.workoutProtocol?.exercises || [],
        finisher: formData.workoutProtocol?.finisher || "",
        videoQrUrl: formData.workoutProtocol?.videoQrUrl || "",
        ...formData.workoutProtocol,
        [field]: value,
      },
    });
  };

  const handleAddWorkoutExercise = () => {
    const nextCode = `A${(formData.workoutProtocol?.exercises.length || 0) + 1}`;
    const newEx: WorkoutExercise = {
      code: nextCode,
      name: "NOVO EXERCÍCIO NÃO-CONVENCIONAL",
      setsReps: "4 SÉRIES × 6 REPS",
      tempoRest: "TEMPO: 20X1 // REST: 90s",
      keyPoints: "Trave o core, mantenha postura neutra e execute com máxima potência.",
    };
    const currentExercises = formData.workoutProtocol?.exercises || [];
    updateWorkoutProtocol("exercises", [...currentExercises, newEx]);
  };

  const handleUpdateExercise = (idx: number, field: keyof WorkoutExercise, val: string) => {
    const current = formData.workoutProtocol?.exercises || [];
    const updated = current.map((ex, i) => (i === idx ? { ...ex, [field]: val } : ex));
    updateWorkoutProtocol("exercises", updated);
  };

  const handleRemoveExercise = (idx: number) => {
    const current = formData.workoutProtocol?.exercises || [];
    updateWorkoutProtocol(
      "exercises",
      current.filter((_, i) => i !== idx)
    );
  };

  // Product Promotion helpers
  const updateProductPromotion = <K extends keyof ProductPromotion>(
    field: K,
    value: ProductPromotion[K]
  ) => {
    setFormData({
      ...formData,
      productPromotion: {
        slogan: formData.productPromotion?.slogan || "FORGED IN IRON // BUILT FOR WAR",
        productName: formData.productPromotion?.productName || formData.title,
        productSubtitle: formData.productPromotion?.productSubtitle || formData.subtitle,
        productImage: formData.productPromotion?.productImage || formData.heroImage,
        promoBadgeText: formData.productPromotion?.promoBadgeText || "SPECIAL OFFER // 15% OFF",
        couponCode: formData.productPromotion?.couponCode || "MONTANHA15",
        ctaUrl: formData.productPromotion?.ctaUrl || "WWW.MONTANHAIRON.COM.BR",
        specBadges: formData.productPromotion?.specBadges || [
          { title: "GRAVITY CAST", subtitle: "Single pour iron" },
          { title: "POWDER COAT", subtitle: "Matte grip" },
          { title: "CALIBRATED", subtitle: "+/- 0.5% weight" },
          { title: "LIFETIME SPEC", subtitle: "Indestructible" },
        ],
        features: formData.productPromotion?.features || [],
        ...formData.productPromotion,
        [field]: value,
      },
    });
  };

  // Facility Spotlight helpers
  const updateFacilitySpotlight = <K extends keyof FacilitySpotlight>(
    field: K,
    value: FacilitySpotlight[K]
  ) => {
    setFormData({
      ...formData,
      facilitySpotlight: {
        facilityName: formData.facilitySpotlight?.facilityName || "MONTANHA PERFORMANCE LAB",
        headCoach: formData.facilitySpotlight?.headCoach || "COACH MONTANHA",
        location: formData.facilitySpotlight?.location || "SÃO PAULO // SP",
        website: formData.facilitySpotlight?.website || "WWW.MONTANHALAB.COM.BR",
        methodsUsed: formData.facilitySpotlight?.methodsUsed || ["KETTLEBELLS", "STEEL MACES", "CLUBBELLS"],
        specialties: formData.facilitySpotlight?.specialties || ["Força", "Condicionamento"],
        galleryPhotos: formData.facilitySpotlight?.galleryPhotos || [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
        ],
        overviewText: formData.facilitySpotlight?.overviewText || "",
        missionText: formData.facilitySpotlight?.missionText || "",
        philosophyText: formData.facilitySpotlight?.philosophyText || "",
        anchoredQuote: formData.facilitySpotlight?.anchoredQuote || "",
        ...formData.facilitySpotlight,
        [field]: value,
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        data-testid="article-modal"
        className="theme-app-card max-w-4xl max-h-[90vh] overflow-y-auto p-6 custom-scrollbar font-sans border-2 shadow-2xl"
      >
        <DialogHeader className="border-b-2 border-current pb-3">
          <DialogTitle className="text-xl font-black flex items-center gap-2 uppercase">
            <Wand2 className="w-5 h-5 text-amber-500" />
            <span>Editor Editorial de Artigos, Treinos & Anúncios</span>
          </DialogTitle>
        </DialogHeader>

        {/* Validation Error Alert */}
        {saveError && (
          <div
            data-testid="article-error-msg"
            className="p-3 rounded-lg bg-red-500/10 border-2 border-red-500 text-red-700 text-xs font-bold flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{saveError}</span>
          </div>
        )}

        {/* AI Loading Banner */}
        {isAiLoading && (
          <div className="bg-amber-400 text-black border-2 border-black p-3 rounded-lg flex items-center gap-3 font-bold animate-pulse">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-black">{aiStatusMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {/* Left Column: Basic Details & Titles */}
          <div className="space-y-4">
            <div>
              <Label className="text-xs font-bold mb-1 block">CATEGORIA DA MATÉRIA</Label>
              <Input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value.toUpperCase() })}
                placeholder="EX: MONTANHA METHOD, GEAR & PROMO, STUDIO SPOTLIGHT"
                className="theme-app-input font-bold border-2"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <Label className="text-xs font-bold">MANCHETE / TÍTULO PRINCIPAL (H1)</Label>
                <button
                  type="button"
                  onClick={handleSuggestHeadlines}
                  disabled={isAiLoading}
                  className="text-[11px] font-bold text-amber-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  Sugerir Títulos com IA
                </button>
              </div>
              <Input
                data-testid="input-article-title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value.toUpperCase() })}
                placeholder="Título impactante em caixa alta"
                className="theme-app-input font-black text-sm border-2"
              />
            </div>

            <div>
              <Label className="text-xs font-bold mb-1 block">SUBTÍTULO / DECK EDITORIAL</Label>
              <Textarea
                data-testid="input-article-subtitle"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="Resumo de 1 a 2 frases que sintetiza o takeaway da matéria..."
                className="theme-app-input text-xs h-16 border"
              />
            </div>

            {/* Author Details & Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-[11px] font-bold">Autor da Matéria</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Nome do Autor"
                  className="theme-app-input text-xs mt-1 border"
                />
              </div>
              <div>
                <Label className="text-[11px] font-bold">Bio Curta</Label>
                <Input
                  value={formData.authorBio || ""}
                  onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                  placeholder="Credenciais / Cargo"
                  className="theme-app-input text-xs mt-1 border"
                />
              </div>
            </div>

            {/* Template Selection */}
            <div>
              <Label className="text-xs font-bold mb-1.5 flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-amber-500" />
                <span>TEMPLATE DE DIAGRAMAÇÃO</span>
              </Label>
              <select
                value={formData.layoutTemplate}
                onChange={(e) =>
                  setFormData({ ...formData, layoutTemplate: e.target.value as LayoutTemplate })
                }
                className="theme-app-input w-full rounded-md px-3 py-2 text-xs font-bold border-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="editorial-lead">Standard Feature / Artigo Técnico (3 Colunas + Drop Cap + Hero Banner)</option>
                <option value="workout-protocol">Workout Protocol & Exercise Breakdowns (Clusters A1/A2, QR Code, Warmup)</option>
                <option value="product-ad">Full-Page Product & Gear Promotion (Anúncio Full, Cupom, QR Code, Tech Specs)</option>
                <option value="facility-spotlight">Studio / Facility Spotlight (Collage de Fotos, Tech Sheet, Manifesto)</option>
                <option value="two-column-quote">2 Colunas Clássicas com Citação Central</option>
                <option value="infographic-tips">Guia Prático com Cards de Dicas Numeradas</option>
              </select>
            </div>

            {/* Extension / Page Span (1 Page vs 2 Pages Spread) */}
            <div className="p-3 rounded-lg border-2 theme-app-card-subtle space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5 text-amber-500" />
                  <span>EXTENSÃO DO ARTIGO NA REVISTA</span>
                </Label>
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">
                  {formData.pageSpan === 2 ? "2 PÁGINAS (DUPLA)" : "1 PÁGINA A4"}
                </span>
              </div>
              <select
                value={formData.pageSpan || 1}
                onChange={(e) => setFormData({ ...formData, pageSpan: parseInt(e.target.value) as 1 | 2 })}
                className="w-full theme-app-input text-xs font-bold border-2 p-1.5 rounded"
              >
                <option value={1}>1 Página A4 (Artigo Padrão)</option>
                <option value={2}>2 Páginas A4 (Matéria Longa / Página Dupla Especial)</option>
              </select>
              <p className="text-[10px] opacity-75 leading-tight">
                Use 2 Páginas para matérias principais extensas, permitindo ler todo o texto com fotos maiores e diagramação espaçosa.
              </p>
            </div>

            {/* Featured on Cover Switch */}
            <div className="flex items-center justify-between p-2.5 rounded-lg border-2 theme-app-card-subtle">
              <div className="space-y-0.5">
                <span className="text-xs font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Destaque na Capa da Revista
                </span>
                <p className="text-[10px] opacity-75">
                  Indexar automaticamente o título e categoria desta matéria na capa da edição
                </p>
              </div>
              <Switch
                checked={formData.featuredOnCover}
                onCheckedChange={(val) => setFormData({ ...formData, featuredOnCover: val })}
              />
            </div>
          </div>

          {/* Right Column: Hero Image with ImagePicker & Quotes */}
          <div className="space-y-4">
            {/* Universal Hero ImagePicker (Upload / AI / URL) */}
            <ImagePicker
              label="Foto Hero do Artigo"
              value={formData.heroImage}
              onChange={(url) => setFormData({ ...formData, heroImage: url, heroImagePosition: formData.heroImagePosition || "50% 50%" })}
              position={formData.heroImagePosition || "50% 50%"}
              onPositionChange={(pos) => setFormData({ ...formData, heroImagePosition: pos })}
              aspectRatio="landscape"
              placeholderPrompt="Fotografia editorial em 8k de atleta em treino intenso..."
              helperText="Upload do PC, IA ou URL"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-[10px] font-bold">ENQUADRAMENTO DA FOTO NO ARTIGO</Label>
                <select
                  value={formData.heroImageLayout || "banner"}
                  onChange={(e) => setFormData({ ...formData, heroImageLayout: e.target.value as any })}
                  className="w-full theme-app-input text-xs font-bold mt-1 border-2 p-1.5 rounded"
                >
                  <option value="banner">Horizontal Panorâmico (Padrão)</option>
                  <option value="contain">Sem Cortar / Enquadramento Total</option>
                  <option value="compact">Faixa Compacta (Mais espaço para texto)</option>
                  <option value="hidden">Ocultar Foto (Apenas Texto e Citações)</option>
                </select>
              </div>

              <div>
                <Label className="text-[10px] font-bold">DENSIDADE / TAMANHO DO TEXTO</Label>
                <select
                  value={formData.textDensity || "normal"}
                  onChange={(e) => setFormData({ ...formData, textDensity: e.target.value as any })}
                  className="w-full theme-app-input text-xs font-bold mt-1 border-2 p-1.5 rounded"
                >
                  <option value="compact">Texto Compacto (Cabe mais texto sem cortar)</option>
                  <option value="normal">Normal (Equilibrado)</option>
                  <option value="spacious">Espaçoso (Artigos curtos)</option>
                </select>
              </div>
            </div>

            <div>
              <Label className="text-[10px] font-bold">LEGENDA DA FOTO HERO (CRÉDITOS)</Label>
              <Input
                value={formData.heroImageCaption || ""}
                onChange={(e) => setFormData({ ...formData, heroImageCaption: e.target.value })}
                placeholder="Ex: Movimento balístico capturado no Montanha Lab."
                className="theme-app-input text-xs mt-1 border"
              />
            </div>

            {/* Secondary Image for 2-Page Spreads */}
            {formData.pageSpan === 2 && (
              <div className="p-3 rounded-lg border-2 theme-app-card-subtle space-y-2 bg-amber-400/5">
                <Label className="text-xs font-bold flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>FOTO SECUNDÁRIA (PARTE 2 / PÁGINA DUPLA)</span>
                </Label>
                <ImagePicker
                  label="Segunda Imagem Editorial"
                  value={formData.secondaryImage || ""}
                  onChange={(url) => setFormData({ ...formData, secondaryImage: url, secondaryImagePosition: formData.secondaryImagePosition || "50% 50%" })}
                  position={formData.secondaryImagePosition || "50% 50%"}
                  onPositionChange={(pos) => setFormData({ ...formData, secondaryImagePosition: pos })}
                  aspectRatio="landscape"
                  placeholderPrompt="Fotografia complementar de apoio em alta resolução..."
                  helperText="Exibida no topo da 2ª página da matéria dupla"
                />
              </div>
            )}

            {/* Visual Spotlight Image (para matérias curtas ou preenchimento de rodapé) */}
            <div className="p-3 rounded-lg border-2 theme-app-card-subtle space-y-2">
              <Label className="text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>VISUAL SPOTLIGHT (DESTAQUE INFERIOR / ARTIGOS CURTOS)</span>
              </Label>
              <ImagePicker
                label="Imagem do Visual Spotlight (Opcional)"
                value={formData.bottomSpotlightImage || ""}
                onChange={(url) => setFormData({ ...formData, bottomSpotlightImage: url, bottomSpotlightPosition: formData.bottomSpotlightPosition || "50% 50%" })}
                position={formData.bottomSpotlightPosition || "50% 50%"}
                onPositionChange={(pos) => setFormData({ ...formData, bottomSpotlightPosition: pos })}
                aspectRatio="landscape"
                placeholderPrompt="Fotografia editorial temática em alta definição para preencher o rodapé..."
                helperText="Preenche automaticamente o espaço inferior quando a matéria for curta"
              />
              <Input
                value={formData.bottomSpotlightCaption || ""}
                onChange={(e) => setFormData({ ...formData, bottomSpotlightCaption: e.target.value })}
                placeholder="Legenda ou frase do Visual Spotlight (Opcional)"
                className="theme-app-input text-xs mt-1 border"
              />
            </div>

            {/* Pull Quotes Manager */}
            <div className="theme-app-card-subtle p-3.5 rounded-lg border-2 space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-amber-500" />
                  <span>CITAÇÕES DE DESTAQUE (PULL QUOTES)</span>
                </Label>
                <button
                  type="button"
                  onClick={handleExtractQuotes}
                  disabled={isAiLoading || !formData.content}
                  className="text-[11px] font-bold text-amber-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  Extrair com IA
                </button>
              </div>

              <div className="space-y-1.5 max-h-24 overflow-y-auto">
                {(formData.pullQuotes || []).map((q, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 theme-app-card px-2.5 py-1.5 rounded text-xs border"
                  >
                    <span className="italic line-clamp-1 font-medium">"{q}"</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveQuote(idx)}
                      className="text-red-500 hover:text-red-400 p-1 cursor-pointer"
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
                  className="theme-app-input text-xs h-8 border"
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
                  className="h-8 bg-amber-500 text-black font-bold border border-black cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- 1. WORKOUT PROTOCOL BUILDER ---------------- */}
        {formData.layoutTemplate === "workout-protocol" && (
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-4 my-2 shadow-xs">
            <div className="flex items-center justify-between border-b-2 pb-2">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-amber-500" />
                <h3 className="font-black text-sm uppercase tracking-tight">
                  Configuração do Protocolo de Treino (Clusters A1/A2 e QR Code)
                </h3>
              </div>
              <Button
                size="sm"
                onClick={handleAddWorkoutExercise}
                className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-black flex items-center gap-1 border border-black cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                Adicionar Exercício
              </Button>
            </div>

            {/* Warm-Up / Mobility Box */}
            <div>
              <Label className="text-xs font-bold uppercase">FASE 0: MOBILIDADE & AQUECIMENTO</Label>
              <Input
                value={formData.workoutProtocol?.warmupPrep || ""}
                onChange={(e) => updateWorkoutProtocol("warmupPrep", e.target.value)}
                placeholder="Ex: MOBILITY & ACTIVATION (5 MIN): T-spine bridges, halos..."
                className="theme-app-input text-xs mt-1 border"
              />
            </div>

            {/* Exercises List */}
            <div className="space-y-3">
              {(formData.workoutProtocol?.exercises || []).map((ex, idx) => (
                <div key={idx} className="theme-app-card p-3 rounded-lg border-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={ex.code}
                      onChange={(e) => handleUpdateExercise(idx, "code", e.target.value.toUpperCase())}
                      placeholder="A1 / B1"
                      className="theme-app-input font-mono font-black text-xs h-7 w-20 text-center border text-amber-600"
                    />
                    <Input
                      value={ex.name}
                      onChange={(e) => handleUpdateExercise(idx, "name", e.target.value.toUpperCase())}
                      placeholder="NOME DO EXERCÍCIO"
                      className="theme-app-input font-bold text-xs h-7 flex-1 border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveExercise(idx)}
                      className="text-red-500 hover:text-red-400 p-1 cursor-pointer"
                      title="Remover exercício"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Input
                      value={ex.setsReps}
                      onChange={(e) => handleUpdateExercise(idx, "setsReps", e.target.value.toUpperCase())}
                      placeholder="Séries e Reps"
                      className="theme-app-input font-mono text-xs h-7 border text-amber-600 font-bold"
                    />
                    <Input
                      value={ex.tempoRest}
                      onChange={(e) => handleUpdateExercise(idx, "tempoRest", e.target.value.toUpperCase())}
                      placeholder="Tempo e Descanso"
                      className="theme-app-input font-mono text-xs h-7 border"
                    />
                  </div>

                  <Input
                    value={ex.keyPoints}
                    onChange={(e) => handleUpdateExercise(idx, "keyPoints", e.target.value)}
                    placeholder="Instruções de execução e pontos-chave biomecânicos..."
                    className="theme-app-input text-xs h-7 border"
                  />
                </div>
              ))}
            </div>

            {/* Finisher & Video URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t">
              <div>
                <Label className="text-xs font-bold uppercase">DIRETRIZES DO FINISHER</Label>
                <Input
                  value={formData.workoutProtocol?.finisher || ""}
                  onChange={(e) => updateWorkoutProtocol("finisher", e.target.value)}
                  placeholder="Ex: FINISHER: Heavy Sandbag Carry..."
                  className="theme-app-input text-xs mt-1 border"
                />
              </div>

              <div>
                <Label className="text-xs font-bold uppercase">LINK DO VÍDEO TUTORIAL (QR CODE)</Label>
                <Input
                  value={formData.workoutProtocol?.videoQrUrl || ""}
                  onChange={(e) => updateWorkoutProtocol("videoQrUrl", e.target.value)}
                  placeholder="https://coachmontanha.com.br/demo-01"
                  className="theme-app-input text-xs mt-1 font-mono border"
                />
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 2. PRODUCT AD BUILDER ---------------- */}
        {formData.layoutTemplate === "product-ad" && (
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-4 my-2 shadow-xs">
            <div className="flex items-center gap-2 border-b pb-2">
              <Tag className="w-4 h-4 text-amber-500" />
              <h3 className="font-black text-sm uppercase tracking-tight">
                Configuração da Página de Anúncio / Produto & Gear
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold uppercase">SLOGAN DE IMPACTO</Label>
                <Input
                  value={formData.productPromotion?.slogan || ""}
                  onChange={(e) => updateProductPromotion("slogan", e.target.value.toUpperCase())}
                  placeholder="Ex: FORGED IN IRON // BUILT FOR WAR"
                  className="theme-app-input font-black text-xs mt-1 border"
                />
              </div>

              <div>
                <Label className="text-xs font-bold uppercase">BADGE PROMOCIONAL / DESCONTO</Label>
                <Input
                  value={formData.productPromotion?.promoBadgeText || ""}
                  onChange={(e) => updateProductPromotion("promoBadgeText", e.target.value.toUpperCase())}
                  placeholder="Ex: SPECIAL LAUNCH OFFER // 15% OFF"
                  className="theme-app-input font-bold text-xs mt-1 border text-amber-600"
                />
              </div>
            </div>

            <ImagePicker
              label="Foto Central do Produto / Equipamento"
              value={formData.productPromotion?.productImage || formData.heroImage}
              onChange={(url) => updateProductPromotion("productImage", url)}
              aspectRatio="landscape"
              placeholderPrompt="Equipamento de ferro fundido kettlebell em estúdio escuro com iluminação dramática..."
              helperText="Upload ou IA"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold uppercase">CÓDIGO DO CUPOM</Label>
                <Input
                  value={formData.productPromotion?.couponCode || ""}
                  onChange={(e) => updateProductPromotion("couponCode", e.target.value.toUpperCase())}
                  placeholder="Ex: MONTANHA15"
                  className="theme-app-input font-mono font-black text-xs mt-1 border text-amber-600"
                />
              </div>

              <div>
                <Label className="text-xs font-bold uppercase">URL DE COMPRA (QR CODE)</Label>
                <Input
                  value={formData.productPromotion?.ctaUrl || ""}
                  onChange={(e) => updateProductPromotion("ctaUrl", e.target.value)}
                  placeholder="WWW.MONTANHAIRON.COM.BR"
                  className="theme-app-input font-mono text-xs mt-1 border"
                />
              </div>
            </div>
          </div>
        )}

        {/* ---------------- 3. FACILITY SPOTLIGHT BUILDER ---------------- */}
        {formData.layoutTemplate === "facility-spotlight" && (
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-4 my-2 shadow-xs">
            <div className="flex items-center gap-2 border-b pb-2">
              <Building className="w-4 h-4 text-amber-500" />
              <h3 className="font-black text-sm uppercase tracking-tight">
                Configuração do Spotlight de Estúdio / Centro de Treinamento
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label className="text-[11px] font-bold uppercase">NOME DO ESPAÇO</Label>
                <Input
                  value={formData.facilitySpotlight?.facilityName || ""}
                  onChange={(e) => updateFacilitySpotlight("facilityName", e.target.value.toUpperCase())}
                  placeholder="Ex: MONTANHA LAB // SP"
                  className="theme-app-input font-bold text-xs mt-1 border"
                />
              </div>

              <div>
                <Label className="text-[11px] font-bold uppercase">HEAD COACH / DIRETOR</Label>
                <Input
                  value={formData.facilitySpotlight?.headCoach || ""}
                  onChange={(e) => updateFacilitySpotlight("headCoach", e.target.value.toUpperCase())}
                  placeholder="Ex: COACH MONTANHA"
                  className="theme-app-input text-xs mt-1 border"
                />
              </div>

              <div>
                <Label className="text-[11px] font-bold uppercase">LOCALIZAÇÃO</Label>
                <Input
                  value={formData.facilitySpotlight?.location || ""}
                  onChange={(e) => updateFacilitySpotlight("location", e.target.value)}
                  placeholder="Ex: SÃO PAULO // SP"
                  className="theme-app-input text-xs mt-1 border"
                />
              </div>
            </div>

            <div>
              <Label className="text-[11px] font-bold uppercase">MANIFESTO ANCORADO (PULL QUOTE DO ESTÚDIO)</Label>
              <Input
                value={formData.facilitySpotlight?.anchoredQuote || ""}
                onChange={(e) => updateFacilitySpotlight("anchoredQuote", e.target.value)}
                placeholder="Ex: O ambiente certo torna a mediocridade insuportável."
                className="theme-app-input text-xs mt-1 border text-amber-600 font-semibold"
              />
            </div>
          </div>
        )}

        {/* Article Body Content & Rich Formatting Toolbar */}
        <div className="space-y-2 pt-2 border-t">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Label className="text-xs font-black uppercase tracking-tight">
                CORPO DO TEXTO (PARÁGRAFOS)
              </Label>
              <div className="flex items-center rounded border overflow-hidden text-[10px] font-bold">
                <button
                  type="button"
                  onClick={() => setPreviewFormatted(false)}
                  className={`px-2 py-0.5 flex items-center gap-1 cursor-pointer ${
                    !previewFormatted ? "bg-amber-400 text-black font-black" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Editor</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewFormatted(true)}
                  className={`px-2 py-0.5 flex items-center gap-1 cursor-pointer ${
                    previewFormatted ? "bg-amber-400 text-black font-black" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>Pré-Visualizar Formatação</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold opacity-75 mr-1">Polir com IA:</span>
              <button
                type="button"
                onClick={() => handlePolishText("journalistic")}
                disabled={isAiLoading || !formData.content}
                className="text-[10px] font-bold bg-amber-400 text-black px-2 py-0.5 rounded border border-black hover:bg-amber-500 cursor-pointer shadow-xs"
              >
                Jornalístico
              </button>
              <button
                type="button"
                onClick={() => handlePolishText("motivational")}
                disabled={isAiLoading || !formData.content}
                className="text-[10px] font-bold bg-amber-400 text-black px-2 py-0.5 rounded border border-black hover:bg-amber-500 cursor-pointer shadow-xs"
              >
                Motivacional
              </button>
            </div>
          </div>

          {polishSuccess && (
            <div className="p-2 rounded bg-emerald-500/15 border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 animate-fadeIn">
              <Check className="w-3.5 h-3.5" />
              <span>{polishSuccess}</span>
            </div>
          )}

          {/* Quick Formatting Toolbar */}
          <div className="flex flex-wrap items-center gap-1 p-1.5 rounded-lg border-2 theme-app-card-subtle text-xs">
            <button
              type="button"
              onClick={() => applyFormatting("**", "**", "texto em negrito")}
              className="px-2 py-1 rounded border hover:bg-black/10 font-black flex items-center gap-1 cursor-pointer"
              title="Negrito (**texto**)"
            >
              <Bold className="w-3.5 h-3.5" />
              <span>Negrito</span>
            </button>

            <button
              type="button"
              onClick={() => applyFormatting("*", "*", "texto em itálico")}
              className="px-2 py-1 rounded border hover:bg-black/10 italic font-bold flex items-center gap-1 cursor-pointer"
              title="Itálico (*texto*)"
            >
              <Italic className="w-3.5 h-3.5" />
              <span>Itálico</span>
            </button>

            <button
              type="button"
              onClick={() => applyFormatting("<u>", "</u>", "texto sublinhado")}
              className="px-2 py-1 rounded border hover:bg-black/10 underline font-bold flex items-center gap-1 cursor-pointer"
              title="Sublinhado (<u>texto</u>)"
            >
              <Underline className="w-3.5 h-3.5" />
              <span>Sublinhado</span>
            </button>

            <button
              type="button"
              onClick={() => applyFormatting("==", "==", "texto destacado")}
              className="px-2 py-1 rounded border bg-amber-400/20 text-amber-700 hover:bg-amber-400/40 font-black flex items-center gap-1 cursor-pointer"
              title="Marca-Texto / Destaque (==texto==)"
            >
              <Highlighter className="w-3.5 h-3.5" />
              <span>Destaque</span>
            </button>

            <button
              type="button"
              onClick={() => applyFormatting("“", "”", "citação de impacto")}
              className="px-2 py-1 rounded border hover:bg-black/10 font-bold flex items-center gap-1 cursor-pointer"
              title="Aspas Editoriais (“texto”)"
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Aspas</span>
            </button>

            <button
              type="button"
              onClick={() => applyFormatting("\n\n### ", "\n", "SUBTÍTULO DE SEÇÃO")}
              className="px-2 py-1 rounded border hover:bg-black/10 font-mono font-bold flex items-center gap-1 cursor-pointer"
              title="Subtítulo Intermediário (### Título)"
            >
              <Heading3 className="w-3.5 h-3.5" />
              <span>Subtítulo</span>
            </button>

            <button
              type="button"
              onClick={() => applyFormatting("\n- ", "", "Ponto chave da matéria")}
              className="px-2 py-1 rounded border hover:bg-black/10 font-bold flex items-center gap-1 cursor-pointer"
              title="Lista de Marcadores (- item)"
            >
              <List className="w-3.5 h-3.5" />
              <span>Lista</span>
            </button>
          </div>

          {!previewFormatted ? (
            <Textarea
              ref={textareaRef}
              data-testid="textarea-article-content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Escreva os parágrafos da matéria aqui. Use a barra de ferramentas acima para destacar, sublinhar, aplicar aspas e subtítulos..."
              className="theme-app-input text-xs h-48 leading-relaxed font-sans border-2"
            />
          ) : (
            <div className="theme-app-card p-4 rounded-lg border-2 h-48 overflow-y-auto space-y-2 text-xs leading-relaxed custom-scrollbar bg-slate-900/10">
              {(formData.content || "")
                .split("\n\n")
                .map((p, idx) => {
                  if (p.startsWith("### ") || p.startsWith("## ")) {
                    return (
                      <h4 key={idx} className="font-black text-amber-500 uppercase text-xs pt-1 border-b border-amber-500/30">
                        // {p.replace(/^#+\s*/, "")}
                      </h4>
                    );
                  }
                  if (p.startsWith("- ") || p.startsWith("• ")) {
                    return (
                      <ul key={idx} className="space-y-1 pl-2">
                        {p.split("\n").map((line, liIdx) => (
                          <li key={liIdx} className="flex items-start gap-1">
                            <span className="text-amber-500 font-bold">▸</span>
                            <span>{line.replace(/^[-•]\s*/, "")}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="text-justify">
                      {p}
                    </p>
                  );
                })}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <DialogFooter className="border-t pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label className="text-xs font-bold">Tempo estimado de leitura:</Label>
            <Input
              type="number"
              value={formData.estimatedReadTime}
              onChange={(e) =>
                setFormData({ ...formData, estimatedReadTime: parseInt(e.target.value) || 3 })
              }
              className="theme-app-input text-xs h-8 w-16 text-center border"
            />
            <span className="text-xs opacity-75">minutos</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              data-testid="btn-cancel-article"
              onClick={onClose}
              className="h-9 font-bold text-xs border-2"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              data-testid="btn-save-article"
              className="h-9 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs px-5 border-2 border-black shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Salvar Matéria</span>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
