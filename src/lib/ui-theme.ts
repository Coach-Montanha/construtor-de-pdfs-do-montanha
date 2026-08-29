export type AppUiThemeMode =
  | "contrast-white"    // 100% Branco, Fonte Preta, Bordas Pretas
  | "light-clean"      // Claro Suave Editorial
  | "dark-ergonomic"   // Escuro Ergonômico (Slate & Âmbar)
  | "sepia-paper"      // Papel Sépiado Eye-Care
  | "midnight-oled";   // Preto Absoluto OLED

export interface AppUiThemeConfig {
  id: AppUiThemeMode;
  name: string;
  subtitle: string;
  icon: "contrast" | "sun" | "moon" | "book" | "zap";
  previewBg: string;
  previewCard: string;
  previewText: string;
  previewBorder: string;
  previewAccent: string;
  className: string;
}

export const APP_UI_THEMES: AppUiThemeConfig[] = [
  {
    id: "contrast-white",
    name: "Branco Puro & Alto Contraste (Recomendado)",
    subtitle: "Fundo 100% branco, tipografia preta nítida e bordas pretas bem definidas. Máxima legibilidade e contraste.",
    icon: "contrast",
    previewBg: "#FFFFFF",
    previewCard: "#FFFFFF",
    previewText: "#000000",
    previewBorder: "#000000",
    previewAccent: "#FACC15",
    className: "app-theme-contrast-white",
  },
  {
    id: "light-clean",
    name: "Modo Claro Editorial (Cinza Claro & Branco)",
    subtitle: "Fundo cinza suave, cards brancos e tipografia grafite. Conforto visual para ambientes claros.",
    icon: "sun",
    previewBg: "#F1F5F9",
    previewCard: "#FFFFFF",
    previewText: "#0F172A",
    previewBorder: "#94A3B8",
    previewAccent: "#F59E0B",
    className: "app-theme-light-clean",
  },
  {
    id: "dark-ergonomic",
    name: "Modo Escuro Ergonômico (Slate & Âmbar)",
    subtitle: "Carvão profundo balanceado, contraste WCAG AAA e destaques em amarelo industrial.",
    icon: "moon",
    previewBg: "#0F172A",
    previewCard: "#1E293B",
    previewText: "#F8FAFC",
    previewBorder: "#374151",
    previewAccent: "#F59E0B",
    className: "app-theme-dark-ergonomic",
  },
  {
    id: "sepia-paper",
    name: "Modo Papel & Leitura (Eye-Care Sépiado)",
    subtitle: "Tom quente de livro impresso com tipografia marrom escura. Zero luz azul para descanso visual.",
    icon: "book",
    previewBg: "#F6F1E5",
    previewCard: "#FFFDF9",
    previewText: "#2C241D",
    previewBorder: "#4A3E33",
    previewAccent: "#D97706",
    className: "app-theme-sepia-paper",
  },
  {
    id: "midnight-oled",
    name: "Modo Midnight OLED (Preto Absoluto)",
    subtitle: "Preto total com tipografia branca pura e cores de sinalização viva.",
    icon: "zap",
    previewBg: "#000000",
    previewCard: "#121212",
    previewText: "#FFFFFF",
    previewBorder: "#2E2E2E",
    previewAccent: "#FACC15",
    className: "app-theme-midnight-oled",
  },
];
