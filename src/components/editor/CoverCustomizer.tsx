import React from "react";
import { CoverConfig, CoverHighlight } from "../../types/magazine";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Sparkles, Plus, Trash2, Image as ImageIcon, Wand2 } from "lucide-react";
import { generateAiImageUrl, getEditorialCuratedImage } from "../../lib/ai-service";

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
      tag: "DESTAQUE",
      title: "Nova chamada impactante de capa",
      pageTarget: 3,
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

  const handleCuratedCoverPhoto = () => {
    const photo = getEditorialCuratedImage("fitness", Math.floor(Math.random() * 5));
    updateField("backgroundImage", photo);
  };

  const handleAiCoverPhoto = () => {
    const aiUrl = generateAiImageUrl(
      `${coverConfig.mastheadText} aesthetic bodybuilding fitness athlete dark gym luxury magazine cover`
    );
    updateField("backgroundImage", aiUrl);
  };

  return (
    <div className="space-y-6 text-slate-100">
      {/* Masthead & Main Header */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Wand2 className="w-4 h-4" />
          <span>Nome da Revista & Identidade Visual</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-semibold text-slate-300">NOME DO MASTHEAD (LOGOTIPO)</Label>
            <Input
              value={coverConfig.mastheadText}
              onChange={(e) => updateField("mastheadText", e.target.value.toUpperCase())}
              placeholder="Ex: MONTANHA, VOGUE, FORBES"
              className="bg-slate-800 border-slate-700 text-white font-black text-lg mt-1"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">SELO SUPERIOR DA EDIÇÃO</Label>
            <Input
              value={coverConfig.issueBadge}
              onChange={(e) => updateField("issueBadge", e.target.value)}
              placeholder="Ex: EDIÇÃO ESPECIAL Nº 01"
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-[11px] font-semibold text-slate-400">Data / Mês</Label>
            <Input
              value={coverConfig.issueDate}
              onChange={(e) => updateField("issueDate", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
          <div>
            <Label className="text-[11px] font-semibold text-slate-400">Etiqueta de Categoria</Label>
            <Input
              value={coverConfig.categoryTag}
              onChange={(e) => updateField("categoryTag", e.target.value.toUpperCase())}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
          <div>
            <Label className="text-[11px] font-semibold text-slate-400">Preço / Badge</Label>
            <Input
              value={coverConfig.priceBadge}
              onChange={(e) => updateField("priceBadge", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest">
          Manchete Principal da Capa
        </h3>

        <div>
          <Label className="text-xs font-semibold text-slate-300">TÍTULO PRINCIPAL (MANCHETE MONUMENTAL)</Label>
          <Input
            value={coverConfig.mainHeadline}
            onChange={(e) => updateField("mainHeadline", e.target.value.toUpperCase())}
            placeholder="Ex: O CÓDIGO DA ALTA PERFORMANCE"
            className="bg-slate-800 border-slate-700 text-white font-extrabold text-base mt-1"
          />
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">SUBTÍTULO DA MANCHETE</Label>
          <Textarea
            value={coverConfig.subHeadline}
            onChange={(e) => updateField("subHeadline", e.target.value)}
            placeholder="Texto complementar que resume a matéria de capa"
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1 h-16"
          />
        </div>
      </div>

      {/* Background Image Controls */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            <span>Foto de Fundo da Capa</span>
          </h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleCuratedCoverPhoto}
              className="h-7 text-xs border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"
            >
              Foto Curada
            </Button>
            <Button
              size="sm"
              onClick={handleAiCoverPhoto}
              className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Gerar por IA
            </Button>
          </div>
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">URL DA IMAGEM DE FUNDO</Label>
          <Input
            value={coverConfig.backgroundImage}
            onChange={(e) => updateField("backgroundImage", e.target.value)}
            placeholder="URL da imagem (JPG / PNG)"
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
          />
        </div>

        {/* Overlay Dark Slider */}
        <div className="space-y-2 pt-1">
          <div className="flex justify-between text-xs text-slate-400 font-semibold">
            <span>Escurecimento do Fundo (Para legibilidade dos textos)</span>
            <span className="font-mono text-amber-400">{coverConfig.backgroundOverlayOpacity}%</span>
          </div>
          <Slider
            value={[coverConfig.backgroundOverlayOpacity]}
            onValueChange={(val) => updateField("backgroundOverlayOpacity", val[0])}
            min={0}
            max={90}
            step={5}
            className="py-1"
          />
        </div>
      </div>

      {/* Side Highlights (Chamadas Laterais) */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest">
            Chamadas Secundárias da Capa
          </h3>
          <Button
            size="sm"
            onClick={handleAddHighlight}
            className="h-7 text-xs bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1"
          >
            <Plus className="w-3 h-3" />
            Adicionar Chamada
          </Button>
        </div>

        <div className="space-y-3">
          {coverConfig.highlights.map((hl) => (
            <div
              key={hl.id}
              className="bg-slate-800/70 p-3 rounded-lg border border-slate-700 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Input
                  value={hl.tag}
                  onChange={(e) => handleUpdateHighlight(hl.id, "tag", e.target.value.toUpperCase())}
                  placeholder="TAG (EX: TREINO)"
                  className="bg-slate-900 border-slate-700 text-amber-400 font-bold text-xs h-7 w-32"
                />
                <Input
                  type="number"
                  value={hl.pageTarget || ""}
                  onChange={(e) =>
                    handleUpdateHighlight(hl.id, "pageTarget", parseInt(e.target.value) || undefined)
                  }
                  placeholder="Pág"
                  className="bg-slate-900 border-slate-700 text-white text-xs h-7 w-16 text-center"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveHighlight(hl.id)}
                  className="ml-auto text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <Input
                value={hl.title}
                onChange={(e) => handleUpdateHighlight(hl.id, "title", e.target.value)}
                placeholder="Título chamativo da matéria..."
                className="bg-slate-900 border-slate-700 text-white text-xs h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
