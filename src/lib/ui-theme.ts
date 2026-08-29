export type AppUiThemeMode = "light-clean" | "dark-ergonomic" | "sepia-paper" | "midnight-contrast";

export interface AppUiThemeConfig {
  id: AppUiThemeMode;
  name: string;
  subtitle: string;
  icon: "sun" | "moon" | "book" | "zap";
  previewBg: string;
  previewCard: string;
  previewText: string;
  previewAccent: string;
  // CSS Classes for App Shell
  bgClass: string;
  headerBg: string;
  subHeaderBg: string;
  cardBg: string;
  cardBorder: string;
  inputBg: string;
  inputBorder: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentBg: string;
  accentText: string;
}

export const APP_UI_THEMES: AppUiThemeConfig[] = [
  {
    id: "light-clean",
    name: "Modo Claro Editorial (Conforto Diurno)",
    subtitle: "Fundo suave, cards brancos, texto nítido em alto contraste. Descanso visual para longas horas.",
    icon: "sun",
    previewBg: "#F1F5F9",
    previewCard: "#FFFFFF",
    previewText: "#0F172A",
    previewAccent: "#D97706",
    bgClass: "bg-slate-100 text-slate-900",
    headerBg: "bg-white/95 backdrop-blur-md border-b border-slate-300 text-slate-900 shadow-sm",
    subHeaderBg: "bg-slate-50 border-b border-slate-300 text-slate-700",
    cardBg: "bg-white border border-slate-300 shadow-sm",
    cardBorder: "border-slate-300",
    inputBg: "bg-slate-50 text-slate-900 border-slate-300 focus:bg-white",
    inputBorder: "border-slate-300",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-700",
    textMuted: "text-slate-500",
    accentBg: "bg-amber-500 hover:bg-amber-600 text-slate-950",
    accentText: "text-amber-600 font-bold",
  },
  {
    id: "dark-ergonomic",
    name: "Modo Escuro Ergonômico (Slate & Ambar)",
    subtitle: "Carvão profundo balanceado, contraste WCAG AAA e destaques em amarelo industrial.",
    icon: "moon",
    previewBg: "#0F172A",
    previewCard: "#1E293B",
    previewText: "#F8FAFC",
    previewAccent: "#FACC15",
    bgClass: "bg-slate-950 text-slate-100",
    headerBg: "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white",
    subHeaderBg: "bg-slate-900 border-b border-slate-800 text-slate-300",
    cardBg: "bg-slate-900/90 border border-slate-800",
    cardBorder: "border-slate-800",
    inputBg: "bg-slate-800 text-white border-slate-700",
    inputBorder: "border-slate-700",
    textPrimary: "text-white",
    textSecondary: "text-slate-300",
    textMuted: "text-slate-400",
    accentBg: "bg-amber-500 hover:bg-amber-600 text-slate-950",
    accentText: "text-amber-400 font-bold",
  },
  {
    id: "sepia-paper",
    name: "Modo Papel & Leitura (Eye-Care Sépiado)",
    subtitle: "Tom quente e acolhedor estilo papel de livro. Elimina 100% da fadiga de luz azul.",
    icon: "book",
    previewBg: "#F6F1E5",
    previewCard: "#FFFDF9",
    previewText: "#2C241D",
    previewAccent: "#B45309",
    bgClass: "bg-[#F4EFE6] text-[#2C241D]",
    headerBg: "bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#DDD2BE] text-[#2C241D] shadow-sm",
    subHeaderBg: "bg-[#EFE7D8] border-b border-[#DDD2BE] text-[#4A3E33]",
    cardBg: "bg-[#FFFDF9] border border-[#DDD2BE] shadow-sm",
    cardBorder: "border-[#DDD2BE]",
    inputBg: "bg-[#F7F2E7] text-[#2C241D] border-[#DDD2BE]",
    inputBorder: "border-[#DDD2BE]",
    textPrimary: "text-[#2C241D]",
    textSecondary: "text-[#4A3E33]",
    textMuted: "text-[#7A6B5C]",
    accentBg: "bg-amber-600 hover:bg-amber-700 text-white",
    accentText: "text-amber-700 font-bold",
  },
  {
    id: "midnight-contrast",
    name: "Modo Midnight OLED (Alto Contraste)",
    subtitle: "Preto absoluto com tipografia branca pura e cores de sinalização viva.",
    icon: "zap",
    previewBg: "#000000",
    previewCard: "#121212",
    previewText: "#FFFFFF",
    previewAccent: "#FACC15",
    bgClass: "bg-black text-white",
    headerBg: "bg-black/95 backdrop-blur-md border-b border-zinc-800 text-white",
    subHeaderBg: "bg-zinc-950 border-b border-zinc-800 text-zinc-300",
    cardBg: "bg-zinc-900 border border-zinc-800",
    cardBorder: "border-zinc-800",
    inputBg: "bg-black text-white border-zinc-700",
    inputBorder: "border-zinc-700",
    textPrimary: "text-white",
    textSecondary: "text-zinc-200",
    textMuted: "text-zinc-400",
    accentBg: "bg-amber-400 hover:bg-amber-500 text-black",
    accentText: "text-amber-400 font-bold",
  },
];
