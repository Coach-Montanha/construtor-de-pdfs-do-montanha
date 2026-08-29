import React, { useState } from "react";
import {
  MagazineProject,
  MagazineThemeId,
  BackCoverConfig,
} from "../../types/magazine";
import { MAGAZINE_THEMES } from "../../lib/sample-data";
import { APP_UI_THEMES, AppUiThemeMode } from "../../lib/ui-theme";
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
  Eye,
  Sun,
  Moon,
  Zap,
  Book,
  Instagram,
  Youtube,
  Mail,
  Sparkles,
} from "lucide-react";

interface MagazineSettingsProps {
  project: MagazineProject;
  onChange: (updated: MagazineProject) => void;
  currentUiTheme: AppUiThemeMode;
  onSelectUiTheme: (mode: AppUiThemeMode) => void;
}

export const MagazineSettings: React.FC<MagazineSettingsProps> = ({
  project,
  onChange,
  currentUiTheme,
  onSelectUiTheme,
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

  const handleSelectMagazineTheme = (themeId: MagazineThemeId) => {
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
    <div className="space-y-6 font-sans">
      {/* Header Bar */}
      <div className="theme-app-card p-5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
              STUDIO SETTINGS
            </span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase">
              CONFIGURAÇÕES DO APLICATIVO
            </span>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Aparência da Tela, Temas da Revista & Conexão IA
          </h2>
          <p className="text-xs opacity-75 mt-0.5">
            Personalize as cores do aplicativo para descansar a visão, altere a paleta da revista e conecte sua IA.
          </p>
        </div>
      </div>

      {/* 1. APP UI THEME & ERGONOMICS (SELETOR DE APARÊNCIA DO APP COM ALTO CONTRASTE) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-500" />
            <span>1. Aparência da Interface & Conforto Visual do Editor</span>
          </h3>
          <span className="text-[10px] font-mono font-bold bg-amber-400 text-black border border-black px-2 py-0.5 rounded uppercase">
            EYE-CARE & ALTO CONTRASTE
          </span>
        </div>

        <p className="text-xs opacity-80 leading-relaxed">
          Selecione o esquema de cores que melhor se adapta à sua luminosidade ambiente. Você pode escolher <strong>fundo inteiro branco com bordas e fontes pretas</strong> para máximo contraste ou modos escuros e sépiados para conforto noturno:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {APP_UI_THEMES.map((t) => {
            const isSelected = currentUiTheme === t.id;
            return (
              <div
                key={t.id}
                onClick={() => onSelectUiTheme(t.id)}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-400 shadow-md font-bold"
                    : "border-slate-300 opacity-80 hover:opacity-100 hover:border-slate-600"
                }`}
                style={{ backgroundColor: t.previewCard, color: t.previewText }}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      {t.icon === "contrast" && <Sparkles className="w-4 h-4 text-amber-500" />}
                      {t.icon === "sun" && <Sun className="w-4 h-4 text-amber-500" />}
                      {t.icon === "moon" && <Moon className="w-4 h-4 text-amber-500" />}
                      {t.icon === "book" && <Book className="w-4 h-4 text-amber-600" />}
                      {t.icon === "zap" && <Zap className="w-4 h-4 text-amber-500" />}
                      <span className="font-black text-xs uppercase">{t.name}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug mb-3">
                    {t.subtitle}
                  </p>
                </div>

                {/* Color Swatch Preview */}
                <div className="flex items-center gap-2 pt-2.5 border-t border-current opacity-80">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-black shadow-xs"
                    style={{ backgroundColor: t.previewBg }}
                    title="Fundo da Tela"
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 border-black shadow-xs"
                    style={{ backgroundColor: t.previewCard }}
                    title="Cor dos Cards"
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 border-black shadow-xs"
                    style={{ backgroundColor: t.previewAccent }}
                    title="Cor de Destaque"
                  />
                  <span className="text-[10px] font-mono ml-auto font-black">
                    {isSelected ? "● ATIVO" : "Clique para Ativar"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. THEME & PALETTE OF THE MAGAZINE */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Palette className="w-4 h-4 text-amber-500" />
          <span>2. Tema Visual da Revista Impressa & PDF</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {MAGAZINE_THEMES.map((theme) => {
            const isSelected = project.themeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => handleSelectMagazineTheme(theme.id)}
                className={`theme-app-card-subtle cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-400 shadow-md"
                    : "border-slate-300 hover:border-slate-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-xs uppercase">
                      {theme.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug mb-3">
                    {theme.description}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-300">
                  <div
                    className="w-5 h-5 rounded-full border border-black/30"
                    style={{ backgroundColor: theme.primaryColor }}
                    title="Cor Primária"
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-black/30"
                    style={{ backgroundColor: theme.cardBg }}
                    title="Cor de Fundo / Card"
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-black/30"
                    style={{ backgroundColor: theme.bgDark }}
                    title="Cor Escura"
                  />
                  <span className="text-[9px] font-mono opacity-70 ml-auto font-bold">
                    {theme.fontSerif ? "Serif" : "Sans"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. AI Key Settings */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-500" />
          <span>3. Configuração da IA (Google Gemini API)</span>
        </h3>

        <p className="text-xs opacity-80 leading-relaxed">
          O criador já inclui um modelo inteligente embutido que funciona offline. Para usar o modelo de última geração <strong>Gemini 3.7 Flash</strong> para criar matérias completas e polir textos sem limites, insira sua chave gratuita da Google AI Studio.
        </p>

        <div className="flex gap-2">
          <Input
            type="password"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="Cole aqui sua chave (ex: AIzaSy...)"
            className="theme-app-input font-mono text-xs border-2"
          />
          <Button
            onClick={handleSaveApiKey}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 border border-black"
          >
            {apiKeySaved ? "Salva!" : "Salvar Chave"}
          </Button>
        </div>
      </div>

      {/* 4. General Magazine Metadata */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Sliders className="w-4 h-4 text-amber-500" />
          <span>4. Metadados Gerais da Publicação</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs font-bold">TÍTULO DA REVISTA</Label>
            <Input
              value={project.title}
              onChange={(e) => onChange({ ...project, title: e.target.value.toUpperCase() })}
              className="theme-app-input text-xs mt-1 font-bold border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">VOLUME // EDIÇÃO</Label>
            <Input
              value={project.volume}
              onChange={(e) => onChange({ ...project, volume: e.target.value.toUpperCase() })}
              placeholder="Ex: VOL. 01"
              className="theme-app-input text-xs mt-1 font-mono border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">DATA DE PUBLICAÇÃO</Label>
            <Input
              value={project.date}
              onChange={(e) => onChange({ ...project, date: e.target.value.toUpperCase() })}
              placeholder="Ex: SETEMBRO 2026"
              className="theme-app-input text-xs mt-1 font-mono border-2"
            />
          </div>
        </div>
      </div>

      {/* 5. Back Cover Settings */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>5. Contracapa da Revista (Última Página)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs font-bold">MANCHETE DA CONTRACAPA</Label>
            <Input
              value={project.backCoverConfig.headline}
              onChange={(e) => updateBackCover("headline", e.target.value.toUpperCase())}
              className="theme-app-input text-xs mt-1 font-bold border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">SUB-MANCHETE</Label>
            <Input
              value={project.backCoverConfig.subheadline}
              onChange={(e) => updateBackCover("subheadline", e.target.value)}
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
        </div>

        <div>
          <Label className="text-xs font-bold">MENSAGEM DE ENCERRAMENTO</Label>
          <Textarea
            value={project.backCoverConfig.message}
            onChange={(e) => updateBackCover("message", e.target.value)}
            className="theme-app-input text-xs mt-1 h-20 leading-relaxed border-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs font-bold">TEXTO DO BOTÃO DE AÇÃO (CTA)</Label>
            <Input
              value={project.backCoverConfig.ctaText}
              onChange={(e) => updateBackCover("ctaText", e.target.value.toUpperCase())}
              className="theme-app-input font-bold text-xs mt-1 border-2 text-amber-600"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">URL DO SITE INSTITUCIONAL</Label>
            <Input
              value={project.backCoverConfig.websiteUrl}
              onChange={(e) => updateBackCover("websiteUrl", e.target.value)}
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>
        </div>

        {/* Social Handles */}
        <div className="pt-3 border-t border-slate-300 space-y-3">
          <Label className="text-xs font-bold flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5 text-amber-500" />
            <span>REDES SOCIAIS & CONTATO</span>
          </Label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <Label className="text-[10px] opacity-75 flex items-center gap-1">
                <Instagram className="w-3 h-3 text-amber-500" />
                <span>Instagram</span>
              </Label>
              <Input
                value={project.backCoverConfig.socialHandles?.instagram || ""}
                onChange={(e) => updateSocialHandles("instagram", e.target.value)}
                placeholder="@coachmontanha"
                className="theme-app-input text-xs mt-1 font-mono border-2"
              />
            </div>

            <div>
              <Label className="text-[10px] opacity-75 flex items-center gap-1">
                <Youtube className="w-3 h-3 text-red-500" />
                <span>YouTube</span>
              </Label>
              <Input
                value={project.backCoverConfig.socialHandles?.youtube || ""}
                onChange={(e) => updateSocialHandles("youtube", e.target.value)}
                placeholder="Canal Oficial"
                className="theme-app-input text-xs mt-1 border-2"
              />
            </div>

            <div>
              <Label className="text-[10px] opacity-75 flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-500" />
                <span>E-mail</span>
              </Label>
              <Input
                value={project.backCoverConfig.socialHandles?.email || ""}
                onChange={(e) => updateSocialHandles("email", e.target.value)}
                placeholder="contato@..."
                className="theme-app-input text-xs mt-1 font-mono border-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
