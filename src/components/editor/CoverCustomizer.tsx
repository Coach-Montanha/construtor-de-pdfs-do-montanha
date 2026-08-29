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

  // Unconventional strength photo presets (My Mad Methods style)
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
      label: "Battle Ropes & Grit",
      url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=85",
    },
    {
      label: "Chalk & Raw Iron",
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85",
    },
    {
      label: "Tire Flip & Sandbag",
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=85",
    },
  ];

  const handleAiCoverPhoto = () => {
    const aiUrl = generateAiImageUrl(
      `Athletic warrior performing unconventional heavy kettlebell swing in gritty industrial dark gym, chalk dust in air, rim directional lighting, high contrast, cinematic photography 8k`
    );
    updateField("backgroundImage", aiUrl);
  };

  return (
    <div className="space-y-6 text-slate-100 font-sans">
      {/* Visual Identity & Masthead Section */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Wand2 className="w-4 h-4" />
          <span>1. Identidade Visual & Masthead ("My Mad Methods" Style)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold text-slate-300">MASTHEAD / TÍTULO DA REVISTA</Label>
            <Input
              value={coverConfig.mastheadText}
              onChange={(e) => updateField("mastheadText", e.target.value.toUpperCase())}
              placeholder="Ex: MONTANHA MAGAZINE"
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
            <Label className="text-[11px] font-bold text-slate-400">BADGE TÁTICO / HEXÁGONO</Label>
            <Input
              value={coverConfig.hexBadgeText || ""}
              onChange={(e) => updateField("hexBadgeText", e.target.value.toUpperCase())}
              placeholder="Ex: VOL. 01 // ISSUE 01"
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
      </div>

      {/* Main Cover Story Headline & Sub-bullets */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span>2. Manchete Principal & Chamadas de Capa</span>
        </h3>

        <div>
          <Label className="text-xs font-bold text-slate-300">TÍTULO PRINCIPAL (EXTRA-BOLD, ALL CAPS)</Label>
          <Input
            value={coverConfig.mainHeadline}
            onChange={(e) => updateField("mainHeadline", e.target.value.toUpperCase())}
            placeholder="Ex: UNCONVENTIONAL STRENGTH: THE HEAVY IRON REVOLUTION"
            className="bg-slate-800 border-slate-700 text-white font-black text-base mt-1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold text-slate-300">SUBTÍTULO EXPLICATIVO</Label>
            <Textarea
              value={coverConfig.subHeadline}
              onChange={(e) => updateField("subHeadline", e.target.value)}
              placeholder="Explicação compacta da matéria principal"
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 h-16"
            />
          </div>

          <div>
            <Label className="text-xs font-bold text-slate-300">AUTOR / CREDENCIAL DE DESTAQUE</Label>
            <Input
              value={coverConfig.authorCallout || ""}
              onChange={(e) => updateField("authorCallout", e.target.value.toUpperCase())}
              placeholder="Ex: POR COACH MONTANHA & MASTER ATHLETES"
              className="bg-slate-800 border-slate-700 text-white font-mono text-xs mt-1"
            />
          </div>
        </div>
      </div>

      {/* Photography & Subject Presets */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            <span>3. Fotografia Atlética Não-Convencional (Alto Contraste)</span>
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

        {/* Quick Unconventional Presets */}
        <div>
          <Label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">
            Presets Rápidos de Imagens (Kettlebell, Mace, Ferro & Grit):
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
            <span>Escurecimento & Contraste do Fundo</span>
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

      {/* Side Highlights / Sub-bullets */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest">
            4. Chamadas Laterais & Protocolos da Capa
          </h3>
          <Button
            size="sm"
            onClick={handleAddHighlight}
            className="h-7 text-xs bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center gap-1"
          >
            <Plus className="w-3 h-3" />
            Adicionar Chamada
          </Button>
        </div>

        <div className="space-y-3">
          {coverConfig.highlights.map((hl) => (
            <div
              key={hl.id}
              className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Input
                  value={hl.tag}
                  onChange={(e) => handleUpdateHighlight(hl.id, "tag", e.target.value.toUpperCase())}
                  placeholder="// 01. TAG"
                  className="bg-slate-900 border-slate-700 text-amber-400 font-mono font-bold text-xs h-7 w-40"
                />
                <Input
                  value={hl.authorCallout || ""}
                  onChange={(e) => handleUpdateHighlight(hl.id, "authorCallout", e.target.value)}
                  placeholder="Autor / Especialista"
                  className="bg-slate-900 border-slate-700 text-slate-300 text-xs h-7 flex-1"
                />
                <Input
                  type="number"
                  value={hl.pageTarget || ""}
                  onChange={(e) =>
                    handleUpdateHighlight(hl.id, "pageTarget", parseInt(e.target.value) || undefined)
                  }
                  placeholder="Pág"
                  className="bg-slate-900 border-slate-700 text-white font-mono text-xs h-7 w-16 text-center"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveHighlight(hl.id)}
                  className="text-red-400 hover:text-red-300 p-1"
                  title="Remover chamada"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <Input
                value={hl.title}
                onChange={(e) => handleUpdateHighlight(hl.id, "title", e.target.value)}
                placeholder="Título da matéria..."
                className="bg-slate-900 border-slate-700 text-white font-semibold text-xs h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
