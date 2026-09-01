import React from "react";
import {
  Article,
  CoverConfig,
  CoverHighlight,
  CoverStyleVariant,
  TextScalePreset,
} from "../../types/magazine";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { ImagePicker } from "../ui/image-picker";
import { formatPageNumber } from "../../lib/magazine-utils";
import {
  Sparkles,
  Plus,
  Minus,
  Trash2,
  Image as ImageIcon,
  Wand2,
  Layout,
  Type,
  CheckCircle2,
  Sliders,
  Maximize2,
  Zap,
} from "lucide-react";

interface CoverCustomizerProps {
  coverConfig: CoverConfig;
  onChange: (updated: CoverConfig) => void;
  articles?: Article[];
  pageVisibility?: {
    showCover?: boolean;
    showEditorLetter?: boolean;
    showContributors?: boolean;
    showTableOfContents?: boolean;
    showBackCover?: boolean;
  };
}

export const CoverCustomizer: React.FC<CoverCustomizerProps> = ({
  coverConfig,
  onChange,
  articles = [],
  pageVisibility,
}) => {
  const updateField = <K extends keyof CoverConfig>(field: K, value: CoverConfig[K]) => {
    onChange({
      ...coverConfig,
      [field]: value,
    });
  };

  const handleSelectTextScale = (scale: number, presetId: TextScalePreset) => {
    onChange({
      ...coverConfig,
      textScale: scale,
      highlightsFontSize: presetId,
    });
  };

  const handleAdjustScale = (delta: number) => {
    const newScale = Math.min(160, Math.max(80, (coverConfig.textScale || 100) + delta));
    updateField("textScale", newScale);
  };

  // Helper to compute calculated page number for each article
  const getArticlePageNumber = (targetArticleId: string): number => {
    let page = 1; // Cover is page 1
    if (pageVisibility?.showEditorLetter !== false) page += 1;
    if (pageVisibility?.showContributors) page += 1;
    if (pageVisibility?.showTableOfContents !== false) page += 1;

    const enabledArticles = articles.filter((a) => a.enabled !== false);
    const artIndex = enabledArticles.findIndex((a) => a.id === targetArticleId);
    return artIndex >= 0 ? page + artIndex : page;
  };

  // Auto-Index Highlights directly from project articles
  const handleAutoIndexAllArticles = () => {
    const activeArticles = articles.filter((a) => a.enabled !== false);
    if (activeArticles.length === 0) {
      alert("Nenhum artigo ativo encontrado no projeto.");
      return;
    }

    const indexedHighlights: CoverHighlight[] = activeArticles.slice(0, 4).map((art, idx) => {
      const pageNum = getArticlePageNumber(art.id);
      return {
        id: "hl-" + Date.now() + "-" + idx,
        tag: art.category ? `// 0${idx + 1}. ${art.category}` : `// 0${idx + 1}. MATÉRIA`,
        title: art.title,
        authorCallout: art.author,
        pageTarget: pageNum,
      };
    });

    updateField("highlights", indexedHighlights);
  };

  // Link single highlight to a specific article
  const handleLinkHighlightToArticle = (highlightId: string, articleId: string) => {
    const art = articles.find((a) => a.id === articleId);
    if (!art) return;

    const pageNum = getArticlePageNumber(art.id);
    const currentHlIndex = coverConfig.highlights.findIndex((h) => h.id === highlightId);
    const numPrefix = currentHlIndex >= 0 ? `// 0${currentHlIndex + 1}. ` : "";

    const updated = coverConfig.highlights.map((h) =>
      h.id === highlightId
        ? {
            ...h,
            tag: art.category ? `${numPrefix}${art.category}` : `${numPrefix}DOSSIER`,
            title: art.title,
            authorCallout: art.author,
            pageTarget: pageNum,
          }
        : h
    );
    updateField("highlights", updated);
  };

  // Set Main Headline directly from an article
  const handleSetMainHeadlineFromArticle = (articleId: string) => {
    const art = articles.find((a) => a.id === articleId);
    if (!art) return;

    onChange({
      ...coverConfig,
      mainHeadline: art.title.toUpperCase(),
      subHeadline: art.subtitle || (art.content ? art.content.slice(0, 110) + "..." : ""),
      categoryTag: art.category || "EXCLUSIVO",
      authorCallout: art.author ? art.author.toUpperCase() : "COACH MONTANHA",
    });
  };

  const handleAddHighlight = () => {
    const newHl: CoverHighlight = {
      id: "hl-" + Date.now(),
      tag: `// 0${coverConfig.highlights.length + 1}. PROTOCOLO`,
      title: "Nova matéria de força e alta performance",
      authorCallout: "Coach Montanha",
      pageTarget: coverConfig.highlights.length + 3,
    };
    updateField("highlights", [...coverConfig.highlights, newHl]);
  };

  const handleUpdateHighlight = (id: string, field: keyof CoverHighlight, value: any) => {
    const updated = coverConfig.highlights.map((h) =>
      h.id === id ? { ...h, [field]: value } : h
    );
    updateField("highlights", updated);
  };

  const handleRemoveHighlight = (id: string) => {
    updateField(
      "highlights",
      coverConfig.highlights.filter((h) => h.id !== id)
    );
  };

  // Unconventional strength photo presets
  const strengthPhotoPresets = [
    {
      label: "Heavy Kettlebell",
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85",
    },
    {
      label: "Mace & Athletic Power",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    },
    {
      label: "Studio Fitness Male",
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85",
    },
    {
      label: "Battle Ropes & Grit",
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=85",
    },
    {
      label: "Tire Flip & Power",
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=85",
    },
  ];

  const coverStyles: { id: CoverStyleVariant; name: string; desc: string }[] = [
    {
      id: "mad-methods",
      name: "Montanha Mad Methods (Industrial Dark & Yellow)",
      desc: "Estética My Mad Methods: Preto profundo, tipografia ultra-pesada, hazard stripes e HUD tático.",
    },
    {
      id: "peak-performance",
      name: "Peak Performance / Pro Edition (High-Key Studio & Angular Blue)",
      desc: "Estética Pro Fitness: Fundo High-Key Studio Lighting, grafismos angulares azul e preto, selo circular vermelho.",
    },
    {
      id: "tactical-stencil",
      name: "Tactical Stencil & Warning Orange",
      desc: "Laranja de sinalização e estética militar de treinamento tático com crosshair.",
    },
    {
      id: "monochrome-iron",
      name: "Monochrome Heavy Iron & Red",
      desc: "Alto contraste cru em preto e branco marfim com detalhes em vermelho rubi.",
    },
  ];

  const textScalePresets: { id: TextScalePreset; label: string; scale: number }[] = [
    { id: "compact", label: "Compacto", scale: 90 },
    { id: "normal", label: "Padrão (100%)", scale: 100 },
    { id: "large", label: "Grande (115% - Recomendado)", scale: 115 },
    { id: "extra-large", label: "Extra Grande (135% - Máxima Legibilidade)", scale: 135 },
  ];

  const currentScale = coverConfig.textScale || 100;

  return (
    <div className="space-y-6 font-sans">
      {/* 1. Typography Size & Legibility Manager */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Type className="w-4 h-4 text-amber-500" />
            <span>Gerenciador de Tamanho & Legibilidade dos Textos da Capa</span>
          </h3>
          <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-amber-400 text-black border-2 border-black">
            ESCALA ATUAL: {currentScale}%
          </span>
        </div>

        {/* Quick Size Presets */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {textScalePresets.map((preset) => {
            const isSelected = currentScale === preset.scale;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectTextScale(preset.scale, preset.id)}
                className={`p-3 rounded-lg border-2 text-xs font-black transition-all text-center flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95 ${
                  isSelected
                    ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400"
                    : "theme-app-card-subtle border-slate-300 hover:border-black hover:bg-amber-50"
                }`}
              >
                <span>{preset.label}</span>
                <span className="font-mono text-[10px] opacity-75">{preset.scale}%</span>
              </button>
            );
          })}
        </div>

        {/* Fine-Tuning Scale Slider with Step Buttons */}
        <div className="space-y-3 pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-500" />
              Ajuste Fino de Escala de Todas as Fontes da Capa
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleAdjustScale(-5)}
                disabled={currentScale <= 80}
                className="px-2 py-0.5 rounded border-2 border-black font-mono font-black text-xs hover:bg-black/10 disabled:opacity-30 cursor-pointer flex items-center gap-0.5"
                title="Diminuir 5%"
              >
                <Minus className="w-3 h-3" />
                <span>5%</span>
              </button>
              <span className="font-mono text-amber-600 font-black text-sm w-12 text-center">
                {currentScale}%
              </span>
              <button
                type="button"
                onClick={() => handleAdjustScale(5)}
                disabled={currentScale >= 160}
                className="px-2 py-0.5 rounded border-2 border-black font-mono font-black text-xs hover:bg-black/10 disabled:opacity-30 cursor-pointer flex items-center gap-0.5"
                title="Aumentar 5%"
              >
                <Plus className="w-3 h-3" />
                <span>5%</span>
              </button>
            </div>
          </div>
          <Slider
            value={[currentScale]}
            onValueChange={(val) => updateField("textScale", val[0])}
            min={80}
            max={160}
            step={5}
            className="py-1 cursor-pointer"
          />
        </div>
      </div>

      {/* 2. Cover Style Variant Switcher */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Layout className="w-4 h-4 text-amber-500" />
          <span>Estilo & Arquitetura da Capa Digital</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {coverStyles.map((cs) => {
            const isSelected = (coverConfig.coverStyleVariant || "mad-methods") === cs.id;
            return (
              <div
                key={cs.id}
                onClick={() => updateField("coverStyleVariant", cs.id)}
                className={`theme-app-card-subtle cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between active:scale-95 ${
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-400 shadow-md"
                    : "border-slate-300 hover:border-slate-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-black text-xs uppercase">{cs.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug">{cs.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Visual Identity & Masthead Section */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Wand2 className="w-4 h-4 text-amber-500" />
          <span>Identidade Visual & Masthead</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold">NOME DA REVISTA (MASTHEAD)</Label>
            <Input
              value={coverConfig.mastheadText}
              onChange={(e) => updateField("mastheadText", e.target.value.toUpperCase())}
              placeholder="Ex: MONTANHA"
              className="theme-app-input font-black text-base mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">SLOGAN / SUBTÍTULO DO LOGOTIPO</Label>
            <Input
              value={coverConfig.sloganText}
              onChange={(e) => updateField("sloganText", e.target.value.toUpperCase())}
              placeholder="Ex: UNCONVENTIONAL STRENGTH & HIGH PERFORMANCE"
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div>
            <Label className="text-xs font-bold">BADGE DE EDIÇÃO</Label>
            <Input
              value={coverConfig.issueBadge}
              onChange={(e) => updateField("issueBadge", e.target.value.toUpperCase())}
              placeholder="Ex: EDIÇÃO ESPECIAL // Nº 01"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">SELO DE PREÇO / CATEGORIA</Label>
            <Input
              value={coverConfig.priceBadge}
              onChange={(e) => updateField("priceBadge", e.target.value.toUpperCase())}
              placeholder="Ex: EDIÇÃO PREMIUM"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">DATA DE LANÇAMENTO</Label>
            <Input
              value={coverConfig.issueDate}
              onChange={(e) => updateField("issueDate", e.target.value.toUpperCase())}
              placeholder="Ex: SETEMBRO 2026"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>
        </div>

        {/* Tech Badges & Hazard Stripes toggles */}
        {coverConfig.coverStyleVariant === "mad-methods" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">Faixa Industrial Amarela (Hazard Stripe)</span>
              <Switch
                checked={coverConfig.showHazardStripe}
                onCheckedChange={(val) => updateField("showHazardStripe", val)}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">HUD Tático & Grid Técnico</span>
              <Switch
                checked={coverConfig.showTechHud}
                onCheckedChange={(val) => updateField("showTechHud", val)}
              />
            </div>
          </div>
        )}
      </div>

      {/* 4. Main Cover Story Headline (Direct Indexing from Project Articles) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>4. Manchete Principal da Capa (Cover Story)</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Indexe diretamente da matéria principal da edição ou digite manualmente.
            </p>
          </div>

          {/* Quick Selector from Project Articles */}
          {articles.length > 0 && (
            <div className="flex items-center gap-2 shrink-0">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    handleSetMainHeadlineFromArticle(e.target.value);
                    e.target.value = "";
                  }
                }}
                defaultValue=""
                className="theme-app-input font-bold text-xs h-8 border-2 border-black rounded px-2 bg-white text-black cursor-pointer shadow-xs"
              >
                <option value="" disabled>
                  ⚡ Puxar de uma Matéria...
                </option>
                {articles.map((art, idx) => (
                  <option key={art.id} value={art.id}>
                    Matéria #{idx + 1}: {art.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold">TAG DE CATEGORIA SUPERIOR</Label>
            <Input
              value={coverConfig.categoryTag}
              onChange={(e) => updateField("categoryTag", e.target.value.toUpperCase())}
              placeholder="Ex: EXCLUSIVO ou COVER STORY"
              className="theme-app-input font-mono text-xs mt-1 border-2 text-amber-600 font-bold"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">AUTOR EM DESTAQUE NA MANCHETE</Label>
            <Input
              value={coverConfig.authorCallout || ""}
              onChange={(e) => updateField("authorCallout", e.target.value.toUpperCase())}
              placeholder="Ex: COACH MONTANHA"
              className="theme-app-input font-mono text-xs mt-1 border-2 font-bold"
            />
          </div>
        </div>

        <div>
          <Label className="text-xs font-bold">MANCHETE PRINCIPAL (ALL CAPS)</Label>
          <Input
            value={coverConfig.mainHeadline}
            onChange={(e) => updateField("mainHeadline", e.target.value.toUpperCase())}
            placeholder="Ex: O CÓDIGO DA ALTA PERFORMANCE"
            className="theme-app-input font-black text-base mt-1 border-2"
          />
        </div>

        <div>
          <Label className="text-xs font-bold">SUBTÍTULO DA MATÉRIA PRINCIPAL</Label>
          <Input
            value={coverConfig.subHeadline}
            onChange={(e) => updateField("subHeadline", e.target.value)}
            placeholder="Ex: Como reprogramar o metabolismo e forjar disciplina inabalável."
            className="theme-app-input text-xs mt-1 border-2 font-medium"
          />
        </div>
      </div>

      {/* 5. Side Highlights / Articles Presented on Cover (Auto-Indexing & Live Link) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-amber-500" />
              <span>5. Chamadas Laterais & Artigos Apresentados na Capa</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Indexe as matérias cadastradas para sincronizar títulos, tags e números exatos de página automaticamente.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {articles.length > 0 && (
              <Button
                size="sm"
                onClick={handleAutoIndexAllArticles}
                className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs flex items-center gap-1 border-2 border-black shadow-xs cursor-pointer"
                title="Puxa todas as matérias cadastradas e calcula as páginas automaticamente"
              >
                <Zap className="w-3.5 h-3.5 text-black" />
                <span>⚡ Auto-Indexar Matérias</span>
              </Button>
            )}

            <Button
              size="sm"
              onClick={handleAddHighlight}
              variant="outline"
              className="h-8 font-black text-xs flex items-center gap-1 border-2 border-current shadow-xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar Manual</span>
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {coverConfig.highlights.map((hl, idx) => (
            <div
              key={hl.id}
              className="theme-app-card-subtle p-3.5 rounded-lg border-2 border-slate-300 space-y-2.5 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-amber-600 uppercase">
                    CHAMADA #{idx + 1}
                  </span>
                  {hl.pageTarget ? (
                    <span className="bg-black text-amber-400 font-mono text-[9px] font-black px-2 py-0.5 rounded border border-black uppercase">
                      PÁG. {formatPageNumber(hl.pageTarget)}
                    </span>
                  ) : null}
                </div>

                {/* Quick Link Dropdown */}
                <div className="flex items-center gap-2">
                  {articles.length > 0 && (
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                           handleLinkHighlightToArticle(hl.id, e.target.value);
                          e.target.value = "";
                        }
                      }}
                      defaultValue=""
                      className="theme-app-input text-[11px] font-bold h-7 border rounded px-1.5 bg-white text-black cursor-pointer"
                    >
                      <option value="" disabled>
                        🔗 Vincular à Matéria...
                      </option>
                      {articles.map((art) => {
                        const pageNum = getArticlePageNumber(art.id);
                        return (
                          <option key={art.id} value={art.id}>
                            [Pág {formatPageNumber(pageNum)}] {art.title}
                          </option>
                        );
                      })}
                    </select>
                  )}
                    </select>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemoveHighlight(hl.id)}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded transition-colors cursor-pointer"
                    title="Remover Chamada"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-4">
                  <Label className="text-[10px] font-bold">TAG / CATEGORIA</Label>
                  <Input
                    value={hl.tag}
                    onChange={(e) => handleUpdateHighlight(hl.id, "tag", e.target.value.toUpperCase())}
                    placeholder="Ex: // 01. BALÍSTICA & POTÊNCIA"
                    className="theme-app-input text-xs font-mono font-bold mt-1 border-2"
                  />
                </div>
                <div className="sm:col-span-6">
                  <Label className="text-[10px] font-bold">TÍTULO DA MATÉRIA NA CAPA</Label>
                  <Input
                    value={hl.title}
                    onChange={(e) => handleUpdateHighlight(hl.id, "title", e.target.value)}
                    placeholder="Título chamativo de alta legibilidade"
                    className="theme-app-input text-xs font-bold mt-1 border-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-[10px] font-bold">PÁGINA</Label>
                  <Input
                    type="number"
                    value={hl.pageTarget || ""}
                    onChange={(e) => handleUpdateHighlight(hl.id, "pageTarget", parseInt(e.target.value) || 0)}
                    placeholder="Ex: 3"
                    className="theme-app-input text-xs font-mono font-bold mt-1 border-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Photography with ImagePicker (Upload / AI Prompt / Web Presets) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <ImagePicker
          label="Fotografia de Fundo da Capa"
          value={coverConfig.backgroundImage}
          onChange={(url) => updateField("backgroundImage", url)}
          aspectRatio="portrait"
          placeholderPrompt="Guerreiro atleta executando balística pesada com kettlebell em estúdio de alta luz..."
          helperText="Faça upload do PC, gere com IA ou use presets"
        />

        {/* Quick Presets */}
        <div className="pt-2 border-t border-slate-200">
          <Label className="text-[11px] font-bold uppercase mb-2 block opacity-80">
            Ou escolha um dos Presets Rápidos de Força:
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {strengthPhotoPresets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => updateField("backgroundImage", preset.url)}
                className="group relative rounded-lg overflow-hidden border-2 border-slate-300 hover:border-black transition-all text-left aspect-[4/3] shadow-xs cursor-pointer"
              >
                <img
                  src={preset.url}
                  alt={preset.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/60 flex items-end p-1.5">
                  <span className="text-[9px] font-black text-amber-300 leading-tight uppercase">
                    {preset.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Overlay Dark Slider */}
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <div className="flex justify-between text-xs font-bold">
            <span>Escurecimento / Opacidade da Foto</span>
            <span className="font-mono text-amber-500 font-black">{coverConfig.backgroundOverlayOpacity}%</span>
          </div>
          <Slider
            value={[coverConfig.backgroundOverlayOpacity]}
            onValueChange={(val) => updateField("backgroundOverlayOpacity", val[0] ?? 50)}
            min={10}
            max={90}
            step={5}
            className="py-1 cursor-pointer"
          />
        </div>
      </div>

      {/* 7. Base & Rodapé da Capa (Editora, Metadados Técnicos, Código de Barras e Destaques) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5">
        <div className="flex items-center justify-between border-b pb-2">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Layout className="w-4 h-4 text-amber-500" />
            <span>7. Textos da Base da Capa (Rodapé, Editora & Código de Barras)</span>
          </h3>
          <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
            RODAPÉ DA CAPA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold">NOME DA EDITORA / IMPRINT (RODAPÉ ESQUERDO)</Label>
            <Input
              value={coverConfig.footerPublisherText ?? ""}
              onChange={(e) => updateField("footerPublisherText", e.target.value.toUpperCase())}
              placeholder="Ex: REVISTA MONTANHA EDITORIAL CORP."
              className="theme-app-input font-bold text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">SUBTEXTO TÉCNICO DO RODAPÉ</Label>
            <Input
              value={coverConfig.footerSubText ?? ""}
              onChange={(e) => updateField("footerSubText", e.target.value.toUpperCase())}
              placeholder="Ex: DIAGRAMAÇÃO A4 DIGITAL // PRINT-READY"
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <Label className="text-xs font-bold">CÓDIGO DE BARRAS (NUMÉRICO)</Label>
            <Input
              value={coverConfig.barcodeText}
              onChange={(e) => updateField("barcodeText", e.target.value)}
              placeholder="Ex: 9 772026 001008"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">PALAVRAS-CHAVE / DESTAQUES DO RODAPÉ (SEPARADOS POR VÍRGULA)</Label>
            <Input
              value={(coverConfig.footerHighlights || []).join(", ")}
              onChange={(e) =>
                updateField(
                  "footerHighlights",
                  e.target.value.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean)
                )
              }
              placeholder="Ex: NUTRIÇÃO DE PRECISÃO, SUPLEMENTAÇÃO, LONGEVIDADE ATIVA"
              className="theme-app-input text-xs mt-1 border-2 font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
