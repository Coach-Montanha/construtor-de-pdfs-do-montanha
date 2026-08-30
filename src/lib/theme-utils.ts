import { MagazineTheme, HeadlineFontOption, BodyFontOption, FontConfig } from "../types/magazine";

export function getHeadlineFontClass(headlineFont?: HeadlineFontOption): string {
  switch (headlineFont) {
    case "bebas":
      return "font-headline-bebas tracking-wide";
    case "montserrat":
      return "font-headline-montserrat tracking-tight";
    case "playfair":
      return "font-headline-playfair tracking-normal";
    case "cinzel":
      return "font-headline-cinzel tracking-wider";
    case "space":
      return "font-headline-space tracking-tight";
    case "oswald":
      return "font-headline-oswald tracking-tight";
    case "inter":
      return "font-headline-inter tracking-tight";
    default:
      return "font-headline-bebas tracking-wide";
  }
}

export function getBodyFontClass(bodyFont?: BodyFontOption): string {
  switch (bodyFont) {
    case "lora":
      return "font-body-lora";
    case "merriweather":
      return "font-body-merriweather";
    case "roboto":
      return "font-body-roboto";
    case "space":
      return "font-body-space";
    case "inter":
    default:
      return "font-body-inter";
  }
}

/**
 * Returns dynamic inline styles and CSS variables computed from the chosen MagazineTheme
 */
export function getMagazineThemeVariables(theme: MagazineTheme) {
  const isLight = Boolean(theme.isLight);
  
  return {
    "--theme-primary": theme.primaryColor,
    "--theme-accent": theme.accentColor,
    "--theme-bg": isLight ? theme.bgLight : theme.bgDark,
    "--theme-card": theme.cardBg,
    "--theme-text": theme.textColor,
    "--theme-text-muted": isLight ? "#475569" : "#94A3B8",
    "--theme-border": theme.borderColor,
    backgroundColor: isLight ? theme.bgLight : theme.bgDark,
    color: theme.textColor,
  } as React.CSSProperties;
}

