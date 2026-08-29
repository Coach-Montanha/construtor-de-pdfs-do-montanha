import React from "react";
import { CoverConfig, CoverHighlight, CoverStyleVariant } from "../../types/magazine";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import {
  Sparkles,
  Plus,
  Trash2,
  Image as ImageIcon,
  Wand2,
  Shield,
  Zap,
  Flame,
  Layout,
  Crosshair,
  CheckCircle2,
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

  const handleAddHighlight = () => {
    const newHl: CoverHighlight = {
      id: "hl-" + Date.now(),
      tag: `// 0${coverConfig.highlights.length + 1}. PROTOCOLO`,
      title: "Nova chamada de força não-convencional e alta performance",
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

  // Unconventional strength photo presets (My Mad Methods & High-Key Studio)
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

  const handleAiCoverPhoto = () => {
    const prompt =
      coverConfig.coverStyleVariant === "peak-performance"
        ? "Athletic fitness champion in high-key white studio lighting, sharp physique, clean athletic apparel, commercial magazine cover photography 8k"
        : "Athletic warrior performing unconventional heavy kettlebell swing in gritty industrial dark gym, chalk dust in air, rim directional lighting, high contrast, cinematic photography 8k";

    const aiUrl = generateAiImageUrl(prompt);
    updateField("backgroundImage", aiUrl);
  };

  const coverStyles: { id: CoverStyleVariant; name: string; desc: string }[] = [
    {
      id: "mad-methods",
      name: "Montanha Mad Methods (Industrial Dark & Yellow)",
      desc: "Estética My Mad Methods: Preto profundo, tipografia stencil/ultra-pesada, hazard stripes e HUD tático.",
    },
    {
      id: "peak-performance",
      name: "Peak Performance / Pro Edition (High-Key Studio & Angular Blue)",
      desc: "Estética Pro Fitness: Fundo High-Key Studio Lighting, grafismos angulares azul e preto, selo circular vermelho e tipografia itálica.",
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

  return (
    <div className="space-y-6 text-slate-100 font-sans">
      {/* Cover Style Variant Switcher */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Layout className="w-4 h-4" />
          <span>Estilo & Arquitetura da Capa Digital</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {coverStyles.map((cs) => {
            const isSelected = (coverConfig.coverStyleVariant || "mad-methods") === cs.id;
            return (
              <div
                key={cs.id}
                onClick={() => updateField("coverStyleVariant", cs.id)}
                className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-400 bg-slate-800/90 shadow-lg shadow-amber-500/10"
                    : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-black text-xs text-white uppercase">{cs.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">{cs.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual Identity & Masthead Section */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Wand2 className="w-4 h-4" />
          <span>1. Identidade Visual & Masthead</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold text-slate-300">MASTHEAD / TÍTULO DA REVISTA</Label>
            <Input
              value={coverConfig.mastheadText}
              onChange={(e) => updateField("mastheadText", e.target.value)}
              placeholder="Ex: MONTANHA ou montanha"
              className="bg-slate-800 border-slate-700 text-amber-400 font-black text-lg mt-1 tracking-tight"
            />
          </div>

          <div>
            <Label className="text-xs font-bold text-slate-300">SLOGAN / SUBTÍTULO INTEGRADO</Label>
            <Input
              value={coverConfig.sloganText || ""}
              onChange={(e) => updateField("sloganText", e.target.value.toUpperCase())}
              placeholder="Ex: UNCONVENTIONAL STRENGTH & PERFORMANCE"
              className="bg-slate-800 border-slate-700 text-white font-mono text-xs mt-1"
            />
          </div>
        </div>

        {/* Technical Badging & Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div>
            <Label className="text-[11px] font-bold text-slate-400">BADGE VERTICAL / TÁTICO</Label>
            <Input
              value={coverConfig.issueBadge}
              onChange={(e) => updateField("issueBadge", e.target.value.toUpperCase())}
              placeholder="Ex: PRO EDITION ou ISSUE #01"
              className="bg-slate-800 border-slate-700 text-amber-400 font-mono text-xs mt-1"
            />
          </div>
          <div>
            <Label className="text-[11px] font-bold text-slate-400">DATA / MÊS DA EDIÇÃO</Label>
            <Input
              value={coverConfig.issueDate}
              onChange={(e) => updateField("issueDate", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
          <div>
            <Label className="text-[11px] font-bold text-slate-400">ESPECIFICAÇÃO / PREÇO</Label>
            <Input
              value={coverConfig.priceBadge}
              onChange={(e) => updateField("priceBadge", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>

        {/* Toggles for Industrial Effects */}
        {coverConfig.coverStyleVariant !== "peak-performance" && (
          <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Switch
                checked={coverConfig.showHazardStripe}
                onCheckedChange={(val) => updateField("showHazardStripe", val)}
              />
              <span className="text-slate-300 font-semibold">Faixa de Advertência Industrial (Hazard Stripe)</span>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={coverConfig.showTechHud}
                onCheckedChange={(val) => updateField("showTechHud", val)}
              />
              <span className="text-slate-300 font-semibold">HUD Tático & Grid Técnico</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Cover Story Headline */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span>2. Destaque Principal & Manchetes</span>
        </h3>

        <div>
          <Label className="text-xs font-bold text-slate-300">TAG DE CATEGORIA SUPERIOR</Label>
          <Input
            value={coverConfig.categoryTag}
            onChange={(e) => updateField("categoryTag", e.target.value.toUpperCase())}
            placeholder="Ex: SHARPEN UP ou COVER STORY"
            className="bg-slate-800 border-slate-700 text-amber-400 font-mono text-xs mt-1"
          />
        </div>

        <div>
          <Label className="text-xs font-bold text-slate-300">MANCHETE PRINCIPAL (ALL CAPS)</Label>
          <Input
            value={coverConfig.mainHeadline}
            onChange={(e) => updateField("mainHeadline", e.target.value.toUpperCase())}
            placeholder="Ex: SHOULDER WORKOUT ou UNCONVENTIONAL STRENGTH"
            className="bg-slate-800 border-slate-700 text-white font-black text-base mt-1"
          />
        </div>

        <div>
          <Label className="text-xs font-bold text-slate-300">SUBTÍTULO DA MATÉRIA PRINCIPAL</Label>
          <Input
            value={coverConfig.subHeadline}
            onChange={(e) => updateField("subHeadline", e.target.value.toUpperCase())}
            placeholder="Ex: BACK TO BASICS FOR SERIOUS DELT DEMOLITION"
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
          />
        </div>
      </div>

      {/* Photography & Subject Presets */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            <span>3. Fotografia Atlética & Fundo</span>
          </h3>
          <Button
            size="sm"
            onClick={handleAiCoverPhoto}
            className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-black flex items-center gap-1 shadow"
          >
            <Sparkles className="w-3 h-3" />
            Gerar Foto por IA
          </Button>
        </div>

        {/* Quick Presets */}
        <div>
          <Label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">
            Presets Rápidos de Imagens:
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {strengthPhotoPresets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => updateField("backgroundImage", preset.url)}
                className="group relative rounded-lg overflow-hidden border border-slate-700 hover:border-amber-400 transition-all text-left aspect-[4/3]"
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

        <div>
          <Label className="text-xs font-bold text-slate-300">URL DA IMAGEM ATUAL</Label>
          <Input
            value={coverConfig.backgroundImage}
            onChange={(e) => updateField("backgroundImage", e.target.value)}
            placeholder="URL da imagem (JPG / PNG)"
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
          />
        </div>

        {/* Overlay Dark Slider */}
        <div className="space-y-2 pt-1">
          <div className="flex justify-between text-xs text-slate-400 font-bold">
            <span>Escurecimento / Opacidade da Foto</span>
            <span className="font-mono text-amber-400">{coverConfig.backgroundOverlayOpacity}%</span>
          </div>
          <Slider
            value={[coverConfig.backgroundOverlayOpacity]}
            onValueChange={(val) => updateField("backgroundOverlayOpacity", val[0])}
            min={10}
            max={90}
            step={5}
            className="py-1"
          />
        </div>
      </div>
    </div>
  );
};
