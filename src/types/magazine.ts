export type LayoutTemplate =
  | "editorial-lead"       // Standard Feature / Technical Article (3 colunas, drop cap 3 linhas, foto hero, deck de resumo)
  | "workout-protocol"     // Workout Protocols & Exercise Breakdowns (Warm-up box, A1/A2/B1/B2 clusters, sets/reps/tempo, QR Code)
  | "product-ad"           // Full-Page Product & Brand Promotion (Full-bleed hero, massive slogan, CTA badge, coupon, QR, tech spec badges)
  | "facility-spotlight"   // Studio / Facility Spotlight (Photo collage, 1/3 tech sheet sidebar, 2/3 narrative overview, mission, pull quote)
  | "two-column-quote"     // 2 colunas clássicas com citação centralizada e destaque lateral
  | "three-column-dense"   // 3 colunas de leitura aprofundada com cabeçalho elegante
  | "visual-gallery"       // Artigo com grande destaque para fotografia e bloco lateral
  | "interview-qa"         // Estilo entrevista (Perguntas em destaque / Respostas)
  | "infographic-tips";    // Guia prático com cards de dicas e passos numerados

export type MagazineThemeId =
  | "montanha-titanium"    // My Mad Methods / Unconventional Strength & Industrial Yellow
  | "tactical-iron"        // Tactical Steel & Warning Orange
  | "monochrome-grit"      // Deep Black, Stark White & Red
  | "vogue-haute"          // Editorial Classic
  | "cyber-neon"           // Futuristic High-Tech
  | "wellness-botanic";    // Organic Emerald

export interface MagazineTheme {
  id: MagazineThemeId;
  name: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  bgLight: string;
  bgDark: string;
  cardBg: string;
  borderColor: string;
  fontHeadline: string;
  fontBody: string;
  fontSerif: boolean;
}

export interface CoverHighlight {
  id: string;
  tag: string;
  title: string;
  authorCallout?: string;
  pageTarget?: number;
}

export type CoverStyleVariant =
  | "mad-methods"        // My Mad Methods Industrial Aesthetic: Bold Masthead, Hexagon Badge, Yellow Accents, Technical Grid
  | "tactical-stencil"   // Stencil Tactical Font, Warning Orange, Crosshair HUD, Military/Iron Focus
  | "monochrome-iron"    // High Contrast Gritty Black & White with Red Accents and Heavy Metal Texture
  | "clean-editorial";   // Sleek High-End Magazine

export interface CoverConfig {
  mastheadText: string;
  sloganText: string;
  issueBadge: string;
  mainHeadline: string;
  subHeadline: string;
  authorCallout?: string;
  highlights: CoverHighlight[];
  footerHighlights: string[];
  backgroundImage: string;
  backgroundOverlayOpacity: number; // 0 to 100
  barcodeText: string;
  priceBadge: string;
  issueDate: string;
  editionNumber: string;
  categoryTag: string;
  coverStyleVariant: CoverStyleVariant;
  showHazardStripe: boolean;
  showTechHud: boolean;
  hexBadgeText?: string;
}

export interface EditorialCredit {
  id: string;
  role: string;
  name: string;
}

export interface Contributor {
  id: string;
  name: string;
  title: string; // e.g. "MASTER KETTLEBELL COACH // CSCS"
  bio: string;
  photo: string;
  handle: string; // e.g. "@coachmontanha"
  facility?: string; // e.g. "MONTANHA IRON LAB // CURITIBA"
}

export interface EditorialInfo {
  editorName: string;
  editorRole: string;
  editorPhoto: string;
  editorActionPhoto?: string;
  editorLetterTitle: string;
  editorLetter: string;
  editorSignatureUrl?: string;
  credits: EditorialCredit[];
  editorialNote?: string;
  disclaimerText?: string;
  contributors: Contributor[];
}

export interface WorkoutExercise {
  code: string; // "A1", "A2", "B1", "B2", "FINISHER"
  name: string;
  setsReps: string; // "5 SETS × 5 REPS"
  tempoRest: string; // "TEMPO: 20X1 // REST: 90s"
  keyPoints: string;
}

export interface WorkoutProtocol {
  workoutTitle: string;
  warmupPrep: string;
  exercises: WorkoutExercise[];
  finisher?: string;
  videoQrUrl?: string;
}

export interface ProductPromotion {
  slogan: string; // "FORGED IN IRON // BUILT FOR WAR"
  productName: string; // "MONTANHA COMPETITION KETTLEBELLS"
  productSubtitle: string; // "Fundição de peça única em ferro dúctil com acabamento antiderrapante e calibração de precisão."
  productImage: string;
  promoBadgeText: string; // "SPECIAL LAUNCH OFFER // 15% OFF"
  couponCode: string; // "MONTANHA15"
  ctaUrl: string; // "WWW.MONTANHAIRON.COM.BR"
  specBadges: { title: string; subtitle: string }[];
  features: string[];
}

export interface FacilitySpotlight {
  facilityName: string; // "MONTANHA PERFORMANCE & IRON LAB"
  headCoach: string; // "COACH MONTANHA"
  location: string; // "SÃO PAULO // SP - BRASIL"
  website: string; // "WWW.MONTANHALAB.COM.BR"
  methodsUsed: string[];
  specialties: string[];
  galleryPhotos: string[]; // [photo1, photo2, photo3]
  overviewText: string;
  missionText: string;
  philosophyText: string;
  anchoredQuote: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  authorBio?: string;
  authorPhoto?: string;
  heroImage: string;
  heroImageCaption?: string;
  heroImagePrompt?: string;
  content: string; // Markdown or raw text paragraphs
  pullQuotes: string[];
  calloutBox?: {
    title: string;
    content: string;
  };
  keyTakeaways?: string[];
  layoutTemplate: LayoutTemplate;
  workoutProtocol?: WorkoutProtocol;
  productPromotion?: ProductPromotion;
  facilitySpotlight?: FacilitySpotlight;
  highlightColor?: string;
  tags: string[];
  estimatedReadTime: number; // minutes
  featuredOnCover: boolean;
}

export interface BackCoverConfig {
  headline: string;
  subheadline: string;
  message: string;
  backgroundImage: string;
  ctaText: string;
  websiteUrl: string;
  socialHandles: {
    instagram?: string;
    youtube?: string;
    email?: string;
  };
}

export interface MagazineProject {
  id: string;
  title: string;
  subtitle: string;
  editionNumber: string;
  volume: string;
  date: string;
  category: string;
  themeId: MagazineThemeId;
  coverConfig: CoverConfig;
  editorialInfo: EditorialInfo;
  articles: Article[];
  backCoverConfig: BackCoverConfig;
  geminiApiKey?: string;
  createdAt: string;
  updatedAt: string;
}

export type PageViewMode = "spread" | "single" | "grid";
