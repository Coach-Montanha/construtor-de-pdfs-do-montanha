import React from "react";
import { CoverConfig, CoverHighlight, CoverStyleVariant, TextScalePreset } from "../../types/magazine";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { ImagePicker } from "../ui/image-picker";
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
} from "lucide-react";
import { generateAiImageUrl } from "../../lib/ai-service";

interface CoverCustomizerProps {
  coverConfig: CoverConfig;
  onChange: (updated: CoverConfig) => void;
}

export const CoverCustomizer: React.FC<CoverCustomizerProps> = ({
  coverConfig,
  onChange,
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
              </button>
            );
          })}
        </div>

        {/* Fine-Tuning Slider + Buttons */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold">MASTHEAD / TÍTULO DA REVISTA</Label>
            <Input
              value={coverConfig.mastheadText}
              onChange={(e) => updateField("mastheadText", e.target.value)}
              placeholder="Ex: MONTANHA ou montanha"
              className="theme-app-input font-black text-lg mt-1 tracking-tight border-2 text-amber-600"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">SLOGAN / SUBTÍTULO INTEGRADO</Label>
            <Input
              value={coverConfig.sloganText || ""}
              onChange={(e) => updateField("sloganText", e.target.value.toUpperCase())}
              placeholder="Ex: UNCONVENTIONAL STRENGTH & PERFORMANCE"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>
        </div>

        {/* Technical Badging & Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div>
            <Label className="text-[11px] font-bold">BADGE VERTICAL / TÁTICO</Label>
            <Input
              value={coverConfig.issueBadge}
              onChange={(e) => updateField("issueBadge", e.target.value.toUpperCase())}
              placeholder="Ex: PRO EDITION ou ISSUE #01"
              className="theme-app-input font-mono text-xs mt-1 border-2 text-amber-600 font-bold"
            />
          </div>
          <div>
            <Label className="text-[11px] font-bold">DATA / MÊS DA EDIÇÃO</Label>
            <Input
              value={coverConfig.issueDate}
              onChange={(e) => updateField("issueDate", e.target.value)}
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
          <div>
            <Label className="text-[11px] font-bold">ESPECIFICAÇÃO / PREÇO</Label>
            <Input
              value={coverConfig.priceBadge}
              onChange={(e) => updateField("priceBadge", e.target.value)}
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
        </div>

        {/* Toggles for Industrial Effects */}
        {coverConfig.coverStyleVariant !== "peak-performance" && (
          <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-slate-300 text-xs">
            <div className="flex items-center gap-2">
              <Switch
                checked={coverConfig.showHazardStripe}
                onCheckedChange={(val) => updateField("showHazardStripe", val)}
              />
              <span className="font-bold">Faixa de Advertência Industrial (Hazard Stripe)</span>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={coverConfig.showTechHud}
                onCheckedChange={(val) => updateField("showTechHud", val)}
              />
              <span className="font-bold">HUD Tático & Grid Técnico</span>
            </div>
          </div>
        )}
      </div>

      {/* 4. Side Highlights / Articles Presented on Cover */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-amber-500" />
              <span>Chamadas Laterais & Artigos Apresentados na Capa</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Defina os títulos das matérias em destaque que aparecem com fundo escuro de alto contraste na capa.
            </p>
          </div>
          <Button
            size="sm"
            onClick={handleAddHighlight}
            className="h-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1 border border-black shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Adicionar Chamada</span>
          </Button>
        </div>

        <div className="space-y-3">
          {coverConfig.highlights.map((hl, idx) => (
            <div
              key={hl.id}
              className="theme-app-card-subtle p-3.5 rounded-lg border-2 border-slate-300 space-y-2.5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-black text-amber-600 uppercase">
                  CHAMADA #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveHighlight(hl.id)}
                  className="p-1 text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded transition-colors"
                  title="Remover Chamada"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-4">
                  <Label className="text-[10px] font-bold">TAG / CATEGORIA</Label>
                  <Input
                    value={hl.tag}
                    onChange={(e) => handleUpdateHighlight(hl.id, "tag", e.target.value.toUpperCase())}
                    placeholder="Ex: HIPERTROFIA & CIÊNCIA"
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

      {/* 5. Main Cover Story Headline */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Manchete Principal da Capa</span>
        </h3>

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
            onChange={(e) => updateField("subHeadline", e.target.value.toUpperCase())}
            placeholder="Ex: Como reprogramar o metabolismo e forjar disciplina inabalável."
            className="theme-app-input text-xs mt-1 border-2"
          />
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

