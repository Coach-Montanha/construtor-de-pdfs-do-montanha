import { MagazineTheme, HeadlineFontOption, BodyFontOption } from "../types/magazine";

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
    case "creato":
      return "font-headline-creato tracking-tight";
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
  const isMidnightFintech = theme.id === "midnight-fintech";
  
  return {
    "--theme-primary": theme.primaryColor,
    "--theme-accent": theme.accentColor,
    "--theme-bg": isLight ? theme.bgLight : theme.bgDark,
    "--theme-card": theme.cardBg,
    "--theme-text": theme.textColor,
    "--theme-text-muted": isLight ? "#475569" : isMidnightFintech ? "#9EA6B6" : "#94A3B8",
    "--theme-border": theme.borderColor,
    "--theme-gradient-cta": isMidnightFintech
      ? "linear-gradient(90deg, #6958e2 20%, #7317d5)"
      : undefined,
    "--theme-page-glow": isMidnightFintech
      ? "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(83, 73, 126, 0.45), transparent 60%), radial-gradient(ellipse 50% 40% at 30% 10%, rgba(56, 152, 236, 0.15), transparent 55%)"
      : undefined,
    backgroundColor: isLight ? theme.bgLight : theme.bgDark,
    color: theme.textColor,
  } as React.CSSProperties;
}

/**
 * Determines whether a given hex color is perceptually light (brightness > 135)
 */
export function isColorLight(colorHex?: string): boolean {
  if (!colorHex || !colorHex.startsWith("#")) return true;
  const hex = colorHex.replace("#", "");
  if (hex.length < 6) return true;
  const r = parseInt(hex.substring(0, 2), 16) || 0;
  const g = parseInt(hex.substring(2, 4), 16) || 0;
  const b = parseInt(hex.substring(4, 6), 16) || 0;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 135;
}

