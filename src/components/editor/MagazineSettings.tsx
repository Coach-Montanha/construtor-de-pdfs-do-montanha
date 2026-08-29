import React, { useState } from "react";
import {
  MagazineProject,
  MagazineThemeId,
  BackCoverConfig,
} from "../../types/magazine";
import { MAGAZINE_THEMES } from "../../lib/sample-data";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Palette,
  Key,
  CheckCircle2,
  Sliders,
  Share2,
  BookOpen,
  Globe,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

interface MagazineSettingsProps {
  project: MagazineProject;
  onChange: (updated: MagazineProject) => void;
}

export const MagazineSettings: React.FC<MagazineSettingsProps> = ({
  project,
  onChange,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState<string>(
    project.geminiApiKey || (typeof window !== "undefined" ? localStorage.getItem("gemini_api_key") || "" : "")
  );
  const [apiKeySaved, setApiKeySaved] = useState<boolean>(false);

  const handleSaveApiKey = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gemini_api_key", apiKeyInput.trim());
    }
    onChange({
      ...project,
      geminiApiKey: apiKeyInput.trim(),
    });
    setApiKeySaved(true);
    setTimeout(() => setApiKeySaved(false), 3000);
  };

  const handleSelectTheme = (themeId: MagazineThemeId) => {
    onChange({
      ...project,
      themeId,
    });
  };

  const updateBackCover = <K extends keyof BackCoverConfig>(
    field: K,
    value: BackCoverConfig[K]
  ) => {
    onChange({
      ...project,
      backCoverConfig: {
        ...project.backCoverConfig,
        [field]: value,
      },
    });
  };

  const updateSocialHandles = (network: "instagram" | "youtube" | "email", value: string) => {
    onChange({
      ...project,
      backCoverConfig: {
        ...project.backCoverConfig,
        socialHandles: {
          ...project.backCoverConfig.socialHandles,
          [network]: value,
        },
      },
    });
  };

  return (
    <div className="space-y-6 text-slate-100 font-sans">
      {/* Header Bar */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
              STUDIO SETTINGS
            </span>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">
              CONFIGURAÇÕES GERAIS DA REVISTA
            </span>
          </div>
          <h2 className="text-lg font-black text-white uppercase tracking-tight">
            Temas Visuais, Chaves de IA, Metadados & Contracapa
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Ajuste a identidade visual, conexão com Gemini AI, número da edição e dados de contato institucionais.
          </p>
        </div>
      </div>

      {/* 1. Theme & Palette Selector */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Palette className="w-4 h-4" />
          <span>Tema Visual & Identidade de Cores</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {MAGAZINE_THEMES.map((theme) => {
            const isSelected = project.themeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => handleSelectTheme(theme.id)}
                className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-400 bg-slate-800/90 shadow-lg shadow-amber-500/10"
                    : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-xs text-white uppercase">
                      {theme.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug mb-3">
                    {theme.description}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-800">
                  <div
                    className="w-5 h-5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.primaryColor }}
                    title="Cor Primária"
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.cardBg }}
                    title="Cor de Fundo / Card"
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.bgDark }}
                    title="Cor Escura"
                  />
                  <span className="text-[9px] font-mono text-slate-500 ml-auto">
                    {theme.fontSerif ? "Serif" : "Sans"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. AI Key Settings */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Key className="w-4 h-4" />
          <span>Configuração da IA (Google Gemini API)</span>
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          O criador já inclui um modelo inteligente embutido que funciona offline. Para usar o modelo de última geração <strong>Gemini 3.7 Flash</strong> para criar matérias completas e polir textos sem limites, insira sua chave gratuita da Google AI Studio.
        </p>

        <div className="flex gap-2">
          <Input
            type="password"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="Cole aqui sua chave (ex: AIzaSy...)"
            className="bg-slate-800 border-slate-700 text-white font-mono text-xs"
          />
          <Button
            onClick={handleSaveApiKey}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5"
          >
            {apiKeySaved ? "Salva!" : "Salvar Chave"}
          </Button>
        </div>
      </div>

      {/* 3. General Magazine Metadata */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Sliders className="w-4 h-4" />
          <span>Metadados Gerais da Publicação</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs font-semibold text-slate-300">TÍTULO DA REVISTA</Label>
            <Input
              value={project.title}
              onChange={(e) => onChange({ ...project, title: e.target.value.toUpperCase() })}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-bold"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">VOLUME // EDIÇÃO</Label>
            <Input
              value={project.volume}
              onChange={(e) => onChange({ ...project, volume: e.target.value.toUpperCase() })}
              placeholder="Ex: VOL. 01"
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-mono"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">DATA DE PUBLICAÇÃO</Label>
            <Input
              value={project.date}
              onChange={(e) => onChange({ ...project, date: e.target.value.toUpperCase() })}
              placeholder="Ex: SETEMBRO 2026"
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-mono"
            />
          </div>
        </div>
      </div>

      {/* 4. Back Cover Settings */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>Contracapa da Revista (Última Página)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs font-semibold text-slate-300">MANCHETE DA CONTRACAPA</Label>
            <Input
              value={project.backCoverConfig.headline}
              onChange={(e) => updateBackCover("headline", e.target.value.toUpperCase())}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-bold"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">SUB-MANCHETE</Label>
            <Input
              value={project.backCoverConfig.subheadline}
              onChange={(e) => updateBackCover("subheadline", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">MENSAGEM DE ENCERRAMENTO</Label>
          <Textarea
            value={project.backCoverConfig.message}
            onChange={(e) => updateBackCover("message", e.target.value)}
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1 h-20 leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs font-semibold text-slate-300">TEXTO DO BOTÃO DE AÇÃO (CTA)</Label>
            <Input
              value={project.backCoverConfig.ctaText}
              onChange={(e) => updateBackCover("ctaText", e.target.value.toUpperCase())}
              className="bg-slate-800 border-slate-700 text-amber-400 font-bold text-xs mt-1"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">URL DO SITE INSTITUCIONAL</Label>
            <Input
              value={project.backCoverConfig.websiteUrl}
              onChange={(e) => updateBackCover("websiteUrl", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white font-mono text-xs mt-1"
            />
          </div>
        </div>

        {/* Social Handles */}
        <div className="pt-3 border-t border-slate-800 space-y-3">
          <Label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span>REDES SOCIAIS & CONTATO</span>
          </Label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <Label className="text-[10px] text-slate-400 flex items-center gap-1">
                <Instagram className="w-3 h-3 text-amber-400" />
                <span>Instagram</span>
              </Label>
              <Input
                value={project.backCoverConfig.socialHandles?.instagram || ""}
                onChange={(e) => updateSocialHandles("instagram", e.target.value)}
                placeholder="@coachmontanha"
                className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-mono"
              />
            </div>

            <div>
              <Label className="text-[10px] text-slate-400 flex items-center gap-1">
                <Youtube className="w-3 h-3 text-red-400" />
                <span>YouTube</span>
              </Label>
              <Input
                value={project.backCoverConfig.socialHandles?.youtube || ""}
                onChange={(e) => updateSocialHandles("youtube", e.target.value)}
                placeholder="Canal Oficial"
                className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
              />
            </div>

            <div>
              <Label className="text-[10px] text-slate-400 flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-400" />
                <span>E-mail</span>
              </Label>
              <Input
                value={project.backCoverConfig.socialHandles?.email || ""}
                onChange={(e) => updateSocialHandles("email", e.target.value)}
                placeholder="contato@..."
                className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
