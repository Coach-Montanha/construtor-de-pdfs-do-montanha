import { o as __toESM } from "../_runtime.mjs";
import { r as validateEmailMx, t as checkProjectAccess } from "./ecosystem-auth-service-BvL4SRp3.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { $ as Moon, $t as CircleQuestionMark, A as Smartphone, At as FileText, B as Scale, C as SquarePlus, Ct as GripVertical, D as Split, Dt as FolderOpen, E as SquareCheckBig, Et as FolderSync, F as Share, Ft as Eye, G as Printer, H as RefreshCw, Ht as Crown, I as Settings, It as EyeOff, J as PanelsTopLeft, Jt as Coffee, K as Plus, Kt as Copy, L as Send, Lt as ExternalLink, Mt as FileDown, N as ShieldCheck, Nt as FileCheck, O as SpellCheck, Ot as FolderArchive, P as ShieldAlert, Pt as Feather, Q as MoveDown, R as Search, Rt as Dumbbell, S as Square, St as Hand, T as SquareMinus, Tt as GitCommitHorizontal, U as Quote, Ut as Crosshair, V as RotateCcw, W as QrCode, Wt as CreditCard, X as MoveVertical, Xt as CloudDownload, Y as Palette, Yt as Cloud, Z as MoveUp, Zt as Clock, _ as TrendingUp, _n as ArrowLeft, _t as Instagram, a as X, an as ChevronDown, at as LogOut, b as Table, bt as Highlighter, c as User, cn as Calendar, d as Upload, dn as BookOpen, dt as Link, en as CircleCheck, et as Monitor, f as Undo2, fn as Bold, ft as Lightbulb, gn as ArrowRightLeft, gt as Italic, h as Trophy, hn as ArrowRight, ht as Key, i as Youtube, in as ChevronLeft, it as Mail, j as SlidersVertical, jt as FilePen, k as Sparkles, kt as Flame, l as UserPlus, ln as Building, lt as LoaderCircle, m as Type, mn as ArrowUpDown, mt as Layers, n as ZoomIn, nn as ChevronUp, o as WandSparkles, on as Check, ot as LogIn, p as Underline, pn as Award, pt as LayoutGrid, q as PenLine, qt as Columns2, r as Zap, rn as ChevronRight, rt as Maximize2, s as Users, sn as Camera, st as Lock, t as ZoomOut, tn as CircleAlert, tt as Minus, un as Book, ut as List, v as Trash2, vn as Archive, vt as Info, w as SquarePen, wt as Globe, x as Sun, xt as Heading3, y as Tag, yt as Image$1, z as Scissors, zt as Download } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as cn, n as Input, r as Label, t as Button } from "./label-BMBi1IQG.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { r as init_html2canvas_esm, t as html2canvas } from "../_libs/html2canvas.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7CuJzgU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init_html2canvas_esm();
var import_jspdf_node_min = require_jspdf_node_min();
var MAGAZINE_THEMES = [
	{
		id: "montanha-titanium",
		name: "Montanha Titanium (Padrão Industrial)",
		description: "Estética My Mad Methods: Preto profundo, amarelo industrial (#FACC15) e cinza titânio.",
		category: "dark",
		primaryColor: "#FACC15",
		accentColor: "#F59E0B",
		textColor: "#FFFFFF",
		bgLight: "#FFFFFF",
		bgDark: "#0B0F19",
		cardBg: "#111827",
		borderColor: "#FACC15",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "tactical-iron",
		name: "Tactical Iron & Warning Orange",
		description: "Laranja tático militar (#FB923C) de alta visibilidade sobre metal escovado e aço fundido.",
		category: "dark",
		primaryColor: "#FB923C",
		accentColor: "#F97316",
		textColor: "#FFFFFF",
		bgLight: "#F8FAFC",
		bgDark: "#090D16",
		cardBg: "#131B2E",
		borderColor: "#FB923C",
		fontHeadline: "font-mono",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "monochrome-grit",
		name: "Monochrome Heavy Grit & Red",
		description: "Preto e branco marfim com alto contraste e acentos em vermelho rubi de combate (#EF4444).",
		category: "dark",
		primaryColor: "#EF4444",
		accentColor: "#DC2626",
		textColor: "#FFFFFF",
		bgLight: "#F4F4F5",
		bgDark: "#050505",
		cardBg: "#121212",
		borderColor: "#EF4444",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "vogue-haute",
		name: "Vogue Haute Editorial (Fundo Branco)",
		description: "Design clássico com fundo 100% branco editorial (#FAFAF9), tipografia preta elegante e serifas.",
		category: "light",
		primaryColor: "#0F172A",
		accentColor: "#475569",
		textColor: "#0F172A",
		bgLight: "#FAFAF9",
		bgDark: "#FAFAF9",
		cardBg: "#FFFFFF",
		borderColor: "#CBD5E1",
		fontHeadline: "font-serif",
		fontBody: "font-serif",
		fontSerif: true,
		isLight: true,
		coverPrimaryColor: "#FFFFFF",
		coverBadgeBg: "#FFFFFF",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "cyber-neon",
		name: "Cyber Performance & Electric Blue",
		description: "Visual futurista de biohacking com azul elétrico (#38BDF8) e grid de alta tecnologia.",
		category: "vibrant",
		primaryColor: "#38BDF8",
		accentColor: "#0284C7",
		textColor: "#FFFFFF",
		bgLight: "#F0F9FF",
		bgDark: "#030712",
		cardBg: "#0F172A",
		borderColor: "#38BDF8",
		fontHeadline: "font-mono",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "wellness-botanic",
		name: "Warrior Botanic & Deep Emerald",
		description: "Verde esmeralda profundo (#34D399) para matérias de nutrição, longevidade e força natural.",
		category: "dark",
		primaryColor: "#34D399",
		accentColor: "#059669",
		textColor: "#FFFFFF",
		bgLight: "#F0FDF4",
		bgDark: "#061A14",
		cardBg: "#0B2E24",
		borderColor: "#34D399",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "olimpo-gold",
		name: "Olimpo Gold & Obsidian Luxury",
		description: "Ouro real nobre (#EAB308) sobre fundo preto ônix com detalhes em bronze e sofisticação de elite.",
		category: "dark",
		primaryColor: "#EAB308",
		accentColor: "#CA8A04",
		textColor: "#FFFFFF",
		bgLight: "#FEFCE8",
		bgDark: "#050508",
		cardBg: "#14110B",
		borderColor: "#EAB308",
		fontHeadline: "font-serif",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "desert-coyote",
		name: "Desert Storm & Coyote Camo",
		description: "Areia militar tática (#D4A373) e bege deserto sobre marrom chumbo, focado em expedições outdoor.",
		category: "dark",
		primaryColor: "#D4A373",
		accentColor: "#E9D8A6",
		textColor: "#FFFFFF",
		bgLight: "#FEF3C7",
		bgDark: "#13100D",
		cardBg: "#221C16",
		borderColor: "#D4A373",
		fontHeadline: "font-mono",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "nordic-ice",
		name: "Nordic Minimalist & Polar Ice (Fundo Claro)",
		description: "Fundo branco polar suave (#F8FAFC), azul glacial (#0284C7) e tipografia escandinava ultra limpa.",
		category: "light",
		primaryColor: "#0284C7",
		accentColor: "#0369A1",
		textColor: "#0F172A",
		bgLight: "#F8FAFC",
		bgDark: "#F8FAFC",
		cardBg: "#FFFFFF",
		borderColor: "#BAE6FD",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#38BDF8",
		coverBadgeBg: "#38BDF8",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "gladiator-crimson",
		name: "Gladiator Crimson & Blood Iron",
		description: "Vinho imperial e vermelho forja (#DC2626) sobre preto grafite com detalhes de combate corpo a corpo.",
		category: "dark",
		primaryColor: "#DC2626",
		accentColor: "#991B1B",
		textColor: "#FFFFFF",
		bgLight: "#FEF2F2",
		bgDark: "#0D0506",
		cardBg: "#1F0C0F",
		borderColor: "#DC2626",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "vintage-golden-era",
		name: "Golden Era 1970 & Vintage Iron",
		description: "Amarelo mostarda retrô (#E6AF2E), marrom couro envelhecido e visual clássico dos anos de ouro da musculação.",
		category: "dark",
		primaryColor: "#E6AF2E",
		accentColor: "#C98A16",
		textColor: "#FFFFFF",
		bgLight: "#FFFBEB",
		bgDark: "#140F0A",
		cardBg: "#261D15",
		borderColor: "#E6AF2E",
		fontHeadline: "font-serif",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "midnight-ultraviolet",
		name: "Midnight Ultraviolet & Deep Purple",
		description: "Roxo cósmico elétrico (#C084FC) e magenta neon sobre preto profundo, estética noturna de ponta.",
		category: "vibrant",
		primaryColor: "#C084FC",
		accentColor: "#A855F7",
		textColor: "#FFFFFF",
		bgLight: "#FAF5FF",
		bgDark: "#080410",
		cardBg: "#170C2E",
		borderColor: "#C084FC",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "ronin-crimson",
		name: "Japanese Ronin & Sumi Ink",
		description: "Vermelho carmim imperial (#E11D48) e tinta sumi-ê sobre preto carvão com disciplina e minimalismo oriental.",
		category: "dark",
		primaryColor: "#E11D48",
		accentColor: "#BE123C",
		textColor: "#FFFFFF",
		bgLight: "#FFF1F2",
		bgDark: "#0A0A0C",
		cardBg: "#17171C",
		borderColor: "#E11D48",
		fontHeadline: "font-serif",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "concrete-monolith",
		name: "Monolith Concrete & Heavy Slate",
		description: "Cinza concreto industrial (#94A3B8) e chumbo militar sem distrações, pura força e austeridade.",
		category: "dark",
		primaryColor: "#94A3B8",
		accentColor: "#64748B",
		textColor: "#FFFFFF",
		bgLight: "#F1F5F9",
		bgDark: "#0B0F15",
		cardBg: "#151C28",
		borderColor: "#94A3B8",
		fontHeadline: "font-mono",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "acid-lime-athletic",
		name: "High-Voltage Acid Lime / Cyber Athletic",
		description: "Verde-limão eletrizante (#A3E635 / #CCFF00) sobre preto asfalto puro, máxima visibilidade e impacto atlético.",
		category: "vibrant",
		primaryColor: "#A3E635",
		accentColor: "#84CC16",
		textColor: "#FFFFFF",
		bgLight: "#F7FEE7",
		bgDark: "#030303",
		cardBg: "#101308",
		borderColor: "#A3E635",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: false
	},
	{
		id: "swiss-helvetica",
		name: "Swiss International & Alpine Red (Fundo Branco)",
		description: "Design internacional suíço com fundo 100% branco (#FFFFFF), vermelho puro (#DC2626) e contraste absoluto.",
		category: "light",
		primaryColor: "#DC2626",
		accentColor: "#991B1B",
		textColor: "#000000",
		bgLight: "#FFFFFF",
		bgDark: "#FFFFFF",
		cardBg: "#F8FAFC",
		borderColor: "#DC2626",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#EF4444",
		coverBadgeBg: "#EF4444",
		coverBadgeTextColor: "#FFFFFF"
	},
	{
		id: "midnight-fintech",
		name: "Midnight Fintech & Violet Glow (Design Language)",
		description: "Midnight dark void (#050A14), brilho radial violeta e magenta (#6958E2 / #7317D5), texto lite-white e cards translúcidos 4%.",
		category: "dark",
		primaryColor: "#6958E2",
		accentColor: "#7317D5",
		textColor: "#EAEAEA",
		bgLight: "#F8FAFC",
		bgDark: "#050A14",
		cardBg: "#0D1424",
		borderColor: "#171E2C",
		fontHeadline: "font-headline-creato",
		fontBody: "font-body-inter",
		fontSerif: false,
		isLight: false
	},
	{
		id: "clarity-monochrome",
		name: "Editorial Clarity & Black Ink (Alto Contraste)",
		description: "Foco total na leitura: Capa com fontes brancas luminosas destacadas, páginas 100% brancas com tipografia e detalhes em preto puro (#000000) e cinza chumbo (#18181B).",
		category: "light",
		primaryColor: "#000000",
		accentColor: "#18181B",
		textColor: "#000000",
		bgLight: "#FFFFFF",
		bgDark: "#FFFFFF",
		cardBg: "#F4F4F5",
		borderColor: "#000000",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#FFFFFF",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#FFFFFF",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "montanha-clean-titanium",
		name: "Montanha Titanium Light & Industrial Amber",
		description: "Versão clara oficial Montanha: Capa com amarelo industrial e branco destacados, páginas em titânio acetinado com texto preto e detalhes em cinza grafite e âmbar escuro.",
		category: "light",
		primaryColor: "#18181B",
		accentColor: "#D97706",
		textColor: "#09090B",
		bgLight: "#F8F9FA",
		bgDark: "#F8F9FA",
		cardBg: "#FFFFFF",
		borderColor: "#18181B",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#FACC15",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#FACC15",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "oxford-navy-cream",
		name: "Oxford Journal & Royal Navy (Fundo Marfim)",
		description: "Elegância clássica e sem fadiga: Capa com tipografia branca e ouro champagne, páginas em marfim editorial (#FAF8F5) com texto preto ônix (#020617) e azul marinho real profundo (#0F172A).",
		category: "light",
		primaryColor: "#0F172A",
		accentColor: "#1E3A8A",
		textColor: "#020617",
		bgLight: "#FAF8F5",
		bgDark: "#FAF8F5",
		cardBg: "#FFFFFF",
		borderColor: "#0F172A",
		fontHeadline: "font-serif",
		fontBody: "font-serif",
		fontSerif: true,
		isLight: true,
		coverPrimaryColor: "#FDE047",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#FDE047",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "tactical-dossier-light",
		name: "Tactical Dossier & Charcoal Grid (Fundo Gelo)",
		description: "Estética de dossiê militar: Capa com fontes em branco e laranja de aviso destacados, páginas em cinza gelo com letras pretas e caixas em chumbo militar (#1E293B).",
		category: "light",
		primaryColor: "#1E293B",
		accentColor: "#C2410C",
		textColor: "#0F172A",
		bgLight: "#F1F5F9",
		bgDark: "#F1F5F9",
		cardBg: "#FFFFFF",
		borderColor: "#1E293B",
		fontHeadline: "font-mono",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#FB923C",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#FB923C",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "athletic-crimson-light",
		name: "Athletic Performance & Deep Crimson (Fundo Branco)",
		description: "Energia esportiva nítida: Capa com fontes brancas e rubi vivo destacadas, páginas brancas com texto preto e detalhes em vinho arterial escuro (#881337) para máxima ênfase.",
		category: "light",
		primaryColor: "#881337",
		accentColor: "#991B1B",
		textColor: "#09090B",
		bgLight: "#FAFAFA",
		bgDark: "#FAFAFA",
		cardBg: "#FFFFFF",
		borderColor: "#881337",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#F87171",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#FFFFFF",
		coverBadgeTextColor: "#881337"
	},
	{
		id: "botanic-emerald-light",
		name: "Botanic Longevity & Deep Emerald (Fundo Suave)",
		description: "Nutrição e biohacking: Capa com tipografia clara e verde esmeralda luminoso, páginas em branco botânico com letras pretas e caixas em verde floresta fechado (#064E3B).",
		category: "light",
		primaryColor: "#064E3B",
		accentColor: "#047857",
		textColor: "#061A14",
		bgLight: "#F2F9F6",
		bgDark: "#F2F9F6",
		cardBg: "#FFFFFF",
		borderColor: "#064E3B",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#34D399",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#34D399",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "harbor-slate-light",
		name: "Minimalist Slate & Steel Blue (Fundo Alabastro)",
		description: "Precisão arquitetônica e modernismo: Capa com fontes em branco puro e ciano glacial, páginas em branco alabastro polar com texto preto profundo (#030712) e petróleo escuro (#0F3D5E).",
		category: "light",
		primaryColor: "#0F3D5E",
		accentColor: "#0369A1",
		textColor: "#030712",
		bgLight: "#F8FAFC",
		bgDark: "#F8FAFC",
		cardBg: "#FFFFFF",
		borderColor: "#0F3D5E",
		fontHeadline: "font-sans",
		fontBody: "font-sans",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#38BDF8",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#38BDF8",
		coverBadgeTextColor: "#000000"
	},
	{
		id: "swiss-editorial",
		name: "Swiss Editorial & Amber Gold (Design Suíço)",
		description: "Estética suíça contemporânea inspirada no ui-ux-pro-max: Fundo branco papel puro (#FFFFFF), texto preto carvão (#0F172A) para contraste 15:1 (WCAG AAA) e detalhes vibrantes em âmbar e ouro queimado (#D97706 / #F59E0B).",
		category: "light",
		primaryColor: "#D97706",
		accentColor: "#F59E0B",
		textColor: "#0F172A",
		bgLight: "#FFFFFF",
		bgDark: "#FFFFFF",
		cardBg: "#F8FAFC",
		borderColor: "#D97706",
		fontHeadline: "font-headline-oswald",
		fontBody: "font-body-inter",
		fontSerif: false,
		isLight: true,
		coverPrimaryColor: "#F59E0B",
		coverTextColor: "#FFFFFF",
		coverBadgeBg: "#F59E0B",
		coverBadgeTextColor: "#000000"
	}
];
var INITIAL_MAGAZINE_PROJECT = {
	id: "proj-montanha-01",
	title: "MONTANHA",
	subtitle: "UNCONVENTIONAL STRENGTH & HIGH PERFORMANCE",
	editionNumber: "01",
	volume: "01",
	date: "SETEMBRO 2026",
	category: "UNCONVENTIONAL STRENGTH",
	themeId: "montanha-titanium",
	pageVisibility: {
		showCover: true,
		showEditorLetter: true,
		showContributors: false,
		showTableOfContents: true,
		showBackCover: true
	},
	coverConfig: {
		mastheadText: "MONTANHA",
		sloganText: "UNCONVENTIONAL STRENGTH & PERFORMANCE",
		issueBadge: "EDIÇÃO ESPECIAL // Nº 01",
		mainHeadline: "O CÓDIGO DA ALTA PERFORMANCE",
		subHeadline: "Como reprogramar o metabolismo, construir força indestrutível e dominar a disciplina diária.",
		authorCallout: "COACH MONTANHA",
		categoryTag: "EXCLUSIVO",
		coverStyleVariant: "mad-methods",
		showHazardStripe: true,
		showTechHud: true,
		hexBadgeText: "VOL. 01 // ISSUE 01",
		textScale: 115,
		highlightsFontSize: "large",
		headlineFontSize: "large",
		highlights: [
			{
				id: "hl-1",
				tag: "HIPERTROFIA & CIÊNCIA",
				title: "Os 3 Pilares Ocultos do Ganho de Massa que a Maioria Ignora",
				authorCallout: "Coach Montanha",
				teaser: "O método científico definitivo para romper o platô muscular sem depender de atalhos.",
				pageTarget: 3
			},
			{
				id: "hl-2",
				tag: "BIOHACKING",
				title: "Sono Profundo: A Janela de Recuperação Celular e Hormonal",
				authorCallout: "Dra. Helena Vasconcelos",
				teaser: "Como otimizar a restauração hormonal e a regeneração celular durante a noite.",
				pageTarget: 4
			},
			{
				id: "hl-3",
				tag: "MINDSET",
				title: "A Psicologia do Vencedor: Blindando sua Mente contra a Procrastinação",
				authorCallout: "Coach Montanha",
				teaser: "A ciência prática para blindar a mente e manter consistência diária inegociável.",
				pageTarget: 5
			}
		],
		footerHighlights: [
			"NUTRIÇÃO DE PRECISÃO",
			"SUPLEMENTAÇÃO ESTRATÉGICA",
			"LONGEVIDADE ATIVA",
			"FORÇA BRUTA"
		],
		backgroundImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2560&q=95",
		backgroundOverlayOpacity: 60,
		barcodeText: "9 772026 001008",
		priceBadge: "EDIÇÃO PREMIUM",
		issueDate: "SETEMBRO 2026",
		editionNumber: "01"
	},
	editorialInfo: {
		editorName: "COACH MONTANHA",
		editorRole: "FOUNDER & EDITOR-IN-CHIEF",
		editorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
		editorActionPhoto: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
		editorLetterTitle: "A BUSCA INCESSANTE PELA EXCELÊNCIA",
		editorLetter: `Bem-vindo à primeira edição oficial da Revista Montanha.

Este projeto nasceu de uma inquietação: no mar de conteúdos superficiais que inundam as redes sociais hoje em dia, sentimos a necessidade de criar um refúgio de conhecimento profundo, denso e verdadeiramente transformador.

Aqui, não acreditamos em atalhos mágicos ou promessas vazias. Acreditamos no poder do treino consistente, na biomecânica refinada, na ciência aplicada sem dogmas e, acima de tudo, na mentalidade inabalável.

Cada página que você ler nesta edição foi cuidadosamente diagramada para entregar não apenas informação, mas um chamado à ação. Que estas linhas sirvam de combustível para que você conquiste a sua melhor versão dentro e fora dos treinos.`,
		editorialNote: "A força não é um acidente genético; é uma decisão diária forjada no ferro.",
		isbn: "978-65-00-98765-4",
		issn: "2675-9829",
		publisherInfo: "MONTANHA EDITORIAL & PUBLICATONS LTDA. // CNPJ: 00.000.000/0001-00 // SÃO PAULO - BRASIL",
		catalogingData: "Dados Internacionais de Catalogação na Publicação (CIP)\nRevista Montanha : alta performance, força não-convencional e ciência aplicada / Editor-Chefe: Coach Montanha. -- Ed. 01 (Set. 2026) -- São Paulo : Montanha Editorial, 2026. Mensal. ISSN 2675-9829. ISBN 978-65-00-98765-4. 1. Educação física. 2. Musculação e Condicionamento. 3. Treinamento Físico. I. Montanha, Coach. CDD 613.71",
		legalText: "TODOS OS DIREITOS RESERVADOS. É rigorosamente proibida a reprodução total ou parcial desta obra por quaisquer meios eletrônicos, mecânicos, fotográficos ou gravação sem a prévia autorização expressa dos editores. As opiniões emitidas em artigos assinados são de inteira responsabilidade de seus respectivos autores.",
		disclaimerText: "AVISO LEGAL & MÉDICO: O conteúdo editorial desta publicação destina-se exclusivamente a fins informativos e educacionais. A prática de exercícios físicos intensos e alterações na dieta exigem avaliação médica prévia e orientação de profissionais de Educação Física e Nutrição registrados nos respectivos conselhos de classe. © 2026 Montanha Media.",
		credits: [
			{
				id: "c-1",
				role: "DIRETOR EDITORIAL",
				name: "Coach Montanha"
			},
			{
				id: "c-2",
				role: "DESIGN & DIAGRAMAÇÃO",
				name: "Montanha Studio AI"
			},
			{
				id: "c-3",
				role: "REVISÃO TÉCNICA",
				name: "Equipe de Performance"
			},
			{
				id: "c-4",
				role: "FOTOGRAFIA PRINCIPAL",
				name: "Montanha Media Lab"
			}
		],
		contributors: [
			{
				id: "con-1",
				name: "COACH MONTANHA",
				title: "MASTER KETTLEBELL INSTRUCTOR // CSCS",
				bio: "Fundador do método não-convencional de força, especialista em preparação física de alta densidade e treinamento balístico.",
				photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
				handle: "@coachmontanha",
				facility: "MONTANHA IRON LAB // MATRIZ"
			},
			{
				id: "con-2",
				name: "DRA. HELENA VASCONCELOS",
				title: "NEUROCIENTISTA & BIOHACKER // MD",
				bio: "Pesquisadora em fisiologia do sono profundo, variabilidade cardíaca (HRV) e restauração neuromuscular em atletas de alto rendimento.",
				photo: "https://images.unsplash.com/photo-1594824813628-98e3b48a1c97?auto=format&fit=crop&w=400&q=80",
				handle: "@drahelenavasconcelos",
				facility: "NEURORECOVERY INSTITUTE"
			},
			{
				id: "con-3",
				name: "MARCUS 'VIKING' SILVA",
				title: "STEEL MACE & CLUBBELL SPECIALIST // CSCS",
				bio: "Instrutor sênior de alavancas rotacionais e treinamento tridimensional. Focado em saúde escapular e prevenção de lesões em esportes de combate.",
				photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
				handle: "@viking.strength",
				facility: "TACTICAL COMBAT LAB"
			}
		],
		tocHeadline: "SUMÁRIO",
		tocSpotlightImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
		tocSpotlightTitle: "TREINAMENTO NÃO-CONVENCIONAL & ALAVANCAS DE FORÇA",
		tocSpotlightCategory: "LABORATÓRIO DE PERFORMANCE",
		editorLetterSpotlightImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
		editorLetterSpotlightCaption: "A consistência nos detalhes invisíveis constrói o corpo e a mente indestrutíveis."
	},
	articles: [
		{
			id: "art-1",
			title: "KETTLEBELL DYNAMICS: O PODER BALÍSTICO DO SWING",
			subtitle: "Como o kettlebell pesado recruta a cadeia posterior, desenvolve potência de quadril e cria um motor cardiovascular inesgotável.",
			category: "MONTANHA METHOD",
			author: "Coach Montanha",
			authorBio: "Master Kettlebell Instructor e Fundador.",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
			heroImageCaption: "A aceleração violenta do quadril combinada ao travamento dorsal engaja mais de 600 músculos por segundo.",
			heroImagePrompt: "Athletic fighter doing heavy kettlebell swing in dark gritty industrial gym, chalk dust, cinematic rim lighting, 8k",
			content: `O kettlebell não é apenas um haltere com alça; é uma ferramenta de aceleração centrífuga e desaceleração excêntrica violenta. Ao contrário dos pesos convencionais onde a trajetória é linear e estática, o kettlebell exige que o sistema neuromuscular estabilize forças dinâmicas em múltiplos planos.

**A Explosão do Hinge de Quadril**
O exercício mestre — o Kettlebell Swing Hardstyle — ensina o corpo a gerar potência máxima a partir dos glúteos e isquiotibiais, transferindo essa força através de um core travado em prancha balística. Em milissegundos, o atleta transita do relaxamento elástico para uma contração isométrica total.

**Densidade e Capacidade de Trabalho**
Ao combinar protocolos de 10x10 com kettlebells de 32kg ou 40kg, o limiar de lactato é empurrado a níveis extremos. O coração opera na zona anaeróbica enquanto as fibras musculares do tipo II são recrutadas em sua plenitude.`,
			pullQuotes: ["O kettlebell pune a negligência e premia o respeito: domine a trajetória ou seja dominado por ela."],
			calloutBox: {
				title: "REGRA DE OURO DO COACH",
				content: "A força gerada no swing vem 100% da flexão e extensão explosiva do quadril. Os braços atuam apenas como cordas que conectam o peso ao seu tronco."
			},
			keyTakeaways: [
				"A força vem do quadril, nunca dos braços.",
				"Mantenha a coluna neutra e a dorsal engatada para proteger a lombar.",
				"Expire com força no topo do movimento criando pressão intra-abdominal máxima."
			],
			references: `// REFERÊNCIAS
1. MCGILL, S.M.; MARSHALL, L.W. Kettlebell swing, snatch, and bottoms-up carry: Back and hip muscle activation, motion, and low back loads. J Strength Cond Res, 2012.
2. LAKE, J.P.; LAUDNER, K.G. Kettlebell swing training improves maximal and explosive strength. J Strength Cond Res, 2012.
3. TSATSOULINE, P. Enter the Kettlebell! Strength Secret of the Soviet Supermen. Dragon Door, 2006.`,
			layoutTemplate: "editorial-lead",
			tags: [
				"Kettlebell",
				"Balística",
				"Cadeia Posterior",
				"Montanha"
			],
			estimatedReadTime: 5,
			featuredOnCover: true,
			enabled: true
		},
		{
			id: "art-2",
			title: "DOUBLE KB STRENGTH PROTOCOL: DENSIDADE MÁXIMA",
			subtitle: "Protocolo completo de força funcional com 2 kettlebells pesados para hipertrofia densa e potência pura.",
			category: "WORKOUT PROTOCOL",
			author: "Coach Montanha",
			authorBio: "Master Coach // Montanha Method",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1400&q=85",
			content: "Protocolo de alta intensidade com ênfase em sobrecarga progressiva e tempo sob tensão.",
			pullQuotes: ["A simplicidade brutal do treino com dois kettlebells forja atletas indestrutíveis."],
			layoutTemplate: "workout-protocol",
			workoutProtocol: {
				workoutTitle: "COMPLEX MONSTER: DOUBLE KB STRENGTH",
				warmupPrep: "3 Rounds: 10 Halo com 16kg + 10 Cossack Squats + 5 Pranchas Escapulares. Foco em abertura de quadril e estabilidade glenoumeral.",
				exercises: [
					{
						code: "A1",
						name: "DOUBLE KB CLEAN & STRICT PRESS",
						setsReps: "5 SÉRIES × 5 REPS",
						tempoRest: "TEMPO: 20X1 // REST: 90s",
						keyPoints: "Trave glúteos e abdômen no ápice do press. Não hiperestenda a coluna lombar."
					},
					{
						code: "A2",
						name: "DOUBLE KB FRONT SQUAT (RACK POSITION)",
						setsReps: "5 SÉRIES × 6 REPS",
						tempoRest: "TEMPO: 31X0 // REST: 90s",
						keyPoints: "Cotovelos apontando para o chão, pressão torácica contínua e descida controlada."
					},
					{
						code: "B1",
						name: "HEAVY GORILLA ROW (PAIRED)",
						setsReps: "4 SÉRIES × 8 REPS / LADO",
						tempoRest: "TEMPO: 2110 // REST: 60s",
						keyPoints: "Tronco paralelo ao solo, puxe com o cotovelo rentes às costelas."
					},
					{
						code: "FINISHER",
						name: "DOUBLE KB FARMER'S WALK SUICIDE",
						setsReps: "4 TIROS × 40 METROS",
						tempoRest: "TEMPO: CONTÍNUO // REST: 60s",
						keyPoints: "Carga pesada (2x28kg ou 2x32kg). Postura ereta, ombros encaixados para trás."
					}
				],
				finisher: "Execute os tiros de Farmer's Walk sem soltar o peso no meio do trajeto. Mantenha respiração nasal profunda entre as séries.",
				videoQrUrl: "https://www.youtube.com"
			},
			tags: [
				"Treino",
				"Double KB",
				"Hipertrofia",
				"Protocolo"
			],
			estimatedReadTime: 4,
			featuredOnCover: true,
			enabled: true
		},
		{
			id: "art-3",
			title: "MONTANHA COMPETITION KETTLEBELLS // CAST IRON",
			subtitle: "Kettlebells fundidos em peça única de ferro dúctil com calibração precisa para treinamento de alta performance.",
			category: "GEAR & PROMO",
			author: "Montanha Equipment Lab",
			heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
			content: "Desenvolvidos com base nas especificações dos maiores torneios internacionais de força.",
			pullQuotes: ["Ferro maciço, pegada imbatível e durabilidade para a vida toda."],
			layoutTemplate: "product-ad",
			productPromotion: {
				slogan: "FORJADO NO FERRO // CONSTRUÍDO PARA A GUERRA",
				productName: "MONTANHA PRO COMPETITION KETTLEBELL (16KG A 48KG)",
				productSubtitle: "Alça com acabamento em pintura eletrostática a pó e código de cores olímpico para troca rápida.",
				productImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
				promoBadgeText: "CUPOM LEITOR // 15% OFF",
				couponCode: "MONTANHA15",
				ctaUrl: "WWW.MONTANHAIRON.COM.BR",
				specBadges: [
					{
						title: "PEÇA ÚNICA",
						subtitle: "Sem soldas ou emendas frágeis"
					},
					{
						title: "ACABAMENTO POWDER",
						subtitle: "Aderência superior de magnésio"
					},
					{
						title: "CALIBRAÇÃO +/-0.5%",
						subtitle: "Precisão absoluta de carga"
					},
					{
						title: "GARANTIA VITALÍCIA",
						subtitle: "Indestrutível contra quedas"
					}
				],
				features: ["Disponível em 16kg, 20kg, 24kg, 28kg, 32kg, 40kg e 48kg", "Entrega expressa para todo o Brasil"]
			},
			tags: [
				"Equipamentos",
				"Kettlebell",
				"Promoção",
				"Gear"
			],
			estimatedReadTime: 2,
			featuredOnCover: false,
			enabled: true
		},
		{
			id: "art-4",
			title: "MONTANHA PERFORMANCE & IRON LAB // SP",
			subtitle: "Conheça o centro de excelência em treinamento não-convencional, biomecânica e avaliação metabólica.",
			category: "STUDIO SPOTLIGHT",
			author: "Equipe Editorial",
			authorBio: "Dossiê de Espaços e Instalações",
			heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
			content: `Projetado como um santuário para o treinamento de força pura, o Montanha Lab elimina o supérfluo para focar no que realmente constrói atletas resilientes: ferro maciço, alavancas assimétricas e protocolos de intensidade implacável.`,
			pullQuotes: ["O ambiente certo não apenas inspira o esforço; ele torna a mediocridade insuportável."],
			layoutTemplate: "facility-spotlight",
			facilitySpotlight: {
				facilityName: "MONTANHA PERFORMANCE & IRON LAB",
				headCoach: "COACH MONTANHA",
				location: "SÃO PAULO // SP - BRASIL",
				website: "WWW.MONTANHALAB.COM.BR",
				methodsUsed: [
					"KETTLEBELLS",
					"STEEL MACES",
					"CLUBBELLS",
					"CALISTHENICS",
					"MOBILITY LAB"
				],
				specialties: [
					"Força Não-Convencional",
					"Condicionamento Tático",
					"Prevenção de Lesões"
				],
				galleryPhotos: [
					"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
					"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
					"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
				],
				overviewText: "Projetado como um santuário para o treinamento de força pura, o Montanha Lab elimina o supérfluo para focar no que realmente constrói atletas resilientes: ferro maciço, alavancas assimétricas e protocolos de intensidade implacável.",
				missionText: "Nossa missão é transformar cada praticante em uma máquina de adaptação motora. Não ensinamos apenas movimentos; cultivamos a mentalidade espartana de execução sem desculpas em cada repetição.",
				philosophyText: "Sem máquinas guiadas. Sem esteiras anestésicas. Apenas você, a gravidade e o ferro.",
				anchoredQuote: "O ambiente certo não apenas inspira o esforço; ele torna a mediocridade insuportável."
			},
			tags: [
				"Studio",
				"Spotlight",
				"Lab",
				"Academia"
			],
			estimatedReadTime: 3,
			featuredOnCover: false,
			enabled: true
		}
	],
	contentRepository: [{
		id: "doc-1",
		title: "O Segredo da Respiração Diafragmática e Pressão Intra-Abdominal (IAP)",
		rawContent: `A respiração no levantamento de peso pesado não é apenas para oxigenar o sangue; ela é uma ferramenta mecânica de estabilização da coluna. Quando realizamos a manobra de Valsalva controlada e expandimos o abdômen em 360 graus contra o cinto de musculação, criamos uma câmara hidráulica interna impenetrável.

Muitos atletas novatos cometem o erro fatal de encolher a barriga durante o agachamento ou levantamento terra. Isso transfere toda a carga cisalhante para as vértebras lombares. A forma correta é inflar a caixa abdominal como um cilindro de alta pressão.

O treinamento respiratório com kettlebells pesados ensina o corpo a manter essa rigidez enquanto se move. É o que chamamos de 'respiração por trás do escudo'. Você aprende a emitir força explosiva expirando com um chiado curto ('tsss!') no ápice do movimento, preservando a tensão no core.

Dominar essa técnica reduz o risco de hérnias de disco a quase zero e adiciona de 10% a 20% de carga imediata na sua barra. Treine a respiração diafragmática todos os dias antes de tocar no primeiro peso.`,
		category: "BIOMECÂNICA",
		sourceFileName: "respiracao-diafragmatica-iap.txt",
		wordCount: 168,
		status: "ready",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	}, {
		id: "doc-2",
		title: "Manual Completo do Remo Nórdico & Bioenergética: O Guia de Alta Densidade",
		rawContent: `O remo indoor e as variações nórdicas de tração representam um dos estímulos fisiológicos mais completos do planeta. Ao contrário da corrida onde o impacto articular é elevado, o remo oferece uma cadeia cinética fechada onde pernas, tronco e membros superiores trabalham em sinergia contínua de alta potência.

**A Fisiologia do Deslocamento de Potência**
Cada remada exige uma fase de impulsão balística liderada pelos quadríceps e glúteos (60% da força), seguida pela extensão controlada do quadril (20%) e finalizada pela tração dorsal com os braços (20%). Essa divisão garante que grandes grupos musculares dissipem a fadiga enquanto o coração é forçado a bombear sangue para todo o organismo simultaneamente.

**O Protocolo Nórdico de 500 Metros**
Para desenvolver um motor cardiovascular inabalável, o teste de 500m all-out é a referência padrão. Atletas de elite completam essa distância em menos de 1 minuto e 20 segundos. O acúmulo de lactato no sangue atinge níveis comparáveis aos de um combate profissional de MMA.

A recuperação entre tiros deve ser rigorosamente calculada com base na variabilidade da frequência cardíaca (HRV). Integrar o remo nórdico duas vezes por semana na sua periodização melhora a densidade mitocondrial, a capilarização muscular e a capacidade de suportar dor psicológica sob esforço máximo.

A consistência na cadência — mantendo entre 28 e 32 golpes por minuto com força máxima por braçada — separa os remadores comuns dos verdadeiros monstros da resistência muscular. O ferro forja o músculo, mas o ergômetro forja o coração do guerreiro.`,
		category: "CONDICIONAMENTO",
		sourceFileName: "guia-remo-nordico-completo.md",
		wordCount: 242,
		status: "draft",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	}],
	backCoverConfig: {
		headline: "FORJA O SEU CORPO. DOMINA A SUA MENTE.",
		subheadline: "Junte-se à fraternidade do Coach Montanha e treine com métodos não-convencionais de elite.",
		message: "A mediocridade é uma escolha, a excelência é uma disciplina diária. Pegue o peso, calce o tênis e vá para a arena.",
		backgroundImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85",
		ctaText: "ACESSE O PROTOCOLO UNCONVENTIONAL",
		websiteUrl: "www.coachmontanha.com.br",
		socialHandles: {
			instagram: "@coachmontanha",
			youtube: "Coach Montanha Oficial",
			email: "contato@coachmontanha.com.br"
		}
	},
	createdAt: (/* @__PURE__ */ new Date()).toISOString(),
	updatedAt: (/* @__PURE__ */ new Date()).toISOString()
};
var APP_UI_THEMES = [
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
		className: "app-theme-contrast-white"
	},
	{
		id: "midnight-fintech",
		name: "Midnight Fintech & Violet Glow (Design Language)",
		subtitle: "Canvas ink-navy (#050A14), brilho radial violeta e azul, cards translúcidos 4% e gradiente magenta (#6958E2 / #7317D5).",
		icon: "zap",
		previewBg: "#050A14",
		previewCard: "#0D1424",
		previewText: "#EAEAEA",
		previewBorder: "#171E2C",
		previewAccent: "#6958E2",
		className: "app-theme-midnight-fintech"
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
		className: "app-theme-light-clean"
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
		className: "app-theme-dark-ergonomic"
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
		className: "app-theme-sepia-paper"
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
		className: "app-theme-midnight-oled"
	}
];
var GD_TOKEN_KEY = "montanha_gdrive_token";
var GD_EXPIRES_AT_KEY = "montanha_gdrive_expires_at";
var GD_EMAIL_KEY = "montanha_gdrive_email";
var GD_FOLDER_ID_KEY = "montanha_gdrive_folder_id";
var GD_CLIENT_ID_KEY = "montanha_gdrive_client_id";
var GD_LAST_SYNC_KEY = "montanha_gdrive_last_sync";
var DEDICATED_FOLDER_NAME = "Montanha Magazine - Acervo & Artigos";
var MASTER_PROJECT_FILENAME = "montanha_magazine_projeto.json";
/**
* Carrega dinamicamente o script oficial do Google Identity Services (GIS)
*/
function loadGoogleGisScript() {
	return new Promise((resolve, reject) => {
		if (typeof window === "undefined") return resolve();
		if (window.google?.accounts?.oauth2) return resolve();
		const existingScript = document.getElementById("google-gis-sdk");
		if (existingScript) {
			existingScript.addEventListener("load", () => resolve());
			existingScript.addEventListener("error", (e) => reject(e));
			return;
		}
		const script = document.createElement("script");
		script.id = "google-gis-sdk";
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		script.onload = () => resolve();
		script.onerror = (err) => reject(err);
		document.head.appendChild(script);
	});
}
/**
* Verifica se um Client ID real e válido foi configurado pelo usuário
*/
function isGoogleClientIdConfigured() {
	if (typeof window === "undefined") return false;
	const saved = localStorage.getItem(GD_CLIENT_ID_KEY);
	return Boolean(saved && saved.trim().length > 20 && saved.includes(".apps.googleusercontent.com") && !saved.includes("64581q4c5q2tpt3n67vh38d33194cksk"));
}
/**
* Obtém o Client ID configurado (salvo pelo usuário ou padrão)
*/
function getGoogleClientId() {
	if (typeof window === "undefined") return "";
	return localStorage.getItem(GD_CLIENT_ID_KEY) || "";
}
/**
* Salva um Client ID personalizado
*/
function setGoogleClientId(clientId) {
	if (typeof window === "undefined") return;
	const trimmed = clientId.trim();
	if (trimmed) localStorage.setItem(GD_CLIENT_ID_KEY, trimmed);
	else localStorage.removeItem(GD_CLIENT_ID_KEY);
	notifyStatusChanged();
}
/**
* Retorna o status atual da conexão com o Google Drive
*/
function getGoogleDriveStatus() {
	if (typeof window === "undefined") return {
		isConnected: false,
		isConfigured: false,
		email: null,
		folderId: null,
		folderName: DEDICATED_FOLDER_NAME,
		lastSync: null,
		clientId: ""
	};
	const token = localStorage.getItem(GD_TOKEN_KEY);
	const expiresAt = Number(localStorage.getItem(GD_EXPIRES_AT_KEY) || "0");
	const isExpired = Date.now() >= expiresAt;
	const configured = isGoogleClientIdConfigured();
	return {
		isConnected: !!token && !isExpired,
		isConfigured: configured,
		email: localStorage.getItem(GD_EMAIL_KEY),
		folderId: localStorage.getItem(GD_FOLDER_ID_KEY),
		folderName: DEDICATED_FOLDER_NAME,
		lastSync: localStorage.getItem(GD_LAST_SYNC_KEY),
		clientId: configured ? getGoogleClientId() : ""
	};
}
/**
* Retorna o access token atual se válido
*/
function getValidGoogleAccessToken() {
	if (typeof window === "undefined") return null;
	const token = localStorage.getItem(GD_TOKEN_KEY);
	const expiresAt = Number(localStorage.getItem(GD_EXPIRES_AT_KEY) || "0");
	if (!token || Date.now() >= expiresAt) return null;
	return token;
}
/**
* Dispara evento de mudança de estado da conexão
*/
function notifyStatusChanged() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("montanha-gdrive-status-changed"));
}
/**
* Inicia o fluxo de conexão com o Google Drive via OAuth2 popup
*/
async function connectGoogleDrive(customClientId) {
	await loadGoogleGisScript();
	if (!window.google?.accounts?.oauth2) return {
		success: false,
		error: "Google Identity Services não carregou no navegador."
	};
	const clientId = (customClientId || (isGoogleClientIdConfigured() ? getGoogleClientId() : "")).trim();
	if (!clientId) return {
		success: false,
		error: "O Google Drive requer uma chave de cliente (OAuth Client ID) do Google Cloud Console. Para sincronizar agora sem precisar criar chaves no Google Cloud, utilize a Sincronização Direta em Nuvem (1-Clique via QR Code / Código) logo abaixo!"
	};
	return new Promise((resolve) => {
		try {
			window.google.accounts.oauth2.initTokenClient({
				client_id: clientId,
				scope: "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email",
				callback: async (resp) => {
					if (resp.error || !resp.access_token) {
						resolve({
							success: false,
							error: resp.error_description || resp.error || "Falha na autorização."
						});
						return;
					}
					const token = resp.access_token;
					const expiresIn = resp.expires_in || 3600;
					const expiresAt = Date.now() + expiresIn * 1e3 - 6e4;
					localStorage.setItem(GD_TOKEN_KEY, token);
					localStorage.setItem(GD_EXPIRES_AT_KEY, String(expiresAt));
					let email = "";
					try {
						const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", { headers: { Authorization: `Bearer ${token}` } });
						if (userRes.ok) {
							email = (await userRes.json()).email || "";
							localStorage.setItem(GD_EMAIL_KEY, email);
						}
					} catch (e) {
						console.warn("Aviso ao buscar e-mail do Google:", e);
					}
					try {
						const folderId = await ensureDedicatedFolder(token);
						localStorage.setItem(GD_FOLDER_ID_KEY, folderId);
						notifyStatusChanged();
						resolve({
							success: true,
							email,
							folderId
						});
					} catch (folderErr) {
						resolve({
							success: false,
							error: folderErr?.message || "Não foi possível criar a pasta no Google Drive."
						});
					}
				}
			}).requestAccessToken({ prompt: "consent" });
		} catch (err) {
			resolve({
				success: false,
				error: err?.message || "Erro ao inicializar conexão com Google."
			});
		}
	});
}
/**
* Desconecta a conta do Google Drive
*/
function disconnectGoogleDrive() {
	if (typeof window === "undefined") return;
	const token = localStorage.getItem(GD_TOKEN_KEY);
	if (token && window.google?.accounts?.oauth2) try {
		window.google.accounts.oauth2.revoke(token, () => {});
	} catch {}
	localStorage.removeItem(GD_TOKEN_KEY);
	localStorage.removeItem(GD_EXPIRES_AT_KEY);
	localStorage.removeItem(GD_EMAIL_KEY);
	localStorage.removeItem(GD_FOLDER_ID_KEY);
	notifyStatusChanged();
}
/**
* Localiza ou cria a pasta dedicada 'Montanha Magazine - Acervo & Artigos'
*/
async function ensureDedicatedFolder(token) {
	const cachedFolderId = localStorage.getItem(GD_FOLDER_ID_KEY);
	if (cachedFolderId) try {
		const checkRes = await fetch(`https://www.googleapis.com/drive/v3/files/${cachedFolderId}?fields=id,name,trashed`, { headers: { Authorization: `Bearer ${token}` } });
		if (checkRes.ok) {
			if (!(await checkRes.json()).trashed) return cachedFolderId;
		}
	} catch {}
	const searchRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(`name = '${DEDICATED_FOLDER_NAME}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`)}&fields=files(id,name)&spaces=drive`, { headers: { Authorization: `Bearer ${token}` } });
	if (searchRes.ok) {
		const data = await searchRes.json();
		if (data.files && data.files.length > 0) {
			const folderId = data.files[0].id;
			localStorage.setItem(GD_FOLDER_ID_KEY, folderId);
			return folderId;
		}
	}
	const createRes = await fetch("https://www.googleapis.com/drive/v3/files", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: DEDICATED_FOLDER_NAME,
			mimeType: "application/vnd.google-apps.folder",
			description: "Pasta dedicada do Montanha Magazine Studio para sincronização de textos, artigos e revistas."
		})
	});
	if (!createRes.ok) {
		const errorText = await createRes.text();
		throw new Error(`Falha ao criar pasta no Drive: ${errorText}`);
	}
	const folderId = (await createRes.json()).id;
	localStorage.setItem(GD_FOLDER_ID_KEY, folderId);
	return folderId;
}
/**
* Sincroniza o projeto e todos os textos do acervo para a pasta do Google Drive
*/
async function syncProjectToGoogleDrive(project) {
	const token = getValidGoogleAccessToken();
	if (!token) return {
		success: false,
		syncedAt: "",
		error: "Google Drive não conectado."
	};
	try {
		const folderId = await ensureDedicatedFolder(token);
		const now = (/* @__PURE__ */ new Date()).toISOString();
		await uploadOrUpdateFile(token, folderId, MASTER_PROJECT_FILENAME, "application/json", JSON.stringify({
			...project,
			updatedAt: now
		}, null, 2));
		const docs = project.contentRepository || [];
		for (const doc of docs) await uploadOrUpdateFile(token, folderId, `[Acervo] ${(doc.title || "TEXTO").replace(/[\\/:*?"<>|]/g, "_").trim()}.md`, "text/markdown", `---
title: "${doc.title}"
category: "${doc.category || "GERAL"}"
sourceFileName: "${doc.sourceFileName || ""}"
wordCount: ${doc.wordCount || 0}
updatedAt: "${doc.updatedAt || now}"
---

${doc.rawContent}
`);
		localStorage.setItem(GD_LAST_SYNC_KEY, now);
		notifyStatusChanged();
		return {
			success: true,
			syncedAt: now
		};
	} catch (err) {
		console.error("Erro ao sincronizar com Google Drive:", err);
		return {
			success: false,
			syncedAt: "",
			error: err?.message || "Erro desconhecido na sincronização."
		};
	}
}
/**
* Puxa o projeto mais recente diretamente da pasta do Google Drive
*/
async function fetchProjectFromGoogleDrive() {
	const token = getValidGoogleAccessToken();
	if (!token) return {
		project: null,
		syncedAt: "",
		error: "Google Drive não conectado."
	};
	try {
		const folderId = await ensureDedicatedFolder(token);
		const query = encodeURIComponent(`name = '${MASTER_PROJECT_FILENAME}' and '${folderId}' in parents and trashed = false`);
		const searchRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,modifiedTime)&spaces=drive`, { headers: { Authorization: `Bearer ${token}` } });
		if (!searchRes.ok) throw new Error("Falha ao buscar projeto no Google Drive.");
		const data = await searchRes.json();
		if (!data.files || data.files.length === 0) return {
			project: null,
			syncedAt: "",
			error: "Projeto ainda não salvo no Drive."
		};
		const fileId = data.files[0].id;
		const modifiedTime = data.files[0].modifiedTime || (/* @__PURE__ */ new Date()).toISOString();
		const contentRes = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, { headers: { Authorization: `Bearer ${token}` } });
		if (!contentRes.ok) throw new Error("Falha ao baixar conteúdo do projeto.");
		return {
			project: await contentRes.json(),
			syncedAt: modifiedTime
		};
	} catch (err) {
		console.error("Erro ao recuperar do Google Drive:", err);
		return {
			project: null,
			syncedAt: "",
			error: err?.message || "Falha ao recuperar do Drive."
		};
	}
}
/**
/**
* Retorna a URL direta para abrir a pasta dedicada no Google Drive
*/
function getGoogleDriveFolderUrl(folderId) {
	const id = folderId || (typeof window !== "undefined" ? localStorage.getItem(GD_FOLDER_ID_KEY) : null);
	if (id) return `https://drive.google.com/drive/folders/${id}`;
	return "https://drive.google.com/drive/my-drive";
}
/**
* Puxa e sincroniza arquivos de texto (.txt, .md) diretamente da pasta do Google Drive
*/
async function pullNewTextsFromGoogleDrive(currentDocs) {
	const token = getValidGoogleAccessToken();
	if (!token) return {
		newDocs: [],
		updatedDocs: [],
		totalFound: 0
	};
	const folderId = await ensureDedicatedFolder(token);
	const query = encodeURIComponent(`'${folderId}' in parents and mimeType != 'application/vnd.google-apps.folder' and name != '${MASTER_PROJECT_FILENAME}' and trashed = false`);
	const listRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,modifiedTime,mimeType)&spaces=drive`, { headers: { Authorization: `Bearer ${token}` } });
	if (!listRes.ok) return {
		newDocs: [],
		updatedDocs: [],
		totalFound: 0
	};
	const files = (await listRes.json()).files || [];
	const existingMap = /* @__PURE__ */ new Map();
	currentDocs.forEach((d) => {
		existingMap.set(d.title.trim().toLowerCase(), d);
	});
	const newDocs = [];
	const updatedDocs = [];
	for (const file of files) {
		const cleanTitle = file.name.replace(/^\[Acervo\]\s*/i, "").replace(/^\[Materia\]\s*/i, "").replace(/\.[^/.]+$/, "").trim().toUpperCase();
		const existingDoc = existingMap.get(cleanTitle.toLowerCase());
		const fileTime = new Date(file.modifiedTime || 0).getTime();
		const docTime = existingDoc ? new Date(existingDoc.updatedAt || 0).getTime() : 0;
		if (existingDoc && fileTime <= docTime) continue;
		try {
			const textRes = await fetch(`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`, { headers: { Authorization: `Bearer ${token}` } });
			if (textRes.ok) {
				let rawContent = await textRes.text();
				const frontmatterMatch = rawContent.match(/^---\n[\s\S]*?\n---\n/);
				if (frontmatterMatch) rawContent = rawContent.slice(frontmatterMatch[0].length).trim();
				const words = rawContent.trim().split(/\s+/).filter(Boolean).length;
				if (existingDoc) updatedDocs.push({
					...existingDoc,
					rawContent,
					wordCount: words,
					updatedAt: file.modifiedTime || (/* @__PURE__ */ new Date()).toISOString()
				});
				else newDocs.push({
					id: `gdoc-${file.id}`,
					title: cleanTitle,
					rawContent,
					category: "GERAL",
					sourceFileName: file.name,
					wordCount: words,
					status: "draft",
					createdAt: file.modifiedTime || (/* @__PURE__ */ new Date()).toISOString(),
					updatedAt: file.modifiedTime || (/* @__PURE__ */ new Date()).toISOString()
				});
			}
		} catch (e) {
			console.warn("Aviso ao baixar texto do Drive:", file.name, e);
		}
	}
	return {
		newDocs,
		updatedDocs,
		totalFound: files.length
	};
}
/**
* Salva um único documento do acervo diretamente no Google Drive
*/
async function uploadSingleDocumentToGoogleDrive(doc) {
	const token = getValidGoogleAccessToken();
	if (!token) return false;
	try {
		await uploadOrUpdateFile(token, await ensureDedicatedFolder(token), `[Acervo] ${(doc.title || "TEXTO").replace(/[\\/:*?"<>|]/g, "_").trim()}.md`, "text/markdown", `---
title: "${doc.title}"
category: "${doc.category || "GERAL"}"
sourceFileName: "${doc.sourceFileName || ""}"
wordCount: ${doc.wordCount || 0}
updatedAt: "${doc.updatedAt || (/* @__PURE__ */ new Date()).toISOString()}"
---

${doc.rawContent}
`);
		return true;
	} catch (err) {
		console.warn("Aviso ao salvar documento no Drive:", err);
		return false;
	}
}
/**
* Helper interno: Cria ou atualiza um arquivo na pasta do Google Drive via multipart upload
*/
async function uploadOrUpdateFile(token, folderId, fileName, contentType, content) {
	const query = encodeURIComponent(`name = '${fileName.replace(/'/g, "\\'")}' and '${folderId}' in parents and trashed = false`);
	const searchRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id)&spaces=drive`, { headers: { Authorization: `Bearer ${token}` } });
	let existingId = null;
	if (searchRes.ok) {
		const data = await searchRes.json();
		if (data.files && data.files.length > 0) existingId = data.files[0].id;
	}
	if (existingId) {
		if (!(await fetch(`https://www.googleapis.com/upload/drive/v3/files/${existingId}?uploadType=media`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": contentType
			},
			body: content
		})).ok) throw new Error(`Falha ao atualizar arquivo '${fileName}' no Drive.`);
		return existingId;
	}
	const boundary = "-------314159265358979323846";
	const delimiter = `\r\n--${boundary}\r\n`;
	const closeDelimiter = `\r\n--${boundary}--`;
	const metadata = {
		name: fileName,
		parents: [folderId],
		mimeType: contentType
	};
	const multipartRequestBody = delimiter + "Content-Type: application/json; charset=UTF-8\r\n\r\n" + JSON.stringify(metadata) + delimiter + `Content-Type: ${contentType}\r\n\r\n` + content + closeDelimiter;
	const createRes = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": `multipart/related; boundary=${boundary}`
		},
		body: multipartRequestBody
	});
	if (!createRes.ok) {
		const errText = await createRes.text();
		throw new Error(`Falha ao enviar arquivo '${fileName}' para o Drive: ${errText}`);
	}
	return (await createRes.json()).id;
}
var LOCAL_STORAGE_KEY = "montanha_magazine_project";
var LOCAL_STORAGE_TIMESTAMP_KEY = "montanha_last_saved_at";
var LOCAL_STORAGE_SYNC_CODE_KEY = "montanha_sync_code";
var CLOUD_API_URL = `https://api.restful-api.dev/objects/ff808181a067127101a0798e229d2bfb`;
/**
* Salva o projeto no cache local E envia para a nuvem de sincronização multi-dispositivo.
*/
async function syncProjectToCloud(project, customCode) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const code = (customCode || localStorage.getItem(LOCAL_STORAGE_SYNC_CODE_KEY) || "MONTANHA").trim().toUpperCase();
	const projectWithTimestamp = {
		...project,
		updatedAt: now
	};
	if (typeof window !== "undefined") try {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projectWithTimestamp));
		localStorage.setItem(LOCAL_STORAGE_TIMESTAMP_KEY, now);
		localStorage.setItem(LOCAL_STORAGE_SYNC_CODE_KEY, code);
	} catch (e) {
		console.warn("Aviso ao salvar no cache local:", e);
	}
	let serverSuccess = false;
	try {
		if ((await fetch("/api/project", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				code,
				project: projectWithTimestamp
			})
		})).ok) serverSuccess = true;
	} catch (err) {
		console.warn("Aviso ao sincronizar via /api/project:", err);
	}
	if (getValidGoogleAccessToken()) try {
		if ((await syncProjectToGoogleDrive(projectWithTimestamp)).success) return {
			success: true,
			syncedAt: now,
			code,
			mode: "google-drive"
		};
	} catch (gdErr) {
		console.warn("Aviso ao sincronizar com Google Drive:", gdErr);
	}
	try {
		if ((await fetch(CLOUD_API_URL, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: `Montanha Magazine [${code}]`,
				data: {
					code,
					syncedAt: now,
					project: projectWithTimestamp
				}
			})
		})).ok) return {
			success: true,
			syncedAt: now,
			code,
			mode: serverSuccess ? "server-and-cloud" : "cloud-direct"
		};
	} catch (cloudErr) {
		console.warn("Aviso ao sincronizar com nuvem direta:", cloudErr);
	}
	if (serverSuccess) return {
		success: true,
		syncedAt: now,
		code,
		mode: "server-edge"
	};
	return {
		success: true,
		syncedAt: now,
		code,
		mode: "local-only"
	};
}
/**
* Busca ativamente a versão mais recente do projeto na nuvem pelo código
*/
async function fetchProjectFromCloud(code) {
	const targetCode = (code || (typeof window !== "undefined" ? localStorage.getItem(LOCAL_STORAGE_SYNC_CODE_KEY) : null) || "MONTANHA").trim().toUpperCase();
	try {
		const res = await fetch(`/api/project?code=${encodeURIComponent(targetCode)}`, {
			headers: { Accept: "application/json" },
			cache: "no-store"
		});
		if (res.ok) {
			const data = await res.json();
			if (data?.project && Array.isArray(data.project.articles)) {
				const fullProj = normalizeProject(data.project);
				saveToLocalCache(fullProj, targetCode);
				return {
					project: fullProj,
					syncedAt: data.syncedAt || (/* @__PURE__ */ new Date()).toISOString(),
					code: targetCode
				};
			}
		}
	} catch (e) {
		console.warn("Aviso ao buscar de /api/project:", e);
	}
	try {
		const cloudRes = await fetch(CLOUD_API_URL, {
			headers: { Accept: "application/json" },
			cache: "no-store"
		});
		if (cloudRes.ok) {
			const cloudObj = await cloudRes.json();
			const proj = cloudObj?.data?.project;
			if (proj && Array.isArray(proj.articles)) {
				const fullProj = normalizeProject(proj);
				saveToLocalCache(fullProj, targetCode);
				return {
					project: fullProj,
					syncedAt: cloudObj.data?.syncedAt || (/* @__PURE__ */ new Date()).toISOString(),
					code: cloudObj.data?.code || targetCode
				};
			}
		}
	} catch (err) {
		console.warn("Aviso ao buscar da nuvem direta:", err);
	}
	return null;
}
/**
* Busca a versão mais recente do projeto (URL ?sync_code > URL ?sync_data > Cache Local > Padrão)
*/
async function loadLatestProject() {
	if (typeof window === "undefined") return INITIAL_MAGAZINE_PROJECT;
	try {
		const syncCode = new URLSearchParams(window.location.search).get("sync_code");
		if (syncCode) {
			const cloudResult = await fetchProjectFromCloud(syncCode);
			if (cloudResult?.project) {
				try {
					window.history.replaceState(null, "", window.location.pathname);
				} catch {}
				return cloudResult.project;
			}
		}
	} catch (err) {
		console.warn("Aviso ao carregar sync_code da URL:", err);
	}
	const urlProject = loadProjectFromLegacyUrl();
	if (urlProject) {
		saveToLocalCache(urlProject, "MONTANHA");
		try {
			window.history.replaceState(null, "", window.location.pathname);
		} catch {}
		return urlProject;
	}
	if (getValidGoogleAccessToken()) try {
		const gdRes = await fetchProjectFromGoogleDrive();
		if (gdRes?.project && Array.isArray(gdRes.project.articles)) {
			const gdProj = normalizeProject(gdRes.project);
			const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
			let localTimestamp = 0;
			if (saved) try {
				const parsed = JSON.parse(saved);
				localTimestamp = new Date(parsed.updatedAt || 0).getTime();
			} catch {}
			if (new Date(gdProj.updatedAt || gdRes.syncedAt || 0).getTime() >= localTimestamp) {
				saveToLocalCache(gdProj, "MONTANHA");
				return gdProj;
			}
		}
	} catch (gdErr) {
		console.warn("Aviso ao carregar do Google Drive no boot:", gdErr);
	}
	const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (saved) try {
		const parsed = JSON.parse(saved);
		if (parsed && parsed.title && Array.isArray(parsed.articles)) return normalizeProject(parsed);
	} catch (e) {
		console.error("Erro ao decodificar projeto do localStorage:", e);
	}
	return INITIAL_MAGAZINE_PROJECT;
}
/**
* Exporta um arquivo .json completo de backup da revista para download
*/
function exportProjectToFile(project) {
	const jsonStr = JSON.stringify(project, null, 2);
	const blob = new Blob([jsonStr], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	const editionName = project.title.toLowerCase().replace(/\s+/g, "-");
	a.href = url;
	a.download = `backup-${editionName}-edicao-${project.editionNumber || "01"}.json`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
/**
* Importa um arquivo .json de backup do computador ou celular
*/
function importProjectFromFile(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const content = event.target?.result;
				const parsed = JSON.parse(content);
				if (!parsed || !parsed.title || !Array.isArray(parsed.articles)) throw new Error("Arquivo de backup inválido.");
				resolve(normalizeProject(parsed));
			} catch (err) {
				reject(err);
			}
		};
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Erro ao ler o arquivo."));
		reader.readAsText(file);
	});
}
/**
* Gera uma URL curta e limpa com código de sincronização (?sync_code=MONTANHA)
* Essa URL tem apenas ~50 caracteres, garantindo que o QR Code nunca quebre
* e possa ser lido instantaneamente por qualquer celular ou compartilhado via WhatsApp.
*/
function generateShareUrl(code = "MONTANHA") {
	if (typeof window === "undefined") return "";
	try {
		const url = new URL(window.location.origin + window.location.pathname);
		url.searchParams.set("sync_code", code.trim().toUpperCase());
		return url.toString();
	} catch (e) {
		return window.location.origin + "/?sync_code=" + encodeURIComponent(code);
	}
}
function normalizeProject(parsed) {
	return {
		...INITIAL_MAGAZINE_PROJECT,
		...parsed,
		pageVisibility: {
			...INITIAL_MAGAZINE_PROJECT.pageVisibility,
			...parsed.pageVisibility || {}
		}
	};
}
function saveToLocalCache(project, code) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(project));
		localStorage.setItem(LOCAL_STORAGE_TIMESTAMP_KEY, (/* @__PURE__ */ new Date()).toISOString());
		localStorage.setItem(LOCAL_STORAGE_SYNC_CODE_KEY, code);
	} catch {}
}
function loadProjectFromLegacyUrl() {
	if (typeof window === "undefined") return null;
	try {
		const syncData = new URLSearchParams(window.location.search).get("sync_data");
		if (!syncData || syncData.length > 5e5) return null;
		const jsonStr = decodeURIComponent(atob(syncData));
		const parsed = JSON.parse(jsonStr);
		if (parsed && typeof parsed === "object" && typeof parsed.title === "string" && Array.isArray(parsed.articles)) return normalizeProject(parsed);
	} catch (e) {
		console.warn("Aviso ao carregar sync_data legado da URL:", e);
	}
	return null;
}
function getHeadlineFontClass(headlineFont) {
	switch (headlineFont) {
		case "bebas": return "font-headline-bebas tracking-wide";
		case "montserrat": return "font-headline-montserrat tracking-tight";
		case "playfair": return "font-headline-playfair tracking-normal";
		case "cinzel": return "font-headline-cinzel tracking-wider";
		case "space": return "font-headline-space tracking-tight";
		case "oswald": return "font-headline-oswald tracking-tight";
		case "inter": return "font-headline-inter tracking-tight";
		case "creato": return "font-headline-creato tracking-tight";
		case "barlow": return "font-headline-barlow tracking-tight uppercase";
		case "syne": return "font-headline-syne tracking-tight";
		default: return "font-headline-bebas tracking-wide";
	}
}
function getBodyFontClass(bodyFont) {
	switch (bodyFont) {
		case "lora": return "font-body-lora";
		case "merriweather": return "font-body-merriweather";
		case "roboto": return "font-body-roboto";
		case "space": return "font-body-space";
		case "newsreader": return "font-body-newsreader";
		case "barlow": return "font-body-barlow";
		case "jakarta": return "font-body-jakarta";
		default: return "font-body-inter";
	}
}
/**
* Determines whether a given hex color is perceptually light (brightness > 135)
*/
function isColorLight(colorHex) {
	if (!colorHex || !colorHex.startsWith("#")) return true;
	const hex = colorHex.replace("#", "");
	if (hex.length < 6) return true;
	const r = parseInt(hex.substring(0, 2), 16) || 0;
	const g = parseInt(hex.substring(2, 4), 16) || 0;
	const b = parseInt(hex.substring(4, 6), 16) || 0;
	return (r * 299 + g * 587 + b * 114) / 1e3 > 135;
}
var CoverPage = ({ project, theme, isPrintMode = false, layoutMode = "print" }) => {
	const { coverConfig } = project;
	const overlayOpacity = coverConfig.backgroundOverlayOpacity / 100;
	const isPeakPerformance = coverConfig.coverStyleVariant === "peak-performance";
	coverConfig.coverStyleVariant;
	const isMidnightFintech = coverConfig.coverStyleVariant === "midnight-fintech" || theme.id === "midnight-fintech";
	const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
	const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
	const scale = (coverConfig.textScale || 100) / 100;
	const coverPrimary = theme.coverPrimaryColor || (theme.isLight && !isPeakPerformance ? "#FFFFFF" : theme.primaryColor);
	const coverBadgeBg = theme.coverBadgeBg || coverPrimary;
	const coverBadgeTextColor = theme.coverBadgeTextColor || (isColorLight(coverBadgeBg) ? "#000000" : "#FFFFFF");
	const isMobile = (layoutMode || project.layoutMode || "print") === "mobile";
	const resolvedHexBadge = coverConfig.hexBadgeText || (project.volume ? `${project.volume} // ISSUE ${project.editionNumber || "01"}` : "VOL. 01 // ISSUE 01");
	if (isMobile) {
		const isThemeLight = Boolean(theme.isLight);
		const mobileBg = isThemeLight ? theme.bgLight || "#FFFFFF" : theme.bgDark || "#0B0F19";
		const mobileText = isThemeLight ? theme.textColor || "#000000" : "#FFFFFF";
		const mobileMuted = isThemeLight ? "#475569" : "#94A3B8";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `magazine-page relative w-full h-full flex flex-col justify-between overflow-hidden select-none p-5 sm:p-6 ${isPrintMode ? "print-page" : "shadow-2xl"}`,
			style: {
				aspectRatio: "9 / 16",
				backgroundColor: mobileBg,
				color: mobileText,
				fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full shrink-0 flex flex-col items-center gap-1.5 pb-2 border-b",
					style: { borderColor: `${coverPrimary}30` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full flex items-center justify-between text-[8.5px] font-mono font-black uppercase whitespace-nowrap flex-nowrap gap-2",
							style: { color: mobileMuted },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded font-bold whitespace-nowrap shrink-0",
									style: {
										backgroundColor: coverBadgeBg,
										color: coverBadgeTextColor
									},
									children: coverConfig.issueBadge || "MOBILE EDITION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap shrink-0",
									children: coverConfig.issueDate || project.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap shrink-0",
									children: coverConfig.priceBadge || "DIGITAL"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: `font-black tracking-tight uppercase leading-[0.9] text-center w-full mt-1.5 ${headlineFontClass}`,
							style: {
								fontSize: `clamp(2rem, ${9 * scale}cqw, 3.2rem)`,
								color: isThemeLight ? theme.primaryColor !== "#FACC15" ? theme.primaryColor : "#0F172A" : coverPrimary
							},
							children: coverConfig.mastheadText || project.title
						}),
						coverConfig.sloganText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] font-bold tracking-widest uppercase text-center opacity-85",
							style: { color: mobileMuted },
							children: coverConfig.sloganText
						})
					]
				}),
				coverConfig.backgroundImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full aspect-[16/10] my-2 rounded-lg overflow-hidden border shrink-0 shadow-md",
					style: { borderColor: `${coverPrimary}40` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: coverConfig.backgroundImage?.includes("unsplash.com") ? coverConfig.backgroundImage.replace(/w=\d+/, "w=1600").replace(/q=\d+/, "q=90") : coverConfig.backgroundImage,
						alt: "Capa da Edição Mobile",
						className: "w-full h-full object-cover object-center filter contrast-110"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col justify-start space-y-2.5 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded inline-block",
								style: {
									backgroundColor: coverBadgeBg,
									color: coverBadgeTextColor
								},
								children: coverConfig.categoryTag || "DOSSIÊ EXCLUSIVO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: `font-black uppercase tracking-tight leading-[0.96] ${headlineFontClass}`,
								style: {
									fontSize: `clamp(1.4rem, ${6.5 * scale}cqw, 2.3rem)`,
									color: mobileText
								},
								children: coverConfig.mainHeadline
							}),
							coverConfig.subHeadline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-[12px] sm:text-[13px] font-semibold leading-snug line-clamp-2 ${bodyFontClass}`,
								style: { color: mobileMuted },
								children: coverConfig.subHeadline
							})
						]
					}), coverConfig.highlights && coverConfig.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 pt-1",
						children: coverConfig.highlights.slice(0, 3).map((hl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2 rounded border-l-3 bg-black/5 dark:bg-white/5 flex flex-col",
							style: { borderLeftColor: coverPrimary },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8.5px] font-mono font-black uppercase",
								style: { color: isThemeLight ? theme.primaryColor : coverPrimary },
								children: hl.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11.5px] sm:text-xs font-black uppercase leading-tight mt-0.5",
								style: { color: mobileText },
								children: hl.title
							})]
						}, hl.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full shrink-0 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold",
					style: {
						borderColor: `${coverPrimary}30`,
						color: mobileMuted
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: coverConfig.mastheadText || project.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "pág 1" })]
				})
			]
		});
	}
	if (isPeakPerformance) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full bg-white text-[#111111] overflow-hidden select-none ${isPrintMode ? "print-page" : "shadow-2xl"}`,
		style: {
			aspectRatio: "210 / 297",
			fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-1 pointer-events-none",
				style: { background: "radial-gradient(circle at 50% 30%, #ffffff 0%, #f4f6f8 70%, #e2e8f0 100%)" }
			}),
			coverConfig.backgroundImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-1 overflow-hidden pointer-events-none opacity-85",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: coverConfig.backgroundImage,
					alt: "Capa Atleta",
					className: "w-full h-full object-cover object-center filter contrast-110"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 w-full h-[32%] z-2 pointer-events-none",
				style: {
					background: "linear-gradient(135deg, #0088cc 0%, #005588 100%)",
					clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0% 100%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 w-full h-[22%] z-3 pointer-events-none",
				style: {
					background: "#111111",
					clipPath: "polygon(0 45%, 100% 0, 100% 100%, 0% 100%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-[2.5%] inset-x-[4%] flex justify-between items-center z-20 whitespace-nowrap flex-nowrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#111] text-white font-extrabold px-3 py-1 uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0",
					style: { fontSize: `${9.5 * scale}pt` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whitespace-nowrap",
						children: coverConfig.issueBadge || "PRO EDITION"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-extrabold uppercase text-[#111] tracking-wider whitespace-nowrap shrink-0",
					style: { fontSize: `${9.5 * scale}pt` },
					children: coverConfig.issueDate || "SETEMBRO 2026"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-[6%] inset-x-[4%] text-center z-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `font-black text-[#111111] tracking-[-3px] uppercase leading-[0.82] m-0 ${headlineFontClass}`,
					style: {
						fontSize: `clamp(3.5rem, ${14 * scale}cqw, 6.5rem)`,
						color: theme.primaryColor !== "#FACC15" ? theme.primaryColor : "#111111"
					},
					children: coverConfig.mastheadText || "MONTANHA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-extrabold uppercase tracking-[4px] text-[#0088cc] mt-1",
					style: { fontSize: `${11.5 * scale}pt` },
					children: coverConfig.sloganText || "STRENGTH & PERFORMANCE MAGAZINE"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[26%] left-[4%] w-[56%] z-20 flex flex-col gap-2",
				children: coverConfig.highlights.map((hl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-black/90 text-white p-2.5 rounded-sm border-l-4 shadow-xl backdrop-blur-sm",
					style: { borderLeftColor: theme.primaryColor },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-black font-mono tracking-widest uppercase block",
							style: {
								fontSize: `${8.5 * scale}pt`,
								color: theme.primaryColor
							},
							children: hl.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `font-black uppercase leading-tight mt-0.5 ${headlineFontClass}`,
							style: { fontSize: `${12 * scale}pt` },
							children: hl.title
						}),
						hl.teaser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-sans italic text-slate-200 block mt-1 leading-snug font-medium",
							style: { fontSize: `${8 * scale}pt` },
							children: [
								"\"",
								hl.teaser,
								"\""
							]
						}) : hl.authorCallout ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[8pt] font-mono text-slate-300 block mt-1",
							children: ["POR: ", hl.authorCallout.toUpperCase()]
						}) : null
					]
				}, hl.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[26%] right-[5%] z-20 flex flex-col items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-[88px] h-[88px] sm:w-[105px] sm:h-[105px] rounded-full bg-[#cc0000] text-white flex flex-col justify-center items-center text-center p-2 shadow-2xl border-2 border-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-extrabold uppercase tracking-tight text-[7pt] sm:text-[8pt] leading-tight",
							children: coverConfig.circleBadge?.topText || "PEAK"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-black text-lg sm:text-2xl leading-none my-0.5",
							children: coverConfig.circleBadge?.valueText || "100%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-[6.5pt] sm:text-[7.5pt] uppercase leading-tight text-white/90",
							children: coverConfig.circleBadge?.subText || "RAW POWER"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-[48%] right-[5%] z-20 text-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-black text-4xl sm:text-5xl leading-none text-[#0088cc] drop-shadow-md",
						children: coverConfig.numFeature?.number || "12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-black uppercase text-[#111111] leading-tight mt-0.5",
						style: { fontSize: `${10.5 * scale}pt` },
						children: coverConfig.numFeature?.hook || "REPS TO MAX"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold uppercase text-slate-600 text-[8pt]",
						children: coverConfig.numFeature?.sub || "HYPERTROPHY GUIDE"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-[8%] left-[4%] right-[4%] z-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-[#cc0000] text-white font-extrabold px-3 py-0.5 uppercase inline-block shadow-md mb-1",
						style: { fontSize: `${9.5 * scale}pt` },
						children: coverConfig.categoryTag || "SHARPEN UP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: `font-black text-white uppercase tracking-[-1px] leading-[0.88] m-0 drop-shadow-md ${headlineFontClass}`,
						style: { fontSize: `clamp(2rem, ${7.5 * scale}cqw, 3.8rem)` },
						children: coverConfig.mainHeadline || "SHOULDER WORKOUT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-[#111] text-white font-extrabold px-6 py-1 uppercase inline-block shadow-md",
							style: { fontSize: `${9 * scale}pt` },
							children: coverConfig.subHeadline || "BACK TO BASICS FOR SERIOUS DELT DEMOLITION"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-[1.5%] left-[4%] bg-white px-2 py-1 border border-[#111] z-20 text-center shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[13px] w-[84px] bg-[repeating-linear-gradient(90deg,#000,#000_1.5px,#fff_1.5px,#fff_3px,#000_3px,#000_4px,#fff_4px,#fff_6px,#000_6px,#000_8px)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[5.5pt] font-bold text-black block mt-0.5",
					children: coverConfig.barcodeText || "9 772226 502002"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-[1.2%] left-[34%] text-[5.5pt] font-bold text-slate-300 z-20 uppercase leading-tight",
				children: [
					"WWW.MONTANHAMAGAZINE.COM.BR • ",
					coverConfig.editionNumber || "ISSUE 01",
					" | R$ 35,00",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					coverConfig.issueDate || "EDITION 2026",
					" / SPECIAL LAUNCH"
				]
			})
		]
	});
	if (isMidnightFintech) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full bg-[#050a14] text-[#eaeaea] overflow-hidden flex flex-col justify-between select-none ${isPrintMode ? "print-page" : "shadow-2xl"}`,
		style: {
			aspectRatio: "210 / 297",
			fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-1 pointer-events-none",
				style: { backgroundImage: `
              radial-gradient(ellipse 65% 55% at 75% 20%, rgba(83, 73, 126, 0.48), transparent 65%),
              radial-gradient(ellipse 55% 45% at 25% 15%, rgba(56, 152, 236, 0.18), transparent 55%),
              radial-gradient(ellipse 75% 35% at 50% 100%, rgba(115, 23, 213, 0.28), transparent 65%)
            ` }
			}),
			coverConfig.backgroundImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: coverConfig.backgroundImage?.includes("unsplash.com") ? coverConfig.backgroundImage.replace(/w=\d+/, "w=2560").replace(/q=\d+/, "q=95") : coverConfig.backgroundImage,
					alt: "Capa Atleta Midnight Fintech",
					className: "w-full h-full object-cover object-center filter contrast-110 brightness-90",
					loading: "eager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none",
					style: {
						background: "linear-gradient(to top, #050a14 12%, rgba(5, 10, 20, 0.65) 50%, rgba(5, 10, 20, 0.85) 100%)",
						opacity: Math.max(.65, overlayOpacity)
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 p-4 sm:p-5 md:p-6 flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full flex items-center justify-between border-b border-[#171e2c] pb-2 text-[8.5px] sm:text-[9.5px] font-medium text-[#9ea6b6] whitespace-nowrap flex-nowrap gap-2 overflow-hidden select-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 shrink-0 whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-3 py-1 font-bold text-[8.5px] uppercase text-white flex items-center gap-1.5 shadow-md whitespace-nowrap shrink-0",
								style: {
									background: "linear-gradient(90deg, #6958e2 20%, #7317d5)",
									borderRadius: "999px",
									boxShadow: "inset 0 -3px 6px rgba(255, 255, 255, 0.35)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3 h-3 text-white fill-white shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap leading-none",
									children: resolvedHexBadge
								})]
							}), coverConfig.issueBadge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-[#eaeaea] font-semibold whitespace-nowrap shrink-0",
								children: coverConfig.issueBadge
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#9ea6b6] whitespace-nowrap shrink-0",
							children: coverConfig.issueDate
						}),
						coverConfig.priceBadge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2.5 py-0.5 rounded-full text-[8.5px] font-medium border border-[#171e2c] whitespace-nowrap shrink-0",
							style: {
								backgroundColor: "rgba(234, 234, 234, 0.04)",
								color: "#eaeaea",
								boxShadow: "inset 0 -2px 4px rgba(255, 255, 255, 0.15)"
							},
							children: coverConfig.priceBadge
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full text-center mt-3 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-bold tracking-tight leading-[0.92] text-center font-headline-creato",
						style: {
							fontSize: `clamp(2.4rem, ${10 * scale}cqw, 4.6rem)`,
							color: "#eaeaea",
							letterSpacing: "-0.025em",
							textShadow: "0 4px 24px rgba(0, 0, 0, 0.9), 0 0 40px rgba(105, 88, 226, 0.3)"
						},
						children: coverConfig.mastheadText || "MONTANHA MAGAZINE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 w-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-w-xl py-1 px-3 rounded-full flex items-center justify-center gap-2 text-center text-[10px] font-medium text-[#9ea6b6] border border-[#171e2c]",
							style: {
								backgroundColor: "rgba(234, 234, 234, 0.04)",
								backdropFilter: "blur(8px)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#6958e2] font-mono text-[9px]",
									children: "//"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: coverConfig.sloganText || "Infraestrutura de performance atlética e conhecimento sem limites" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#6958e2] font-mono text-[9px]",
									children: "//"
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 px-4 sm:p-5 md:p-6 flex-1 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2.5 max-w-[58%] w-full",
					children: coverConfig.highlights.slice(0, 3).map((hl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 border border-[#171e2c] transition-all",
						style: {
							backgroundColor: "rgba(234, 234, 234, 0.04)",
							borderRadius: "18px",
							backdropFilter: "blur(12px)",
							boxShadow: "inset 0 -2px 5px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.4)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5 mb-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[8.5px] uppercase tracking-wider",
									style: { color: "#6958e2" },
									children: hl.tag
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-[#eaeaea] leading-snug tracking-tight font-headline-creato",
								style: {
									fontSize: `${11.5 * scale}pt`,
									letterSpacing: "-0.02em"
								},
								children: hl.title
							}),
							hl.teaser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#9ea6b6] text-[8.5pt] mt-1 leading-relaxed line-clamp-2",
								children: hl.teaser
							})
						]
					}, hl.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden sm:flex flex-col items-end text-right pr-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl md:text-5xl font-extrabold tracking-tight font-headline-creato",
							style: {
								background: "linear-gradient(90deg, rgb(105, 88, 226) 20%, rgb(255, 255, 255))",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								letterSpacing: "-0.03em"
							},
							children: coverConfig.numFeature?.number || "#01"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] font-medium text-[#9ea6b6] uppercase tracking-wider mt-0.5 max-w-[130px]",
							children: coverConfig.numFeature?.sub || "Edição de Lançamento"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 px-3 py-1 rounded-full text-[8px] font-bold text-[#eaeaea] border border-[#171e2c]",
							style: {
								backgroundColor: "rgba(234, 234, 234, 0.04)",
								boxShadow: "inset 0 -2px 4px rgba(255, 255, 255, 0.2)"
							},
							children: "Tecnologia & Força"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 px-4 sm:p-5 md:p-6 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border border-[#171e2c] mb-3",
					style: {
						backgroundColor: "rgba(234, 234, 234, 0.04)",
						borderRadius: "18px",
						backdropFilter: "blur(14px)",
						boxShadow: "inset 0 -3px 6px rgba(255, 255, 255, 0.12), 0 12px 32px rgba(0, 0, 0, 0.6)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2.5 py-0.5 rounded-full text-[8.5px] font-bold text-white shadow-xs",
								style: {
									background: "linear-gradient(90deg, #6958e2 20%, #7317d5)",
									boxShadow: "inset 0 -2px 4px rgba(255, 255, 255, 0.3)"
								},
								children: coverConfig.categoryTag || "Matéria de Capa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] text-[#9ea6b6] font-medium",
								children: "Destaque Editorial Exclusivo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-bold text-[#eaeaea] leading-[0.94] tracking-tight font-headline-creato",
							style: {
								fontSize: `clamp(1.6rem, ${6.5 * scale}cqw, 3.2rem)`,
								letterSpacing: "-0.025em"
							},
							children: coverConfig.mainHeadline || "O Código da Alta Performance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#9ea6b6] text-xs sm:text-sm mt-1.5 leading-relaxed max-w-2xl",
							children: coverConfig.subHeadline || "Fundamentos de força, biomecânica e desenvolvimento humano para atletas de elite."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pt-2 border-t border-[#171e2c] text-[8.5px] text-[#9ea6b6]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white px-2 py-0.5 rounded border border-white/20 flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[10px] w-[64px] bg-[repeating-linear-gradient(90deg,#000,#000_1.5px,#fff_1.5px,#fff_3px,#000_3px,#000_4px,#fff_4px,#fff_6px,#000_6px,#000_8px)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[5pt] font-bold text-black leading-none mt-0.5",
								children: coverConfig.barcodeText || "9 772226 502002"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-[#eaeaea]",
							children: ["Montanha Magazine • ", coverConfig.issueBadge]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: "www.montanhamagazine.com.br"
					})]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full bg-black text-white overflow-hidden flex flex-col justify-between select-none ${isPrintMode ? "print-page" : "shadow-2xl"}`,
		style: {
			aspectRatio: "210 / 297",
			fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: coverConfig.backgroundImage?.includes("unsplash.com") ? coverConfig.backgroundImage.replace(/w=\d+/, "w=2560").replace(/q=\d+/, "q=95") : coverConfig.backgroundImage,
						alt: "Capa da Revista Montanha",
						className: "w-full h-full object-cover object-center filter contrast-120 brightness-100",
						style: { imageRendering: "auto" },
						loading: "eager"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/75 pointer-events-none",
						style: { opacity: overlayOpacity }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial from-transparent via-black/30 to-black/85 pointer-events-none" })
				]
			}),
			coverConfig.showTechHud && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-4 left-4 z-10 opacity-60 text-amber-400 font-mono text-[9px] flex items-center gap-1 pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SYS.TARGET // 45.22.89" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 right-4 z-10 opacity-60 text-amber-400 font-mono text-[9px] flex items-center gap-1 pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GRID-A4 // RAW" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-16 right-4 z-10 opacity-40 text-amber-400 font-mono text-[8px] pointer-events-none",
					children: "LAT: -23.5505 | LON: -46.6333"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 p-4 sm:p-5 md:p-6 flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full flex items-center justify-between border-b-2 border-white/20 pb-1.5 text-[8.5px] sm:text-[9.5px] font-mono font-bold tracking-wider uppercase text-slate-200 whitespace-nowrap flex-nowrap gap-2 overflow-hidden select-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 shrink-0 whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-2 py-0.5 font-black text-[8.5px] tracking-tight uppercase rounded-sm flex items-center gap-1 shadow-sm whitespace-nowrap shrink-0",
								style: {
									backgroundColor: coverBadgeBg,
									color: coverBadgeTextColor
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
									className: "w-3 h-3 fill-current shrink-0",
									style: { color: coverBadgeTextColor }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap leading-none",
									children: resolvedHexBadge
								})]
							}), coverConfig.issueBadge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold whitespace-nowrap shrink-0",
								style: { color: coverPrimary },
								children: coverConfig.issueBadge
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white font-mono whitespace-nowrap shrink-0",
							children: coverConfig.issueDate
						}),
						coverConfig.priceBadge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border px-2 py-0.5 rounded text-[8px] sm:text-[8.5px] font-mono font-bold whitespace-nowrap shrink-0",
							style: {
								backgroundColor: "rgba(15,23,42,0.9)",
								borderColor: coverPrimary,
								color: coverPrimary
							},
							children: coverConfig.priceBadge
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full text-center mt-2.5 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative inline-block w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: `font-black tracking-tighter uppercase leading-[0.88] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] text-center ${headlineFontClass}`,
							style: {
								fontSize: `clamp(2.4rem, ${10 * scale}cqw, 4.8rem)`,
								color: coverPrimary,
								letterSpacing: "-0.04em",
								textShadow: "0 0 25px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.9)"
							},
							children: coverConfig.mastheadText || "MONTANHA MAGAZINE"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 w-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full bg-black/90 border-y py-1 px-3 flex items-center justify-between font-mono font-black tracking-[0.2em] uppercase shadow-md",
							style: {
								fontSize: `${9.5 * scale}px`,
								borderColor: `${coverPrimary}80`,
								color: coverPrimary
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/40 hidden sm:inline",
									children: "///"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: coverConfig.sloganText || "UNCONVENTIONAL STRENGTH & PERFORMANCE" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/40 hidden sm:inline",
									children: "///"
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 px-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-end pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-2 max-w-md mb-3",
					children: coverConfig.highlights.map((hl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-black/90 border-l-4 p-2.5 rounded-sm shadow-xl backdrop-blur-sm transition-all",
						style: { borderLeftColor: coverPrimary },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-black tracking-wider uppercase block",
								style: {
									fontSize: `${8.5 * scale}pt`,
									color: coverPrimary
								},
								children: hl.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: `font-black text-white uppercase leading-tight tracking-tight mt-0.5 drop-shadow ${headlineFontClass}`,
								style: { fontSize: `${12.5 * scale}pt` },
								children: hl.title
							}),
							hl.teaser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-sans italic block text-slate-200 mt-1 leading-snug font-medium",
								style: { fontSize: `${8 * scale}pt` },
								children: [
									"\"",
									hl.teaser,
									"\""
								]
							}) : hl.authorCallout ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono uppercase block text-slate-300 mt-1",
								style: { fontSize: `${7.5 * scale}pt` },
								children: [
									"AUTOR: ",
									hl.authorCallout.toUpperCase(),
									" ",
									hl.pageTarget ? `// PÁG. 0${hl.pageTarget}` : ""
								]
							}) : null
						]
					}, hl.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-black/90 border-l-4 p-3.5 sm:p-4 rounded-sm shadow-2xl backdrop-blur-md",
					style: { borderLeftColor: coverPrimary },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-black text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-xs",
								style: {
									backgroundColor: coverBadgeBg,
									color: coverBadgeTextColor
								},
								children: coverConfig.categoryTag || "COVER STORY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/80 font-mono text-[9px] tracking-wider uppercase",
								children: "// DOSSIÊ EXCLUSIVO"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: `font-black text-white uppercase tracking-tight leading-[0.92] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] ${headlineFontClass}`,
							style: { fontSize: `clamp(1.6rem, ${6.5 * scale}cqw, 3.4rem)` },
							children: coverConfig.mainHeadline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-slate-200 font-semibold leading-snug mt-1.5 drop-shadow max-w-xl ${bodyFontClass}`,
							style: { fontSize: `${10.5 * scale}pt` },
							children: coverConfig.subHeadline
						})
					]
				})]
			}),
			coverConfig.showHazardStripe && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative z-10 w-full h-2.5 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#FACC15_10px,#FACC15_20px)] border-y border-black" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 bg-black/95 px-4 sm:px-6 py-2.5 flex items-center justify-between border-t border-white/20 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-1 rounded-sm border border-slate-700 shadow-sm hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-28 bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_4px,#000_4px,#000_5px,#fff_5px,#fff_8px)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[7px] font-bold text-black block text-center leading-none mt-0.5",
							children: coverConfig.barcodeText
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] font-mono text-slate-300 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white font-bold block",
							children: coverConfig.footerPublisherText || `${project.title} EDITORIAL CORP.`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: coverConfig.footerSubText || "DIAGRAMAÇÃO A4 DIGITAL // PRINT-READY" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 sm:gap-3 text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase",
					children: (coverConfig.footerHighlights && coverConfig.footerHighlights.length > 0 ? coverConfig.footerHighlights : [
						"NUTRIÇÃO DE PRECISÃO",
						"SUPLEMENTAÇÃO ESTRATÉGICA",
						"LONGEVIDADE ATIVA"
					]).slice(0, 4).map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-amber-400 font-black",
							children: "/"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, idx))
				})]
			})
		]
	});
};
/**
* Expressão regular que identifica quebras de página manuais inseridas pelo usuário
*/
var MANUAL_PAGE_BREAK_REGEX = /\n?\s*(?:---|===)\s*(?:QUEBRA DE P[ÁA]GINA|PAGE\s*BREAK)\s*(?:---|===)\s*\n?/i;
/**
* Calcula a quantidade mínima real de páginas necessárias para comportar 100%
* do texto de um artigo sem que nenhum caractere seja cortado por overflow.
*
* Capacidades editoriais com diagramação equilibrada (2 colunas):
* - Página 1 (com foto hero e cabeçalho monumental): ~1.350 a 1.450 caracteres.
* - Página 1 (sem foto hero): ~2.200 caracteres.
* - Páginas seguintes (2, 3, 4...): ~2.000 a 2.300 caracteres por página.
*/
function calculateRequiredArticlePages(article) {
	const content = article.content || "";
	if (!content.trim()) return 1;
	if (MANUAL_PAGE_BREAK_REGEX.test(content)) {
		const parts = content.split(MANUAL_PAGE_BREAK_REGEX);
		return Math.max(1, parts.length);
	}
	const totalChars = content.replace(MANUAL_PAGE_BREAK_REGEX, "\n\n").trim().length;
	if (totalChars <= (Boolean(article.heroImage && (article.heroImageLayout || "banner") !== "hidden") ? 2e3 : 3600)) return 1;
	if (totalChars <= 5e3) return 2;
	if (totalChars <= 8e3) return 3;
	if (totalChars <= 11500) return 4;
	return Math.min(5, Math.ceil(totalChars / 3e3));
}
/**
* Expressão regular que identifica quebras manuais de coluna inseridas pelo usuário.
* Tokens aceitos: [QUEBRA_COLUNA], <!-- quebra-coluna -->, <!-- columnbreak -->, [COLUNA_2]
*/
var MANUAL_COLUMN_BREAK_REGEX = /\n?\s*(?:\[QUEBRA_COLUNA\]|<!--\s*quebra[-_]coluna\s*-->|<!--\s*columnbreak\s*-->|\[COLUNA_2\])\s*\n?/i;
/**
* Retorna o pageSpan efetivo de um artigo.
* A escolha do usuário tem precedência absoluta: se o usuário selecionou 1 página,
* ela será mantida em 1 página mesmo quando o sistema recomendar 2, permitindo testar
* o enquadramento do texto sem que o sistema force páginas extras.
* Por padrão, retorna 1 (Página Única), dando ao usuário total liberdade de condensar.
*/
function getEffectiveArticlePageSpan(article) {
	if (MANUAL_PAGE_BREAK_REGEX.test(article.content || "")) {
		const parts = (article.content || "").split(MANUAL_PAGE_BREAK_REGEX);
		return Math.max(1, parts.length);
	}
	if (typeof article.pageSpan === "number" && article.pageSpan >= 1) return article.pageSpan;
	return 1;
}
/**
* Formata o número da página adicionando zero à esquerda quando menor que 10.
* Ex: 1 -> "01", 9 -> "09", 10 -> "10"
*/
function formatPageNumber(pageNum) {
	if (isNaN(pageNum) || pageNum < 0) return "00";
	return pageNum < 10 ? `0${pageNum}` : `${pageNum}`;
}
/**
* Calcula o volume total de páginas ativas de uma edição da revista.
* Leva em consideração visibilidade de Capa, Expediente, Colaboradores,
* Sumário, Matérias e Contracapa com suporte dinâmico a múltiplas páginas.
*/
function calculateMagazineTotalPages(project) {
	const vis = {
		showCover: true,
		showEditorLetter: true,
		showContributors: false,
		showTableOfContents: true,
		showBackCover: true,
		...project.pageVisibility
	};
	let count = 0;
	if (vis.showCover) count++;
	if (vis.showEditorLetter) count++;
	if (vis.showContributors) count++;
	if (vis.showTableOfContents) count++;
	(project.articles || []).filter((a) => a.enabled !== false).forEach((art) => {
		count += getEffectiveArticlePageSpan(art);
	});
	if (vis.showBackCover) count++;
	return Math.max(1, count);
}
/**
* Conta com precisão o número de palavras em um texto excluindo espaços extras.
*/
function countWords(text) {
	if (!text) return 0;
	return text.trim().split(/\s+/).filter(Boolean).length;
}
var EditorLetterPage = ({ project, theme, pageNumber = 2, isPrintMode = false, layoutMode = "print" }) => {
	const { editorialInfo, coverConfig } = project;
	const isMobile = (layoutMode || project.layoutMode || "print") === "mobile";
	const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
	const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
	const isLight = Boolean(theme.isLight);
	const bgColor = isLight ? theme.bgLight : theme.bgDark;
	const textColor = theme.textColor;
	const textMutedColor = isLight ? "#475569" : "#94A3B8";
	const cardBg = theme.cardBg;
	const primaryColor = theme.primaryColor;
	theme.accentColor;
	theme.borderColor;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none ${isPrintMode ? "print-page" : isMobile ? "shadow-2xl rounded-lg" : "shadow-2xl rounded-sm"}`,
		style: {
			aspectRatio: isMobile ? "9 / 16" : "210 / 297",
			backgroundColor: bgColor,
			color: textColor
		},
		children: [
			theme.id === "midnight-fintech" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { backgroundImage: `
              radial-gradient(ellipse 65% 45% at 85% 15%, rgba(83, 73, 126, 0.28), transparent 60%),
              radial-gradient(ellipse 50% 40% at 15% 85%, rgba(56, 152, 236, 0.12), transparent 55%)
            ` }
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-b-2 pb-2 flex items-center justify-between shrink-0",
				style: { borderColor: primaryColor },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono font-black text-xs uppercase",
							style: { color: primaryColor },
							children: editorialInfo.headerBrandTitle || project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "opacity-40 font-mono",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono font-bold tracking-widest uppercase",
							style: { color: textMutedColor },
							children: editorialInfo.headerDocTitle || "DOCUMENTAÇÃO LEGAL & MANIFESTO EDITORIAL"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[9px] font-mono font-semibold uppercase",
					style: { color: textMutedColor },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-1.5 py-0.5 rounded border font-bold",
						style: {
							backgroundColor: `${primaryColor}20`,
							color: primaryColor,
							borderColor: `${primaryColor}50`
						},
						children: editorialInfo.headerBadgeText || (coverConfig.editionNumber ? `EDIÇÃO #${coverConfig.editionNumber}` : "ED. #01")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: editorialInfo.headerDateText || project.date })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 my-2.5 shrink-0 rounded-lg p-3 space-y-2.5 shadow-sm border",
				style: {
					backgroundColor: cardBg,
					borderColor: `${primaryColor}40`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-b pb-2 text-[9px] font-mono",
					style: { borderColor: `${primaryColor}30` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-black flex items-center gap-1 uppercase tracking-wider",
								style: { color: primaryColor },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "w-3 h-3" }), "REGISTRO EDITORIAL OFICIAL:"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "px-2 py-0.5 rounded border font-bold",
								style: {
									backgroundColor: bgColor,
									borderColor: `${primaryColor}40`,
									color: textColor
								},
								children: ["ISBN ", editorialInfo.isbn || "978-65-00-98765-4"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "px-2 py-0.5 rounded border font-bold",
								style: {
									backgroundColor: bgColor,
									borderColor: `${primaryColor}40`,
									color: textColor
								},
								children: ["ISSN ", editorialInfo.issn || "2675-9829"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[8px] uppercase tracking-tight",
						style: { color: textMutedColor },
						children: editorialInfo.publisherInfo || "MONTANHA EDITORIAL LTDA. // SÃO PAULO - BRASIL"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-12 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5 border-r pr-2 space-y-1",
						style: { borderColor: `${primaryColor}30` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 text-[8px] font-mono font-black uppercase tracking-widest mb-1",
							style: { color: primaryColor },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-2.5 h-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXPEDIENTE & CORPO EDITORIAL" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-2 gap-y-1 text-[8px] font-mono",
							children: editorialInfo.credits.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block uppercase text-[7px] font-semibold",
									style: { color: textMutedColor },
									children: c.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold truncate block",
									style: { color: textColor },
									children: c.name
								})]
							}, c.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-[8px] font-mono font-black uppercase tracking-widest mb-0.5",
								style: { color: primaryColor },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-2.5 h-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FICHA CATALOGRÁFICA (CIP) & TERMOS LEGAIS" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[7.5px] font-mono leading-tight text-left",
								style: { color: textMutedColor },
								children: editorialInfo.catalogingData || "Dados Internacionais de Catalogação na Publicação (CIP): Revista Montanha / Editor-Chefe: Coach Montanha. São Paulo: Montanha Editorial, 2026. Publicação Mensal. CDD 613.71. Todos os direitos reservados."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[7px] font-mono leading-tight text-left",
								style: { color: isLight ? "#64748B" : "#64748B" },
								children: editorialInfo.disclaimerText || "AVISO LEGAL & MÉDICO: O conteúdo destina-se a fins informativos e educacionais. A prática de exercícios de alta intensidade exige avaliação médica prévia e acompanhamento profissional habilitado. © 2026 Montanha Media."
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 flex flex-col justify-between overflow-hidden pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-[9px] font-mono font-black tracking-widest uppercase",
						style: { color: primaryColor },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CARTA DO EDITOR // MANIFESTO DE ABERTURA" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: `text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-tight ${headlineFontClass}`,
						style: { color: textColor },
						children: editorialInfo.editorLetterTitle || "A BUSCA INCESSANTE PELA EXCELÊNCIA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 my-2 overflow-hidden flex flex-col justify-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-2.5 rounded-lg mb-2.5 shrink-0 border",
							style: {
								backgroundColor: cardBg,
								borderColor: `${primaryColor}40`
							},
							children: [
								editorialInfo.editorPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 shrink-0 shadow-md",
									style: { borderColor: primaryColor },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: editorialInfo.editorPhoto,
										alt: editorialInfo.editorName,
										className: "w-full h-full object-cover filter contrast-125"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: `font-black text-xs sm:text-sm uppercase tracking-tight truncate ${headlineFontClass}`,
											style: { color: textColor },
											children: editorialInfo.editorName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-black font-mono text-[8px] px-1.5 py-0.2 rounded uppercase shrink-0",
											style: {
												backgroundColor: primaryColor,
												color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
											},
											children: editorialInfo.editorRole || "EDITOR-CHEFE"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] leading-tight truncate mt-0.5",
										style: { color: textMutedColor },
										children: "Fundador da metodologia e mentor de alta performance."
									})]
								}),
								editorialInfo.editorialNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block text-right max-w-xs pl-2 border-l",
									style: { borderColor: `${primaryColor}30` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[8.5px] font-mono font-bold italic leading-tight",
										style: { color: primaryColor },
										children: [
											"\"",
											editorialInfo.editorialNote,
											"\""
										]
									})
								})
							]
						}),
						(() => {
							const paragraphs = (editorialInfo.editorLetter || "").split("\n\n").map((p) => p.trim()).filter(Boolean);
							paragraphs.length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `columns-1 sm:columns-2 gap-6 text-xs sm:text-[12.5px] leading-relaxed text-left shrink-0 mb-3 ${bodyFontClass}`,
								style: {
									color: isLight ? textColor || "#0A0A0A" : "#CBD5E1",
									columnFill: "balance"
								},
								children: paragraphs.map((paragraph, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "leading-relaxed mb-3 break-inside-avoid",
									children: paragraph
								}, idx))
							});
						})(),
						(() => {
							const spotlightImg = editorialInfo.editorLetterSpotlightImage || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80";
							const spotlightCaption = editorialInfo.editorLetterSpotlightCaption || "A consistência nos detalhes invisíveis constrói o corpo e a mente indestrutíveis.";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full rounded-lg overflow-hidden border flex-1 min-h-[160px] sm:min-h-[190px] mb-2 shadow-md group",
								style: { borderColor: `${primaryColor}50` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: spotlightImg,
									alt: "Destaque Carta do Editor",
									className: "w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-black/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 flex items-center justify-between shadow-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[8px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded",
												style: {
													backgroundColor: primaryColor,
													color: isLight ? "#FFFFFF" : "#000000"
												},
												children: "// MANIFESTO VISUAL"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[8.5px] font-mono uppercase text-slate-300 hidden sm:inline",
												children: [
													project.title,
													" • EDIÇÃO #",
													coverConfig.editionNumber || "01"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[8.5px] font-mono italic text-amber-200/90 hidden sm:inline max-w-md truncate",
											children: [
												"\"",
												spotlightCaption,
												"\""
											]
										})]
									})
								})]
							});
						})(),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t flex items-center justify-between shrink-0",
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono font-bold uppercase",
										style: { color: primaryColor },
										children: ["— ", editorialInfo.editorName]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-40 font-mono text-[9px]",
										children: "•"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-mono uppercase",
										style: { color: textMutedColor },
										children: editorialInfo.editorRole
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2.5 py-0.5 rounded font-mono font-black text-[9px] uppercase tracking-wider border",
								style: {
									backgroundColor: `${primaryColor}20`,
									color: primaryColor,
									borderColor: `${primaryColor}50`
								},
								children: "FORÇA & HONRA"
							})]
						})
					]
				})]
			}),
			isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}30`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["pág ", formatPageNumber(pageNumber)] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-1.5 flex items-center justify-between text-[9px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}40`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					project.title,
					" • ",
					coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-2 py-0.5 rounded border",
					style: {
						backgroundColor: cardBg,
						color: primaryColor,
						borderColor: `${primaryColor}60`
					},
					children: ["PÁGINA ", formatPageNumber(pageNumber)]
				})]
			})
		]
	});
};
var ContributorsPage = ({ project, theme, pageNumber = 3, isPrintMode = false, layoutMode = "print" }) => {
	const { editorialInfo, coverConfig } = project;
	const contributors = editorialInfo.contributors || [];
	const isMobile = (layoutMode || project.layoutMode || "print") === "mobile";
	const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
	const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
	const isLight = Boolean(theme.isLight);
	const primaryColor = theme.primaryColor;
	theme.accentColor;
	const textColor = theme.textColor;
	const bgColor = isLight ? theme.bgLight : theme.bgDark;
	const textMutedColor = isLight ? "#475569" : "#94A3B8";
	const cardBg = theme.cardBg;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none ${isPrintMode ? "print-page" : isMobile ? "shadow-2xl rounded-lg" : "shadow-2xl rounded-sm"}`,
		style: {
			aspectRatio: isMobile ? "9 / 16" : "210 / 297",
			backgroundColor: bgColor,
			color: textColor
		},
		children: [
			theme.id === "midnight-fintech" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { backgroundImage: `
              radial-gradient(ellipse 65% 45% at 85% 15%, rgba(83, 73, 126, 0.28), transparent 60%),
              radial-gradient(ellipse 50% 40% at 15% 85%, rgba(56, 152, 236, 0.12), transparent 55%)
            ` }
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-b-2 pb-3 flex items-end justify-between",
				style: { borderColor: primaryColor },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-black text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded",
						style: {
							backgroundColor: primaryColor,
							color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
						},
						children: "EDITORIAL DOSSIER"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] font-mono font-bold tracking-widest uppercase",
						style: { color: textMutedColor },
						children: [
							project.volume,
							" // ",
							coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: `text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none ${headlineFontClass}`,
					style: { color: textColor },
					children: ["CONTRIBUTORS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-2xl sm:text-3xl",
						style: { color: primaryColor },
						children: "// COLABORADORES"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right hidden sm:block font-mono text-[10px]",
					style: { color: textMutedColor },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold",
						style: { color: primaryColor },
						children: "ESPECIALISTAS & AUTORES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tracking-widest",
						children: "UNCONVENTIONAL KNOWLEDGE"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 my-4 flex-1 overflow-hidden flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3.5",
					children: contributors.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3.5 rounded-lg border-2 flex items-start gap-4 transition-all shadow-md",
						style: {
							backgroundColor: cardBg,
							borderColor: `${primaryColor}40`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 shrink-0 shadow-md",
							style: { borderColor: primaryColor },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.photo,
								alt: c.name,
								className: "w-full h-full object-cover filter contrast-125"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0 space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: `font-black text-sm sm:text-base uppercase tracking-tight truncate ${headlineFontClass}`,
											style: { color: textColor },
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono font-black text-[8px] px-1.5 py-0.2 rounded uppercase border",
											style: {
												backgroundColor: `${primaryColor}20`,
												color: primaryColor,
												borderColor: `${primaryColor}60`
											},
											children: ["COLABORADOR #", idx + 1]
										})]
									}), c.handle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[9px] font-mono flex items-center gap-1 font-bold",
										style: { color: primaryColor },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-3 h-3" }), c.handle]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono font-bold uppercase tracking-wider",
									style: { color: primaryColor },
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[11px] leading-relaxed line-clamp-2 ${bodyFontClass}`,
									style: { color: isLight ? "#334155" : "#CBD5E1" },
									children: c.bio
								}),
								c.facility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-[8.5px] font-mono pt-1",
									style: { color: textMutedColor },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
										className: "w-3 h-3",
										style: { color: primaryColor }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "uppercase",
										children: c.facility
									})]
								})
							]
						})]
					}, c.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-2.5 rounded-lg border flex items-center justify-between text-[10px] font-mono",
					style: {
						backgroundColor: cardBg,
						borderColor: `${primaryColor}30`,
						color: textMutedColor
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "QUER COLABORAR NA PRÓXIMA EDIÇÃO?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						style: { color: primaryColor },
						children: "EDITORIAL@COACHMONTANHA.COM.BR"
					})]
				})]
			}),
			isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}30`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["pág ", formatPageNumber(pageNumber)] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-1.5 flex items-center justify-between text-[9px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}40`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					project.title,
					" • ",
					coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-2 py-0.5 rounded border",
					style: {
						backgroundColor: cardBg,
						color: primaryColor,
						borderColor: `${primaryColor}60`
					},
					children: ["PÁGINA ", formatPageNumber(pageNumber)]
				})]
			})
		]
	});
};
var EditorialPage = ({ project, theme, pageNumber = 3, isPrintMode = false, layoutMode = "print" }) => {
	const { editorialInfo, articles, coverConfig, pageVisibility } = project;
	const isMobile = (layoutMode || project.layoutMode || "print") === "mobile";
	const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
	const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
	const isLight = Boolean(theme.isLight);
	const bgColor = isLight ? theme.bgLight : theme.bgDark;
	const textColor = theme.textColor;
	const textMutedColor = isLight ? "#475569" : "#94A3B8";
	const cardBg = theme.cardBg;
	const primaryColor = theme.primaryColor;
	theme.accentColor;
	theme.borderColor;
	let currentOffset = 1;
	if (pageVisibility?.showCover !== false) currentOffset += 1;
	if (pageVisibility?.showEditorLetter !== false) currentOffset += 1;
	if (pageVisibility?.showContributors) currentOffset += 1;
	if (pageVisibility?.showTableOfContents !== false) currentOffset += 1;
	const activeArticlesWithPages = articles.filter((art) => art.enabled !== false).map((art) => {
		const startPage = currentOffset;
		const span = getEffectiveArticlePageSpan(art);
		currentOffset += span;
		return {
			article: art,
			startPage,
			endPage: startPage + span - 1,
			isMultiPage: span > 1,
			span
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none ${isPrintMode ? "print-page" : isMobile ? "shadow-2xl rounded-lg" : "shadow-2xl rounded-sm"}`,
		style: {
			aspectRatio: isMobile ? "9 / 16" : "210 / 297",
			backgroundColor: bgColor,
			color: textColor
		},
		children: [
			theme.id === "midnight-fintech" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { backgroundImage: `
              radial-gradient(ellipse 65% 45% at 85% 15%, rgba(83, 73, 126, 0.28), transparent 60%),
              radial-gradient(ellipse 50% 40% at 15% 85%, rgba(56, 152, 236, 0.12), transparent 55%)
            ` }
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-b-2 pb-3 flex items-end justify-between",
				style: { borderColor: primaryColor },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-black text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded",
						style: {
							backgroundColor: primaryColor,
							color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
						},
						children: [
							project.volume,
							" // ",
							coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-mono font-bold tracking-widest uppercase",
						style: { color: textMutedColor },
						children: project.editorialInfo?.headerBrandTitle || project.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none ${headlineFontClass}`,
					style: { color: textColor },
					children: project.editorialInfo?.tocHeadline || "SUMÁRIO"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right hidden sm:block font-mono text-[10px]",
					style: { color: textMutedColor },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold",
						style: { color: primaryColor },
						children: coverConfig.issueDate
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tracking-widest",
						children: "UNCONVENTIONAL DOSSIER"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 my-4 flex-1 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7 flex flex-col justify-between pr-0 md:pr-2 border-b md:border-b-0 md:border-r pb-3 md:pb-0",
					style: { borderColor: `${primaryColor}30` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest uppercase pb-1 border-b",
							style: {
								color: primaryColor,
								borderColor: `${primaryColor}30`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MATÉRIAS & PROTOCOLOS EM DESTAQUE" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: activeArticlesWithPages.map(({ article: art, startPage }) => {
								const pageLabel = formatPageNumber(startPage);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex items-start gap-3 p-1.5 rounded transition-all border-l-2",
									style: {
										borderColor: `${primaryColor}40`,
										backgroundColor: `${cardBg}50`
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "shrink-0 flex flex-col items-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-black text-xs sm:text-sm px-2 py-0.5 rounded border block",
												style: {
													backgroundColor: cardBg,
													color: primaryColor,
													borderColor: `${primaryColor}60`
												},
												children: pageLabel
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 mb-0.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[8px] font-mono font-bold uppercase tracking-wider",
														style: { color: primaryColor },
														children: ["// ", art.category]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[8px] font-mono",
														style: { color: textMutedColor },
														children: [art.estimatedReadTime, " MIN DE LEITURA"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: `font-black text-xs sm:text-sm uppercase tracking-tight leading-snug line-clamp-1 ${headlineFontClass}`,
													style: { color: textColor },
													children: art.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: `text-[10px] line-clamp-1 leading-snug mt-0.5 ${bodyFontClass}`,
													style: { color: textMutedColor },
													children: art.subtitle || "Protocolo aprofundado de força e longevidade."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-right shrink-0 hidden sm:block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[8px] font-mono uppercase block",
												style: { color: textMutedColor },
												children: ["POR: ", art.author.toUpperCase()]
											})
										})
									]
								}, art.id);
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-lg border space-y-1.5",
						style: {
							backgroundColor: cardBg,
							borderColor: `${primaryColor}40`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-[9px] font-mono font-black uppercase",
							style: { color: primaryColor },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COLUNAS REGULARES DA EDIÇÃO:" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2 text-[9px] font-mono",
							style: { color: textMutedColor },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									style: { color: primaryColor },
									children: "PÁG. 02"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: "Manifesto do Editor & Termos"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold",
									style: { color: primaryColor },
									children: ["PÁG. ", formatPageNumber(pageNumber)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: "Sumário Completo"
								})]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5 flex flex-col justify-between space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-[10px] font-mono font-black tracking-widest uppercase pb-1 border-b shrink-0",
						style: {
							color: primaryColor,
							borderColor: `${primaryColor}30`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VISUAL SPOTLIGHT" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 flex flex-col justify-between overflow-hidden",
						children: (() => {
							const firstArticleHero = project.articles?.[0]?.heroImage;
							const configuredSpotlight = project.editorialInfo?.tocSpotlightImage;
							const spotlightSrc = configuredSpotlight && configuredSpotlight !== firstArticleHero ? configuredSpotlight : "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-lg overflow-hidden border flex-1 w-full min-h-[180px] group shadow-md",
								style: { borderColor: `${primaryColor}50` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: spotlightSrc,
									alt: project.editorialInfo?.tocSpotlightTitle || "Visual Spotlight",
									className: "w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-black/90 backdrop-blur-md p-2.5 rounded border border-white/15 shadow-xl space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[8px] font-mono font-black uppercase tracking-wider block",
												style: { color: primaryColor },
												children: ["// ", project.editorialInfo?.tocSpotlightCategory || "FOTOGRAFIA EDITORIAL"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: `text-xs sm:text-sm font-black uppercase text-white leading-tight ${headlineFontClass}`,
												children: project.editorialInfo?.tocSpotlightTitle || "TREINAMENTO NÃO-CONVENCIONAL & ALAVANCAS DE FORÇA"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[8.5px] font-mono text-slate-300",
												children: "REGISTRO EXCLUSIVO DA EDIÇÃO • MONTANHA LAB"
											})
										]
									})
								})]
							});
						})()
					})]
				})]
			}),
			isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}30`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["pág ", formatPageNumber(pageNumber)] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-1.5 flex items-center justify-between text-[9px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}40`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					project.title,
					" • ",
					coverConfig.editionNumber ? `ED. #${coverConfig.editionNumber}` : "ED. #01"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-2 py-0.5 rounded border",
					style: {
						backgroundColor: cardBg,
						color: primaryColor,
						borderColor: `${primaryColor}60`
					},
					children: ["PÁGINA ", formatPageNumber(pageNumber)]
				})]
			})
		]
	});
};
var ArticleSpread = ({ article, project, theme, pageNumber, isPrintMode = false, pagePart = 1, totalPagesForArticle = article.pageSpan || 1, layoutMode = "print" }) => {
	const isMobile = (layoutMode || project.layoutMode || "print") === "mobile";
	const isWorkout = article.layoutTemplate === "workout-protocol";
	const isProductAd = article.layoutTemplate === "product-ad";
	const isFacilitySpotlight = article.layoutTemplate === "facility-spotlight";
	const protocol = article.workoutProtocol;
	const promo = article.productPromotion;
	const facility = article.facilitySpotlight;
	const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
	const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
	const isLight = Boolean(theme.isLight);
	const bgColor = isLight ? theme.bgLight : theme.bgDark;
	const textColor = theme.textColor;
	const textMutedColor = isLight ? "#475569" : "#94A3B8";
	const cardBg = theme.cardBg;
	const primaryColor = theme.primaryColor;
	theme.accentColor;
	theme.borderColor;
	const brandTitle = project.editorialInfo?.headerBrandTitle || project.title;
	const articleBodyColor = isLight ? theme.textColor || "#0A0A0A" : "#CBD5E1";
	const effectiveTotalPages = Math.max(totalPagesForArticle || 1, getEffectiveArticlePageSpan(article));
	const isMultiPage = effectiveTotalPages > 1;
	const isFirstPage = pagePart === 1;
	const isLastPage = pagePart === effectiveTotalPages;
	const hasManualSplit = MANUAL_PAGE_BREAK_REGEX.test(article.content || "");
	const allRawChunks = (article.content || "").replace(MANUAL_PAGE_BREAK_REGEX, "\n\n").split("\n\n").map((c) => c.trim()).filter(Boolean);
	const heroLayout = article.heroImageLayout || "banner";
	const heroSize = article.heroImageHeight || "large";
	const showHeroImage = Boolean(article.heroImage && heroLayout !== "hidden" && isFirstPage);
	const secondaryPlacement = article.secondaryImagePlacement || "bottom";
	const showSecondaryImageTop = Boolean(article.secondaryImage && isMultiPage && isLastPage && secondaryPlacement === "top");
	let pageChunks = [];
	if (effectiveTotalPages > 1) if (hasManualSplit) pageChunks = ((article.content || "").split(MANUAL_PAGE_BREAK_REGEX)[pagePart - 1] || "").split("\n\n").map((c) => c.trim()).filter(Boolean);
	else if (allRawChunks.length <= 1) pageChunks = isFirstPage ? allRawChunks : [];
	else {
		const N = effectiveTotalPages;
		const totalAllChars = allRawChunks.reduce((acc, c) => acc + c.length, 0);
		const pageWeights = [];
		for (let p = 0; p < N; p++) if (p === 0) pageWeights.push(showHeroImage ? .9 : 1.5);
		else if (p === N - 1) pageWeights.push(1);
		else pageWeights.push(1.8);
		const sumWeights = pageWeights.reduce((a, b) => a + b, 0);
		const pageSlices = Array.from({ length: N }, () => []);
		let currentSlice = 0;
		let currentSliceChars = 0;
		let targetCumulative = pageWeights[0] / sumWeights * totalAllChars;
		for (let i = 0; i < allRawChunks.length; i++) {
			const chunk = allRawChunks[i];
			const mustAdvanceForPages = allRawChunks.length - i < N - currentSlice && currentSlice < N - 1;
			const hasReachedTarget = currentSlice < N - 1 && pageSlices[currentSlice].length > 0 && currentSliceChars + chunk.length > targetCumulative;
			if (mustAdvanceForPages || hasReachedTarget) {
				const lastAdded = pageSlices[currentSlice][pageSlices[currentSlice].length - 1];
				if (lastAdded && (lastAdded.match(/^#{1,4}\s/) || lastAdded.startsWith("//")) && pageSlices[currentSlice].length > 1) {
					pageSlices[currentSlice].pop();
					currentSlice++;
					pageSlices[currentSlice] = [lastAdded, chunk];
					currentSliceChars = lastAdded.length + chunk.length;
					targetCumulative += pageWeights[currentSlice] / sumWeights * totalAllChars;
					continue;
				}
				currentSlice++;
				currentSliceChars = 0;
				targetCumulative += pageWeights[currentSlice] / sumWeights * totalAllChars;
			}
			pageSlices[currentSlice].push(chunk);
			currentSliceChars += chunk.length;
		}
		pageChunks = pageSlices[(pagePart ?? 1) - 1] || [];
	}
	else pageChunks = allRawChunks;
	const totalPageChars = pageChunks.reduce((sum, c) => sum + c.length, 0);
	const isExtremeDenseText = totalPageChars > 2500;
	const isVeryDenseText = totalPageChars > 1800;
	const isDenseText = totalPageChars > 1300;
	const isShortPageText = totalPageChars < 850;
	const density = article.textDensity || "normal";
	const bodyTextSizeClass = isMobile ? "text-[12px] leading-[1.75] sm:text-[13px] sm:leading-[1.8] mb-2.5" : density === "compact" || isExtremeDenseText ? "text-[8.5px] leading-[1.38] sm:text-[9px] sm:leading-[1.42] mb-1.5" : isVeryDenseText ? "text-[9.5px] leading-[1.5] sm:text-[10px] sm:leading-[1.5] mb-2" : density === "spacious" || isShortPageText ? "text-[12px] leading-[1.75] sm:text-[12.5px] sm:leading-[1.75] mb-3.5" : isDenseText ? "text-[10.5px] leading-[1.6] sm:text-[11px] sm:leading-[1.6] mb-2.5" : "text-[11px] leading-[1.65] sm:text-[11.5px] sm:leading-[1.65] mb-2.5";
	const hasManualColumnBreak = pageChunks.some((c) => MANUAL_COLUMN_BREAK_REGEX.test(c));
	let col1Chunks = [];
	let col2Chunks = [];
	if (hasManualColumnBreak) {
		let passedBreak = false;
		for (const chunk of pageChunks) {
			if (MANUAL_COLUMN_BREAK_REGEX.test(chunk)) {
				const parts = chunk.split(MANUAL_COLUMN_BREAK_REGEX).map((p) => p.trim()).filter(Boolean);
				if (parts.length > 0 && parts[0]) col1Chunks.push(parts[0]);
				if (parts.length > 1 && parts[1]) col2Chunks.push(parts[1]);
				passedBreak = true;
				continue;
			}
			if (!passedBreak) col1Chunks.push(chunk);
			else col2Chunks.push(chunk);
		}
	} else if (pageChunks.length <= 2 || totalPageChars <= 900) {
		col1Chunks = pageChunks;
		col2Chunks = [];
	} else {
		const targetCol1Chars = totalPageChars * .55;
		let accumChars = 0;
		let splitIdx = 0;
		for (let i = 0; i < pageChunks.length - 1; i++) {
			accumChars += pageChunks[i].length;
			splitIdx = i + 1;
			if (accumChars >= targetCol1Chars) break;
		}
		col1Chunks = pageChunks.slice(0, splitIdx);
		col2Chunks = pageChunks.slice(splitIdx);
	}
	const renderInlineFormatted = (rawText) => {
		return rawText.split(/(==[\s\S]+?==|<mark>[\s\S]+?<\/mark>|\*\*[\s\S]+?\*\*|<b>[\s\S]+?<\/b>|<u>[\s\S]+?<\/u>|__[\s\S]+?__|\*[\s\S]+?\*|<i>[\s\S]+?<\/i>|“[\s\S]+?”|"[^"]+?")/g).map((part, index) => {
			if (!part) return null;
			if (part.startsWith("==") && part.endsWith("==") || part.startsWith("<mark>") && part.endsWith("</mark>")) {
				const inner = part.startsWith("==") ? part.slice(2, -2) : part.slice(6, -7);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
					className: "px-1 py-0.5 rounded font-bold",
					style: {
						backgroundColor: `${primaryColor}40`,
						color: isLight ? "#0F172A" : "#FFFFFF",
						borderBottom: `2px solid ${primaryColor}`
					},
					children: inner
				}, index);
			}
			if (part.startsWith("**") && part.endsWith("**") || part.startsWith("<b>") && part.endsWith("</b>")) {
				const inner = part.startsWith("**") ? part.slice(2, -2) : part.slice(3, -4);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-black",
					style: { color: isLight ? "#000000" : "#FFFFFF" },
					children: inner
				}, index);
			}
			if (part.startsWith("<u>") && part.endsWith("</u>") || part.startsWith("__") && part.endsWith("__")) {
				const inner = part.startsWith("<u>") ? part.slice(3, -4) : part.slice(2, -2);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "underline decoration-2 underline-offset-2 font-semibold",
					style: { textDecorationColor: primaryColor },
					children: inner
				}, index);
			}
			if (part.startsWith("*") && part.endsWith("*") || part.startsWith("<i>") && part.endsWith("</i>")) {
				const inner = part.startsWith("*") ? part.slice(1, -1) : part.slice(3, -4);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "italic font-medium",
					children: inner
				}, index);
			}
			if (part.startsWith("“") && part.endsWith("”") || part.startsWith("\"") && part.endsWith("\"")) {
				const inner = part.slice(1, -1);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "italic font-bold",
					style: { color: primaryColor },
					children: [
						"“",
						inner,
						"”"
					]
				}, index);
			}
			return part;
		});
	};
	const renderSingleChunk = (chunk, idx, isFirstOverall) => {
		const headingMatch = chunk.match(/^#{1,4}\s*(.*)/);
		if (headingMatch && headingMatch[1]?.trim()) {
			const cleanTitle = headingMatch[1].replace(/[*_#]/g, "").trim();
			if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 mb-1.5 pb-0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: `text-[12px] sm:text-[13px] font-black uppercase tracking-wider ${headlineFontClass}`,
					style: { color: primaryColor },
					children: cleanTitle
				})
			}, idx);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 mb-1.5 pb-1 border-b break-inside-avoid break-inside-avoid-column flex items-center gap-1.5",
				style: { borderColor: `${primaryColor}40` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-mono font-black",
					style: { color: primaryColor },
					children: "//"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: `text-[11px] sm:text-[11.5px] font-black uppercase tracking-wide ${headlineFontClass}`,
					style: { color: primaryColor },
					children: cleanTitle
				})]
			}, idx);
		}
		if (chunk.startsWith("//")) {
			const cleanTitle = chunk.replace(/^\/+\s*/, "").replace(/[*_]/g, "").trim();
			const isRef = cleanTitle.toUpperCase().startsWith("REFERÊNCIAS") || cleanTitle.toUpperCase().startsWith("REFERENCIAS");
			if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 mb-1 pb-0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: `text-[11.5px] sm:text-[12.5px] font-black uppercase tracking-wider ${headlineFontClass}`,
					style: { color: isRef ? "#F59E0B" : primaryColor },
					children: cleanTitle
				})
			}, idx);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-2.5 mb-1 pb-0.5 border-b break-inside-avoid flex items-center gap-1.5 ${isRef ? "pt-1 border-amber-500/50" : ""}`,
				style: { borderColor: `${primaryColor}40` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[7.5px] font-mono font-black uppercase px-1.5 py-0.5 rounded shadow-xs",
					style: {
						backgroundColor: isRef ? "#F59E0B" : `${primaryColor}20`,
						color: isRef ? "#000000" : primaryColor
					},
					children: isRef ? "★ FONTE / CIÊNCIA" : "// SEÇÃO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: `text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider ${headlineFontClass}`,
					style: { color: isRef ? "#F59E0B" : primaryColor },
					children: cleanTitle
				})]
			}, idx);
		}
		if (chunk.startsWith("- ") || chunk.startsWith("• ")) {
			const items = chunk.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("• "));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: `my-1.5 space-y-1 ${bodyFontClass} break-inside-avoid break-inside-avoid-column`,
				children: items.map((item, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `flex items-start gap-1.5 leading-snug ${bodyTextSizeClass}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold shrink-0",
						style: { color: primaryColor },
						children: "▸"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: articleBodyColor },
						children: renderInlineFormatted(item.replace(/^[-•]\s*/, ""))
					})]
				}, itemIdx))
			}, idx);
		}
		const statMatch = chunk.trim().match(/^\[STAT:\s*([^\|\]]+)\s*\|\s*([^\|\]]+)(?:\s*\|\s*([^\]]+))?\]$/i);
		if (statMatch) {
			const statValue = statMatch[1]?.trim() || "";
			const statLabel = statMatch[2]?.trim() || "";
			const statDesc = statMatch[3]?.trim() || "";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-2.5 p-3 rounded-xl border-2 shadow-xs break-inside-avoid break-inside-avoid-column flex items-center justify-between gap-3",
				style: {
					backgroundColor: cardBg,
					borderColor: `${primaryColor}50`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-0.5 min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 mb-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[7px] sm:text-[7.5px] font-mono font-black uppercase px-1.5 py-0.2 rounded",
							style: {
								backgroundColor: `${primaryColor}20`,
								color: primaryColor
							},
							children: "// MÉTRICA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[10px] sm:text-[11px] font-black uppercase tracking-wider truncate ${headlineFontClass}`,
							style: { color: isLight ? "#0F172A" : "#FFFFFF" },
							children: statLabel
						})]
					}), statDesc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-[9px] sm:text-[9.5px] leading-tight opacity-80 ${bodyFontClass}`,
						style: { color: articleBodyColor },
						children: statDesc
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `text-2xl sm:text-3xl font-black shrink-0 tracking-tight leading-none px-2.5 py-1 rounded-lg border ${headlineFontClass}`,
					style: {
						backgroundColor: `${primaryColor}15`,
						color: primaryColor,
						borderColor: `${primaryColor}40`
					},
					children: statValue
				})]
			}, idx);
		}
		const dicaMatch = chunk.trim().match(/^\[(?:DICA|CALLOUT|AVISO):\s*([^\|\]]+)\s*\|\s*([^\]]+)\]$/i);
		if (dicaMatch) {
			const dicaTitle = dicaMatch[1]?.trim() || "DICA DO MONTANHA";
			const dicaContent = dicaMatch[2]?.trim() || "";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-2.5 p-3 rounded-xl border-l-4 border-2 shadow-xs break-inside-avoid break-inside-avoid-column",
				style: {
					backgroundColor: isLight ? `${primaryColor}08` : `${primaryColor}15`,
					borderLeftColor: primaryColor,
					borderColor: `${primaryColor}30`
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center gap-1.5 mb-1 text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider ${headlineFontClass}`,
					style: { color: primaryColor },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dicaTitle })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[9px] sm:text-[10px] leading-relaxed ${bodyFontClass}`,
					style: { color: articleBodyColor },
					children: renderInlineFormatted(dicaContent)
				})]
			}, idx);
		}
		if (chunk.startsWith("> ") || chunk.startsWith(">\n")) {
			const cleanQuote = chunk.replace(/^>\s*/gm, "").replace(/^\[QUOTE:\s*/i, "").replace(/\]$/, "").trim();
			const authorMatch = cleanQuote.match(/^(.*?)(?:\s*(?:--|—)\s*([^\n\r]+))$/s);
			const quoteBody = (authorMatch ? authorMatch[1] : cleanQuote).replace(/^["“]|["”]$/g, "").trim();
			const quoteAuthor = authorMatch ? authorMatch[2]?.trim() : article.author;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-3 p-3.5 rounded-xl border-2 shadow-sm relative overflow-hidden break-inside-avoid break-inside-avoid-column",
				style: {
					backgroundColor: cardBg,
					borderColor: `${primaryColor}60`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
						className: "w-5 h-5 shrink-0 mt-0.5",
						style: { color: primaryColor }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `text-xs sm:text-[12.5px] font-black italic leading-snug ${headlineFontClass}`,
							style: { color: isLight ? "#0F172A" : "#F8FAFC" },
							children: [
								"\"",
								quoteBody,
								"\""
							]
						}), quoteAuthor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[8px] sm:text-[8.5px] font-mono font-bold uppercase block text-right tracking-wider",
							style: { color: primaryColor },
							children: ["— ", quoteAuthor]
						})]
					})]
				})
			}, idx);
		}
		const tableLines = chunk.trim().split("\n");
		if (tableLines.length >= 2 && tableLines[0]?.trim().startsWith("|") && tableLines[0]?.trim().endsWith("|")) {
			const headerLine = tableLines[0];
			const separatorIndex = tableLines.findIndex((l, i) => i > 0 && /^[|:\s-]+$/.test(l.trim()));
			const headers = headerLine.split("|").map((h) => h.trim()).filter(Boolean);
			const rowLines = tableLines.slice(separatorIndex > 0 ? separatorIndex + 1 : 1).filter((l) => l.trim().startsWith("|"));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-2.5 rounded-xl border-2 overflow-hidden shadow-xs break-inside-avoid break-inside-avoid-column text-[9px] sm:text-[9.5px]",
				style: {
					borderColor: `${primaryColor}40`,
					backgroundColor: cardBg
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: `w-full text-left border-collapse ${bodyFontClass}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						style: {
							backgroundColor: `${primaryColor}20`,
							color: primaryColor
						},
						children: headers.map((h, hIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: `p-1.5 sm:p-2 font-black uppercase text-[8px] sm:text-[8.5px] tracking-wider border-b border-current/20 ${headlineFontClass}`,
							children: h
						}, hIdx))
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rowLines.map((row, rIdx) => {
						const cells = row.split("|").map((c) => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-b last:border-0 border-slate-200/20",
							style: {
								backgroundColor: rIdx % 2 === 0 ? "transparent" : isLight ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)",
								color: articleBodyColor
							},
							children: cells.map((cell, cIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-1.5 sm:p-2 font-medium leading-tight",
								children: renderInlineFormatted(cell)
							}, cIdx))
						}, rIdx);
					}) })]
				})
			}, idx);
		}
		if (chunk.startsWith("**") && chunk.includes("**\n")) {
			const parts = chunk.split("**\n");
			const title = (parts[0] ?? "").replace(/\*\*/g, "");
			const body = parts.slice(1).join("\n");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-1.5 break-inside-avoid break-inside-avoid-column",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: `text-[10.5px] sm:text-[11.5px] font-black uppercase mb-0.5 ${headlineFontClass}`,
					style: { color: primaryColor },
					children: isMobile ? title : `// ${title}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `${bodyTextSizeClass} text-left leading-relaxed ${bodyFontClass}`,
					style: { color: articleBodyColor },
					children: renderInlineFormatted(body)
				})]
			}, idx);
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `${bodyTextSizeClass} text-left leading-relaxed ${bodyFontClass} break-inside-avoid break-inside-avoid-column ${isFirstOverall && pagePart === 1 ? "first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:leading-none" : ""}`,
			style: { color: articleBodyColor },
			children: renderInlineFormatted(chunk)
		}, idx);
	};
	const hasPullQuote = Boolean(article.pullQuotes && article.pullQuotes.length > 0 && article.pullQuotes[0]?.trim());
	const hasTakeaways = Boolean(article.keyTakeaways && article.keyTakeaways.length > 0 && article.keyTakeaways.some((t) => t.trim()));
	const hasReferences = Boolean(article.references && article.references.trim());
	const showQuoteOnThisPage = hasPullQuote && isLastPage;
	const showTakeawaysOnThisPage = hasTakeaways && isLastPage;
	const showReferencesOnThisPage = hasReferences && isLastPage;
	const isClosingImageExplicitlyDisabled = article.showClosingImage === false;
	const heroImg = article.heroImage || "";
	const configuredClosingImage = (article.secondaryImage && article.secondaryImage !== heroImg ? article.secondaryImage : "") || (article.bottomSpotlightImage && article.bottomSpotlightImage !== heroImg ? article.bottomSpotlightImage : "");
	const showClosingImage = !isClosingImageExplicitlyDisabled && !showSecondaryImageTop && (isMultiPage ? isLastPage : totalPageChars < 1400 && Boolean(configuredClosingImage));
	const getContextualSpotlightImage = () => {
		const hero = article.heroImage || "";
		if (article.secondaryImage && article.secondaryImage !== hero) return article.secondaryImage;
		if (article.bottomSpotlightImage && article.bottomSpotlightImage !== hero) return article.bottomSpotlightImage;
		const textContent = (article.title + " " + (article.content || "")).toLowerCase();
		for (const p of [
			{
				test: /\b(remo|rower|erg|cardio|aerób|nordic)\b/,
				url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
			},
			{
				test: /\b(caloria|metab|gasto|massa|gordura|bioquím|nutri)\b/,
				url: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80"
			},
			{
				test: /\b(kettlebell|swing|mace|balístico|força)\b/,
				url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
			},
			{
				test: /\b(mulher|femin|deadlift|levantar|terra)\b/,
				url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
			},
			{
				test: /\b(mente|mindset|foco|disciplina|resiliência)\b/,
				url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
			}
		]) if (p.test.test(textContent) && p.url !== hero) return p.url;
		const fallbacks = [
			"https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
			"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
		];
		return fallbacks.find((u) => u !== hero) || fallbacks[0] || "";
	};
	const getClosingPhotoUrl = () => {
		if (configuredClosingImage) return configuredClosingImage;
		if (isMultiPage && !isClosingImageExplicitlyDisabled) return getContextualSpotlightImage() || "";
		return "";
	};
	const finalClosingPhotoUrl = getClosingPhotoUrl();
	const hasBottomFeature = showClosingImage && Boolean(finalClosingPhotoUrl);
	getContextualSpotlightImage();
	const spotlightCaptionToUse = article.bottomSpotlightCaption || article.pullQuotes?.[0] || article.subtitle || "Protocolo de alto impacto • Laboratório de Performance Montanha.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none ${isPrintMode ? "print-page" : isMobile ? "shadow-2xl rounded-lg" : "shadow-2xl rounded-sm"}`,
		style: {
			aspectRatio: isMobile ? "9 / 16" : "210 / 297",
			backgroundColor: bgColor,
			color: textColor
		},
		children: [
			article.backgroundImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: article.backgroundImage,
					alt: "",
					className: "w-full h-full object-cover filter contrast-125 grayscale",
					style: { opacity: (article.backgroundOpacity ?? 5) / 100 }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70 pointer-events-none" })]
			}) : theme.id === "midnight-fintech" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { backgroundImage: `
              radial-gradient(ellipse 65% 45% at 85% 15%, rgba(83, 73, 126, 0.28), transparent 60%),
              radial-gradient(ellipse 50% 40% at 15% 85%, rgba(56, 152, 236, 0.12), transparent 55%)
            ` }
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-b-2 pb-1.5 flex items-center justify-between text-[10px] font-mono shrink-0",
				style: { borderColor: primaryColor },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-black uppercase tracking-widest",
							style: { color: primaryColor },
							children: brandTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "opacity-40",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] font-mono font-black px-2 py-0.5 rounded uppercase",
							style: {
								backgroundColor: primaryColor,
								color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
							},
							children: article.category || "MONTANHA DOSSIER"
						}),
						isMultiPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[8.5px] font-bold opacity-75 hidden sm:inline",
							children: [
								"// PARTE ",
								pagePart,
								" DE ",
								totalPagesForArticle
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-bold uppercase",
					style: { color: textMutedColor },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "w-3 h-3",
									style: { color: primaryColor }
								}),
								article.estimatedReadTime,
								" MIN DE LEITURA"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.date })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 flex-1 flex flex-col justify-between my-2 overflow-hidden",
				children: isProductAd ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col justify-between space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center pt-1 border-b pb-2",
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[9px] font-mono font-black tracking-[0.3em] uppercase block mb-1",
								style: { color: primaryColor },
								children: [
									"OFFICIAL GEAR PROMOTION // ",
									project.title,
									" LAB"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: `text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none drop-shadow-md ${headlineFontClass}`,
								style: { color: textColor },
								children: promo?.slogan || "FORGED IN IRON // BUILT FOR WAR"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 min-h-[160px] sm:min-h-[190px] rounded-lg overflow-hidden border-2 shadow-xl group",
							style: { borderColor: `${primaryColor}60` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: promo?.productImage || article.heroImage,
									alt: promo?.productName || article.title,
									className: "w-full h-full object-cover object-center filter contrast-125 brightness-95"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-3 right-3 px-3 py-1.5 rounded-sm shadow-lg font-mono font-black text-[10px] sm:text-xs uppercase tracking-tight flex items-center gap-1.5",
									style: {
										backgroundColor: primaryColor,
										color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: promo?.promoBadgeText || "SPECIAL OFFER // 15% OFF" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-3 inset-x-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `text-xl sm:text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg ${headlineFontClass}`,
										children: promo?.productName || article.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-amber-200/90 font-medium max-w-lg mt-0.5 leading-snug drop-shadow",
										children: promo?.productSubtitle || article.subtitle
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
							children: (promo?.specBadges || [
								{
									title: "GRAVITY CAST",
									subtitle: "Single pour ductile iron"
								},
								{
									title: "POWDER COAT",
									subtitle: "Matte textured grip"
								},
								{
									title: "CALIBRATED",
									subtitle: "+/- 0.5% precision weight"
								},
								{
									title: "LIFETIME SPEC",
									subtitle: "Indestructible warranty"
								}
							]).map((spec, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 rounded text-center border",
								style: {
									backgroundColor: cardBg,
									borderColor: `${primaryColor}40`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-mono font-black block uppercase",
									style: { color: primaryColor },
									children: spec.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-mono leading-none",
									style: { color: textMutedColor },
									children: spec.subtitle
								})]
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border-2",
							style: {
								backgroundColor: cardBg,
								borderColor: primaryColor
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-0.5 text-center sm:text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[8.5px] font-mono uppercase block",
										style: { color: textMutedColor },
										children: "CUPOM EXCLUSIVO PARA LEITORES DA REVISTA:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-block px-3 py-1 rounded font-mono font-black text-sm tracking-widest uppercase border",
										style: {
											backgroundColor: bgColor,
											color: primaryColor,
											borderColor: primaryColor
										},
										children: ["CODE: ", promo?.couponCode || "MONTANHA15"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[9px] font-mono mt-0.5",
										style: { color: textMutedColor },
										children: ["ACESSE: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold",
											style: { color: textColor },
											children: promo?.ctaUrl || "WWW.MONTANHAIRON.COM.BR"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 p-2 rounded border",
								style: {
									backgroundColor: bgColor,
									borderColor: `${primaryColor}40`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-white p-1 rounded",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-8 h-8 text-black" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[8px] font-mono text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-black block uppercase leading-none",
										style: { color: primaryColor },
										children: "SCAN TO SHOP"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[7px] leading-tight",
										style: { color: textMutedColor },
										children: "ENTREGA DIRETA EM TODO O BRASIL"
									})]
								})]
							})]
						})
					]
				}) : isFacilitySpotlight ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col justify-between space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 h-28 sm:h-36",
						children: (facility?.galleryPhotos && facility.galleryPhotos.length > 0 ? facility.galleryPhotos : [
							"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
							"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
							"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
						]).map((photoUrl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-md overflow-hidden border group",
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photoUrl,
								alt: `Facility View ${idx + 1}`,
								className: "w-full h-full object-cover filter contrast-125 brightness-90"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-1 left-1 px-1 py-0.5 rounded text-[7px] font-mono font-bold uppercase",
								style: {
									backgroundColor: primaryColor,
									color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
								},
								children: ["SPOTLIGHT #", idx + 1]
							})]
						}, idx))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4 p-3 rounded-lg border space-y-2 flex flex-col justify-between",
							style: {
								backgroundColor: cardBg,
								borderColor: `${primaryColor}40`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-[9px] font-mono font-black uppercase tracking-widest pb-1 border-b",
										style: {
											color: primaryColor,
											borderColor: `${primaryColor}40`
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FACILITY SPEC SHEET" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[7.5px] font-mono uppercase block",
										style: { color: textMutedColor },
										children: "CENTRO DE TREINAMENTO:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: `text-xs font-black uppercase ${headlineFontClass}`,
										style: { color: textColor },
										children: facility?.facilityName || "MONTANHA PERFORMANCE LAB"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[7.5px] font-mono uppercase block",
										style: { color: textMutedColor },
										children: "HEAD COACH & DIRETOR:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono font-bold block",
										style: { color: primaryColor },
										children: facility?.headCoach || "COACH MONTANHA"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[7.5px] font-mono uppercase block",
										style: { color: textMutedColor },
										children: "LOCALIZAÇÃO / BASE:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-mono block",
										style: { color: textColor },
										children: facility?.location || "SÃO PAULO // SP"
									})] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 rounded border",
								style: {
									backgroundColor: bgColor,
									borderColor: `${primaryColor}30`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[8.5px] font-mono italic leading-tight",
									style: { color: primaryColor },
									children: [
										"\"",
										facility?.anchoredQuote || "O ambiente certo torna a mediocridade insuportável.",
										"\""
									]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-8 flex flex-col justify-between space-y-2 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: `text-lg sm:text-xl font-black uppercase tracking-tight leading-tight mb-2 ${headlineFontClass}`,
								style: { color: textColor },
								children: article.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: pageChunks.map((chunk, idx) => renderSingleChunk(chunk, idx, idx === 0))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 border-t flex items-center justify-between text-[9px] font-mono",
								style: {
									borderColor: `${primaryColor}40`,
									color: textMutedColor
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MÉTODOS: KETTLEBELLS • STEEL MACES • CLUBBELLS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									style: { color: primaryColor },
									children: "LAB CODE // 01"
								})]
							})]
						})]
					})]
				}) : isWorkout ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col justify-between space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b pb-1.5",
								style: { borderColor: `${primaryColor}40` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
										className: "w-4 h-4",
										style: { color: primaryColor }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: `text-base sm:text-lg font-black uppercase tracking-tight ${headlineFontClass}`,
										style: { color: textColor },
										children: protocol?.workoutTitle || article.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-2 py-0.5 rounded font-mono font-black text-[9px] uppercase border",
									style: {
										backgroundColor: `${primaryColor}20`,
										color: primaryColor,
										borderColor: primaryColor
									},
									children: "HIGH DENSITY PROTOCOL"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 rounded-lg border flex items-center gap-3 text-xs",
								style: {
									backgroundColor: cardBg,
									borderColor: `${primaryColor}40`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-2 py-1 rounded font-mono font-black text-[9px] uppercase shrink-0",
									style: {
										backgroundColor: primaryColor,
										color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
									},
									children: "FASE 0 // WARM-UP"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[10px] leading-snug ${bodyFontClass}`,
									style: { color: textMutedColor },
									children: protocol?.warmupPrep || "MOBILIDADE & ATIVAÇÃO (5 MIN): T-spine bridges, halos com kettlebell leve e cócoras ativas."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1 overflow-hidden",
							children: (protocol?.exercises || [
								{
									code: "A1",
									name: "DOUBLE KETTLEBELL CLEAN & PRESS",
									setsReps: "5 SÉRIES × 5 REPS",
									tempoRest: "TEMPO: 20X1 // REST: 60s",
									keyPoints: "Trave o abdômen, explosão de quadril no clean e trava completa no lockout."
								},
								{
									code: "A2",
									name: "HEAVY STEEL MACE 360",
									setsReps: "5 SÉRIES × 10 REPS / LADO",
									tempoRest: "TEMPO: CONTÍNUO // REST: 60s",
									keyPoints: "Cotovelos fechados, deixe o mace passar rente à nuca e puxe com dorsal."
								},
								{
									code: "B1",
									name: "BULGARIAN BAG ROTATIONAL SPIN",
									setsReps: "4 SÉRIES × 8 REPS / LADO",
									tempoRest: "TEMPO: DINÂMICO // REST: 45s",
									keyPoints: "Transfira o peso de uma perna para a outra sem perder a linha da coluna."
								},
								{
									code: "B2",
									name: "FARMER CARRY COM KETTLEBELLS PESADOS",
									setsReps: "4 SÉRIES × 40 METROS",
									tempoRest: "TEMPO: PASSOS CONTROLADOS // REST: 90s",
									keyPoints: "Postura ereta militar, escápulas encaixadas e pegada esmagando a alça."
								}
							]).map((ex, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-lg border flex flex-col justify-between shadow-xs",
								style: {
									backgroundColor: cardBg,
									borderColor: `${primaryColor}40`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-black text-xs px-1.5 py-0.2 rounded border",
											style: {
												backgroundColor: `${primaryColor}20`,
												color: primaryColor,
												borderColor: primaryColor
											},
											children: ex.code
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-black text-[9px] uppercase",
											style: { color: primaryColor },
											children: ex.setsReps
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: `font-black text-xs uppercase leading-tight mt-1 ${headlineFontClass}`,
										style: { color: textColor },
										children: ex.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[8px] font-mono block mt-0.5",
										style: { color: textMutedColor },
										children: ex.tempoRest
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[9.5px] leading-tight mt-1.5 pt-1.5 border-t text-left ${bodyFontClass}`,
									style: {
										borderColor: `${primaryColor}20`,
										color: isLight ? "#334155" : "#94A3B8"
									},
									children: ex.keyPoints
								})]
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2.5 rounded-lg border flex items-center justify-between gap-3 shadow-sm",
							style: {
								backgroundColor: cardBg,
								borderColor: primaryColor
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono font-black text-[8px] uppercase block",
									style: { color: primaryColor },
									children: "BLOCO FINALIZADOR // METABOLIC BURN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[10px] truncate ${bodyFontClass}`,
									style: { color: textColor },
									children: protocol?.finisher || "FINISHER: 100 Kettlebell Snatches for time (16kg/24kg). Máximo esforço sem pausas."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 px-2 py-1 rounded border shrink-0",
								style: {
									backgroundColor: bgColor,
									borderColor: `${primaryColor}40`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-white p-0.5 rounded",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-6 h-6 text-black" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[7.5px] font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-black block uppercase leading-none",
										style: { color: primaryColor },
										children: "ASSISTIR VÍDEO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "leading-tight",
										style: { color: textMutedColor },
										children: "SCAN // DEMO 4K"
									})]
								})]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col justify-start space-y-2.5 overflow-hidden min-h-0",
					children: [
						isFirstPage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: `text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-[0.95] mb-1 ${headlineFontClass}`,
									style: { color: textColor },
									children: article.title
								}),
								article.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-[11px] sm:text-xs font-semibold leading-snug mb-1.5 ${bodyFontClass}`,
									style: { color: primaryColor },
									children: article.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-1 border-t text-[8.5px] sm:text-[9px] font-mono",
									style: {
										borderColor: `${primaryColor}30`,
										color: textMutedColor
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											article.authorPhoto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: article.authorPhoto,
												alt: article.author,
												className: "w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border",
												style: { borderColor: primaryColor }
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
												className: "w-3.5 h-3.5",
												style: { color: primaryColor }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold uppercase",
												style: { color: textColor },
												children: article.author
											}),
											article.authorBio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["• ", article.authorBio] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold uppercase",
										style: { color: primaryColor },
										children: [brandTitle, " EDITORIAL"]
									})]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 flex items-center justify-between border-b pb-1 text-xs font-mono font-black",
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "uppercase text-amber-500",
								children: [
									"// ",
									article.title,
									" (",
									isLastPage ? `PARTE ${pagePart} // CONCLUSÃO` : `PARTE ${pagePart} // CONTINUAÇÃO`,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] opacity-75 font-semibold uppercase",
								children: article.author
							})]
						}),
						showHeroImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative w-full rounded-md overflow-hidden border shrink-0 shadow-md ${heroLayout === "contain" ? "h-56 sm:h-64 md:h-72 bg-black/60" : heroSize === "compact" ? "h-36 sm:h-44 md:h-48" : heroSize === "medium" ? "h-52 sm:h-60 md:h-68" : "h-64 sm:h-72 md:h-80 lg:h-96"}`,
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: article.heroImage,
								alt: article.title,
								className: `w-full h-full filter contrast-110 brightness-95 ${heroLayout === "contain" ? "object-contain" : "object-cover"}`,
								style: { objectPosition: article.heroImagePosition || "50% 50%" }
							}), article.heroImageCaption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-1 right-2 bg-black/80 px-2 py-0.5 rounded text-[7.5px] font-mono text-white",
								children: article.heroImageCaption
							})]
						}),
						showSecondaryImageTop && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full h-40 sm:h-48 rounded-md overflow-hidden border shrink-0 shadow-xs",
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: article.secondaryImage,
								alt: "Foto Secundária",
								className: "w-full h-full object-cover filter contrast-110 brightness-95",
								style: { objectPosition: article.secondaryImagePosition || "50% 50%" }
							}), article.secondaryImageCaption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-1 right-2 bg-black/80 px-2 py-0.5 rounded text-[7.5px] font-mono text-white",
								children: article.secondaryImageCaption
							})]
						}),
						isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex flex-col min-h-0 space-y-2.5 text-left ${bodyFontClass} ${hasBottomFeature ? "shrink-0 max-h-[56%]" : "flex-1"}`,
							children: pageChunks.map((chunk, idx) => renderSingleChunk(chunk, idx, idx === 0))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `grid grid-cols-1 sm:grid-cols-2 gap-5 text-left min-h-0 ${bodyFontClass} ${hasBottomFeature ? "shrink-0 max-h-[52%]" : "flex-1"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col min-h-0 space-y-2",
								children: col1Chunks.map((chunk, idx) => renderSingleChunk(chunk, idx, idx === 0))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col min-h-0 space-y-2",
								children: col2Chunks.map((chunk, idx) => renderSingleChunk(chunk, idx + col1Chunks.length, false))
							})]
						}),
						hasBottomFeature && finalClosingPhotoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative w-full rounded-md overflow-hidden border shrink-0 shadow-md group mt-2 flex-1 ${isVeryDenseText ? "min-h-[140px] sm:min-h-[160px]" : isDenseText ? "min-h-[160px] sm:min-h-[190px]" : "min-h-[180px] sm:min-h-[220px] md:min-h-[260px]"}`,
							style: { borderColor: `${primaryColor}40` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: finalClosingPhotoUrl,
								alt: "Foto Editorial de Fechamento",
								className: "w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700",
								style: { objectPosition: article.secondaryImagePosition || article.bottomSpotlightPosition || "50% 50%" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-black/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/15 flex items-center justify-between shadow-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[7.5px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm",
											style: {
												backgroundColor: primaryColor,
												color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000"
											},
											children: "// REGISTRO DE PERFORMANCE"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[8px] font-mono uppercase text-slate-300 hidden sm:inline",
											children: ["• ", article.category]
										})]
									}), (article.secondaryImageCaption || article.bottomSpotlightCaption || spotlightCaptionToUse) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[8.5px] font-mono italic text-slate-100 line-clamp-1 max-w-[65%] text-right font-medium",
										children: [
											"\"",
											article.secondaryImageCaption || article.bottomSpotlightCaption || spotlightCaptionToUse,
											"\""
										]
									})]
								})
							})]
						}),
						(showQuoteOnThisPage || showTakeawaysOnThisPage || showReferencesOnThisPage) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 space-y-2 pt-1 border-t",
							style: { borderColor: `${primaryColor}30` },
							children: [
								showQuoteOnThisPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-lg border shadow-xs flex items-center gap-3",
									style: {
										backgroundColor: cardBg,
										borderColor: primaryColor
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										className: "w-5 h-5 shrink-0",
										style: { color: primaryColor }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: `text-[11px] sm:text-xs font-black italic leading-snug ${headlineFontClass}`,
											style: { color: primaryColor },
											children: [
												"\"",
												article.pullQuotes[0],
												"\""
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[7.5px] font-mono uppercase block text-right mt-0.5",
											style: { color: textMutedColor },
											children: ["— ", article.author]
										})]
									})]
								}),
								showTakeawaysOnThisPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-2",
									style: {
										backgroundColor: cardBg,
										borderColor: `${primaryColor}40`
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[8.5px] font-mono font-black uppercase shrink-0",
										style: { color: primaryColor },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PONTOS-CHAVE:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: `text-[9px] flex flex-wrap gap-x-3 gap-y-1 ${bodyFontClass}`,
										style: { color: isLight ? articleBodyColor : "#CBD5E1" },
										children: article.keyTakeaways.slice(0, 3).map((takeaway, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-1 leading-tight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: { color: primaryColor },
												children: "▸"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: takeaway })]
										}, idx))
									})]
								}),
								showReferencesOnThisPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2 rounded-lg border text-[8px] sm:text-[8.5px] font-mono leading-tight space-y-1",
									style: {
										backgroundColor: cardBg,
										borderColor: `${primaryColor}30`,
										color: textMutedColor
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 font-bold uppercase",
										style: { color: primaryColor },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[7px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-500 border border-amber-500/30",
											children: "★ FONTES"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REFERÊNCIAS & LITERATURA CIENTÍFICA:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-0.5 max-h-16 overflow-y-auto",
										children: article.references.split("\n").map((line) => line.trim()).filter(Boolean).filter((line) => !line.match(/^\/\/\s*REFER[ÊE]NCIAS/i)).map((refLine, rIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "opacity-90 leading-snug",
											children: refLine
										}, rIdx))
									})]
								})
							]
						})
					]
				})
			}),
			isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}30`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: brandTitle }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["pág ", formatPageNumber(pageNumber)] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-1.5 flex items-center justify-between text-[9px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}40`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						project.title,
						" • ",
						project.coverConfig?.editionNumber || project.editionNumber ? `ED. #${project.coverConfig?.editionNumber || project.editionNumber}` : "ED. #01"
					] }), isMultiPage && !isLastPage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-amber-500 font-black animate-pulse",
						children: [
							"(CONTINUA NA PÁGINA ",
							formatPageNumber(pageNumber + 1),
							" ▸)"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-2 py-0.5 rounded border font-bold",
					style: {
						backgroundColor: cardBg,
						color: primaryColor,
						borderColor: `${primaryColor}60`
					},
					children: ["PÁGINA ", formatPageNumber(pageNumber)]
				})]
			})
		]
	});
};
var BackCoverPage = ({ project, theme, pageNumber, isPrintMode = false, layoutMode = "print" }) => {
	const { backCoverConfig } = project;
	const isMobile = (layoutMode || project.layoutMode || "print") === "mobile";
	const headlineFontClass = getHeadlineFontClass(project.fontConfig?.headlineFont);
	const bodyFontClass = getBodyFontClass(project.fontConfig?.bodyFont);
	const isLight = Boolean(theme.isLight);
	const primaryColor = theme.primaryColor;
	theme.accentColor;
	const textColor = theme.textColor;
	const bgColor = isLight ? theme.bgLight : theme.bgDark;
	const textMutedColor = isLight ? "#475569" : "#94A3B8";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `magazine-page relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-7 select-none break-inside-avoid ${isPrintMode ? "print-page" : isMobile ? "shadow-2xl rounded-lg" : "shadow-2xl rounded-sm"}`,
		style: {
			aspectRatio: isMobile ? "9 / 16" : "210 / 297",
			backgroundColor: bgColor,
			color: textColor,
			breakInside: "avoid",
			pageBreakInside: "avoid"
		},
		children: [
			backCoverConfig.backgroundImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: backCoverConfig.backgroundImage,
					alt: "Contracapa",
					className: "w-full h-full object-cover object-center filter contrast-125"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/85" })]
			}) : theme.id === "midnight-fintech" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: { backgroundImage: `
              radial-gradient(ellipse 65% 55% at 50% 30%, rgba(83, 73, 126, 0.35), transparent 60%),
              radial-gradient(ellipse 70% 35% at 50% 100%, rgba(115, 23, 213, 0.22), transparent 65%)
            ` }
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-b pb-2.5 flex items-center justify-between shrink-0",
				style: { borderColor: `${primaryColor}40` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "w-4 h-4",
						style: { color: primaryColor }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `font-black tracking-widest text-sm uppercase ${headlineFontClass}`,
						style: { color: primaryColor },
						children: project.coverConfig.mastheadText
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold tracking-widest uppercase font-mono",
					style: { color: textMutedColor },
					children: "CONTRACAPA OFICIAL"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative z-10 ${isMobile ? "w-full" : "max-w-lg"} mx-auto text-center my-auto py-2`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2.5 border",
						style: {
							backgroundColor: `${primaryColor}20`,
							color: primaryColor,
							borderColor: `${primaryColor}50`
						},
						children: "MANUAL DO ALUNO & LEITOR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: `${isMobile ? "text-2xl sm:text-3xl" : "text-2xl sm:text-3xl md:text-4xl"} font-black uppercase tracking-tight leading-tight mb-2.5 drop-shadow-md ${headlineFontClass}`,
						style: { color: backCoverConfig.backgroundImage ? "#FFFFFF" : textColor },
						children: backCoverConfig.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${isMobile ? "text-xs sm:text-sm" : "text-xs sm:text-sm"} font-semibold mb-3 leading-relaxed ${bodyFontClass}`,
						style: { color: primaryColor },
						children: backCoverConfig.subheadline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `text-xs leading-relaxed ${isMobile ? "w-full" : "max-w-md"} mx-auto italic mb-4 ${bodyFontClass}`,
						style: { color: backCoverConfig.backgroundImage ? "#CBD5E1" : textMutedColor },
						children: [
							"\"",
							backCoverConfig.message,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${isMobile ? "w-full" : "inline-flex"} flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-xl border cursor-pointer transition-transform hover:scale-[1.02]`,
						style: {
							backgroundColor: primaryColor,
							color: isLight ? isColorLight(primaryColor) ? "#000000" : "#FFFFFF" : "#000000",
							borderColor: "#000000"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: backCoverConfig.ctaText }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-4 h-4" })]
					})
				]
			}),
			isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase shrink-0",
				style: {
					borderColor: `${primaryColor}30`,
					color: textMutedColor
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["pág ", formatPageNumber(pageNumber)] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t pt-2.5 flex flex-row items-center justify-between gap-3 text-xs shrink-0",
				style: { borderColor: `${primaryColor}40` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-xs font-mono",
					children: [
						backCoverConfig.socialHandles?.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 font-bold text-[11px]",
							style: { color: primaryColor },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-3.5 h-3.5" }), backCoverConfig.socialHandles.instagram]
						}),
						backCoverConfig.socialHandles?.youtube && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 font-bold text-[11px]",
							style: { color: primaryColor },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-3.5 h-3.5" }), backCoverConfig.socialHandles.youtube]
						}),
						backCoverConfig.socialHandles?.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 font-bold text-[11px] hidden md:inline-flex",
							style: { color: primaryColor },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5" }), backCoverConfig.socialHandles.email]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right text-[9px] font-mono leading-tight",
						style: { color: textMutedColor },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-bold uppercase",
							style: { color: primaryColor },
							children: [project.title, " PUBLISHING"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ALL RIGHTS RESERVED"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white p-1 rounded-sm border border-black shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-5 h-5 text-black" })
					})]
				})]
			})
		]
	});
};
/**
* Retorna o array de páginas ativas da revista em ordem editorial,
* permitindo renderização idêntica no Viewer, no Modal de Pré-visualização
* e no motor de exportação direta para PDF.
*/
function getActiveMagazinePages({ project, theme, layoutMode = "print" }) {
	const visibility = {
		showCover: true,
		showEditorLetter: true,
		showContributors: false,
		showTableOfContents: true,
		showBackCover: true,
		...project.pageVisibility
	};
	const activePages = [];
	if (visibility.showCover) activePages.push({
		id: "cover",
		title: "Capa Principal",
		render: (_, isPrint, customMode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPage, {
			project,
			theme,
			isPrintMode: isPrint ?? false,
			layoutMode: customMode || layoutMode
		})
	});
	if (visibility.showEditorLetter) activePages.push({
		id: "editor-letter",
		title: "Carta do Editor",
		render: (pNum, isPrint, customMode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorLetterPage, {
			project,
			theme,
			pageNumber: pNum,
			isPrintMode: isPrint ?? false,
			layoutMode: customMode || layoutMode
		})
	});
	if (visibility.showContributors) activePages.push({
		id: "contributors",
		title: "Colaboradores",
		render: (pNum, isPrint, customMode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributorsPage, {
			project,
			theme,
			pageNumber: pNum,
			isPrintMode: isPrint ?? false,
			layoutMode: customMode || layoutMode
		})
	});
	if (visibility.showTableOfContents) activePages.push({
		id: "toc",
		title: "Sumário / Índice",
		render: (pNum, isPrint, customMode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorialPage, {
			project,
			theme,
			pageNumber: pNum,
			isPrintMode: isPrint ?? false,
			layoutMode: customMode || layoutMode
		})
	});
	project.articles.filter((art) => art.enabled !== false).forEach((art) => {
		const span = getEffectiveArticlePageSpan(art);
		for (let part = 1; part <= span; part++) activePages.push({
			id: span > 1 ? `${art.id}-part${part}` : art.id,
			title: span > 1 ? `${art.title} (Parte ${part}/${span})` : art.title,
			render: (pNum, isPrint, customMode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleSpread, {
				article: art,
				project,
				theme,
				pageNumber: pNum,
				isPrintMode: isPrint ?? false,
				pagePart: part,
				totalPagesForArticle: span,
				layoutMode: customMode || layoutMode
			}, `${art.id}-part${part}`)
		});
	});
	if (visibility.showBackCover) activePages.push({
		id: "back-cover",
		title: "Contracapa",
		render: (pNum, isPrint, customMode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackCoverPage, {
			project,
			theme,
			pageNumber: pNum,
			isPrintMode: isPrint ?? false,
			layoutMode: customMode || layoutMode
		})
	});
	return activePages;
}
var MagazineViewer = ({ project, theme, onOpenExportModal, onOpenArticleEditor, layoutMode: propLayoutMode, onLayoutModeChange }) => {
	const [currentPageIndex, setCurrentPageIndex] = (0, import_react.useState)(0);
	const [viewMode, setViewMode] = (0, import_react.useState)("single");
	const [zoomLevel, setZoomLevel] = (0, import_react.useState)(100);
	const [layoutMode, setLayoutMode] = (0, import_react.useState)(propLayoutMode || project.layoutMode || "print");
	(0, import_react.useEffect)(() => {
		if (propLayoutMode && propLayoutMode !== layoutMode) setLayoutMode(propLayoutMode);
	}, [propLayoutMode]);
	const handleLayoutModeToggle = (mode) => {
		setLayoutMode(mode);
		if (onLayoutModeChange) onLayoutModeChange(mode);
	};
	const activePages = getActiveMagazinePages({
		project,
		theme,
		layoutMode
	});
	const totalPages = Math.max(1, activePages.length);
	(0, import_react.useEffect)(() => {
		if (currentPageIndex >= totalPages) setCurrentPageIndex(Math.max(0, totalPages - 1));
	}, [totalPages, currentPageIndex]);
	const renderPageByIndex = (index, isPrint = false) => {
		if (!activePages[index]) return null;
		return activePages[index].render(index + 1, isPrint);
	};
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "ArrowRight") nextPage();
			else if (e.key === "ArrowLeft") prevPage();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		currentPageIndex,
		viewMode,
		totalPages
	]);
	const nextPage = () => {
		if (viewMode === "spread") if (currentPageIndex === 0) setCurrentPageIndex(1);
		else setCurrentPageIndex((prev) => Math.min(prev + 2, totalPages - 1));
		else setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
	};
	const prevPage = () => {
		if (viewMode === "spread") if (currentPageIndex <= 1) setCurrentPageIndex(0);
		else setCurrentPageIndex((prev) => Math.max(prev - 2, 0));
		else setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-app-viewer flex flex-col h-full rounded-xl overflow-hidden border-2 shadow-2xl transition-colors font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-viewer-toolbar px-3 sm:px-4 py-2 border-b-2 flex items-center justify-between gap-3 overflow-x-auto custom-scrollbar flex-nowrap transition-colors",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center theme-app-card-subtle p-0.5 rounded-lg border shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setViewMode("single"),
									className: `flex items-center gap-1.5 px-2.5 py-1 text-xs font-black rounded-md transition-all cursor-pointer ${viewMode === "single" ? "bg-amber-400 text-black border border-black shadow-xs" : "opacity-70 hover:opacity-100"}`,
									title: "Visualizar Página Única",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Página Única" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setViewMode("spread"),
									className: `flex items-center gap-1.5 px-2.5 py-1 text-xs font-black rounded-md transition-all cursor-pointer ${viewMode === "spread" ? "bg-amber-400 text-black border border-black shadow-xs" : "opacity-70 hover:opacity-100"}`,
									title: "Visualizar Revista Aberta (Dupla)",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Revista Aberta" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setViewMode("grid"),
									className: `flex items-center gap-1.5 px-2.5 py-1 text-xs font-black rounded-md transition-all cursor-pointer ${viewMode === "grid" ? "bg-amber-400 text-black border border-black shadow-xs" : "opacity-70 hover:opacity-100"}`,
									title: "Visualizar Grade de Páginas",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grade" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center theme-app-card-subtle p-0.5 rounded-lg border shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"data-testid": "btn-layout-print",
								onClick: () => handleLayoutModeToggle("print"),
								className: `flex items-center gap-1.5 px-2.5 py-1 text-xs font-black rounded-md transition-all cursor-pointer ${layoutMode === "print" ? "bg-amber-400 text-black border border-black shadow-xs" : "opacity-70 hover:opacity-100"}`,
								title: "Layout Impresso A4 (Clássico)",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Print A4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"data-testid": "btn-layout-mobile",
								onClick: () => handleLayoutModeToggle("mobile"),
								className: `flex items-center gap-1.5 px-2.5 py-1 text-xs font-black rounded-md transition-all cursor-pointer ${layoutMode === "mobile" ? "bg-amber-400 text-black border border-black shadow-xs" : "opacity-70 hover:opacity-100"}`,
								title: "Leitor Digital Mobile (Smartphone)",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile" })]
							})]
						})]
					}),
					viewMode !== "grid" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 sm:gap-2 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: prevPage,
								disabled: currentPageIndex === 0,
								className: "h-8 px-2 border-2 border-current disabled:opacity-30 cursor-pointer",
								title: "Página Anterior",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono font-black px-2.5 py-1 border-2 border-black rounded shadow-xs bg-amber-400 text-black whitespace-nowrap",
								children: viewMode === "spread" && currentPageIndex > 0 && currentPageIndex < totalPages - 1 ? `PÁG ${currentPageIndex + 1} - ${Math.min(currentPageIndex + 2, totalPages)} DE ${totalPages}` : `PÁG ${currentPageIndex + 1} DE ${totalPages}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: nextPage,
								disabled: currentPageIndex >= totalPages - 1,
								className: "h-8 px-2 border-2 border-current disabled:opacity-30 cursor-pointer",
								title: "Próxima Página",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden sm:flex items-center gap-1 theme-app-card-subtle px-2 py-0.5 rounded border text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setZoomLevel((z) => Math.max(70, z - 10)),
									className: "p-1 opacity-70 hover:opacity-100 cursor-pointer",
									title: "Reduzir Zoom",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[11px] font-bold w-9 text-center",
									children: [zoomLevel, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setZoomLevel((z) => Math.min(140, z + 10)),
									className: "p-1 opacity-70 hover:opacity-100 cursor-pointer",
									title: "Aumentar Zoom",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "w-3.5 h-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: onOpenExportModal,
							className: "h-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-xs flex items-center gap-1.5 border-2 border-black cursor-pointer",
							title: "Exportar PDF da Revista",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Exportar PDF"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "theme-app-viewer-canvas flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center custom-scrollbar transition-colors",
				children: viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto py-4",
					children: activePages.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => {
							setCurrentPageIndex(idx);
							setViewMode("single");
						},
						className: `group cursor-pointer rounded-lg overflow-hidden border-2 transition-all transform hover:scale-105 ${currentPageIndex === idx ? "border-amber-400 shadow-2xl ring-4 ring-amber-400" : "border-slate-700 hover:border-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `relative ${layoutMode === "mobile" ? "aspect-[9/16]" : "aspect-[210/297]"} pointer-events-none transform scale-100 origin-top bg-white`,
							children: renderPageByIndex(idx)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-slate-900 text-white p-2 text-center text-xs font-bold border-t border-slate-700",
							children: `${idx + 1}. ${p.title}`
						})]
					}, p.id))
				}) : viewMode === "spread" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center transition-transform duration-200",
					style: {
						transform: `scale(${zoomLevel / 100})`,
						transformOrigin: "center center"
					},
					children: currentPageIndex === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] ${layoutMode === "mobile" ? "aspect-[9/16] rounded-2xl border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.95)]" : "aspect-[210/297] rounded-xs border border-black/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"} shrink-0 overflow-hidden`,
						children: renderPageByIndex(0)
					}) : currentPageIndex === totalPages - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] ${layoutMode === "mobile" ? "aspect-[9/16] rounded-2xl border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.95)]" : "aspect-[210/297] rounded-xs border border-black/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"} shrink-0 overflow-hidden`,
						children: renderPageByIndex(totalPages - 1)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-center justify-center ${layoutMode === "mobile" ? "rounded-2xl border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.95)]" : "rounded-xs border border-black/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"} overflow-hidden`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] ${layoutMode === "mobile" ? "aspect-[9/16]" : "aspect-[210/297]"} shrink-0 border-r border-black/50`,
							children: renderPageByIndex(currentPageIndex)
						}), currentPageIndex + 1 < totalPages && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] ${layoutMode === "mobile" ? "aspect-[9/16]" : "aspect-[210/297]"} shrink-0 border-l border-black/50`,
							children: renderPageByIndex(currentPageIndex + 1)
						})]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center transition-transform duration-200",
					style: {
						transform: `scale(${zoomLevel / 100})`,
						transformOrigin: "center center"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-[calc(100vh-230px)] max-h-[820px] min-h-[500px] ${layoutMode === "mobile" ? "aspect-[9/16] rounded-2xl border-4 border-slate-700 shadow-[0_25px_60px_rgba(0,0,0,0.95)]" : "aspect-[210/297] rounded-xs border border-black/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"} shrink-0 overflow-hidden`,
						children: renderPageByIndex(currentPageIndex)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-viewer-toolbar px-4 py-2 text-[11px] border-t-2 flex items-center justify-between transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold",
						children: [
							"Total de Páginas Ativas na Edição: ",
							totalPages,
							" páginas"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] font-bold",
					children: layoutMode === "mobile" ? "Leitor Digital Smartphone (Proporção 9:16)" : "Proporção Exata A4 (210mm x 297mm)"
				})]
			})
		]
	});
};
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-amber-400 data-[state=unchecked]:bg-slate-300 shadow-inner", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-5 w-5 rounded-full border border-black shadow-md ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-black data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-white") })
}));
Switch.displayName = Switch$1.displayName;
async function callGeminiApi(prompt, _apiKey, systemInstruction) {
	const response = await fetch("/api/ai", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			prompt,
			systemInstruction
		})
	});
	if (!response.ok) {
		const msg = (await response.json().catch(() => ({})))?.error || `Erro na chamada da IA (${response.status})`;
		throw new Error(msg);
	}
	const data = await response.json();
	if (!data?.text) throw new Error("A IA não retornou conteúdo. Tente novamente.");
	return data.text.trim();
}
/**
* Reescrever e aprimorar texto de artigo com tom editorial de revista
*/
async function polishEditorialText(text, tone = "journalistic", apiKey) {
	const system = `Você é um editor-chefe sênior de grandes revistas impressas de prestígio (como Vogue, Men's Health, Iron Man e Time).
Sua missão é aprimorar a leitura e o ritmo do artigo aplicando diagramação tipográfica de revista (negrito, itálico, destaques e subtítulos) mantendo o tom ${tone}.

DIRETRIZES OBRIGATÓRIAS:
1. PRESERVE AO MÁXIMO O TEXTO, O VOCABULÁRIO E A AUTORIA ORIGINAL DO AUTOR. Não faça reescritas radicais, não altere o significado e não apague passagens.
2. APLIQUE FORMATAÇÃO TIPOGRÁFICA RICA DE REVISTA (MARKDOWN):
   - **negrito**: Aplique em palavras-chave estratégicas, conceitos biomecânicos, fisiológicos, musculares ou números de destaque para guiar o olhar do leitor (1 a 2 termos por parágrafo).
   - *itálico*: Aplique em termos técnicos estrangeiros, expressões em inglês ou reflexões subjetivas (ex: *mindset*, *core*, *clean & press*, *deficit*).
   - ==destaque==: Envolva a frase de maior impacto ou tese central em marca-texto ==frase de impacto== (1 ou 2 no máximo no artigo todo).
   - ### SUBTÍTULO: Insira de 1 a 2 subtítulos em caixa alta entre seções do texto para enriquecer a diagramação de revista.
3. Organize o texto em parágrafos bem estruturados com quebras de linha duplas.
4. Responda DIRETAMENTE com o texto formatado em Português do Brasil, sem introduções e sem explicações.`;
	const prompt = `Artigo a ser formatado e polido com tipografia de revista:
"""
${text}
"""`;
	try {
		return await callGeminiApi(prompt, apiKey, system);
	} catch (error) {
		console.warn("AI fallback ativado para polimento:", error);
		return polishTextOfflineFallback(text, tone);
	}
}
/**
* Corrigir erros de digitação, falhas ortográficas e pontuação com IA
* Preserva 100% da autoria, vocabulário e formatação markdown rica original
*/
async function proofreadEditorialText(text, apiKey) {
	const system = `Você é um revisor sênior de texto e preparador de originais de grandes revistas de prestígio (como Vogue, Time e Men's Health).
Sua missão é identificar e CORRIGIR estritamente:
1. Erros de digitação (typos, letras trocadas, duplicadas por engano ou caracteres ausentes).
2. Falhas ortográficas e acentuação gráfica segundo o Novo Acordo Ortográfico da Língua Portuguesa (ex: crases incorretas, falta de acentos agudos, circunflexos e til).
3. Concordância verbal e nominal, regência e pontuação essencial (vírgulas, pontos finais, travessões).
4. Termos de treino, musculação, nutrição ou medidas grafados com erros.

DIRETRIZES OBRIGATÓRIAS E INEGOCIÁVEIS:
1. PRESERVE 100% DA AUTORIA, DO VOCABULÁRIO, DAS PALAVRAS E DO ESTILO DO AUTOR. NÃO reescreva o texto, NÃO mude o tom, NÃO resuma e NÃO adicione novos conteúdos.
2. PRESERVE RIGOROSAMENTE TODAS AS FORMATAÇÕES MARKDOWN E TAGS ESPECIAIS:
   - Manter **negrito**, *itálico*, ==destaque==, <u>sublinhado</u>
   - Manter subtítulos (### SUBTÍTULO)
   - Manter quebras de linha duplas entre parágrafos
   - Manter listas (- item)
   - Manter tags especiais como [QUEBRA_COLUNA] ou [DIVISAO_PAGINAS] intactas se existirem
3. Responda DIRETAMENTE com o texto corrigido em Português do Brasil, sem qualquer introdução, sem notas explicativas e sem aspas.`;
	const prompt = `Texto a ser revisado e corrigido ortograficamente:
"""
${text}
"""`;
	try {
		return await callGeminiApi(prompt, apiKey, system);
	} catch (error) {
		console.warn("AI fallback ativado para correção ortográfica:", error);
		return proofreadTextOfflineFallback(text);
	}
}
/**
* Gerar Títulos e Chapéus de Capa
*/
async function generateEditorialHeadlines(currentTitle, contentSnippet, apiKey) {
	const system = `Você é diretor de arte e redação editorial de revistas de prestígio.
Crie 3 opções de manchetes monumentais para matéria de revista, com subtítulo explicativo de alto impacto e categoria recomendada.
Retorne rigorosamente no formato JSON puro:
[
  { "title": "TÍTULO EM CAIXA ALTA", "subtitle": "Subtítulo atraente de 1 a 2 linhas", "category": "CATEGORIA" }
]`;
	const prompt = `Artigo de referência:
Título atual: "${currentTitle}"
Resumo/Trecho:
"${contentSnippet.slice(0, 800)}"

Gere 3 propostas de títulos e subtítulos de capa.`;
	try {
		const cleanJson = (await callGeminiApi(prompt, apiKey, system)).replace(/```json/g, "").replace(/```/g, "").trim();
		return JSON.parse(cleanJson);
	} catch (error) {
		console.warn("AI fallback para manchetes:", error);
		return [
			{
				title: currentTitle.toUpperCase() || "A NOVA ERA DA ALTA PERFORMANCE",
				subtitle: "Como os protocolos modernos estão redefinindo os limites do corpo e da longevidade.",
				category: "ESPECIAL"
			},
			{
				title: `O GUIA DEFINITIVO: ${currentTitle.toUpperCase() || "TRANSFORMAÇÃO TOTAL"}`,
				subtitle: "Ciência, disciplina e estratégias práticas para atingir o topo do seu potencial.",
				category: "CAPA"
			},
			{
				title: "ALÉM DOS LIMITES CONVENCIONAIS",
				subtitle: "O segredo dos maiores atletas e estrategistas do mundo revelado passo a passo.",
				category: "EXCLUSIVO"
			}
		];
	}
}
/**
* Extrair Pull Quotes (Citações de Destaque) do artigo
*/
async function extractPullQuotes$1(content, apiKey) {
	const system = `Você é um diagramador editorial de revistas. Extraia as 3 frases mais impactantes, poéticas ou inspiradoras do texto para serem usadas como Pull Quotes (citações em destaque tipográfico gigante no meio das colunas).
Retorne no formato JSON: ["Frase 1", "Frase 2", "Frase 3"]`;
	const prompt = `Extraia 3 citações de impacto deste texto:
"""
${content.slice(0, 3e3)}
"""`;
	try {
		const cleanJson = (await callGeminiApi(prompt, apiKey, system)).replace(/```json/g, "").replace(/```/g, "").trim();
		const result = JSON.parse(cleanJson);
		if (Array.isArray(result) && result.length > 0) return result;
		throw new Error("Formato inválido");
	} catch (error) {
		console.warn("AI fallback para pull quotes:", error);
		const sentences = content.split(/[.!?]/).map((s) => s.trim()).filter((s) => s.length > 35 && s.length < 140);
		if (sentences.length >= 2) return sentences.slice(0, 3);
		return [
			"A consistência diária nos detalhes invisíveis constrói os resultados mais visíveis e duradouros.",
			"Quando aliamos ciência aplicada com execução implacável, qualquer barreira se torna degrau.",
			"O domínio do próprio corpo é a fundação para qualquer grande conquista na vida."
		];
	}
}
/**
* Gerar um Artigo Completo a partir de um Tópico
*/
async function generateFullArticleByTopic(topic, category, tone = "motivational", apiKey) {
	const system = `Você é o principal redator de uma revista mensal de renome mundial (como Revista Montanha / Forbes / Men's Health).
Escreva um artigo fascinante e profundo sobre o tema fornecido.
Retorne RIGOROSAMENTE um JSON válido com esta estrutura:
{
  "title": "Título Marcante da Matéria",
  "subtitle": "Subtítulo envolvente e provocativo",
  "content": "Texto com 4 a 6 parágrafos ricos separados por quebra de linha dupla, incluindo subtítulos de seção em negrito",
  "pullQuotes": ["Citação marcante 1", "Citação marcante 2"],
  "keyTakeaways": ["Ponto chave 1", "Ponto chave 2", "Ponto chave 3"],
  "suggestedImagePrompt": "Prompt fotográfico em inglês para IA gerar a capa da matéria (ex: cinematic photography of...)",
  "estimatedReadTime": 4
}`;
	const prompt = `Tema da Matéria: "${topic}"
Categoria: "${category}"
Tom Editorial: "${tone}"

Escreva o artigo completo pronto para diagramação na revista.`;
	try {
		const cleanJson = (await callGeminiApi(prompt, apiKey, system)).replace(/```json/g, "").replace(/```/g, "").trim();
		return JSON.parse(cleanJson);
	} catch (error) {
		console.warn("AI fallback para geração completa:", error);
		return {
			title: `${topic.toUpperCase()}: A REVOLUÇÃO DO MÉTODO`,
			subtitle: "Estratégias avançadas para maximizar resultados e construir um novo padrão de consistência.",
			content: `No cenário contemporâneo de alta performance, entender as engrenagens por trás do tema ${topic} tornou-se o diferencial entre a média e o extraordinário. Diversos estudos recentes comprovam que a metodologia correta é capaz de acelerar conquistas que antes levavam anos.\n\n**O Pilar da Consistência Estruturada**\nNão se trata apenas de esforço bruto, mas sim da inteligência com que alocamos nossa energia diária. Quando o protocolo é ajustado com precisão milimétrica, o corpo e a mente respondem em harmonia, estabelecendo novos platôs de desempenho.\n\n**Execução Sem Desculpas**\nA disciplina não depende de motivação passageira. Ela é um sistema construído sobre hábitos inegociáveis, medições constantes e refinamento contínuo. Quem domina esses princípios assume o controle absoluto da própria trajetória.`,
			pullQuotes: ["A excelência não é um ato isolado, mas o reflexo de cada decisão tomada nos bastidores.", "O protocolo perfeito é aquele executado com disciplina inflexível dia após dia."],
			keyTakeaways: [
				"Alinhe ciência e rotina para acelerar sua evolução.",
				"Monitore indicadores claros de progresso semanal.",
				"Elimine o ruído e foque apenas no que gera 80% do impacto."
			],
			suggestedImagePrompt: `Editorial magazine photography, aesthetic portrait of athlete and fitness master Coach Montanha in luxury dark gym, dramatic moody lighting, gold rim highlights, cinematic 8k`,
			estimatedReadTime: 4
		};
	}
}
/**
* Gerador de prompts de imagem e busca de imagens fotográficas em alta resolução
*/
function getEditorialCuratedImage(category, index = 0) {
	const categoryImages = {
		fitness: [
			"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1400&q=85"
		],
		saude: [
			"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85"
		],
		negocios: [
			"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85"
		],
		tecnologia: [
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85"
		],
		lifestyle: [
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=85"
		],
		default: [
			"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
			"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85"
		]
	};
	const list = categoryImages[category.toLowerCase().trim()] || categoryImages["default"] || [];
	return list[index % list.length] ?? "";
}
/**
* Dicionário inteligente de tradução e enriquecimento editorial fitness
* Converte termos em português para prompts fotográficos profissionais em inglês,
* eliminando estética de anime, 3D e tons preto e branco não intencionais.
*/
function enrichEditorialPrompt(userPrompt, style = "realistic") {
	let prompt = userPrompt.trim();
	for (const [regex, replacement] of [
		[/barra fixa/gi, "strict pull-ups on an overhead gym pull-up bar, defined back and lats muscles"],
		[/kettlebell/gi, "cast iron kettlebell swing, explosive athletic hip drive"],
		[/supino/gi, "barbell bench press on flat bench with heavy weight"],
		[/agachamento/gi, "barbell back squat with Olympic barbell"],
		[/levantamento terra|deadlift/gi, "conventional barbell deadlift off the floor"],
		[/musculação|hipertrofia/gi, "heavy strength weightlifting athletic workout"],
		[/academia/gi, "modern high-end commercial strength training gym with warm natural light"],
		[/treinador|coach/gi, "experienced athletic fitness coach, confident expression, professional athletic wear"],
		[/mulher|atleta feminina/gi, "fit athletic woman, strong muscle tone"],
		[/homem|atleta masculino/gi, "athletic muscular man, defined physique"],
		[/corrida|correndo|sprint/gi, "powerful sprint running outdoors on athletics track"],
		[/alimentação|nutrição|dieta/gi, "clean athletic nutrition meal, grilled steak and vegetables, fresh ingredients"],
		[/chiaroscuro|b&w|black and white/gi, "vibrant natural colors, warm studio lighting"]
	]) prompt = prompt.replace(regex, replacement);
	const styleModifiers = {
		realistic: "authentic full color documentary sports photography, real human athlete, natural skin texture with subtle perspiration, natural bright daytime lighting, rich vibrant natural colors, shot on 35mm DSLR, Canon EOS R5, 50mm f/1.8 lens, sharp focus on subject, real gym background with depth of field, Men's Health and Sports Illustrated editorial award-winning photo",
		action: "dynamic high-speed action sports photography, frozen motion, defined muscle tension, high shutter speed 1/2000s, rich colors, authentic athletic indoor lighting, sharp crisp detail",
		portrait: "editorial athlete portrait photography, direct confident eye contact, charismatic fitness coach, warm softbox studio lighting, natural skin tones, beautiful creamy bokeh background, GQ magazine aesthetic",
		gym: "commercial architectural photography of modern strength training gym, Olympic barbells, iron plates, clean industrial aesthetic, natural daylight and warm accent lights, depth of field"
	};
	return `${prompt}, ${styleModifiers[style] || styleModifiers.realistic}`;
}
/**
* Gerar URL de Imagem gerada por IA via Pollinations AI (Flux / Ultrarrealista, Cores Vivas, Sem Anime)
*/
function generateAiImageUrl(prompt, width = 1200, height = 800, style = "realistic") {
	const enriched = enrichEditorialPrompt(prompt, style);
	const cleanPrompt = encodeURIComponent(enriched);
	const negative = encodeURIComponent("anime, cartoon, comic, illustration, drawing, sketch, 3d render, digital painting, cgi, black and white, monochrome, grayscale, dark chiaroscuro, desaturated, zombie, disfigured, deformed face, bad anatomy, blur, mutated, unnatural skin");
	return `https://image.pollinations.ai/prompt/${cleanPrompt}?width=${width}&height=${height}&model=flux&nologo=true&seed=${Math.floor(Math.random() * 1e5)}&negative=${negative}`;
}
/**
* Gerar Cenário Fotográfico de Fundo por IA (Clean, sem revista desenhada, para composição com a capa real)
*/
function generateAiMockupSceneUrl(scenePrompt, format = "stories") {
	const width = format === "stories" ? 1080 : format === "feed" ? 1080 : 1920;
	const height = format === "stories" ? 1920 : format === "feed" ? 1080 : 1080;
	const basePrompt = `High-end commercial product photography background scene. ${scenePrompt.trim()}. In the foreground center, a clean flat empty surface or table or desk ready for product placement. Background has soft creamy Apple iPhone Portrait Mode depth of field bokeh blur f/1.4, cinematic advertising lighting, 8k resolution, photorealistic, no books, no magazines, no text, no watermark.`;
	return `https://image.pollinations.ai/prompt/${encodeURIComponent(basePrompt)}?width=${width}&height=${height}&nologo=true&seed=${Math.floor(Math.random() * 1e6)}`;
}
/**
* Motor de Análise e Enquadramento Editorial por IA
* Lê o texto na íntegra, compreende o tema real, extrai citações autênticas e faz o enquadramento preciso.
*/
async function analyzeAndDiagramEditorialText(rawText, optionsOrKey, legacyApiKey) {
	const resolvedApiKey = typeof optionsOrKey === "string" ? optionsOrKey || legacyApiKey : void 0;
	const options = typeof optionsOrKey === "string" ? resolvedApiKey ? { apiKey: resolvedApiKey } : {} : optionsOrKey || {};
	const cleanText = rawText.trim();
	const wordCount = countWords(rawText);
	const estimatedReadTime = Math.max(1, Math.round(wordCount / 130));
	const originalTitle = options.originalTitle?.trim() || "";
	const originalCategory = options.originalCategory?.trim() || "";
	const apiKey = options.apiKey;
	const system = `Você é o Diretor Editorial da Revista Montanha (revista de prestígio sobre alta performance, ciência aplicada, musculação e mentalidade do Coach Montanha).
Sua missão é LER CUIDADOSAMENTE o texto fornecido pelo autor e tomar decisões editoriais autênticas e precisas com base no CONTEÚDO REAL.

DIRETRIZES DE DECISÃO MANDATÓRIAS:
1. TÍTULO: ${originalTitle ? `O autor já definiu o título deste artigo como: "${originalTitle}". PRESERVE RIGOROSAMENTE este título em CAIXA ALTA. NUNCA invente outro título e NUNCA use a primeira frase do texto como título.` : `Crie uma manchete impactante em CAIXA ALTA diretamente relacionada ao tema central abordado. NUNCA corte a primeira frase no meio.`}
2. CATEGORIA: ${originalCategory ? `O autor já classificou este artigo na categoria: "${originalCategory}". PRESERVE rigorosamente esta categoria.` : `Escolha a categoria mais precisa: "METABOLISMO & CIÊNCIA", "BIOMECÂNICA & FORÇA", "MONTANHA METHOD", "CONDICIONAMENTO DE ELITE", "NUTRIÇÃO APLICADA", "MENTALIDADE & FOCO", "PROTOCOLO DE TREINO", ou "GEAR & EQUIPAMENTOS".`}
3. SUBTÍTULO: Crie um subtítulo/lead editorial explicativo de 1 a 2 linhas que resuma a tese principal do texto.
4. CITAÇÃO DE IMPACTO (pullQuotes): Extraia EXATAMENTE 1 frase marcante presente no MEIO ou CONCLUSÃO do texto. IMPORTANTE: A citação de destaque NUNCA PODE SER IGUAL AO SUBTÍTULO ou ao título. Deve ser uma frase diferente.
5. PONTOS-CHAVE & CONCLUSÕES (keyTakeaways): Extraia 2 a 3 conclusões e ensinamentos diretos retirados do raciocínio do autor. NUNCA use frases genéricas de biologia se o texto for sobre mentalidade ou superação.
6. EXTENSÃO (recommendedPageSpan):
   - Se o volume for maior que 550 palavras: 2 (Matéria Dupla de 2 Páginas).
   - Se for menor ou igual a 550 palavras: 1 (Página Única).
7. TEMPLATE EDITORIAL:
   - "workout-protocol": APENAS se o texto contiver explicitamente exercícios com séries, repetições, blocos de treino ou descansos.
   - "product-ad": APENAS se o texto for explicitamente sobre venda/cupom de produto, loja ou equipamento.
   - "facility-spotlight": APENAS se o texto for sobre espaço físico/box/estúdio.
   - "editorial-lead" ou "two-column-quote": Para artigos conceituais, científicos, explicativos ou motivacionais.
8. FORMATAÇÃO: Formate o texto original aplicando ==marca-texto== na frase de maior impacto, **negrito** nos conceitos fundamentais e ### Subtítulo nas divisões lógicas.

Retorne RIGOROSAMENTE em formato JSON:
{
  "title": "${originalTitle ? originalTitle.toUpperCase() : "TÍTULO REAL DO ARTIGO"}",
  "subtitle": "Subtítulo autêntico relacionado ao tema",
  "category": "${originalCategory ? originalCategory.toUpperCase() : "CATEGORIA APROPRIADA"}",
  "author": "Coach Montanha",
  "authorBio": "Master Coach & Fundador",
  "recommendedPageSpan": 1 ou 2,
  "recommendedTemplate": "editorial-lead" | "workout-protocol" | "product-ad" | "facility-spotlight" | "two-column-quote" | "infographic-tips",
  "rationale": "Explicação editorial justificando por que este enquadramento e template foram selecionados com base no texto",
  "formattedContent": "Texto formatado com ==destaques==, **negrito** e ### Subtítulos",
  "pullQuotes": ["Frase real e diferente do subtítulo extraída do texto"],
  "keyTakeaways": ["Ponto 1 extraído do texto", "Ponto 2 extraído do texto"],
  "heroImagePrompt": "Detailed photographic prompt in English matching the exact topic..."
}`;
	const prompt = `LEIA O SEGUINTE ARTIGO (Volume: ${wordCount} palavras) E ESTRUTURE A DIAGRAMAÇÃO:
"""
${cleanText}
"""`;
	try {
		const cleanJson = (await callGeminiApi(prompt, apiKey, system)).replace(/```json/g, "").replace(/```/g, "").trim();
		const parsed = JSON.parse(cleanJson);
		const resolvedTitle = (originalTitle || parsed.title || "ARTIGO EDITORIAL").toUpperCase();
		const resolvedCategory = (originalCategory || parsed.category || "MONTANHA METHOD").toUpperCase();
		const recommendedPageSpan = parsed.recommendedPageSpan === 2 || wordCount > 550 ? 2 : 1;
		const heroImg = getEditorialCuratedImage(resolvedCategory, 0);
		const secondaryImg = getEditorialCuratedImage(resolvedCategory, 1);
		const resolvedSubtitle = parsed.subtitle || "Análise aprofundada dos princípios fundamentais e aplicação prática.";
		let pullQuotes = parsed.pullQuotes && parsed.pullQuotes.length > 0 ? parsed.pullQuotes : [];
		if (pullQuotes.length === 0 || pullQuotes[0] === resolvedSubtitle || pullQuotes[0] === resolvedTitle) pullQuotes = [extractBestPullQuote(cleanText, [resolvedTitle, resolvedSubtitle])];
		let keyTakeaways = parsed.keyTakeaways && parsed.keyTakeaways.length > 0 ? parsed.keyTakeaways : [];
		if (keyTakeaways.length === 0) keyTakeaways = extractKeyTakeawaysFromText(cleanText, resolvedTitle, [
			resolvedTitle,
			resolvedSubtitle,
			pullQuotes[0] || ""
		]);
		return {
			title: resolvedTitle,
			subtitle: resolvedSubtitle,
			category: resolvedCategory,
			author: parsed.author || "Coach Montanha",
			authorBio: parsed.authorBio || "Master Coach & Fundador",
			recommendedPageSpan,
			recommendedTemplate: parsed.recommendedTemplate || (wordCount > 550 ? "editorial-lead" : "two-column-quote"),
			rationale: parsed.rationale || (recommendedPageSpan === 2 ? `Volume de ${wordCount} palavras identificado: Enquadrado em Matéria Dupla de 2 Páginas para acomodar a leitura fluida e fotos de apoio sem cortes de texto.` : `Volume de ${wordCount} palavras: Enquadrado em 1 Página A4 com duas colunas dinâmicas e citação de impacto no desfecho.`),
			wordCount,
			estimatedReadTime,
			formattedContent: parsed.formattedContent || cleanText,
			pullQuotes,
			keyTakeaways,
			heroImagePrompt: parsed.heroImagePrompt || `High-end editorial magazine photography about ${resolvedCategory}, dramatic lighting, cinematic 8k`,
			suggestedHeroImage: heroImg,
			secondaryImagePrompt: parsed.secondaryImagePrompt,
			suggestedSecondaryImage: secondaryImg
		};
	} catch (error) {
		return semanticAnalyzeEditorialDocument(cleanText, wordCount, estimatedReadTime, options);
	}
}
/**
* Leitor e Analisador Semântico NLP: Extrai informações reais do documento
*/
function semanticAnalyzeEditorialDocument(rawText, wordCount, estimatedReadTime, options) {
	const paragraphs = rawText.split(/\n+/).map((p) => p.trim()).filter(Boolean);
	const fullTextLower = rawText.toLowerCase();
	let title = "";
	let bodyStartIndex = 0;
	if (options?.originalTitle && options.originalTitle.trim().length > 0) title = options.originalTitle.trim().toUpperCase();
	else {
		const firstPara = paragraphs[0] || "";
		if (firstPara.startsWith("#") || firstPara.endsWith("?") || firstPara.length < 80 && !firstPara.includes(".") && !firstPara.includes(",")) {
			title = firstPara.replace(/^#+\s*/, "").toUpperCase();
			bodyStartIndex = 1;
		} else title = synthesizeHeadlineFromContent(rawText, fullTextLower);
	}
	let category = "MONTANHA METHOD";
	let curatedTheme = "fitness";
	let heroImagePrompt = "Editorial photography of athletic training in dark moody gym, 8k";
	if (options?.originalCategory && options.originalCategory.trim().length > 0) {
		category = options.originalCategory.trim().toUpperCase();
		const catLower = category.toLowerCase();
		if (catLower.includes("ciência") || catLower.includes("metabolismo") || catLower.includes("saúde") || catLower.includes("nutri")) {
			curatedTheme = "saude";
			heroImagePrompt = "Cinematic sports science and muscular metabolism lab, 8k";
		} else if (catLower.includes("mente") || catLower.includes("mindset") || catLower.includes("foco") || catLower.includes("motiva")) {
			curatedTheme = "lifestyle";
			heroImagePrompt = "Dramatic warrior athlete in meditative focus and iron mindset, cinematic lighting, 8k";
		}
	} else if (/\b(calorias?|metab[oó]lic|massa\s*magra|gasto\s*energ|gordura|termog|nutri[çc]|prote[íi]na|dieta)\b/i.test(fullTextLower)) {
		category = "METABOLISMO & CIÊNCIA";
		curatedTheme = "saude";
		heroImagePrompt = "Cinematic medical and sports science photography, human muscular metabolism and energy lab, 8k";
	} else if (/\b(respira[çc][aã]o|diafragma|press[aã]o\s*intra|iap|valsalva|coluna|vertebra|lombar|articula[çc])\b/i.test(fullTextLower)) {
		category = "BIOMECÂNICA & FORÇA";
		curatedTheme = "saude";
		heroImagePrompt = "Anatomical biomechanics of athletic spine and core stability in heavy lift, cinematic lighting, 8k";
	} else if (/\b(remo|rower|erg[oô]metro|cardio|aer[oó]b|vo2|lactato|tiros|endurance|frequ[eê]ncia\s*card)\b/i.test(fullTextLower)) {
		category = "CONDICIONAMENTO DE ELITE";
		curatedTheme = "fitness";
		heroImagePrompt = "Athletic champion rowing on indoor ergometer rower with intense focus, dark atmospheric lighting, 8k";
	} else if (/\b(mente|mentalidade|disciplina|foco|estoic|h[aá]bit|consist[eê]ncia|mindset|resili[eê]ncia|mar\s*revolto|sucesso)\b/i.test(fullTextLower)) {
		category = "MENTALIDADE & FOCO";
		curatedTheme = "lifestyle";
		heroImagePrompt = "Dramatic warrior athlete in meditative focus before battle, high contrast lighting, 8k";
	}
	const activeParagraphs = paragraphs.slice(bodyStartIndex);
	const firstSentence = (activeParagraphs[0] || "").split(/(?<=[.!?])\s+/)[0] || "";
	let subtitle = "";
	if (firstSentence.length >= 35 && firstSentence.length <= 150) subtitle = firstSentence.trim();
	else if (firstSentence.length > 150) {
		const firstClause = firstSentence.split(/[,:;]/)[0] || "";
		subtitle = (firstClause.length >= 30 ? firstClause.trim() : firstSentence.slice(0, 130).trim()) + "...";
	} else subtitle = `Uma análise aprofundada dos princípios fundamentais e aplicação prática na alta performance.`;
	const pullQuote = extractBestPullQuote(rawText, [title, subtitle]);
	const keyTakeaways = extractKeyTakeawaysFromText(rawText, title, [
		title,
		subtitle,
		pullQuote
	]);
	const isStrictWorkoutProtocol = /\b(\d+\s*x\s*\d+|\d+\s*s[eé]ries|\d+\s*reps|circuito\s*[a-z0-9]|aquecimento\s*:|warmup\s*:)\b/i.test(rawText);
	const isStrictProductAd = /\b(cupom\s*:\s*[A-Z0-9]+|c[oó]digo\s*promocional|loja\s*oficial|compre\s*com\s*\d+%\s*off|frete\s*gr[aá]tis)\b/i.test(rawText);
	const isStrictFacility = /\b(nosso\s*est[uú]dio|nossa\s*academia|conhe[çc]a\s*o\s*box|instala[çc][oõ]es|endere[çc]o\s*:|unidade\s*matriz)\b/i.test(rawText);
	let recommendedTemplate = "editorial-lead";
	if (isStrictWorkoutProtocol) recommendedTemplate = "workout-protocol";
	else if (isStrictProductAd) recommendedTemplate = "product-ad";
	else if (isStrictFacility) recommendedTemplate = "facility-spotlight";
	else if (wordCount < 250) recommendedTemplate = "two-column-quote";
	const recommendedPageSpan = wordCount > 550 ? 2 : 1;
	const formattedParagraphs = activeParagraphs.map((para, idx) => {
		let p = para;
		if (idx === 0) {
			const firstDot = p.indexOf(".");
			if (firstDot > 20 && firstDot < 100) p = `==${p.substring(0, firstDot)}==` + p.substring(firstDot);
		}
		if (idx === 2 && !p.startsWith("#") && activeParagraphs.length >= 4) p = `### APLICAÇÃO PRÁTICA NO TREINAMENTO\n\n` + p;
		return p;
	});
	return {
		title,
		subtitle,
		category,
		author: "Coach Montanha",
		authorBio: "Master Coach & Fundador",
		recommendedPageSpan,
		recommendedTemplate,
		rationale: recommendedPageSpan === 2 ? `Volume de ${wordCount} palavras identificado sobre ${category.toLowerCase()}: Enquadrado em 2 Páginas (Página Dupla) para garantir leitura espaçosa e fotos de apoio sem cortes de texto.` : `Volume de ${wordCount} palavras sobre ${category.toLowerCase()}: Enquadrado em 1 Página A4 otimizada com 2 colunas equilibradas e citação de destaque ao final.`,
		wordCount,
		estimatedReadTime,
		formattedContent: formattedParagraphs.join("\n\n"),
		pullQuotes: [pullQuote],
		keyTakeaways,
		heroImagePrompt,
		suggestedHeroImage: getEditorialCuratedImage(curatedTheme, 0),
		suggestedSecondaryImage: getEditorialCuratedImage(curatedTheme, 1)
	};
}
/**
* Sintetiza uma manchete forte a partir do tema central caso nenhum título seja fornecido
*/
function synthesizeHeadlineFromContent(rawText, fullTextLower) {
	if (/\b(mar\s*revolto|tempest|sincero|sucesso|atravessar|conquist)\b/i.test(fullTextLower)) return "NENHUM SUCESSO REAL EXISTE SEM CRUZAR O MAR REVOLTO";
	else if (/\b(calorias?|metab[oó]lic|massa\s*magra|gasto\s*energ|gordura|quilograma)/i.test(fullTextLower)) return "QUANTAS CALORIAS OS MÚSCULOS GASTAM?";
	else if (/\b(respira[çc][aã]o|diafragma|press[aã]o\s*intra|iap|valsalva|coluna)/i.test(fullTextLower)) return "O SEGREDO DA RESPIRAÇÃO DIAFRAGMÁTICA & IAP";
	else if (/\b(remo|rower|erg[oô]metro|cardio|lactato|500\s*m)/i.test(fullTextLower)) return "MANUAL COMPLETO DO REMO NÓRDICO & BIOENERGÉTICA";
	else if (/\b(kettlebell|swing|mace|bal[íi]stico|for[çc]a)/i.test(fullTextLower)) return "KETTLEBELL DYNAMICS: O PODER DA FORÇA BALÍSTICA";
	const firstSentence = rawText.split(/[.!?\n]/)[0]?.trim() || "MATÉRIA EDITORIAL DE ALTA PERFORMANCE";
	if (firstSentence.length <= 60) return firstSentence.toUpperCase();
	return firstSentence.split(/\s+/).slice(0, 8).join(" ").toUpperCase();
}
/**
* Extrai uma citação de impacto forte do texto que seja RIGOROSAMENTE DIFERENTE do título e subtítulo
*/
function extractBestPullQuote(text, excludeSentences) {
	const normalizedExcludes = excludeSentences.filter(Boolean).map((s) => s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30));
	const candidateSentences = text.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/).map((s) => s.trim().replace(/^[-•*#]+\s*/, "")).filter((s) => s.length >= 25 && s.length <= 160 && !s.startsWith("http")).filter((s) => {
		const sNorm = s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30);
		return !normalizedExcludes.some((ex) => ex.length > 12 && (sNorm.includes(ex) || ex.includes(sNorm)));
	});
	if (candidateSentences.length === 0) return "A consistência na travessia das maiores adversidades é o que constrói o resultado duradouro.";
	const scored = candidateSentences.map((sentence, idx) => {
		let score = 0;
		if (idx > 0) score += 2;
		if (idx >= Math.floor(candidateSentences.length / 2)) score += 3;
		if (/\b(não acredito|não existe|sucesso|resultado|mar revolto|tempestuoso|vitória|força|preço|pagar|disciplina|verdade|essencial|consistência|foco|mentalidade|superação)\b/i.test(sentence)) score += 6;
		if (sentence.length >= 40 && sentence.length <= 110) score += 3;
		return {
			sentence,
			score
		};
	});
	scored.sort((a, b) => b.score - a.score);
	return scored[0]?.sentence || candidateSentences[0];
}
/**
* Extrai 2 a 3 pontos-chave reais e conclusões do próprio texto, contextuais e autênticos
*/
function extractKeyTakeawaysFromText(text, title, excludeSentences) {
	const normalizedExcludes = excludeSentences.filter(Boolean).map((s) => s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30));
	const bulletLines = text.split(/\n+/).map((line) => line.trim()).filter((line) => /^([-•*]|\d+[.)])\s+/.test(line)).map((line) => line.replace(/^([-•*]|\d+[.)])\s+/, "").trim()).filter((line) => line.length >= 20 && line.length <= 140);
	if (bulletLines.length >= 2) return bulletLines.slice(0, 3);
	const availableSentences = text.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/).map((s) => s.trim().replace(/^[-•*#]+\s*/, "")).filter((s) => s.length >= 25 && s.length <= 140).filter((s) => {
		const sNorm = s.toLowerCase().replace(/[^a-záàâãéèêíïóôõöúç0-9]/gi, "").slice(0, 30);
		return !normalizedExcludes.some((ex) => ex.length > 12 && (sNorm.includes(ex) || ex.includes(sNorm)));
	});
	if (availableSentences.length >= 2) {
		const scored = availableSentences.map((sentence, idx) => {
			let score = 0;
			if (idx >= Math.floor(availableSentences.length / 2)) score += 3;
			if (idx === availableSentences.length - 1) score += 2;
			if (/\b(entenda|lembre-se|portanto|preciso|necessário|cruzar|enfrentar|construir|consistência|trabalho|processo|objetivo|foco|essencial|resultado|vitória)\b/i.test(sentence)) score += 4;
			return {
				sentence,
				score,
				idx
			};
		});
		scored.sort((a, b) => b.score - a.score);
		const first = scored[0].sentence;
		const second = scored.find((item) => item.sentence !== first && Math.abs(item.idx - scored[0].idx) > 0)?.sentence || scored[1]?.sentence;
		if (first && second && first !== second) return [first, second];
		if (first) return [first, "A verdadeira maestria exige consistência contínua na execução dos fundamentos sem buscar atalhos."];
	}
	const textLower = text.toLowerCase();
	if (/\b(mente|mindset|sucesso|mar\s*revolto|tempest|mentalidade|disciplina|sincero|vitória)\b/i.test(textLower)) return ["O resultado sólido não é fruto do acaso: exige atravessar as maiores adversidades com resiliência inabalável.", "A rejeição de atalhos e a disciplina diária são o único caminho verdadeiro para conquistas duradouras."];
	else if (/\b(caloria|metab|gasto|gordura|m[uú]scul|dieta|nutri)\b/i.test(textLower)) return ["A taxa metabólica basal e a queima energética respondem diretamente à densidade muscular ativa.", "Alinhe o aporte calórico e a qualidade dos macronutrientes para sustentar a recuperação e hipertrofia."];
	else if (/\b(respira|diafragma|coluna|iap|lombar|estabil)\b/i.test(textLower)) return ["A correta pressão intra-abdominal (IAP) e ativação diafragmática criam um cilindro de proteção para a coluna.", "Consolide o padrão respiratório antes de elevar sobrecargas máximas nos levantamentos fundamentais."];
	return ["Foque na execução disciplinada dos princípios fundamentais para garantir resultados permanentes.", "A consistência a longo prazo supera qualquer solução rápida ou atalho ilusório."];
}
function polishTextOfflineFallback(text, tone) {
	if (!text || !text.trim()) return text;
	const rawParagraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
	if (rawParagraphs.length === 0) return text;
	const boldPatterns = [
		/\b(alta performance)\b/gi,
		/\b(resiliência inabalável)\b/gi,
		/\b(sobrecarga progressiva)\b/gi,
		/\b(composição corporal)\b/gi,
		/\b(taxa metabólica)\b/gi,
		/\b(gasto energético)\b/gi,
		/\b(massa magra|massa muscular)\b/gi,
		/\b(hipertrofia)\b/gi,
		/\b(recuperação celular)\b/gi,
		/\b(densidade muscular)\b/gi,
		/\b(potência de quadril)\b/gi,
		/\b(cadeia posterior)\b/gi,
		/\b(sono profundo)\b/gi,
		/\b(disciplina diária)\b/gi,
		/\b(princípios fundamentais)\b/gi,
		/\b(consistência)\b/gi,
		/\b(pressão intra-abdominal)\b/gi,
		/\b(respiração diafragmática)\b/gi,
		/\b(\d+[\s-]*(?:%|kg|minutos|min|kcal|calorias|repetições|reps|séries))\b/gi
	];
	const italicPatterns = [
		/\b(mindset)\b/gi,
		/\b(core)\b/gi,
		/\b(clean & press|clean and press)\b/gi,
		/\b(kettlebell|kettlebells)\b/gi,
		/\b(steel mace)\b/gi,
		/\b(clubbell|clubbells)\b/gi,
		/\b(lockout)\b/gi,
		/\b(swing|swings)\b/gi,
		/\b(snatch|snatches)\b/gi,
		/\b(farmer carry)\b/gi,
		/\b(biohacking)\b/gi,
		/\b(finisher)\b/gi,
		/\b(warm-up|warmup)\b/gi,
		/\b(deficit|déficit)\b/gi,
		/\b(status quo)\b/gi,
		/\b(feedback)\b/gi,
		/\b(t-spine)\b/gi
	];
	let appliedHighlight = false;
	const processedParagraphs = rawParagraphs.map((para, pIdx) => {
		if (para.startsWith("#")) return para;
		let p = para;
		boldPatterns.forEach((regex) => {
			p = p.replace(regex, (match) => {
				if (p.includes(`**${match}**`) || p.includes(`==${match}==`)) return match;
				return `**${match}**`;
			});
		});
		italicPatterns.forEach((regex) => {
			p = p.replace(regex, (match) => {
				if (p.includes(`*${match}*`) || p.includes(`**${match}**`)) return match;
				return `*${match}*`;
			});
		});
		if (!appliedHighlight && (pIdx === 0 || pIdx === 1) && !p.includes("==")) {
			const sentences = p.split(/(?<=[.!?])\s+/);
			if (sentences.length >= 2) {
				const targetSentence = sentences.find((s) => s.length >= 35 && s.length <= 120);
				if (targetSentence) {
					p = p.replace(targetSentence, `==${targetSentence}==`);
					appliedHighlight = true;
				}
			}
		}
		return p;
	});
	if (!processedParagraphs.some((p) => p.startsWith("###")) && processedParagraphs.length >= 3) {
		const subtitle1 = tone === "motivational" ? "### A FORJA DA MENTALIDADE" : "### ANÁLISE FUNDAMENTAL & IMPACTO";
		const subtitle2 = tone === "motivational" ? "### EXECUÇÃO SEM DESCULPAS" : "### DIRETRIZ PRÁTICA E APLICAÇÃO";
		const midpoint = Math.floor(processedParagraphs.length / 2);
		processedParagraphs.splice(midpoint, 0, subtitle1);
		if (processedParagraphs.length >= 6) {
			const secondPoint = Math.floor(processedParagraphs.length * .75);
			processedParagraphs.splice(secondPoint, 0, subtitle2);
		}
	}
	return processedParagraphs.join("\n\n");
}
function proofreadTextOfflineFallback(text) {
	if (!text || !text.trim()) return text;
	let fixed = text;
	for (const [pattern, replacement] of [
		[/\bposss[íi]veis\b/gi, "possíveis"],
		[/\bposivel\b/gi, "possível"],
		[/\bpossiveis\b/gi, "possíveis"],
		[/\bfalhar ortogr[áa]ficas\b/gi, "falhas ortográficas"],
		[/\bintelig[êe]ncia artifical\b/gi, "inteligência artificial"],
		[/\bexerc[íi]cio\b/gi, "exercício"],
		[/\bexerc[íi]cios\b/gi, "exercícios"],
		[/\bmusculo\b/gi, "músculo"],
		[/\bmusculos\b/gi, "músculos"],
		[/\bserie\b/gi, "série"],
		[/\bseries\b/gi, "séries"],
		[/\brepeticao\b/gi, "repetição"],
		[/\brepeticoes\b/gi, "repetições"],
		[/\bpadrao\b/gi, "padrão"],
		[/\bpadroes\b/gi, "padrões"],
		[/\bperiodo\b/gi, "período"],
		[/\bperiodos\b/gi, "períodos"],
		[/\bnumero\b/gi, "número"],
		[/\bnumeros\b/gi, "números"],
		[/\bfisico\b/gi, "físico"],
		[/\bfisicos\b/gi, "físicos"],
		[/\bsaude\b/gi, "saúde"],
		[/\bnutricao\b/gi, "nutrição"],
		[/\bavaliacao\b/gi, "avaliação"],
		[/\bavaliacoes\b/gi, "avaliações"],
		[/\bposicao\b/gi, "posição"],
		[/\bposicoes\b/gi, "posições"],
		[/\bmetabolico\b/gi, "metabólico"],
		[/\bmetabolica\b/gi, "metabólica"],
		[/\boxigenio\b/gi, "oxigênio"],
		[/\bresistencia\b/gi, "resistência"],
		[/\bfrequencia\b/gi, "frequência"],
		[/\bpotencia\b/gi, "potência"],
		[/\bmaximo\b/gi, "máximo"],
		[/\bmaxima\b/gi, "máxima"],
		[/\bminimo\b/gi, "mínimo"],
		[/\bminima\b/gi, "mínima"],
		[/\bciencia\b/gi, "ciência"],
		[/\bmetodo\b/gi, "método"],
		[/\bmetodos\b/gi, "métodos"],
		[/\bprincipio\b/gi, "princípio"],
		[/\bprincipios\b/gi, "princípios"],
		[/\bestrategia\b/gi, "estratégia"],
		[/\bestrategias\b/gi, "estratégias"],
		[/\bvoce\b/gi, "você"],
		[/\bvoces\b/gi, "vocês"],
		[/\btambem\b/gi, "também"],
		[/\bate\b/gi, "até"],
		[/\bja\b/gi, "já"],
		[/\bnao\b/gi, "não"],
		[/\bentao\b/gi, "então"],
		[/\balem\b/gi, "além"],
		[/\bconseq[üu][êe]ncia\b/gi, "consequência"],
		[/\bfreq[üu][êe]ncia\b/gi, "frequência"]
	]) fixed = fixed.replace(pattern, (match) => {
		if (match[0] === match[0]?.toUpperCase() && match[0] !== match[0]?.toLowerCase()) return replacement.charAt(0).toUpperCase() + replacement.slice(1);
		return replacement;
	});
	fixed = fixed.replace(/(\S)\s+([,.;:!?])(?!\S)/g, "$1$2");
	fixed = fixed.replace(/([a-zA-ZÀ-ÿ])([,;:])([a-zA-ZÀ-ÿ])/g, "$1$2 $3");
	return fixed;
}
/**
* Gera chamadas curtas e impactantes (teasers) para os destaques da capa com base no conteúdo dos artigos
*/
async function generateCoverTeasers(highlights, articles, apiKey) {
	const results = [];
	for (const hl of highlights) {
		const linkedArt = articles.find((a) => a.title.toLowerCase().trim() === hl.title.toLowerCase().trim() || a.id === hl.id || a.category && hl.tag.toLowerCase().includes(a.category.toLowerCase()));
		const title = hl.title;
		const content = linkedArt?.content || "";
		const subtitle = linkedArt?.subtitle || "";
		if (apiKey) try {
			const cleanTeaser = (await callGeminiApi(`Matéria: "${title}"\nSubtítulo: "${subtitle}"\nTrecho: "${content.slice(0, 400)}"\n\nGere uma única chamada instigante, direta e com autoridade para estampar a capa:`, apiKey, `Você é um editor sênior de capa da revista Montanha Magazine. Sua missão é criar uma CHAMADA CURTA E IMPACTANTE (teaser de capa de 8 a 15 palavras) para chamar a atenção do leitor para a matéria. Responda APENAS com a frase da chamada, sem aspas, sem introdução, sem marcadores.`)).replace(/["“”]/g, "").trim();
			if (cleanTeaser && cleanTeaser.length >= 20 && cleanTeaser.length <= 110) {
				results.push({
					id: hl.id,
					teaser: cleanTeaser
				});
				continue;
			}
		} catch (e) {}
		const fallbackTeaser = synthesizeCoverTeaserLocally(title, subtitle, content, hl.tag);
		results.push({
			id: hl.id,
			teaser: fallbackTeaser
		});
	}
	return results;
}
function synthesizeCoverTeaserLocally(title, subtitle, content, tag) {
	if (subtitle && subtitle.length >= 25 && subtitle.length <= 95) return subtitle.endsWith(".") ? subtitle : `${subtitle}.`;
	const combined = `${title} ${subtitle} ${content} ${tag}`.toLowerCase();
	if (/\b(mulher|femin|estrog|osteopor|composição)\b/i.test(combined)) return "Como a sobrecarga progressiva transforma a saúde metabólica e quebra mitos históricos.";
	if (/\b(remo|rower|ergômetro|cardio|aerób|pulmão)\b/i.test(combined)) return "O protocolo de tração nórdica que desenvolve potência aeróbica e queima lipídica extrema.";
	if (/\b(disciplina|mente|mindset|hábito|vencedor|foco)\b/i.test(combined)) return "A ciência prática para eliminar a hesitação e executar seus protocolos com foco inabalável.";
	if (/\b(caloria|músculo|metab|gasto|gordura|densidade)\b/i.test(combined)) return "O impacto real da massa muscular no gasto energético de repouso e longevidade.";
	if (/\b(respira|diafragma|coluna|iap|pressão)\b/i.test(combined)) return "A mecânica do cilindro intra-abdominal para blindar a coluna em cargas máximas.";
	if (/\b(kettlebell|swing|mace|balístico|força)\b/i.test(combined)) return "O recrutamento neuromuscular explosivo do treinamento balístico com pesos livres.";
	if (content) {
		const sentences = content.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.length >= 30 && s.length <= 90 && !s.startsWith("http"));
		if (sentences.length > 0) return sentences[0];
	}
	return "Princípios fundamentais e metodologia aplicada para elevar seu teto de performance.";
}
var EDITORIAL_STOCK_PHOTOS = [
	{
		id: "pullup-01",
		url: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400&q=75",
		title: "Atleta em Barra Fixa Strict",
		category: "barra-fixa",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "pullup-02",
		url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=75",
		title: "Treino de Dorsais & Tração",
		category: "barra-fixa",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "pullup-03",
		url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=400&q=75",
		title: "Força Relativa & Calistenia",
		category: "barra-fixa",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "kb-01",
		url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=75",
		title: "Kettlebell Swing Potência",
		category: "kettlebell",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "kb-02",
		url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=75",
		title: "Atleta com Kettlebells de Ferro",
		category: "kettlebell",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "kb-03",
		url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400&q=75",
		title: "Clean & Press com Kettlebell",
		category: "kettlebell",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "lift-01",
		url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=75",
		title: "Treino de Halteres & Peitoral",
		category: "musculacao",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "lift-02",
		url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=75",
		title: "Levantamento Pesado com Barra",
		category: "musculacao",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "lift-03",
		url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=75",
		title: "Atleta Feminina em Treino de Força",
		category: "musculacao",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "coach-01",
		url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=75",
		title: "Retrato Editorial Coach Masculino",
		category: "coach",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "coach-02",
		url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=75",
		title: "Retrato Coach Feminina em Estúdio",
		category: "coach",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "coach-03",
		url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75",
		title: "Retrato Profissional Esportivo",
		category: "coach",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "gym-01",
		url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=75",
		title: "Centro de Treinamento Moderno",
		category: "academia",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "gym-02",
		url: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=400&q=75",
		title: "Rack de Halteres & Anilhas",
		category: "academia",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "nutri-01",
		url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=75",
		title: "Nutrição de Performance & Alimentos",
		category: "nutricao",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "nutri-02",
		url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=75",
		title: "Refeição Limpa & Densidade Nutricional",
		category: "nutricao",
		author: "Unsplash Sports Editorial"
	},
	{
		id: "nutri-03",
		url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85",
		thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=75",
		title: "Biohacking & Recuperação Muscular",
		category: "nutricao",
		author: "Unsplash Sports Editorial"
	}
];
var ImagePicker = ({ label, value, onChange, position, onPositionChange, aspectRatio = "landscape", placeholderPrompt = "Foto de atleta em barra fixa strict, cores vivas...", helperText, className = "" }) => {
	const [activeMode, setActiveMode] = (0, import_react.useState)("editorial");
	const [promptText, setPromptText] = (0, import_react.useState)("");
	const [isGeneratingAi, setIsGeneratingAi] = (0, import_react.useState)(false);
	const [aiStyle, setAiStyle] = (0, import_react.useState)("realistic");
	const [stockCategory, setStockCategory] = (0, import_react.useState)("todos");
	const fileInputRef = (0, import_react.useRef)(null);
	const parsePercentY = (pos) => {
		if (!pos || pos === "center") return 50;
		if (pos === "top") return 15;
		if (pos === "bottom") return 85;
		const match = pos.match(/(\d+)%/g);
		if (match && match.length >= 2) return parseInt(match[1], 10);
		if (match && match.length === 1) return parseInt(match[0], 10);
		return 50;
	};
	const currentPercentY = parsePercentY(position);
	const aspectClass = aspectRatio === "square" ? "aspect-square w-24 sm:w-28" : aspectRatio === "portrait" ? "aspect-[3/4] w-24 sm:w-28" : aspectRatio === "banner" ? "aspect-[16/6] w-full max-h-36" : "aspect-[16/9] w-32 sm:w-36";
	const handleFileUpload = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 10485760) {
			alert("A imagem selecionada é muito grande. Escolha uma imagem de até 10MB.");
			return;
		}
		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result;
			if (result) {
				onChange(result);
				if (onPositionChange && !position) onPositionChange("50% 50%");
			}
		};
		reader.readAsDataURL(file);
	};
	const handleGenerateAi = async () => {
		const targetPrompt = promptText.trim() || placeholderPrompt;
		if (!targetPrompt) return;
		setIsGeneratingAi(true);
		try {
			const aiUrl = generateAiImageUrl(targetPrompt, aspectRatio === "square" ? 800 : aspectRatio === "portrait" ? 800 : 1200, aspectRatio === "square" ? 800 : aspectRatio === "portrait" ? 1e3 : 800, aiStyle);
			const img = new Image();
			img.src = aiUrl;
			img.onload = () => {
				onChange(aiUrl);
				if (onPositionChange && !position) onPositionChange("50% 50%");
				setIsGeneratingAi(false);
			};
			img.onerror = () => {
				onChange(aiUrl);
				if (onPositionChange && !position) onPositionChange("50% 50%");
				setIsGeneratingAi(false);
			};
		} catch (err) {
			console.error("Erro ao gerar imagem por IA:", err);
			setIsGeneratingAi(false);
		}
	};
	const clearImage = () => {
		onChange("");
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const filteredStockPhotos = stockCategory === "todos" ? EDITORIAL_STOCK_PHOTOS : EDITORIAL_STOCK_PHOTOS.filter((p) => p.category === stockCategory);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-2 font-sans ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-black uppercase tracking-tight block",
				children: label
			}), helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] opacity-70 font-medium",
				children: helperText
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "theme-app-card p-3 rounded-xl border-2 space-y-3 shadow-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative shrink-0 rounded-lg overflow-hidden border-2 border-black bg-slate-900 shadow-sm flex items-center justify-center group",
					children: value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: value,
						alt: label,
						className: `${aspectClass} object-cover filter contrast-110`,
						style: { objectPosition: position || "center" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: clearImage,
						className: "absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-md shadow-lg cursor-pointer z-10 hover:scale-105 active:scale-95 transition-all",
						title: "Remover Imagem",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${aspectClass} flex flex-col items-center justify-center p-2 text-slate-400 text-center`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "w-6 h-6 opacity-40 mb-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] font-bold uppercase opacity-60",
							children: "Sem Foto"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-1 theme-app-card-subtle p-1 rounded-lg border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveMode("editorial"),
									className: `py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${activeMode === "editorial" ? "bg-amber-400 text-black font-black border border-black shadow-xs" : "opacity-75 hover:opacity-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-3 h-3 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Banco Real" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveMode("ai"),
									className: `py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${activeMode === "ai" ? "bg-amber-400 text-black font-black border border-black shadow-xs" : "opacity-75 hover:opacity-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-black animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerar com IA" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveMode("upload"),
									className: `py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${activeMode === "upload" ? "bg-amber-400 text-black font-black border border-black shadow-xs" : "opacity-75 hover:opacity-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload PC" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setActiveMode("url"),
									className: `py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${activeMode === "url" ? "bg-amber-400 text-black font-black border border-black shadow-xs" : "opacity-75 hover:opacity-100"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "URL Web" })]
								})
							]
						}),
						activeMode === "upload" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileInputRef,
								type: "file",
								accept: "image/*",
								onChange: handleFileUpload,
								className: "hidden",
								id: `file-upload-${label.replace(/\s+/g, "-")}`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								onClick: () => fileInputRef.current?.click(),
								className: "h-8 font-bold text-xs flex items-center gap-1.5 border-2 border-black w-full justify-center bg-white text-black hover:bg-amber-50 cursor-pointer shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Escolher Imagem do seu Computador" })]
							})]
						}),
						activeMode === "ai" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 shrink-0 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Motor Flux Foto: Cores vivas, pessoas reais, sem aspecto anime/desenho e sem P&B." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 overflow-x-auto pb-0.5",
									children: [
										{
											id: "realistic",
											label: "📸 Cores Reais"
										},
										{
											id: "action",
											label: "⚡ Ação"
										},
										{
											id: "portrait",
											label: "👤 Retrato"
										},
										{
											id: "gym",
											label: "🏋️ Academia"
										}
									].map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setAiStyle(style.id),
										className: `text-[9px] font-bold px-2 py-0.5 rounded border transition-all cursor-pointer whitespace-nowrap ${aiStyle === style.id ? "bg-amber-500 text-black border-black font-black" : "theme-app-card-subtle opacity-75 hover:opacity-100"}`,
										children: style.label
									}, style.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: promptText,
										onChange: (e) => setPromptText(e.target.value),
										placeholder: placeholderPrompt,
										className: "theme-app-input text-xs h-8 border-2 font-medium flex-1",
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												handleGenerateAi();
											}
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										onClick: handleGenerateAi,
										disabled: isGeneratingAi,
										className: "h-8 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs px-3 border-2 border-black shrink-0 cursor-pointer shadow-xs flex items-center gap-1",
										children: [isGeneratingAi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isGeneratingAi ? "Criando..." : "Gerar" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1",
									children: [
										"Barra Fixa Strict",
										"Ação Kettlebell",
										"Treino de Dorsais",
										"Agachamento com Barra",
										"Retrato do Treinador",
										"Halteres de Ferro"
									].map((quick, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setPromptText(quick);
										},
										className: "text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-slate-400 bg-slate-100 text-slate-800 hover:bg-amber-200 cursor-pointer",
										children: ["+ ", quick]
									}, idx))
								})
							]
						}),
						activeMode === "editorial" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 overflow-x-auto pb-1 text-[10px] font-bold",
								children: [
									{
										id: "todos",
										label: "Todas"
									},
									{
										id: "barra-fixa",
										label: "Barra Fixa"
									},
									{
										id: "kettlebell",
										label: "Kettlebell"
									},
									{
										id: "musculacao",
										label: "Musculação"
									},
									{
										id: "coach",
										label: "Treinador"
									},
									{
										id: "academia",
										label: "Academia"
									},
									{
										id: "nutricao",
										label: "Nutrição"
									}
								].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setStockCategory(cat.id),
									className: `px-2 py-0.5 rounded border whitespace-nowrap cursor-pointer transition-all ${stockCategory === cat.id ? "bg-amber-400 text-black border-black font-black" : "theme-app-card-subtle opacity-70 hover:opacity-100"}`,
									children: cat.label
								}, cat.id))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 sm:grid-cols-4 gap-1.5 max-h-44 overflow-y-auto p-1.5 rounded-lg border bg-slate-950/20 dark:bg-black/30",
								children: filteredStockPhotos.map((photo) => {
									const isSelected = value === photo.url;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onChange(photo.url);
											if (onPositionChange && !position) onPositionChange("50% 50%");
										},
										className: `group relative rounded-md overflow-hidden border-2 aspect-[4/3] cursor-pointer transition-all hover:scale-[1.02] ${isSelected ? "border-amber-500 ring-2 ring-amber-400 shadow-md" : "border-slate-300 dark:border-slate-700 hover:border-amber-400"}`,
										title: `${photo.title} (${photo.author})`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: photo.thumbnail,
												alt: photo.title,
												className: "w-full h-full object-cover group-hover:contrast-110 transition-all",
												loading: "lazy"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-x-0 bottom-0 bg-black/70 p-1 text-[8px] font-bold text-white truncate text-left",
												children: photo.title
											}),
											isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute top-1 right-1 bg-amber-400 text-black rounded-full p-0.5 shadow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-2.5 h-2.5 stroke-[3]" })
											})
										]
									}, photo.id);
								})
							})]
						}),
						activeMode === "url" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value,
							onChange: (e) => onChange(e.target.value),
							placeholder: "https://images.unsplash.com/...",
							className: "theme-app-input text-xs h-8 border-2 font-mono"
						}) })
					]
				})]
			}), value && onPositionChange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-2.5 border-t border-slate-200 dark:border-slate-800 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							className: "text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5 text-amber-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveVertical, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquadramento / Trecho Visível da Foto" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-600 dark:text-amber-400 border border-amber-400/40",
							children: [currentPercentY, "% vertical"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-5 gap-1 text-[10px] font-bold",
						children: [
							{
								label: "Topo / Rosto",
								val: 15
							},
							{
								label: "Superior",
								val: 35
							},
							{
								label: "Centro",
								val: 50
							},
							{
								label: "Inferior",
								val: 65
							},
							{
								label: "Base",
								val: 85
							}
						].map((preset) => {
							const isCurrent = Math.abs(currentPercentY - preset.val) <= 10;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onPositionChange(`50% ${preset.val}%`),
								className: `py-1 px-1 rounded border text-center transition-all cursor-pointer truncate ${isCurrent ? "bg-amber-400 text-black border-black font-black shadow-xs ring-1 ring-amber-400" : "theme-app-card-subtle opacity-75 hover:opacity-100 hover:border-black"}`,
								children: preset.label
							}, preset.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-mono opacity-60 shrink-0",
								children: "0% (Topo)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: "0",
								max: "100",
								value: currentPercentY,
								onChange: (e) => onPositionChange(`50% ${e.target.value}%`),
								className: "flex-1 accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-mono opacity-60 shrink-0",
								children: "100% (Base)"
							})
						]
					})
				]
			})]
		})]
	});
};
var CoverCustomizer = ({ coverConfig, onChange, backCoverConfig, onBackCoverChange, articles = [], pageVisibility }) => {
	const [activeSection, setActiveSection] = (0, import_react.useState)("cover");
	const [isGeneratingTeasers, setIsGeneratingTeasers] = (0, import_react.useState)(false);
	const updateBackCover = (field, value) => {
		if (onBackCoverChange && backCoverConfig) onBackCoverChange({
			...backCoverConfig,
			[field]: value
		});
	};
	const updateSocialHandles = (network, value) => {
		if (onBackCoverChange && backCoverConfig) onBackCoverChange({
			...backCoverConfig,
			socialHandles: {
				...backCoverConfig.socialHandles,
				[network]: value
			}
		});
	};
	const updateField = (field, value) => {
		onChange({
			...coverConfig,
			[field]: value
		});
	};
	const handleSelectTextScale = (scale, presetId) => {
		onChange({
			...coverConfig,
			textScale: scale,
			highlightsFontSize: presetId
		});
	};
	const handleAdjustScale = (delta) => {
		const newScale = Math.min(160, Math.max(80, (coverConfig.textScale || 100) + delta));
		updateField("textScale", newScale);
	};
	const getArticlePageNumber = (targetArticleId) => {
		let page = 1;
		if (pageVisibility?.showEditorLetter !== false) page += 1;
		if (pageVisibility?.showContributors) page += 1;
		if (pageVisibility?.showTableOfContents !== false) page += 1;
		const artIndex = articles.filter((a) => a.enabled !== false).findIndex((a) => a.id === targetArticleId);
		return artIndex >= 0 ? page + artIndex : page;
	};
	const handleGenerateAiTeasers = async () => {
		if (coverConfig.highlights.length === 0) return;
		setIsGeneratingTeasers(true);
		try {
			const generated = await generateCoverTeasers(coverConfig.highlights, articles);
			const updated = coverConfig.highlights.map((hl) => {
				const match = generated.find((g) => g.id === hl.id);
				return match ? {
					...hl,
					teaser: match.teaser
				} : hl;
			});
			updateField("highlights", updated);
		} catch (err) {
			console.error(err);
		} finally {
			setIsGeneratingTeasers(false);
		}
	};
	const handleAutoIndexAllArticles = () => {
		const activeArticles = articles.filter((a) => a.enabled !== false);
		if (activeArticles.length === 0) {
			alert("Nenhum artigo ativo encontrado no projeto.");
			return;
		}
		const indexedHighlights = activeArticles.slice(0, 4).map((art, idx) => {
			const pageNum = getArticlePageNumber(art.id);
			const initialTeaser = art.subtitle && art.subtitle.length >= 25 && art.subtitle.length <= 95 ? art.subtitle.endsWith(".") ? art.subtitle : `${art.subtitle}.` : art.content ? art.content.slice(0, 80).trim() + "..." : void 0;
			return {
				id: "hl-" + Date.now() + "-" + idx,
				tag: art.category ? `// 0${idx + 1}. ${art.category}` : `// 0${idx + 1}. MATÉRIA`,
				title: art.title,
				authorCallout: art.author,
				pageTarget: pageNum,
				...initialTeaser ? { teaser: initialTeaser } : {}
			};
		});
		updateField("highlights", indexedHighlights);
	};
	const handleLinkHighlightToArticle = (highlightId, articleId) => {
		const art = articles.find((a) => a.id === articleId);
		if (!art) return;
		const pageNum = getArticlePageNumber(art.id);
		const currentHlIndex = coverConfig.highlights.findIndex((h) => h.id === highlightId);
		const numPrefix = currentHlIndex >= 0 ? `// 0${currentHlIndex + 1}. ` : "";
		const teaser = art.subtitle && art.subtitle.length >= 25 && art.subtitle.length <= 95 ? art.subtitle.endsWith(".") ? art.subtitle : `${art.subtitle}.` : void 0;
		const updated = coverConfig.highlights.map((h) => h.id === highlightId ? {
			...h,
			tag: art.category ? `${numPrefix}${art.category}` : `${numPrefix}DOSSIER`,
			title: art.title,
			authorCallout: art.author,
			pageTarget: pageNum,
			...teaser || h.teaser ? { teaser: teaser || h.teaser } : {}
		} : h);
		updateField("highlights", updated);
	};
	const handleSetMainHeadlineFromArticle = (articleId) => {
		const art = articles.find((a) => a.id === articleId);
		if (!art) return;
		onChange({
			...coverConfig,
			mainHeadline: art.title.toUpperCase(),
			subHeadline: art.subtitle || (art.content ? art.content.slice(0, 110) + "..." : ""),
			categoryTag: art.category || "EXCLUSIVO",
			authorCallout: art.author ? art.author.toUpperCase() : "COACH MONTANHA"
		});
	};
	const handleAddHighlight = () => {
		const newHl = {
			id: "hl-" + Date.now(),
			tag: `// 0${coverConfig.highlights.length + 1}. PROTOCOLO`,
			title: "Nova matéria de força e alta performance",
			authorCallout: "Coach Montanha",
			pageTarget: coverConfig.highlights.length + 3
		};
		updateField("highlights", [...coverConfig.highlights, newHl]);
	};
	const handleUpdateHighlight = (id, field, value) => {
		const updated = coverConfig.highlights.map((h) => h.id === id ? {
			...h,
			[field]: value
		} : h);
		updateField("highlights", updated);
	};
	const handleRemoveHighlight = (id) => {
		updateField("highlights", coverConfig.highlights.filter((h) => h.id !== id));
	};
	const strengthPhotoPresets = [
		{
			label: "Heavy Kettlebell",
			url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85"
		},
		{
			label: "Mace & Athletic Power",
			url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85"
		},
		{
			label: "Studio Fitness Male",
			url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85"
		},
		{
			label: "Battle Ropes & Grit",
			url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=85"
		},
		{
			label: "Tire Flip & Power",
			url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=85"
		}
	];
	const coverStyles = [
		{
			id: "mad-methods",
			name: "Montanha Mad Methods (Industrial Dark & Yellow)",
			desc: "Estética My Mad Methods: Preto profundo, tipografia ultra-pesada, hazard stripes e HUD tático."
		},
		{
			id: "peak-performance",
			name: "Peak Performance / Pro Edition (High-Key Studio & Angular Blue)",
			desc: "Estética Pro Fitness: Fundo High-Key Studio Lighting, grafismos angulares azul e preto, selo circular vermelho."
		},
		{
			id: "tactical-stencil",
			name: "Tactical Stencil & Warning Orange",
			desc: "Laranja de sinalização e estética militar de treinamento tático com crosshair."
		},
		{
			id: "monochrome-iron",
			name: "Monochrome Heavy Iron & Red",
			desc: "Alto contraste cru em preto e branco marfim com detalhes em vermelho rubi."
		},
		{
			id: "midnight-fintech",
			name: "Midnight Fintech & Violet Glow (Design Language)",
			desc: "Dark void em azul-marinho (#050A14), brilhos radiais violeta e azul, cards translúcidos 4% e gradiente magenta."
		}
	];
	const textScalePresets = [
		{
			id: "compact",
			label: "Compacto",
			scale: 90
		},
		{
			id: "normal",
			label: "Padrão (100%)",
			scale: 100
		},
		{
			id: "large",
			label: "Grande (115% - Recomendado)",
			scale: 115
		},
		{
			id: "extra-large",
			label: "Extra Grande (135% - Máxima Legibilidade)",
			scale: 135
		}
	];
	const currentScale = coverConfig.textScale || 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-1.5 sm:p-2 rounded-xl border-2 flex items-center gap-1.5 sm:gap-2 shadow-xs bg-amber-400/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActiveSection("cover"),
					className: `flex-1 py-2.5 px-3 sm:px-4 rounded-lg font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${activeSection === "cover" ? "bg-amber-400 text-slate-950 border-2 border-black shadow-xs" : "opacity-75 hover:opacity-100 hover:bg-black/5 border-2 border-transparent"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Capa da Revista" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActiveSection("backCover"),
					className: `flex-1 py-2.5 px-3 sm:px-4 rounded-lg font-black text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${activeSection === "backCover" ? "bg-amber-400 text-slate-950 border-2 border-black shadow-xs" : "opacity-75 hover:opacity-100 hover:bg-black/5 border-2 border-transparent"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contracapa da Revista" })]
				})]
			}),
			activeSection === "cover" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerenciador de Tamanho & Legibilidade dos Textos da Capa" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs font-black px-2.5 py-1 rounded bg-amber-400 text-black border-2 border-black",
									children: [
										"ESCALA ATUAL: ",
										currentScale,
										"%"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
								children: textScalePresets.map((preset) => {
									const isSelected = currentScale === preset.scale;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleSelectTextScale(preset.scale, preset.id),
										className: `p-3 rounded-lg border-2 text-xs font-black transition-all text-center flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95 ${isSelected ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black hover:bg-amber-50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: preset.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[10px] opacity-75",
											children: [preset.scale, "%"]
										})]
									}, preset.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 pt-2 border-t border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-3.5 h-3.5 text-amber-500" }), "Ajuste Fino de Escala de Todas as Fontes da Capa"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleAdjustScale(-5),
												disabled: currentScale <= 80,
												className: "px-2 py-0.5 rounded border-2 border-black font-mono font-black text-xs hover:bg-black/10 disabled:opacity-30 cursor-pointer flex items-center gap-0.5",
												title: "Diminuir 5%",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5%" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-amber-600 font-black text-sm w-12 text-center",
												children: [currentScale, "%"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleAdjustScale(5),
												disabled: currentScale >= 160,
												className: "px-2 py-0.5 rounded border-2 border-black font-mono font-black text-xs hover:bg-black/10 disabled:opacity-30 cursor-pointer flex items-center gap-0.5",
												title: "Aumentar 5%",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5%" })]
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									value: [currentScale],
									onValueChange: (val) => updateField("textScale", val[0]),
									min: 80,
									max: 160,
									step: 5,
									className: "py-1 cursor-pointer"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estilo & Arquitetura da Capa Digital" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
							children: coverStyles.map((cs) => {
								const isSelected = (coverConfig.coverStyleVariant || "mad-methods") === cs.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									onClick: () => updateField("coverStyleVariant", cs.id),
									className: `theme-app-card-subtle cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between active:scale-95 ${isSelected ? "border-amber-500 ring-2 ring-amber-400 shadow-md" : "border-slate-300 hover:border-slate-600"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-black text-xs uppercase",
											children: cs.name
										}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-amber-500" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] opacity-75 leading-snug",
										children: cs.desc
									})] })
								}, cs.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Identidade Visual & Masthead" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "NOME DA REVISTA (MASTHEAD)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.mastheadText,
									onChange: (e) => updateField("mastheadText", e.target.value.toUpperCase()),
									placeholder: "Ex: MONTANHA",
									className: "theme-app-input font-black text-base mt-1 border-2"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "SLOGAN / SUBTÍTULO DO LOGOTIPO"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.sloganText,
									onChange: (e) => updateField("sloganText", e.target.value.toUpperCase()),
									placeholder: "Ex: UNCONVENTIONAL STRENGTH & HIGH PERFORMANCE",
									className: "theme-app-input text-xs mt-1 border-2"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl bg-amber-400/5 border-2 border-amber-500/30 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs font-black uppercase text-amber-600 dark:text-amber-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Faixa Superior de Metadados da Capa (Top Metadata Strip)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "text-xs font-bold flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VOLUME & ISSUE (TAG ⚡)" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												"data-testid": "input-cover-hex-badge",
												value: coverConfig.hexBadgeText ?? "",
												onChange: (e) => updateField("hexBadgeText", e.target.value.toUpperCase()),
												placeholder: "Ex: VOL. 01 // ISSUE 01",
												className: "theme-app-input font-mono text-xs mt-1 border-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] opacity-60 mt-0.5",
												children: "Selo com raio no topo da capa"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold",
												children: "BADGE DE EDIÇÃO"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: coverConfig.issueBadge,
												onChange: (e) => updateField("issueBadge", e.target.value.toUpperCase()),
												placeholder: "Ex: EDIÇÃO #02",
												className: "theme-app-input font-mono text-xs mt-1 border-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] opacity-60 mt-0.5",
												children: "Ex: EDIÇÃO #02"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold",
												children: "DATA DE LANÇAMENTO"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: coverConfig.issueDate,
												onChange: (e) => updateField("issueDate", e.target.value.toUpperCase()),
												placeholder: "Ex: SETEMBRO 2026",
												className: "theme-app-input font-mono text-xs mt-1 border-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] opacity-60 mt-0.5",
												children: "Mês e ano da edição"
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold",
												children: "SELO DE PREÇO / CATEGORIA"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: coverConfig.priceBadge,
												onChange: (e) => updateField("priceBadge", e.target.value.toUpperCase()),
												placeholder: "Ex: EDIÇÃO PREMIER",
												className: "theme-app-input font-mono text-xs mt-1 border-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] opacity-60 mt-0.5",
												children: "Ex: EDIÇÃO PREMIER"
											})
										] })
									]
								})]
							}),
							coverConfig.coverStyleVariant === "mad-methods" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold",
										children: "Faixa Industrial Amarela (Hazard Stripe)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: coverConfig.showHazardStripe,
										onCheckedChange: (val) => updateField("showHazardStripe", val)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold",
										children: "HUD Tático & Grid Técnico"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: coverConfig.showTechHud,
										onCheckedChange: (val) => updateField("showTechHud", val)
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4. Manchete Principal da Capa (Cover Story)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs opacity-75 mt-0.5",
									children: "Indexe diretamente da matéria principal da edição ou digite manualmente."
								})] }), articles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										onChange: (e) => {
											if (e.target.value) {
												handleSetMainHeadlineFromArticle(e.target.value);
												e.target.value = "";
											}
										},
										defaultValue: "",
										className: "theme-app-input font-bold text-xs h-8 border-2 border-black rounded px-2 bg-white text-black cursor-pointer shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "⚡ Puxar de uma Matéria..."
										}), articles.map((art, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: art.id,
											children: [
												"Matéria #",
												idx + 1,
												": ",
												art.title
											]
										}, art.id))]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "TAG DE CATEGORIA SUPERIOR"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.categoryTag,
									onChange: (e) => updateField("categoryTag", e.target.value.toUpperCase()),
									placeholder: "Ex: EXCLUSIVO ou COVER STORY",
									className: "theme-app-input font-mono text-xs mt-1 border-2 text-amber-600 font-bold"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "AUTOR EM DESTAQUE NA MANCHETE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.authorCallout || "",
									onChange: (e) => updateField("authorCallout", e.target.value.toUpperCase()),
									placeholder: "Ex: COACH MONTANHA",
									className: "theme-app-input font-mono text-xs mt-1 border-2 font-bold"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "MANCHETE PRINCIPAL (ALL CAPS)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: coverConfig.mainHeadline,
								onChange: (e) => updateField("mainHeadline", e.target.value.toUpperCase()),
								placeholder: "Ex: O CÓDIGO DA ALTA PERFORMANCE",
								className: "theme-app-input font-black text-base mt-1 border-2"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "SUBTÍTULO DA MATÉRIA PRINCIPAL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: coverConfig.subHeadline,
								onChange: (e) => updateField("subHeadline", e.target.value),
								placeholder: "Ex: Como reprogramar o metabolismo e forjar disciplina inabalável.",
								className: "theme-app-input text-xs mt-1 border-2 font-medium"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5. Chamadas Laterais & Artigos Apresentados na Capa" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs opacity-75 mt-0.5",
								children: "Indexe as matérias cadastradas para sincronizar títulos, tags e números exatos de página automaticamente."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 shrink-0",
								children: [articles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: handleAutoIndexAllArticles,
									className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs flex items-center gap-1 border-2 border-black shadow-xs cursor-pointer",
									title: "Puxa todas as matérias cadastradas e calcula as páginas automaticamente",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Auto-Indexar" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: handleGenerateAiTeasers,
									disabled: isGeneratingTeasers || coverConfig.highlights.length === 0,
									className: "h-8 bg-black hover:bg-neutral-800 text-amber-400 font-black text-xs flex items-center gap-1 border-2 border-amber-400 shadow-xs cursor-pointer",
									title: "Gera ganchos curtos de impacto com base no texto dos artigos para estampar a capa",
									children: [isGeneratingTeasers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isGeneratingTeasers ? "Gerando..." : "⚡ Gerar Chamadas IA" })]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: handleAddHighlight,
									variant: "outline",
									className: "h-8 font-black text-xs flex items-center gap-1 border-2 border-current shadow-xs cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Adicionar" })]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: coverConfig.highlights.map((hl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-3.5 rounded-lg border-2 border-slate-300 space-y-2.5 shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-xs font-black text-amber-600 uppercase",
												children: ["CHAMADA #", idx + 1]
											}), hl.pageTarget ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "bg-black text-amber-400 font-mono text-[9px] font-black px-2 py-0.5 rounded border border-black uppercase",
												children: ["PÁG. ", formatPageNumber(hl.pageTarget)]
											}) : null]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [articles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												onChange: (e) => {
													if (e.target.value) {
														handleLinkHighlightToArticle(hl.id, e.target.value);
														e.target.value = "";
													}
												},
												defaultValue: "",
												className: "theme-app-input text-[11px] font-bold h-7 border rounded px-1.5 bg-white text-black cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													children: "🔗 Vincular à Matéria..."
												}), articles.map((art) => {
													const pageNum = getArticlePageNumber(art.id);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
														value: art.id,
														children: [
															"[Pág ",
															formatPageNumber(pageNum),
															"] ",
															art.title
														]
													}, art.id);
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleRemoveHighlight(hl.id),
												className: "p-1 text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
												title: "Remover Chamada",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-12 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-[10px] font-bold",
													children: "TAG / CATEGORIA"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: hl.tag,
													onChange: (e) => handleUpdateHighlight(hl.id, "tag", e.target.value.toUpperCase()),
													placeholder: "Ex: // 01. BALÍSTICA & POTÊNCIA",
													className: "theme-app-input text-xs font-mono font-bold mt-1 border-2"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-[10px] font-bold",
													children: "TÍTULO DA MATÉRIA NA CAPA"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: hl.title,
													onChange: (e) => handleUpdateHighlight(hl.id, "title", e.target.value),
													placeholder: "Título chamativo de alta legibilidade",
													className: "theme-app-input text-xs font-bold mt-1 border-2"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-[10px] font-bold",
													children: "PÁGINA"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													type: "number",
													value: hl.pageTarget || "",
													onChange: (e) => handleUpdateHighlight(hl.id, "pageTarget", parseInt(e.target.value) || 0),
													placeholder: "Ex: 3",
													className: "theme-app-input text-xs font-mono font-bold mt-1 border-2"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CHAMADA CURTA DE IMPACTO (SUBSTITUI AUTOR/PÁGINA NA CAPA)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] font-normal opacity-70",
											children: "Ganchos instigantes de 8 a 15 palavras"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: hl.teaser || "",
										onChange: (e) => handleUpdateHighlight(hl.id, "teaser", e.target.value),
										placeholder: "Ex: O método científico definitivo para romper o platô sem atalhos.",
										className: "theme-app-input text-xs italic font-medium mt-1 border-2 border-amber-500/40"
									})] })
								]
							}, hl.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
								label: "Fotografia de Fundo da Capa",
								value: coverConfig.backgroundImage,
								onChange: (url) => updateField("backgroundImage", url),
								aspectRatio: "portrait",
								placeholderPrompt: "Guerreiro atleta executando balística pesada com kettlebell em estúdio de alta luz...",
								helperText: "Faça upload do PC, gere com IA ou use presets"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 border-t border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] font-bold uppercase mb-2 block opacity-80",
									children: "Ou escolha um dos Presets Rápidos de Força:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-5 gap-2",
									children: strengthPhotoPresets.map((preset, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => updateField("backgroundImage", preset.url),
										className: "group relative rounded-lg overflow-hidden border-2 border-slate-300 hover:border-black transition-all text-left aspect-[4/3] shadow-xs cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: preset.url,
											alt: preset.label,
											className: "w-full h-full object-cover group-hover:scale-105 transition-transform"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 bg-black/60 flex items-end p-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] font-black text-amber-300 leading-tight uppercase",
												children: preset.label
											})
										})]
									}, idx))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pt-2 border-t border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Escurecimento / Opacidade da Foto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-amber-500 font-black",
										children: [coverConfig.backgroundOverlayOpacity, "%"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									value: [coverConfig.backgroundOverlayOpacity],
									onValueChange: (val) => updateField("backgroundOverlayOpacity", val[0] ?? 50),
									min: 10,
									max: 90,
									step: 5,
									className: "py-1 cursor-pointer"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "7. Textos da Base da Capa (Rodapé, Editora & Código de Barras)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
									children: "RODAPÉ DA CAPA"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "NOME DA EDITORA / IMPRINT (RODAPÉ ESQUERDO)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.footerPublisherText ?? "",
									onChange: (e) => updateField("footerPublisherText", e.target.value.toUpperCase()),
									placeholder: "Ex: REVISTA MONTANHA EDITORIAL CORP.",
									className: "theme-app-input font-bold text-xs mt-1 border-2"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "SUBTEXTO TÉCNICO DO RODAPÉ"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.footerSubText ?? "",
									onChange: (e) => updateField("footerSubText", e.target.value.toUpperCase()),
									placeholder: "Ex: DIAGRAMAÇÃO A4 DIGITAL // PRINT-READY",
									className: "theme-app-input text-xs mt-1 border-2"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "CÓDIGO DE BARRAS (NUMÉRICO)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: coverConfig.barcodeText,
									onChange: (e) => updateField("barcodeText", e.target.value),
									placeholder: "Ex: 9 772026 001008",
									className: "theme-app-input font-mono text-xs mt-1 border-2"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold",
									children: "PALAVRAS-CHAVE / DESTAQUES DO RODAPÉ (SEPARADOS POR VÍRGULA)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: (coverConfig.footerHighlights || []).join(", "),
									onChange: (e) => updateField("footerHighlights", e.target.value.split(",").map((s) => s.trim().toUpperCase()).filter(Boolean)),
									placeholder: "Ex: NUTRIÇÃO DE PRECISÃO, SUPLEMENTAÇÃO, LONGEVIDADE ATIVA",
									className: "theme-app-input text-xs mt-1 border-2 font-mono"
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-4 rounded-xl border-2 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "font-black text-xs uppercase flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Próximo Passo: Contracapa da Revista" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] opacity-75 mt-0.5",
							children: "Configure o fechamento da edição, slogan final, fotografia e canais oficiais."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => setActiveSection("backCover"),
							className: "bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer",
							children: "Configurar Contracapa ▸"
						})]
					})
				]
			}),
			activeSection === "backCover" && backCoverConfig && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-current pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-black uppercase tracking-wide",
									children: "Contracapa & Fechamento da Edição"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs opacity-75",
									children: "Página final da revista impressa e digital: manifesto de encerramento, fotografia marcante e redes oficiais."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase shrink-0 self-start sm:self-auto",
								children: "ÚLTIMA PÁGINA A4"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "MANCHETE DA CONTRACAPA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: backCoverConfig.headline,
								onChange: (e) => updateBackCover("headline", e.target.value.toUpperCase()),
								placeholder: "TRANSFORME SEU CORPO. CONQUISTE SUA VIDA.",
								className: "theme-app-input font-bold text-xs mt-1 border-2"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "SUBTÍTULO / SLOGAN FINAL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: backCoverConfig.subheadline,
								onChange: (e) => updateBackCover("subheadline", e.target.value),
								placeholder: "Junte-se à comunidade oficial do Coach Montanha...",
								className: "theme-app-input text-xs mt-1 border-2"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
							label: "Fotografia de Fundo da Contracapa",
							value: backCoverConfig.backgroundImage,
							onChange: (url) => updateBackCover("backgroundImage", url),
							aspectRatio: "portrait",
							placeholderPrompt: "Atleta em silhueta segurando kettlebell pesado ao pôr do sol, cinematográfico...",
							helperText: "Upload do PC, IA ou URL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "MENSAGEM INSTITUCIONAL DE FECHAMENTO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: backCoverConfig.message,
							onChange: (e) => updateBackCover("message", e.target.value),
							placeholder: "A consistência é o único atalho real para a grandeza...",
							className: "theme-app-input text-xs mt-1 h-24 border-2 leading-relaxed"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-black uppercase tracking-wider block",
								children: "CANAIS DE CONTATO & COMUNIDADE OFICIAL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-[11px] font-bold flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INSTAGRAM" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: backCoverConfig.socialHandles?.instagram || "",
										onChange: (e) => updateSocialHandles("instagram", e.target.value),
										placeholder: "@coachmontanha",
										className: "theme-app-input font-mono text-xs mt-1 border-2"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-[11px] font-bold flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "w-3.5 h-3.5 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "YOUTUBE" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: backCoverConfig.socialHandles?.youtube || "",
										onChange: (e) => updateSocialHandles("youtube", e.target.value),
										placeholder: "Canal Oficial",
										className: "theme-app-input font-mono text-xs mt-1 border-2"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-[11px] font-bold flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "E-MAIL" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: backCoverConfig.socialHandles?.email || "",
										onChange: (e) => updateSocialHandles("email", e.target.value),
										placeholder: "contato@coachmontanha.com.br",
										className: "theme-app-input font-mono text-xs mt-1 border-2"
									})] })
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "theme-app-card-subtle p-4 rounded-xl border-2 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "font-black text-xs uppercase flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voltar para a Capa Principal" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] opacity-75 mt-0.5",
						children: "Alterne para ajustar a manchete principal, fotografia de capa e chamadas da edição."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setActiveSection("cover"),
						className: "font-black text-xs border-2 shrink-0 cursor-pointer",
						children: "◂ Voltar para Capa"
					})]
				})]
			})
		]
	});
};
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 bg-white text-slate-950 p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-xl", className),
	style: {
		backgroundColor: "var(--app-surface, #FFFFFF)",
		color: "var(--app-text, #000000)",
		borderColor: "var(--app-border, #000000)"
	},
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-md p-1 opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-bold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var ArticleEditorModal = ({ isOpen, onClose, article, onSave, project }) => {
	const [formData, setFormData] = (0, import_react.useState)({
		id: "art-" + Date.now(),
		title: "",
		subtitle: "",
		category: "MONTANHA METHOD",
		author: "Coach Montanha",
		authorBio: "Master Coach & Fundador",
		authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
		heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
		heroImageCaption: "",
		content: "",
		pullQuotes: [],
		keyTakeaways: [],
		layoutTemplate: "editorial-lead",
		tags: ["Força", "Alta Performance"],
		estimatedReadTime: 4,
		featuredOnCover: false,
		enabled: true
	});
	const [newQuoteInput, setNewQuoteInput] = (0, import_react.useState)("");
	const [newTakeawayInput, setNewTakeawayInput] = (0, import_react.useState)("");
	const [newTagInput, setNewTagInput] = (0, import_react.useState)("");
	const [isAiLoading, setIsAiLoading] = (0, import_react.useState)(false);
	const [aiStatusMsg, setAiStatusMsg] = (0, import_react.useState)("");
	const [previewFormatted, setPreviewFormatted] = (0, import_react.useState)(false);
	const [activeModalTab, setActiveModalTab] = (0, import_react.useState)("edit");
	const [previewPagePart, setPreviewPagePart] = (0, import_react.useState)(1);
	const [previewViewAll, setPreviewViewAll] = (0, import_react.useState)(false);
	const effectiveProject = project || INITIAL_MAGAZINE_PROJECT;
	const effectiveTheme = MAGAZINE_THEMES.find((t) => t.id === effectiveProject.themeId) || MAGAZINE_THEMES[0];
	const textareaRef = (0, import_react.useRef)(null);
	const applyFormatting = (prefix, suffix, defaultPlaceholder = "texto") => {
		const el = textareaRef.current;
		if (!el) {
			setFormData((prev) => ({
				...prev,
				content: (prev.content || "") + `${prefix}${defaultPlaceholder}${suffix}`
			}));
			return;
		}
		const start = el.selectionStart ?? 0;
		const end = el.selectionEnd ?? 0;
		const currentVal = formData.content || "";
		const textToWrap = currentVal.substring(start, end) || defaultPlaceholder;
		const replacement = `${prefix}${textToWrap}${suffix}`;
		const newVal = currentVal.substring(0, start) + replacement + currentVal.substring(end);
		setFormData((prev) => ({
			...prev,
			content: newVal
		}));
		setTimeout(() => {
			el.focus();
			el.setSelectionRange(start + prefix.length, start + prefix.length + textToWrap.length);
		}, 40);
	};
	const [polishSuccess, setPolishSuccess] = (0, import_react.useState)(null);
	const [previousContent, setPreviousContent] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (article) setFormData({
			...article,
			references: article.references || "",
			pullQuotes: Array.isArray(article.pullQuotes) ? article.pullQuotes : [],
			keyTakeaways: Array.isArray(article.keyTakeaways) ? article.keyTakeaways : [],
			tags: Array.isArray(article.tags) ? article.tags : [],
			heroImagePosition: article.heroImagePosition || "50% 50%",
			heroImageHeight: article.heroImageHeight || "large",
			secondaryImagePosition: article.secondaryImagePosition || "50% 50%",
			secondaryImagePlacement: article.secondaryImagePlacement || "bottom",
			bottomSpotlightPosition: article.bottomSpotlightPosition || "50% 50%",
			enabled: article.enabled !== false
		});
		else setFormData({
			id: "art-" + Date.now(),
			title: "",
			subtitle: "",
			category: "MONTANHA METHOD",
			author: "Coach Montanha",
			authorBio: "Master Coach & Fundador",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
			heroImageCaption: "",
			heroImagePosition: "50% 50%",
			heroImageHeight: "large",
			secondaryImagePosition: "50% 50%",
			secondaryImagePlacement: "bottom",
			bottomSpotlightPosition: "50% 50%",
			content: "",
			references: "",
			pullQuotes: [],
			keyTakeaways: [],
			layoutTemplate: "editorial-lead",
			tags: ["Força", "Alta Performance"],
			estimatedReadTime: 4,
			featuredOnCover: false,
			enabled: true
		});
		setSaveError(null);
	}, [article, isOpen]);
	const [saveError, setSaveError] = (0, import_react.useState)(null);
	const handleSave = () => {
		if (!formData.title.trim()) {
			setSaveError("Por favor, preencha o título da matéria.");
			return;
		}
		setSaveError(null);
		onSave(formData);
		onClose();
	};
	const handleAddQuote = () => {
		if (!newQuoteInput.trim()) return;
		const current = Array.isArray(formData.pullQuotes) ? formData.pullQuotes : [];
		setFormData((prev) => ({
			...prev,
			pullQuotes: [...current, newQuoteInput.trim()]
		}));
		setNewQuoteInput("");
	};
	const handleRemoveQuote = (idx) => {
		const current = Array.isArray(formData.pullQuotes) ? formData.pullQuotes : [];
		setFormData((prev) => ({
			...prev,
			pullQuotes: current.filter((_, i) => i !== idx)
		}));
	};
	const handleProofreadText = async () => {
		if (!formData.content) return;
		setIsAiLoading(true);
		setPolishSuccess(null);
		setAiStatusMsg("Identificando e corrigindo erros de digitação e falhas ortográficas com IA...");
		try {
			const originalText = formData.content;
			const corrected = await proofreadEditorialText(originalText);
			setPreviousContent(originalText);
			setFormData((prev) => ({
				...prev,
				content: corrected
			}));
			setPolishSuccess("✓ Revisão concluída com sucesso! Erros ortográficos e de digitação corrigidos mantendo sua autoria e formatação.");
			setTimeout(() => setPolishSuccess(null), 6e3);
		} catch (err) {
			alert("Erro na revisão ortográfica: " + err.message);
		} finally {
			setIsAiLoading(false);
		}
	};
	const handleUndoProofread = () => {
		if (previousContent !== null) {
			setFormData((prev) => ({
				...prev,
				content: previousContent
			}));
			setPreviousContent(null);
			setPolishSuccess("✓ Versão anterior restaurada.");
			setTimeout(() => setPolishSuccess(null), 3e3);
		}
	};
	const handlePolishText = async (tone = "journalistic") => {
		if (!formData.content) return;
		setIsAiLoading(true);
		setPolishSuccess(null);
		setAiStatusMsg("Polindo texto com linguagem editorial rica (negrito, itálico, destaques)...");
		try {
			const polished = await polishEditorialText(formData.content, tone);
			setFormData((prev) => ({
				...prev,
				content: polished
			}));
			setPolishSuccess(`✓ Texto aprimorado com sucesso em tom ${tone === "motivational" ? "Motivacional" : "Jornalístico"}! Formatação rica aplicada.`);
			setTimeout(() => setPolishSuccess(null), 5e3);
		} catch (err) {
			alert("Erro no polimento: " + err.message);
		} finally {
			setIsAiLoading(false);
		}
	};
	const handleSuggestHeadlines = async () => {
		if (!formData.content && !formData.title) return;
		setIsAiLoading(true);
		setAiStatusMsg("Criando sugestões de manchetes impactantes...");
		try {
			const suggestions = await generateEditorialHeadlines(formData.title, formData.content);
			if (suggestions.length > 0) {
				const pick = suggestions[0];
				setFormData((prev) => ({
					...prev,
					title: pick.title,
					subtitle: pick.subtitle,
					category: pick.category || prev.category
				}));
			}
		} catch (err) {
			alert("Erro na IA: " + err.message);
		} finally {
			setIsAiLoading(false);
		}
	};
	const handleExtractQuotes = async () => {
		if (!formData.content) return;
		setIsAiLoading(true);
		setAiStatusMsg("Extraindo citações de destaque tipográfico...");
		try {
			const quotes = await extractPullQuotes$1(formData.content);
			setFormData((prev) => ({
				...prev,
				pullQuotes: quotes
			}));
		} catch (err) {
			alert("Erro na IA: " + err.message);
		} finally {
			setIsAiLoading(false);
		}
	};
	const updateWorkoutProtocol = (field, value) => {
		setFormData({
			...formData,
			workoutProtocol: {
				workoutTitle: formData.workoutProtocol?.workoutTitle || formData.title,
				warmupPrep: formData.workoutProtocol?.warmupPrep || "",
				exercises: formData.workoutProtocol?.exercises || [],
				finisher: formData.workoutProtocol?.finisher || "",
				videoQrUrl: formData.workoutProtocol?.videoQrUrl || "",
				...formData.workoutProtocol,
				[field]: value
			}
		});
	};
	const handleAddWorkoutExercise = () => {
		const newEx = {
			code: `A${(formData.workoutProtocol?.exercises.length || 0) + 1}`,
			name: "NOVO EXERCÍCIO NÃO-CONVENCIONAL",
			setsReps: "4 SÉRIES × 6 REPS",
			tempoRest: "TEMPO: 20X1 // REST: 90s",
			keyPoints: "Trave o core, mantenha postura neutra e execute com máxima potência."
		};
		const currentExercises = formData.workoutProtocol?.exercises || [];
		updateWorkoutProtocol("exercises", [...currentExercises, newEx]);
	};
	const handleUpdateExercise = (idx, field, val) => {
		const updated = (formData.workoutProtocol?.exercises || []).map((ex, i) => i === idx ? {
			...ex,
			[field]: val
		} : ex);
		updateWorkoutProtocol("exercises", updated);
	};
	const handleRemoveExercise = (idx) => {
		const current = formData.workoutProtocol?.exercises || [];
		updateWorkoutProtocol("exercises", current.filter((_, i) => i !== idx));
	};
	const updateProductPromotion = (field, value) => {
		setFormData({
			...formData,
			productPromotion: {
				slogan: formData.productPromotion?.slogan || "FORGED IN IRON // BUILT FOR WAR",
				productName: formData.productPromotion?.productName || formData.title,
				productSubtitle: formData.productPromotion?.productSubtitle || formData.subtitle,
				productImage: formData.productPromotion?.productImage || formData.heroImage,
				promoBadgeText: formData.productPromotion?.promoBadgeText || "SPECIAL OFFER // 15% OFF",
				couponCode: formData.productPromotion?.couponCode || "MONTANHA15",
				ctaUrl: formData.productPromotion?.ctaUrl || "WWW.MONTANHAIRON.COM.BR",
				specBadges: formData.productPromotion?.specBadges || [
					{
						title: "GRAVITY CAST",
						subtitle: "Single pour iron"
					},
					{
						title: "POWDER COAT",
						subtitle: "Matte grip"
					},
					{
						title: "CALIBRATED",
						subtitle: "+/- 0.5% weight"
					},
					{
						title: "LIFETIME SPEC",
						subtitle: "Indestructible"
					}
				],
				features: formData.productPromotion?.features || [],
				...formData.productPromotion,
				[field]: value
			}
		});
	};
	const updateFacilitySpotlight = (field, value) => {
		setFormData({
			...formData,
			facilitySpotlight: {
				facilityName: formData.facilitySpotlight?.facilityName || "MONTANHA PERFORMANCE LAB",
				headCoach: formData.facilitySpotlight?.headCoach || "COACH MONTANHA",
				location: formData.facilitySpotlight?.location || "SÃO PAULO // SP",
				website: formData.facilitySpotlight?.website || "WWW.MONTANHALAB.COM.BR",
				methodsUsed: formData.facilitySpotlight?.methodsUsed || [
					"KETTLEBELLS",
					"STEEL MACES",
					"CLUBBELLS"
				],
				specialties: formData.facilitySpotlight?.specialties || ["Força", "Condicionamento"],
				galleryPhotos: formData.facilitySpotlight?.galleryPhotos || [
					"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
					"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
					"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
				],
				overviewText: formData.facilitySpotlight?.overviewText || "",
				missionText: formData.facilitySpotlight?.missionText || "",
				philosophyText: formData.facilitySpotlight?.philosophyText || "",
				anchoredQuote: formData.facilitySpotlight?.anchoredQuote || "",
				...formData.facilitySpotlight,
				[field]: value
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"data-testid": "article-modal",
			className: `theme-app-card ${activeModalTab === "preview" && previewViewAll ? "max-w-6xl" : "max-w-4xl"} max-h-[92vh] overflow-y-auto p-4 sm:p-6 custom-scrollbar font-sans border-2 shadow-2xl transition-all duration-200`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b-2 border-current pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "text-base sm:text-lg font-black flex items-center gap-2 uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Editor Editorial de Artigos" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 p-1 rounded-lg bg-slate-900/80 border border-slate-700 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModalTab("edit"),
							className: `px-3 py-1.5 rounded-md text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${activeModalTab === "edit" ? "bg-amber-400 text-black shadow-xs border border-black" : "text-slate-300 hover:text-white"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Editar Conteúdo" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveModalTab("preview"),
							className: `px-3 py-1.5 rounded-md text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${activeModalTab === "preview" ? "bg-amber-400 text-black shadow-xs border border-black" : "text-slate-300 hover:text-white"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prévia da Revista (A4)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" })
							]
						})]
					})]
				}),
				saveError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-testid": "article-error-msg",
					className: "p-3 rounded-lg bg-red-500/10 border-2 border-red-500 text-red-700 text-xs font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saveError })]
				}),
				isAiLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-amber-400 text-black border-2 border-black p-3 rounded-lg flex items-center gap-3 font-bold animate-pulse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-5 h-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-black",
						children: aiStatusMsg
					})]
				}),
				activeModalTab === "edit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold mb-1 block",
									children: "CATEGORIA DA MATÉRIA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.category,
									onChange: (e) => setFormData({
										...formData,
										category: e.target.value.toUpperCase()
									}),
									placeholder: "EX: MONTANHA METHOD, GEAR & PROMO, STUDIO SPOTLIGHT",
									className: "theme-app-input font-bold border-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-bold",
										children: "MANCHETE / TÍTULO PRINCIPAL (H1)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleSuggestHeadlines,
										disabled: isAiLoading,
										className: "text-[11px] font-bold text-amber-600 hover:underline flex items-center gap-1 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), "Sugerir Títulos com IA"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									"data-testid": "input-article-title",
									value: formData.title,
									onChange: (e) => setFormData({
										...formData,
										title: e.target.value.toUpperCase()
									}),
									placeholder: "Título impactante em caixa alta",
									className: "theme-app-input font-black text-sm border-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold mb-1 block",
									children: "SUBTÍTULO / DECK EDITORIAL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									"data-testid": "input-article-subtitle",
									value: formData.subtitle,
									onChange: (e) => setFormData({
										...formData,
										subtitle: e.target.value
									}),
									placeholder: "Resumo de 1 a 2 frases que sintetiza o takeaway da matéria...",
									className: "theme-app-input text-xs h-16 border"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold",
										children: "Autor da Matéria"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: formData.author,
										onChange: (e) => setFormData({
											...formData,
											author: e.target.value
										}),
										placeholder: "Nome do Autor",
										className: "theme-app-input text-xs mt-1 border"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold",
										children: "Bio Curta"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: formData.authorBio || "",
										onChange: (e) => setFormData({
											...formData,
											authorBio: e.target.value
										}),
										placeholder: "Credenciais / Cargo",
										className: "theme-app-input text-xs mt-1 border"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs font-bold mb-1.5 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TEMPLATE DE DIAGRAMAÇÃO" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: formData.layoutTemplate,
									onChange: (e) => setFormData({
										...formData,
										layoutTemplate: e.target.value
									}),
									className: "theme-app-input w-full rounded-md px-3 py-2 text-xs font-bold border-2 focus:outline-none focus:ring-2 focus:ring-amber-500",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "editorial-lead",
											children: "Standard Feature / Artigo Técnico (3 Colunas + Drop Cap + Hero Banner)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "workout-protocol",
											children: "Workout Protocol & Exercise Breakdowns (Clusters A1/A2, QR Code, Warmup)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "product-ad",
											children: "Full-Page Product & Gear Promotion (Anúncio Full, Cupom, QR Code, Tech Specs)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "facility-spotlight",
											children: "Studio / Facility Spotlight (Collage de Fotos, Tech Sheet, Manifesto)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "two-column-quote",
											children: "2 Colunas Clássicas com Citação Central"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "infographic-tips",
											children: "Guia Prático com Cards de Dicas Numeradas"
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg border-2 theme-app-card-subtle space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXTENSÃO DO ARTIGO NA REVISTA" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-mono font-bold text-amber-600 uppercase",
												children: (formData.pageSpan || 1) === 1 ? "1 PÁGINA A4" : (formData.pageSpan || 1) === 2 ? "2 PÁGINAS (DUPLA)" : `${formData.pageSpan} PÁGINAS`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.pageSpan || 1,
											onChange: (e) => {
												const newSpan = parseInt(e.target.value) || 1;
												setFormData({
													...formData,
													pageSpan: newSpan
												});
												if (previewPagePart > newSpan) setPreviewPagePart(1);
											},
											className: "w-full theme-app-input text-xs font-bold border-2 p-1.5 rounded cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 1,
													children: "1 Página A4 (Artigo Padrão)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 2,
													children: "2 Páginas A4 (Página Dupla Especial)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 3,
													children: "3 Páginas A4 (Matéria Longa Aprofundada)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 4,
													children: "4 Páginas A4 (Dossiê Especial // 2 Páginas Duplas)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 5,
													children: "5 Páginas A4 (Grande Reportagem Investigativa)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 6,
													children: "6 Páginas A4 (Edição Especial Estendida)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] opacity-75 leading-tight",
											children: "Selecione a quantidade ideal de páginas para o artigo. O texto fluirá continuamente preenchendo cada página ao máximo."
										}),
										(() => {
											const isSingle = (formData.pageSpan || 1) === 1;
											const recPages = calculateRequiredArticlePages(formData);
											if (isSingle) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-emerald-500/15 border-2 border-emerald-500/40 text-[11px] gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-emerald-800 dark:text-emerald-300 font-medium flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														"✓ ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Modo 1 Página A4 Ativo:" }),
														" Todo o texto será condensado nesta página única sem cortes."
													] })]
												}), recPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														setFormData({
															...formData,
															pageSpan: recPages
														});
														if (previewPagePart > recPages) setPreviewPagePart(1);
													},
													className: "px-2 py-0.5 rounded bg-amber-400 text-black font-mono font-bold text-[9.5px] uppercase cursor-pointer hover:bg-amber-300 shadow-xs shrink-0 self-end sm:self-auto",
													title: "Expandir para 2 ou mais páginas se desejar um layout mais espaçoso",
													children: [
														"Expandir (",
														recPages,
														" Págs)"
													]
												})]
											});
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-amber-500/15 border-2 border-amber-500/40 text-[11px] gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-amber-800 dark:text-amber-300 font-medium flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														"Matéria configurada para ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [formData.pageSpan, " Páginas"] }),
														"."
													] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														setFormData({
															...formData,
															pageSpan: 1
														});
														setPreviewPagePart(1);
													},
													className: "px-2 py-0.5 rounded bg-emerald-500 text-white font-mono font-bold text-[9.5px] uppercase cursor-pointer hover:bg-emerald-600 shadow-xs shrink-0 self-end sm:self-auto",
													title: "Condensar todo o texto em apenas 1 página única",
													children: "Condensar em 1 Página"
												})]
											});
										})()
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-2.5 rounded-lg border-2 theme-app-card-subtle",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-bold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), "Destaque na Capa da Revista"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] opacity-75",
											children: "Indexar automaticamente o título e categoria desta matéria na capa da edição"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: formData.featuredOnCover,
										onCheckedChange: (val) => setFormData({
											...formData,
											featuredOnCover: val
										})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
									label: "Foto Hero do Artigo",
									value: formData.heroImage,
									onChange: (url) => setFormData({
										...formData,
										heroImage: url,
										heroImagePosition: formData.heroImagePosition || "50% 50%"
									}),
									position: formData.heroImagePosition || "50% 50%",
									onPositionChange: (pos) => setFormData({
										...formData,
										heroImagePosition: pos
									}),
									aspectRatio: "landscape",
									placeholderPrompt: "Fotografia editorial em 8k de atleta em treino intenso...",
									helperText: "Banco Real, IA Flux, Upload ou URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[10px] font-bold",
											children: "ALTURA DA FOTO DE ABERTURA"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.heroImageHeight || "large",
											onChange: (e) => setFormData({
												...formData,
												heroImageHeight: e.target.value
											}),
											className: "w-full theme-app-input text-xs font-bold mt-1 border-2 p-1.5 rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "large",
													children: "Grande e Imponente (2x a 3x maior)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "medium",
													children: "Panorâmica Média"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "compact",
													children: "Faixa Compacta"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[10px] font-bold",
											children: "ENQUADRAMENTO DA FOTO NO ARTIGO"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.heroImageLayout || "banner",
											onChange: (e) => setFormData({
												...formData,
												heroImageLayout: e.target.value
											}),
											className: "w-full theme-app-input text-xs font-bold mt-1 border-2 p-1.5 rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "banner",
													children: "Horizontal Panorâmico (Padrão)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "contain",
													children: "Sem Cortar / Enquadramento Total"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "compact",
													children: "Faixa Compacta (Mais espaço para texto)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "hidden",
													children: "Ocultar Foto (Apenas Texto e Citações)"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[10px] font-bold",
											children: "DENSIDADE / TAMANHO DO TEXTO"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.textDensity || "normal",
											onChange: (e) => setFormData({
												...formData,
												textDensity: e.target.value
											}),
											className: "w-full theme-app-input text-xs font-bold mt-1 border-2 p-1.5 rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "compact",
													children: "Texto Compacto (Cabe mais texto sem cortar)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "normal",
													children: "Normal (Equilibrado)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "spacious",
													children: "Espaçoso (Artigos curtos)"
												})
											]
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[10px] font-bold",
									children: "LEGENDA DA FOTO HERO (CRÉDITOS)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.heroImageCaption || "",
									onChange: (e) => setFormData({
										...formData,
										heroImageCaption: e.target.value
									}),
									placeholder: "Ex: Movimento balístico capturado no Montanha Lab.",
									className: "theme-app-input text-xs mt-1 border"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-3 rounded-lg border-2 theme-app-card-subtle",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "text-xs font-bold flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXIBIR IMAGEM FINAL DE FECHAMENTO" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] opacity-75",
											children: "Desative para remover a foto final e liberar 100% da altura da página para o texto."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: formData.showClosingImage !== false,
										onCheckedChange: (val) => setFormData({
											...formData,
											showClosingImage: val
										})
									})]
								}),
								formData.showClosingImage !== false && (formData.pageSpan || 1) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg border-2 theme-app-card-subtle space-y-2 bg-amber-400/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FOTO SECUNDÁRIA (FECHAMENTO DA MATÉRIA)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [formData.secondaryImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setFormData({
														...formData,
														secondaryImage: "",
														secondaryImageCaption: ""
													}),
													className: "text-[10px] text-red-500 hover:text-red-600 font-bold flex items-center gap-1 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3 h-3" }), "Remover Foto"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[9px] font-mono text-amber-600 font-bold uppercase",
													children: [
														"Página ",
														formData.pageSpan,
														" (Conclusão)"
													]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[10px] font-bold",
												children: "POSIÇÃO DA FOTO NA PÁGINA 2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: formData.secondaryImagePlacement || "bottom",
												onChange: (e) => setFormData({
													...formData,
													secondaryImagePlacement: e.target.value
												}),
												className: "w-full theme-app-input text-xs font-bold mt-1 border-2 p-1.5 rounded",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "bottom",
													children: "Ao Final da Matéria (Ocupando a Base / Restante da Página - Recomendado)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "top",
													children: "No Topo da Página 2 (Acima do Texto)"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[9.5px] opacity-70 mt-0.5",
												children: "Ao final da matéria, a foto expande para preencher o espaço restante da página, eliminando buracos vazios."
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
											label: "Segunda Imagem Editorial",
											value: formData.secondaryImage || "",
											onChange: (url) => setFormData({
												...formData,
												secondaryImage: url,
												secondaryImagePosition: formData.secondaryImagePosition || "50% 50%"
											}),
											position: formData.secondaryImagePosition || "50% 50%",
											onPositionChange: (pos) => setFormData({
												...formData,
												secondaryImagePosition: pos
											}),
											aspectRatio: "landscape",
											placeholderPrompt: "Fotografia complementar de apoio em alta resolução...",
											helperText: "Preenche o espaço da 2ª página com imponência visual"
										})
									]
								}),
								formData.showClosingImage !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg border-2 theme-app-card-subtle space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VISUAL SPOTLIGHT (DESTAQUE INFERIOR / ARTIGOS CURTOS)" })]
											}), formData.bottomSpotlightImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setFormData({
													...formData,
													bottomSpotlightImage: "",
													bottomSpotlightCaption: ""
												}),
												className: "text-[10px] text-red-500 hover:text-red-600 font-bold flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3 h-3" }), "Remover Spotlight"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
											label: "Imagem do Visual Spotlight (Opcional)",
											value: formData.bottomSpotlightImage || "",
											onChange: (url) => setFormData({
												...formData,
												bottomSpotlightImage: url,
												bottomSpotlightPosition: formData.bottomSpotlightPosition || "50% 50%"
											}),
											position: formData.bottomSpotlightPosition || "50% 50%",
											onPositionChange: (pos) => setFormData({
												...formData,
												bottomSpotlightPosition: pos
											}),
											aspectRatio: "landscape",
											placeholderPrompt: "Fotografia editorial temática em alta definição para preencher o rodapé...",
											helperText: "Preenche automaticamente o espaço inferior quando a matéria for curta"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: formData.bottomSpotlightCaption || "",
											onChange: (e) => setFormData({
												...formData,
												bottomSpotlightCaption: e.target.value
											}),
											placeholder: "Legenda ou frase do Visual Spotlight (Opcional)",
											className: "theme-app-input text-xs mt-1 border"
										})
									]
								}),
								formData.showClosingImage === false && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✓" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Imagem final desativada:" }), " Todo o espaço vertical da página será dedicado ao fluxo de texto contínuo."] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "theme-app-card-subtle p-3.5 rounded-lg border-2 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "text-xs font-bold flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CITAÇÕES DE DESTAQUE (PULL QUOTES)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: handleExtractQuotes,
												disabled: isAiLoading || !formData.content,
												className: "text-[11px] font-bold text-amber-600 hover:underline flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), "Extrair com IA"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1.5 max-h-24 overflow-y-auto",
											children: (formData.pullQuotes || []).map((q, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2 theme-app-card px-2.5 py-1.5 rounded text-xs border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "italic line-clamp-1 font-medium",
													children: [
														"\"",
														q,
														"\""
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleRemoveQuote(idx),
													className: "text-red-500 hover:text-red-400 p-1 cursor-pointer",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3 h-3" })
												})]
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: newQuoteInput,
												onChange: (e) => setNewQuoteInput(e.target.value),
												placeholder: "Nova citação de impacto...",
												className: "theme-app-input text-xs h-8 border",
												onKeyDown: (e) => {
													if (e.key === "Enter") {
														e.preventDefault();
														handleAddQuote();
													}
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												type: "button",
												onClick: handleAddQuote,
												className: "h-8 bg-amber-500 text-black font-bold border border-black cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" })
											})]
										})
									]
								})
							]
						})]
					}),
					formData.layoutTemplate === "workout-protocol" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-4 my-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b-2 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-black text-sm uppercase tracking-tight",
										children: "Configuração do Protocolo de Treino (Clusters A1/A2 e QR Code)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: handleAddWorkoutExercise,
									className: "h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-black flex items-center gap-1 border border-black cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" }), "Adicionar Exercício"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold uppercase",
								children: "FASE 0: MOBILIDADE & AQUECIMENTO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: formData.workoutProtocol?.warmupPrep || "",
								onChange: (e) => updateWorkoutProtocol("warmupPrep", e.target.value),
								placeholder: "Ex: MOBILITY & ACTIVATION (5 MIN): T-spine bridges, halos...",
								className: "theme-app-input text-xs mt-1 border"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: (formData.workoutProtocol?.exercises || []).map((ex, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "theme-app-card p-3 rounded-lg border-2 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: ex.code,
													onChange: (e) => handleUpdateExercise(idx, "code", e.target.value.toUpperCase()),
													placeholder: "A1 / B1",
													className: "theme-app-input font-mono font-black text-xs h-7 w-20 text-center border text-amber-600"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: ex.name,
													onChange: (e) => handleUpdateExercise(idx, "name", e.target.value.toUpperCase()),
													placeholder: "NOME DO EXERCÍCIO",
													className: "theme-app-input font-bold text-xs h-7 flex-1 border"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleRemoveExercise(idx),
													className: "text-red-500 hover:text-red-400 p-1 cursor-pointer",
													title: "Remover exercício",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: ex.setsReps,
												onChange: (e) => handleUpdateExercise(idx, "setsReps", e.target.value.toUpperCase()),
												placeholder: "Séries e Reps",
												className: "theme-app-input font-mono text-xs h-7 border text-amber-600 font-bold"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: ex.tempoRest,
												onChange: (e) => handleUpdateExercise(idx, "tempoRest", e.target.value.toUpperCase()),
												placeholder: "Tempo e Descanso",
												className: "theme-app-input font-mono text-xs h-7 border"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: ex.keyPoints,
											onChange: (e) => handleUpdateExercise(idx, "keyPoints", e.target.value),
											placeholder: "Instruções de execução e pontos-chave biomecânicos...",
											className: "theme-app-input text-xs h-7 border"
										})
									]
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "DIRETRIZES DO FINISHER"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.workoutProtocol?.finisher || "",
									onChange: (e) => updateWorkoutProtocol("finisher", e.target.value),
									placeholder: "Ex: FINISHER: Heavy Sandbag Carry...",
									className: "theme-app-input text-xs mt-1 border"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "LINK DO VÍDEO TUTORIAL (QR CODE)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.workoutProtocol?.videoQrUrl || "",
									onChange: (e) => updateWorkoutProtocol("videoQrUrl", e.target.value),
									placeholder: "https://coachmontanha.com.br/demo-01",
									className: "theme-app-input text-xs mt-1 font-mono border"
								})] })]
							})
						]
					}),
					formData.layoutTemplate === "product-ad" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-4 my-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black text-sm uppercase tracking-tight",
									children: "Configuração da Página de Anúncio / Produto & Gear"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "SLOGAN DE IMPACTO"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.productPromotion?.slogan || "",
									onChange: (e) => updateProductPromotion("slogan", e.target.value.toUpperCase()),
									placeholder: "Ex: FORGED IN IRON // BUILT FOR WAR",
									className: "theme-app-input font-black text-xs mt-1 border"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "BADGE PROMOCIONAL / DESCONTO"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.productPromotion?.promoBadgeText || "",
									onChange: (e) => updateProductPromotion("promoBadgeText", e.target.value.toUpperCase()),
									placeholder: "Ex: SPECIAL LAUNCH OFFER // 15% OFF",
									className: "theme-app-input font-bold text-xs mt-1 border text-amber-600"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
								label: "Foto Central do Produto / Equipamento",
								value: formData.productPromotion?.productImage || formData.heroImage,
								onChange: (url) => updateProductPromotion("productImage", url),
								aspectRatio: "landscape",
								placeholderPrompt: "Equipamento de ferro fundido kettlebell em estúdio escuro com iluminação dramática...",
								helperText: "Upload ou IA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "CÓDIGO DO CUPOM"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.productPromotion?.couponCode || "",
									onChange: (e) => updateProductPromotion("couponCode", e.target.value.toUpperCase()),
									placeholder: "Ex: MONTANHA15",
									className: "theme-app-input font-mono font-black text-xs mt-1 border text-amber-600"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "URL DE COMPRA (QR CODE)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.productPromotion?.ctaUrl || "",
									onChange: (e) => updateProductPromotion("ctaUrl", e.target.value),
									placeholder: "WWW.MONTANHAIRON.COM.BR",
									className: "theme-app-input font-mono text-xs mt-1 border"
								})] })]
							})
						]
					}),
					formData.layoutTemplate === "facility-spotlight" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-4 my-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black text-sm uppercase tracking-tight",
									children: "Configuração do Spotlight de Estúdio / Centro de Treinamento"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold uppercase",
										children: "NOME DO ESPAÇO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: formData.facilitySpotlight?.facilityName || "",
										onChange: (e) => updateFacilitySpotlight("facilityName", e.target.value.toUpperCase()),
										placeholder: "Ex: MONTANHA LAB // SP",
										className: "theme-app-input font-bold text-xs mt-1 border"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold uppercase",
										children: "HEAD COACH / DIRETOR"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: formData.facilitySpotlight?.headCoach || "",
										onChange: (e) => updateFacilitySpotlight("headCoach", e.target.value.toUpperCase()),
										placeholder: "Ex: COACH MONTANHA",
										className: "theme-app-input text-xs mt-1 border"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold uppercase",
										children: "LOCALIZAÇÃO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: formData.facilitySpotlight?.location || "",
										onChange: (e) => updateFacilitySpotlight("location", e.target.value),
										placeholder: "Ex: SÃO PAULO // SP",
										className: "theme-app-input text-xs mt-1 border"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-bold uppercase",
								children: "MANIFESTO ANCORADO (PULL QUOTE DO ESTÚDIO)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: formData.facilitySpotlight?.anchoredQuote || "",
								onChange: (e) => updateFacilitySpotlight("anchoredQuote", e.target.value),
								placeholder: "Ex: O ambiente certo torna a mediocridade insuportável.",
								className: "theme-app-input text-xs mt-1 border text-amber-600 font-semibold"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 pt-2 border-t",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-black uppercase tracking-tight",
										children: "CORPO DO TEXTO (PARÁGRAFOS)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center rounded border overflow-hidden text-[10px] font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPreviewFormatted(false),
											className: `px-2 py-0.5 flex items-center gap-1 cursor-pointer ${!previewFormatted ? "bg-amber-400 text-black font-black" : "opacity-70 hover:opacity-100"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Editor" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPreviewFormatted(true),
											className: `px-2 py-0.5 flex items-center gap-1 cursor-pointer ${previewFormatted ? "bg-amber-400 text-black font-black" : "opacity-70 hover:opacity-100"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pré-Visualizar Formatação" })]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleProofreadText,
											disabled: isAiLoading || !formData.content,
											className: "text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded border border-emerald-800 cursor-pointer shadow-xs flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50",
											title: "Identifica e corrige erros de digitação, falhas ortográficas e gramática com IA mantendo a sua autoria e formatação intactas",
											children: [isAiLoading && aiStatusMsg.includes("ortográficas") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpellCheck, { className: "w-3.5 h-3.5 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Corrigir Ortografia & Digitação" })]
										}),
										previousContent !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleUndoProofread,
											className: "text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded border hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer flex items-center gap-1 transition-all",
											title: "Desfazer correção e restaurar texto original",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desfazer" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5 hidden sm:block" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold opacity-75 mr-1",
											children: "Polir com IA:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handlePolishText("journalistic"),
											disabled: isAiLoading || !formData.content,
											className: "text-[10px] font-bold bg-amber-400 text-black px-2 py-0.5 rounded border border-black hover:bg-amber-500 cursor-pointer shadow-xs",
											children: "Jornalístico"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handlePolishText("motivational"),
											disabled: isAiLoading || !formData.content,
											className: "text-[10px] font-bold bg-amber-400 text-black px-2 py-0.5 rounded border border-black hover:bg-amber-500 cursor-pointer shadow-xs",
											children: "Motivacional"
										})
									]
								})]
							}),
							polishSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2 rounded bg-emerald-500/15 border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 animate-fadeIn",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: polishSuccess })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-1 p-1.5 rounded-lg border-2 theme-app-card-subtle text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("**", "**", "texto em negrito"),
										className: "px-2 py-1 rounded border hover:bg-black/10 font-black flex items-center gap-1 cursor-pointer",
										title: "Negrito (**texto**)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Negrito" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("*", "*", "texto em itálico"),
										className: "px-2 py-1 rounded border hover:bg-black/10 italic font-bold flex items-center gap-1 cursor-pointer",
										title: "Itálico (*texto*)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Italic, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Itálico" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("<u>", "</u>", "texto sublinhado"),
										className: "px-2 py-1 rounded border hover:bg-black/10 underline font-bold flex items-center gap-1 cursor-pointer",
										title: "Sublinhado (<u>texto</u>)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Underline, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sublinhado" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("==", "==", "texto destacado"),
										className: "px-2 py-1 rounded border bg-amber-400/20 text-amber-700 hover:bg-amber-400/40 font-black flex items-center gap-1 cursor-pointer",
										title: "Marca-Texto / Destaque (==texto==)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destaque" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("“", "”", "citação de impacto"),
										className: "px-2 py-1 rounded border hover:bg-black/10 font-bold flex items-center gap-1 cursor-pointer",
										title: "Aspas Editoriais (“texto”)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aspas" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n### ", "\n", "SUBTÍTULO DE SEÇÃO"),
										className: "px-2 py-1 rounded border hover:bg-black/10 font-mono font-bold flex items-center gap-1 cursor-pointer",
										title: "Subtítulo Intermediário (### Título)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading3, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtítulo" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n- ", "", "Ponto chave da matéria"),
										className: "px-2 py-1 rounded border hover:bg-black/10 font-bold flex items-center gap-1 cursor-pointer",
										title: "Lista de Marcadores (- item)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lista" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n> \"A carga molda o corpo, a disciplina molda o homem.\"\n> — Coach Montanha\n\n", "", ""),
										className: "px-2 py-1 rounded border border-amber-500/50 bg-amber-400/10 hover:bg-amber-400/25 font-bold flex items-center gap-1 cursor-pointer text-amber-700 dark:text-amber-400",
										title: "Inserir Citação Editorial de Destaque (> [QUOTE: ...])",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ Citação" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n[STAT: 85% | Hipertrofia Miofibrilar | Estímulo com alta tensão mecânica]\n\n", "", ""),
										className: "px-2 py-1 rounded border border-amber-500/50 bg-amber-400/10 hover:bg-amber-400/25 font-bold flex items-center gap-1 cursor-pointer text-amber-700 dark:text-amber-400",
										title: "Inserir Bento Stat Box com número gigante e métrica de treino",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ Bento Stat" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n[DICA: Dica do Montanha | Mantenha as escápulas aduzidas e os cotovelos a 45 graus para proteger a articulação glenoumeral.]\n\n", "", ""),
										className: "px-2 py-1 rounded border border-amber-500/50 bg-amber-400/10 hover:bg-amber-400/25 font-bold flex items-center gap-1 cursor-pointer text-amber-700 dark:text-amber-400",
										title: "Inserir Box Callout Dica do Montanha com ícone temático",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ Dica Coach" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n| EXERCÍCIO | SÉRIES × REPS | INTERVALO |\n| :--- | :--- | :--- |\n| Agachamento Livre | 4 × 6-8 reps | 120s |\n| Supino Reto com Barra | 4 × 8-10 reps | 90s |\n| Levantamento Terra | 3 × 5 reps | 180s |\n\n", "", ""),
										className: "px-2 py-1 rounded border border-amber-500/50 bg-amber-400/10 hover:bg-amber-400/25 font-bold flex items-center gap-1 cursor-pointer text-amber-700 dark:text-amber-400",
										title: "Inserir Tabela de Treino e Séries formatada",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ Tabela" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n[QUEBRA_COLUNA]\n\n", "", ""),
										className: "px-2.5 py-1 rounded border-2 border-emerald-500 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/30 font-black flex items-center gap-1 cursor-pointer shadow-xs",
										title: "Inserir quebra de coluna: o texto antes da quebra preenche a Coluna 1 (Esquerda) e o texto após vai para a Coluna 2 (Direita)",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quebrar Coluna" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleProofreadText,
										disabled: isAiLoading || !formData.content,
										className: "px-2.5 py-1 rounded border-2 border-emerald-600 bg-emerald-600/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600/25 font-bold flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50 transition-all active:scale-95",
										title: "Identifica e corrige erros de digitação e falhas ortográficas com IA mantendo formatação e autoria intactas",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpellCheck, { className: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Corretor Ortográfico" })]
									}),
									(formData.pageSpan || 1) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyFormatting("\n\n---QUEBRA DE PÁGINA---\n\n", "", ""),
										className: "px-2.5 py-1 rounded border-2 border-amber-500 bg-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-500/30 font-black flex items-center gap-1 cursor-pointer sm:ml-auto shadow-xs",
										title: "Inserir quebra de página manual para diagramar o texto entre as páginas",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Dividir Páginas (",
											formData.pageSpan,
											" Págs)"
										] })]
									})
								]
							}),
							MANUAL_COLUMN_BREAK_REGEX.test(formData.content || "") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-700 dark:text-emerald-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { className: "w-3.5 h-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"✂️ ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Quebra de Coluna Ativa:" }),
										" O texto antes de ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "[QUEBRA_COLUNA]" }),
										" preenche a Coluna 1 (Esquerda); o texto após vai para a Coluna 2 (Direita)."
									] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setFormData({
											...formData,
											content: (formData.content || "").replace(MANUAL_COLUMN_BREAK_REGEX, "\n\n")
										});
									},
									className: "text-[10px] font-bold text-red-500 hover:underline cursor-pointer ml-2 shrink-0",
									children: "Remover Quebra"
								})]
							}),
							(formData.pageSpan || 1) > 1 && (() => {
								const splitRegex = /\n?\s*(?:---|===)\s*(?:QUEBRA DE P[ÁA]GINA|PAGE\s*BREAK)\s*(?:---|===)\s*\n?/i;
								const hasSplit = splitRegex.test(formData.content || "");
								const parts = (formData.content || "").split(splitRegex);
								const span = formData.pageSpan || 1;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-amber-500/10 border-2 border-amber-500/30 text-[11px] gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hasSplit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
												"Divisão Manual Ativa (",
												parts.length,
												" partes para ",
												span,
												" págs):"
											] }),
											" ",
											parts.map((p, i) => `Pág. ${i + 1} (${p.length}c)`).join(" • ")
										] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
												"Divisão Automática Inteligente Ativa (",
												span,
												" páginas)."
											] }),
											" Use o botão ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"Dividir Páginas\"" }),
											" para definir onde cada página termina."
										] }) })]
									}), hasSplit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											const merged = (formData.content || "").replace(splitRegex, "\n\n");
											setFormData({
												...formData,
												content: merged
											});
										},
										className: "text-[10px] font-bold underline text-amber-700 dark:text-amber-300 hover:text-amber-500 self-end sm:self-auto cursor-pointer",
										children: "Desfazer Divisão Manual"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono text-amber-600/80 shrink-0",
										children: "Capacidade estimada: ~1.200 a 1.800 carac./página"
									})]
								});
							})(),
							!previewFormatted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								ref: textareaRef,
								"data-testid": "textarea-article-content",
								value: formData.content,
								onChange: (e) => setFormData({
									...formData,
									content: e.target.value
								}),
								placeholder: "Escreva os parágrafos da matéria aqui. Use a barra de ferramentas acima para destacar, sublinhar, aplicar aspas e subtítulos...",
								className: "theme-app-input text-xs h-48 leading-relaxed font-sans border-2"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "theme-app-card p-4 rounded-lg border-2 h-48 overflow-y-auto space-y-2 text-xs leading-relaxed custom-scrollbar bg-slate-900/10",
								children: (formData.content || "").split("\n\n").map((p, idx) => {
									if (/(?:---|===)\s*(?:QUEBRA DE P[ÁA]GINA|PAGE\s*BREAK)\s*(?:---|===)/i.test(p)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "my-3 py-1.5 px-3 rounded bg-amber-500/20 border-2 border-dashed border-amber-500 text-amber-500 font-mono font-black text-center text-[10px] tracking-wider uppercase",
										children: "✂️ FIM DA PÁGINA 1 — INÍCIO DA PÁGINA 2"
									}, idx);
									if (p.startsWith("### ") || p.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "font-black text-amber-500 uppercase text-xs pt-1 border-b border-amber-500/30",
										children: ["// ", p.replace(/^#+\s*/, "")]
									}, idx);
									if (p.startsWith("- ") || p.startsWith("• ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1 pl-2",
										children: p.split("\n").map((line, liIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-amber-500 font-bold",
												children: "▸"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.replace(/^[-•]\s*/, "") })]
										}, liIdx))
									}, idx);
									const sMatch = p.trim().match(/^\[STAT:\s*([^\|\]]+)\s*\|\s*([^\|\]]+)(?:\s*\|\s*([^\]]+))?\]$/i);
									if (sMatch) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-1.5 p-2 rounded-lg border border-amber-500/40 bg-amber-400/10 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[8px] font-mono font-black uppercase text-amber-500 block",
											children: ["// MÉTRICA: ", sMatch[2]]
										}), sMatch[3] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] opacity-75",
											children: sMatch[3]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-black text-amber-500 px-2 py-0.5 rounded border border-amber-500/30 bg-black/20",
											children: sMatch[1]
										})]
									}, idx);
									const dMatch = p.trim().match(/^\[(?:DICA|CALLOUT|AVISO):\s*([^\|\]]+)\s*\|\s*([^\]]+)\]$/i);
									if (dMatch) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-1.5 p-2 rounded-lg border-l-4 border-amber-500 bg-amber-400/10 text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black uppercase text-amber-500 block mb-0.5",
											children: ["💡 ", dMatch[1]]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: dMatch[2] })]
									}, idx);
									if (p.startsWith("> ") || p.startsWith(">\n")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "my-1.5 p-2.5 rounded-lg border-l-4 border-amber-500 bg-slate-900/30 italic text-[11px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold text-amber-400",
											children: [
												"\"",
												p.replace(/^>\s*/gm, ""),
												"\""
											]
										})
									}, idx);
									if (p.trim().startsWith("|") && p.includes("\n|")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "my-1.5 p-1 rounded border border-amber-500/30 font-mono text-[9px] overflow-x-auto bg-black/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "whitespace-pre",
											children: p
										})
									}, idx);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-left",
										children: p
									}, idx);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 pt-2 border-t",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "text-xs font-black uppercase tracking-tight flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5 text-amber-500" }), "REFERÊNCIAS & FONTES (RODAPÉ DA ÚLTIMA PÁGINA)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9.5px] font-mono text-amber-600 font-bold opacity-80",
											children: "Opcional"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: formData.references || "",
										onChange: (e) => setFormData({
											...formData,
											references: e.target.value
										}),
										placeholder: "// REFERÊNCIAS\n1. SCHOENFELD, B.J. Science and Development of Muscle Hypertrophy. Human Kinetics, 2010.\n2. ZATSIORSKY, V.M. Science and Practice of Strength Training, 2nd ed. 2006.",
										className: "theme-app-input text-xs h-20 leading-relaxed font-sans border-2 font-mono"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[9.5px] opacity-70 leading-tight",
										children: [
											"Aparece no rodapé da última página em tipografia miúda editorial. Suporta listas numeradas e o prefixo ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
												className: "bg-black/10 px-1 rounded font-bold",
												children: "// REFERÊNCIAS"
											}),
											"."
										]
									})
								]
							})
						]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-4 space-y-3 animate-fadeIn",
					children: (() => {
						const effectivePreviewSpan = getEffectiveArticlePageSpan(formData);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 rounded-xl border-2 theme-app-card-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs",
							children: [effectivePreviewSpan > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700",
								children: [Array.from({ length: effectivePreviewSpan }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setPreviewPagePart(idx + 1);
										setPreviewViewAll(false);
									},
									className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${!previewViewAll && previewPagePart === idx + 1 ? "bg-amber-400 text-black font-black shadow-xs" : "text-slate-300 hover:text-white"}`,
									children: [
										"📄 Pág. ",
										idx + 1,
										" ",
										idx === 0 ? "(Abertura)" : idx === effectivePreviewSpan - 1 ? "(Conclusão)" : ""
									]
								}, idx)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setPreviewViewAll(!previewViewAll),
									className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${previewViewAll ? "bg-amber-400 text-black font-black shadow-xs" : "text-slate-300 hover:text-white"}`,
									children: [
										"📖 Todas Lado a Lado (",
										effectivePreviewSpan,
										" Págs)"
									]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PRÉVIA FIEL WYSIWYG • PÁGINA ÚNICA A4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-mono opacity-70 font-bold uppercase",
											children: "Densidade:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.textDensity || "normal",
											onChange: (e) => setFormData({
												...formData,
												textDensity: e.target.value
											}),
											className: "theme-app-input text-xs py-0.5 px-1.5 rounded border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "compact",
													children: "Compacto"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "normal",
													children: "Normal"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "spacious",
													children: "Espaçoso"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-mono opacity-70 font-bold uppercase",
											children: "Foto Hero:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.heroImageHeight || "large",
											onChange: (e) => setFormData({
												...formData,
												heroImageHeight: e.target.value
											}),
											className: "theme-app-input text-xs py-0.5 px-1.5 rounded border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "large",
													children: "Grande (2-3x)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "medium",
													children: "Média"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "compact",
													children: "Compacta"
												})
											]
										})]
									}),
									(formData.pageSpan || 1) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-mono opacity-70 font-bold uppercase",
											children: "Foto Fechamento:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.secondaryImagePlacement || "bottom",
											onChange: (e) => setFormData({
												...formData,
												secondaryImagePlacement: e.target.value
											}),
											className: "theme-app-input text-xs py-0.5 px-1.5 rounded border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "bottom",
												children: "Ao Final (Base)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "top",
												children: "No Topo"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-mono opacity-70 font-bold uppercase",
											children: "Extensão:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.pageSpan || 1,
											onChange: (e) => {
												const newSpan = parseInt(e.target.value) || 1;
												setFormData({
													...formData,
													pageSpan: newSpan
												});
												if (previewPagePart > newSpan) setPreviewPagePart(1);
											},
											className: "theme-app-input text-xs py-0.5 px-1.5 rounded border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 1,
													children: "1 Página"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 2,
													children: "2 Páginas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 3,
													children: "3 Páginas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 4,
													children: "4 Páginas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 5,
													children: "5 Páginas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 6,
													children: "6 Páginas"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										size: "sm",
										variant: "outline",
										onClick: () => setActiveModalTab("edit"),
										className: "h-7 text-xs font-bold flex items-center gap-1 border border-current cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajustar Texto" })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-slate-950 p-3 sm:p-6 rounded-xl border-2 border-amber-500/30 flex justify-center items-start overflow-x-auto shadow-2xl custom-scrollbar min-h-[580px]",
							children: effectivePreviewSpan > 1 && previewViewAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl",
								children: Array.from({ length: effectivePreviewSpan }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono font-bold text-amber-500 mb-1.5",
										children: [
											"// PÁGINA ",
											idx + 1,
											" DE ",
											effectivePreviewSpan,
											" ",
											idx === 0 ? "(ABERTURA)" : idx === effectivePreviewSpan - 1 ? "(CONCLUSÃO)" : "(CONTINUAÇÃO)"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full aspect-[1/1.414] rounded-lg shadow-2xl border border-slate-700 overflow-hidden bg-slate-900",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleSpread, {
											article: formData,
											project: effectiveProject,
											theme: effectiveTheme,
											pageNumber: 4 + idx,
											pagePart: idx + 1,
											totalPagesForArticle: effectivePreviewSpan
										})
									})]
								}, idx))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center w-full max-w-[580px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-mono font-bold text-amber-500 mb-1.5",
									children: effectivePreviewSpan > 1 ? `// PÁGINA ${previewPagePart} DE ${effectivePreviewSpan} ${previewPagePart === 1 ? "(ABERTURA)" : previewPagePart === effectivePreviewSpan ? "(CONCLUSÃO)" : "(CONTINUAÇÃO)"}` : "// PÁGINA ÚNICA DA REVISTA (A4)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full aspect-[1/1.414] rounded-lg shadow-2xl border border-slate-700 overflow-hidden bg-slate-900",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleSpread, {
										article: formData,
										project: effectiveProject,
										theme: effectiveTheme,
										pageNumber: 3 + previewPagePart,
										pagePart: previewPagePart,
										totalPagesForArticle: effectivePreviewSpan
									})
								})]
							})
						})] });
					})()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t pt-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "Tempo estimado de leitura:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: formData.estimatedReadTime,
								onChange: (e) => setFormData({
									...formData,
									estimatedReadTime: parseInt(e.target.value) || 3
								}),
								className: "theme-app-input text-xs h-8 w-16 text-center border"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs opacity-75",
								children: "minutos"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							"data-testid": "btn-cancel-article",
							onClick: onClose,
							className: "h-9 font-bold text-xs border-2",
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleSave,
							"data-testid": "btn-save-article",
							className: "h-9 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs px-5 border-2 border-black shadow-md cursor-pointer flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salvar Matéria" })]
						})]
					})]
				})
			]
		})
	});
};
var EditorialSettings = ({ project, onChange }) => {
	const visibility = {
		showCover: true,
		showEditorLetter: true,
		showContributors: false,
		showTableOfContents: true,
		showBackCover: true,
		...project.pageVisibility
	};
	const updateVisibility = (field, val) => {
		onChange({
			...project,
			pageVisibility: {
				...visibility,
				[field]: val
			}
		});
	};
	const updateEditorial = (field, value) => {
		onChange({
			...project,
			editorialInfo: {
				...project.editorialInfo,
				[field]: value
			}
		});
	};
	const handleAddCredit = () => {
		const newCredit = {
			id: "c-" + Date.now(),
			role: "Cargo / Função",
			name: "Nome do Integrante"
		};
		updateEditorial("credits", [...project.editorialInfo.credits, newCredit]);
	};
	const handleUpdateCredit = (id, field, value) => {
		const updated = project.editorialInfo.credits.map((c) => c.id === id ? {
			...c,
			[field]: value
		} : c);
		updateEditorial("credits", updated);
	};
	const handleRemoveCredit = (id) => {
		updateEditorial("credits", project.editorialInfo.credits.filter((c) => c.id !== id));
	};
	const handleAddContributor = () => {
		const newCon = {
			id: "con-" + Date.now(),
			name: "NOVO COACH / AUTOR",
			title: "SPECIALIST // CSCS",
			bio: "Especialista em preparação física e metodologia de treinamento não-convencional.",
			photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
			handle: "@treinador",
			facility: "TACTICAL PERFORMANCE LAB"
		};
		updateEditorial("contributors", [...project.editorialInfo.contributors || [], newCon]);
	};
	const handleUpdateContributor = (id, field, value) => {
		const updated = (project.editorialInfo.contributors || []).map((c) => c.id === id ? {
			...c,
			[field]: value
		} : c);
		updateEditorial("contributors", updated);
	};
	const handleRemoveContributor = (id) => {
		updateEditorial("contributors", (project.editorialInfo.contributors || []).filter((c) => c.id !== id));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase",
							children: "SEÇÃO EDITORIAL & LEGAL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono font-bold text-amber-500 uppercase",
							children: "ESTRUTURA DE ABERTURA & REGISTRO"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-black uppercase tracking-tight",
						children: "Documentação Legal, ISBN, Carta do Editor & Colaboradores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Configure o registro editorial oficial (ISBN/ISSN/CIP), gerencie o manifesto e a foto do Editor, e controle páginas ativas."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0. Textos do Topo das Páginas (Cabeçalho / Header Bar)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
							children: "TOPO DA PÁGINA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "NOME DA MARCA NO TOPO (ESQUERDA)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.headerBrandTitle ?? "",
							onChange: (e) => updateEditorial("headerBrandTitle", e.target.value.toUpperCase()),
							placeholder: `Padrão: ${project.title}`,
							className: "theme-app-input font-black text-xs mt-1 border-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "TÍTULO DA SEÇÃO NO TOPO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.headerDocTitle ?? "",
							onChange: (e) => updateEditorial("headerDocTitle", e.target.value.toUpperCase()),
							placeholder: "Ex: DOCUMENTAÇÃO LEGAL & MANIFESTO EDITORIAL",
							className: "theme-app-input text-xs mt-1 border-2 font-bold"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "BADGE DE EDIÇÃO DO CABEÇALHO (DIREITA)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.headerBadgeText ?? "",
							onChange: (e) => updateEditorial("headerBadgeText", e.target.value.toUpperCase()),
							placeholder: "Ex: EDIÇÃO #01",
							className: "theme-app-input font-mono text-xs mt-1 border-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "DATA / SUBTÍTULO DO TOPO (DIREITA)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.headerDateText ?? "",
							onChange: (e) => updateEditorial("headerDateText", e.target.value.toUpperCase()),
							placeholder: `Padrão: ${project.date}`,
							className: "theme-app-input font-mono text-xs mt-1 border-2"
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1. Informações Legais, ISBN & Ficha Catalográfica (CIP)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
							children: "REGISTRO OFICIAL"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "CÓDIGO ISBN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.editorialInfo.isbn || "",
								onChange: (e) => updateEditorial("isbn", e.target.value),
								placeholder: "Ex: 978-65-00-98765-4",
								className: "theme-app-input font-mono text-xs mt-1 border-2 font-bold text-amber-600"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "CÓDIGO ISSN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.editorialInfo.issn || "",
								onChange: (e) => updateEditorial("issn", e.target.value),
								placeholder: "Ex: 2675-9829",
								className: "theme-app-input font-mono text-xs mt-1 border-2 font-bold text-amber-600"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "EDITORA / RAZÃO SOCIAL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.editorialInfo.publisherInfo || "",
								onChange: (e) => updateEditorial("publisherInfo", e.target.value),
								placeholder: "Ex: MONTANHA EDITORIAL LTDA. // SP",
								className: "theme-app-input text-xs mt-1 border-2 font-medium"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						className: "text-xs font-bold flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DADOS INTERNACIONAIS DE CATALOGAÇÃO NA PUBLICAÇÃO (CIP)" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: project.editorialInfo.catalogingData || "",
						onChange: (e) => updateEditorial("catalogingData", e.target.value),
						placeholder: "Ficha catalográfica completa...",
						className: "theme-app-input text-xs mt-1 h-20 leading-tight font-mono text-[11px] border-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						className: "text-xs font-bold flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AVISO LEGAL & MÉDICO (DISCLAIMER MICRO-TYPOGRAPHY)" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: project.editorialInfo.disclaimerText || "",
						onChange: (e) => updateEditorial("disclaimerText", e.target.value),
						className: "theme-app-input text-xs mt-1 h-16 leading-tight font-mono text-[11px] border-2"
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2. Carta do Editor & Manifesto de Abertura" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: visibility.showEditorLetter,
							onCheckedChange: (val) => updateVisibility("showEditorLetter", val)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold font-mono",
							children: visibility.showEditorLetter ? "PÁGINA ATIVA" : "PÁGINA DESATIVADA"
						})]
					})]
				}), visibility.showEditorLetter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "NOME DO EDITOR-CHEFE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.editorName,
							onChange: (e) => updateEditorial("editorName", e.target.value),
							className: "theme-app-input text-xs mt-1 font-bold border-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "TÍTULO DO MANIFESTO / CARTA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.editorLetterTitle,
							onChange: (e) => updateEditorial("editorLetterTitle", e.target.value),
							className: "theme-app-input text-xs mt-1 font-bold border-2"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
						label: "Foto do Editor (Retrato Compacto)",
						value: project.editorialInfo.editorPhoto,
						onChange: (url) => updateEditorial("editorPhoto", url),
						aspectRatio: "square",
						placeholderPrompt: "Retrato profissional de Coach de força imponente, estúdio dramático preto e branco...",
						helperText: "Upload do PC, IA ou URL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-bold",
						children: "CORPO DA CARTA DO EDITOR (PARÁGRAFOS)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: project.editorialInfo.editorLetter,
						onChange: (e) => updateEditorial("editorLetter", e.target.value),
						className: "theme-app-input text-xs mt-1 h-36 leading-relaxed font-sans border-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-bold",
						children: "FRASE DE ASSINATURA / CITAÇÃO FINAL DO EDITOR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: project.editorialInfo.editorialNote || "",
						onChange: (e) => updateEditorial("editorialNote", e.target.value),
						placeholder: "Ex: A consistência diária nos detalhes invisíveis forja a grandeza.",
						className: "theme-app-input text-xs mt-1 font-semibold border-2 text-amber-600"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-slate-300 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXPEDIENTE & STAFF EDITORIAL" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: handleAddCredit,
								className: "h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1 border border-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" }), "Adicionar Cargo"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
							children: project.editorialInfo.credits.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-2 rounded-lg flex items-center gap-2 border-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: c.role,
										onChange: (e) => handleUpdateCredit(c.id, "role", e.target.value),
										placeholder: "Cargo",
										className: "theme-app-input font-bold text-xs h-7 w-36 border"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: c.name,
										onChange: (e) => handleUpdateCredit(c.id, "name", e.target.value),
										placeholder: "Nome",
										className: "theme-app-input text-xs h-7 flex-1 border"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleRemoveCredit(c.id),
										className: "text-red-500 hover:text-red-400 p-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
									})
								]
							}, c.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-slate-300 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold flex items-center gap-1.5 text-amber-600 dark:text-amber-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FOTOGRAFIA VISUAL SPOTLIGHT (PREENCHE A PARTE INFERIOR DA CARTA DO EDITOR)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
								label: "Foto Panorâmica Inferior da Carta do Editor",
								value: project.editorialInfo.editorLetterSpotlightImage || "",
								onChange: (url) => updateEditorial("editorLetterSpotlightImage", url),
								aspectRatio: "landscape",
								placeholderPrompt: "Foto cinematográfica de barra com anilhas de ferro pesadas em chão de borracha, iluminação de alto contraste...",
								helperText: "Aproveita com imponência o terço inferior da Carta do Editor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[10px] font-bold",
								children: "LEGENDA EDITORIAL DA FOTO INFERIOR"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.editorialInfo.editorLetterSpotlightCaption || "",
								onChange: (e) => updateEditorial("editorLetterSpotlightCaption", e.target.value),
								placeholder: "Ex: A consistência nos detalhes invisíveis constrói o atleta inabalável.",
								className: "theme-app-input text-xs mt-1 border-2"
							})] })
						]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-lg bg-amber-500/10 border-2 border-amber-500/30 text-xs font-medium flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-4 h-4 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A página da Carta do Editor está desativada e não aparecerá na revista nem no PDF final." })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between border-b pb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destaque Visual do Sumário (Visual Spotlight)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75 mt-0.5",
							children: "Escolha o título da página e uma foto exclusiva para estampar a lateral do sumário, sem repetir fotos dos artigos."
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400",
						children: "TÍTULO PRINCIPAL DO SUMÁRIO (SUBSTITUI \"CONTENTS // SUMÁRIO\")"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: project.editorialInfo.tocHeadline || "",
						onChange: (e) => updateEditorial("tocHeadline", e.target.value.toUpperCase()),
						placeholder: "Padrão: SUMÁRIO (ou ÍNDICE, NESTA EDIÇÃO, etc.)",
						className: "theme-app-input text-xs font-bold mt-1 border-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
						label: "Foto do Visual Spotlight do Sumário",
						value: project.editorialInfo.tocSpotlightImage || "",
						onChange: (url) => updateEditorial("tocSpotlightImage", url),
						aspectRatio: "landscape",
						placeholderPrompt: "Atleta de costas executando tração intensa em argolas de aço, iluminação lateral amarela e dramática...",
						helperText: "Foto panorâmica que estampa o espaço de destaque no sumário da revista"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-[10px] font-bold",
							children: "TÍTULO / ETIQUETA DO DESTAQUE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.tocSpotlightTitle || "",
							onChange: (e) => updateEditorial("tocSpotlightTitle", e.target.value),
							placeholder: "Ex: TREINAMENTO NÃO-CONVENCIONAL & ALAVANCAS DE FORÇA",
							className: "theme-app-input text-xs font-bold mt-1 border-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-[10px] font-bold",
							children: "CATEGORIA / TAG"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.editorialInfo.tocSpotlightCategory || "",
							onChange: (e) => updateEditorial("tocSpotlightCategory", e.target.value.toUpperCase()),
							placeholder: "Ex: LABORATÓRIO DE PERFORMANCE",
							className: "theme-app-input text-xs font-mono font-bold mt-1 border-2"
						})] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. Painel de Colaboradores & Autores Convidados" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Ligue ou desligue a página de colaboradores conforme a disponibilidade da sua equipe."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: visibility.showContributors,
							onCheckedChange: (val) => updateVisibility("showContributors", val)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs font-black font-mono px-2 py-0.5 rounded border ${visibility.showContributors ? "bg-emerald-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"}`,
							children: visibility.showContributors ? "INCLUÍDA NO PDF" : "REMOVIDA DO PDF"
						})]
					})]
				}), !visibility.showContributors ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-xl bg-amber-400/10 border-2 border-amber-400/40 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-black text-xs text-amber-600 uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Página de Colaboradores Desativada com Sucesso" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs opacity-90 leading-relaxed font-medium",
						children: [
							"Esta página ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "NÃO será impressa nem fará parte do seu PDF final" }),
							". O sumário e a paginação das matérias já foram reorganizados automaticamente."
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: handleAddContributor,
							className: "h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1 border border-black",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3" }), "Adicionar Colaborador"]
						})
					}), (project.editorialInfo.contributors || []).map((con) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-3 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: con.name,
									onChange: (e) => handleUpdateContributor(con.id, "name", e.target.value.toUpperCase()),
									placeholder: "NOME DO COLABORADOR (ALL CAPS)",
									className: "theme-app-input font-black text-sm h-8 border-2"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleRemoveContributor(con.id),
									className: "text-red-500 hover:text-red-400 p-1",
									title: "Remover colaborador",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[10px] font-bold",
									children: "TÍTULO / CERTIFICAÇÃO"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: con.title,
									onChange: (e) => handleUpdateContributor(con.id, "title", e.target.value.toUpperCase()),
									placeholder: "Ex: MASTER KETTLEBELL COACH // CSCS",
									className: "theme-app-input font-mono text-xs h-7 mt-1 border"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[10px] font-bold",
									children: "CONTATO / INSTAGRAM"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: con.handle,
									onChange: (e) => handleUpdateContributor(con.id, "handle", e.target.value),
									placeholder: "Ex: @coachmontanha",
									className: "theme-app-input text-xs h-7 mt-1 font-mono border"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
								label: "Foto do Colaborador",
								value: con.photo,
								onChange: (url) => handleUpdateContributor(con.id, "photo", url),
								aspectRatio: "square",
								placeholderPrompt: "Retrato de treinador de elite, foto em preto e branco de alta qualidade...",
								helperText: "Upload ou IA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[10px] font-bold",
								children: "MINI-BIO (3 A 5 LINHAS)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: con.bio,
								onChange: (e) => handleUpdateContributor(con.id, "bio", e.target.value),
								placeholder: "Resumo da metodologia e histórico do coach...",
								className: "theme-app-input text-xs mt-1 h-16 leading-relaxed border"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[10px] font-bold",
								children: "CENTRO DE TREINAMENTO / FACILITY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: con.facility || "",
								onChange: (e) => handleUpdateContributor(con.id, "facility", e.target.value),
								placeholder: "Ex: MONTANHA IRON LAB // SP",
								className: "theme-app-input text-xs h-7 mt-1 font-mono border"
							})] })
						]
					}, con.id))]
				})]
			})
		]
	});
};
var PwaInstallPrompt = ({ variant = "header" }) => {
	const [deferredPrompt, setDeferredPrompt] = (0, import_react.useState)(null);
	const [isInstalled, setIsInstalled] = (0, import_react.useState)(false);
	const [isIos, setIsIos] = (0, import_react.useState)(false);
	const [showIosGuide, setShowIosGuide] = (0, import_react.useState)(false);
	const [isDismissed, setIsDismissed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true) {
			setIsInstalled(true);
			return;
		}
		const userAgent = window.navigator.userAgent.toLowerCase();
		const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
		setIsIos(isIosDevice);
		const handleBeforeInstallPrompt = (e) => {
			e.preventDefault();
			setDeferredPrompt(e);
		};
		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
		window.addEventListener("appinstalled", () => {
			setIsInstalled(true);
			setDeferredPrompt(null);
		});
		return () => {
			window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
		};
	}, []);
	const handleInstallClick = async () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();
			if ((await deferredPrompt.userChoice).outcome === "accepted") setIsInstalled(true);
			setDeferredPrompt(null);
		} else if (isIos) setShowIosGuide(true);
		else alert("Para instalar no celular: abra as opções do seu navegador (três pontinhos) e selecione 'Adicionar à Tela Inicial' ou 'Instalar Aplicativo'.");
	};
	if (isInstalled) {
		if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-black block uppercase text-emerald-600",
					children: "App Instalado no Dispositivo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-80",
					children: "Você já está utilizando a versão PWA instalada do Montanha PDF Studio."
				})]
			})]
		});
		return null;
	}
	if (variant === "header") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		size: "sm",
		onClick: handleInstallClick,
		className: "h-8 sm:h-9 bg-amber-400 hover:bg-amber-500 text-black border-2 border-black font-black text-xs flex items-center gap-1.5 shadow-xs cursor-pointer",
		title: "Instalar App no Celular / Computador",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-3.5 h-3.5 text-black" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden lg:inline",
				children: "Instalar App (PWA)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "lg:hidden",
				children: "App"
			})
		]
	}), showIosGuide && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "theme-app-card max-w-sm w-full p-5 rounded-2xl border-2 border-black shadow-2xl space-y-4 font-sans text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center mx-auto border-2 border-black",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-6 h-6 text-black" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-black text-base uppercase",
					children: "Instalar no iPhone / iPad"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs opacity-80 leading-relaxed text-left space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-semibold",
							children: [
								"1. Toque no botão de ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Compartilhar" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "w-3.5 h-3.5 inline mx-0.5 text-blue-500" }),
								") na barra do Safari."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-semibold",
							children: [
								"2. Role para baixo e selecione ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Adicionar à Tela de Início" }),
								" (",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePlus, { className: "w-3.5 h-3.5 inline mx-0.5 text-amber-500" }),
								")."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-semibold",
							children: [
								"3. Toque em ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Adicionar" }),
								" no topo direito. O app aparecerá direto na sua tela inicial!"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setShowIosGuide(false),
					className: "w-full bg-amber-400 hover:bg-amber-500 text-black font-black text-xs h-9 border-2 border-black",
					children: "Entendi!"
				})
			]
		})
	})] });
	if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "theme-app-card p-5 rounded-xl border-2 space-y-3 shadow-sm bg-amber-400/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-black uppercase tracking-tight",
						children: "Instalar Aplicativo no Celular ou Desktop (PWA)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
					children: "PWA STANDALONE"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs opacity-75 leading-relaxed",
				children: "Instale o Montanha PDF Studio como um aplicativo nativo no seu iPhone, celular Android ou computador. Tenha acesso rápido em tela cheia direto do seu ícone na tela inicial."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: handleInstallClick,
					className: "h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-5 border-2 border-black shadow-md cursor-pointer flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instalar Aplicativo Agora" })]
				})
			}),
			showIosGuide && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "theme-app-card max-w-sm w-full p-5 rounded-2xl border-2 border-black shadow-2xl space-y-4 font-sans text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center mx-auto border-2 border-black",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-6 h-6 text-black" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-black text-base uppercase",
							children: "Instalar no iPhone / iPad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs opacity-85 leading-relaxed text-left space-y-2 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"1. Toque no botão de ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Compartilhar" }),
									" (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "w-3.5 h-3.5 inline mx-0.5 text-blue-500" }),
									") na barra inferior do Safari."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"2. Role a lista e toque em ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Adicionar à Tela de Início\"" }),
									" (",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePlus, { className: "w-3.5 h-3.5 inline mx-0.5 text-amber-500" }),
									")."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"3. Toque em ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Adicionar" }),
									" no canto superior direito."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setShowIosGuide(false),
							className: "w-full bg-amber-400 hover:bg-amber-500 text-black font-black text-xs h-9 border-2 border-black",
							children: "Entendi!"
						})
					]
				})
			})
		]
	});
	return null;
};
var MagazineSettings = ({ project, onChange, currentUiTheme, onSelectUiTheme }) => {
	const [themeFilter, setThemeFilter] = (0, import_react.useState)("all");
	import_react.useEffect(() => {
		if (typeof window !== "undefined") localStorage.removeItem("gemini_api_key");
	}, []);
	const visibility = {
		showCover: true,
		showEditorLetter: true,
		showContributors: false,
		showTableOfContents: true,
		showBackCover: true,
		...project.pageVisibility
	};
	const fontConfig = {
		headlineFont: project.fontConfig?.headlineFont || "bebas",
		bodyFont: project.fontConfig?.bodyFont || "inter"
	};
	const updateVisibility = (field, val) => {
		onChange({
			...project,
			pageVisibility: {
				...visibility,
				[field]: val
			}
		});
	};
	const updateHeadlineFont = (font) => {
		onChange({
			...project,
			fontConfig: {
				...fontConfig,
				headlineFont: font
			}
		});
	};
	const updateBodyFont = (font) => {
		onChange({
			...project,
			fontConfig: {
				...fontConfig,
				bodyFont: font
			}
		});
	};
	const handleSelectMagazineTheme = (themeId) => {
		onChange({
			...project,
			themeId
		});
	};
	const headlineFontOptions = [
		{
			id: "barlow",
			name: "Barlow Condensed",
			style: "Fitness & Força #1 (Condensada / Impacto)",
			sample: "MAXIMUM OVERLOAD // 100%"
		},
		{
			id: "bebas",
			name: "Bebas Neue",
			style: "Industrial & Força Bruta (Caixa Alta Pesada)",
			sample: "A FORÇA DO FERRO"
		},
		{
			id: "syne",
			name: "Syne ExtraBold",
			style: "Editorial Contemporâneo & Assimétrico",
			sample: "THE UNCONVENTIONAL MIND"
		},
		{
			id: "montserrat",
			name: "Montserrat Black",
			style: "Moderno Geométrico de Alto Impacto",
			sample: "ALTA PERFORMANCE"
		},
		{
			id: "playfair",
			name: "Playfair Display",
			style: "Editorial Serifado Clássico & Elegante",
			sample: "The Elite Method"
		},
		{
			id: "cinzel",
			name: "Cinzel",
			style: "Romano Monumental & Prestige",
			sample: "DISCIPLINA & HONRA"
		},
		{
			id: "space",
			name: "Space Grotesk",
			style: "Técnico & Futurista",
			sample: "SYS.PROTOCOL // 01"
		},
		{
			id: "oswald",
			name: "Oswald",
			style: "Atlético Condensado",
			sample: "HEAVY TRAINING"
		},
		{
			id: "inter",
			name: "Inter Bold",
			style: "Minimalista & Contemporâneo",
			sample: "DESIGN EDITORIAL"
		},
		{
			id: "creato",
			name: "Creato Display",
			style: "Midnight Fintech & Editorial (Tracking -0.02em)",
			sample: "INFRASTRUCTURE & GLOW"
		}
	];
	const bodyFontOptions = [
		{
			id: "newsreader",
			name: "Newsreader",
			style: "Revista Editorial Digital (Leitura Confortável)",
			sample: "O controle preciso do volume gera hipertrofia sustentável ao longo dos anos."
		},
		{
			id: "inter",
			name: "Inter (Padrão)",
			style: "Ultra Legível & Moderno",
			sample: "O treinamento consistente forja resultados duradouros."
		},
		{
			id: "barlow",
			name: "Barlow",
			style: "Atlética Limpa (Par perfeito com Barlow Condensed)",
			sample: "Execução controlada, cadência rigorosa e disciplina em cada repetição."
		},
		{
			id: "jakarta",
			name: "Plus Jakarta Sans",
			style: "Geométrica Moderna de Alto Contraste",
			sample: "Design editorial contemporâneo com leitura cristalina em qualquer tela."
		},
		{
			id: "lora",
			name: "Lora",
			style: "Serifada Clássica de Revistas e Livros",
			sample: "A consistência diária nos detalhes invisíveis constrói o sucesso."
		},
		{
			id: "merriweather",
			name: "Merriweather",
			style: "Editorial Robusto com Excelente Leitura",
			sample: "Ciência aplicada e disciplina na alta performance."
		},
		{
			id: "roboto",
			name: "Roboto",
			style: "Neutro, Direto e Técnico",
			sample: "Instruções claras e biomecânica precisa em cada movimento."
		},
		{
			id: "space",
			name: "Space Grotesk",
			style: "Mono Técnico & Moderno",
			sample: "Protocolos estruturados para resultados mensuráveis."
		}
	];
	const typographyPairingPresets = [
		{
			title: "Força & Atletismo Puro",
			description: "Barlow Condensed + Barlow: visual oficial de revistas esportivas e força pesada",
			headline: "barlow",
			body: "barlow",
			badge: "FITNESS #1"
		},
		{
			title: "Revista de Banca Clássica",
			description: "Bebas Neue + Newsreader: impacto de capa clássico com leitura editorial fluida",
			headline: "bebas",
			body: "newsreader",
			badge: "EDITORIAL"
		},
		{
			title: "Swiss Modernism 2.0",
			description: "Oswald + Inter: design racional suíço com alto contraste e legibilidade cristalina",
			headline: "oswald",
			body: "inter",
			badge: "SWISS"
		},
		{
			title: "Prestige & Luxo Editorial",
			description: "Playfair Display + Merriweather: elegância tradicional com serifas de alta classe",
			headline: "playfair",
			body: "merriweather",
			badge: "PRESTIGE"
		},
		{
			title: "Biohacking & Tech Lab",
			description: "Space Grotesk + Plus Jakarta Sans: dados laboratoriais, ciência e biomecânica",
			headline: "space",
			body: "jakarta",
			badge: "TECH"
		},
		{
			title: "Neo-Editorial Asymmetric",
			description: "Syne ExtraBold + Lora: tipografia ousada de design agency e matérias especiais",
			headline: "syne",
			body: "lora",
			badge: "MODERN"
		}
	];
	const activeHeadlineClass = getHeadlineFontClass(fontConfig.headlineFont);
	const activeBodyClass = getBodyFontClass(fontConfig.bodyFont);
	const applyTypographyPreset = (headline, body) => {
		onChange({
			...project,
			fontConfig: {
				...fontConfig,
				headlineFont: headline,
				bodyFont: body
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase",
							children: "STUDIO SETTINGS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono font-bold text-amber-500 uppercase",
							children: "CONFIGURAÇÕES DO PROJETO"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-black uppercase tracking-tight",
						children: "Estrutura de Páginas, Tipografia & Temas da Revista"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Ligue ou desligue páginas, ajuste as fontes dos títulos e textos, defina a paleta de cores e conecte sua IA."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-current pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold uppercase tracking-widest",
							children: "Esquema de Cores & Interface do Aplicativo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75",
							children: "Escolha o modo de contraste e visualização da plataforma no seu dispositivo."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase self-start sm:self-auto",
						children: "MODO DE TRABALHO"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5",
					children: APP_UI_THEMES.map((theme) => {
						const isSelected = currentUiTheme === theme.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onSelectUiTheme(theme.id),
							className: `p-3 rounded-xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
										style: {
											backgroundColor: theme.previewBg,
											borderColor: theme.previewBorder
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-2 h-2 rounded-full",
											style: { backgroundColor: theme.previewAccent }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-xs uppercase leading-tight",
										children: theme.name.split("(")[0]?.trim() ?? theme.name
									})]
								}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-amber-400 text-black text-[9px] font-black font-mono px-1.5 py-0.5 rounded border border-black uppercase shrink-0",
									children: "ATIVO"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] opacity-75 leading-snug line-clamp-2",
								children: theme.subtitle
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 pt-1 border-t border-current/10",
								children: [
									theme.icon === "contrast" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }),
									theme.icon === "sun" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-3.5 h-3.5 text-amber-500" }),
									theme.icon === "moon" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-3.5 h-3.5 text-amber-500" }),
									theme.icon === "book" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "w-3.5 h-3.5 text-amber-500" }),
									theme.icon === "zap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-amber-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono font-semibold opacity-80",
										children: theme.id
									})
								]
							})]
						}, theme.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PwaInstallPrompt, { variant: "card" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Identidade da Revista (Nome, Subtítulo & Edição)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75 mt-0.5",
							children: "Altere o nome da revista que aparece no topo das páginas (artigos, sumário e rodapés), o subtítulo oficial e a data da edição."
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold uppercase",
								children: "Nome da Revista (Cabeçalho Geral das Páginas)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.title,
								onChange: (e) => onChange({
									...project,
									title: e.target.value.toUpperCase()
								}),
								placeholder: "Ex: MONTANHA ou REVISTA MONTANHA",
								className: "theme-app-input font-black text-xs mt-1 border-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] opacity-75 mt-1",
								children: "Este é o nome exibido na barra superior dos artigos, no sumário e nos dados da revista."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold uppercase",
							children: "Subtítulo / Slogan da Revista"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: project.subtitle || "",
							onChange: (e) => onChange({
								...project,
								subtitle: e.target.value
							}),
							placeholder: "Ex: UNCONVENTIONAL STRENGTH & HIGH PERFORMANCE",
							className: "theme-app-input font-semibold text-xs mt-1 border-2"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 border-t border-slate-200 dark:border-slate-800",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold uppercase",
								children: "Número da Edição"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.editionNumber || "",
								onChange: (e) => {
									const newEd = e.target.value;
									onChange({
										...project,
										editionNumber: newEd,
										coverConfig: {
											...project.coverConfig,
											editionNumber: newEd,
											issueBadge: newEd ? `EDIÇÃO #${newEd}` : project.coverConfig.issueBadge,
											hexBadgeText: project.volume ? `${project.volume} // ISSUE ${newEd || "01"}` : `VOL. 01 // ISSUE ${newEd || "01"}`
										}
									});
								},
								placeholder: "Ex: 01",
								className: "theme-app-input font-mono font-bold text-xs mt-1 border-2"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold uppercase",
								children: "Volume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.volume || "",
								onChange: (e) => {
									const newVol = e.target.value;
									onChange({
										...project,
										volume: newVol,
										coverConfig: {
											...project.coverConfig,
											hexBadgeText: newVol ? `${newVol} // ISSUE ${project.editionNumber || "01"}` : `VOL. 01 // ISSUE ${project.editionNumber || "01"}`
										}
									});
								},
								placeholder: "Ex: VOL. 01",
								className: "theme-app-input font-mono font-bold text-xs mt-1 border-2"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold uppercase",
								children: "Mês e Ano da Edição"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: project.date || "",
								onChange: (e) => {
									const newDate = e.target.value.toUpperCase();
									onChange({
										...project,
										date: newDate,
										coverConfig: {
											...project.coverConfig,
											issueDate: newDate
										}
									});
								},
								placeholder: "Ex: SETEMBRO 2026",
								className: "theme-app-input font-mono font-bold text-xs mt-1 border-2"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] opacity-70 mt-2",
						children: [
							"💡 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dica:" }),
							" Você também pode personalizar o texto exato da tag da capa (ex: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded",
								children: "VOL. 01 // ISSUE 01"
							}),
							") diretamente na aba ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Capa & Contracapa da Revista\"" }),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm bg-amber-400/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerenciador de Páginas & Estrutura da Edição" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Ligue ou desligue qualquer página da revista. Páginas desligadas não aparecem no leitor nem no PDF final."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${visibility.showCover ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase block",
									children: "1. Capa Principal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] opacity-75 block",
									children: "Capa e manchete"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${visibility.showCover ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"}`,
									children: visibility.showCover ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: visibility.showCover,
								onCheckedChange: (val) => updateVisibility("showCover", val)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${visibility.showEditorLetter ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase block",
									children: "2. Carta do Editor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] opacity-75 block",
									children: "Manifesto e equipe"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${visibility.showEditorLetter ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"}`,
									children: visibility.showEditorLetter ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: visibility.showEditorLetter,
								onCheckedChange: (val) => updateVisibility("showEditorLetter", val)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${visibility.showContributors ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase block",
									children: "3. Colaboradores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] opacity-75 block",
									children: "Grade de autores"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${visibility.showContributors ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"}`,
									children: visibility.showContributors ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: visibility.showContributors,
								onCheckedChange: (val) => updateVisibility("showContributors", val)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${visibility.showTableOfContents ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase block",
									children: "4. Sumário / Índice"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] opacity-75 block",
									children: "Lista de matérias"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${visibility.showTableOfContents ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"}`,
									children: visibility.showTableOfContents ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: visibility.showTableOfContents,
								onCheckedChange: (val) => updateVisibility("showTableOfContents", val)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${visibility.showBackCover ? "theme-app-card border-amber-400 shadow-sm" : "theme-app-card-subtle border-slate-300 opacity-60"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase block",
									children: "5. Contracapa"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] opacity-75 block",
									children: "Fechamento e contatos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block font-mono text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${visibility.showBackCover ? "bg-amber-400 text-black border-black" : "bg-slate-200 text-slate-700 border-slate-400"}`,
									children: visibility.showBackCover ? "✓ ATIVA (NO PDF)" : "✗ DESLIGADA"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: visibility.showBackCover,
								onCheckedChange: (val) => updateVisibility("showBackCover", val)
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-5 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1. Seletor de Fontes & Tipografia da Revista" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75 mt-0.5",
							children: "Escolha as famílias tipográficas oficiais que estilizam as manchetes, títulos e parágrafos de todo o PDF."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
							children: "FONTE & DESIGN"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 p-3.5 rounded-xl border-2 border-amber-500/40 bg-amber-400/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-black uppercase text-amber-500 flex items-center gap-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚡ Combinações Consagradas de 1 Clique (Editorial & Sports Intelligence)" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-mono opacity-60 uppercase",
								children: "APLICA MANCHETE + CORPO"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1",
							children: typographyPairingPresets.map((preset, pIdx) => {
								const isActive = fontConfig.headlineFont === preset.headline && fontConfig.bodyFont === preset.body;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => applyTypographyPreset(preset.headline, preset.body),
									className: `p-2.5 rounded-lg border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${isActive ? "bg-amber-400 text-black border-black shadow-sm ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-1 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-black text-xs uppercase leading-tight truncate",
												children: preset.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[8px] font-mono font-black px-1.5 py-0.2 rounded border ${isActive ? "bg-black text-amber-400 border-black" : "bg-amber-400/20 text-amber-600 border-amber-500/30"}`,
												children: preset.badge
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] opacity-75 line-clamp-2 leading-tight mb-2",
											children: preset.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between pt-1 border-t border-current/20 text-[9px] font-mono font-bold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "truncate",
													children: ["H: ", preset.headline.toUpperCase()]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "truncate",
													children: ["B: ", preset.body.toUpperCase()]
												})
											]
										})
									]
								}, pIdx);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold uppercase block",
							children: "A) Fonte dos Títulos, Manchetes e Capa (Headlines / H1 / H2):"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5",
							children: headlineFontOptions.map((font) => {
								const isSelected = fontConfig.headlineFont === font.id;
								const fClass = getHeadlineFontClass(font.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => updateHeadlineFont(font.id),
									className: `p-3 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-black text-xs",
											children: font.name
										}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-black" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] opacity-75 block mb-2",
										children: font.style
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `text-base font-black uppercase truncate border-t pt-1.5 ${fClass}`,
										children: font.sample
									})]
								}, font.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 pt-2 border-t border-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold uppercase block",
							children: "B) Fonte do Texto Corrido & Parágrafos (Body Text):"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5",
							children: bodyFontOptions.map((font) => {
								const isSelected = fontConfig.bodyFont === font.id;
								const bClass = getBodyFontClass(font.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => updateBodyFont(font.id),
									className: `p-3 rounded-lg border-2 cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "bg-amber-400 text-black border-black shadow-md ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-black text-xs",
											children: font.name
										}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-black" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] opacity-75 block mb-2",
										children: font.style
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `text-xs truncate border-t pt-1.5 leading-snug ${bClass}`,
										children: font.sample
									})]
								}, font.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl border-2 border-black bg-slate-950 text-white space-y-2 shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] font-bold text-amber-400 uppercase tracking-widest block",
								children: "PREVIEW EM TEMPO REAL DA COMBINAÇÃO TIPOGRÁFICA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: `text-xl sm:text-2xl font-black uppercase text-amber-400 tracking-tight leading-tight ${activeHeadlineClass}`,
								children: "O CÓDIGO DA ALTA PERFORMANCE & FORÇA NÃO-CONVENCIONAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-xs text-slate-300 leading-relaxed text-justify ${activeBodyClass}`,
								children: "Este parágrafo de exemplo demonstra como os seus artigos e matérias serão renderizados tanto no leitor digital quanto na impressão final do PDF, combinando autoridade visual e conforto de leitura."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"2. Tema Visual da Revista (",
								MAGAZINE_THEMES.length,
								" Paletas de Cores Editoriais)"
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75 mt-0.5",
							children: "Escolha a identidade visual completa para a capa, páginas internas, caixas de destaque e contracapa."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase shrink-0",
							children: [MAGAZINE_THEMES.length, " TEMAS DISPONÍVEIS"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setThemeFilter("all"),
								className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${themeFilter === "all" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"}`,
								children: [
									"Todos (",
									MAGAZINE_THEMES.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setThemeFilter("dark"),
								className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${themeFilter === "dark" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"}`,
								children: [
									"Escuros & Táticos (",
									MAGAZINE_THEMES.filter((t) => t.category === "dark").length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setThemeFilter("light"),
								className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${themeFilter === "light" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"}`,
								children: [
									"Claros & Editoriais (",
									MAGAZINE_THEMES.filter((t) => t.category === "light").length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setThemeFilter("vibrant"),
								className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all border-2 cursor-pointer ${themeFilter === "vibrant" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"}`,
								children: [
									"Vibrantes & High-Energy (",
									MAGAZINE_THEMES.filter((t) => t.category === "vibrant").length,
									")"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1",
						children: MAGAZINE_THEMES.filter((t) => themeFilter === "all" || t.category === themeFilter).map((theme) => {
							const isSelected = project.themeId === theme.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => handleSelectMagazineTheme(theme.id),
								className: `theme-app-card-subtle cursor-pointer p-4 rounded-xl border-2 transition-all flex flex-col justify-between ${isSelected ? "border-amber-500 ring-2 ring-amber-400 shadow-md bg-amber-400/5" : "border-slate-300 hover:border-slate-700"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-black text-xs uppercase truncate pr-2",
										children: theme.name
									}), isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 flex items-center gap-1 bg-amber-400 text-black px-1.5 py-0.2 rounded font-mono font-black text-[9px] border border-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3 text-black" }), "ATIVO"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 font-mono text-[8px] opacity-60 uppercase",
										children: theme.isLight ? "Claro" : theme.category === "vibrant" ? "Vibrante" : "Escuro"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] opacity-75 leading-snug mb-3",
									children: theme.description
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-2.5 border-t border-slate-300 text-[10px] font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-4 h-4 rounded-full border border-black shadow-xs shrink-0",
												style: { backgroundColor: theme.primaryColor },
												title: `Cor Primária: ${theme.primaryColor}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-4 h-4 rounded-full border border-black shadow-xs shrink-0",
												style: { backgroundColor: theme.accentColor },
												title: `Destaque: ${theme.accentColor}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-4 h-4 rounded-full border border-black shadow-xs shrink-0",
												style: { backgroundColor: theme.isLight ? theme.bgLight : theme.bgDark },
												title: `Fundo: ${theme.isLight ? theme.bgLight : theme.bgDark}`
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold uppercase text-[9px] px-1.5 py-0.5 rounded border",
										style: {
											backgroundColor: theme.isLight ? "#FAFAF9" : "#0F172A",
											color: theme.isLight ? "#0F172A" : "#FFFFFF",
											borderColor: theme.primaryColor
										},
										children: theme.isLight ? "Fundo Branco" : "Fundo Escuro"
									})]
								})]
							}, theme.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. Esquema de Cores do Aplicativo (Eye-Care & Área de Trabalho)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] font-black px-2 py-0.5 rounded border border-current",
							children: "WORKSPACE"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 leading-relaxed",
						children: "Alterne o visual da sua área de trabalho para evitar a fadiga visual durante longas sessões de edição."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 pt-1",
						children: APP_UI_THEMES.map((uiTheme) => {
							const isSelected = currentUiTheme === uiTheme.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onClick: () => onSelectUiTheme(uiTheme.id),
								className: `theme-app-card-subtle cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${isSelected ? "border-amber-500 ring-2 ring-amber-400 shadow-md" : "border-slate-300 hover:border-slate-700"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-black text-xs uppercase flex items-center gap-1.5",
										children: [
											uiTheme.icon === "contrast" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }),
											uiTheme.icon === "sun" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-3.5 h-3.5 text-amber-500" }),
											uiTheme.icon === "moon" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-3.5 h-3.5 text-blue-400" }),
											uiTheme.icon === "book" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, { className: "w-3.5 h-3.5 text-amber-700" }),
											uiTheme.icon === "zap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-yellow-400" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: uiTheme.name })
										]
									}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-amber-500" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] opacity-75 leading-snug",
									children: uiTheme.subtitle
								})] })
							}, uiTheme.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-3 shadow-sm bg-emerald-500/5 border-emerald-500/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4. Inteligência Artificial (Google Gemini)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-emerald-500 text-white uppercase flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3 h-3 text-white" }), "BACKEND SEGURO"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs opacity-80 leading-relaxed",
						children: [
							"A integração com a Inteligência Artificial é gerenciada diretamente no servidor através da variável de ambiente ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono font-bold",
								children: "GEMINI_API_KEY"
							}),
							". As chaves de acesso nunca são expostas no navegador, URLs ou arquivos de backup."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-semibold text-emerald-800",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chamadas de IA protegidas e roteadas via servidor seguro (/api/ai)." })]
					})
				]
			})
		]
	});
};
var AiStudioDialog = ({ isOpen, onClose, onAddArticle }) => {
	const [topic, setTopic] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("HIPERTROFIA & PERFORMANCE");
	const [tone, setTone] = (0, import_react.useState)("motivational");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [generatedResult, setGeneratedResult] = (0, import_react.useState)(null);
	const predefinedPautas = [
		{
			topic: "Periodização Ondulatória e Ganho de Força Máxima",
			cat: "TREINAMENTO"
		},
		{
			topic: "Jejum Intermitente, Autofagia e Sensibilidade à Insulina",
			cat: "NUTRIÇÃO & METABOLISMO"
		},
		{
			topic: "Biohacking Circadiano: Otimizando a Testosterona Natural",
			cat: "BIOHACKING"
		},
		{
			topic: "A Regra dos 10%: Como Superar Platôs Sem Lesões",
			cat: "FISIOLOGIA"
		}
	];
	const handleGenerate = async () => {
		if (!topic.trim()) {
			alert("Por favor, digite o tema da matéria.");
			return;
		}
		try {
			setIsLoading(true);
			const result = await generateFullArticleByTopic(topic, category, tone);
			setGeneratedResult(result);
		} catch (err) {
			alert("Erro ao gerar matéria: " + err.message);
		} finally {
			setIsLoading(false);
		}
	};
	const handleApplyToMagazine = () => {
		if (!generatedResult) return;
		const heroImage = generateAiImageUrl(generatedResult.suggestedImagePrompt || `${generatedResult.title} treino esportivo de alta performance em academia iluminada`, 1200, 800, "realistic");
		onAddArticle({
			id: "art-" + Date.now(),
			title: generatedResult.title,
			subtitle: generatedResult.subtitle,
			category: category.toUpperCase(),
			author: "Coach Montanha",
			authorBio: "Redação Revista Montanha",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage,
			heroImageCaption: `Matéria Especial: ${generatedResult.title}`,
			heroImagePrompt: generatedResult.suggestedImagePrompt,
			content: generatedResult.content,
			pullQuotes: generatedResult.pullQuotes || [],
			calloutBox: {
				title: "PONTO DE ATENÇÃO DO COACH",
				content: "A aplicação rigorosa destes princípios gera resultados em tempo recorde."
			},
			keyTakeaways: generatedResult.keyTakeaways || [],
			layoutTemplate: "editorial-lead",
			tags: [
				category,
				"Exclusivo",
				"Revista"
			],
			estimatedReadTime: generatedResult.estimatedReadTime || 4,
			featuredOnCover: true
		});
		onClose();
		setGeneratedResult(null);
		setTopic("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "theme-app-card max-w-3xl max-h-[85vh] overflow-y-auto p-6 custom-scrollbar font-sans border-2 shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "border-b-2 border-current pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "text-xl font-black flex items-center gap-2 uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerador Inteligente de Matérias com IA" })]
				})
			}), !generatedResult ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 my-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-80 leading-relaxed font-medium",
						children: "Digite qualquer tópico ou ideia que você gostaria de incluir na revista. A IA irá redigir a matéria completa já dividida em subtítulos editoriais, com citações de destaque, resumo e sugestões de imagem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-[11px] font-bold uppercase mb-2 block opacity-80",
						children: "Sugestões de Pautas Rápidas:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
						children: predefinedPautas.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setTopic(p.topic);
								setCategory(p.cat);
							},
							className: "theme-app-card-subtle text-left p-2.5 rounded-lg border-2 hover:border-black transition-all text-xs flex items-start gap-2 group shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-bold text-amber-600 block uppercase",
								children: p.cat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold leading-tight",
								children: p.topic
							})] })]
						}, idx))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-bold mb-1 block",
						children: "TEMA OU ASSUNTO DA MATÉRIA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: topic,
						onChange: (e) => setTopic(e.target.value),
						placeholder: "Ex: Como acelerar o ganho de massa muscular após os 30 anos",
						className: "theme-app-input font-bold text-sm border-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold mb-1 block",
							children: "CATEGORIA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							placeholder: "EX: TREINAMENTO, NUTRIÇÃO",
							className: "theme-app-input text-xs border-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold mb-1 block",
							children: "TOM EDITORIAL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: tone,
							onChange: (e) => setTone(e.target.value),
							className: "theme-app-input w-full rounded-md px-3 py-2 text-xs font-bold border-2 focus:outline-none focus:ring-2 focus:ring-amber-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "motivational",
									children: "Inspirador & Alta Performance (Estilo Montanha)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "journalistic",
									children: "Jornalístico & Elegante (Estilo Time / Vogue)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "scientific",
									children: "Científico & Fisiológico (Com base em estudos)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "executive",
									children: "Executivo & Liderança (Estilo Forbes)"
								})
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleGenerate,
						disabled: isLoading || !topic.trim(),
						className: "w-full h-11 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-md border-2 border-black flex items-center justify-center gap-2",
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Redigindo Matéria Editorial Completa com IA..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerar Artigo Completo com Diagramação" })] })
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 my-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-amber-400 text-black border-2 border-black p-3 rounded-lg flex items-center justify-between shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-black flex items-center gap-1.5 uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }), "Matéria Redigida com Sucesso!"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setGeneratedResult(null),
							className: "h-7 text-xs font-bold",
							children: "Gerar Outra"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-3 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b-2 pb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold text-amber-600 uppercase tracking-widest",
										children: category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-black uppercase mt-0.5",
										children: generatedResult.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium mt-1 opacity-80",
										children: generatedResult.subtitle
									})
								]
							}),
							generatedResult.pullQuotes && generatedResult.pullQuotes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card p-2.5 rounded border-l-4 border-amber-500 text-xs italic font-medium",
								children: [
									"\"",
									generatedResult.pullQuotes[0],
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "theme-app-card text-xs leading-relaxed font-mono max-h-48 overflow-y-auto p-2 rounded border",
								children: generatedResult.content
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "pt-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setGeneratedResult(null),
							className: "border-2 font-bold",
							children: "Refazer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleApplyToMagazine,
							className: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 flex items-center gap-2 border-2 border-black",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inserir Matéria na Revista" })]
						})]
					})
				]
			})]
		})
	});
};
/**
* Gera um arquivo PDF real (.pdf) diretamente no navegador renderizando cada página
* com html2canvas e compilando via jsPDF em alta resolução, disparando o download direto.
*/
async function exportMagazineToDirectPdf({ pageElements, project, layoutMode, onProgress }) {
	const total = pageElements.length;
	if (total === 0) throw new Error("Nenhuma página disponível para exportação em PDF.");
	const isMobile = layoutMode === "mobile";
	const pageWidthMm = isMobile ? 108 : 210;
	const pageHeightMm = isMobile ? 192 : 297;
	const pdfFormat = isMobile ? [108, 192] : "a4";
	onProgress?.({
		current: 0,
		total,
		percent: 0,
		statusText: "Inicializando motor de compilação de PDF de alta fidelidade..."
	});
	const pdf = new import_jspdf_node_min.jsPDF({
		orientation: "portrait",
		unit: "mm",
		format: pdfFormat,
		compress: true
	});
	for (let i = 0; i < total; i++) {
		const el = pageElements[i];
		if (!el) continue;
		onProgress?.({
			current: i + 1,
			total,
			percent: Math.round((i + .3) / total * 100),
			statusText: `Capturando e renderizando página ${i + 1} de ${total} em alta resolução...`
		});
		await new Promise((resolve) => setTimeout(resolve, 80));
		const imgData = (await html2canvas(el, {
			scale: 2,
			useCORS: true,
			allowTaint: false,
			logging: false,
			backgroundColor: "#0B0F19",
			windowWidth: isMobile ? 540 : 1080,
			imageTimeout: 15e3
		})).toDataURL("image/jpeg", .92);
		if (i > 0) pdf.addPage(pdfFormat, "portrait");
		pdf.addImage(imgData, "JPEG", 0, 0, pageWidthMm, pageHeightMm, void 0, "FAST");
		onProgress?.({
			current: i + 1,
			total,
			percent: Math.round((i + 1) / total * 100),
			statusText: `Página ${i + 1} de ${total} compilada no PDF.`
		});
		await new Promise((resolve) => setTimeout(resolve, 40));
	}
	onProgress?.({
		current: total,
		total,
		percent: 100,
		statusText: "Finalizando arquivo e iniciando download..."
	});
	const sanitizedTitle = project.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
	const modeSlug = isMobile ? "mobile_9x16" : "a4";
	const fileName = `${sanitizedTitle || "montanha_magazine"}_edicao_${project.editionNumber || "01"}_${modeSlug}.pdf`;
	pdf.save(fileName);
}
var SlideToConfirm = ({ onConfirm, text = "Deslize para Confirmar", confirmedText = "Confirmado!", className = "" }) => {
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [dragProgress, setDragProgress] = (0, import_react.useState)(0);
	const [isConfirmed, setIsConfirmed] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const handleStart = () => {
		if (isConfirmed) return;
		setIsDragging(true);
	};
	const handleMove = (0, import_react.useCallback)((clientX) => {
		if (!isDragging || isConfirmed || !containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const handleWidth = 48;
		const maxDrag = rect.width - handleWidth;
		const progress = Math.max(0, Math.min(clientX - rect.left - handleWidth / 2, maxDrag)) / maxDrag;
		setDragProgress(progress);
		if (progress >= .9) {
			setIsConfirmed(true);
			setIsDragging(false);
			setDragProgress(1);
			onConfirm();
		}
	}, [
		isDragging,
		isConfirmed,
		onConfirm
	]);
	const handleEnd = (0, import_react.useCallback)(() => {
		if (!isDragging || isConfirmed) return;
		setIsDragging(false);
		if (dragProgress < .9) setDragProgress(0);
	}, [
		isDragging,
		isConfirmed,
		dragProgress
	]);
	(0, import_react.useEffect)(() => {
		const onMouseMove = (e) => handleMove(e.clientX);
		const onMouseUp = () => handleEnd();
		const onTouchMove = (e) => handleMove(e.touches[0].clientX);
		const onTouchEnd = () => handleEnd();
		if (isDragging) {
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
			window.addEventListener("touchmove", onTouchMove);
			window.addEventListener("touchend", onTouchEnd);
		}
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("touchmove", onTouchMove);
			window.removeEventListener("touchend", onTouchEnd);
		};
	}, [
		isDragging,
		handleMove,
		handleEnd
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: `relative h-12 w-full max-w-md rounded-full bg-slate-900/90 border border-slate-700/60 p-1 select-none overflow-hidden transition-all duration-300 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 bottom-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-75",
				style: {
					width: `${Math.max(48, dragProgress * 100)}%`,
					opacity: isConfirmed ? 1 : .8
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-semibold uppercase tracking-wider text-slate-300",
				children: isConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-white flex items-center gap-1.5 animate-pulse",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }),
						" ",
						confirmedText
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { opacity: 1 - dragProgress * 1.2 },
					children: text
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onMouseDown: handleStart,
				onTouchStart: handleStart,
				className: `relative z-10 h-10 w-10 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg transition-transform duration-75 ${isConfirmed ? "bg-white text-emerald-600 pointer-events-none" : "bg-emerald-500 text-white hover:scale-105"}`,
				style: { transform: `translateX(${dragProgress * ((containerRef.current?.getBoundingClientRect().width || 280) - 48)}px)` },
				children: isConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5" })
			})
		]
	});
};
var PdfExportModal = ({ isOpen, onClose, project, theme, onOpenMockupStudio, layoutMode = "print", onSelectLayoutMode }) => {
	const [selectedExportMode, setSelectedExportMode] = (0, import_react.useState)(layoutMode || "print");
	const [previewPageIndex, setPreviewPageIndex] = (0, import_react.useState)(0);
	const [isGeneratingPdf, setIsGeneratingPdf] = (0, import_react.useState)(false);
	const [isBrowserPrinting, setIsBrowserPrinting] = (0, import_react.useState)(false);
	const [pdfProgress, setPdfProgress] = (0, import_react.useState)(null);
	const [downloadSuccess, setDownloadSuccess] = (0, import_react.useState)(false);
	const [showPrintInstructions, setShowPrintInstructions] = (0, import_react.useState)(false);
	const offscreenContainerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (layoutMode) setSelectedExportMode(layoutMode);
	}, [layoutMode]);
	const activePages = getActiveMagazinePages({
		project,
		theme,
		layoutMode: selectedExportMode
	});
	const totalPages = Math.max(1, activePages.length);
	(0, import_react.useEffect)(() => {
		if (previewPageIndex >= totalPages) setPreviewPageIndex(Math.max(0, totalPages - 1));
	}, [totalPages, previewPageIndex]);
	const handleSelectMode = (mode) => {
		setSelectedExportMode(mode);
		if (onSelectLayoutMode) onSelectLayoutMode(mode);
	};
	const handleNextPreviewPage = () => {
		setPreviewPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
	};
	const handlePrevPreviewPage = () => {
		setPreviewPageIndex((prev) => Math.max(prev - 1, 0));
	};
	const handleDirectDownloadPdf = async () => {
		if (!offscreenContainerRef.current) return;
		setIsGeneratingPdf(true);
		setDownloadSuccess(false);
		try {
			const pageElements = Array.from(offscreenContainerRef.current.querySelectorAll("[data-pdf-export-page]"));
			if (pageElements.length === 0) throw new Error("Páginas não encontradas no contêiner de renderização.");
			await exportMagazineToDirectPdf({
				pageElements,
				project,
				layoutMode: selectedExportMode,
				onProgress: (progress) => {
					setPdfProgress(progress);
				}
			});
			setDownloadSuccess(true);
			setTimeout(() => {
				setDownloadSuccess(false);
			}, 5e3);
		} catch (err) {
			alert("Falha ao gerar o arquivo PDF direto: " + (err?.message || err));
		} finally {
			setIsGeneratingPdf(false);
			setPdfProgress(null);
		}
	};
	const handlePrintViaBrowser = (modeToPrint = selectedExportMode) => {
		setIsBrowserPrinting(true);
		if (onSelectLayoutMode) onSelectLayoutMode(modeToPrint);
		if (modeToPrint === "mobile") {
			document.body.classList.add("print-layout-mobile");
			document.body.classList.remove("print-layout-print");
		} else {
			document.body.classList.add("print-layout-print");
			document.body.classList.remove("print-layout-mobile");
		}
		onClose();
		setTimeout(() => {
			window.print();
			setIsBrowserPrinting(false);
			document.body.classList.remove("print-layout-mobile");
			document.body.classList.remove("print-layout-print");
		}, 250);
	};
	const handleDownloadBackupJson = () => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", dataStr);
		downloadAnchor.setAttribute("download", `${project.title.toLowerCase().replace(/\s+/g, "_")}_edicao_${project.editionNumber || "01"}.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
	};
	const handleExportCompiledMarkdown = () => {
		let md = `# ${project.title.toUpperCase()}\n`;
		md += `**Edição:** ${project.editionNumber || "01"} | **Volume:** ${project.volume || "01"} | **Data:** ${project.date}\n`;
		md += `**Tema:** ${theme.name}\n\n`;
		md += `---\n\n`;
		if (project.editorialInfo) {
			md += `## CARTA DO EDITOR\n\n`;
			md += `**Editor:** ${project.editorialInfo.editorName} (${project.editorialInfo.editorRole})\n\n`;
			md += `### ${project.editorialInfo.editorLetterTitle || "Manifesto de Abertura"}\n\n`;
			md += `${project.editorialInfo.editorLetter}\n\n`;
			if (project.editorialInfo.editorialNote) md += `> *"${project.editorialInfo.editorialNote}"* — ${project.editorialInfo.editorName}\n\n`;
			md += `---\n\n`;
		}
		md += `## MATÉRIAS & ARTIGOS DA EDIÇÃO\n\n`;
		project.articles.filter((a) => a.enabled !== false).forEach((art, idx) => {
			md += `### ${idx + 1}. ${art.title}\n\n`;
			if (art.subtitle) md += `*${art.subtitle}*\n\n`;
			md += `**Categoria:** ${art.category} | **Autor:** ${art.author} | **Tempo de Leitura:** ${art.estimatedReadTime} min\n\n`;
			md += `${art.content}\n\n`;
			if (art.pullQuotes && art.pullQuotes.length > 0) md += `> **Citação:** "${art.pullQuotes[0]}"\n\n`;
			if (art.keyTakeaways && art.keyTakeaways.length > 0) {
				md += `**Pontos-chave:**\n`;
				art.keyTakeaways.forEach((t) => {
					md += `- ${t}\n`;
				});
				md += `\n`;
			}
			md += `---\n\n`;
		});
		const dataStr = "data:text/markdown;charset=utf-8," + encodeURIComponent(md);
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", dataStr);
		downloadAnchor.setAttribute("download", `${project.title.toLowerCase().replace(/\s+/g, "_")}_edicao_${project.editionNumber || "01"}_textos.md`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
	};
	const currentPage = activePages[previewPageIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"data-testid": "export-modal",
			className: "theme-app-card max-w-5xl p-5 sm:p-6 custom-scrollbar font-sans border-2 shadow-2xl max-h-[92vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b-2 border-current pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg sm:text-xl font-black flex items-center gap-2 uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pré-Visualização da Revista & Central de Exportação de PDF" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase w-fit",
							children: [
								totalPages,
								" PÁGINAS • ",
								selectedExportMode === "mobile" ? "MODO MOBILE 9:16" : "MODO IMPRESSO A4"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: [
							"Pré-visualize cada página exatamente como foi produzida e faça o ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "download direto do PDF" }),
							" pronto no seu computador, sem precisar passar pela janela de impressão do navegador."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-black uppercase tracking-tight flex items-center gap-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1. Escolha o Formato da Revista:" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono opacity-70",
							children: "A pré-visualização abaixo se adapta instantaneamente"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-testid": "opt-export-print",
							onClick: () => handleSelectMode("print"),
							className: `p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedExportMode === "print" ? "border-amber-400 bg-amber-400/10 shadow-sm ring-2 ring-amber-400/40" : "border-slate-700/60 hover:border-slate-400 theme-app-card-subtle opacity-75 hover:opacity-100"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-black text-xs uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edição Impressa A4" })]
								}), selectedExportMode === "print" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-amber-500" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] opacity-80 leading-snug",
								children: "Layout clássico A4 (210x297mm), texto em duas colunas, rodapé editorial denso com código de barras."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-testid": "opt-export-mobile",
							onClick: () => handleSelectMode("mobile"),
							className: `p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedExportMode === "mobile" ? "border-amber-400 bg-amber-400/10 shadow-sm ring-2 ring-amber-400/40" : "border-slate-700/60 hover:border-slate-400 theme-app-card-subtle opacity-75 hover:opacity-100"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-black text-xs uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leitor Digital Mobile (9:16)" })]
								}), selectedExportMode === "mobile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-amber-500" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] opacity-80 leading-snug",
								children: "Coluna única, tipografia ampliada, imagens em blocos separados e rodapé minimalista para celular."
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-4 my-3 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 border-b pb-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase",
										children: "Pré-Visualização Ao Vivo:"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											onClick: handlePrevPreviewPage,
											disabled: previewPageIndex === 0 || isGeneratingPdf,
											className: "h-7 px-2 text-xs font-bold border-2 cursor-pointer",
											title: "Página Anterior",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: "Anterior"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-black text-amber-400 font-mono text-[10px] font-black px-2 py-1 rounded border border-amber-400/40 min-w-[80px] text-center",
											children: [
												previewPageIndex + 1,
												" / ",
												totalPages
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											onClick: handleNextPreviewPage,
											disabled: previewPageIndex >= totalPages - 1 || isGeneratingPdf,
											className: "h-7 px-2 text-xs font-bold border-2 cursor-pointer",
											title: "Próxima Página",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: "Próxima"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[11px] font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "opacity-75 truncate max-w-[280px]",
									children: currentPage?.title || `Página ${previewPageIndex + 1}`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-black/20 text-amber-600",
									children: selectedExportMode === "mobile" ? "9:16 Vertical" : "210x297mm A4"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full flex items-center justify-center p-2 rounded-xl bg-slate-950/80 border-2 border-black/40 overflow-hidden shadow-inner min-h-[380px] max-h-[460px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `relative transition-all duration-300 transform scale-[0.88] sm:scale-95 origin-center overflow-hidden shadow-2xl ${selectedExportMode === "mobile" ? "aspect-[9/16] w-[220px] sm:w-[245px] rounded-2xl border-4 border-slate-700 bg-black" : "aspect-[210/297] w-[270px] sm:w-[310px] rounded-xs border border-black/40 bg-black"}`,
									children: currentPage?.render(previewPageIndex + 1, false, selectedExportMode)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 overflow-x-auto custom-scrollbar py-1",
								children: activePages.map((page, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPreviewPageIndex(idx),
									className: `px-2 py-0.5 rounded text-[9.5px] font-mono font-bold shrink-0 transition-all cursor-pointer border ${previewPageIndex === idx ? "bg-amber-400 text-black border-black font-black shadow-xs scale-105" : "theme-app-card opacity-60 hover:opacity-100 border-current"}`,
									title: page.title,
									children: ["Pág ", idx + 1]
								}, page.id))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card p-4 rounded-xl border-2 border-amber-500/50 bg-amber-400/5 space-y-3 shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase",
											children: "DOWNLOAD DIRETO"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-mono font-bold text-amber-500 uppercase",
											children: "SEM IMPRIMIR EM PDF"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-black text-sm uppercase tracking-tight",
										children: "Baixar Arquivo PDF Completo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] opacity-75 mt-0.5 leading-relaxed",
										children: [
											"Gera o arquivo ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".pdf" }),
											" compilado em alta resolução com todas as fotos, cores e diagramação, disparando o download direto para sua pasta de Downloads."
										]
									})] }),
									isGeneratingPdf && pdfProgress && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 rounded-lg bg-black text-amber-400 border border-amber-400/50 space-y-1.5 animate-pulse",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-[11px] font-mono font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pdfProgress.statusText })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pdfProgress.percent, "%"] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-amber-400/30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "bg-amber-400 h-full transition-all duration-200",
												style: { width: `${pdfProgress.percent}%` }
											})
										})]
									}),
									downloadSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download concluído! Seu arquivo PDF foi salvo com sucesso." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-1 flex flex-col items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold uppercase tracking-wider text-slate-400",
											children: "Atalho Rápido Bencho UI"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideToConfirm, {
											onConfirm: handleDirectDownloadPdf,
											text: `Deslize para Gerar PDF (${selectedExportMode === "mobile" ? "Mobile 9:16" : "A4"})`,
											confirmedText: "Gerando PDF...",
											className: "w-full"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										"data-testid": "btn-direct-download-pdf",
										"data-test-alias": "btn-confirm-export-pdf",
										onClick: handleDirectDownloadPdf,
										disabled: isGeneratingPdf,
										className: "w-full h-12 bg-amber-400 hover:bg-amber-500 text-black font-black text-sm border-2 border-black shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-95 transition-all",
										children: isGeneratingPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Compilando Revista em PDF (",
											pdfProgress?.percent || 0,
											"%)..."
										] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4 text-black stroke-[2.5]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Baixar Revista em PDF (",
											selectedExportMode === "mobile" ? "Mobile 9:16" : "A4",
											")"
										] })] })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-3 rounded-xl border-2 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-black uppercase opacity-80 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5 text-slate-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vai imprimir em impressora física de papel?" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setShowPrintInstructions(!showPrintInstructions),
											className: "text-[10px] font-bold text-amber-600 hover:underline cursor-pointer",
											children: showPrintInstructions ? "Ocultar dicas" : "Ver instruções"
										})]
									}),
									showPrintInstructions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-amber-400/10 border border-amber-400/40 p-2.5 rounded-lg space-y-1 text-[11px] leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Configurações recomendadas de impressão física:" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "list-disc pl-4 space-y-0.5 opacity-90",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Em Layout, selecione Retrato (Portrait)." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Em Mais Definições, marque \"Gráficos de segundo plano\"." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Margens: Nenhuma." })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => handlePrintViaBrowser(selectedExportMode),
										disabled: isBrowserPrinting || isGeneratingPdf,
										className: "w-full h-8 text-xs font-bold border-2 cursor-pointer flex items-center justify-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Abrir Diálogo de Impressão do Navegador" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: handleExportCompiledMarkdown,
									className: "h-9 border-2 font-bold text-xs flex items-center justify-center gap-1",
									title: "Exportar textos em Markdown formatado",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Textos (.MD)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: handleDownloadBackupJson,
									className: "h-9 border-2 font-bold text-xs flex items-center justify-center gap-1",
									title: "Download do backup completo em JSON",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Backup (.JSON)" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-3 rounded-xl border-2 border-amber-500/30 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-black uppercase flex items-center gap-1 text-amber-600 dark:text-amber-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mockups Stories (9:16)" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[9px] font-mono font-bold bg-amber-400/20 text-amber-700 dark:text-amber-300 px-1.5 py-0.2 rounded",
											children: "Divulgação"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2 pt-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "/mockup-stories-1.jpg",
											download: "montanha_magazine_stories_mockup_1.jpg",
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center gap-1.5 p-1.5 rounded border border-black bg-slate-900 text-white hover:bg-slate-800 text-[10px] font-bold transition-all shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-4 h-7 rounded overflow-hidden shrink-0 border border-white/20",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "/mockup-stories-1.jpg",
													alt: "Mockup 1",
													className: "w-full h-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: "Mockup 1"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "/mockup-stories-2.jpg",
											download: "montanha_magazine_stories_mockup_2.jpg",
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center gap-1.5 p-1.5 rounded border border-black bg-slate-900 text-white hover:bg-slate-800 text-[10px] font-bold transition-all shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-4 h-7 rounded overflow-hidden shrink-0 border border-white/20",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: "/mockup-stories-2.jpg",
													alt: "Mockup 2",
													className: "w-full h-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: "Mockup 2"
											})]
										})]
									}),
									onOpenMockupStudio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: onOpenMockupStudio,
										className: "text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer pt-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estúdio de Mockups com IA →" })]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: offscreenContainerRef,
					"aria-hidden": "true",
					style: {
						position: "fixed",
						left: "-99999px",
						top: 0,
						pointerEvents: "none",
						zIndex: -9999
					},
					children: activePages.map((page, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"data-pdf-export-page": true,
						style: {
							width: selectedExportMode === "mobile" ? "540px" : "794px",
							height: selectedExportMode === "mobile" ? "960px" : "1123px",
							overflow: "hidden",
							boxSizing: "border-box",
							backgroundColor: "#0B0F19"
						},
						children: page.render(idx + 1, true, selectedExportMode)
					}, `pdf-capture-${page.id}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
					className: "border-t-2 border-current pt-3 flex items-center justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onClose,
						className: "font-bold text-xs h-8",
						children: "Fechar"
					})
				})
			]
		})
	});
};
var MockupStudioModal = ({ isOpen, onClose, project }) => {
	const [coverUrl, setCoverUrl] = (0, import_react.useState)("/real-cover.png");
	const [activeTab, setActiveTab] = (0, import_react.useState)("official");
	const officialScenes = [
		{
			id: "wood-desk",
			name: "Mesa de Madeira na Recepção",
			description: "Revista física pousada sobre mesa rústica de carvalho na recepção com luz natural e desfoque de iPhone",
			url: "/mockups/mockup-wood-desk-real.jpg",
			format: "stories",
			icon: Coffee,
			tag: "Mais Pedida"
		},
		{
			id: "hands-box",
			name: "Em Mãos no Box de CrossFit",
			description: "Mãos atléticas segurando a revista real aberta em primeiro plano com atletas e barras em bokeh f/1.4",
			url: "/mockups/mockup-hands-real.jpg",
			format: "stories",
			icon: Hand,
			tag: "Instagram Stories"
		},
		{
			id: "gym-floor",
			name: "Drop Pad no Chão da Academia",
			description: "Revista física apoiada em 3D sobre o drop pad emborrachado com anilhas e barras ao fundo",
			url: "/mockups/mockup-gym-floor-real.jpg",
			format: "stories",
			icon: Dumbbell,
			tag: "Alta Performance"
		},
		{
			id: "official-1",
			name: "Mão & Medalhão de Lançamento",
			description: "Capa real em mãos com medalhão dourado 'Lançamento Oficial da Montanha' e rack olímpico ao fundo",
			url: "/mockup-stories-1.jpg",
			format: "stories",
			icon: Trophy,
			tag: "Edição Oficial"
		},
		{
			id: "official-2",
			name: "Drop Pad 3D com Equipamentos",
			description: "Revista física real em perspectiva tridimensional sobre drop pad ao lado de anilhas pesadas",
			url: "/mockup-stories-2.jpg",
			format: "stories",
			icon: Layers,
			tag: "Edição Oficial"
		}
	];
	const [selectedScene, setSelectedScene] = (0, import_react.useState)(officialScenes[0]);
	const [customPrompt, setCustomPrompt] = (0, import_react.useState)("Mesa de mármore branco em recepção moderna com plantas ao fundo e luz suave de janela");
	const [customFormat, setCustomFormat] = (0, import_react.useState)("stories");
	const [isGeneratingScene, setIsGeneratingScene] = (0, import_react.useState)(false);
	const [bgSceneUrl, setBgSceneUrl] = (0, import_react.useState)("/mockups/scene-wood-desk.jpg");
	const [magScale, setMagScale] = (0, import_react.useState)(100);
	const [magAngle, setMagAngle] = (0, import_react.useState)(-6);
	const [magPosY, setMagPosY] = (0, import_react.useState)(68);
	const [magGloss, setMagGloss] = (0, import_react.useState)(45);
	const [magPose, setMagPose] = (0, import_react.useState)("table");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (activeTab !== "custom") return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const width = customFormat === "stories" ? 1080 : customFormat === "feed" ? 1080 : 1920;
		const height = customFormat === "stories" ? 1920 : customFormat === "feed" ? 1080 : 1080;
		canvas.width = width;
		canvas.height = height;
		const bgImg = new Image();
		bgImg.crossOrigin = "anonymous";
		bgImg.src = bgSceneUrl;
		const coverImg = new Image();
		coverImg.crossOrigin = "anonymous";
		coverImg.src = coverUrl;
		let loadedCount = 0;
		const onLoaded = () => {
			loadedCount++;
			if (loadedCount < 2) return;
			ctx.clearRect(0, 0, width, height);
			const bgAspect = bgImg.width / bgImg.height;
			const targetAspect = width / height;
			let sx = 0, sy = 0, sw = bgImg.width, sh = bgImg.height;
			if (bgAspect > targetAspect) {
				sw = bgImg.height * targetAspect;
				sx = (bgImg.width - sw) / 2;
			} else {
				sh = bgImg.width / targetAspect;
				sy = (bgImg.height - sh) / 2;
			}
			ctx.drawImage(bgImg, sx, sy, sw, sh, 0, 0, width, height);
			const baseW = width * .42 * (magScale / 100);
			const baseH = baseW * 1.414;
			const cx = width / 2;
			const cy = height * (magPosY / 100);
			ctx.save();
			ctx.translate(cx, cy);
			if (magPose === "table") ctx.rotate(magAngle * Math.PI / 180);
			else if (magPose === "stand") ctx.rotate(magAngle / 2 * Math.PI / 180);
			ctx.save();
			ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
			ctx.shadowBlur = width * .04;
			ctx.shadowOffsetX = width * .015;
			ctx.shadowOffsetY = height * .02;
			ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
			ctx.fillRect(-baseW / 2 + 10, -baseH / 2 + 15, baseW - 10, baseH - 5);
			ctx.restore();
			ctx.fillStyle = "rgba(10, 5, 0, 0.4)";
			ctx.fillRect(-baseW / 2 + 4, -baseH / 2 + 8, baseW - 4, baseH - 4);
			ctx.fillStyle = "#EAE5DF";
			ctx.fillRect(-baseW / 2 + 3, -baseH / 2 + 3, baseW, baseH);
			ctx.fillStyle = "#D5CFCA";
			ctx.fillRect(-baseW / 2 + 1, -baseH / 2 + 1, baseW, baseH);
			ctx.drawImage(coverImg, -baseW / 2, -baseH / 2, baseW, baseH);
			if (magGloss > 0) {
				const glare = ctx.createLinearGradient(-baseW / 2, -baseH / 2, baseW / 2, baseH / 2);
				const alpha = magGloss / 100 * .35;
				glare.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
				glare.addColorStop(.4, `rgba(255, 255, 255, ${alpha * .4})`);
				glare.addColorStop(.7, "rgba(255, 255, 255, 0)");
				glare.addColorStop(1, "rgba(255, 255, 255, 0)");
				ctx.fillStyle = glare;
				ctx.fillRect(-baseW / 2, -baseH / 2, baseW, baseH);
			}
			ctx.restore();
		};
		bgImg.onload = onLoaded;
		coverImg.onload = onLoaded;
	}, [
		activeTab,
		bgSceneUrl,
		coverUrl,
		customFormat,
		magScale,
		magAngle,
		magPosY,
		magGloss,
		magPose
	]);
	const handleGenerateCustomScene = () => {
		if (!customPrompt.trim()) return;
		setIsGeneratingScene(true);
		const url = generateAiMockupSceneUrl(customPrompt, customFormat);
		const testImg = new Image();
		testImg.crossOrigin = "anonymous";
		testImg.onload = () => {
			setBgSceneUrl(url);
			setIsGeneratingScene(false);
		};
		testImg.onerror = () => {
			setBgSceneUrl(url);
			setIsGeneratingScene(false);
		};
		testImg.src = url;
	};
	const handleCopyLink = (url) => {
		navigator.clipboard.writeText(url);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleDownload = async (urlOrCanvas, filename) => {
		if (activeTab === "custom" && canvasRef.current) {
			const dataUrl = canvasRef.current.toDataURL("image/jpeg", .95);
			const a = document.createElement("a");
			a.href = dataUrl;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			a.remove();
			return;
		}
		try {
			const blob = await (await fetch(urlOrCanvas)).blob();
			const blobUrl = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = blobUrl;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(blobUrl);
		} catch {
			window.open(urlOrCanvas, "_blank");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "theme-app-card max-w-5xl max-h-[94vh] flex flex-col p-4 sm:p-6 custom-scrollbar font-sans border-2 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "border-b-2 border-current pb-3 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg sm:text-xl font-black flex items-center gap-2 uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estúdio de Mockups Publicitários da Capa Real" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs opacity-75 mt-0.5",
							children: [
								"Crie propagandas hiper-realistas para Stories e Feed referenciando ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sempre a revista real" }),
								" da sua edição, sem capas imaginárias."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold self-start sm:self-auto shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Capa Oficial Garantida" })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-8 h-11 rounded overflow-hidden border border-black shadow-xs shrink-0 bg-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: coverUrl,
								alt: "Capa Real",
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-black text-slate-900 dark:text-amber-300 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Capa Real da Edição Referenciada" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] opacity-75",
							children: "Edição Nº 01 • \"Por Que Mulheres Deveriam Levantar Peso\" • Montanha Magazine"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCoverUrl(coverUrl === "/real-cover.png" ? project.coverConfig?.backgroundImage || "/real-cover.png" : "/real-cover.png"),
						className: "text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer",
						children: "Alternar Versão"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b shrink-0 pt-1 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("official"),
						className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "official" ? "bg-amber-400 text-black shadow-xs" : "opacity-75 hover:opacity-100 theme-app-card"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cenários Oficiais da Capa Real (Recomendado)" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("custom"),
						className: `px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all flex items-center gap-1.5 cursor-pointer ${activeTab === "custom" ? "bg-amber-400 text-black shadow-xs" : "opacity-75 hover:opacity-100 theme-app-card"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Criar Novo Cenário com IA & Capa Real" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-12 gap-5 py-2 overflow-y-auto custom-scrollbar flex-1 min-h-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-5 space-y-4",
						children: activeTab === "official" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Escolha o Cenário Desejado:" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-2",
								children: officialScenes.map((scene) => {
									scene.icon;
									const isSelected = selectedScene.id === scene.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setSelectedScene(scene),
										className: `p-2.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${isSelected ? "border-amber-500 bg-amber-500/15 shadow-sm" : "theme-app-card-subtle hover:border-black/30"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-20 rounded-lg overflow-hidden border shrink-0 bg-black",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: scene.url,
												alt: scene.name,
												className: "w-full h-full object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-1 mb-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-xs truncate",
													children: scene.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] font-mono font-bold bg-amber-400 text-black px-1.5 py-0.2 rounded",
													children: scene.tag
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] opacity-75 leading-tight line-clamp-2",
												children: scene.description
											})]
										})]
									}, scene.id);
								})
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-black uppercase tracking-wider",
										children: "1. Formato de Saída"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setCustomFormat("stories"),
												className: `p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${customFormat === "stories" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card hover:opacity-80"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stories 9:16" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setCustomFormat("feed"),
												className: `p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${customFormat === "feed" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card hover:opacity-80"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Feed 1:1" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setCustomFormat("banner"),
												className: `p-2 rounded-lg border-2 text-xs font-bold flex flex-col items-center gap-1 cursor-pointer transition-all ${customFormat === "banner" ? "bg-amber-400 text-black border-black shadow-xs" : "theme-app-card hover:opacity-80"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paisagem 16:9" })]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-black uppercase tracking-wider flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2. Descreva o Ambiente com IA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] opacity-70 font-normal",
												children: "A capa real será aplicada"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: customPrompt,
											onChange: (e) => setCustomPrompt(e.target.value),
											rows: 2,
											placeholder: "Ex: Mesa de café na recepção da academia com iluminação de janela...",
											className: "text-xs rounded-lg border-2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: handleGenerateCustomScene,
											disabled: isGeneratingScene || !customPrompt.trim(),
											className: "w-full h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-sm border border-black flex items-center justify-center gap-1.5 cursor-pointer",
											children: isGeneratingScene ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerando Cenário & Renderizando Capa Real..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerar Fundo com IA & Aplicar Capa Real" })] })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl border theme-app-card-subtle space-y-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between text-xs font-black uppercase",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. Ajustes da Revista Real" })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-3 gap-1 text-[10px] font-bold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														setMagPose("table");
														setMagAngle(-6);
														setMagPosY(68);
													},
													className: `py-1 rounded border cursor-pointer ${magPose === "table" ? "bg-amber-400 text-black" : "theme-app-card"}`,
													children: "Deitada Mesa"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														setMagPose("stand");
														setMagAngle(4);
														setMagPosY(52);
													},
													className: `py-1 rounded border cursor-pointer ${magPose === "stand" ? "bg-amber-400 text-black" : "theme-app-card"}`,
													children: "Em Pé 3D"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														setMagPose("front");
														setMagAngle(0);
														setMagPosY(50);
													},
													className: `py-1 rounded border cursor-pointer ${magPose === "front" ? "bg-amber-400 text-black" : "theme-app-card"}`,
													children: "Frontal"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5 text-[11px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between font-semibold",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tamanho da Revista:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono",
														children: [magScale, "%"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: 60,
													max: 140,
													value: magScale,
													onChange: (e) => setMagScale(Number(e.target.value)),
													className: "w-full h-1 bg-zinc-300 rounded cursor-pointer accent-amber-500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between font-semibold pt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Posição Vertical:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono",
														children: [magPosY, "%"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: 30,
													max: 85,
													value: magPosY,
													onChange: (e) => setMagPosY(Number(e.target.value)),
													className: "w-full h-1 bg-zinc-300 rounded cursor-pointer accent-amber-500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between font-semibold pt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brilho Glossy do Papel:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-mono",
														children: [magGloss, "%"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "range",
													min: 0,
													max: 100,
													value: magGloss,
													onChange: (e) => setMagGloss(Number(e.target.value)),
													className: "w-full h-1 bg-zinc-300 rounded cursor-pointer accent-amber-500"
												})
											]
										})
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-7 flex flex-col items-center justify-center p-3 rounded-xl border-2 theme-app-card-subtle min-h-[400px]",
						children: activeTab === "official" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center w-full h-full gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-xl overflow-hidden border-2 border-black shadow-2xl bg-black max-h-[56vh] aspect-[9/16] flex items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedScene.url,
									alt: selectedScene.name,
									className: "w-full h-full object-contain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-2 left-2 bg-black/80 text-white font-mono text-[9px] px-2 py-0.5 rounded border border-white/20",
									children: "Capa Real da Montanha Magazine"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-center gap-2 pt-1 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => handleDownload(selectedScene.url, `montanha_${selectedScene.id}_stories_9x16.jpg`),
									className: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-10 px-5 border-2 border-black shadow-sm flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baixar Mockup em Alta Resolução (HD)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => handleCopyLink(selectedScene.url),
									className: "font-bold text-xs h-10 border theme-app-card flex items-center gap-1.5 cursor-pointer",
									children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Link Copiado!" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copiar Link" })] })
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center w-full h-full gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative rounded-xl overflow-hidden border-2 border-black shadow-2xl bg-black max-h-[56vh] flex items-center justify-center ${customFormat === "stories" ? "aspect-[9/16]" : customFormat === "feed" ? "aspect-square" : "aspect-video"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
										ref: canvasRef,
										className: "w-full h-full object-contain"
									}),
									isGeneratingScene && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 rounded-full border-4 border-amber-400 border-t-transparent animate-spin mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white text-xs font-black uppercase",
											children: "Gerando Novo Cenário e Compondo Capa Real..."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2 left-2 bg-black/80 text-white font-mono text-[9px] px-2 py-0.5 rounded border border-white/20",
										children: "Composição Real-Time (Capa Real)"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center justify-center gap-2 pt-1 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => handleDownload("", `montanha_custom_mockup_${customFormat}_${Date.now()}.jpg`),
									className: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-10 px-5 border-2 border-black shadow-sm flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baixar Mockup Renderizado (HD)" })]
								})
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t-2 border-current pt-3 flex items-center justify-between shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] opacity-75 font-medium hidden sm:inline",
						children: "🔒 100% Livre de Alucinações: Todos os mockups utilizam a foto real da atleta, tipografia e títulos oficiais da Montanha Magazine."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: onClose,
						className: "font-bold text-xs",
						children: "Fechar"
					})]
				})
			]
		})
	});
};
var CloudSyncDialog = ({ isOpen, onClose, project, onUpdateProject }) => {
	const [activeTab, setActiveTab] = (0, import_react.useState)("direct");
	const [syncCode, setSyncCode] = (0, import_react.useState)("MONTANHA");
	const [isSyncing, setIsSyncing] = (0, import_react.useState)(false);
	const [isPulling, setIsPulling] = (0, import_react.useState)(false);
	const [lastSyncedText, setLastSyncedText] = (0, import_react.useState)("Pronto para sincronizar");
	const [copiedLink, setCopiedLink] = (0, import_react.useState)(false);
	const [syncSuccessMessage, setSyncSuccessMessage] = (0, import_react.useState)(null);
	const [syncErrorMessage, setSyncErrorMessage] = (0, import_react.useState)(null);
	const [qrError, setQrError] = (0, import_react.useState)(false);
	const [driveStatus, setDriveStatus] = (0, import_react.useState)(() => getGoogleDriveStatus());
	const [isConnectingDrive, setIsConnectingDrive] = (0, import_react.useState)(false);
	const [isSyncingDrive, setIsSyncingDrive] = (0, import_react.useState)(false);
	const [isPullingDrive, setIsPullingDrive] = (0, import_react.useState)(false);
	const [driveMessage, setDriveMessage] = (0, import_react.useState)(null);
	const [driveError, setDriveError] = (0, import_react.useState)(null);
	const [customClientIdInput, setCustomClientIdInput] = (0, import_react.useState)(() => getGoogleClientId());
	const [isEditingClientId, setIsEditingClientId] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			const savedCode = localStorage.getItem("montanha_sync_code");
			if (savedCode) setSyncCode(savedCode.toUpperCase());
			setDriveStatus(getGoogleDriveStatus());
			setCustomClientIdInput(getGoogleClientId());
		}
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		const handleStatusChanged = () => {
			setDriveStatus(getGoogleDriveStatus());
			setCustomClientIdInput(getGoogleClientId());
		};
		window.addEventListener("montanha-gdrive-status-changed", handleStatusChanged);
		return () => window.removeEventListener("montanha-gdrive-status-changed", handleStatusChanged);
	}, []);
	const cleanCode = (syncCode || "MONTANHA").trim().toUpperCase();
	const shareUrl = typeof window !== "undefined" ? generateShareUrl(cleanCode) : "";
	const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(shareUrl)}&bgcolor=FFFFFF&color=000000&margin=2`;
	const handleSaveClientId = () => {
		const trimmed = customClientIdInput.trim();
		if (trimmed && (!trimmed.includes(".apps.googleusercontent.com") || trimmed.length < 25)) {
			setDriveError("Formato inválido. O ID do cliente Google precisa terminar com '.apps.googleusercontent.com' (ex: 123456789-abcdef.apps.googleusercontent.com).");
			return;
		}
		setGoogleClientId(trimmed);
		setDriveStatus(getGoogleDriveStatus());
		if (trimmed) {
			setDriveMessage("✓ Google Client ID salvo com sucesso! Agora você pode conectar com o Google Drive.");
			setDriveError(null);
			setIsEditingClientId(false);
		} else {
			setDriveMessage("Google Client ID removido.");
			setIsEditingClientId(false);
		}
	};
	const handleConnectDrive = async () => {
		setIsConnectingDrive(true);
		setDriveMessage(null);
		setDriveError(null);
		try {
			const res = await connectGoogleDrive();
			if (res.success) {
				setDriveMessage(`✓ Conectado ao Google Drive com sucesso (${res.email})! Pasta dedicada: "${DEDICATED_FOLDER_NAME}". Sincronizando acervo...`);
				if ((await syncProjectToGoogleDrive(project)).success) setDriveMessage(`✓ Conectado (${res.email}) e acervo salvo na pasta "${DEDICATED_FOLDER_NAME}" no seu Google Drive!`);
			} else setDriveError(res.error || "Falha ao conectar com o Google Drive.");
		} catch (err) {
			setDriveError(err?.message || "Erro inesperado ao autenticar com o Google.");
		} finally {
			setIsConnectingDrive(false);
			setDriveStatus(getGoogleDriveStatus());
		}
	};
	const handleDisconnectDrive = () => {
		if (window.confirm("Deseja desconectar sua conta do Google Drive deste dispositivo?")) {
			disconnectGoogleDrive();
			setDriveStatus(getGoogleDriveStatus());
			setDriveMessage("Google Drive desconectado deste navegador.");
		}
	};
	const handleSyncDriveNow = async () => {
		setIsSyncingDrive(true);
		setDriveMessage(null);
		setDriveError(null);
		try {
			const res = await syncProjectToGoogleDrive(project);
			if (res.success) {
				const timeStr = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR");
				setDriveMessage(`✓ Sincronizado com o Google Drive às ${timeStr}! Todos os ${project.contentRepository?.length || 0} textos do acervo e a revista estão salvos na pasta "${DEDICATED_FOLDER_NAME}".`);
			} else setDriveError(res.error || "Falha ao salvar no Google Drive.");
		} catch (err) {
			setDriveError(err?.message || "Erro ao sincronizar com o Drive.");
		} finally {
			setIsSyncingDrive(false);
			setDriveStatus(getGoogleDriveStatus());
		}
	};
	const handlePullFromDrive = async () => {
		setIsPullingDrive(true);
		setDriveMessage(null);
		setDriveError(null);
		try {
			const projRes = await fetchProjectFromGoogleDrive();
			let currentProj = project;
			let projUpdated = false;
			if (projRes.project && Array.isArray(projRes.project.articles)) {
				currentProj = projRes.project;
				projUpdated = true;
			}
			const textsRes = await pullNewTextsFromGoogleDrive(currentProj.contentRepository || []);
			let updatedDocsList = [...currentProj.contentRepository || []];
			if (textsRes.updatedDocs.length > 0) {
				const updateMap = new Map(textsRes.updatedDocs.map((d) => [d.id, d]));
				updatedDocsList = updatedDocsList.map((d) => updateMap.get(d.id) || d);
			}
			if (textsRes.newDocs.length > 0) updatedDocsList = [...textsRes.newDocs, ...updatedDocsList];
			if (textsRes.newDocs.length > 0 || textsRes.updatedDocs.length > 0 || projUpdated) {
				onUpdateProject({
					...currentProj,
					contentRepository: updatedDocsList,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				});
				setDriveMessage(`✓ Recuperado do Google Drive: ${textsRes.newDocs.length} novo(s) texto(s) adicionado(s), ${textsRes.updatedDocs.length} atualizado(s).${projUpdated ? " Edição mestre sincronizada." : ""}`);
			} else setDriveMessage(`✓ Pasta no Google Drive verificada: Todos os textos e o projeto já estão em dia.`);
		} catch (err) {
			setDriveError(err?.message || "Falha ao recuperar dados do Google Drive.");
		} finally {
			setIsPullingDrive(false);
			setDriveStatus(getGoogleDriveStatus());
		}
	};
	const handleManualPushToCloud = async () => {
		setIsSyncing(true);
		setSyncSuccessMessage(null);
		setSyncErrorMessage(null);
		try {
			const result = await syncProjectToCloud(project, cleanCode);
			if (result.success) {
				const timeStr = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR");
				setLastSyncedText(`Sincronizado às ${timeStr}`);
				setSyncSuccessMessage(`✓ Projeto enviado para a nuvem sob o código [${result.code}]! Agora você pode baixá-lo no outro dispositivo ou escanear o QR Code.`);
			} else setSyncErrorMessage(result.error || "Não foi possível enviar para a nuvem.");
		} catch (e) {
			setSyncErrorMessage("Erro no envio: " + (e?.message || e));
		} finally {
			setIsSyncing(false);
		}
	};
	const handlePullFromCloud = async () => {
		setIsPulling(true);
		setSyncSuccessMessage(null);
		setSyncErrorMessage(null);
		try {
			const result = await fetchProjectFromCloud(cleanCode);
			if (result && result.project) {
				onUpdateProject(result.project);
				const timeStr = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR");
				setLastSyncedText(`Atualizado da nuvem às ${timeStr}`);
				setSyncSuccessMessage(`✓ Edição [${result.code}] baixada da nuvem e aplicada com sucesso neste dispositivo!`);
			} else setSyncErrorMessage(`Nenhuma edição encontrada na nuvem com o código [${cleanCode}]. Certifique-se de clicar em 'Enviar' no dispositivo principal primeiro.`);
		} catch (e) {
			setSyncErrorMessage("Erro ao buscar da nuvem: " + (e?.message || e));
		} finally {
			setIsPulling(false);
		}
	};
	const handleCopyLink = () => {
		if (typeof navigator !== "undefined" && navigator.clipboard) {
			navigator.clipboard.writeText(shareUrl);
			setCopiedLink(true);
			setTimeout(() => setCopiedLink(false), 3e3);
		}
	};
	const handleExportBackup = () => {
		exportProjectToFile(project);
	};
	const handleImportFile = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			const imported = await importProjectFromFile(file);
			onUpdateProject(imported);
			await syncProjectToCloud(imported, cleanCode);
			alert("Backup importado e sincronizado com sucesso neste e em outros dispositivos!");
			onClose();
		} catch (err) {
			alert("Erro ao importar arquivo: " + err.message);
		} finally {
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "theme-app-card max-w-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b-2 border-current pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-black flex items-center gap-2 uppercase tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Central de Sincronização em Nuvem & Multi-Dispositivo" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Sincronize matérias, fotos e diagramação entre o notebook (Edge / Chrome) e o celular em tempo real."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex border-b-2 border-black/15 dark:border-white/15 gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("direct"),
						className: `flex-1 pb-2.5 pt-2 px-3 text-xs font-black uppercase tracking-tight flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${activeTab === "direct" ? "border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-t-lg" : "border-transparent opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-t-lg"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-amber-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nuvem Direta & Celular" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-black uppercase",
								children: "1-Clique / Instantâneo"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab("gdrive"),
						className: `flex-1 pb-2.5 pt-2 px-3 text-xs font-black uppercase tracking-tight flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${activeTab === "gdrive" ? "border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-t-lg" : "border-transparent opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-t-lg"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderSync, { className: "w-4 h-4 text-amber-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google Drive" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold uppercase",
								children: driveStatus.isConnected ? "Conectado" : "Avançado"
							})
						]
					})]
				}),
				syncSuccessMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 rounded-lg bg-emerald-500/10 border-2 border-emerald-500/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-snug",
						children: syncSuccessMessage
					})]
				}),
				syncErrorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 rounded-lg bg-red-500/10 border-2 border-red-500/50 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-snug",
						children: syncErrorMessage
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 my-2",
					children: [activeTab === "direct" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-amber-900 dark:text-amber-200 leading-snug",
									children: "Sincronização 100% Autônoma e Sem Configuração"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "opacity-80 text-[11px] leading-snug",
									children: [
										"Funciona instantaneamente no Edge, Chrome, iPhone e Android. Aponte a câmera para o QR Code abaixo para carregar esta edição completa no celular, ou use o botão ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Enviar" }),
										" e ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Puxar" }),
										" entre navegadores no computador."
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "theme-app-card p-4 rounded-xl border-2 space-y-3 shadow-sm bg-amber-400/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-black text-xs uppercase tracking-tight",
										children: "1. Abrir Exatamente Esta Edição no Celular (QR Code)"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
									children: "INSTANTÂNEO NO CELULAR"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 rounded-lg bg-white border-2 border-black shrink-0 shadow-sm flex items-center justify-center min-w-[136px] min-h-[136px]",
									children: !qrError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: qrCodeApiUrl,
										alt: "QR Code de Sincronização",
										onError: () => setQrError(true),
										className: "w-32 h-32 object-contain"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-32 h-32 flex flex-col items-center justify-center p-2 text-center text-[10px] font-mono font-bold text-black border border-dashed border-black",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CÓDIGO:" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black text-amber-600 my-1",
												children: cleanCode
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] opacity-75",
												children: "Acesse o site e use 'Puxar da Nuvem'"
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 text-xs flex-1 text-center sm:text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold opacity-90 leading-snug",
											children: "Abra a câmera do seu celular e aponte para este QR Code. A edição completa do seu computador carregará imediatamente no seu telefone!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] opacity-75 leading-snug",
											children: "Transfere todos os artigos, capas personalizadas, fotos e configurações com 1 clique."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col sm:flex-row gap-2 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: shareUrl,
												readOnly: true,
												className: "theme-app-input font-mono text-[10px] h-8 border-2 truncate"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-1.5 shrink-0 justify-center sm:justify-start",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													onClick: handleCopyLink,
													className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer flex items-center gap-1",
													children: [copiedLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-black" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copiedLink ? "Link Copiado!" : "Copiar Link" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => window.open(shareUrl, "_blank"),
													className: "h-8 text-xs font-bold border-2 shrink-0 cursor-pointer flex items-center gap-1",
													title: "Abrir em Nova Aba",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-amber-500" })
												})]
											})]
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-black text-xs uppercase tracking-tight",
											children: "2. Sincronização entre Dispositivos (Edge ⇄ Chrome ⇄ Celular)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400",
										children: lastSyncedText
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-black/10 dark:bg-white/5 border border-current",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-xs font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Código da Edição na Nuvem:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: syncCode,
											onChange: (e) => setSyncCode(e.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g, "")),
											placeholder: "Ex: MONTANHA",
											className: "theme-app-input font-mono font-black text-xs h-7 w-32 text-center uppercase tracking-wider border-2"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] opacity-70 font-mono",
											children: "Use o mesmo código nos dois aparelhos"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										"data-testid": "btn-cloud-push",
										onClick: handleManualPushToCloud,
										disabled: isSyncing,
										className: "h-10 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 transition-all",
										children: [isSyncing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enviar Esta Versão para a Nuvem (Upload)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										"data-testid": "btn-cloud-pull",
										onClick: handlePullFromCloud,
										disabled: isPulling,
										variant: "outline",
										className: "h-10 font-black text-xs border-2 border-current shadow-xs cursor-pointer flex items-center justify-center gap-1.5 hover:bg-amber-400/20 active:scale-95 transition-all",
										children: [isPulling ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin text-amber-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudDownload, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Puxar Versão da Nuvem (Download)" })]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-3.5 rounded-xl border-2 flex flex-col justify-between space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-black text-xs uppercase mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "3. Baixar Arquivo de Backup" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] opacity-75 leading-snug",
									children: [
										"Gere um arquivo ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".json" }),
										" completo com todos os textos e fotos para guardar onde preferir."
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleExportBackup,
									className: "w-full h-8 bg-white hover:bg-amber-50 text-black font-bold text-xs border-2 border-black cursor-pointer shadow-xs flex items-center justify-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salvar Arquivo .JSON" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-3.5 rounded-xl border-2 flex flex-col justify-between space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-black text-xs uppercase mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4. Restaurar / Importar Backup" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] opacity-75 leading-snug",
									children: [
										"Selecione um arquivo ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".json" }),
										" salvo para substituir e atualizar o projeto neste dispositivo instantaneamente."
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									accept: ".json,application/json",
									onChange: handleImportFile,
									className: "hidden"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => fileInputRef.current?.click(),
									className: "w-full h-8 bg-white hover:bg-amber-50 text-black font-bold text-xs border-2 border-black cursor-pointer shadow-xs flex items-center justify-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Carregar Arquivo .JSON" })]
								})] })]
							})]
						})
					] }), activeTab === "gdrive" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							driveMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-snug",
									children: driveMessage
								})]
							}),
							driveError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-2.5 rounded-lg bg-red-500/10 border border-red-500/40 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-snug",
									children: driveError
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card p-4 rounded-xl border-2 space-y-3 shadow-md bg-amber-500/5 border-amber-500/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-7 h-7 rounded-lg bg-amber-400 text-black flex items-center justify-center font-black border border-black shadow-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderSync, { className: "w-4 h-4 text-black" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-black text-xs uppercase tracking-tight",
											children: "Google Drive — Pasta Dedicada Pessoal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] opacity-75",
											children: ["Pasta: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-amber-500 font-mono",
												children: ["📁 ", "Montanha Magazine - Acervo & Artigos"]
											})]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: driveStatus.isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 font-mono text-[9px] font-black px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500 uppercase shadow-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
												"CONECTADO (",
												driveStatus.email || "OK",
												")"
											]
										}) : driveStatus.isConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
											children: "CLIENT ID PRONTO"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-400 uppercase",
											children: "REQUER CLIENT ID OAUTH"
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "opacity-90 leading-snug",
										children: [
											"Salva automaticamente matérias e artigos em formato Markdown (",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
												className: "font-mono bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-[11px]",
												children: "[Acervo] Titulo.md"
											}),
											") dentro da pasta ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Montanha Magazine - Acervo & Artigos" }),
											" no seu Google Drive pessoal."
										]
									}), driveStatus.isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3 pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													onClick: handleSyncDriveNow,
													disabled: isSyncingDrive,
													className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer flex items-center gap-1.5 shadow-xs",
													children: [isSyncingDrive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salvar / Sincronizar no Drive" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: handlePullFromDrive,
													disabled: isPullingDrive,
													className: "h-8 font-black text-xs border-2 shrink-0 cursor-pointer flex items-center gap-1.5 hover:bg-amber-400/20",
													children: [isPullingDrive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 animate-spin text-amber-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudDownload, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Puxar Textos do Drive" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => window.open(getGoogleDriveFolderUrl(driveStatus.folderId), "_blank"),
													className: "h-8 text-xs font-bold border-2 shrink-0 cursor-pointer flex items-center gap-1",
													title: "Abrir pasta no Google Drive",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-3.5 h-3.5 text-amber-500" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Abrir no Drive" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3 opacity-60" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "ghost",
													onClick: handleDisconnectDrive,
													className: "h-8 text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-500/10 cursor-pointer flex items-center gap-1 ml-auto",
													title: "Desconectar conta Google",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desconectar" })]
												})
											]
										})
									}) : driveStatus.isConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 flex flex-col sm:flex-row sm:items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: handleConnectDrive,
											disabled: isConnectingDrive,
											className: "h-9 bg-black hover:bg-zinc-900 text-amber-400 font-black text-xs border-2 border-black shadow-sm cursor-pointer flex items-center gap-2",
											children: [isConnectingDrive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "w-4 h-4 shrink-0",
												viewBox: "0 0 24 24",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														fill: "#4285F4",
														d: "M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														fill: "#34A853",
														d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														fill: "#FBBC05",
														d: "M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														fill: "#EA4335",
														d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Autorizar e Conectar com Google Drive" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIsEditingClientId(!isEditingClientId),
											className: "text-[11px] opacity-75 hover:opacity-100 underline flex items-center gap-1 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerenciar Google Client ID" })]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-current/20 space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Como funciona a integração com o Google Drive:" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] opacity-80 leading-snug",
												children: [
													"Por políticas de segurança da Google, para um site gravar arquivos diretamente na sua pasta pessoal sem intermediários, é necessário fornecer uma chave de cliente (OAuth 2.0 Client ID) registrada no Google Cloud Console com o endereço ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "https://montanhamagazine.lovable.app" }),
													" autorizado."
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-lg bg-amber-400/20 border-2 border-amber-500 space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-black text-black dark:text-amber-300 uppercase",
														children: "⚡ Quer sincronizar agora sem configurar nada?"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-black text-amber-400 uppercase",
														children: "Zero Chaves"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[11px] opacity-85 leading-snug text-black dark:text-zinc-200",
													children: [
														"A ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sincronização Direta em Nuvem" }),
														" da aba ao lado já transfere tudo entre seu notebook e seu celular via QR Code ou Código sem precisar de nenhuma conta ou chave do Google Cloud!"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													onClick: () => setActiveTab("direct"),
													className: "h-8 bg-black hover:bg-zinc-900 text-amber-400 font-bold text-xs border border-black cursor-pointer shadow-xs flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ir para Sincronização Direta em 1-Clique" })]
												})
											]
										})]
									})]
								})]
							}),
							(!driveStatus.isConfigured || isEditingClientId) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs font-black uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Configurar Google OAuth 2.0 Client ID" })]
										}), isEditingClientId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setIsEditingClientId(false),
											className: "text-[11px] opacity-60 hover:opacity-100 cursor-pointer",
											children: "Fechar"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] opacity-80 leading-snug",
										children: [
											"Insira seu ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Client ID" }),
											" gerado no Google Cloud Console para o aplicativo da web."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: customClientIdInput,
											onChange: (e) => setCustomClientIdInput(e.target.value),
											placeholder: "Ex: 123456789-abcdefghijk.apps.googleusercontent.com",
											className: "theme-app-input font-mono text-[11px] h-9 border-2 flex-1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: handleSaveClientId,
											className: "h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer",
											children: "Salvar Chave"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
										className: "text-[11px] opacity-80 bg-black/5 dark:bg-white/5 p-2.5 rounded-lg border border-current/10 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
											className: "font-bold flex items-center gap-1 text-amber-600 dark:text-amber-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Passo a passo para gerar seu Google Client ID gratuito" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
											className: "list-decimal pl-5 space-y-1 mt-2 text-[10.5px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
													"Acesse o",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: "https://console.cloud.google.com/apis/credentials",
														target: "_blank",
														rel: "noreferrer",
														className: "underline font-bold text-amber-600",
														children: "Google Cloud Console (Credenciais)"
													}),
													"."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
													"Clique em ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "+ Criar Credenciais > ID do cliente OAuth" }),
													"."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
													"Tipo de aplicativo: ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Aplicativo da Web" }),
													"."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
													"Em ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Origens JavaScript autorizadas" }),
													", adicione:",
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
														className: "list-disc pl-4 font-mono text-[10px] mt-0.5 opacity-90",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "https://montanhamagazine.lovable.app" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "http://localhost:8080" }) })]
													})
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
													"Em ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "APIs e Serviços > Biblioteca" }),
													", ative a ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Google Drive API" }),
													"."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Copie o ID do cliente criado e cole no campo acima." })
											]
										})]
									})
								]
							})
						]
					})]
				})
			]
		})
	});
};
var Stepper = ({ steps, activeStep, onStepClick, className }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full select-none font-sans", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between relative",
			children: steps.map((step, index) => {
				const isCompleted = index < activeStep;
				const isActive = index === activeStep;
				const isClickable = onStepClick !== void 0 && (isCompleted || index <= activeStep + 1);
				const StepIcon = step.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => isClickable && onStepClick?.(index),
					className: cn("flex flex-col items-center group relative z-10 transition-all duration-200", isClickable ? "cursor-pointer" : "cursor-default"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all duration-200 border-2", isCompleted && "bg-amber-400 text-black border-amber-500 shadow-xs group-hover:bg-amber-500", isActive && "bg-zinc-950 text-amber-400 border-amber-400 ring-4 ring-amber-400/20 shadow-md scale-105", !isCompleted && !isActive && "bg-zinc-900/60 text-zinc-500 border-zinc-700 group-hover:border-zinc-500"),
						children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 stroke-[3]" }) : StepIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index + 1 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-center max-w-[90px] sm:max-w-[120px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("text-[11px] font-black uppercase tracking-wider leading-tight truncate transition-colors", isActive && "text-amber-400 font-extrabold", isCompleted && "text-zinc-200", !isCompleted && !isActive && "text-zinc-500"),
							children: step.title
						}), step.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden sm:block text-[9px] text-zinc-400 opacity-70 truncate mt-0.5",
							children: step.description
						})]
					})]
				}), index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 mx-2 sm:mx-4 h-0.5 relative -top-3.5 bg-zinc-800 rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-amber-400 transition-all duration-300 rounded",
						style: { width: isCompleted ? "100%" : isActive ? "50%" : "0%" }
					})
				})] }, step.id);
			})
		})
	});
};
var AiApprovalModal = ({ isOpen, onClose, analysis, sourceDoc, onApprove, onOpenAdvancedEditor }) => {
	if (!analysis) return null;
	const initialTitle = sourceDoc?.title?.trim() ? sourceDoc.title.trim().toUpperCase() : analysis.title;
	const initialCategory = sourceDoc?.category?.trim() ? sourceDoc.category.trim().toUpperCase() : analysis.category;
	const [title, setTitle] = (0, import_react.useState)(initialTitle);
	const [subtitle, setSubtitle] = (0, import_react.useState)(analysis.subtitle);
	const [category, setCategory] = (0, import_react.useState)(initialCategory);
	const [author, setAuthor] = (0, import_react.useState)(analysis.author);
	const [authorBio, setAuthorBio] = (0, import_react.useState)(analysis.authorBio);
	const [pageSpan, setPageSpan] = (0, import_react.useState)(analysis.recommendedPageSpan || 1);
	const [layoutTemplate, setLayoutTemplate] = (0, import_react.useState)(analysis.recommendedTemplate);
	const [heroImage, setHeroImage] = (0, import_react.useState)(analysis.suggestedHeroImage);
	const [secondaryImage, setSecondaryImage] = (0, import_react.useState)(analysis.suggestedSecondaryImage || "");
	const [formattedContent, setFormattedContent] = (0, import_react.useState)(analysis.formattedContent);
	const [pullQuotes, setPullQuotes] = (0, import_react.useState)(analysis.pullQuotes);
	const [keyTakeaways, setKeyTakeaways] = (0, import_react.useState)(analysis.keyTakeaways);
	const [currentStep, setCurrentStep] = (0, import_react.useState)(0);
	const steps = [
		{
			id: "template",
			title: "Enquadramento",
			description: "Páginas & Formato",
			icon: Layers
		},
		{
			id: "headlines",
			title: "Manchetes",
			description: "Título & Autoria",
			icon: FileText
		},
		{
			id: "visuals",
			title: "Visual & Fotos",
			description: "Imagens & Citações",
			icon: WandSparkles
		},
		{
			id: "review",
			title: "Revisão",
			description: "Texto & Aprovação",
			icon: CircleCheck
		}
	];
	import_react.useEffect(() => {
		if (analysis) {
			setCurrentStep(0);
			const resolvedTitle = sourceDoc?.title?.trim() ? sourceDoc.title.trim().toUpperCase() : analysis.title;
			const resolvedCategory = sourceDoc?.category?.trim() ? sourceDoc.category.trim().toUpperCase() : analysis.category;
			setTitle(resolvedTitle);
			setSubtitle(analysis.subtitle);
			setCategory(resolvedCategory);
			setAuthor(analysis.author);
			setAuthorBio(analysis.authorBio);
			setPageSpan(analysis.recommendedPageSpan);
			setLayoutTemplate(analysis.recommendedTemplate);
			setHeroImage(analysis.suggestedHeroImage);
			setSecondaryImage(analysis.suggestedSecondaryImage || "");
			setFormattedContent(analysis.formattedContent);
			setPullQuotes(analysis.pullQuotes);
			setKeyTakeaways(analysis.keyTakeaways);
		}
	}, [analysis, sourceDoc]);
	const handleCreateArticle = () => {
		return {
			id: "art-" + Date.now(),
			title,
			subtitle,
			category,
			author,
			authorBio,
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage,
			heroImageCaption: "Registro editorial de alta performance // Montanha Media",
			heroImagePrompt: analysis.heroImagePrompt,
			secondaryImage: pageSpan === 2 ? secondaryImage : "",
			secondaryImageCaption: pageSpan === 2 ? "Detalhes técnicos do protocolo" : "",
			pageSpan,
			quotePlacement: "end",
			textDensity: "normal",
			content: formattedContent,
			pullQuotes,
			keyTakeaways,
			layoutTemplate,
			tags: [category, "Alta Performance"],
			estimatedReadTime: analysis.estimatedReadTime || 4,
			featuredOnCover: true,
			enabled: true
		};
	};
	const handleConfirmApproval = () => {
		onApprove(handleCreateArticle(), sourceDoc?.id);
		onClose();
	};
	const handleEditFurther = () => {
		onOpenAdvancedEditor(handleCreateArticle());
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "theme-app-card max-w-4xl max-h-[92vh] overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b-2 border-current pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-black flex items-center gap-2 uppercase tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pedido de Aprovação da Diagramação por IA" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
							children: "DIAGNÓSTICO EDITORIAL"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "A IA avaliou o volume, tom e densidade do seu texto e propõe a estrutura abaixo para publicação no PDF."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-2 px-1 border-b border-zinc-800/80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
						steps,
						activeStep: currentStep,
						onStepClick: (stepIndex) => setCurrentStep(stepIndex)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 my-2 min-h-[300px]",
					children: [
						currentStep === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3.5 rounded-xl border-2 border-amber-500/40 bg-amber-500/10 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-black uppercase text-amber-700 dark:text-amber-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-4 h-4 text-amber-600 dark:text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Diagnóstico & Parecer de Enquadramento:" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[10px] font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "bg-white/80 dark:bg-zinc-800 px-2 py-0.5 rounded border border-black/20 text-black dark:text-white",
											children: [analysis.wordCount, " PALAVRAS"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "bg-white/80 dark:bg-zinc-800 px-2 py-0.5 rounded border border-black/20 text-black dark:text-white",
											children: [analysis.estimatedReadTime, " MIN DE LEITURA"]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold leading-snug opacity-90",
									children: analysis.rationale
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "font-black text-xs uppercase tracking-tight flex items-center gap-1.5 text-amber-600 dark:text-amber-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquadramento de Páginas & Template Editorial" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-bold",
										children: "EXTENSÃO DO ARTIGO NA REVISTA"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: pageSpan,
										onChange: (e) => setPageSpan(parseInt(e.target.value) || 1),
										className: "w-full theme-app-input text-xs font-black mt-1 border-2 p-2 rounded cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 1,
												children: "1 Página A4 (Compacto / Padrão)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 2,
												children: "2 Páginas A4 (Página Dupla Especial)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 3,
												children: "3 Páginas A4 (Matéria Aprofundada)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 4,
												children: "4 Páginas A4 (Dossiê Especial / Reportagem Completa)"
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-bold",
										children: "TEMPLATE DE DIAGRAMAÇÃO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: layoutTemplate,
										onChange: (e) => setLayoutTemplate(e.target.value),
										className: "w-full theme-app-input text-xs font-bold mt-1 border-2 p-2 rounded cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "editorial-lead",
												children: "Standard Feature (Colunas Fluidas + Drop Cap)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "workout-protocol",
												children: "Workout Protocol (Clusters A1/A2 + QR Code)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "product-ad",
												children: "Product Promotion (Anúncio Full + Cupom)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "facility-spotlight",
												children: "Facility Spotlight (Fotos + Spec Sheet)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "two-column-quote",
												children: "2 Colunas Clássicas com Citação Central"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "infographic-tips",
												children: "Infográfico Prático com Dicas"
											})
										]
									})] })]
								})]
							})]
						}),
						currentStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "font-black text-xs uppercase tracking-tight flex items-center gap-1.5 text-amber-600 dark:text-amber-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Manchete, Subtítulo & Categoria da Edição" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold",
												children: "MANCHETE PRINCIPAL (H1)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: title,
												onChange: (e) => setTitle(e.target.value.toUpperCase()),
												className: "theme-app-input font-black text-xs mt-1 border-2"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-bold",
											children: "CATEGORIA"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: category,
											onChange: (e) => setCategory(e.target.value.toUpperCase()),
											className: "theme-app-input font-mono font-bold text-xs mt-1 border-2 text-amber-600 dark:text-amber-400"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-bold",
										children: "SUBTÍTULO / DECK EDITORIAL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: subtitle,
										onChange: (e) => setSubtitle(e.target.value),
										className: "theme-app-input text-xs mt-1 border-2 font-medium"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-bold",
											children: "AUTOR DA MATÉRIA"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: author,
											onChange: (e) => setAuthor(e.target.value),
											className: "theme-app-input text-xs mt-1 border-2 font-bold"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-bold",
											children: "BIO / CREDENCIAL"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: authorBio,
											onChange: (e) => setAuthorBio(e.target.value),
											className: "theme-app-input text-xs mt-1 border-2"
										})] })]
									})
								]
							})
						}),
						currentStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
										label: "Foto Principal de Abertura (Hero)",
										value: heroImage,
										onChange: (url) => setHeroImage(url),
										aspectRatio: "landscape",
										placeholderPrompt: analysis.heroImagePrompt,
										helperText: "Upload ou IA"
									})
								}), pageSpan > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
										label: "Foto Secundária (Página 2)",
										value: secondaryImage,
										onChange: (url) => setSecondaryImage(url),
										aspectRatio: "landscape",
										placeholderPrompt: analysis.secondaryImagePrompt || "Athletic training details...",
										helperText: "Exibida na 2ª página"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "theme-app-card-subtle p-3.5 rounded-xl border-2 flex flex-col justify-center items-center text-center opacity-70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase text-zinc-400",
										children: "Foto Secundária Opcional"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-zinc-500 mt-1 max-w-xs",
										children: "Este artigo está configurado para 1 página. Ao aumentar para 2 páginas no Passo 1, uma foto secundária de página inteira é ativada."
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-black uppercase flex items-center gap-1 text-amber-600 dark:text-amber-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Citação de Impacto (Pull Quote)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: pullQuotes[0] || "",
										onChange: (e) => setPullQuotes([e.target.value, ...pullQuotes.slice(1)]),
										className: "theme-app-input text-xs h-20 italic font-bold border-2",
										placeholder: "Frase célebre de impacto posicionada ao final do artigo..."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-black uppercase flex items-center gap-1 text-amber-600 dark:text-amber-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pontos-Chave & Conclusões" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										value: keyTakeaways.join("\n"),
										onChange: (e) => setKeyTakeaways(e.target.value.split("\n").map((s) => s.trim()).filter(Boolean)),
										className: "theme-app-input text-xs h-20 font-mono border-2",
										placeholder: "1 ponto chave por linha..."
									})]
								})]
							})]
						}),
						currentStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 animate-in fade-in-50 duration-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-lg border-2 border-amber-500/40 bg-amber-500/10 flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
										children: category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase truncate max-w-xs",
										children: title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[10px] opacity-80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [pageSpan, " Pág(s)"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: layoutTemplate }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Por ", author] })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card-subtle p-4 rounded-xl border-2 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-black uppercase flex items-center gap-1.5 text-amber-600 dark:text-amber-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Texto Formatado pela IA (Destaques & Parágrafos)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono opacity-75",
										children: "Você pode editar livremente antes de aprovar"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: formattedContent,
									onChange: (e) => setFormattedContent(e.target.value),
									className: "theme-app-input text-xs h-48 font-sans leading-relaxed border-2",
									placeholder: "Conteúdo do artigo..."
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2 w-full sm:w-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: handleEditFurther,
							className: "h-9 font-bold text-xs border-2 flex items-center gap-1 cursor-pointer w-full sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajustar no Editor Avançado" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 w-full sm:w-auto justify-end",
						children: [
							currentStep > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => setCurrentStep((prev) => Math.max(0, prev - 1)),
								className: "h-9 font-bold text-xs border-2 flex items-center gap-1 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voltar" })]
							}),
							currentStep < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1)),
								className: "h-9 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-black text-xs px-4 border-2 border-amber-400 cursor-pointer flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Próximo Passo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleConfirmApproval,
								className: "h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs px-5 border-2 border-black shadow-md cursor-pointer flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✓ Aprovar & Inserir na Revista" })]
							})
						]
					})]
				})
			]
		})
	});
};
function formatFileSize(bytes) {
	if (bytes === 0) return "0 Bytes";
	const k = 1024;
	const sizes = [
		"Bytes",
		"KB",
		"MB",
		"GB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
var FileUpload = ({ accept, maxSizeMB = 50, multiple = false, onFilesSelected, selectedFiles = [], onRemoveFile, title = "Arraste e solte seus arquivos aqui", description = "Ou clique para selecionar arquivos do seu dispositivo.", tags = [], className, inputTestId = "file-upload-input", disabled = false }) => {
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const validateAndHandleFiles = (files) => {
		setErrorMessage(null);
		const validFiles = [];
		const maxSizeBytes = maxSizeMB * 1024 * 1024;
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (file.size > maxSizeBytes) {
				setErrorMessage(`O arquivo "${file.name}" ultrapassa o limite de ${maxSizeMB}MB.`);
				continue;
			}
			if (accept) {
				const acceptList = accept.split(",").map((a) => a.trim().toLowerCase());
				const ext = "." + file.name.split(".").pop()?.toLowerCase();
				const matchesExt = acceptList.includes(ext);
				const matchesMime = acceptList.some((a) => {
					if (a.endsWith("/*")) {
						const typePrefix = a.replace("/*", "");
						return file.type.startsWith(typePrefix);
					}
					return file.type.toLowerCase() === a;
				});
				if (!matchesExt && !matchesMime) {
					setErrorMessage(`Arquivo "${file.name}" não é um tipo aceito (${accept}).`);
					continue;
				}
			}
			validFiles.push(file);
			if (!multiple) break;
		}
		if (validFiles.length > 0) onFilesSelected(validFiles);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		if (disabled) return;
		setIsDragging(true);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDragging(false);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		if (disabled) return;
		setIsDragging(false);
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) validateAndHandleFiles(e.dataTransfer.files);
	};
	const handleInputChange = (e) => {
		if (e.target.files && e.target.files.length > 0) validateAndHandleFiles(e.target.files);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full space-y-3 font-sans", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: () => !disabled && fileInputRef.current?.click(),
				onDragOver: handleDragOver,
				onDragLeave: handleDragLeave,
				onDrop: handleDrop,
				className: cn("relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-3.5 group select-none", isDragging ? "border-amber-400 bg-amber-400/10 scale-[1.005] shadow-lg" : "border-zinc-700 hover:border-amber-400/70 bg-zinc-900/40 hover:bg-zinc-900/70", disabled && "opacity-50 cursor-not-allowed pointer-events-none"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileInputRef,
						type: "file",
						accept,
						multiple,
						"data-testid": inputTestId,
						className: "hidden",
						onChange: handleInputChange,
						disabled
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 border", isDragging ? "bg-amber-400 text-black border-amber-500 scale-110" : "bg-zinc-800/80 group-hover:bg-amber-400/10 text-zinc-400 group-hover:text-amber-400 border-zinc-700 group-hover:border-amber-400/40"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: cn("w-7 h-7 transition-transform group-hover:-translate-y-0.5", isDragging && "animate-bounce") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-black text-zinc-100 uppercase tracking-wider group-hover:text-amber-300 transition-colors",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-zinc-400 max-w-md mx-auto leading-relaxed",
							children: description
						})]
					}),
					tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-1.5 pt-1",
						children: tags.map((tag, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-400 border border-zinc-700/80",
							children: tag
						}, idx))
					})
				]
			}),
			errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
			}),
			selectedFiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Arquivos Selecionados (",
						selectedFiles.length,
						")"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-amber-400",
						children: "Pronto para processamento"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-2",
					children: selectedFiles.map((file, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-8 h-8 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-zinc-200 truncate",
									children: file.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono text-zinc-400",
									children: formatFileSize(file.size)
								})]
							})]
						}), onRemoveFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: (e) => {
								e.stopPropagation();
								onRemoveFile(idx);
							},
							className: "p-1 rounded text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer",
							title: "Remover arquivo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
						})]
					}, `${file.name}-${idx}`))
				})]
			})
		]
	});
};
/**
* Carrega dinamicamente o PDF.js de forma 100% segura para SSR e navegadores
*/
async function getPdfJs() {
	const pdfjs = await import("../_libs/pdfjs-dist.mjs").then((n) => n.t);
	if (typeof window !== "undefined") {
		if (!pdfjs.GlobalWorkerOptions.workerSrc) pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";
	}
	return pdfjs;
}
/**
* Extrai texto, posições geométricas e fontes do arquivo PDF
*/
async function extractPdfContent(data) {
	const pdf = await (await getPdfJs()).getDocument({
		data: new Uint8Array(data),
		useWorkerFetch: false,
		isEvalSupported: false
	}).promise;
	const numPages = pdf.numPages;
	const pages = [];
	for (let pageNum = 1; pageNum <= numPages; pageNum++) {
		const page = await pdf.getPage(pageNum);
		const viewport = page.getViewport({ scale: 1 });
		const textContent = await page.getTextContent();
		const items = [];
		for (const item of textContent.items) {
			if (!item.str || item.str.trim() === "") continue;
			const tx = item.transform;
			const fontSize = Math.abs(tx[3] || tx[0] || 12);
			const x = tx[4] || 0;
			const y = tx[5] || 0;
			items.push({
				text: item.str,
				fontSize,
				fontName: item.fontName || "",
				x,
				y,
				width: item.width || 0,
				height: item.height || fontSize
			});
		}
		items.sort((a, b) => {
			if (Math.abs(a.y - b.y) > 3) return b.y - a.y;
			return a.x - b.x;
		});
		const fontSizes = items.map((i) => i.fontSize).sort((a, b) => a - b);
		const medianFontSize = fontSizes.length > 0 ? fontSizes[Math.floor(fontSizes.length / 2)] : 12;
		const filteredItems = items.filter((item) => {
			const isTopMargin = item.y > viewport.height - 38;
			const isBottomMargin = item.y < 38;
			if (isTopMargin || isBottomMargin) {
				if (/^\s*(página|pág\.?|page)?\s*\d+\s*(de\s*\d+|\/\s*\d+)?\s*$/i.test(item.text)) return false;
			}
			return true;
		});
		const lines = [];
		let currentLineText = "";
		let currentLineY = -999;
		let currentLineFontSize = medianFontSize;
		for (const item of filteredItems) if (Math.abs(item.y - currentLineY) > 3.5) {
			if (currentLineText.trim()) {
				const isHeading = currentLineFontSize >= medianFontSize * 1.28 || currentLineFontSize >= medianFontSize * 1.15 && currentLineText.length < 70 && currentLineText === currentLineText.toUpperCase();
				lines.push({
					text: currentLineText.trim(),
					fontSize: currentLineFontSize,
					isHeading,
					y: currentLineY
				});
			}
			currentLineText = item.text;
			currentLineY = item.y;
			currentLineFontSize = item.fontSize;
		} else {
			currentLineText += (currentLineText.endsWith(" ") || item.text.startsWith(" ") ? "" : " ") + item.text;
			if (item.fontSize > currentLineFontSize) currentLineFontSize = item.fontSize;
		}
		if (currentLineText.trim()) {
			const isHeading = currentLineFontSize >= medianFontSize * 1.28;
			lines.push({
				text: currentLineText.trim(),
				fontSize: currentLineFontSize,
				isHeading,
				y: currentLineY
			});
		}
		const markdownParagraphs = [];
		const headings = [];
		let currentParagraph = "";
		for (const line of lines) if (line.isHeading) {
			if (currentParagraph.trim()) {
				markdownParagraphs.push(currentParagraph.trim());
				currentParagraph = "";
			}
			headings.push(line.text);
			if (line.fontSize >= medianFontSize * 1.6) markdownParagraphs.push(`## ${line.text}`);
			else markdownParagraphs.push(`### ${line.text}`);
		} else if (/^([•\-\*]|\d+[\.\)])\s+/.test(line.text)) {
			if (currentParagraph.trim()) {
				markdownParagraphs.push(currentParagraph.trim());
				currentParagraph = "";
			}
			markdownParagraphs.push(line.text);
		} else if (currentParagraph.endsWith("-")) currentParagraph = currentParagraph.slice(0, -1) + line.text;
		else currentParagraph += (currentParagraph ? " " : "") + line.text;
		if (currentParagraph.trim()) markdownParagraphs.push(currentParagraph.trim());
		const pageMarkdown = markdownParagraphs.join("\n\n");
		const rawPageText = lines.map((l) => l.text).join("\n");
		pages.push({
			pageNumber: pageNum,
			text: rawPageText,
			markdown: pageMarkdown,
			headings,
			items,
			pageHeight: viewport.height,
			pageWidth: viewport.width
		});
	}
	return pages;
}
/**
* Classifica a estrutura do documento PDF e indica a rota ótima de conversão
*/
function classifyPdfDocument(pages, fileName, fileSizeBytes) {
	const totalPages = pages.length;
	const allText = pages.map((p) => p.text).join(" ");
	const totalWords = countWords(allText);
	const avgWordsPerPage = totalPages > 0 ? totalWords / totalPages : 0;
	const allHeadings = pages.flatMap((p) => p.headings);
	let classification = "general-notes";
	let classificationLabel = "Documento Geral / Artigo Editorial";
	let recommendedRoute = "smart-articles";
	const lowerText = allText.toLowerCase();
	if (lowerText.includes("série") || lowerText.includes("reps") || lowerText.includes("aquecimento") || lowerText.includes("treino") || lowerText.includes("exercício") || lowerText.includes("workout")) {
		classification = "workout-protocol";
		classificationLabel = "Ficha de Treino / Protocolo Físico";
		recommendedRoute = "smart-articles";
	} else if (avgWordsPerPage < 110 && totalPages >= 3) {
		classification = "presentation-slides";
		classificationLabel = "Apresentação / Lâminas de Slides";
		recommendedRoute = "page-by-page";
	} else if (totalPages <= 3 && allHeadings.length <= 3) {
		classification = "single-article";
		classificationLabel = "Artigo Único / Matéria Especial";
		recommendedRoute = "continuous-lead";
	} else if (totalPages >= 3 && allHeadings.length >= 2) {
		classification = "multi-article";
		classificationLabel = "Revista Completa / Compilação de Matérias";
		recommendedRoute = "smart-articles";
	} else {
		classification = "general-notes";
		classificationLabel = "Documento Editorial Texto";
		recommendedRoute = "smart-articles";
	}
	const samplePreview = allText.slice(0, 380).trim() + (allText.length > 380 ? "..." : "");
	return {
		fileName,
		fileSizeBytes,
		totalPages,
		totalWords,
		classification,
		classificationLabel,
		recommendedRoute,
		detectedHeadingsCount: allHeadings.length,
		samplePreview
	};
}
/**
* Executa a rota selecionada transformando as páginas extraídas em rascunhos de matérias estruturadas
*/
function routePdfConversion(pages, route, baseFileName) {
	const drafts = [];
	const cleanBaseName = baseFileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim().toUpperCase();
	switch (route) {
		case "smart-articles": {
			let currentTitle = "";
			let currentContentBlocks = [];
			let startPage = 1;
			let articleIndex = 1;
			for (let i = 0; i < pages.length; i++) {
				const page = pages[i];
				const pageNum = page.pageNumber;
				const paragraphs = page.markdown.split(/\n\n+/);
				for (const p of paragraphs) if (p.startsWith("## ")) {
					if (currentContentBlocks.length > 0 && currentTitle) {
						const fullContent = currentContentBlocks.join("\n\n");
						const wordCount = countWords(fullContent);
						if (wordCount >= 25) drafts.push({
							id: `pdf-art-${Date.now()}-${articleIndex++}`,
							title: currentTitle,
							category: inferCategory(currentTitle + " " + fullContent),
							content: fullContent,
							suggestedTemplate: inferLayoutTemplate(wordCount, fullContent),
							pageRange: [startPage, pageNum],
							wordCount,
							estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
							selected: true
						});
						currentContentBlocks = [];
					}
					currentTitle = p.replace(/^##\s+/, "").trim();
					startPage = pageNum;
				} else {
					if (!currentTitle) {
						currentTitle = page.headings[0] || `${cleanBaseName} - PARTE ${articleIndex}`;
						startPage = pageNum;
					}
					currentContentBlocks.push(p);
				}
			}
			if (currentContentBlocks.length > 0) {
				const fullContent = currentContentBlocks.join("\n\n");
				const wordCount = countWords(fullContent);
				if (wordCount >= 20 || drafts.length === 0) drafts.push({
					id: `pdf-art-${Date.now()}-${articleIndex}`,
					title: currentTitle || `${cleanBaseName}`,
					category: inferCategory(currentTitle + " " + fullContent),
					content: fullContent,
					suggestedTemplate: inferLayoutTemplate(wordCount, fullContent),
					pageRange: [startPage, pages.length],
					wordCount,
					estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
					selected: true
				});
			}
			if (drafts.length === 0) return routePdfConversion(pages, "continuous-lead", baseFileName);
			break;
		}
		case "continuous-lead": {
			const fullMarkdown = pages.map((p) => p.markdown).join("\n\n");
			const title = pages[0]?.headings[0] || cleanBaseName;
			const wordCount = countWords(fullMarkdown);
			drafts.push({
				id: `pdf-lead-${Date.now()}`,
				title,
				subtitle: `Artigo Completo Extraído de "${baseFileName}"`,
				category: inferCategory(title + " " + fullMarkdown),
				content: fullMarkdown,
				suggestedTemplate: wordCount > 600 ? "editorial-lead" : "three-column-dense",
				pageRange: [1, pages.length],
				wordCount,
				estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
				selected: true
			});
			break;
		}
		case "page-by-page":
			pages.forEach((page) => {
				const title = page.headings[0] || `${cleanBaseName} - PÁGINA ${page.pageNumber}`;
				const wordCount = countWords(page.markdown);
				drafts.push({
					id: `pdf-page-${Date.now()}-${page.pageNumber}`,
					title,
					category: inferCategory(title + " " + page.markdown),
					content: page.markdown,
					suggestedTemplate: "infographic-tips",
					pageRange: [page.pageNumber, page.pageNumber],
					wordCount,
					estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
					selected: true
				});
			});
			break;
		case "clean-markdown": {
			const fullMarkdown = pages.map((p) => p.markdown).join("\n\n");
			const title = cleanBaseName;
			const wordCount = countWords(fullMarkdown);
			drafts.push({
				id: `pdf-raw-${Date.now()}`,
				title,
				category: "TEXTO BRUTO",
				content: fullMarkdown,
				suggestedTemplate: "two-column-quote",
				pageRange: [1, pages.length],
				wordCount,
				estimatedReadTime: Math.max(1, Math.round(wordCount / 180)),
				selected: true
			});
			break;
		}
	}
	return drafts;
}
/**
* Converte rascunhos detectados em RepositoryDocument (Rascunhos Inéditos do Acervo)
*/
function convertDraftsToRepositoryDocuments(drafts, sourceFileName) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return drafts.filter((d) => d.selected).map((draft, idx) => ({
		id: `doc-pdf-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 5)}`,
		title: draft.title,
		category: draft.category,
		rawContent: draft.content,
		sourceFileName,
		wordCount: draft.wordCount,
		status: "draft",
		tags: ["Importado de PDF", draft.suggestedTemplate],
		createdAt: now,
		updatedAt: now
	}));
}
/**
* Converte rascunhos detectados em Articles completos para publicação direta na revista
*/
function convertDraftsToMagazineArticles(drafts, authorName = "Coach Montanha") {
	return drafts.filter((d) => d.selected).map((draft, idx) => {
		const quotes = extractPullQuotes(draft.content);
		const takeaways = extractKeyTakeaways(draft.content);
		return {
			id: `art-pdf-${Date.now()}-${idx}`,
			title: draft.title,
			subtitle: draft.subtitle || `Matéria baseada em ${draft.pageRange[0] === draft.pageRange[1] ? `página ${draft.pageRange[0]}` : `páginas ${draft.pageRange[0]}-${draft.pageRange[1]}`}`,
			author: authorName,
			authorRole: "Especialista Editorial",
			content: draft.content,
			category: draft.category,
			pullQuotes: quotes,
			keyTakeaways: takeaways,
			layoutTemplate: draft.suggestedTemplate,
			tags: ["PDF", draft.category],
			estimatedReadTime: draft.estimatedReadTime,
			featuredOnCover: idx === 0,
			enabled: true
		};
	});
}
function inferCategory(text) {
	const lower = text.toLowerCase();
	if (lower.includes("treino") || lower.includes("exercício") || lower.includes("musculação") || lower.includes("força")) return "TREINAMENTO & FORÇA";
	if (lower.includes("dieta") || lower.includes("proteína") || lower.includes("nutrição") || lower.includes("creatina")) return "NUTRIÇÃO DE PRECISÃO";
	if (lower.includes("sono") || lower.includes("longevidade") || lower.includes("recuperação") || lower.includes("biohacking")) return "BIOHACKING & LONGEVIDADE";
	if (lower.includes("mente") || lower.includes("foco") || lower.includes("disciplina") || lower.includes("mentalidade")) return "MENTALIDADE DE COMBATE";
	return "MONTANHA METHOD";
}
function inferLayoutTemplate(wordCount, content) {
	const lower = content.toLowerCase();
	if (lower.includes("série") && lower.includes("reps")) return "workout-protocol";
	if (wordCount > 700) return "editorial-lead";
	if (wordCount > 400) return "three-column-dense";
	if (lower.includes("passo 1") || lower.includes("dica") || lower.includes("1.") || lower.includes("•")) return "infographic-tips";
	return "two-column-quote";
}
function extractPullQuotes(content) {
	const sentences = content.split(/[.!?]+/).map((s) => s.trim()).filter((s) => s.length >= 40 && s.length <= 130);
	if (sentences.length === 0) return ["A consistência e o método superam qualquer motivação passageira."];
	return sentences.slice(0, 2);
}
function extractKeyTakeaways(content) {
	const bullets = content.split("\n").map((l) => l.trim()).filter((l) => /^([•\-\*]|\d+[\.\)])\s+/.test(l)).map((l) => l.replace(/^([•\-\*]|\d+[\.\)])\s+/, "").trim());
	if (bullets.length >= 2) return bullets.slice(0, 4);
	return [
		"Aplicação prática imediata com fundamentação técnica.",
		"Execução rigorosa com foco em progressão constante.",
		"Resultados mensuráveis integrados à rotina."
	];
}
var PdfImportModal = ({ isOpen, onClose, project, onUpdateProject, onOpenArticleEditor, onNavigateToViewer, onSuccessMessage }) => {
	const [file, setFile] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [loadingStep, setLoadingStep] = (0, import_react.useState)("");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const [extractedPages, setExtractedPages] = (0, import_react.useState)([]);
	const [analysisReport, setAnalysisReport] = (0, import_react.useState)(null);
	const [activeRoute, setActiveRoute] = (0, import_react.useState)("smart-articles");
	const [drafts, setDrafts] = (0, import_react.useState)([]);
	const [expandedDraftId, setExpandedDraftId] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleReset = () => {
		setFile(null);
		setIsLoading(false);
		setLoadingStep("");
		setErrorMessage(null);
		setExtractedPages([]);
		setAnalysisReport(null);
		setActiveRoute("smart-articles");
		setDrafts([]);
		setExpandedDraftId(null);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const processPdfFile = async (pdfFile) => {
		if (!pdfFile.name.toLowerCase().endsWith(".pdf")) {
			setErrorMessage("Por favor, selecione um arquivo válido no formato .pdf");
			return;
		}
		setFile(pdfFile);
		setIsLoading(true);
		setErrorMessage(null);
		try {
			setLoadingStep("1/3 Lendo geometria e páginas do PDF...");
			const buffer = await pdfFile.arrayBuffer();
			setLoadingStep("2/3 Classificando estrutura e eliminando ruídos...");
			const pages = await extractPdfContent(buffer);
			if (pages.length === 0 || pages.every((p) => p.text.trim().length === 0)) throw new Error("Não foi possível extrair texto legível deste PDF. Ele pode ser uma digitalização apenas de imagens sem camada OCR de texto.");
			setExtractedPages(pages);
			const report = classifyPdfDocument(pages, pdfFile.name, pdfFile.size);
			setAnalysisReport(report);
			setActiveRoute(report.recommendedRoute);
			setLoadingStep("3/3 Roteando seções e diagramando matérias...");
			const generatedDrafts = routePdfConversion(pages, report.recommendedRoute, pdfFile.name);
			setDrafts(generatedDrafts);
		} catch (err) {
			console.error("Erro na importação do PDF:", err);
			setErrorMessage(err?.message || "Ocorreu um erro ao processar o arquivo PDF.");
		} finally {
			setIsLoading(false);
			setLoadingStep("");
		}
	};
	const handleRouteSwitch = (route) => {
		if (!analysisReport || extractedPages.length === 0) return;
		setActiveRoute(route);
		const newDrafts = routePdfConversion(extractedPages, route, analysisReport.fileName);
		setDrafts(newDrafts);
	};
	const handleToggleSelectAll = (select) => {
		setDrafts((prev) => prev.map((d) => ({
			...d,
			selected: select
		})));
	};
	const handleToggleDraft = (id) => {
		setDrafts((prev) => prev.map((d) => d.id === id ? {
			...d,
			selected: !d.selected
		} : d));
	};
	const handleTitleChange = (id, newTitle) => {
		setDrafts((prev) => prev.map((d) => d.id === id ? {
			...d,
			title: newTitle
		} : d));
	};
	const selectedCount = drafts.filter((d) => d.selected).length;
	const handleSaveToRepository = () => {
		if (selectedCount === 0) {
			alert("Selecione ao menos uma matéria para importar.");
			return;
		}
		const newDocs = convertDraftsToRepositoryDocuments(drafts, analysisReport?.fileName || "documento.pdf");
		const updatedRepo = [...newDocs, ...project.contentRepository || []];
		onUpdateProject({
			...project,
			contentRepository: updatedRepo,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		const msg = `✓ ${newDocs.length} matéria(s) importada(s) com sucesso como Rascunhos Inéditos no Acervo!`;
		if (onSuccessMessage) onSuccessMessage(msg);
		handleReset();
		onClose();
	};
	const handlePublishDirectlyToMagazine = () => {
		if (selectedCount === 0) {
			alert("Selecione ao menos uma matéria para diagramar na revista.");
			return;
		}
		const newArticles = convertDraftsToMagazineArticles(drafts, "Coach Montanha");
		const updatedArticles = [...project.articles, ...newArticles];
		onUpdateProject({
			...project,
			articles: updatedArticles,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		const msg = `✓ ${newArticles.length} matéria(s) diagramada(s) diretamente na Edição Atual #${project.editionNumber}!`;
		if (onSuccessMessage) onSuccessMessage(msg);
		handleReset();
		onClose();
		if (onNavigateToViewer) onNavigateToViewer();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && (handleReset(), onClose()),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-4xl max-h-[92vh] flex flex-col bg-zinc-950 border border-zinc-800 text-zinc-100 p-0 overflow-hidden shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
					className: "px-6 pt-5 pb-4 border-b border-zinc-800/80 bg-zinc-900/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-lg font-black tracking-wider uppercase text-zinc-100 font-sans",
									children: "Importação Inteligente de PDFs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " pdf-conversion-router"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-400 mt-0.5",
								children: "Classificação de documento, extração tipográfica sem ruído e separação em matérias diagramáveis."
							})] })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto px-6 py-5 space-y-6",
					children: [
						errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
						}),
						!file && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUpload, {
							accept: ".pdf",
							maxSizeMB: 100,
							multiple: false,
							inputTestId: "pdf-file-input",
							title: "Arraste seu PDF aqui ou clique para selecionar",
							description: "Suporta revistas antigas, apostilas de treino, livros, relatórios técnicos ou lâminas de slides. O roteador identificará títulos, seções e descartará ruídos automaticamente.",
							tags: [
								"PDF Nativo",
								"Multi-página",
								"Filtro de Ruído"
							],
							onFilesSelected: (files) => {
								if (files[0]) processPdfFile(files[0]);
							}
						}),
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-16 text-center space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-10 h-10 text-amber-400 animate-spin mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-zinc-200 uppercase tracking-wider",
									children: "Processando Documento PDF"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-amber-400/90 font-mono animate-pulse",
									children: loadingStep
								})]
							})]
						}),
						analysisReport && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 flex-wrap",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-sm text-zinc-100",
												children: analysisReport.fileName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40",
												children: analysisReport.classificationLabel
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 mt-1.5 text-xs text-zinc-400 font-mono",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [analysisReport.totalPages, " página(s)"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"~",
													analysisReport.totalWords,
													" palavras"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [analysisReport.detectedHeadingsCount, " título(s) identificados"] })
											]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										onClick: handleReset,
										className: "text-xs border-zinc-700 hover:bg-zinc-800 text-zinc-300 self-start md:self-auto",
										children: "Trocar PDF"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										className: "text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, { className: "w-3.5 h-3.5 text-amber-400" }), "Escolha a Rota de Conversão:"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleRouteSwitch("smart-articles"),
												className: `p-3 rounded-lg border text-left transition-all ${activeRoute === "smart-articles" ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm" : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mb-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, { className: "w-3 h-3 text-amber-400" }), "Separação Editorial"]
													}), analysisReport.recommendedRoute === "smart-articles" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40",
														children: "Recomendado"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-zinc-400 leading-snug",
													children: "Detecta títulos e divide em matérias independentes."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleRouteSwitch("continuous-lead"),
												className: `p-3 rounded-lg border text-left transition-all ${activeRoute === "continuous-lead" ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm" : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mb-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3 h-3 text-amber-400" }), "Artigo Contínuo"]
													}), analysisReport.recommendedRoute === "continuous-lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40",
														children: "Recomendado"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-zinc-400 leading-snug",
													children: "Unifica em uma única matéria editorial completa de destaque."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleRouteSwitch("page-by-page"),
												className: `p-3 rounded-lg border text-left transition-all ${activeRoute === "page-by-page" ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm" : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between mb-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-3 h-3 text-amber-400" }), "Página por Página"]
													}), analysisReport.recommendedRoute === "page-by-page" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-bold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40",
														children: "Recomendado"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-zinc-400 leading-snug",
													children: "Cria uma matéria para cada página do PDF (slides / infográficos)."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleRouteSwitch("clean-markdown"),
												className: `p-3 rounded-lg border text-left transition-all ${activeRoute === "clean-markdown" ? "bg-amber-400/10 border-amber-400 text-zinc-100 shadow-sm" : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center justify-between mb-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-zinc-200",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3 text-amber-400" }), "Markdown Limpo"]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-zinc-400 leading-snug",
													children: "Extrai o texto integral limpo e normalizado em rascunho."
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-bold uppercase tracking-wider text-zinc-300",
												children: [
													"Matérias Extraídas (",
													drafts.length,
													")"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-amber-400 font-mono",
												children: [
													"(",
													selectedCount,
													" selecionada",
													selectedCount !== 1 ? "s" : "",
													")"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleToggleSelectAll(selectedCount < drafts.length),
												className: "text-xs text-zinc-400 hover:text-amber-400 flex items-center gap-1",
												children: selectedCount === drafts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-3.5 h-3.5" }), " Desmarcar Todas"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-3.5 h-3.5" }), " Selecionar Todas"] })
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2.5 max-h-[360px] overflow-y-auto pr-1",
										children: drafts.map((draft, idx) => {
											const isExpanded = expandedDraftId === draft.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `rounded-lg border transition-all ${draft.selected ? "bg-zinc-900/80 border-zinc-700" : "bg-zinc-950/40 border-zinc-850 opacity-60"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 flex items-start gap-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => handleToggleDraft(draft.id),
															className: "mt-1 text-amber-400 hover:text-amber-300",
															children: draft.selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4 text-zinc-600" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 min-w-0 space-y-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2 flex-wrap",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700",
																		children: ["Matéria #", idx + 1]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20",
																		children: draft.category
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-[10px] font-mono text-zinc-400",
																		children: [
																			"Pág. ",
																			draft.pageRange[0],
																			draft.pageRange[0] !== draft.pageRange[1] ? ` a ${draft.pageRange[1]}` : ""
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-[10px] font-mono text-zinc-400",
																		children: [
																			"~",
																			draft.wordCount,
																			" palavras"
																		]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "text-[10px] font-mono text-zinc-400 flex items-center gap-0.5",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3 text-zinc-500" }),
																			" ",
																			draft.estimatedReadTime,
																			" min"
																		]
																	})
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																value: draft.title,
																onChange: (e) => handleTitleChange(draft.id, e.target.value),
																placeholder: "Título da matéria...",
																className: "bg-zinc-950 border-zinc-700 font-bold text-sm text-zinc-100 h-8"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setExpandedDraftId(isExpanded ? null : draft.id),
															className: "text-zinc-400 hover:text-zinc-200 p-1 rounded hover:bg-zinc-800",
															title: isExpanded ? "Ocultar prévia" : "Ver prévia do texto",
															children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })
														})
													]
												}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "px-4 pb-4 pt-1 border-t border-zinc-800/80 space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-[11px] text-zinc-400",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-mono",
															children: ["Template sugerido: ", draft.suggestedTemplate]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-zinc-500",
															children: "Prévia do texto extraído:"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "p-3 rounded bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300 font-mono max-h-48 overflow-y-auto whitespace-pre-wrap leading-relaxed",
														children: draft.content
													})]
												})]
											}, draft.id);
										})
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "px-6 py-4 border-t border-zinc-800/80 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-zinc-400 flex items-center gap-2",
						children: analysisReport && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							selectedCount,
							" de ",
							drafts.length,
							" matéria(s) pronta(s) para importação"
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 w-full sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => {
								handleReset();
								onClose();
							},
							className: "text-xs border-zinc-700 hover:bg-zinc-800 text-zinc-300",
							children: "Cancelar"
						}), analysisReport && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: handleSaveToRepository,
							disabled: selectedCount === 0,
							className: "text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 gap-1.5",
							"data-testid": "btn-save-pdf-to-repo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5 text-amber-400" }), "Salvar no Acervo (Rascunhos)"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: handlePublishDirectlyToMagazine,
							disabled: selectedCount === 0,
							className: "text-xs bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold gap-1.5 shadow-lg shadow-amber-400/10",
							"data-testid": "btn-publish-pdf-to-magazine",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" }), "Diagramar na Revista Ativa"]
						})] })]
					})]
				})
			]
		})
	});
};
function DataGrid({ data, columns, keyExtractor, selectedIds = [], onSelectionChange, bulkActions = [], emptyMessage = "Nenhum registro encontrado.", className }) {
	const [sortKey, setSortKey] = (0, import_react.useState)(null);
	const [sortDirection, setSortDirection] = (0, import_react.useState)("asc");
	const handleSort = (key) => {
		if (sortKey === key) if (sortDirection === "asc") setSortDirection("desc");
		else {
			setSortKey(null);
			setSortDirection("asc");
		}
		else {
			setSortKey(key);
			setSortDirection("asc");
		}
	};
	const sortedData = (0, import_react.useMemo)(() => {
		if (!sortKey) return data;
		return [...data].sort((a, b) => {
			const valA = a[sortKey];
			const valB = b[sortKey];
			if (typeof valA === "number" && typeof valB === "number") return sortDirection === "asc" ? valA - valB : valB - valA;
			const strA = String(valA || "").toLowerCase();
			const strB = String(valB || "").toLowerCase();
			if (strA < strB) return sortDirection === "asc" ? -1 : 1;
			if (strA > strB) return sortDirection === "asc" ? 1 : -1;
			return 0;
		});
	}, [
		data,
		sortKey,
		sortDirection
	]);
	const allIds = (0, import_react.useMemo)(() => data.map(keyExtractor), [data, keyExtractor]);
	const isAllSelected = data.length > 0 && allIds.every((id) => selectedIds.includes(id));
	const isPartiallySelected = !isAllSelected && allIds.some((id) => selectedIds.includes(id));
	const handleToggleSelectAll = () => {
		if (!onSelectionChange) return;
		if (isAllSelected) onSelectionChange([]);
		else onSelectionChange(allIds);
	};
	const handleToggleRow = (id, e) => {
		e.stopPropagation();
		if (!onSelectionChange) return;
		if (selectedIds.includes(id)) onSelectionChange(selectedIds.filter((item) => item !== id));
		else onSelectionChange([...selectedIds, id]);
	};
	const selectedRows = (0, import_react.useMemo)(() => {
		const idSet = new Set(selectedIds);
		return data.filter((row) => idSet.has(keyExtractor(row)));
	}, [
		data,
		selectedIds,
		keyExtractor
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full space-y-2.5 font-sans", className),
		children: [selectedIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-2.5 px-3 rounded-lg bg-zinc-900 border-2 border-amber-400 text-zinc-100 flex flex-wrap items-center justify-between gap-2 shadow-md animate-in fade-in-50 duration-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs font-black px-2 py-0.5 rounded bg-amber-400 text-black",
						children: selectedIds.length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-zinc-200",
						children: selectedIds.length === 1 ? "item selecionado" : "itens selecionados"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onSelectionChange?.([]),
						className: "text-[11px] text-zinc-400 hover:text-white underline cursor-pointer ml-2",
						children: "Desmarcar todos"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2 flex-wrap",
				children: bulkActions.map((action, idx) => {
					const ActionIcon = action.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: action.variant || "default",
						onClick: () => action.onClick(selectedRows),
						className: cn("h-8 text-xs font-black cursor-pointer flex items-center gap-1.5", action.className),
						children: [ActionIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionIcon, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: action.label })]
					}, idx);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full overflow-x-auto rounded-xl border-2 border-zinc-800 bg-zinc-950/90 shadow-sm custom-scrollbar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left border-collapse text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b-2 border-zinc-800 bg-zinc-900/90 text-zinc-300 uppercase font-mono tracking-wider text-[11px]",
					children: [onSelectionChange && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "py-3 px-3.5 w-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleToggleSelectAll,
							className: "cursor-pointer text-zinc-400 hover:text-amber-400 transition-colors flex items-center justify-center",
							title: isAllSelected ? "Desmarcar todos" : "Selecionar todos",
							children: isAllSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-amber-400" }) : isPartiallySelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareMinus, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4" })
						})
					}), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						style: { width: col.width },
						className: cn("py-3 px-3.5 font-black select-none", col.sortable && "cursor-pointer hover:text-amber-400 transition-colors", col.align === "right" && "text-right", col.align === "center" && "text-center"),
						onClick: () => col.sortable && handleSort(col.key),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex items-center gap-1.5", col.align === "right" && "justify-end", col.align === "center" && "justify-center"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: col.header }), col.sortable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-70",
								children: sortKey === col.key ? sortDirection === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-3.5 h-3.5 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3.5 h-3.5 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "w-3 h-3 opacity-40" })
							})]
						})
					}, col.key))]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-zinc-800/80",
					children: sortedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: columns.length + (onSelectionChange ? 1 : 0),
						className: "py-8 text-center text-zinc-500 font-mono text-xs",
						children: emptyMessage
					}) }) : sortedData.map((row, index) => {
						const id = keyExtractor(row);
						const isSelected = selectedIds.includes(id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: cn("transition-colors hover:bg-zinc-900/60", isSelected ? "bg-amber-400/10" : "bg-transparent"),
							children: [onSelectionChange && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 px-3.5 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => handleToggleRow(id, e),
									className: "cursor-pointer text-zinc-400 hover:text-amber-400 transition-colors flex items-center justify-center",
									children: isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "w-4 h-4 text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "w-4 h-4" })
								})
							}), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: cn("py-3 px-3.5", col.align === "right" && "text-right", col.align === "center" && "text-center"),
								children: col.render ? col.render(row, index) : row[col.key] ?? "-"
							}, col.key))]
						}, id);
					})
				})]
			})
		})]
	});
}
var Kanban = ({ columns, items, onMoveItem, onItemClick, renderItemExtra, className }) => {
	const [draggedItemId, setDraggedItemId] = (0, import_react.useState)(null);
	const [dragOverColumnId, setDragOverColumnId] = (0, import_react.useState)(null);
	const handleDragStart = (e, itemId) => {
		e.dataTransfer.setData("text/plain", itemId);
		setDraggedItemId(itemId);
	};
	const handleDragOver = (e, colId) => {
		e.preventDefault();
		setDragOverColumnId(colId);
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragOverColumnId(null);
	};
	const handleDrop = (e, colId) => {
		e.preventDefault();
		const itemId = e.dataTransfer.getData("text/plain") || draggedItemId;
		if (itemId) onMoveItem(itemId, colId);
		setDraggedItemId(null);
		setDragOverColumnId(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid grid-cols-1 md:grid-cols-3 gap-4 font-sans", className),
		children: columns.map((column, colIdx) => {
			const columnItems = items.filter((item) => item.columnId === column.id);
			const ColIcon = column.icon;
			const isDragTarget = dragOverColumnId === column.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDragOver: (e) => handleDragOver(e, column.id),
				onDragLeave: handleDragLeave,
				onDrop: (e) => handleDrop(e, column.id),
				className: cn("flex flex-col rounded-xl border-2 transition-all min-h-[460px] bg-zinc-950/60 p-3.5 space-y-3", isDragTarget ? "border-amber-400 bg-amber-400/5 ring-2 ring-amber-400/30" : "border-zinc-800 hover:border-zinc-700"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-zinc-800 pb-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [ColIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColIcon, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-black text-xs uppercase tracking-wider text-zinc-100",
								children: column.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("font-mono text-xs font-black px-2 py-0.5 rounded border", column.badgeColor || "bg-zinc-800 text-zinc-200 border-zinc-700"),
							children: columnItems.length
						})]
					}),
					column.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-zinc-400 leading-snug",
						children: column.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 space-y-2.5 overflow-y-auto max-h-[600px] pr-1 custom-scrollbar",
						children: columnItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-40 border-2 border-dashed border-zinc-800/80 rounded-lg flex flex-col items-center justify-center text-center p-4 text-zinc-500 text-xs font-mono",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nenhum texto nesta coluna" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-zinc-600 mt-1",
								children: "Arraste um card até aqui"
							})]
						}) : columnItems.map((item) => {
							const canMoveLeft = colIdx > 0;
							const canMoveRight = colIdx < columns.length - 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								draggable: true,
								onDragStart: (e) => handleDragStart(e, item.id),
								onClick: () => onItemClick?.(item),
								className: cn("theme-app-card p-3.5 rounded-lg border-2 border-zinc-800 hover:border-amber-400/80 transition-all space-y-2 cursor-grab active:cursor-grabbing shadow-xs group", draggedItemId === item.id && "opacity-40"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-1.5 flex-wrap",
										children: [item.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-black border border-black uppercase truncate max-w-[120px]",
											children: item.category
										}), item.meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] text-zinc-400 ml-auto truncate",
											children: item.meta
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-black text-xs uppercase tracking-tight text-zinc-100 group-hover:text-amber-300 transition-colors leading-snug line-clamp-2",
										children: item.title
									}),
									item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-zinc-400 line-clamp-2 leading-relaxed",
										children: item.description
									}),
									renderItemExtra && renderItemExtra(item),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-zinc-800/80 flex items-center justify-between gap-1 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1",
											children: [canMoveLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													onMoveItem(item.id, columns[colIdx - 1].id);
												},
												className: "p-1 rounded text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer",
												title: `Mover para ${columns[colIdx - 1].title}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5" })
											}), canMoveRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: (e) => {
													e.stopPropagation();
													onMoveItem(item.id, columns[colIdx + 1].id);
												},
												className: "p-1 rounded text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer",
												title: `Mover para ${columns[colIdx + 1].title}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[9px] font-mono text-zinc-500 opacity-60 flex items-center gap-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "w-3 h-3" }), "arrastar"]
										})]
									})
								]
							}, item.id);
						})
					})
				]
			}, column.id);
		})
	});
};
var ARCHIVE_STORAGE_KEY = "montanha_magazine_editions_archive";
/**
* Retorna uma edição modelo inicial para preencher o arquivo caso esteja vazio
*/
function createInitialSampleEdition() {
	const proj = INITIAL_MAGAZINE_PROJECT;
	const totalPages = calculateMagazineTotalPages(proj);
	const totalWords = proj.articles.reduce((acc, a) => acc + countWords(a.content), 0);
	return {
		id: "ed-montanha-01-approved",
		editionNumber: proj.editionNumber || "01",
		title: proj.title || "Revista Montanha",
		subtitle: proj.subtitle || "Força, Biomecânica & Performance Sem Atalhos",
		date: proj.date || "Setembro 2026",
		themeId: proj.themeId,
		coverImage: proj.coverConfig.backgroundImage,
		mainHeadline: proj.coverConfig.mainHeadline,
		totalPages,
		totalArticles: proj.articles.length,
		totalWords,
		status: "approved",
		notes: "Edição de estreia aprovada para diagramação impressa e publicação digital.",
		approvedAt: (/* @__PURE__ */ new Date()).toISOString(),
		projectSnapshot: JSON.parse(JSON.stringify(proj))
	};
}
/**
* Obtém todas as edições aprovadas e arquivadas
*/
function getArchivedEditions() {
	if (typeof window === "undefined") return [createInitialSampleEdition()];
	try {
		const raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
		if (!raw) {
			const initialList = [createInitialSampleEdition()];
			localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(initialList));
			return initialList;
		}
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed) && parsed.length > 0) return parsed;
		const initialList = [createInitialSampleEdition()];
		localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(initialList));
		return initialList;
	} catch (err) {
		console.error("Erro ao ler arquivo de edições:", err);
		return [createInitialSampleEdition()];
	}
}
/**
* Salva a lista de edições arquivadas
*/
function saveArchivedList(list) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(list));
		window.dispatchEvent(new CustomEvent("montanha-archive-changed"));
	} catch (err) {
		console.error("Erro ao salvar arquivo de edições:", err);
	}
}
/**
* Aprova e arquiva o projeto atual
*/
function archiveCurrentProject(project, options) {
	const currentList = getArchivedEditions();
	const totalPages = calculateMagazineTotalPages(project);
	const totalWords = project.articles.reduce((acc, a) => acc + countWords(a.content), 0);
	const editionNumber = options?.customEditionNumber || project.editionNumber || `0${currentList.length + 1}`;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const existingIdx = currentList.findIndex((e) => e.editionNumber.trim().toLowerCase() === editionNumber.trim().toLowerCase());
	const newEntry = {
		id: existingIdx >= 0 ? currentList[existingIdx].id : `edition-${Date.now()}`,
		editionNumber,
		title: project.title,
		subtitle: project.subtitle,
		date: project.date,
		themeId: project.themeId,
		coverImage: project.coverConfig.backgroundImage,
		mainHeadline: project.coverConfig.mainHeadline,
		totalPages,
		totalArticles: project.articles.length,
		totalWords,
		status: options?.status || "approved",
		notes: options?.notes || "Edição aprovada pelo Coach Montanha.",
		approvedAt: now,
		projectSnapshot: JSON.parse(JSON.stringify(project))
	};
	let updatedList;
	if (existingIdx >= 0) {
		updatedList = [...currentList];
		updatedList[existingIdx] = newEntry;
	} else updatedList = [newEntry, ...currentList];
	saveArchivedList(updatedList);
	return newEntry;
}
/**
* Exclui uma edição do arquivo
*/
function deleteArchivedEdition(id) {
	saveArchivedList(getArchivedEditions().filter((e) => e.id !== id));
}
/**
* Duplica uma edição arquivada ou projeto atual como base para a próxima edição
*/
function duplicateEditionForNextRelease(source, options) {
	const isArchived = "projectSnapshot" in source;
	const snapshot = JSON.parse(JSON.stringify(isArchived ? source.projectSnapshot : source));
	const currentEdNum = isArchived ? source.editionNumber : source.editionNumber || "01";
	let nextNum = options?.customNextNumber;
	if (!nextNum) {
		const numInt = parseInt(currentEdNum.replace(/\D/g, ""), 10);
		nextNum = isNaN(numInt) ? "02" : numInt + 1 < 10 ? `0${numInt + 1}` : `${numInt + 1}`;
	}
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const defaultNextDate = `${[
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro"
	][((/* @__PURE__ */ new Date()).getMonth() + 1) % 12]} ${currentYear}`;
	const nextDate = options?.customDate || defaultNextDate;
	let nextArticles = snapshot.articles;
	if (options?.mode === "clean-articles") nextArticles = [{
		id: `article-ed${nextNum}-01`,
		title: "NOVA MATÉRIA PRINCIPAL",
		subtitle: "Subtítulo da matéria de capa para esta nova edição",
		category: "FITNESS",
		content: "Insira o conteúdo do seu novo artigo aqui. Você também pode importar do seu acervo ou usar a IA para redigir matérias completas.",
		author: snapshot.articles[0]?.author || "Coach Montanha",
		estimatedReadTime: 3,
		pageSpan: 1,
		enabled: true,
		heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
		pullQuotes: [],
		layoutTemplate: "editorial-lead",
		tags: ["FORÇA"],
		featuredOnCover: true
	}];
	return {
		...snapshot,
		id: `proj-edition-${nextNum}-${Date.now()}`,
		editionNumber: nextNum,
		date: nextDate,
		articles: nextArticles,
		coverConfig: {
			...snapshot.coverConfig,
			issueBadge: `EDIÇÃO #${nextNum}`,
			issueDate: nextDate.toUpperCase(),
			editionNumber: nextNum,
			hexBadgeText: snapshot.volume ? `${snapshot.volume} // ISSUE ${nextNum}` : `VOL. 01 // ISSUE ${nextNum}`,
			mainHeadline: options?.mode === "clean-articles" ? "MANCHETE PRINCIPAL DA NOVA EDIÇÃO" : snapshot.coverConfig.mainHeadline
		},
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
/**
* Exporta todo o acervo de edições em arquivo JSON
*/
function exportAllEditionsArchive() {
	const list = getArchivedEditions();
	const jsonStr = JSON.stringify(list, null, 2);
	const blob = new Blob([jsonStr], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `arquivo-edicoes-montanha-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
/**
* Avalia o status editorial completo de um documento do acervo:
* - Se está na revista atual
* - Se já foi publicado em edições anteriores arquivadas
* - Ou se é um rascunho 100% inédito
*/
function getDocumentUsageTracker(doc, currentProject, archivedEditions) {
	const currentArticles = currentProject.articles || [];
	const currentArticleIndex = currentArticles.findIndex((a) => a.sourceDocId && a.sourceDocId === doc.id || doc.id && a.id === doc.id || a.title.trim().toLowerCase() === doc.title.trim().toLowerCase());
	const currentArticle = currentArticleIndex >= 0 ? currentArticles[currentArticleIndex] : void 0;
	const isInCurrentMagazine = !!currentArticle;
	const currentPageNumber = currentArticleIndex >= 0 ? currentArticleIndex + 4 : void 0;
	const previousEditionsMap = /* @__PURE__ */ new Map();
	if (doc.publishedEditions && Array.isArray(doc.publishedEditions)) {
		for (const record of doc.publishedEditions) if (record.editionNumber) {
			const key = record.editionNumber.trim().toLowerCase();
			previousEditionsMap.set(key, {
				editionNumber: record.editionNumber,
				editionTitle: record.editionTitle || `Edição #${record.editionNumber}`,
				date: record.date,
				publishedAt: record.publishedAt,
				isManual: record.isManual
			});
		}
	}
	const archiveList = archivedEditions || getArchivedEditions();
	const currentEdNumber = (currentProject.editionNumber || "").trim().toLowerCase();
	for (const archive of archiveList) {
		const archiveEdNumber = (archive.editionNumber || "").trim().toLowerCase();
		const isSameEditionNumber = archiveEdNumber === currentEdNumber;
		if (archive.projectSnapshot?.articles?.some((a) => a.sourceDocId && a.sourceDocId === doc.id || doc.id && a.id === doc.id || a.title.trim().toLowerCase() === doc.title.trim().toLowerCase())) {
			if (!isSameEditionNumber || !isInCurrentMagazine) {
				const key = archiveEdNumber;
				if (!previousEditionsMap.has(key)) previousEditionsMap.set(key, {
					editionNumber: archive.editionNumber,
					editionTitle: archive.title || `Edição #${archive.editionNumber}`,
					date: archive.date,
					publishedAt: archive.approvedAt,
					isManual: false
				});
			}
		}
	}
	const previousEditions = Array.from(previousEditionsMap.values());
	const hasPrevious = previousEditions.length > 0;
	let status = "unused";
	let statusLabel = "Rascunho Inédito";
	if (isInCurrentMagazine && hasPrevious) {
		status = "both";
		statusLabel = `Na Revista Atual (e anterior: Ed. ${previousEditions[0]?.editionNumber})`;
	} else if (isInCurrentMagazine) {
		status = "current";
		statusLabel = "Na Revista Atual";
	} else if (hasPrevious) {
		status = "previous";
		statusLabel = `Publicado na Ed. #${previousEditions[0]?.editionNumber}`;
	} else {
		status = "unused";
		statusLabel = "Rascunho Inédito (Disponível)";
	}
	return {
		isInCurrentMagazine,
		currentArticle,
		currentPageNumber,
		previousEditions,
		isUnusedDraft: status === "unused",
		status,
		statusLabel
	};
}
/**
* Adiciona ou remove marcação manual de edição publicada em um documento do acervo
*/
function toggleDocPublishedEdition(docId, project, editionData) {
	const targetDoc = project.contentRepository?.find((d) => d.id === docId);
	if (!targetDoc) return project;
	const currentEditions = targetDoc.publishedEditions || [];
	const exists = currentEditions.some((e) => e.editionNumber.trim().toLowerCase() === editionData.editionNumber.trim().toLowerCase());
	let updatedList;
	if (exists) updatedList = currentEditions.filter((e) => e.editionNumber.trim().toLowerCase() !== editionData.editionNumber.trim().toLowerCase());
	else updatedList = [...currentEditions, {
		editionNumber: editionData.editionNumber.trim(),
		editionTitle: editionData.editionTitle || `Edição #${editionData.editionNumber.trim()}`,
		date: editionData.date,
		publishedAt: (/* @__PURE__ */ new Date()).toISOString(),
		isManual: true
	}];
	const updatedRepository = (project.contentRepository || []).map((d) => d.id === docId ? {
		...d,
		publishedEditions: updatedList,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : d);
	return {
		...project,
		contentRepository: updatedRepository,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
var ContentRepositoryView = ({ project, onUpdateProject, onOpenArticleEditor, onNavigateToViewer, onNavigateToArticles }) => {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
	const [repoViewMode, setRepoViewMode] = (0, import_react.useState)("cards");
	const [selectedDocIds, setSelectedDocIds] = (0, import_react.useState)([]);
	const [archivedEditions, setArchivedEditions] = (0, import_react.useState)([]);
	const [docForHistory, setDocForHistory] = (0, import_react.useState)(null);
	const [manualEditionInput, setManualEditionInput] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setArchivedEditions(getArchivedEditions());
		const onArchiveChange = () => setArchivedEditions(getArchivedEditions());
		window.addEventListener("montanha-archive-changed", onArchiveChange);
		return () => window.removeEventListener("montanha-archive-changed", onArchiveChange);
	}, []);
	const [isDraftEditorOpen, setIsDraftEditorOpen] = (0, import_react.useState)(false);
	const [editingDraftId, setEditingDraftId] = (0, import_react.useState)(null);
	const [draftTitle, setDraftTitle] = (0, import_react.useState)("");
	const [draftContent, setDraftContent] = (0, import_react.useState)("");
	const [draftCategory, setDraftCategory] = (0, import_react.useState)("MONTANHA METHOD");
	const [draftPublishedEditions, setDraftPublishedEditions] = (0, import_react.useState)([]);
	const [newEdTagInput, setNewEdTagInput] = (0, import_react.useState)("");
	const [isAnalyzing, setIsAnalyzing] = (0, import_react.useState)(false);
	const [analyzingDocId, setAnalyzingDocId] = (0, import_react.useState)(null);
	const [analysisResult, setAnalysisResult] = (0, import_react.useState)(null);
	const [selectedSourceDoc, setSelectedSourceDoc] = (0, import_react.useState)(null);
	const [isApprovalModalOpen, setIsApprovalModalOpen] = (0, import_react.useState)(false);
	const [isPdfModalOpen, setIsPdfModalOpen] = (0, import_react.useState)(false);
	const [previewDoc, setPreviewDoc] = (0, import_react.useState)(null);
	const [docToDelete, setDocToDelete] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const [driveStatus, setDriveStatus] = (0, import_react.useState)(() => getGoogleDriveStatus());
	const [isSyncingDrive, setIsSyncingDrive] = (0, import_react.useState)(false);
	const [isPullingDrive, setIsPullingDrive] = (0, import_react.useState)(false);
	const [driveFeedback, setDriveFeedback] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const handleDriveChange = () => setDriveStatus(getGoogleDriveStatus());
		window.addEventListener("montanha-gdrive-status-changed", handleDriveChange);
		return () => window.removeEventListener("montanha-gdrive-status-changed", handleDriveChange);
	}, []);
	const handleConnectDrive = async () => {
		setIsSyncingDrive(true);
		setDriveFeedback(null);
		try {
			const res = await connectGoogleDrive();
			if (res.success) {
				setDriveFeedback(`✓ Conectado ao Google Drive (${res.email})! Sincronizando acervo...`);
				await syncProjectToGoogleDrive(project);
				setDriveFeedback(`✓ Conectado e acervo sincronizado com "${DEDICATED_FOLDER_NAME}"!`);
			} else setDriveFeedback(`Aviso: ${res.error || "Não foi possível conectar."}`);
		} catch (e) {
			setDriveFeedback(`Erro ao conectar: ${e?.message || e}`);
		} finally {
			setIsSyncingDrive(false);
			setDriveStatus(getGoogleDriveStatus());
		}
	};
	const handleSyncToDrive = async () => {
		setIsSyncingDrive(true);
		setDriveFeedback(null);
		try {
			const res = await syncProjectToGoogleDrive(project);
			if (res.success) {
				const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR");
				setDriveFeedback(`✓ Acervo salvo no Google Drive às ${time}! (${project.contentRepository?.length || 0} textos)`);
			} else setDriveFeedback(`Falha ao salvar no Drive: ${res.error}`);
		} catch (e) {
			setDriveFeedback(`Erro: ${e?.message || e}`);
		} finally {
			setIsSyncingDrive(false);
		}
	};
	const handlePullFromDrive = async () => {
		setIsPullingDrive(true);
		setDriveFeedback(null);
		try {
			const result = await pullNewTextsFromGoogleDrive(project.contentRepository || []);
			let updatedRepo = [...project.contentRepository || []];
			if (result.updatedDocs.length > 0) {
				const updateMap = new Map(result.updatedDocs.map((d) => [d.id, d]));
				updatedRepo = updatedRepo.map((d) => updateMap.get(d.id) || d);
			}
			if (result.newDocs.length > 0) updatedRepo = [...result.newDocs, ...updatedRepo];
			if (result.newDocs.length > 0 || result.updatedDocs.length > 0) {
				onUpdateProject({
					...project,
					contentRepository: updatedRepo,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				});
				setDriveFeedback(`✓ Puxado do Drive com sucesso: ${result.newDocs.length} novo(s) texto(s), ${result.updatedDocs.length} atualizado(s)!`);
			} else setDriveFeedback("✓ Pasta do Google Drive em dia. Nenhum novo arquivo encontrado.");
		} catch (e) {
			setDriveFeedback(`Erro ao puxar do Drive: ${e?.message || e}`);
		} finally {
			setIsPullingDrive(false);
		}
	};
	const documents = project.contentRepository || [];
	const docsWithTracker = (0, import_react.useMemo)(() => {
		return documents.map((doc) => {
			return {
				doc,
				tracker: getDocumentUsageTracker(doc, project, archivedEditions)
			};
		});
	}, [
		documents,
		project,
		archivedEditions
	]);
	const unusedCount = docsWithTracker.filter((item) => item.tracker.isUnusedDraft).length;
	const currentCount = docsWithTracker.filter((item) => item.tracker.isInCurrentMagazine).length;
	const previousCount = docsWithTracker.filter((item) => item.tracker.previousEditions.length > 0).length;
	const filteredDocsWithTracker = docsWithTracker.filter(({ doc, tracker }) => {
		if (!(doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.rawContent.toLowerCase().includes(searchQuery.toLowerCase()) || doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase()))) return false;
		if (filterStatus === "all") return true;
		if (filterStatus === "unused" || filterStatus === "draft") return filterStatus === "unused" ? tracker.isUnusedDraft : !tracker.isInCurrentMagazine;
		if (filterStatus === "current" || filterStatus === "published") return tracker.isInCurrentMagazine;
		if (filterStatus === "previous") return tracker.previousEditions.length > 0;
		return true;
	});
	const getDocMagazineLink = (doc) => {
		const article = project.articles.find((a) => a.sourceDocId && a.sourceDocId === doc.id || a.title.toLowerCase().trim() === doc.title.toLowerCase().trim());
		return {
			isInMagazine: !!article,
			article
		};
	};
	const handleFileUpload = (e) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const fileList = Array.from(files);
		if (fileList.some((f) => f.name.toLowerCase().endsWith(".pdf"))) {
			setIsPdfModalOpen(true);
			if (fileInputRef.current) fileInputRef.current.value = "";
			return;
		}
		const newDocsToAdd = [];
		let processedCount = 0;
		fileList.forEach((file) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				const textContent = event.target?.result || "";
				if (textContent.trim()) {
					const wordCount = countWords(textContent);
					const autoTitle = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim().toUpperCase();
					const newDoc = {
						id: "doc-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
						title: autoTitle || "NOVO DOCUMENTO IMPORTADO",
						rawContent: textContent,
						category: "GERAL",
						sourceFileName: file.name,
						wordCount,
						status: "draft",
						createdAt: (/* @__PURE__ */ new Date()).toISOString(),
						updatedAt: (/* @__PURE__ */ new Date()).toISOString()
					};
					newDocsToAdd.push(newDoc);
				}
				processedCount++;
				if (processedCount === fileList.length && newDocsToAdd.length > 0) {
					const updatedRepo = [...newDocsToAdd, ...project.contentRepository || []];
					const updatedProj = {
						...project,
						contentRepository: updatedRepo,
						updatedAt: (/* @__PURE__ */ new Date()).toISOString()
					};
					onUpdateProject(updatedProj);
					if (driveStatus.isConnected) syncProjectToGoogleDrive(updatedProj).then((res) => {
						if (res.success) setDriveFeedback(`✓ ${newDocsToAdd.length} texto(s) importado(s) e sincronizado(s) no Google Drive!`);
					});
				}
			};
			reader.readAsText(file);
		});
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const handleOpenNewDraft = () => {
		setEditingDraftId(null);
		setDraftTitle("");
		setDraftContent("");
		setDraftCategory("MONTANHA METHOD");
		setDraftPublishedEditions([]);
		setNewEdTagInput("");
		setIsDraftEditorOpen(true);
	};
	const handleEditDraft = (doc) => {
		setEditingDraftId(doc.id);
		setDraftTitle(doc.title);
		setDraftContent(doc.rawContent);
		setDraftCategory(doc.category || "MONTANHA METHOD");
		setDraftPublishedEditions((doc.publishedEditions || []).map((e) => e.editionNumber));
		setNewEdTagInput("");
		setIsDraftEditorOpen(true);
	};
	const handleSaveDraft = () => {
		if (!draftTitle.trim() || !draftContent.trim()) {
			alert("Por favor, preencha o título e o conteúdo do rascunho.");
			return;
		}
		const wordCount = countWords(draftContent);
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const publishedEditionsRecords = draftPublishedEditions.map((edNum) => ({
			editionNumber: edNum,
			editionTitle: `Edição #${edNum}`,
			isManual: true,
			publishedAt: now
		}));
		let updatedList;
		if (editingDraftId) updatedList = documents.map((d) => d.id === editingDraftId ? {
			...d,
			title: draftTitle,
			category: draftCategory,
			rawContent: draftContent,
			wordCount,
			publishedEditions: publishedEditionsRecords,
			updatedAt: now
		} : d);
		else updatedList = [{
			id: "doc-" + Date.now(),
			title: draftTitle,
			category: draftCategory,
			rawContent: draftContent,
			wordCount,
			status: "draft",
			publishedEditions: publishedEditionsRecords,
			createdAt: now,
			updatedAt: now
		}, ...documents];
		onUpdateProject({
			...project,
			contentRepository: updatedList,
			updatedAt: now
		});
		if (driveStatus.isConnected) {
			const savedDoc = updatedList.find((d) => editingDraftId ? d.id === editingDraftId : d.title === draftTitle);
			if (savedDoc) uploadSingleDocumentToGoogleDrive(savedDoc).then((ok) => {
				if (ok) setDriveFeedback(`✓ Rascunho "${savedDoc.title}" sincronizado no Google Drive!`);
			});
		}
		setIsDraftEditorOpen(false);
	};
	const handleConfirmDeleteDoc = () => {
		if (!docToDelete) return;
		const targetId = docToDelete.id;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		onUpdateProject({
			...project,
			contentRepository: documents.filter((d) => d.id !== targetId),
			updatedAt: now
		});
		setDocToDelete(null);
	};
	const handleTriggerAiAnalysis = async (doc) => {
		setIsAnalyzing(true);
		setAnalyzingDocId(doc.id);
		setSelectedSourceDoc(doc);
		try {
			const result = await analyzeAndDiagramEditorialText(doc.rawContent, {
				originalTitle: doc.title,
				...doc.category ? { originalCategory: doc.category } : {}
			});
			setAnalysisResult(result);
			setIsApprovalModalOpen(true);
		} catch (err) {
			alert("Erro na análise por IA: " + err.message);
		} finally {
			setIsAnalyzing(false);
			setAnalyzingDocId(null);
		}
	};
	const handleRemoveFromMagazine = (doc) => {
		const { article } = getDocMagazineLink(doc);
		const updatedArticles = article ? project.articles.filter((a) => a.id !== article.id) : project.articles;
		const updatedDocs = documents.map((d) => d.id === doc.id ? {
			...d,
			status: "draft",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d);
		onUpdateProject({
			...project,
			articles: updatedArticles,
			contentRepository: updatedDocs,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	};
	const handleDirectAddToMagazine = (doc) => {
		const { isInMagazine } = getDocMagazineLink(doc);
		if (isInMagazine) {
			alert("Este artigo já está inserido na revista.");
			return;
		}
		const newArt = {
			id: "art-" + Date.now(),
			sourceDocId: doc.id,
			title: doc.title,
			subtitle: `Artigo do acervo editorial // ${doc.category || "Alta Performance"}.`,
			category: doc.category || "MONTANHA METHOD",
			author: "Coach Montanha",
			authorBio: "Master Coach & Fundador",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
			heroImageCaption: "Foto editorial // Montanha Media",
			content: doc.rawContent,
			pullQuotes: [],
			keyTakeaways: [],
			layoutTemplate: doc.wordCount > 650 ? "editorial-lead" : "two-column-quote",
			pageSpan: calculateRequiredArticlePages({
				content: doc.rawContent,
				heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
			}),
			quotePlacement: "end",
			textDensity: "normal",
			tags: [doc.category || "Geral", "Alta Performance"],
			estimatedReadTime: Math.max(1, Math.round(doc.wordCount / 130)),
			featuredOnCover: false,
			enabled: true
		};
		const updatedArticles = [...project.articles, newArt];
		const updatedDocs = documents.map((d) => d.id === doc.id ? {
			...d,
			status: "published",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d);
		onUpdateProject({
			...project,
			articles: updatedArticles,
			contentRepository: updatedDocs,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	};
	const handleApproveArticle = (newArticle, sourceDocId) => {
		const finalDocId = sourceDocId || selectedSourceDoc?.id;
		const artWithSource = {
			...newArticle,
			sourceDocId: finalDocId
		};
		const updatedArticles = [...project.articles, artWithSource];
		const updatedDocs = finalDocId ? documents.map((d) => d.id === finalDocId ? {
			...d,
			status: "published",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d) : documents;
		onUpdateProject({
			...project,
			articles: updatedArticles,
			contentRepository: updatedDocs,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		if (onNavigateToArticles) onNavigateToArticles();
		else if (onNavigateToViewer) onNavigateToViewer();
	};
	const handleBulkAddToMagazine = (selectedItems) => {
		const toAdd = selectedItems.filter((item) => !item.tracker.isInCurrentMagazine);
		if (toAdd.length === 0) {
			alert("Todos os textos selecionados já estão na revista atual.");
			return;
		}
		const newArticles = toAdd.map(({ doc }) => ({
			id: "art-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
			sourceDocId: doc.id,
			title: doc.title,
			subtitle: `Artigo do acervo editorial // ${doc.category || "Alta Performance"}.`,
			category: doc.category || "MONTANHA METHOD",
			author: "Coach Montanha",
			authorBio: "Master Coach & Fundador",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
			heroImageCaption: "Foto editorial // Montanha Media",
			content: doc.rawContent,
			pullQuotes: [],
			keyTakeaways: [],
			layoutTemplate: doc.wordCount > 650 ? "editorial-lead" : "two-column-quote",
			pageSpan: calculateRequiredArticlePages({
				content: doc.rawContent,
				heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
			}),
			quotePlacement: "end",
			textDensity: "normal",
			tags: [doc.category || "Geral", "Alta Performance"],
			estimatedReadTime: Math.max(1, Math.round(doc.wordCount / 130)),
			featuredOnCover: false,
			enabled: true
		}));
		const updatedArticles = [...project.articles, ...newArticles];
		const addedDocIds = new Set(toAdd.map((item) => item.doc.id));
		const updatedDocs = documents.map((d) => addedDocIds.has(d.id) ? {
			...d,
			status: "published",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d);
		onUpdateProject({
			...project,
			articles: updatedArticles,
			contentRepository: updatedDocs,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setSelectedDocIds([]);
		alert(`✓ ${toAdd.length} artigo(s) adicionado(s) à revista atual!`);
	};
	const handleBulkDeleteDocs = (selectedItems) => {
		if (!window.confirm(`Tem certeza que deseja excluir ${selectedItems.length} documento(s) selecionado(s) do acervo?\nEsta ação não poderá ser desfeita.`)) return;
		const idsToDelete = new Set(selectedItems.map((item) => item.doc.id));
		onUpdateProject({
			...project,
			contentRepository: documents.filter((d) => !idsToDelete.has(d.id)),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setSelectedDocIds([]);
	};
	const handleKanbanMove = (docId, targetColId) => {
		const item = docsWithTracker.find((d) => d.doc.id === docId);
		if (!item) return;
		const { doc, tracker } = item;
		if (targetColId === "current") {
			if (!tracker.isInCurrentMagazine) handleDirectAddToMagazine(doc);
		} else if (targetColId === "unused") {
			if (tracker.isInCurrentMagazine) handleRemoveFromMagazine(doc);
		} else if (targetColId === "previous") {
			if (tracker.isInCurrentMagazine) handleRemoveFromMagazine(doc);
			const edNum = project.editionNumber || "01";
			if (!(doc.publishedEditions || []).some((e) => e.editionNumber === edNum)) {
				const updatedList = documents.map((d) => d.id === doc.id ? {
					...d,
					publishedEditions: [...d.publishedEditions || [], {
						editionNumber: edNum,
						editionTitle: `Edição #${edNum}`,
						isManual: true,
						publishedAt: (/* @__PURE__ */ new Date()).toISOString()
					}],
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				} : d);
				onUpdateProject({
					...project,
					contentRepository: updatedList,
					updatedAt: (/* @__PURE__ */ new Date()).toISOString()
				});
			}
		}
	};
	const dataGridColumns = [
		{
			key: "title",
			header: "Artigo / Título",
			sortable: true,
			render: ({ doc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-xs uppercase tracking-tight text-zinc-100 hover:text-amber-400 transition-colors cursor-pointer",
					onClick: () => setPreviewDoc(doc),
					children: doc.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[10px] text-zinc-400",
					children: [doc.sourceFileName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 font-mono truncate max-w-[140px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3 text-amber-500" }),
							" ",
							doc.sourceFileName
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "line-clamp-1 italic text-zinc-500 max-w-sm",
						children: [doc.rawContent.slice(0, 80), "..."]
					})]
				})]
			})
		},
		{
			key: "category",
			header: "Categoria",
			width: "130px",
			sortable: true,
			render: ({ doc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
				children: doc.category || "GERAL"
			})
		},
		{
			key: "wordCount",
			header: "Volume",
			width: "110px",
			sortable: true,
			render: ({ doc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-amber-500",
					children: doc.wordCount
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-zinc-400 ml-1",
					children: "palavras"
				})]
			})
		},
		{
			key: "status",
			header: "Status Editorial",
			width: "170px",
			render: ({ tracker }) => {
				if (tracker.isInCurrentMagazine) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "bg-emerald-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NA REVISTA" })]
					}), tracker.currentPageNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700",
						children: ["PÁG. ", tracker.currentPageNumber.toString().padStart(2, "0")]
					})]
				});
				if (tracker.previousEditions.length > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "bg-indigo-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3 h-3 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ED. #", tracker.previousEditions.map((e) => e.editionNumber).join(", ")] })]
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "bg-zinc-800 text-zinc-300 font-mono text-[8.5px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 border border-zinc-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePen, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RASCUNHO DISPONÍVEL" })]
				});
			}
		},
		{
			key: "actions",
			header: "Ações",
			width: "210px",
			align: "right",
			render: ({ doc, tracker }) => {
				const isDocAnalyzing = isAnalyzing && analyzingDocId === doc.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-1.5",
					children: [
						tracker.isInCurrentMagazine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => handleRemoveFromMagazine(doc),
							className: "h-7 px-2 text-[10px] font-bold border border-amber-500/50 text-amber-400 hover:bg-amber-400/10 cursor-pointer",
							title: "Remover da revista",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "w-3 h-3 mr-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remover" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => handleDirectAddToMagazine(doc),
							className: "h-7 px-2 bg-amber-400 hover:bg-amber-500 text-black font-black text-[10px] border border-black cursor-pointer shadow-xs",
							title: "Inserir na revista atual",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3 mr-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Colocar" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => handleTriggerAiAnalysis(doc),
							disabled: isDocAnalyzing,
							className: "h-7 px-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-[10px] border border-zinc-700 cursor-pointer",
							title: "Diagramar com IA",
							children: isDocAnalyzing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3 h-3 animate-spin text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3 h-3 text-amber-400" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => handleEditDraft(doc),
							className: "p-1.5 opacity-70 hover:opacity-100 hover:bg-white/10 rounded cursor-pointer",
							title: "Editar rascunho",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDocToDelete(doc),
							className: "p-1.5 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded cursor-pointer",
							title: "Excluir documento",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
						})
					]
				});
			}
		}
	];
	const dataGridBulkActions = [{
		label: "Adicionar Selecionados à Revista",
		icon: Plus,
		variant: "default",
		className: "bg-amber-400 hover:bg-amber-500 text-black border-black",
		onClick: (selectedRows) => handleBulkAddToMagazine(selectedRows)
	}, {
		label: "Excluir Selecionados",
		icon: Trash2,
		variant: "destructive",
		onClick: (selectedRows) => handleBulkDeleteDocs(selectedRows)
	}];
	const kanbanColumns = [
		{
			id: "unused",
			title: "Rascunhos Inéditos",
			icon: Sparkles,
			badgeColor: "bg-amber-400 text-black border-black",
			description: "Textos livres no acervo, prontos para diagramar."
		},
		{
			id: "current",
			title: "Na Revista Atual",
			icon: Check,
			badgeColor: "bg-emerald-600 text-white border-emerald-800",
			description: `Matérias diagramadas na Edição #${project.editionNumber || "01"}.`
		},
		{
			id: "previous",
			title: "Edições Anteriores",
			icon: Archive,
			badgeColor: "bg-indigo-600 text-white border-indigo-800",
			description: "Artigos veiculados em edições passadas do acervo."
		}
	];
	const kanbanItems = filteredDocsWithTracker.map(({ doc, tracker }) => {
		let colId = "unused";
		if (tracker.isInCurrentMagazine) colId = "current";
		else if (tracker.previousEditions.length > 0) colId = "previous";
		return {
			id: doc.id,
			columnId: colId,
			title: doc.title,
			category: doc.category || "GERAL",
			meta: `${doc.wordCount} pal.`,
			description: doc.rawContent.slice(0, 110) + "...",
			rawItem: doc
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase",
							children: "ACERVO & REPOSITÓRIO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono font-bold text-amber-500 uppercase",
							children: "HUB DE TEXTOS, RASCUNHOS & AUTO-DIAGRAMAÇÃO"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-black uppercase tracking-tight",
						children: "Repositório de Arquivos & Gerador de Artigos por IA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Faça upload de textos ou escreva seus rascunhos. A IA analisa o volume de palavras, enquadra nas páginas e cria os artigos da revista para sua aprovação."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileInputRef,
							type: "file",
							multiple: true,
							accept: ".txt,.md,.json,.doc,.docx,.pdf",
							onChange: handleFileUpload,
							className: "hidden"
						}),
						driveStatus.isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-lg p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 font-mono text-[9px] font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }), "DRIVE CONECTADO"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: handleSyncToDrive,
									disabled: isSyncingDrive,
									className: "h-7 px-2 bg-amber-400 hover:bg-amber-500 text-black font-black text-[11px] border border-black cursor-pointer flex items-center gap-1",
									title: "Salvar acervo completo na pasta do Google Drive",
									children: [isSyncingDrive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salvar no Drive" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									onClick: handlePullFromDrive,
									disabled: isPullingDrive,
									className: "h-7 px-2 font-bold text-[11px] border cursor-pointer flex items-center gap-1 hover:bg-amber-400/20",
									title: "Importar novos textos colocados na pasta do Google Drive",
									children: [isPullingDrive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3 h-3 animate-spin text-amber-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudDownload, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Puxar do Drive" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => window.open(getGoogleDriveFolderUrl(driveStatus.folderId), "_blank"),
									className: "h-7 px-1.5 text-[11px] cursor-pointer",
									title: "Abrir pasta no Google Drive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-amber-500" })
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleConnectDrive,
							disabled: isSyncingDrive,
							variant: "outline",
							className: "h-9 border-2 border-current font-bold text-xs cursor-pointer flex items-center gap-1.5 hover:bg-amber-400/20",
							title: "Conectar ao Google Drive para sincronizar textos em nuvem entre aparelhos",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderSync, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Conectar Google Drive" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => setIsPdfModalOpen(true),
							className: "h-9 bg-zinc-950 hover:bg-zinc-900 text-amber-400 hover:text-amber-300 font-black text-xs border-2 border-amber-400 shadow-sm cursor-pointer flex items-center gap-1.5",
							title: "Importar PDF Inteligente com classificação e roteamento de matérias",
							"data-testid": "btn-open-pdf-router",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Importar PDF (Router)" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => fileInputRef.current?.click(),
							className: "h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload (.txt / .md)" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleOpenNewDraft,
							className: "h-9 bg-black hover:bg-slate-900 text-white font-bold text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Novo Rascunho" })]
						})
					]
				})]
			}),
			driveFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `p-3 rounded-lg border-2 text-xs font-bold flex items-center justify-between gap-2 shadow-xs ${driveFeedback.startsWith("Aviso") || driveFeedback.startsWith("Erro") ? "bg-amber-500/15 border-amber-500/50 text-amber-900 dark:text-amber-200" : "bg-emerald-500/10 border-emerald-500/40 text-emerald-800 dark:text-emerald-200"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [driveFeedback.startsWith("Aviso") || driveFeedback.startsWith("Erro") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-amber-600 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: driveFeedback })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setDriveFeedback(null),
					className: "text-[11px] underline opacity-70 hover:opacity-100 cursor-pointer",
					children: "fechar"
				})]
			}),
			isDraftEditorOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-md bg-amber-400/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-black uppercase tracking-tight flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: editingDraftId ? "Editar Rascunho no Acervo" : "Escrever Novo Rascunho no Acervo" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
							children: "REPOSITÓRIO"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold",
								children: "TÍTULO DO DOCUMENTO / RASCUNHO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draftTitle,
								onChange: (e) => setDraftTitle(e.target.value),
								placeholder: "Ex: Análise do Treino Nórdico de Remo e Bioenergética",
								className: "theme-app-input font-bold text-xs mt-1 border-2"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs font-bold",
							children: "CATEGORIA SUGERIDA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draftCategory,
							onChange: (e) => setDraftCategory(e.target.value.toUpperCase()),
							placeholder: "Ex: MONTANHA METHOD",
							className: "theme-app-input font-mono text-xs mt-1 border-2 font-bold text-amber-600"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-bold",
						children: "TEXTO COMPLETO DO RASCUNHO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draftContent,
						onChange: (e) => setDraftContent(e.target.value),
						placeholder: "Cole ou escreva o texto bruto aqui. Não se preocupe com formatação; a IA avaliará o volume e diagramará automaticamente...",
						className: "theme-app-input text-xs h-44 mt-1 border-2 leading-relaxed font-sans"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-lg border-2 theme-app-card-subtle space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3.5 h-3.5 text-indigo-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EDIÇÕES ANTERIORES EM QUE ESTE TEXTO JÁ FOI VEICULADO (OPCIONAL)" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-60 font-mono",
								children: "Para controle de textos já publicados no acervo"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [draftPublishedEditions.map((edNum, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "bg-indigo-600 text-white font-mono text-xs font-black px-2.5 py-1 rounded flex items-center gap-1.5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Edição #", edNum] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDraftPublishedEditions(draftPublishedEditions.filter((_, i) => i !== idx)),
									className: "hover:text-red-300 font-bold ml-1 cursor-pointer",
									title: "Remover edição",
									children: "×"
								})]
							}, idx)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: newEdTagInput,
									onChange: (e) => setNewEdTagInput(e.target.value),
									placeholder: "Ex: 01, 02...",
									className: "theme-app-input h-7 w-28 text-xs font-mono font-bold",
									onKeyDown: (e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											if (newEdTagInput.trim() && !draftPublishedEditions.includes(newEdTagInput.trim())) {
												setDraftPublishedEditions([...draftPublishedEditions, newEdTagInput.trim()]);
												setNewEdTagInput("");
											}
										}
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									onClick: () => {
										if (newEdTagInput.trim() && !draftPublishedEditions.includes(newEdTagInput.trim())) {
											setDraftPublishedEditions([...draftPublishedEditions, newEdTagInput.trim()]);
											setNewEdTagInput("");
										}
									},
									className: "h-7 px-2.5 text-[10px] font-bold bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer",
									children: "+ Adicionar"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-2 border-t",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-mono font-bold opacity-75",
							children: [
								"Volume: ",
								countWords(draftContent),
								" palavras"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setIsDraftEditorOpen(false),
								className: "h-8 font-bold text-xs border-2",
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleSaveDraft,
								className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs px-4 border-2 border-black shadow-xs cursor-pointer flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salvar no Acervo" })]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "stat-card-unused",
						onClick: () => setFilterStatus(filterStatus === "unused" ? "all" : "unused"),
						className: `p-4 rounded-xl border-2 text-left transition-all cursor-pointer shadow-xs ${filterStatus === "unused" ? "border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/30" : "theme-app-card hover:border-amber-400"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-mono font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "RASCUNHOS INÉDITOS"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black shadow-xs",
									children: unusedCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black tracking-tight",
								children: [
									unusedCount,
									" ",
									unusedCount === 1 ? "texto disponível" : "textos disponíveis"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] opacity-75 mt-1 leading-snug",
								children: "Nunca utilizados em nenhuma edição. 100% livres para novas pautas."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "stat-card-current",
						onClick: () => setFilterStatus(filterStatus === "current" ? "all" : "current"),
						className: `p-4 rounded-xl border-2 text-left transition-all cursor-pointer shadow-xs ${filterStatus === "current" ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/30" : "theme-app-card hover:border-emerald-500"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-mono font-black uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 stroke-[3]" }), "NA REVISTA ATUAL"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs font-black px-2 py-0.5 rounded bg-emerald-600 text-white border border-emerald-800 shadow-xs",
									children: currentCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black tracking-tight",
								children: [
									currentCount,
									" ",
									currentCount === 1 ? "matéria diagramada" : "matérias diagramadas"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] opacity-75 mt-1 leading-snug",
								children: [
									"Atualmente na Edição #",
									project.editionNumber || "01",
									". Prontas para publicação."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "stat-card-previous",
						onClick: () => setFilterStatus(filterStatus === "previous" ? "all" : "previous"),
						className: `p-4 rounded-xl border-2 text-left transition-all cursor-pointer shadow-xs ${filterStatus === "previous" ? "border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/30" : "theme-app-card hover:border-indigo-500"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-mono font-black uppercase text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3.5 h-3.5" }), "EDIÇÕES ANTERIORES"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs font-black px-2 py-0.5 rounded bg-indigo-600 text-white border border-indigo-800 shadow-xs",
									children: previousCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black tracking-tight",
								children: [
									previousCount,
									" ",
									previousCount === 1 ? "artigo veiculado" : "artigos veiculados"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] opacity-75 mt-1 leading-snug",
								children: "Publicados em edições passadas do acervo. Reutilizáveis a qualquer momento."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-2.5 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Pesquisar nos textos do repositório...",
						className: "theme-app-input pl-9 text-xs h-9 border-2 w-full"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 shrink-0 flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold opacity-75 uppercase mr-1",
							children: "Status:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-testid": "filter-tab-all",
							onClick: () => setFilterStatus("all"),
							className: `px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer ${filterStatus === "all" ? "bg-amber-400 text-black font-black border-black shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"}`,
							children: [
								"Todos (",
								documents.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-testid": "filter-tab-draft",
							onClick: () => setFilterStatus("unused"),
							className: `px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${filterStatus === "unused" || filterStatus === "draft" ? "bg-amber-400 text-black font-black border-black shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-amber-600 dark:text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Rascunhos Disponíveis (",
								unusedCount,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-testid": "filter-tab-current",
							onClick: () => setFilterStatus("current"),
							className: `px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${filterStatus === "current" || filterStatus === "published" ? "bg-emerald-600 text-white font-black border-emerald-800 shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Na Revista (",
								currentCount,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-testid": "filter-tab-previous",
							onClick: () => setFilterStatus("previous"),
							className: `px-3 py-1 rounded text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${filterStatus === "previous" ? "bg-indigo-600 text-white font-black border-indigo-800 shadow-xs" : "theme-app-card-subtle opacity-70 hover:opacity-100"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3 h-3 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Em Edições Anteriores (",
								previousCount,
								")"
							] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-mono font-bold uppercase text-zinc-400",
						children: [
							filteredDocsWithTracker.length,
							" ",
							filteredDocsWithTracker.length === 1 ? "texto listado" : "textos listados"
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold opacity-75 uppercase mr-1",
						children: "Visualização:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-lg border-2 border-zinc-800 p-0.5 bg-zinc-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-testid": "repo-view-cards",
								onClick: () => setRepoViewMode("cards"),
								className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${repoViewMode === "cards" ? "bg-amber-400 text-black font-black shadow-xs" : "text-zinc-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cards" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-testid": "repo-view-table",
								onClick: () => setRepoViewMode("table"),
								className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${repoViewMode === "table" ? "bg-amber-400 text-black font-black shadow-xs" : "text-zinc-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tabela" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-testid": "repo-view-kanban",
								onClick: () => setRepoViewMode("kanban"),
								className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${repoViewMode === "kanban" ? "bg-amber-400 text-black font-black shadow-xs" : "text-zinc-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kanban" })]
							})
						]
					})]
				})]
			}),
			filteredDocsWithTracker.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-10 rounded-xl border-2 text-center space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-12 h-12 text-amber-500 mx-auto opacity-50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-black uppercase",
						children: "Nenhum documento encontrado no acervo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs opacity-75 max-w-md mx-auto",
						children: [
							"Faça upload de arquivos ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".txt" }),
							" / ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".md" }),
							" do seu computador ou crie seu primeiro rascunho de artigo para a IA analisar e diagramar."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-2 flex justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => fileInputRef.current?.click(),
							className: "bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3.5 h-3.5 mr-1" }), "Upload de Arquivo"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleOpenNewDraft,
							variant: "outline",
							className: "font-bold text-xs border-2 border-current cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 mr-1" }), "Escrever Rascunho"]
						})]
					})
				]
			}) : repoViewMode === "table" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataGrid, {
				data: filteredDocsWithTracker,
				columns: dataGridColumns,
				keyExtractor: (item) => item.doc.id,
				selectedIds: selectedDocIds,
				onSelectionChange: setSelectedDocIds,
				bulkActions: dataGridBulkActions
			}) : repoViewMode === "kanban" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kanban, {
				columns: kanbanColumns,
				items: kanbanItems,
				onMoveItem: handleKanbanMove,
				onItemClick: (item) => {
					const found = filteredDocsWithTracker.find((d) => d.doc.id === item.id);
					if (found) setPreviewDoc(found.doc);
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: filteredDocsWithTracker.map(({ doc, tracker }) => {
					const isDocAnalyzing = isAnalyzing && analyzingDocId === doc.id;
					let pageBadgeText = "";
					if (tracker.currentArticle) pageBadgeText = tracker.currentPageNumber ? `PÁG. ${tracker.currentPageNumber.toString().padStart(2, "0")}` : "PÁG. --";
					const cardBorderClass = tracker.isInCurrentMagazine ? "border-emerald-500/70 bg-emerald-500/5 ring-1 ring-emerald-500/20" : tracker.previousEditions.length > 0 ? "border-indigo-400/70 bg-indigo-500/5 ring-1 ring-indigo-400/20" : "border-slate-300 dark:border-slate-700 hover:border-black dark:hover:border-white";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col justify-between space-y-3 shadow-sm ${cardBorderClass}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 mb-1.5 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
										children: doc.category || "GERAL"
									}), doc.sourceFileName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[9px] font-mono opacity-60 flex items-center gap-1 truncate max-w-[130px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: doc.sourceFileName
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5 flex-wrap justify-end",
									children: tracker.isInCurrentMagazine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "bg-emerald-600 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PUBLICADO NA REVISTA" })]
											}),
											pageBadgeText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700",
												children: pageBadgeText
											}),
											tracker.previousEditions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setDocForHistory(doc),
												className: "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono text-[8px] font-bold px-1.5 py-0.5 rounded uppercase border border-indigo-300 dark:border-indigo-700 flex items-center gap-1 hover:bg-indigo-200 cursor-pointer",
												title: "Ver histórico em edições anteriores",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-2.5 h-2.5 text-indigo-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Também na ", tracker.previousEditions.map((e) => `Ed. #${e.editionNumber}`).join(", ")] })]
											}),
											tracker.currentArticle?.enabled === false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "bg-amber-500/20 text-amber-700 dark:text-amber-400 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded uppercase border border-amber-500/40",
												children: "PAUSADO"
											})
										]
									}) : tracker.previousEditions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setDocForHistory(doc),
											className: "bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-[8.5px] font-black px-2 py-0.5 rounded uppercase flex items-center gap-1 shadow-xs cursor-pointer",
											title: "Clique para ver o histórico desta matéria nas edições anteriores",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3 h-3 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["PUBLICADO NA ", tracker.previousEditions.map((e) => `ED. #${e.editionNumber}`).join(", ")] })]
										}), tracker.previousEditions[0]?.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[8px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700",
											children: tracker.previousEditions[0].date
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[8.5px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 border border-slate-300 dark:border-slate-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePen, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RASCUNHO DISPONÍVEL" })]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-black text-sm uppercase tracking-tight leading-snug",
								children: doc.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs opacity-75 line-clamp-3 mt-1.5 leading-relaxed",
								children: doc.rawContent
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 font-mono text-[10px] font-bold text-amber-600",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3" }),
											doc.wordCount,
											" palavras"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
											"~",
											Math.max(1, Math.round(doc.wordCount / 130)),
											" min"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-60",
										children: doc.wordCount > 550 ? "2 Págs Sugeridas" : "1 Pág Sugerida"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 flex-wrap justify-end",
								children: [
									tracker.isInCurrentMagazine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleRemoveFromMagazine(doc),
										className: "h-7 px-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-800 rounded font-bold text-[10px] flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-xs",
										title: "Remover esta matéria da revista e retornar para status de Rascunho no Acervo",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remover da Revista" })]
									}), tracker.currentArticle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => onOpenArticleEditor(tracker.currentArticle),
										className: "h-7 px-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded font-bold text-[10px] flex items-center gap-1 cursor-pointer transition-all shadow-xs",
										title: "Abrir o editor da matéria diagramada na revista",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ver Matéria" })]
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => handleDirectAddToMagazine(doc),
										className: `h-7 px-2.5 font-black text-[10px] border shadow-xs cursor-pointer flex items-center gap-1 shrink-0 ${tracker.previousEditions.length > 0 ? "bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-900" : "bg-amber-400 hover:bg-amber-500 text-black border-black"}`,
										title: tracker.previousEditions.length > 0 ? "Reutilizar artigo de edição anterior na revista atual" : "Inserir diretamente como matéria na revista atual",
										children: [tracker.previousEditions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3 h-3 text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3 h-3 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tracker.previousEditions.length > 0 ? "Reutilizar na Revista" : "Colocar na Revista" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => handleTriggerAiAnalysis(doc),
										disabled: isDocAnalyzing,
										className: "h-7 px-2.5 bg-black hover:bg-slate-900 text-white font-bold text-[10px] border border-black shadow-xs cursor-pointer flex items-center gap-1 shrink-0",
										title: isDocAnalyzing ? "Analisando com IA..." : "Diagramar com IA",
										children: [isDocAnalyzing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3 h-3 animate-spin text-amber-400" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3 h-3 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isDocAnalyzing ? "Analisando..." : "Diagramar IA" })]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5 hidden sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDoc(doc),
										className: "p-1.5 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded cursor-pointer",
										title: "Pré-visualizar / Ler Texto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5 text-amber-600" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDocForHistory(doc),
										className: "p-1.5 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded cursor-pointer",
										title: "Ver / Gerenciar Histórico de Publicações",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleEditDraft(doc),
										className: "p-1.5 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded cursor-pointer",
										title: "Editar Rascunho no Acervo",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setDocToDelete(doc),
										className: "p-1.5 text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded cursor-pointer",
										title: "Excluir Documento do Acervo",
										"aria-label": "Excluir Documento",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
									})
								]
							})]
						})]
					}, doc.id);
				})
			}),
			previewDoc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(previewDoc),
				onOpenChange: () => setPreviewDoc(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "theme-app-card max-w-2xl max-h-[85vh] overflow-y-auto p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "border-b-2 border-current pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
									children: previewDoc.category || "GERAL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-mono opacity-75 font-bold",
									children: [
										previewDoc.wordCount,
										" PALAVRAS • ~",
										Math.max(1, Math.round(previewDoc.wordCount / 130)),
										" MIN DE LEITURA"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-base sm:text-lg font-black uppercase tracking-tight mt-1",
								children: previewDoc.title
							})]
						}),
						(() => {
							const tracker = getDocumentUsageTracker(previewDoc, project, archivedEditions);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-3 p-3 rounded-lg border-2 flex items-center justify-between text-xs ${tracker.isInCurrentMagazine ? "border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300" : tracker.previousEditions.length > 0 ? "border-indigo-500 bg-indigo-500/10 text-indigo-800 dark:text-indigo-300" : "border-amber-500 bg-amber-500/10 text-amber-800 dark:text-amber-300"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [tracker.isInCurrentMagazine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 stroke-[3] text-emerald-600" }) : tracker.previousEditions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-4 h-4 text-indigo-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-black uppercase tracking-wide",
										children: ["Status Editorial: ", tracker.statusLabel]
									})]
								}), tracker.currentPageNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono font-bold text-[10px]",
									children: ["Página ", tracker.currentPageNumber]
								})]
							});
						})(),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-4 theme-app-card-subtle p-4 rounded-xl border-2 max-h-[50vh] overflow-y-auto custom-scrollbar font-sans text-xs leading-relaxed whitespace-pre-wrap",
							children: previewDoc.rawContent
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "border-t pt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => {
									const doc = previewDoc;
									setPreviewDoc(null);
									handleEditDraft(doc);
								},
								className: "h-8 text-xs font-bold border-2 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Editar Rascunho" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => setPreviewDoc(null),
									className: "h-8 text-xs font-bold border-2",
									children: "Fechar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: () => {
										const doc = previewDoc;
										setPreviewDoc(null);
										handleTriggerAiAnalysis(doc);
									},
									className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border border-black shadow-xs cursor-pointer flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3.5 h-3.5 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚡ Diagramar com IA" })]
								})]
							})]
						})
					]
				})
			}),
			docForHistory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(docForHistory),
				onOpenChange: () => setDocForHistory(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "theme-app-card max-w-lg p-5 font-sans border-2 border-black shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "border-b-2 pb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
										children: "CONTROLE DE PAUTA"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono opacity-70 font-bold",
										children: [docForHistory.wordCount, " PALAVRAS"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
									className: "text-base font-black uppercase tracking-tight mt-1 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-4 h-4 text-indigo-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Histórico Editorial & Publicações" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs opacity-75 font-semibold line-clamp-1",
									children: [
										"\"",
										docForHistory.title,
										"\""
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-3 space-y-4 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg border-2 theme-app-card-subtle space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono font-black uppercase tracking-wide opacity-75",
										children: [
											"EDIÇÃO ATUAL (# ",
											project.editionNumber || "01",
											")"
										]
									}), (() => {
										const tracker = getDocumentUsageTracker(docForHistory, project, archivedEditions);
										if (tracker.isInCurrentMagazine) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 stroke-[3]" }),
													"Atualmente na Revista (",
													tracker.currentPageNumber ? `Pág. ${tracker.currentPageNumber}` : "Diagramado",
													")"
												]
											}), tracker.currentArticle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												onClick: () => {
													const art = tracker.currentArticle;
													setDocForHistory(null);
													if (art) onOpenArticleEditor(art);
												},
												className: "h-7 text-[10px] font-bold",
												children: "Abrir no Editor"
											})]
										});
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "opacity-75 font-medium",
												children: "Não está diagramado na edição atual."
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												onClick: () => {
													handleDirectAddToMagazine(docForHistory);
													setDocForHistory(null);
												},
												className: "h-7 bg-amber-400 hover:bg-amber-500 text-black font-black text-[10px] border border-black shadow-xs cursor-pointer",
												children: "Colocar na Edição Atual"
											})]
										});
									})()]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono font-black uppercase tracking-wide opacity-75 flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-3.5 h-3.5 text-indigo-500" }), "PUBLICAÇÕES EM EDIÇÕES ANTERIORES"]
									}), (() => {
										const tracker = getDocumentUsageTracker(docForHistory, project, archivedEditions);
										if (tracker.previousEditions.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 rounded-lg border theme-app-card-subtle text-[11px] opacity-75",
											children: [
												"Este artigo ainda não foi veiculado em nenhuma edição anterior. É um ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "rascunho 100% inédito" }),
												"."
											]
										});
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar",
											children: tracker.previousEditions.map((ed, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-2.5 rounded-lg border-2 border-indigo-400/40 bg-indigo-500/5 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-black text-xs uppercase flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "bg-indigo-600 text-white font-mono text-[9px] px-1.5 py-0.2 rounded",
														children: ["ED. #", ed.editionNumber]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ed.editionTitle })]
												}), ed.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] opacity-70 font-mono mt-0.5",
													children: ["Publicado em: ", ed.date]
												})] }), ed.isManual && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "sm",
													onClick: () => {
														onUpdateProject(toggleDocPublishedEdition(docForHistory.id, project, { editionNumber: ed.editionNumber }));
													},
													className: "h-6 px-2 text-red-500 hover:text-red-700 text-[10px]",
													title: "Remover este registro manual",
													children: "Remover"
												})]
											}, idx))
										});
									})()]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg border theme-app-card-subtle space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[10px] font-black uppercase",
											children: "Registrar Edição Anterior Manualmente"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: manualEditionInput,
												onChange: (e) => setManualEditionInput(e.target.value),
												placeholder: "Ex: 01, 00, Especial 2025",
												className: "h-8 text-xs font-mono font-bold",
												onKeyDown: (e) => {
													if (e.key === "Enter" && manualEditionInput.trim()) {
														e.preventDefault();
														onUpdateProject(toggleDocPublishedEdition(docForHistory.id, project, { editionNumber: manualEditionInput.trim() }));
														setManualEditionInput("");
													}
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												onClick: () => {
													if (!manualEditionInput.trim()) return;
													onUpdateProject(toggleDocPublishedEdition(docForHistory.id, project, { editionNumber: manualEditionInput.trim() }));
													setManualEditionInput("");
												},
												className: "h-8 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 cursor-pointer",
												children: "+ Registrar"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] opacity-60",
											children: "Ideal para textos que já foram publicados em edições impressas anteriores à criação desta ferramenta."
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
							className: "border-t pt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setDocForHistory(null),
								className: "h-8 text-xs font-bold",
								children: "Fechar"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiApprovalModal, {
				isOpen: isApprovalModalOpen,
				onClose: () => setIsApprovalModalOpen(false),
				analysis: analysisResult,
				sourceDoc: selectedSourceDoc,
				onApprove: handleApproveArticle,
				onOpenAdvancedEditor: (draftArticle) => {
					handleApproveArticle(draftArticle, selectedSourceDoc?.id);
					onOpenArticleEditor(draftArticle);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfImportModal, {
				isOpen: isPdfModalOpen,
				onClose: () => setIsPdfModalOpen(false),
				project,
				onUpdateProject,
				onOpenArticleEditor,
				onNavigateToViewer,
				onSuccessMessage: (msg) => setDriveFeedback(msg)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(docToDelete),
				onOpenChange: () => setDocToDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "theme-app-card max-w-md p-5 font-sans border-2 border-black shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "border-b-2 pb-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-base font-black flex items-center gap-2 text-red-600 uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Excluir Documento do Acervo" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-3 text-xs space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "opacity-90 leading-relaxed",
								children: [
									"Tem certeza que deseja remover o documento ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										"\"",
										docToDelete?.title,
										"\""
									] }),
									" do acervo editorial?"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2.5 rounded bg-red-500/10 border border-red-500/20 text-[11px] text-red-700 dark:text-red-300 font-medium",
								children: "Esta ação removerá o texto do repositório. Artigos que já foram diagramados e publicados na revista permanecerão salvos normalmente."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "gap-2 sm:gap-0 border-t pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setDocToDelete(null),
								className: "h-8 font-bold text-xs",
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: handleConfirmDeleteDoc,
								className: "h-8 bg-red-600 hover:bg-red-700 text-white font-black text-xs cursor-pointer shadow-xs",
								children: "Sim, Excluir Documento"
							})]
						})
					]
				})
			})
		]
	});
};
var ImportFromRepositoryModal = ({ isOpen, onClose, project, onImportWithAi, onImportDirect, onNavigateToAcervo }) => {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [filterMode, setFilterMode] = (0, import_react.useState)("all");
	const documents = project.contentRepository || [];
	const docsWithTracker = (0, import_react.useMemo)(() => {
		return documents.map((doc) => {
			return {
				doc,
				tracker: getDocumentUsageTracker(doc, project)
			};
		});
	}, [documents, project]);
	const unusedCount = docsWithTracker.filter((item) => item.tracker.isUnusedDraft).length;
	const currentCount = docsWithTracker.filter((item) => item.tracker.isInCurrentMagazine).length;
	const previousCount = docsWithTracker.filter((item) => item.tracker.previousEditions.length > 0).length;
	const filteredDocs = docsWithTracker.filter(({ doc, tracker }) => {
		if (!(doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.rawContent.toLowerCase().includes(searchQuery.toLowerCase()) || doc.category && doc.category.toLowerCase().includes(searchQuery.toLowerCase()))) return false;
		if (filterMode === "unused") return tracker.isUnusedDraft;
		if (filterMode === "current") return tracker.isInCurrentMagazine;
		if (filterMode === "previous") return tracker.previousEditions.length > 0;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "theme-app-card max-w-3xl max-h-[85vh] overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b-2 border-current pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-black flex items-center gap-2 uppercase tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Importar Artigo do Acervo Editorial" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
							children: [documents.length, " DOCUMENTOS NO ACERVO"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5",
						children: "Selecione um texto do seu banco de arquivos para auto-diagramar com IA ou carregar diretamente no editor da revista."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2.5 my-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-2.5 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Pesquisar nos artigos e rascunhos do acervo...",
							className: "theme-app-input pl-9 text-xs h-9 border-2 w-full"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold opacity-75 uppercase mr-1",
								children: "Filtrar:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFilterMode("all"),
								className: `px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer ${filterMode === "all" ? "bg-amber-400 text-black font-black border-black" : "opacity-70 hover:opacity-100"}`,
								children: [
									"Todos (",
									documents.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFilterMode("unused"),
								className: `px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${filterMode === "unused" ? "bg-amber-400 text-black font-black border-black" : "opacity-70 hover:opacity-100"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-2.5 h-2.5 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Inéditos (",
									unusedCount,
									")"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFilterMode("current"),
								className: `px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${filterMode === "current" ? "bg-emerald-600 text-white font-black border-emerald-800" : "opacity-70 hover:opacity-100"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-2.5 h-2.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Na Revista (",
									currentCount,
									")"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setFilterMode("previous"),
								className: `px-2.5 py-0.5 rounded text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1 ${filterMode === "previous" ? "bg-indigo-600 text-white font-black border-indigo-800" : "opacity-70 hover:opacity-100"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-2.5 h-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Edições Anteriores (",
									previousCount,
									")"
								] })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 my-2 max-h-[50vh] overflow-y-auto custom-scrollbar pr-1",
					children: documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card-subtle p-8 rounded-xl border-2 text-center space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-10 h-10 text-amber-500 mx-auto opacity-50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-black uppercase",
								children: "Seu acervo de textos está vazio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs opacity-75 max-w-sm mx-auto",
								children: [
									"Você ainda não adicionou nenhum documento ao acervo. Faça upload de arquivos ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".txt" }),
									" / ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: ".md" }),
									" ou crie novos rascunhos."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => {
										onClose();
										onNavigateToAcervo();
									},
									className: "bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black cursor-pointer shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ir para o Acervo & Textos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 ml-1" })]
								})
							})
						]
					}) : filteredDocs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center py-8 opacity-75 text-xs font-bold",
						children: "Nenhum texto corresponde aos filtros ativos."
					}) : filteredDocs.map(({ doc, tracker }) => {
						const cardBorder = tracker.isInCurrentMagazine ? "border-emerald-500/70 bg-emerald-500/5 ring-1 ring-emerald-500/20" : tracker.previousEditions.length > 0 ? "border-indigo-400/70 bg-indigo-500/5 ring-1 ring-indigo-400/20" : "";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col justify-between space-y-2.5 shadow-xs hover:border-amber-500 ${cardBorder}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase",
											children: doc.category || "GERAL"
										}), doc.sourceFileName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[9px] font-mono opacity-60 flex items-center gap-1 truncate max-w-[130px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: doc.sourceFileName
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[9.5px] font-bold text-amber-600 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3" }),
													doc.wordCount,
													" palavras"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
													"~",
													Math.max(1, Math.round(doc.wordCount / 130)),
													" min"
												]
											}),
											tracker.isInCurrentMagazine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "bg-emerald-600 text-white text-[8.5px] font-black px-2 py-0.5 rounded uppercase ml-1 flex items-center gap-1 shadow-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-2.5 h-2.5 stroke-[3]" }),
													"NA REVISTA ",
													tracker.currentPageNumber ? `(PÁG. ${tracker.currentPageNumber})` : ""
												]
											}) : tracker.previousEditions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "bg-indigo-600 text-white text-[8.5px] font-black px-2 py-0.5 rounded uppercase ml-1 flex items-center gap-1 shadow-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-2.5 h-2.5" }),
													"PUBLICADO NA ",
													tracker.previousEditions.map((e) => `ED. #${e.editionNumber}`).join(", ")
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[8.5px] font-bold px-2 py-0.5 rounded uppercase ml-1 border border-slate-300 dark:border-slate-700 flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-2.5 h-2.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "INÉDITO" })]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black text-sm uppercase tracking-tight leading-snug",
									children: doc.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs opacity-75 line-clamp-2 mt-1 leading-relaxed",
									children: doc.rawContent
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 border-t flex flex-wrap items-center justify-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => {
											onClose();
											onImportDirect(doc);
										},
										className: "h-8 text-xs font-bold border-2 border-current cursor-pointer flex items-center gap-1",
										children: [tracker.previousEditions.length > 0 && !tracker.isInCurrentMagazine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 text-indigo-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tracker.isInCurrentMagazine ? "Importar Novamente" : tracker.previousEditions.length > 0 ? "Reutilizar da Ed. Anterior" : "Importar Direto (Manual)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => {
											onClose();
											onImportWithAi(doc);
										},
										className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3.5 h-3.5 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["⚡ ", tracker.isInCurrentMagazine ? "Rediagramar com IA" : "Analisar & Diagramar com IA"] })]
									})]
								})
							]
						}, doc.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t pt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => {
							onClose();
							onNavigateToAcervo();
						},
						className: "text-xs font-bold hover:underline cursor-pointer flex items-center gap-1 text-amber-600",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerenciar / Fazer Upload no Acervo" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: onClose,
						className: "h-8 text-xs font-bold border-2",
						children: "Fechar"
					})]
				})
			]
		})
	});
};
var AUTH_STORAGE_KEY = "montanha_magazine_auth_state";
var DEFAULT_AUTH_DATA = {
	currentUser: null,
	users: [
		{
			id: "demo-user-1",
			name: "Coach Montanha Demo",
			email: "demo@montanha.com",
			passwordHash: "senha123",
			isPro: false,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		},
		{
			id: "demo-pro-user",
			name: "Assinante PRO",
			email: "pro@montanha.com",
			passwordHash: "senha123",
			isPro: true,
			proSince: (/* @__PURE__ */ new Date()).toISOString(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		},
		{
			id: "user-alberto-sarly",
			name: "Alberto Sarly",
			email: "albertosarly@gmail.com",
			passwordHash: "3862858747",
			isPro: true,
			proSince: (/* @__PURE__ */ new Date()).toISOString(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		}
	]
};
function getStoredAuthData() {
	if (typeof window === "undefined") return DEFAULT_AUTH_DATA;
	try {
		const raw = localStorage.getItem(AUTH_STORAGE_KEY);
		if (!raw) {
			localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(DEFAULT_AUTH_DATA));
			return DEFAULT_AUTH_DATA;
		}
		const parsed = JSON.parse(raw);
		if (!parsed.users.some((u) => u.email.toLowerCase() === "albertosarly@gmail.com")) {
			parsed.users.push({
				id: "user-alberto-sarly",
				name: "Alberto Sarly",
				email: "albertosarly@gmail.com",
				passwordHash: "3862858747",
				isPro: true,
				proSince: (/* @__PURE__ */ new Date()).toISOString(),
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(parsed));
		}
		return parsed;
	} catch {
		return DEFAULT_AUTH_DATA;
	}
}
function saveStoredAuthData(data) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
		window.dispatchEvent(new Event("montanha-auth-changed"));
	} catch (e) {
		console.error("Falha ao salvar dados de autenticação:", e);
	}
}
function getCurrentUser() {
	return getStoredAuthData().currentUser;
}
function registerUser(name, email, password) {
	const data = getStoredAuthData();
	const normalizedEmail = email.trim().toLowerCase();
	if (!name.trim()) return {
		success: false,
		error: "O nome completo é obrigatório."
	};
	if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) return {
		success: false,
		error: "Informe um e-mail válido."
	};
	if (!password || password.length < 6) return {
		success: false,
		error: "A senha deve conter no mínimo 6 caracteres."
	};
	if (data.users.find((u) => u.email.toLowerCase() === normalizedEmail)) return {
		success: false,
		error: "Este e-mail já está cadastrado. Faça login."
	};
	const newUser = {
		id: "user-" + Date.now(),
		name: name.trim(),
		email: normalizedEmail,
		passwordHash: password,
		isPro: false,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	data.users.push(newUser);
	data.currentUser = {
		id: newUser.id,
		name: newUser.name,
		email: newUser.email,
		isPro: newUser.isPro,
		createdAt: newUser.createdAt
	};
	saveStoredAuthData(data);
	return {
		success: true,
		user: data.currentUser
	};
}
function loginUser(email, password) {
	const data = getStoredAuthData();
	const normalizedEmail = email.trim().toLowerCase();
	if (!normalizedEmail) return {
		success: false,
		error: "Informe o seu e-mail."
	};
	if (!password) return {
		success: false,
		error: "Informe a sua senha."
	};
	const matched = data.users.find((u) => u.email.toLowerCase() === normalizedEmail);
	if (!matched) return {
		success: false,
		error: "Nenhuma conta cadastrada com este e-mail."
	};
	if (matched.passwordHash !== password) return {
		success: false,
		error: "Senha incorreta. Verifique suas credenciais."
	};
	const currentUser = {
		id: matched.id,
		name: matched.name,
		email: matched.email,
		isPro: matched.isPro,
		...matched.proSince ? { proSince: matched.proSince } : {},
		createdAt: matched.createdAt
	};
	data.currentUser = currentUser;
	saveStoredAuthData(data);
	return {
		success: true,
		user: currentUser
	};
}
function upgradeUserToPro(cardNumber, holder, expiry, cvv) {
	const cleanCard = cardNumber.replace(/\s+/g, "");
	if (!cleanCard || cleanCard.length < 16 || !/^\d+$/.test(cleanCard)) return {
		success: false,
		error: "Número de cartão de crédito inválido. Insira 16 dígitos."
	};
	if (!holder.trim()) return {
		success: false,
		error: "Informe o nome impresso no cartão."
	};
	if (!expiry.trim() || !/^\d{2}\/\d{2,4}$/.test(expiry.trim())) return {
		success: false,
		error: "Data de validade inválida. Formato: MM/AA."
	};
	if (!cvv.trim() || cvv.trim().length < 3) return {
		success: false,
		error: "Código de segurança (CVV) inválido."
	};
	if (cleanCard.endsWith("0000")) return {
		success: false,
		error: "Pagamento recusado pela operadora. Verifique o limite ou use outro cartão."
	};
	const data = getStoredAuthData();
	const now = (/* @__PURE__ */ new Date()).toISOString();
	if (data.currentUser) {
		data.currentUser.isPro = true;
		data.currentUser.proSince = now;
		const userInList = data.users.find((u) => u.id === data.currentUser?.id);
		if (userInList) {
			userInList.isPro = true;
			userInList.proSince = now;
		}
	}
	saveStoredAuthData(data);
	return { success: true };
}
var ECOSYSTEM_APPS = [
	{
		id: "pdf",
		name: "Montanha PDF Studio",
		tag: "Diagramação & IA",
		slogan: "Diagramação Editorial & Publicações com IA",
		accent: "#f59e0b",
		badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
		isCurrent: true
	},
	{
		id: "personal",
		name: "Montanha Personal Studio",
		tag: "Finanças & Operação",
		slogan: "Gestão Financeira & Inteligência para Studios",
		accent: "#10b981",
		badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
		isCurrent: false
	},
	{
		id: "hybrid",
		name: "Montanha Hybrid Training",
		tag: "Performance & Treino",
		slogan: "Alta Performance & Periodização de Treino",
		accent: "#06b6d4",
		badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
		isCurrent: false
	},
	{
		id: "language",
		name: "Montanha Language AI",
		tag: "Idiomas & IA",
		slogan: "Tutor de Idiomas com IA & Treinos Diários",
		accent: "#6366f1",
		badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
		isCurrent: false
	},
	{
		id: "whatsapp",
		name: "Montanha WhatsApp Automation",
		tag: "SaaS & CRM",
		slogan: "Automação Multi-Tenant & Disparos WhatsApp",
		accent: "#a855f7",
		badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
		isCurrent: false
	}
];
var AuthModal = ({ isOpen, onClose, onSuccess, initialTab = "login" }) => {
	const [activeTab, setActiveTab] = (0, import_react.useState)(initialTab);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const [successMessage, setSuccessMessage] = (0, import_react.useState)(null);
	const [showEcosystem, setShowEcosystem] = (0, import_react.useState)(false);
	const [loginEmail, setLoginEmail] = (0, import_react.useState)("");
	const [loginPassword, setLoginPassword] = (0, import_react.useState)("");
	const [registerName, setRegisterName] = (0, import_react.useState)("");
	const [registerEmail, setRegisterEmail] = (0, import_react.useState)("");
	const [registerPassword, setRegisterPassword] = (0, import_react.useState)("");
	const resetForm = () => {
		setErrorMessage(null);
		setSuccessMessage(null);
		setLoginEmail("");
		setLoginPassword("");
		setRegisterName("");
		setRegisterEmail("");
		setRegisterPassword("");
	};
	const handleClose = () => {
		resetForm();
		onClose();
	};
	const handleResetPassword = async (e) => {
		e.preventDefault();
		setErrorMessage(null);
		if (!loginEmail) {
			setErrorMessage("Informe seu e-mail.");
			return;
		}
		const mx = await validateEmailMx(loginEmail);
		if (!mx.valid) {
			setErrorMessage(mx.reason || "E-mail inválido.");
			return;
		}
		setSuccessMessage(`Instruções de redefinição de senha enviadas para ${loginEmail}!`);
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		setErrorMessage(null);
		const mx = await validateEmailMx(loginEmail);
		if (!mx.valid) {
			setErrorMessage(mx.reason || "E-mail inválido.");
			return;
		}
		const access = await checkProjectAccess(null, "construtor-pdf", loginEmail);
		if (!access.hasAccess) {
			setErrorMessage(access.message);
			return;
		}
		const res = loginUser(loginEmail, loginPassword);
		if (!res.success) {
			setErrorMessage(res.error || "Falha na autenticação.");
			return;
		}
		setSuccessMessage("Login realizado com sucesso!");
		setTimeout(() => {
			if (res.user) onSuccess(res.user);
			handleClose();
		}, 600);
	};
	const handleRegister = (e) => {
		e.preventDefault();
		setErrorMessage(null);
		const res = registerUser(registerName, registerEmail, registerPassword);
		if (!res.success) {
			setErrorMessage(res.error || "Falha no cadastro.");
			return;
		}
		setSuccessMessage("Cadastro realizado com sucesso!");
		setTimeout(() => {
			if (res.user) onSuccess(res.user);
			handleClose();
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: handleClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"data-testid": "auth-modal",
			className: "max-w-md p-6 font-sans bg-slate-950/95 text-slate-100 border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.2)] backdrop-blur-2xl rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-slate-800/80 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between gap-2 mb-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wider flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ECOSSISTEMA MONTANHA" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-xl font-black tracking-tight text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: activeTab === "login" ? "Montanha PDF Studio" : "Criar Nova Conta" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400 mt-1",
							children: "Diagramação Editorial & Publicações de Alto Nível com IA"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center p-1 rounded-xl bg-slate-900/80 border border-slate-800 my-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "tab-login",
						onClick: () => {
							setActiveTab("login");
							setErrorMessage(null);
						},
						className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${activeTab === "login" ? "bg-amber-500 text-slate-950 font-black shadow-md" : "text-slate-400 hover:text-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Entrar" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "tab-register",
						onClick: () => {
							setActiveTab("register");
							setErrorMessage(null);
						},
						className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${activeTab === "register" ? "bg-amber-500 text-slate-950 font-black shadow-md" : "text-slate-400 hover:text-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cadastrar" })]
					})]
				}),
				errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-testid": "auth-error-msg",
					className: "p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
				}),
				successMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-testid": "auth-success-msg",
					className: "p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: successMessage })]
				}),
				activeTab === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "space-y-4 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "E-mail" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								"data-testid": "input-login-email",
								value: loginEmail,
								onChange: (e) => setLoginEmail(e.target.value),
								placeholder: "seu.email@exemplo.com",
								className: "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
									className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Senha" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setErrorMessage(null);
										setSuccessMessage(null);
										setActiveTab("reset");
									},
									className: "text-xs text-amber-400 hover:underline font-medium cursor-pointer",
									children: "Esqueci a senha"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								"data-testid": "input-login-password",
								value: loginPassword,
								onChange: (e) => setLoginPassword(e.target.value),
								placeholder: "••••••••",
								className: "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							"data-testid": "btn-submit-login",
							className: "w-full h-10 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Acessar Conta" })]
						})
					]
				}),
				activeTab === "reset" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleResetPassword,
					className: "space-y-4 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "E-mail para Recuperação" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								required: true,
								value: loginEmail,
								onChange: (e) => setLoginEmail(e.target.value),
								placeholder: "seu.email@exemplo.com",
								className: "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full h-10 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enviar Instruções de Reset" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("login"),
							className: "w-full text-center text-xs text-slate-400 hover:text-white transition cursor-pointer",
							children: "← Voltar para o login"
						})
					]
				}),
				activeTab === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleRegister,
					className: "space-y-3.5 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nome Completo" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "text",
								"data-testid": "input-register-name",
								value: registerName,
								onChange: (e) => setRegisterName(e.target.value),
								placeholder: "Ex: Coach Silva",
								className: "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "E-mail Profissional" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								"data-testid": "input-register-email",
								value: registerEmail,
								onChange: (e) => setRegisterEmail(e.target.value),
								placeholder: "seu.email@exemplo.com",
								className: "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Senha (Mínimo 6 caracteres)" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "password",
								"data-testid": "input-register-password",
								value: registerPassword,
								onChange: (e) => setRegisterPassword(e.target.value),
								placeholder: "••••••••",
								className: "bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							"data-testid": "btn-submit-register",
							className: "w-full h-10 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Concluir Cadastro & Entrar" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center pt-2 border-t border-slate-800/80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setShowEcosystem(!showEcosystem),
						className: "text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 transition-all cursor-pointer shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-3.5 h-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🌐 Ecossistema (5 Apps Integrados)" }),
							showEcosystem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3.5 h-3.5" })
						]
					})
				}),
				showEcosystem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2 animate-in fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Plataformas Integradas do Ecossistema" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 max-h-48 overflow-y-auto pr-1",
						children: ECOSYSTEM_APPS.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-2 rounded-lg border text-xs flex items-center justify-between transition-all ${app.isCurrent ? "bg-amber-500/10 border-amber-500/50 text-white" : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-2 h-2 rounded-full",
										style: { backgroundColor: app.accent }
									}), app.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-slate-400",
									children: app.slogan
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${app.badgeBg}`,
								children: app.isCurrent ? "ATUAL" : app.tag
							})]
						}, app.id))
					})]
				})
			]
		})
	});
};
var SubscriptionModal = ({ isOpen, onClose, onSuccess }) => {
	const [selectedPlan, setSelectedPlan] = (0, import_react.useState)("annual");
	const [cardNumber, setCardNumber] = (0, import_react.useState)("");
	const [cardHolder, setCardHolder] = (0, import_react.useState)("");
	const [cardExpiry, setCardExpiry] = (0, import_react.useState)("");
	const [cardCvv, setCardCvv] = (0, import_react.useState)("");
	const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const [successMessage, setSuccessMessage] = (0, import_react.useState)(null);
	const resetForm = () => {
		setCardNumber("");
		setCardHolder("");
		setCardExpiry("");
		setCardCvv("");
		setErrorMessage(null);
		setSuccessMessage(null);
		setIsProcessing(false);
	};
	const handleClose = () => {
		resetForm();
		onClose();
	};
	const handlePayment = (e) => {
		e.preventDefault();
		setErrorMessage(null);
		setIsProcessing(true);
		setTimeout(() => {
			const res = upgradeUserToPro(cardNumber, cardHolder, cardExpiry, cardCvv);
			setIsProcessing(false);
			if (!res.success) {
				setErrorMessage(res.error || "Pagamento recusado.");
				return;
			}
			setSuccessMessage("Pagamento aprovado! Plano Montanha Magazine PRO ativado com sucesso.");
			setTimeout(() => {
				onSuccess();
				handleClose();
			}, 700);
		}, 300);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: handleClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"data-testid": "payment-modal",
			className: "theme-app-card max-w-lg max-h-[92vh] overflow-y-auto p-6 font-sans border-2 border-black shadow-2xl custom-scrollbar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 mb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "w-3 h-3 text-black" }), "UPGRADE PRO"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-black uppercase tracking-tight flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Montanha Magazine Studio PRO" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75 mt-0.5",
							children: "Desbloqueie exportação vetorial de PDFs em alta resolução (300 DPI para impressão), redação ilimitada por IA e todos os 16 temas editoriais."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 my-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "btn-plan-annual",
						onClick: () => setSelectedPlan("annual"),
						className: `p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${selectedPlan === "annual" ? "bg-amber-400 text-black border-black shadow-sm ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-black text-xs uppercase",
									children: "Plano Anual"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[8.5px] font-black px-1.5 py-0.5 rounded bg-black text-amber-400 border border-black uppercase",
									children: "ECONOMIZE 35%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-black text-lg",
								children: "12x R$ 32,50"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75 font-semibold block",
								children: "R$ 390 / ano faturado"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-testid": "btn-plan-monthly",
						onClick: () => setSelectedPlan("monthly"),
						className: `p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${selectedPlan === "monthly" ? "bg-amber-400 text-black border-black shadow-sm ring-2 ring-amber-400" : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between mb-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-black text-xs uppercase",
									children: "Plano Mensal"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-black text-lg",
								children: "R$ 49,00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75 font-semibold block",
								children: "Sem fidelidade"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "theme-app-card-subtle p-3 rounded-lg border text-xs space-y-1.5 mb-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PDFs em Alta Definição Prontos para Gráfica e Impressão" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Geração de Matérias e Redação Editorial Ilimitada com IA" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5 text-amber-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Acesso a Todos os 16 Temas e Famílias Tipográficas Premium" })]
						})
					]
				}),
				errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-testid": "payment-error-msg",
					className: "p-3 rounded-lg bg-red-500/10 border-2 border-red-500 text-red-700 text-xs font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-red-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
				}),
				successMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-testid": "payment-success-badge",
					className: "p-3 rounded-lg bg-emerald-500/10 border-2 border-emerald-500 text-emerald-700 text-xs font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: successMessage })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handlePayment,
					className: "space-y-3 pt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								className: "text-xs font-bold uppercase flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Número do Cartão de Crédito" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "text",
								"data-testid": "input-card-number",
								value: cardNumber,
								onChange: (e) => setCardNumber(e.target.value),
								placeholder: "4532 0156 8920 4455",
								maxLength: 19,
								className: "theme-app-input font-mono text-xs border-2"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-bold uppercase",
								children: "Nome Impresso no Cartão"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "text",
								"data-testid": "input-card-holder",
								value: cardHolder,
								onChange: (e) => setCardHolder(e.target.value.toUpperCase()),
								placeholder: "COACH SILVA",
								className: "theme-app-input font-bold text-xs border-2 uppercase"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "Validade (MM/AA)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "text",
									"data-testid": "input-card-expiry",
									value: cardExpiry,
									onChange: (e) => setCardExpiry(e.target.value),
									placeholder: "12/28",
									maxLength: 5,
									className: "theme-app-input font-mono text-xs border-2 text-center"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-bold uppercase",
									children: "CVV (3 ou 4 dígitos)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "password",
									"data-testid": "input-card-cvv",
									value: cardCvv,
									onChange: (e) => setCardCvv(e.target.value),
									placeholder: "•••",
									maxLength: 4,
									className: "theme-app-input font-mono text-xs border-2 text-center"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: isProcessing,
								"data-testid": "btn-submit-payment",
								className: "w-full h-11 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs uppercase border-2 border-black shadow-md cursor-pointer flex items-center justify-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isProcessing ? "Processando Pagamento Seguro..." : selectedPlan === "annual" ? "Confirmar Assinatura Anual (R$ 390)" : "Confirmar Assinatura Mensal (R$ 49)" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2 text-[10px] font-mono opacity-60 text-center pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3 h-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ambiente Criptografado de Pagamento com Certificado SSL 256-bit" })]
						})
					]
				})
			]
		})
	});
};
var Timeline = ({ items, className, emptyMessage = "Nenhum evento registrado no histórico." }) => {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-12 text-center text-zinc-500 font-mono text-xs",
		children: emptyMessage
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative pl-6 sm:pl-8 space-y-8 font-sans", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[15px] sm:left-[19px] top-3 bottom-3 w-0.5 bg-zinc-800" }), items.map((item, index) => {
			const ItemIcon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("absolute -left-[23px] sm:-left-[27px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-md", item.statusVariant === "success" ? "bg-zinc-950 text-emerald-400 border-emerald-500" : item.statusVariant === "warning" ? "bg-zinc-950 text-amber-400 border-amber-500" : item.statusVariant === "info" ? "bg-zinc-950 text-blue-400 border-blue-500" : "bg-zinc-950 text-zinc-400 border-zinc-700"),
					children: ItemIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIcon, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-amber-400" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "theme-app-card p-4 sm:p-5 rounded-xl border-2 hover:border-amber-400/80 transition-all space-y-3 shadow-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-black text-sm uppercase tracking-tight text-zinc-100",
									children: item.title
								}), item.status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-mono text-[9px] font-black px-2 py-0.5 rounded border uppercase", item.statusVariant === "success" && "bg-emerald-500/15 text-emerald-300 border-emerald-500/30", item.statusVariant === "warning" && "bg-amber-500/15 text-amber-300 border-amber-500/30", item.statusVariant === "info" && "bg-blue-500/15 text-blue-300 border-blue-500/30", (!item.statusVariant || item.statusVariant === "neutral") && "bg-zinc-800 text-zinc-300 border-zinc-700"),
									children: item.status
								})]
							}), item.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 text-[11px] font-mono text-zinc-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3 h-3 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.date })]
							})]
						}),
						item.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-zinc-300 opacity-90 leading-relaxed",
							children: item.subtitle
						}),
						item.content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: item.content }),
						item.actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2 border-t border-zinc-800/60 flex items-center justify-between gap-2 flex-wrap",
							children: item.actions
						})
					]
				})]
			}, item.id);
		})]
	});
};
var EditionsArchiveView = ({ currentProject, onLoadEditionIntoStudio }) => {
	const [editions, setEditions] = (0, import_react.useState)([]);
	const [viewMode, setViewMode] = (0, import_react.useState)("cards");
	const [isArchiveModalOpen, setIsArchiveModalOpen] = (0, import_react.useState)(false);
	const [archiveNotes, setArchiveNotes] = (0, import_react.useState)("");
	const [archiveStatus, setArchiveStatus] = (0, import_react.useState)("approved");
	const [customEdNumber, setCustomEdNumber] = (0, import_react.useState)(currentProject.editionNumber || "01");
	const [isNextEditionModalOpen, setIsNextEditionModalOpen] = (0, import_react.useState)(false);
	const [targetEditionForDuplicate, setTargetEditionForDuplicate] = (0, import_react.useState)(null);
	const [nextEditionNum, setNextEditionNum] = (0, import_react.useState)("02");
	const [nextEditionDate, setNextEditionDate] = (0, import_react.useState)("Outubro 2026");
	const [duplicateMode, setDuplicateMode] = (0, import_react.useState)("keep-articles");
	const refreshList = () => {
		setEditions(getArchivedEditions());
	};
	(0, import_react.useEffect)(() => {
		refreshList();
		window.addEventListener("montanha-archive-changed", refreshList);
		return () => window.removeEventListener("montanha-archive-changed", refreshList);
	}, []);
	const handleOpenArchiveCurrent = () => {
		setCustomEdNumber(currentProject.editionNumber || "01");
		setArchiveNotes(`Edição aprovada para impressão e distribuição digital em ${(/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")}.`);
		setIsArchiveModalOpen(true);
	};
	const handleConfirmArchiveCurrent = () => {
		archiveCurrentProject(currentProject, {
			notes: archiveNotes,
			status: archiveStatus,
			customEditionNumber: customEdNumber
		});
		setIsArchiveModalOpen(false);
		refreshList();
	};
	const handleLoadEdition = (edition) => {
		if (window.confirm(`Deseja abrir a Edição #${edition.editionNumber} ("${edition.title}") no editor?\n\nTodas as matérias, capas e configurações serão carregadas no estúdio para reedição e republicação.`)) onLoadEditionIntoStudio(edition.projectSnapshot);
	};
	const handleOpenNextEditionModal = (source) => {
		setTargetEditionForDuplicate(source);
		const curNum = source.editionNumber || "01";
		const numInt = parseInt(curNum.replace(/\D/g, ""), 10);
		const nNum = isNaN(numInt) ? "02" : numInt + 1 < 10 ? `0${numInt + 1}` : `${numInt + 1}`;
		setNextEditionNum(nNum);
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		const months = [
			"Janeiro",
			"Fevereiro",
			"Março",
			"Abril",
			"Maio",
			"Junho",
			"Julho",
			"Agosto",
			"Setembro",
			"Outubro",
			"Novembro",
			"Dezembro"
		];
		const nextMonthIdx = ((/* @__PURE__ */ new Date()).getMonth() + 1) % 12;
		setNextEditionDate(`${months[nextMonthIdx]} ${currentYear}`);
		setDuplicateMode("keep-articles");
		setIsNextEditionModalOpen(true);
	};
	const handleConfirmCreateNextEdition = () => {
		if (!targetEditionForDuplicate) return;
		archiveCurrentProject(currentProject, {
			notes: `Edição #${currentProject.editionNumber || "01"} arquivada automaticamente antes de iniciar a Edição #${nextEditionNum}.`,
			status: "approved",
			customEditionNumber: currentProject.editionNumber || "01"
		});
		const newProj = duplicateEditionForNextRelease(targetEditionForDuplicate, {
			customNextNumber: nextEditionNum,
			customDate: nextEditionDate,
			mode: duplicateMode
		});
		setIsNextEditionModalOpen(false);
		refreshList();
		onLoadEditionIntoStudio(newProj);
	};
	const handleDelete = (edition) => {
		if (window.confirm(`Tem certeza que deseja excluir a Edição #${edition.editionNumber} do arquivo?\nEsta ação não poderá ser desfeita.`)) {
			deleteArchivedEdition(edition.id);
			refreshList();
		}
	};
	const totalEditions = editions.length;
	const totalPagesSum = editions.reduce((acc, e) => acc + (e.totalPages || 0), 0);
	const totalArticlesSum = editions.reduce((acc, e) => acc + (e.totalArticles || 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-app-card p-5 rounded-xl border-2 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase",
							children: "REPOSITÓRIO DE PUBLICAÇÕES"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-mono font-bold text-amber-500 uppercase flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ARQUIVO DE EDIÇÕES APROVADAS" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-black uppercase tracking-tight",
						children: "Acervo de Edições Produzidas & Histórico Editorial"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-75 mt-0.5 max-w-2xl",
						children: "Acesse qualquer edição já aprovada para reabrir no estúdio, fazer revisões, atualizar matérias ou criar uma nova edição sequencial para futuras republicações."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => handleOpenNextEditionModal(currentProject),
							className: "h-9 bg-black text-amber-400 hover:bg-zinc-900 font-black text-xs border-2 border-amber-500 flex items-center gap-1.5 shadow-xs cursor-pointer",
							title: "Criar a próxima edição sequencial utilizando a estrutura atual como modelo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Criar Próxima Edição a Partir Desta" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: handleOpenArchiveCurrent,
							className: "h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black flex items-center gap-1.5 shadow-xs cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-black" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aprovar & Arquivar Edição Atual" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							onClick: exportAllEditionsArchive,
							className: "h-9 font-bold text-xs border-2 flex items-center gap-1.5 cursor-pointer",
							title: "Exportar backup completo de todas as edições em arquivo .JSON",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Backup do Acervo" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-3.5 rounded-xl border-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
								children: "EDIÇÕES NO ARQUIVO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black mt-0.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: totalEditions })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75",
								children: "Exemplares salvos"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-3.5 rounded-xl border-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
								children: "TOTAL DE PÁGINAS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black mt-0.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [totalPagesSum, " Páginas"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75",
								children: "Diagramadas no estúdio"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-3.5 rounded-xl border-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
								children: "MATÉRIAS ARQUIVADAS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black mt-0.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [totalArticlesSum, " Artigos"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75",
								children: "Textos catalogados"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-3.5 rounded-xl border-2 shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
								children: "EDIÇÃO EM PRODUÇÃO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xl font-black mt-0.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Ed. #", currentProject.editionNumber || "01"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] opacity-75",
								children: "Aberta no editor"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-black text-xs uppercase tracking-wider flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Edições Aprovadas & Catalogadas (",
								editions.length,
								")"
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] opacity-75 font-mono hidden sm:inline",
							children: "— Clique em \"Reeditar\" para carregar no estúdio"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold opacity-75 uppercase mr-1",
							children: "Visualização:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex rounded-lg border-2 border-zinc-800 p-0.5 bg-zinc-900",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-testid": "archive-view-cards",
								onClick: () => setViewMode("cards"),
								className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${viewMode === "cards" ? "bg-amber-400 text-black font-black shadow-xs" : "text-zinc-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cards" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-testid": "archive-view-timeline",
								onClick: () => setViewMode("timeline"),
								className: `px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${viewMode === "timeline" ? "bg-amber-400 text-black font-black shadow-xs" : "text-zinc-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCommitHorizontal, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Linha do Tempo" })]
							})]
						})]
					})]
				}), editions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "theme-app-card p-8 rounded-xl border-2 text-center space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "w-10 h-10 text-amber-500 mx-auto opacity-75" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-sm uppercase",
							children: "Nenhuma edição arquivada ainda"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-75 max-w-md mx-auto",
							children: "Quando você aprovar uma edição da revista, ela aparecerá aqui com sua capa, matérias e dados prontos para reedição e republicação."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: handleOpenArchiveCurrent,
							className: "bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black",
							children: "Aprovar Edição Atual Agora"
						})
					]
				}) : viewMode === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { items: editions.map((edition) => ({
					id: edition.id,
					date: edition.date,
					title: `Edição #${edition.editionNumber} — ${edition.title}`,
					subtitle: edition.subtitle || edition.mainHeadline,
					status: edition.status === "approved" ? "✓ Aprovada" : edition.status === "published" ? "● Publicada" : "Arquivada",
					statusVariant: edition.status === "approved" ? "success" : edition.status === "published" ? "info" : "neutral",
					icon: BookOpen,
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 pt-1 items-start",
						children: [edition.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: edition.coverImage,
							alt: `Capa #${edition.editionNumber}`,
							className: "w-16 h-22 object-cover rounded-lg border-2 border-zinc-700 shadow-sm shrink-0"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-16 h-22 rounded-lg border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center shrink-0 bg-amber-400/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[8px] font-mono font-bold mt-1",
								children: ["ED. #", edition.editionNumber]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-xs flex-1 min-w-0",
							children: [
								edition.mainHeadline && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-amber-500 italic",
									children: [
										"\"",
										edition.mainHeadline,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-1.5 font-mono text-[10px] opacity-80 pt-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700",
											children: [edition.totalPages, " Págs A4"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700",
											children: [edition.totalArticles, " Matérias"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700",
											children: [edition.totalWords, " Palavras"]
										})
									]
								}),
								edition.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-zinc-400 mt-1 line-clamp-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-amber-400",
											children: "Nota:"
										}),
										" ",
										edition.notes
									]
								})
							]
						})]
					}),
					actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 w-full justify-between pt-1 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: () => handleLoadEdition(edition),
								className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black cursor-pointer flex items-center gap-1 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reeditar no Estúdio" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => handleOpenNextEditionModal(edition),
								className: "h-8 font-bold text-xs border-2 cursor-pointer flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Duplicar p/ Próxima" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => exportProjectToFile(edition.projectSnapshot),
								className: "h-8 px-2 border-2 cursor-pointer",
								title: "Baixar arquivo de backup (.JSON) desta edição",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5 text-slate-300" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => handleDelete(edition),
								className: "h-8 px-2 text-red-400 hover:bg-red-950/40 border-2 cursor-pointer",
								title: "Excluir edição",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
							})]
						})]
					})
				})) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: editions.map((edition) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "theme-app-card p-4 rounded-xl border-2 space-y-4 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "bg-amber-400 text-black font-mono font-black text-xs px-2.5 py-1 rounded border border-black uppercase",
											children: ["EDIÇÃO #", edition.editionNumber]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-bold opacity-75 flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3 h-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: edition.date })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[9px] font-mono font-black px-2 py-0.5 rounded border uppercase ${edition.status === "approved" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30" : edition.status === "published" ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30" : "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/30"}`,
										children: edition.status === "approved" ? "✓ APROVADA" : edition.status === "published" ? "● PUBLICADA" : "ARQUIVADA"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [edition.coverImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-20 h-28 rounded-lg overflow-hidden border-2 border-current shrink-0 bg-slate-900 shadow-xs relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: edition.coverImage,
											alt: `Capa Edição ${edition.editionNumber}`,
											className: "w-full h-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-0 inset-x-0 bg-black/70 p-0.5 text-[8px] font-black text-amber-400 font-mono text-center truncate",
											children: ["ED. #", edition.editionNumber]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-20 h-28 rounded-lg border-2 border-dashed border-current flex flex-col items-center justify-center shrink-0 bg-amber-400/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-6 h-6 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[9px] font-mono font-bold mt-1",
											children: ["ED. #", edition.editionNumber]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-black text-sm uppercase leading-tight truncate",
												children: edition.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs opacity-75 line-clamp-2 leading-snug",
												children: edition.subtitle
											}),
											edition.mainHeadline && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[11px] font-bold text-amber-600 dark:text-amber-400 line-clamp-1",
												children: [
													"\"",
													edition.mainHeadline,
													"\""
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-1.5 pt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold",
														children: [edition.totalPages, " Págs A4"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold",
														children: [edition.totalArticles, " Matérias"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold",
														children: [edition.totalWords, " palavras"]
													})
												]
											})
										]
									})]
								}),
								edition.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-2.5 rounded-lg theme-app-card-subtle text-[11px] opacity-85 border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold block text-[9px] font-mono uppercase text-amber-500 mb-0.5",
										children: "NOTAS DO EDITOR:"
									}), edition.notes]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-3 border-t flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									onClick: () => handleLoadEdition(edition),
									className: "h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black flex items-center gap-1 cursor-pointer shadow-xs",
									title: "Carregar esta edição completa no estúdio para reedição ou republicação",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reeditar no Estúdio" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => handleOpenNextEditionModal(edition),
									className: "h-8 font-bold text-xs border-2 flex items-center gap-1 cursor-pointer",
									title: "Usar esta edição como matriz para a próxima edição sequencial",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Duplicar p/ Próxima" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => exportProjectToFile(edition.projectSnapshot),
									className: "h-8 px-2 border-2 cursor-pointer",
									title: "Baixar arquivo de backup (.JSON) desta edição",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5 text-slate-700 dark:text-slate-300" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => handleDelete(edition),
									className: "h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-500/10 border-2 border-current cursor-pointer",
									title: "Excluir edição do acervo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
								})]
							})]
						})]
					}, edition.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isArchiveModalOpen,
				onOpenChange: setIsArchiveModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aprovar & Arquivar Edição Atual" })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "opacity-80 leading-relaxed",
									children: "Você está salvando um snapshot definitivo da edição atual. Ela ficará catalogada no seu acervo e poderá ser reaberta e reeditada a qualquer momento."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold",
										children: "NÚMERO DA EDIÇÃO"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: customEdNumber,
										onChange: (e) => setCustomEdNumber(e.target.value),
										className: "mt-1 font-mono font-bold",
										placeholder: "Ex: 01, 02..."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px] font-bold",
										children: "STATUS DESTE EXEMPLAR"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: archiveStatus,
										onChange: (e) => setArchiveStatus(e.target.value),
										className: "w-full mt-1 h-9 rounded-md border-2 border-current px-2.5 font-bold text-xs theme-app-input",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "approved",
												children: "Aprovada para Publicação"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "published",
												children: "Publicada / Distribuída"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "archived",
												children: "Arquivada para Histórico"
											})
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-[11px] font-bold",
									children: "NOTAS & OBSERVAÇÕES DO EDITOR"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: archiveNotes,
									onChange: (e) => setArchiveNotes(e.target.value),
									className: "mt-1 text-xs",
									placeholder: "Ex: Edição impressa finalizada, enviada para gráfica..."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg theme-app-card-subtle border text-[11px] space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-bold flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentProject.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-amber-500",
											children: ["Edição #", customEdNumber]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "opacity-75",
										children: [
											"Contém ",
											currentProject.articles.length,
											" matérias e todas as configurações de capa, contracapa e tipografia."
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "gap-2 sm:gap-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setIsArchiveModalOpen(false),
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: handleConfirmArchiveCurrent,
								className: "bg-amber-400 hover:bg-amber-500 text-black font-black",
								children: "Salvar no Acervo de Edições"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isNextEditionModalOpen,
				onOpenChange: setIsNextEditionModalOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "theme-app-card max-w-lg p-6 border-2 shadow-2xl font-sans",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "border-b-2 border-current pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-base font-black flex items-center gap-2 uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Iniciar Nova Edição da Montanha Magazine" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 my-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300",
									children: [
										"✓ ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Backup Automático:" }),
										" O conteúdo da sua edição atual será arquivado com segurança no acervo antes de iniciar a nova edição."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-black uppercase",
											children: "Número da Nova Edição"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: nextEditionNum,
											onChange: (e) => setNextEditionNum(e.target.value),
											placeholder: "Ex: 02",
											className: "font-mono font-bold text-sm"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-black uppercase",
											children: "Mês & Ano da Publicação"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: nextEditionDate,
											onChange: (e) => setNextEditionDate(e.target.value),
											placeholder: "Ex: Outubro 2026",
											className: "font-bold text-sm"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-black uppercase",
										children: "Como você prefere iniciar os artigos?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											onClick: () => setDuplicateMode("keep-articles"),
											className: `p-3 rounded-xl border-2 cursor-pointer transition-all ${duplicateMode === "keep-articles" ? "border-amber-500 bg-amber-500/15" : "theme-app-card-subtle hover:border-black/30"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-black text-xs flex items-center gap-1.5 mb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Manter Artigos como Modelo" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10.5px] opacity-75 leading-tight",
												children: "Mantém o esqueleto das 4 matérias para você apenas substituir os textos e fotos um por um."
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											onClick: () => setDuplicateMode("clean-articles"),
											className: `p-3 rounded-xl border-2 cursor-pointer transition-all ${duplicateMode === "clean-articles" ? "border-amber-500 bg-amber-500/15" : "theme-app-card-subtle hover:border-black/30"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-black text-xs flex items-center gap-1.5 mb-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estrutura Limpa" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10.5px] opacity-75 leading-tight",
												children: "Mantém Capa, Expediente e Carta do Editor, e deixa 1 matéria base para você criar as novas."
											})]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "border-t-2 border-current pt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: () => setIsNextEditionModalOpen(false),
								className: "text-xs font-bold",
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handleConfirmCreateNextEdition,
								className: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs h-10 px-5 border-2 border-black shadow-md flex items-center gap-1.5 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Iniciar Edição #",
									nextEditionNum,
									" no Estúdio"
								] })]
							})]
						})
					]
				})
			})
		]
	});
};
function Index() {
	const [project, setProject] = (0, import_react.useState)(INITIAL_MAGAZINE_PROJECT);
	const [isInitialLoaded, setIsInitialLoaded] = (0, import_react.useState)(false);
	const [uiThemeMode, setUiThemeMode] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("montanha_ui_theme");
			if (savedTheme && APP_UI_THEMES.some((t) => t.id === savedTheme)) return savedTheme;
		}
		return "contrast-white";
	});
	const [activeTab, setActiveTab] = (0, import_react.useState)("viewer");
	const spotlightNavRef = (0, import_react.useRef)(null);
	const spotlightBarRef = (0, import_react.useRef)(null);
	const spotlightButtonRefs = (0, import_react.useRef)({});
	(0, import_react.useEffect)(() => {
		const nav = spotlightNavRef.current;
		const bar = spotlightBarRef.current;
		const button = spotlightButtonRefs.current[activeTab];
		if (!nav || !bar || !button) return;
		const navRect = nav.getBoundingClientRect();
		const buttonRect = button.getBoundingClientRect();
		bar.style.left = `${buttonRect.left - navRect.left + 4}px`;
		bar.style.width = `${buttonRect.width - 8}px`;
		bar.style.top = `${buttonRect.top - navRect.top + 4}px`;
		bar.style.height = `${buttonRect.height - 8}px`;
	}, [activeTab]);
	const [editingArticle, setEditingArticle] = (0, import_react.useState)(null);
	const [isArticleModalOpen, setIsArticleModalOpen] = (0, import_react.useState)(false);
	const [isAiStudioOpen, setIsAiStudioOpen] = (0, import_react.useState)(false);
	const [isExportModalOpen, setIsExportModalOpen] = (0, import_react.useState)(false);
	const [layoutMode, setLayoutMode] = (0, import_react.useState)("print");
	const [isMockupStudioOpen, setIsMockupStudioOpen] = (0, import_react.useState)(false);
	const [isCloudSyncOpen, setIsCloudSyncOpen] = (0, import_react.useState)(false);
	const [isPdfRouterOpen, setIsPdfRouterOpen] = (0, import_react.useState)(false);
	const [saveStatus, setSaveStatus] = (0, import_react.useState)("Sincronizado");
	const [isDriveConnected, setIsDriveConnected] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return getGoogleDriveStatus().isConnected;
	});
	(0, import_react.useEffect)(() => {
		const handleGdriveStatus = () => {
			setIsDriveConnected(getGoogleDriveStatus().isConnected);
		};
		window.addEventListener("montanha-gdrive-status-changed", handleGdriveStatus);
		return () => window.removeEventListener("montanha-gdrive-status-changed", handleGdriveStatus);
	}, []);
	const [articleToDelete, setArticleToDelete] = (0, import_react.useState)(null);
	const [articleSearchQuery, setArticleSearchQuery] = (0, import_react.useState)("");
	const [archivedEditionsCount, setArchivedEditionsCount] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return 1;
		return getArchivedEditions().length;
	});
	(0, import_react.useEffect)(() => {
		const handleArchiveSync = () => {
			setArchivedEditionsCount(getArchivedEditions().length);
		};
		window.addEventListener("montanha-archive-changed", handleArchiveSync);
		return () => window.removeEventListener("montanha-archive-changed", handleArchiveSync);
	}, []);
	const [currentUser, setCurrentUser] = (0, import_react.useState)(() => getCurrentUser());
	const [isAuthModalOpen, setIsAuthModalOpen] = (0, import_react.useState)(false);
	const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleAuthSync = () => {
			setCurrentUser(getCurrentUser());
		};
		window.addEventListener("montanha-auth-changed", handleAuthSync);
		return () => window.removeEventListener("montanha-auth-changed", handleAuthSync);
	}, []);
	const [isImportFromRepoOpen, setIsImportFromRepoOpen] = (0, import_react.useState)(false);
	const [repoAnalysisResult, setRepoAnalysisResult] = (0, import_react.useState)(null);
	const [selectedRepoDoc, setSelectedRepoDoc] = (0, import_react.useState)(null);
	const [isRepoApprovalOpen, setIsRepoApprovalOpen] = (0, import_react.useState)(false);
	const [isRepoAnalyzing, setIsRepoAnalyzing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadLatestProject().then((loaded) => {
			if (loaded) setProject(loaded);
		}).catch((err) => {
			console.warn("Erro ao carregar projeto inicial:", err);
		}).finally(() => {
			setIsInitialLoaded(true);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isInitialLoaded) return;
		setSaveStatus("Salvando...");
		const timer = setTimeout(() => {
			syncProjectToCloud(project).then((res) => {
				if (res?.mode === "google-drive") setSaveStatus("Drive Sincronizado");
				else if (res?.success) setSaveStatus("Nuvem Sincronizada");
				else setSaveStatus("Salvo Localmente");
			});
		}, 1e3);
		return () => clearTimeout(timer);
	}, [project, isInitialLoaded]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const handleFocus = () => {
			loadLatestProject().then((latest) => {
				if (latest && latest.updatedAt && latest.updatedAt !== project.updatedAt) setProject(latest);
			});
		};
		window.addEventListener("focus", handleFocus);
		return () => window.removeEventListener("focus", handleFocus);
	}, [project.updatedAt]);
	const activeUiTheme = APP_UI_THEMES.find((t) => t.id === uiThemeMode) || APP_UI_THEMES[0];
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined") document.body.className = activeUiTheme.className;
	}, [uiThemeMode, activeUiTheme]);
	const handleSelectUiTheme = (mode) => {
		setUiThemeMode(mode);
		if (typeof window !== "undefined") localStorage.setItem("montanha_ui_theme", mode);
	};
	const currentPublicationTheme = MAGAZINE_THEMES.find((t) => t.id === project.themeId) || MAGAZINE_THEMES[0];
	const handleResetToSample = () => {
		if (window.confirm("Deseja restaurar a revista de exemplo padrão? Suas alterações atuais serão substituídas.")) {
			const reset = {
				...INITIAL_MAGAZINE_PROJECT,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			setProject(reset);
			syncProjectToCloud(reset);
		}
	};
	const handleSaveArticle = (updatedArticle) => {
		const exists = project.articles.some((a) => a.id === updatedArticle.id);
		let updatedArticles;
		if (exists) updatedArticles = project.articles.map((a) => a.id === updatedArticle.id ? updatedArticle : a);
		else updatedArticles = [...project.articles, updatedArticle];
		setProject({
			...project,
			articles: updatedArticles,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	};
	const handleDeleteArticle = (id) => {
		const art = project.articles.find((a) => a.id === id);
		if (art) setArticleToDelete(art);
	};
	const handleConfirmDeleteArticle = () => {
		if (!articleToDelete) return;
		const targetId = articleToDelete.id;
		const updatedArticles = project.articles.filter((a) => a.id !== targetId);
		const updatedRepository = project.contentRepository?.map((doc) => {
			if (articleToDelete.sourceDocId && doc.id === articleToDelete.sourceDocId || doc.title.toLowerCase().trim() === articleToDelete.title.toLowerCase().trim()) return {
				...doc,
				status: "draft",
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			return doc;
		});
		const updatedProj = {
			...project,
			articles: updatedArticles,
			contentRepository: updatedRepository,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		setProject(updatedProj);
		syncProjectToCloud(updatedProj);
		setArticleToDelete(null);
	};
	const handleDuplicateArticle = (sourceArticle) => {
		const cloned = {
			...JSON.parse(JSON.stringify(sourceArticle)),
			id: "art-" + Date.now(),
			title: `${sourceArticle.title} (CÓPIA)`
		};
		const idx = project.articles.findIndex((a) => a.id === sourceArticle.id);
		const updatedArticles = [...project.articles];
		if (idx >= 0) updatedArticles.splice(idx + 1, 0, cloned);
		else updatedArticles.push(cloned);
		setProject({
			...project,
			articles: updatedArticles,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	};
	const handleMoveArticle = (idx, direction) => {
		const newArticles = [...project.articles];
		const targetIdx = direction === "up" ? idx - 1 : idx + 1;
		if (targetIdx < 0 || targetIdx >= newArticles.length) return;
		const temp = newArticles[idx];
		newArticles[idx] = newArticles[targetIdx];
		newArticles[targetIdx] = temp;
		setProject({
			...project,
			articles: newArticles,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	};
	const handleOpenNewArticle = () => {
		setEditingArticle(null);
		setIsArticleModalOpen(true);
	};
	const handleEditArticle = (article) => {
		setEditingArticle(article);
		setIsArticleModalOpen(true);
	};
	const handleImportWithAiFromRepo = async (doc) => {
		setIsRepoAnalyzing(true);
		setSelectedRepoDoc(doc);
		try {
			const result = await analyzeAndDiagramEditorialText(doc.rawContent, {
				originalTitle: doc.title,
				...doc.category ? { originalCategory: doc.category } : {}
			});
			setRepoAnalysisResult(result);
			setIsRepoApprovalOpen(true);
		} catch (err) {
			alert("Erro na análise por IA: " + err.message);
		} finally {
			setIsRepoAnalyzing(false);
		}
	};
	const handleImportDirectFromRepo = (doc) => {
		const newArt = {
			id: "art-" + Date.now(),
			sourceDocId: doc.id,
			title: doc.title,
			subtitle: `Artigo importado do acervo editorial // ${doc.category || "Alta Performance"}.`,
			category: doc.category || "MONTANHA METHOD",
			author: "Coach Montanha",
			authorBio: "Master Coach & Fundador",
			authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
			heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
			heroImageCaption: "Foto editorial // Montanha Media",
			content: doc.rawContent,
			pullQuotes: [],
			keyTakeaways: [],
			layoutTemplate: doc.wordCount > 650 ? "editorial-lead" : "two-column-quote",
			pageSpan: calculateRequiredArticlePages({
				content: doc.rawContent,
				heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
			}),
			quotePlacement: "end",
			textDensity: "normal",
			tags: [doc.category || "Geral", "Alta Performance"],
			estimatedReadTime: Math.max(1, Math.round(doc.wordCount / 130)),
			featuredOnCover: false,
			enabled: true
		};
		const updatedArticles = [...project.articles, newArt];
		const updatedDocs = project.contentRepository ? project.contentRepository.map((d) => d.id === doc.id ? {
			...d,
			status: "published",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d) : [];
		const updatedProj = {
			...project,
			articles: updatedArticles,
			contentRepository: updatedDocs,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		setProject(updatedProj);
		syncProjectToCloud(updatedProj);
		setActiveTab("articles");
	};
	const handleApproveRepoArticle = (approvedArt, sourceDocId) => {
		const finalDocId = sourceDocId || approvedArt.sourceDocId || selectedRepoDoc?.id;
		const artWithSource = {
			...approvedArt,
			sourceDocId: finalDocId
		};
		const updatedArticles = [...project.articles, artWithSource];
		const updatedDocs = finalDocId && project.contentRepository ? project.contentRepository.map((d) => d.id === finalDocId ? {
			...d,
			status: "published",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : d) : project.contentRepository;
		const updatedProj = {
			...project,
			articles: updatedArticles,
			contentRepository: updatedDocs ?? [],
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		setProject(updatedProj);
		syncProjectToCloud(updatedProj);
		setActiveTab("articles");
	};
	const activePages = getActiveMagazinePages({
		project,
		theme: currentPublicationTheme,
		layoutMode
	});
	const totalPages = Math.max(1, activePages.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-hydrated": isInitialLoaded ? "true" : "false",
		className: `min-h-screen flex flex-col font-sans transition-colors duration-200 theme-app-shell ${activeUiTheme.className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-50 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 transition-colors theme-app-header border-b-2 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md border-2 border-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-5 h-5 text-slate-950" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-black text-sm sm:text-base tracking-tight uppercase",
							children: "MONTANHA PDF STUDIO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-amber-400 text-black text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase hidden sm:inline",
							children: project.editionNumber ? `ED. #${project.editionNumber}` : "VIRTUAL"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] opacity-75 font-semibold",
						children: "Diagramação Editorial & Publicações de Alto Nível com IA"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							"data-testid": "btn-open-cloud-sync",
							onClick: () => setIsCloudSyncOpen(true),
							className: "h-8 sm:h-9 px-2.5 theme-app-card hover:opacity-90 border-2 border-current font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer relative",
							title: isDriveConnected ? `Google Drive Conectado em Tempo Real — ${saveStatus}` : saveStatus ? `Sincronização em Nuvem: ${saveStatus}` : "Sincronização em Nuvem & Compartilhamento",
							"aria-label": "Sincronização em Nuvem",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-4 h-4 text-amber-500" }), isDriveConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 font-mono text-[9px] text-emerald-600 dark:text-emerald-400 font-black uppercase hidden sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Drive Conectado"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono hidden md:inline opacity-70",
								children: saveStatus
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => setIsMockupStudioOpen(true),
							className: "h-8 sm:h-9 bg-black text-amber-400 hover:bg-zinc-900 border-2 border-amber-500 font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer",
							title: "Criar mockups comerciais da revista para Instagram e redes sociais com IA",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Mockups com IA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "Mockup"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							"data-testid": "btn-header-pdf-import",
							onClick: () => setIsPdfRouterOpen(true),
							className: "h-8 sm:h-9 bg-zinc-950 text-amber-400 hover:bg-zinc-900 border-2 border-amber-400 font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer",
							title: "Importar PDFs (artigos, revistas, protocolos) com o pdf-conversion-router",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: "Importar PDF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "md:hidden",
									children: "PDF"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							"data-testid": "btn-export-pdf",
							onClick: () => setIsExportModalOpen(true),
							className: "h-8 sm:h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md border-2 border-black flex items-center gap-1.5 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Exportar PDF" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print px-4 sm:px-6 flex items-center justify-between overflow-x-auto custom-scrollbar transition-colors theme-app-subnav border-b-2 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: spotlightNavRef,
					className: "relative flex items-center gap-1 sm:gap-2 py-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: spotlightBarRef,
							className: "pointer-events-none absolute rounded-md bg-amber-500/30 border border-amber-500 shadow-[0_0_8px_rgba(245,158,11,.6)] transition-[left,width,top,height] duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["viewer"] = el;
							},
							"data-testid": "tab-viewer",
							onClick: () => setActiveTab("viewer"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "viewer" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leitor & Preview Visual" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["articles"] = el;
							},
							"data-testid": "tab-articles",
							onClick: () => setActiveTab("articles"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "articles" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Matérias & Artigos (",
								project.articles.length,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["repository"] = el;
							},
							"data-testid": "tab-repository",
							onClick: () => setActiveTab("repository"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "repository" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Acervo & Textos (",
								project.contentRepository?.length || 0,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["cover"] = el;
							},
							"data-testid": "tab-cover",
							onClick: () => setActiveTab("cover"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "cover" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Capa & Contracapa da Revista" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["editorial"] = el;
							},
							"data-testid": "tab-editorial",
							onClick: () => setActiveTab("editorial"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "editorial" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Editorial & Páginas" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["archive"] = el;
							},
							"data-testid": "tab-archive",
							onClick: () => setActiveTab("archive"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "archive" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Arquivo de Edições (",
								archivedEditionsCount,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: (el) => {
								spotlightButtonRefs.current["settings"] = el;
							},
							"data-testid": "tab-settings",
							onClick: () => setActiveTab("settings"),
							className: `flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-black rounded-lg transition-all border-2 cursor-pointer ${activeTab === "settings" ? "bg-amber-400 text-slate-950 border-black shadow-sm" : "border-transparent opacity-75 hover:opacity-100 hover:bg-black/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Configurações" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-3 text-xs opacity-80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setIsCloudSyncOpen(true),
						className: "flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer",
						title: "Abrir Central de Sincronização em Nuvem",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							saveStatus,
							" (",
							totalPages,
							" págs)"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleResetToSample,
						className: "flex items-center gap-1 font-bold hover:text-amber-600 transition-colors cursor-pointer",
						title: "Recarregar revista modelo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Restaurar Modelo" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "no-print flex-1 p-4 sm:p-6 max-w-7xl w-full mx-auto",
				children: [
					activeTab === "viewer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[calc(100vh-140px)] min-h-[580px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagazineViewer, {
							project,
							theme: currentPublicationTheme,
							layoutMode,
							onLayoutModeChange: setLayoutMode,
							onOpenExportModal: () => setIsExportModalOpen(true),
							onOpenArticleEditor: (id) => {
								const art = project.articles.find((a) => a.id === id);
								if (art) handleEditArticle(art);
							}
						})
					}),
					activeTab === "articles" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-app-card p-5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black uppercase tracking-tight",
									children: "Matérias & Artigos da Edição"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs opacity-75 mt-0.5",
									children: "Organize a sequência das páginas, adicione novos textos ou use a IA para redigir matérias completas."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => setIsImportFromRepoOpen(true),
											className: "h-9 bg-black hover:bg-slate-900 text-white font-black text-xs flex items-center gap-1.5 border-2 border-black cursor-pointer shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Importar do Acervo (",
												project.contentRepository?.length || 0,
												")"
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: () => setIsAiStudioOpen(true),
											className: "h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center gap-1.5 border-2 border-black cursor-pointer shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gerar Matéria com IA" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											"data-testid": "btn-new-article",
											onClick: handleOpenNewArticle,
											className: "h-9 font-bold text-xs flex items-center gap-1.5 border-2 border-current cursor-pointer shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Adicionar Manualmente" })]
										})
									]
								})]
							}),
							(() => {
								const activeArts = project.articles.filter((a) => a.enabled !== false);
								const totalWordsCount = activeArts.reduce((acc, a) => acc + countWords(a.content), 0);
								const totalReadTime = activeArts.reduce((acc, a) => acc + (a.estimatedReadTime || 4), 0);
								const totalMultiPages = activeArts.filter((a) => getEffectiveArticlePageSpan(a) > 1).length;
								const totalSinglePages = activeArts.filter((a) => getEffectiveArticlePageSpan(a) === 1).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
													children: "Total de Páginas Ativas"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [totalPages, " Páginas A4"] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[9px] opacity-60 block",
													children: [
														totalSinglePages,
														" simples + ",
														totalMultiPages,
														" estendidas"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
													children: "Volume Editorial"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [totalWordsCount.toLocaleString("pt-BR"), " palavras"] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[9px] opacity-60 block",
													children: [
														"Em ",
														activeArts.length,
														" matérias ativas"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
													children: "Tempo de Leitura"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														"~",
														totalReadTime,
														" min"
													] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] opacity-60 block",
													children: "Edição completa compilada"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "theme-app-card-subtle p-3.5 rounded-xl border-2 space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-mono font-bold uppercase opacity-75 block",
													children: "Acervo de Rascunhos"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5 font-mono font-black text-base sm:text-lg text-amber-600",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [project.contentRepository?.length || 0, " textos"] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[9px] opacity-60 block",
													children: "Prontos para auto-diagramação"
												})
											]
										})
									]
								});
							})(),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center justify-between gap-3 p-2.5 rounded-xl border-2 theme-app-card-subtle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1 w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-3.5 h-3.5 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: articleSearchQuery,
										onChange: (e) => setArticleSearchQuery(e.target.value),
										placeholder: "Buscar matérias por título, autor, categoria ou tag...",
										className: "w-full pl-8 pr-3 py-1.5 text-xs font-medium rounded-lg theme-app-input border border-current/20 focus:outline-none focus:border-amber-500"
									})]
								}), articleSearchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setArticleSearchQuery(""),
									className: "text-[10px] font-mono font-bold text-amber-600 hover:underline shrink-0 cursor-pointer",
									children: "Limpar busca"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: (() => {
									const query = articleSearchQuery.toLowerCase().trim();
									const filtered = project.articles.filter((a) => {
										if (!query) return true;
										return a.title.toLowerCase().includes(query) || a.subtitle && a.subtitle.toLowerCase().includes(query) || a.category.toLowerCase().includes(query) || a.author.toLowerCase().includes(query) || a.tags && a.tags.some((t) => t.toLowerCase().includes(query));
									});
									if (filtered.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-8 text-center rounded-xl border-2 border-dashed theme-app-card-subtle opacity-75",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-bold",
											children: [
												"Nenhuma matéria encontrada para \"",
												articleSearchQuery,
												"\"."
											]
										})
									});
									return filtered.map((art) => {
										const idx = project.articles.findIndex((a) => a.id === art.id);
										const calculatedPageNum = activePages.findIndex((p) => p.id === art.id || p.id === `${art.id}-part1`) + 1;
										const pageNum = calculatedPageNum > 0 ? calculatedPageNum : idx + 4;
										const span = getEffectiveArticlePageSpan(art);
										const isMulti = span > 1;
										const isEnabled = art.enabled !== false;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											"data-testid": "article-card",
											className: `theme-app-card p-4 rounded-xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm ${!isEnabled ? "opacity-50 bg-slate-100 border-slate-300" : ""}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4 flex-1",
												children: [art.heroImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: art.heroImage,
													alt: art.title,
													className: "w-16 h-16 rounded-lg object-cover border-2 border-black shrink-0 filter contrast-125 shadow-xs"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-16 h-16 rounded-lg theme-app-card-subtle flex items-center justify-center shrink-0 border-2 border-black",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-6 h-6 opacity-60" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center gap-2",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "bg-amber-400 text-black text-[9px] font-mono font-black px-2 py-0.5 rounded border border-black uppercase",
																	children: art.category
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-mono font-black text-amber-600",
																	children: isMulti ? `PÁG. ${formatPageNumber(pageNum)}-${formatPageNumber(pageNum + span - 1)}` : `PÁG. ${formatPageNumber(pageNum)}`
																}),
																isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "bg-black text-amber-400 font-mono text-[8px] font-black px-1.5 py-0.2 rounded border border-black uppercase",
																	children: span === 2 ? "PÁGINA DUPLA" : `${span} PÁGINAS`
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-[10px] opacity-75 font-semibold flex items-center gap-1",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
																		art.estimatedReadTime,
																		" min"
																	]
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															"data-testid": "article-card-title",
															className: "font-black text-sm sm:text-base leading-tight",
															children: art.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs opacity-75 line-clamp-1 font-medium",
															children: art.subtitle || art.content.slice(0, 100)
														})
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2 shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-300",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleMoveArticle(idx, "up"),
														disabled: idx === 0,
														className: "p-1.5 opacity-70 hover:opacity-100 disabled:opacity-20 hover:bg-black/10 rounded cursor-pointer",
														title: "Mover para cima",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveUp, { className: "w-4 h-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleMoveArticle(idx, "down"),
														disabled: idx === project.articles.length - 1,
														className: "p-1.5 opacity-70 hover:opacity-100 disabled:opacity-20 hover:bg-black/10 rounded cursor-pointer",
														title: "Mover para baixo",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveDown, { className: "w-4 h-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														size: "sm",
														variant: "outline",
														onClick: () => handleDuplicateArticle(art),
														className: "h-8 px-2.5 font-bold text-xs flex items-center gap-1 border-2 border-current cursor-pointer",
														title: "Duplicar Matéria / Clonar Template",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "hidden lg:inline",
															children: "Duplicar"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														size: "sm",
														variant: "outline",
														"data-testid": "btn-edit-article",
														onClick: () => handleEditArticle(art),
														className: "h-8 px-3 font-bold text-xs flex items-center gap-1 border-2 border-current cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Editar" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														"data-testid": "btn-delete-article",
														onClick: () => handleDeleteArticle(art.id),
														className: "p-2 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer",
														title: "Excluir Matéria",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
													})
												]
											})]
										}, art.id);
									});
								})()
							})
						]
					}),
					activeTab === "repository" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-6xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentRepositoryView, {
							project,
							onUpdateProject: (updated) => {
								setProject(updated);
								syncProjectToCloud(updated);
							},
							onOpenArticleEditor: (art) => {
								handleEditArticle(art);
								setActiveTab("articles");
							},
							onNavigateToViewer: () => setActiveTab("viewer"),
							onNavigateToArticles: () => setActiveTab("articles")
						})
					}),
					activeTab === "cover" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-4xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverCustomizer, {
							coverConfig: project.coverConfig,
							backCoverConfig: project.backCoverConfig,
							articles: project.articles,
							pageVisibility: project.pageVisibility ?? {},
							onChange: (updatedCover) => setProject({
								...project,
								coverConfig: updatedCover,
								updatedAt: (/* @__PURE__ */ new Date()).toISOString()
							}),
							onBackCoverChange: (updatedBackCover) => setProject({
								...project,
								backCoverConfig: updatedBackCover,
								updatedAt: (/* @__PURE__ */ new Date()).toISOString()
							})
						})
					}),
					activeTab === "editorial" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-4xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorialSettings, {
							project,
							onChange: (updatedProject) => setProject({
								...updatedProject,
								updatedAt: (/* @__PURE__ */ new Date()).toISOString()
							})
						})
					}),
					activeTab === "archive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-5xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditionsArchiveView, {
							currentProject: project,
							onLoadEditionIntoStudio: (loadedProject) => {
								setProject({
									...loadedProject,
									updatedAt: (/* @__PURE__ */ new Date()).toISOString()
								});
								setActiveTab("viewer");
							}
						})
					}),
					activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-4xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagazineSettings, {
							project,
							onChange: (updatedProject) => setProject({
								...updatedProject,
								updatedAt: (/* @__PURE__ */ new Date()).toISOString()
							}),
							currentUiTheme: uiThemeMode,
							onSelectUiTheme: handleSelectUiTheme
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthModal, {
				isOpen: isAuthModalOpen,
				onClose: () => setIsAuthModalOpen(false),
				onSuccess: (u) => setCurrentUser(u)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubscriptionModal, {
				isOpen: isSubscriptionModalOpen,
				onClose: () => setIsSubscriptionModalOpen(false),
				onSuccess: () => setCurrentUser(getCurrentUser())
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleEditorModal, {
				isOpen: isArticleModalOpen,
				onClose: () => setIsArticleModalOpen(false),
				article: editingArticle,
				onSave: handleSaveArticle,
				project
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiStudioDialog, {
				isOpen: isAiStudioOpen,
				onClose: () => setIsAiStudioOpen(false),
				onAddArticle: handleSaveArticle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfExportModal, {
				isOpen: isExportModalOpen,
				onClose: () => setIsExportModalOpen(false),
				project,
				theme: currentPublicationTheme,
				totalPages,
				layoutMode,
				onSelectLayoutMode: setLayoutMode,
				onOpenMockupStudio: () => {
					setIsExportModalOpen(false);
					setIsMockupStudioOpen(true);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockupStudioModal, {
				isOpen: isMockupStudioOpen,
				onClose: () => setIsMockupStudioOpen(false),
				project
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSyncDialog, {
				isOpen: isCloudSyncOpen,
				onClose: () => setIsCloudSyncOpen(false),
				project,
				onUpdateProject: (up) => setProject(up)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportFromRepositoryModal, {
				isOpen: isImportFromRepoOpen,
				onClose: () => setIsImportFromRepoOpen(false),
				project,
				onImportWithAi: handleImportWithAiFromRepo,
				onImportDirect: handleImportDirectFromRepo,
				onNavigateToAcervo: () => setActiveTab("repository")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfImportModal, {
				isOpen: isPdfRouterOpen,
				onClose: () => setIsPdfRouterOpen(false),
				project,
				onUpdateProject: (updated) => {
					setProject(updated);
					syncProjectToCloud(updated);
				},
				onOpenArticleEditor: (art) => {
					setEditingArticle(art);
					setIsArticleModalOpen(true);
				},
				onNavigateToViewer: () => setActiveTab("viewer"),
				onSuccessMessage: (msg) => setSaveStatus(msg)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiApprovalModal, {
				isOpen: isRepoApprovalOpen,
				onClose: () => setIsRepoApprovalOpen(false),
				analysis: repoAnalysisResult,
				sourceDoc: selectedRepoDoc,
				onApprove: handleApproveRepoArticle,
				onOpenAdvancedEditor: (draftArt) => {
					handleApproveRepoArticle(draftArt, selectedRepoDoc?.id);
					setEditingArticle(draftArt);
					setIsArticleModalOpen(true);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(articleToDelete),
				onOpenChange: () => setArticleToDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "theme-app-card max-w-md p-5 font-sans border-2 border-black shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "border-b-2 pb-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
								className: "text-base font-black flex items-center gap-2 text-red-600 uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Excluir Matéria da Edição" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-3 text-xs space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "opacity-90 leading-relaxed",
								children: [
									"Tem certeza que deseja excluir a matéria ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										"\"",
										articleToDelete?.title,
										"\""
									] }),
									" da revista?"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2.5 rounded bg-red-500/10 border border-red-500/20 text-[11px] text-red-700 dark:text-red-300 font-medium",
								children: "Esta ação removerá a matéria e suas páginas diagramadas da edição atual. O texto original no acervo (se houver) permanecerá preservado."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "gap-2 sm:gap-0 border-t pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setArticleToDelete(null),
								className: "h-8 font-bold text-xs cursor-pointer",
								children: "Cancelar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: handleConfirmDeleteArticle,
								className: "h-8 bg-red-600 hover:bg-red-700 text-white font-black text-xs cursor-pointer shadow-xs",
								children: "Sim, Excluir Matéria"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `print-only-container ${layoutMode === "mobile" ? "print-layout-mobile" : "print-layout-print"}`,
				children: activePages.map((page, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "magazine-print-page",
					children: page.render(idx + 1, true)
				}, page.id))
			})
		]
	});
}
//#endregion
export { Index as component };
