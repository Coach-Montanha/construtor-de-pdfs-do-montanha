import React, { useState } from "react";
import {
  MagazineProject,
  MagazineThemeId,
  HeadlineFontOption,
  BodyFontOption,
} from "../../types/magazine";
import { MAGAZINE_THEMES } from "../../lib/sample-data";
import { APP_UI_THEMES, AppUiThemeMode } from "../../lib/ui-theme";
import { getHeadlineFontClass, getBodyFontClass } from "../../lib/theme-utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { ImagePicker } from "../ui/image-picker";
import { PwaInstallPrompt } from "../pwa/PwaInstallPrompt";
import {
  Palette,
  Key,
  CheckCircle2,
  Eye,
  Sun,
  Moon,
  Zap,
  Book,
  Sparkles,
  Layers,
  Type,
  Check,
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
  const [themeFilter, setThemeFilter] = useState<"all" | "dark" | "light" | "vibrant">("all");

  // Limpeza de segurança de chaves legadas armazenadas no navegador
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("gemini_api_key");
    }
  }, []);

  const visibility = {
    showCover: true,
    showEditorLetter: true,
    showContributors: false,
    showTableOfContents: true,
    showBackCover: true,
    ...project.pageVisibility,
  };

  const fontConfig = {
    headlineFont: project.fontConfig?.headlineFont || "bebas",
    bodyFont: project.fontConfig?.bodyFont || "inter",
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

  const updateHeadlineFont = (font: HeadlineFontOption) => {
    onChange({
      ...project,
      fontConfig: {
        ...fontConfig,
        headlineFont: font,
      },
    });
  };

  const updateBodyFont = (font: BodyFontOption) => {
    onChange({
      ...project,
      fontConfig: {
        ...fontConfig,
        bodyFont: font,
      },
    });
  };


  const handleSelectMagazineTheme = (themeId: MagazineThemeId) => {
    onChange({
      ...project,
      themeId,
    });
  };

  const headlineFontOptions: { id: HeadlineFontOption; name: string; style: string; sample: string }[] = [
    { id: "barlow", name: "Barlow Condensed", style: "Fitness & Força #1 (Condensada / Impacto)", sample: "MAXIMUM OVERLOAD // 100%" },
    { id: "bebas", name: "Bebas Neue", style: "Industrial & Força Bruta (Caixa Alta Pesada)", sample: "A FORÇA DO FERRO" },
    { id: "syne", name: "Syne ExtraBold", style: "Editorial Contemporâneo & Assimétrico", sample: "THE UNCONVENTIONAL MIND" },
    { id: "montserrat", name: "Montserrat Black", style: "Moderno Geométrico de Alto Impacto", sample: "ALTA PERFORMANCE" },
    { id: "playfair", name: "Playfair Display", style: "Editorial Serifado Clássico & Elegante", sample: "The Elite Method" },
    { id: "cinzel", name: "Cinzel", style: "Romano Monumental & Prestige", sample: "DISCIPLINA & HONRA" },
    { id: "space", name: "Space Grotesk", style: "Técnico & Futurista", sample: "SYS.PROTOCOL // 01" },
    { id: "oswald", name: "Oswald", style: "Atlético Condensado", sample: "HEAVY TRAINING" },
    { id: "inter", name: "Inter Bold", style: "Minimalista & Contemporâneo", sample: "DESIGN EDITORIAL" },
    { id: "creato", name: "Creato Display", style: "Midnight Fintech & Editorial (Tracking -0.02em)", sample: "INFRASTRUCTURE & GLOW" },
  ];

  const bodyFontOptions: { id: BodyFontOption; name: string; style: string; sample: string }[] = [
    { id: "newsreader", name: "Newsreader", style: "Revista Editorial Digital (Leitura Confortável)", sample: "O controle preciso do volume gera hipertrofia sustentável ao longo dos anos." },
    { id: "inter", name: "Inter (Padrão)", style: "Ultra Legível & Moderno", sample: "O treinamento consistente forja resultados duradouros." },
    { id: "barlow", name: "Barlow", style: "Atlética Limpa (Par perfeito com Barlow Condensed)", sample: "Execução controlada, cadência rigorosa e disciplina em cada repetição." },
    { id: "jakarta", name: "Plus Jakarta Sans", style: "Geométrica Moderna de Alto Contraste", sample: "Design editorial contemporâneo com leitura cristalina em qualquer tela." },
    { id: "lora", name: "Lora", style: "Serifada Clássica de Revistas e Livros", sample: "A consistência diária nos detalhes invisíveis constrói o sucesso." },
    { id: "merriweather", name: "Merriweather", style: "Editorial Robusto com Excelente Leitura", sample: "Ciência aplicada e disciplina na alta performance." },
    { id: "roboto", name: "Roboto", style: "Neutro, Direto e Técnico", sample: "Instruções claras e biomecânica precisa em cada movimento." },
    { id: "space", name: "Space Grotesk", style: "Mono Técnico & Moderno", sample: "Protocolos estruturados para resultados mensuráveis." },
  ];

  const typographyPairingPresets: {
    title: string;
    description: string;
    headline: HeadlineFontOption;
    body: BodyFontOption;
    badge: string;
  }[] = [
    {
      title: "Força & Atletismo Puro",
      description: "Barlow Condensed + Barlow: visual oficial de revistas esportivas e força pesada",
      headline: "barlow",
      body: "barlow",
      badge: "FITNESS #1",
    },
    {
      title: "Revista de Banca Clássica",
      description: "Bebas Neue + Newsreader: impacto de capa clássico com leitura editorial fluida",
      headline: "bebas",
      body: "newsreader",
      badge: "EDITORIAL",
    },
    {
      title: "Swiss Modernism 2.0",
      description: "Oswald + Inter: design racional suíço com alto contraste e legibilidade cristalina",
      headline: "oswald",
      body: "inter",
      badge: "SWISS",
    },
    {
      title: "Prestige & Luxo Editorial",
      description: "Playfair Display + Merriweather: elegância tradicional com serifas de alta classe",
      headline: "playfair",
      body: "merriweather",
      badge: "PRESTIGE",
    },
    {
      title: "Biohacking & Tech Lab",
      description: "Space Grotesk + Plus Jakarta Sans: dados laboratoriais, ciência e biomecânica",
      headline: "space",
      body: "jakarta",
      badge: "TECH",
    },
    {
      title: "Neo-Editorial Asymmetric",
      description: "Syne ExtraBold + Lora: tipografia ousada de design agency e matérias especiais",
      headline: "syne",
      body: "lora",
      badge: "MODERN",
    },
  ];

  const activeHeadlineClass = getHeadlineFontClass(fontConfig.headlineFont);
  const activeBodyClass = getBodyFontClass(fontConfig.bodyFont);

  const applyTypographyPreset = (headline: HeadlineFontOption, body: BodyFontOption) => {
    onChange({
      ...project,
      fontConfig: {
        ...fontConfig,
        headlineFont: headline,
        bodyFont: body,
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
            Estrutura de Páginas, Tipografia & Temas da Revista
          </h2>
          <p className="text-xs opacity-75 mt-0.5">
            Ligue ou desligue páginas, ajuste as fontes dos títulos e textos, defina a paleta de cores e conecte sua IA.
          </p>
        </div>
      </div>

      {/* SELETOR DE ESQUEMA DE CORES DO APLICATIVO */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-current pb-3">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest">
                Esquema de Cores & Interface do Aplicativo
              </h3>
              <p className="text-xs opacity-75">
                Escolha o modo de contraste e visualização da plataforma no seu dispositivo.
              </p>
            </div>
          </div>
          <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase self-start sm:self-auto">
            MODO DE TRABALHO
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {APP_UI_THEMES.map((theme) => {
            const isSelected = currentUiTheme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onSelectUiTheme(theme.id)}
                className={`p-3 rounded-xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400"
                    : "theme-app-card-subtle border-slate-300 hover:border-black"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: theme.previewBg,
                          borderColor: theme.previewBorder,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: theme.previewAccent }}
                        />
                      </div>
                      <span className="font-bold text-xs uppercase leading-tight">
                        {theme.name.split("(")[0]?.trim() ?? theme.name}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="bg-amber-400 text-black text-[9px] font-black font-mono px-1.5 py-0.5 rounded border border-black uppercase shrink-0">
                        ATIVO
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug line-clamp-2">
                    {theme.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-1 border-t border-current/10">
                  {theme.icon === "contrast" && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                  {theme.icon === "sun" && <Sun className="w-3.5 h-3.5 text-amber-500" />}
                  {theme.icon === "moon" && <Moon className="w-3.5 h-3.5 text-amber-500" />}
                  {theme.icon === "book" && <Book className="w-3.5 h-3.5 text-amber-500" />}
                  {theme.icon === "zap" && <Zap className="w-3.5 h-3.5 text-amber-500" />}
                  <span className="text-[10px] font-mono font-semibold opacity-80">
                    {theme.id}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* PWA INSTALLATION CARD */}
      <PwaInstallPrompt variant="card" />

      {/* 0. IDENTIDADE & TÍTULOS GERAIS DA REVISTA */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Book className="w-4 h-4 text-amber-500" />
              <span>Identidade da Revista (Nome, Subtítulo & Edição)</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Altere o nome da revista que aparece no topo das páginas (artigos, sumário e rodapés), o subtítulo oficial e a data da edição.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold uppercase">Nome da Revista (Cabeçalho Geral das Páginas)</Label>
            <Input
              value={project.title}
              onChange={(e) => onChange({ ...project, title: e.target.value.toUpperCase() })}
              placeholder="Ex: MONTANHA ou REVISTA MONTANHA"
              className="theme-app-input font-black text-xs mt-1 border-2"
            />
            <p className="text-[10px] opacity-75 mt-1">
              Este é o nome exibido na barra superior dos artigos, no sumário e nos dados da revista.
            </p>
          </div>

          <div>
            <Label className="text-xs font-bold uppercase">Subtítulo / Slogan da Revista</Label>
            <Input
              value={project.subtitle || ""}
              onChange={(e) => onChange({ ...project, subtitle: e.target.value })}
              placeholder="Ex: UNCONVENTIONAL STRENGTH & HIGH PERFORMANCE"
              className="theme-app-input font-semibold text-xs mt-1 border-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 border-t border-slate-200 dark:border-slate-800">
          <div>
            <Label className="text-xs font-bold uppercase">Número da Edição</Label>
            <Input
              value={project.editionNumber || ""}
              onChange={(e) => {
                const newEd = e.target.value;
                onChange({
                  ...project,
                  editionNumber: newEd,
                  coverConfig: {
                    ...project.coverConfig,
                    editionNumber: newEd,
                    issueBadge: newEd ? `EDIÇÃO #${newEd}` : project.coverConfig.issueBadge,
                    hexBadgeText: project.volume
                      ? `${project.volume} // ISSUE ${newEd || "01"}`
                      : `VOL. 01 // ISSUE ${newEd || "01"}`,
                  },
                });
              }}
              placeholder="Ex: 01"
              className="theme-app-input font-mono font-bold text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold uppercase">Volume</Label>
            <Input
              value={project.volume || ""}
              onChange={(e) => {
                const newVol = e.target.value;
                onChange({
                  ...project,
                  volume: newVol,
                  coverConfig: {
                    ...project.coverConfig,
                    hexBadgeText: newVol
                      ? `${newVol} // ISSUE ${project.editionNumber || "01"}`
                      : `VOL. 01 // ISSUE ${project.editionNumber || "01"}`,
                  },
                });
              }}
              placeholder="Ex: VOL. 01"
              className="theme-app-input font-mono font-bold text-xs mt-1 border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold uppercase">Mês e Ano da Edição</Label>
            <Input
              value={project.date || ""}
              onChange={(e) => {
                const newDate = e.target.value.toUpperCase();
                onChange({
                  ...project,
                  date: newDate,
                  coverConfig: {
                    ...project.coverConfig,
                    issueDate: newDate,
                  },
                });
              }}
              placeholder="Ex: SETEMBRO 2026"
              className="theme-app-input font-mono font-bold text-xs mt-1 border-2"
            />
          </div>
        </div>
        <p className="text-[11px] opacity-70 mt-2">
          💡 <strong>Dica:</strong> Você também pode personalizar o texto exato da tag da capa (ex: <code className="font-mono bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded">VOL. 01 // ISSUE 01</code>) diretamente na aba <strong>"Capa & Contracapa da Revista"</strong>.
        </p>
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
          <div className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
            visibility.showCover ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"
          }`}>
            <div>
              <span className="text-xs font-black uppercase block">1. Capa Principal</span>
              <span className="text-[10px] opacity-75 block">Capa e manchete</span>
              <span className={`inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${
                visibility.showCover ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"
              }`}>
                {visibility.showCover ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"}
              </span>
            </div>
            <Switch
              checked={visibility.showCover}
              onCheckedChange={(val) => updateVisibility("showCover", val)}
            />
          </div>

          {/* Editor Letter Toggle */}
          <div className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
            visibility.showEditorLetter ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"
          }`}>
            <div>
              <span className="text-xs font-black uppercase block">2. Carta do Editor</span>
              <span className="text-[10px] opacity-75 block">Manifesto e equipe</span>
              <span className={`inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${
                visibility.showEditorLetter ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"
              }`}>
                {visibility.showEditorLetter ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"}
              </span>
            </div>
            <Switch
              checked={visibility.showEditorLetter}
              onCheckedChange={(val) => updateVisibility("showEditorLetter", val)}
            />
          </div>

          {/* Contributors Toggle */}
          <div className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
            visibility.showContributors ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"
          }`}>
            <div>
              <span className="text-xs font-black uppercase block">3. Colaboradores</span>
              <span className="text-[10px] opacity-75 block">Grade de autores</span>
              <span className={`inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${
                visibility.showContributors ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"
              }`}>
                {visibility.showContributors ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"}
              </span>
            </div>
            <Switch
              checked={visibility.showContributors}
              onCheckedChange={(val) => updateVisibility("showContributors", val)}
            />
          </div>

          {/* Table of Contents Toggle */}
          <div className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
            visibility.showTableOfContents ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"
          }`}>
            <div>
              <span className="text-xs font-black uppercase block">4. Sumário / Índice</span>
              <span className="text-[10px] opacity-75 block">Lista de matérias</span>
              <span className={`inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${
                visibility.showTableOfContents ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"
              }`}>
                {visibility.showTableOfContents ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"}
              </span>
            </div>
            <Switch
              checked={visibility.showTableOfContents}
              onCheckedChange={(val) => updateVisibility("showTableOfContents", val)}
            />
          </div>

          {/* Back Cover Toggle */}
          <div className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${
            visibility.showBackCover ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"
          }`}>
            <div>
              <span className="text-xs font-black uppercase block">5. Contracapa</span>
              <span className="text-[10px] opacity-75 block">Fechamento e contatos</span>
              <span className={`inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${
                visibility.showBackCover ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"
              }`}>
                {visibility.showBackCover ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"}
              </span>
            </div>
            <Switch
              checked={visibility.showBackCover}
              onCheckedChange={(val) => updateVisibility("showBackCover", val)}
            />
          </div>
        </div>
      </div>

      {/* 1. SELETOR DE FONTES & TIPOGRAFIA DA REVISTA */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-5 shadow-sm">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Type className="w-4 h-4 text-amber-500" />
              <span>1. Seletor de Fontes & Tipografia da Revista</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Escolha as famílias tipográficas oficiais que estilizam as manchetes, títulos e parágrafos de todo o PDF.
            </p>
          </div>
          <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
            FONTE & DESIGN
          </span>
        </div>

        {/* Pareamentos Recomendados de 1 Clique (ui-ux-pro-max Intelligence) */}
        <div className="space-y-2 p-3.5 rounded-xl border-2 border-amber-500/40 bg-amber-400/5">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-black uppercase text-amber-500 flex items-center gap-1.5">
              <span>⚡ Combinações Consagradas de 1 Clique (Editorial & Sports Intelligence)</span>
            </Label>
            <span className="text-[9px] font-mono opacity-60 uppercase">APLICA MANCHETE + CORPO</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1">
            {typographyPairingPresets.map((preset, pIdx) => {
              const isActive = fontConfig.headlineFont === preset.headline && fontConfig.bodyFont === preset.body;
              return (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => applyTypographyPreset(preset.headline, preset.body)}
                  className={`p-2.5 rounded-lg border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                    isActive
                      ? "bg-amber-400 text-black border-black shadow-sm ring-2 ring-amber-400"
                      : "theme-app-card-subtle border-slate-300 hover:border-black"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-black text-xs uppercase leading-tight truncate">{preset.title}</span>
                    <span className={`text-[8px] font-mono font-black px-1.5 py-0.2 rounded border ${
                      isActive ? "bg-black text-amber-400 border-black" : "bg-amber-400/20 text-amber-600 border-amber-500/30"
                    }`}>
                      {preset.badge}
                    </span>
                  </div>
                  <p className="text-[10px] opacity-75 line-clamp-2 leading-tight mb-2">{preset.description}</p>
                  <div className="flex items-center justify-between pt-1 border-t border-current/20 text-[9px] font-mono font-bold">
                    <span className="truncate">H: {preset.headline.toUpperCase()}</span>
                    <span>+</span>
                    <span className="truncate">B: {preset.body.toUpperCase()}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Headline Fonts Selector */}
        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase block">
            A) Fonte dos Títulos, Manchetes e Capa (Headlines / H1 / H2):
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {headlineFontOptions.map((font) => {
              const isSelected = fontConfig.headlineFont === font.id;
              const fClass = getHeadlineFontClass(font.id);
              return (
                <div
                  key={font.id}
                  onClick={() => updateHeadlineFont(font.id)}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400"
                      : "theme-app-card-subtle border-slate-300 hover:border-black"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-xs">{font.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                    </div>
                    <span className="text-[10px] opacity-75 block mb-2">{font.style}</span>
                  </div>
                  <div className={`text-base font-black uppercase truncate border-t pt-1.5 ${fClass}`}>
                    {font.sample}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Body Fonts Selector */}
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <Label className="text-xs font-bold uppercase block">
            B) Fonte do Texto Corrido & Parágrafos (Body Text):
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {bodyFontOptions.map((font) => {
              const isSelected = fontConfig.bodyFont === font.id;
              const bClass = getBodyFontClass(font.id);
              return (
                <div
                  key={font.id}
                  onClick={() => updateBodyFont(font.id)}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400"
                      : "theme-app-card-subtle border-slate-300 hover:border-black"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-xs">{font.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                    </div>
                    <span className="text-[10px] opacity-75 block mb-2">{font.style}</span>
                  </div>
                  <div className={`text-xs truncate border-t pt-1.5 leading-snug ${bClass}`}>
                    {font.sample}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Typography Pairing Preview Card */}
        <div className="p-4 rounded-xl border-2 border-black bg-slate-950 text-white space-y-2 shadow-md">
          <span className="font-mono text-[9px] font-bold text-amber-400 uppercase tracking-widest block">
            PREVIEW EM TEMPO REAL DA COMBINAÇÃO TIPOGRÁFICA
          </span>
          <h3 className={`text-xl sm:text-2xl font-black uppercase text-amber-400 tracking-tight leading-tight ${activeHeadlineClass}`}>
            O CÓDIGO DA ALTA PERFORMANCE & FORÇA NÃO-CONVENCIONAL
          </h3>
          <p className={`text-xs text-slate-300 leading-relaxed text-justify ${activeBodyClass}`}>
            Este parágrafo de exemplo demonstra como os seus artigos e matérias serão renderizados tanto no leitor digital quanto na impressão final do PDF, combinando autoridade visual e conforto de leitura.
          </p>
        </div>
      </div>

      {/* 2. THEME SELECTION FOR THE MAGAZINE PUBLICATION (CORES REALISTAS DAS PÁGINAS INTERNAS) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Palette className="w-4 h-4 text-amber-500" />
              <span>2. Tema Visual da Revista ({MAGAZINE_THEMES.length} Paletas de Cores Editoriais)</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Escolha a identidade visual completa para a capa, páginas internas, caixas de destaque e contracapa.
            </p>
          </div>
          <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase shrink-0">
            {MAGAZINE_THEMES.length} TEMAS DISPONÍVEIS
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => setThemeFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${
              themeFilter === "all"
                ? "bg-amber-400 text-black border-black shadow-xs"
                : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"
            }`}
          >
            Todos ({MAGAZINE_THEMES.length})
          </button>
          <button
            type="button"
            onClick={() => setThemeFilter("dark")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${
              themeFilter === "dark"
                ? "bg-amber-400 text-black border-black shadow-xs"
                : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"
            }`}
          >
            Escuros & Táticos ({MAGAZINE_THEMES.filter((t) => t.category === "dark").length})
          </button>
          <button
            type="button"
            onClick={() => setThemeFilter("light")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${
              themeFilter === "light"
                ? "bg-amber-400 text-black border-black shadow-xs"
                : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"
            }`}
          >
            Claros & Editoriais ({MAGAZINE_THEMES.filter((t) => t.category === "light").length})
          </button>
          <button
            type="button"
            onClick={() => setThemeFilter("vibrant")}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${
              themeFilter === "vibrant"
                ? "bg-amber-400 text-black border-black shadow-xs"
                : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"
            }`}
          >
            Vibrantes & High-Energy ({MAGAZINE_THEMES.filter((t) => t.category === "vibrant").length})
          </button>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {MAGAZINE_THEMES.filter((t) => themeFilter === "all" || t.category === themeFilter).map((theme) => {
            const isSelected = project.themeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => handleSelectMagazineTheme(theme.id)}
                className={`theme-app-card-subtle cursor-pointer p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-500 ring-2 ring-amber-400 shadow-md bg-amber-400/5"
                    : "border-slate-300 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-black text-xs uppercase truncate pr-2">{theme.name}</span>
                    {isSelected ? (
                      <span className="shrink-0 flex items-center gap-1 bg-amber-400 text-black px-1.5 py-0.2 rounded font-mono font-black text-[9px] border border-black">
                        <CheckCircle2 className="w-3 h-3 text-black" />
                        ATIVO
                      </span>
                    ) : (
                      <span className="shrink-0 font-mono text-[8px] opacity-60 uppercase">
                        {theme.isLight ? "Claro" : theme.category === "vibrant" ? "Vibrante" : "Escuro"}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] opacity-75 leading-snug mb-3">{theme.description}</p>
                </div>

                {/* Color swatches with explicit color tags */}
                <div className="flex items-center justify-between pt-2.5 border-t border-slate-300 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-4 h-4 rounded-full border border-black shadow-xs shrink-0"
                      style={{ backgroundColor: theme.primaryColor }}
                      title={`Cor Primária: ${theme.primaryColor}`}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-black shadow-xs shrink-0"
                      style={{ backgroundColor: theme.accentColor }}
                      title={`Destaque: ${theme.accentColor}`}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-black shadow-xs shrink-0"
                      style={{ backgroundColor: theme.isLight ? theme.bgLight : theme.bgDark }}
                      title={`Fundo: ${theme.isLight ? theme.bgLight : theme.bgDark}`}
                    />
                  </div>
                  <span
                    className="font-bold uppercase text-[9px] px-1.5 py-0.5 rounded border"
                    style={{
                      backgroundColor: theme.isLight ? "#FAFAF9" : "#0F172A",
                      color: theme.isLight ? "#0F172A" : "#FFFFFF",
                      borderColor: theme.primaryColor,
                    }}
                  >
                    {theme.isLight ? "Fundo Branco" : "Fundo Escuro"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. APP UI THEME & ERGONOMICS (SELETOR DE APARÊNCIA DO APP) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-500" />
            <span>3. Esquema de Cores do Aplicativo (Eye-Care & Área de Trabalho)</span>
          </h3>
          <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded border border-current">
            WORKSPACE
          </span>
        </div>
        <p className="text-xs opacity-75 leading-relaxed">
          Alterne o visual da sua área de trabalho para evitar a fadiga visual durante longas sessões de edição.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 pt-1">
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
                  <p className="text-[11px] opacity-75 leading-snug">{uiTheme.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. INTELIGÊNCIA ARTIFICIAL (GOOGLE GEMINI) */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-3 shadow-sm bg-emerald-500/5 border-emerald-500/30">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-500" />
            <span>4. Inteligência Artificial (Google Gemini)</span>
          </h3>
          <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-emerald-500 text-white uppercase flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-white" />
            BACKEND SEGURO
          </span>
        </div>
        <p className="text-xs opacity-80 leading-relaxed">
          A integração com a Inteligência Artificial é gerenciada diretamente no servidor através da variável de ambiente <code className="font-mono font-bold">GEMINI_API_KEY</code>. As chaves de acesso nunca são expostas no navegador, URLs ou arquivos de backup.
        </p>
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-semibold text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Chamadas de IA protegidas e roteadas via servidor seguro (/api/ai).</span>
        </div>
      </div>
    </div>
  );
};
