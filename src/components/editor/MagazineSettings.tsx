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
import { Switch } from "../ui/switch";
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
  Layers,
  FileCheck,
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

  const visibility = {
    showCover: true,
    showEditorLetter: true,
    showContributors: false,
    showTableOfContents: true,
    showBackCover: true,
    ...project.pageVisibility,
  };

  const updateVisibility = (field: keyof typeof visibility, val: boolean) => {
    onChange({
      ...project,
      pageVisibility: {
        ...visibility,
        [field]: val,
      },
    });
  };

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
              CONFIGURAÇÕES DO PROJETO
            </span>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Estrutura de Páginas, Temas & Conexão IA
          </h2>
          <p className="text-xs opacity-75 mt-0.5">
            Ligue ou desligue páginas do projeto, gerencie o tema visual e conecte sua IA do Google.
          </p>
        </div>
      </div>

      {/* 0. GERENCIADOR DE PÁGINAS ATIVAS & ESTRUTURA DO PDF */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Gerenciador de Páginas & Estrutura da Edição</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Ligue ou desligue qualquer página da revista. Páginas desligadas não aparecem no leitor nem no PDF final.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
          {/* Cover Toggle */}
          <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase block">1. Capa Principal</span>
              <span className="text-[10px] opacity-75">Capa e chamada principal</span>
            </div>
            <Switch
              checked={visibility.showCover}
              onCheckedChange={(val) => updateVisibility("showCover", val)}
            />
          </div>

          {/* Editor Letter Toggle */}
          <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase block">2. Carta do Editor</span>
              <span className="text-[10px] opacity-75">Manifesto e expediente</span>
            </div>
            <Switch
              checked={visibility.showEditorLetter}
              onCheckedChange={(val) => updateVisibility("showEditorLetter", val)}
            />
          </div>

          {/* Contributors Toggle */}
          <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase block">3. Colaboradores</span>
              <span className="text-[10px] opacity-75">Grade de especialistas</span>
            </div>
            <Switch
              checked={visibility.showContributors}
              onCheckedChange={(val) => updateVisibility("showContributors", val)}
            />
          </div>

          {/* Table of Contents Toggle */}
          <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase block">4. Sumário / Índice</span>
              <span className="text-[10px] opacity-75">Lista de matérias</span>
            </div>
            <Switch
              checked={visibility.showTableOfContents}
              onCheckedChange={(val) => updateVisibility("showTableOfContents", val)}
            />
          </div>

          {/* Back Cover Toggle */}
          <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase block">5. Contracapa</span>
              <span className="text-[10px] opacity-75">Fechamento e contatos</span>
            </div>
            <Switch
              checked={visibility.showBackCover}
              onCheckedChange={(val) => updateVisibility("showBackCover", val)}
            />
          </div>
        </div>
      </div>

      {/* 1. APP UI THEME & ERGONOMICS (SELETOR DE APARÊNCIA DO APP COM ALTO CONTRASTE) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-500" />
            <span>1. Esquema de Cores do Aplicativo (Eye-Care & Ergonomia)</span>
          </h3>
          <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded border border-current">
            INTERFACE
          </span>
        </div>
        <p className="text-xs opacity-75 leading-relaxed">
          Alterne o visual da sua área de trabalho para evitar a fadiga visual durante longas sessões de edição.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
          {APP_UI_THEMES.map((uiTheme) => {
            const isSelected = currentUiTheme === uiTheme.id;
            return (
              <div
                key={uiTheme.id}
                onClick={() => onSelectUiTheme(uiTheme.id)}
                className={`theme-app-card-subtle cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-400 shadow-md"
                    : "border-slate-300 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-xs uppercase flex items-center gap-1.5">
                      {uiTheme.icon === "contrast" && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                      {uiTheme.icon === "sun" && <Sun className="w-3.5 h-3.5 text-amber-500" />}
                      {uiTheme.icon === "moon" && <Moon className="w-3.5 h-3.5 text-blue-400" />}
                      {uiTheme.icon === "book" && <Book className="w-3.5 h-3.5 text-amber-700" />}
                      {uiTheme.icon === "zap" && <Zap className="w-3.5 h-3.5 text-yellow-400" />}
                      <span>{uiTheme.name}</span>
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug">{uiTheme.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. THEME SELECTION FOR THE MAGAZINE PUBLICATION */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Palette className="w-4 h-4 text-amber-500" />
            <span>2. Tema Visual da Revista Impressa & PDF</span>
          </h3>
          <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded border border-current">
            PRODUÇÃO A4
          </span>
        </div>
        <p className="text-xs opacity-75 leading-relaxed">
          Define a paleta de cores e a identidade gráfica das páginas internas, caixas de destaque e tipografia da revista.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {MAGAZINE_THEMES.map((theme) => {
            const isSelected = project.themeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => handleSelectMagazineTheme(theme.id)}
                className={`theme-app-card-subtle cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-400 shadow-md"
                    : "border-slate-300 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-xs uppercase">{theme.name}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug mb-3">{theme.description}</p>
                </div>

                {/* Color swatches */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-300">
                  <div
                    className="w-4 h-4 rounded-full border border-black shadow-xs"
                    style={{ backgroundColor: theme.primaryColor }}
                    title={`Cor Primária: ${theme.primaryColor}`}
                  />
                  <div
                    className="w-4 h-4 rounded-full border border-black shadow-xs"
                    style={{ backgroundColor: theme.accentColor }}
                    title={`Cor de Destaque: ${theme.accentColor}`}
                  />
                  <div
                    className="w-4 h-4 rounded-full border border-black shadow-xs"
                    style={{ backgroundColor: theme.bgDark }}
                    title={`Fundo Escuro: ${theme.bgDark}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. GEMINI API KEY CONFIGURATION */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-500" />
          <span>3. Chave de API do Google Gemini (IA)</span>
        </h3>
        <p className="text-xs opacity-75 leading-relaxed">
          Insira sua chave de API para habilitar a redação automática de matérias completas, sugestão de títulos e geração de imagens realistas.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
          <Input
            type="password"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="AIzaSy..."
            className="theme-app-input font-mono text-xs border-2 flex-1"
          />
          <Button
            onClick={handleSaveApiKey}
            className="h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-4 border-2 border-black shrink-0 shadow-xs"
          >
            {apiKeySaved ? "Chave Salva!" : "Salvar Chave"}
          </Button>
        </div>
      </div>

      {/* 4. BACK COVER CONFIGURATION */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Share2 className="w-4 h-4 text-amber-500" />
          <span>4. Contracapa & Fechamento da Edição</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold">MANCHETE DA CONTRACAPA</Label>
            <Input
              value={project.backCoverConfig.headline}
              onChange={(e) => updateBackCover("headline", e.target.value.toUpperCase())}
              className="theme-app-input font-bold text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">SUBTÍTULO / SLOGAN FINAL</Label>
            <Input
              value={project.backCoverConfig.subheadline}
              onChange={(e) => updateBackCover("subheadline", e.target.value)}
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
        </div>

        <div>
          <Label className="text-xs font-bold">MENSAGEM INSTITUCIONAL DE FECHAMENTO</Label>
          <Textarea
            value={project.backCoverConfig.message}
            onChange={(e) => updateBackCover("message", e.target.value)}
            className="theme-app-input text-xs mt-1 h-20 border-2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div>
            <Label className="text-[11px] font-bold flex items-center gap-1">
              <Instagram className="w-3 h-3 text-amber-500" />
              <span>INSTAGRAM</span>
            </Label>
            <Input
              value={project.backCoverConfig.socialHandles?.instagram || ""}
              onChange={(e) => updateSocialHandles("instagram", e.target.value)}
              placeholder="@coachmontanha"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-[11px] font-bold flex items-center gap-1">
              <Youtube className="w-3 h-3 text-red-500" />
              <span>YOUTUBE</span>
            </Label>
            <Input
              value={project.backCoverConfig.socialHandles?.youtube || ""}
              onChange={(e) => updateSocialHandles("youtube", e.target.value)}
              placeholder="Canal Oficial"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-[11px] font-bold flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-500" />
              <span>E-MAIL</span>
            </Label>
            <Input
              value={project.backCoverConfig.socialHandles?.email || ""}
              onChange={(e) => updateSocialHandles("email", e.target.value)}
              placeholder="contato@coachmontanha.com.br"
              className="theme-app-input font-mono text-xs mt-1 border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
