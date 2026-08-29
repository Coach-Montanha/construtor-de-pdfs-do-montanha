export type LayoutTemplate =
  | "editorial-lead"       // Matéria de capa / Destaque monumental (3 colunas, drop cap grande, foto full)
  | "two-column-quote"     // 2 colunas clássicas com citação centralizada e destaque lateral
  | "three-column-dense"   // 3 colunas de leitura aprofundada com cabeçalho elegante
  | "visual-gallery"       // Artigo com grande destaque para fotografia e bloco lateral
  | "interview-qa"         // Estilo entrevista (Perguntas em destaque / Respostas)
  | "infographic-tips";    // Guia prático com cards de dicas e passos numerados

export type MagazineThemeId =
  | "montanha-titanium"
  | "vogue-haute"
  | "cyber-neon"
  | "wellness-botanic"
  | "business-leader"
  | "crimson-editorial";

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
  pageTarget?: number;
}

export interface CoverConfig {
  mastheadText: string;
  issueBadge: string;
  mainHeadline: string;
  subHeadline: string;
  highlights: CoverHighlight[];
  footerHighlights: string[];
  backgroundImage: string;
  backgroundOverlayOpacity: number; // 0 to 100
  barcodeText: string;
  priceBadge: string;
  issueDate: string;
  editionNumber: string;
  categoryTag: string;
}

export interface EditorialCredit {
  id: string;
  role: string;
  name: string;
}

export interface EditorialInfo {
  editorName: string;
  editorRole: string;
  editorPhoto: string;
  editorLetterTitle: string;
  editorLetter: string;
  editorSignatureUrl?: string;
  credits: EditorialCredit[];
  editorialNote?: string;
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
