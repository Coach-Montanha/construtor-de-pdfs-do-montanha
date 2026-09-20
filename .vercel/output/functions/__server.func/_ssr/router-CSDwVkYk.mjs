import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { At as FileText, Bt as DollarSign, G as Printer, Gt as Cpu, J as PanelsTopLeft, K as Plus, Lt as ExternalLink, M as Shield, Mt as FileDown, N as ShieldCheck, Vt as Database, Y as Palette, _n as ArrowLeft, at as LogOut, hn as ArrowRight, j as SlidersVertical, k as Sparkles, kt as Flame, mt as Layers, nt as MessageSquare, r as Zap, u as UserCheck, wt as Globe } from "../_libs/lucide-react.mjs";
import { n as Input, r as Label, t as Button } from "./label-BMBi1IQG.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CSDwVkYk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CktN_qmT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var IMPERSONATE_STORAGE_KEY = "montanha_impersonate";
function getImpersonatedEmail() {
	if (typeof window === "undefined") return null;
	try {
		const fromUrl = new URLSearchParams(window.location.search).get("impersonate");
		if (fromUrl && fromUrl.trim()) {
			const clean = fromUrl.trim().toLowerCase();
			localStorage.setItem(IMPERSONATE_STORAGE_KEY, clean);
			return clean;
		}
		return localStorage.getItem(IMPERSONATE_STORAGE_KEY);
	} catch {
		return null;
	}
}
function clearImpersonation() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(IMPERSONATE_STORAGE_KEY);
		const url = new URL(window.location.href);
		url.searchParams.delete("impersonate");
		window.location.href = url.pathname + (url.search ? url.search : "") + url.hash;
	} catch {
		localStorage.removeItem(IMPERSONATE_STORAGE_KEY);
		window.location.reload();
	}
}
var ImpersonationBanner = () => {
	const [email, setEmail] = (0, import_react.useState)(null);
	const currentSearch = useRouterState({ select: (s) => s.location.search });
	(0, import_react.useEffect)(() => {
		setEmail(getImpersonatedEmail());
		const handleStorage = (e) => {
			if (e.key === "montanha_impersonate") setEmail(e.newValue);
		};
		window.addEventListener("storage", handleStorage);
		return () => window.removeEventListener("storage", handleStorage);
	}, [currentSearch]);
	if (!email) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-label": "Aviso de Modo Suporte Técnico",
		className: "sticky top-0 z-[9999] w-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 border-b border-amber-500/40 backdrop-blur-xl px-4 py-2 text-xs text-amber-200 shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "p-1 rounded-lg bg-amber-500/30 text-amber-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-4 h-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-extrabold uppercase tracking-wider text-[11px] text-amber-300",
							children: "Modo Suporte Técnico:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Você está operando como" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded border border-amber-500/30",
							children: email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-slate-400 hidden sm:inline",
							children: "(Privilégios de SuperAdmin ativos)"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "w-3 h-3" }), " Sessão Ativa"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: clearImpersonation,
					className: "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/50 font-bold transition text-xs cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-3 h-3" }), " Sair do modo suporte"]
				})]
			})]
		})
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
			},
			{ title: "Montanha PDF Studio - Diagramação Editorial & Publicações de Alto Nível com IA" },
			{
				name: "description",
				content: "Diagramação Editorial & Publicações de Alto Nível com IA"
			},
			{
				name: "author",
				content: "Coach Montanha"
			},
			{
				name: "theme-color",
				content: "#0B0F19"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Montanha PDF Studio"
			},
			{
				name: "application-name",
				content: "Montanha PDF Studio"
			},
			{
				property: "og:title",
				content: "Montanha PDF Studio"
			},
			{
				property: "og:description",
				content: "Diagramação Editorial & Publicações de Alto Nível com IA"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "/splash-mobile.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "manifest",
				href: "/manifest.json"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/icons/icon-512.png",
				type: "image/png"
			},
			{
				rel: "icon",
				href: "/icons/icon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
              #app-preloader {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: 999999;
                background-color: #0b0f19;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                transition: opacity 0.4s ease, visibility 0.4s ease;
              }
              #app-preloader.preloader-hidden {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                display: none !important;
              }
              .preloader-emblem-wrap {
                position: relative;
                width: 96px;
                height: 96px;
                border-radius: 28px;
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                border: 2px solid rgba(245, 158, 11, 0.4);
                box-shadow: 0 0 35px rgba(245, 158, 11, 0.3), inset 0 0 15px rgba(245, 158, 11, 0.15);
                display: flex;
                align-items: center;
                justify-content: center;
                animation: preloaderPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              .preloader-aura-ring {
                position: absolute;
                inset: -6px;
                border-radius: 34px;
                border: 1.5px solid rgba(245, 158, 11, 0.25);
                animation: auraExpand 2.5s linear infinite;
              }
              .preloader-title {
                margin-top: 22px;
                font-size: 22px;
                font-weight: 900;
                letter-spacing: -0.02em;
                color: #f8fafc;
                text-align: center;
              }
              .preloader-title span {
                color: #f59e0b;
              }
              .preloader-subtitle {
                margin-top: 6px;
                font-size: 13px;
                font-weight: 500;
                color: #94a3b8;
                text-align: center;
                max-w: 320px;
                padding: 0 16px;
              }
              .preloader-spinner {
                margin-top: 24px;
                width: 26px;
                height: 26px;
                border: 3px solid rgba(245, 158, 11, 0.15);
                border-top-color: #f59e0b;
                border-radius: 50%;
                animation: preloaderSpin 0.75s linear infinite;
              }
              .preloader-progress-track {
                margin-top: 20px;
                width: 160px;
                height: 4px;
                background: rgba(255, 255, 255, 0.08);
                border-radius: 99px;
                overflow: hidden;
              }
              .preloader-progress-bar {
                height: 100%;
                width: 60%;
                background: linear-gradient(90deg, #f59e0b, #fbbf24);
                border-radius: 99px;
                animation: progressMove 1.5s ease-in-out infinite alternate;
              }
              @keyframes preloaderPulse {
                0%, 100% { transform: scale(1); box-shadow: 0 0 35px rgba(245, 158, 11, 0.3); }
                50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(245, 158, 11, 0.5); }
              }
              @keyframes auraExpand {
                0% { opacity: 0.8; transform: scale(0.95); }
                100% { opacity: 0; transform: scale(1.2); }
              }
              @keyframes preloaderSpin {
                to { transform: rotate(360deg); }
              }
              @keyframes progressMove {
                0% { transform: translateX(-40%); }
                100% { transform: translateX(100%); }
              }
            ` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "app-preloader",
				"aria-label": "Carregando Montanha PDF Studio...",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "preloader-emblem-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-aura-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "48",
							height: "48",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#f59e0b",
							strokeWidth: "2.2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "14 2 14 8 20 8" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 13h6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 17h6" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "preloader-title",
						children: ["Montanha ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PDF Studio" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "preloader-subtitle",
						children: "Diagramação Editorial & Publicações de Alto Nível com IA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-spinner" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "preloader-progress-track",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader-progress-bar" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){
              function dismiss(){
                var p = document.getElementById('app-preloader');
                if(p){
                  p.classList.add('preloader-hidden');
                  p.style.display = 'none';
                }
              }
              if (document.readyState === 'complete') {
                setTimeout(dismiss, 50);
              } else {
                window.addEventListener('load', function(){ setTimeout(dismiss, 50); });
                setTimeout(dismiss, 500);
              }
            })();` } }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	(0, import_react.useEffect)(() => {
		const preloader = document.getElementById("app-preloader");
		if (preloader) {
			preloader.classList.add("preloader-hidden");
			preloader.style.display = "none";
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "serviceWorker" in navigator) window.addEventListener("load", () => {
			navigator.serviceWorker.register("/sw.js").then((reg) => {
				console.log("Montanha PDF Studio PWA Service Worker registrado:", reg.scope);
			}).catch((err) => {
				console.warn("Falha ao registrar Service Worker:", err);
			});
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpersonationBanner, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-C7CuJzgU.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$5 = createFileRoute("/boost")({ component: BoostPage });
var TURBO_FEATURES = [
	{
		title: "Motor de Renderização GPU Accelerated",
		metric: "60 FPS",
		description: "Renderização do canvas desacoplada da thread principal via OffscreenCanvas e Web Workers.",
		tag: "Desempenho"
	},
	{
		title: "Compressão Inteligente de Imagens",
		metric: "-75% Tamanho",
		description: "Algoritmo JPEG/WebP adaptativo que preserva nitidez de texto e compacta fotografias para envio rápido no WhatsApp.",
		tag: "Otimização"
	},
	{
		title: "Grid Suíço & Escala Tipográfica Áurea",
		metric: "1.618 Ratio",
		description: "Alinhamento automático de margens, entrelinhas e espaçamentos no padrão das revistas de design suíço.",
		tag: "Design"
	}
];
function BoostPage() {
	const [compressLevel, setCompressLevel] = (0, import_react.useState)("balanceado");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 mr-1.5 text-amber-400" }), "Turbo Renderer"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-3.5 h-3.5 mr-1.5 text-purple-400" }), "Acelerador Gráfico & Compressão"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-black tracking-tight text-white",
							children: ["Turbo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-400",
								children: "Renderer"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1",
							children: "Gere arquivos PDF ultraleves, otimizados para envio instantâneo no WhatsApp ou preparados em altíssima definição (300 DPI) para impressão profissional."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/eco",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5 mr-1.5" }), "Hub Ecossistema"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/create",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-1.5" }), "Novo Documento"]
								})
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-5",
				children: TURBO_FEATURES.map((feat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-amber-500/40 text-amber-300 text-[10px] px-2.5 py-0.5 rounded-full font-bold",
								children: feat.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-bold text-xs text-emerald-400",
								children: feat.metric
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-extrabold text-base text-white",
							children: feat.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-300 leading-relaxed",
							children: feat.description
						})
					]
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-slate-800 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "w-5 h-5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-extrabold text-base text-white",
							children: "Modo de Compressão de Exportação"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Escolha o balanço entre tamanho do arquivo e qualidade gráfica"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => setCompressLevel("maximo"),
								className: `p-3.5 rounded-xl border cursor-pointer transition ${compressLevel === "maximo" ? "bg-amber-600/15 border-amber-500 text-white" : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm",
										children: "📱 Máxima Compressão (WhatsApp)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-emerald-400 font-bold",
										children: "~ 300 KB"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-1",
									children: "Ideal para disparo em massa via WhatsApp. Carregamento instantâneo em celulares sem consumo de franquia de dados."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => setCompressLevel("balanceado"),
								className: `p-3.5 rounded-xl border cursor-pointer transition ${compressLevel === "balanceado" ? "bg-amber-600/15 border-amber-500 text-white" : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm",
										children: "⚖️ Balanceado (Digital & E-mail)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-cyan-400 font-bold",
										children: "~ 1.2 MB"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-1",
									children: "Equilíbrio perfeito de alta resolução para visualização em tablets, notebooks e impressão doméstica."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => setCompressLevel("baixo"),
								className: `p-3.5 rounded-xl border cursor-pointer transition ${compressLevel === "baixo" ? "bg-amber-600/15 border-amber-500 text-white" : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm",
										children: "🖨️ Gráfica Profissional (300 DPI)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-purple-400 font-bold",
										children: "~ 4.5 MB"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-1",
									children: "Exportação sem perdas, marcas de corte e sangria pronta para gráficas e editoras."
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 border-b border-slate-800 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-5 h-5 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-extrabold text-base text-white",
								children: "Paletas Suíças de Alta Conversão"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Esquemas de cores predefinidos com contraste AAA"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-white block",
										children: "Montanha Dark Gold"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Onyx (#0B0F19) + Amber Gold (#F59E0B)"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-6 rounded-lg bg-[#0B0F19] border border-slate-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-6 rounded-lg bg-[#F59E0B]" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-white block",
										children: "Hybrid Neon Cyan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Slate (#0F172A) + Cyan (#06B6D4)"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-6 rounded-lg bg-[#0F172A] border border-slate-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-6 rounded-lg bg-[#06B6D4]" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-white block",
										children: "Studio Emerald"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: "Dark Forest (#064E3B) + Mint (#10B981)"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-6 rounded-lg bg-[#064E3B] border border-slate-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-6 h-6 rounded-lg bg-[#10B981]" })]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "w-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "w-3.5 h-3.5 mr-1.5" }), " Abrir no Construtor Visual"]
							})
						})
					]
				})]
			})
		]
	});
}
var Route$4 = createFileRoute("/create")({ component: CreateStudioPage });
var DOCUMENT_TEMPLATES = [
	{
		id: "ficha-treino",
		title: "Ficha de Treino & Periodização",
		format: "A4 Retrato / Paisagem",
		tag: "Treinamento Híbrido",
		color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
		description: "Tabelas completas com séries, repetições, carga, RPE, descanso e notas técnicas do coach."
	},
	{
		id: "relatorio-fisico",
		title: "Relatório de Avaliação Física & Bioimpedância",
		format: "A4 Editorial (3 a 5 páginas)",
		tag: "Studio & Performance",
		color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
		description: "Gráficos de evolução de % de gordura, massa magra, circunferências e fotos de antes/depois."
	},
	{
		id: "contrato-digital",
		title: "Contrato de Prestação de Serviços",
		format: "A4 Jurídico (2 páginas)",
		tag: "Finanças & Proteção",
		color: "border-purple-500/40 bg-purple-500/10 text-purple-300",
		description: "Termo de compromisso para personal trainer e alunos com assinatura e cláusulas claras."
	},
	{
		id: "ebook-manual",
		title: "E-book / Manual Técnico de Exercícios",
		format: "A4 / E-book Digital",
		tag: "Publicação Editorial",
		color: "border-amber-500/40 bg-amber-500/10 text-amber-300",
		description: "Diagramação no estilo revista suíça com capa, sumário, fotos de alta resolução e tipografia premium."
	}
];
function CreateStudioPage() {
	const navigate = useNavigate();
	const [docTitle, setDocTitle] = (0, import_react.useState)("");
	const [selectedTemplate, setSelectedTemplate] = (0, import_react.useState)("ficha-treino");
	const handleCreateDocument = (e) => {
		e.preventDefault();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-1.5 text-amber-400" }), "Estúdio de Diagramação com IA"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "w-3.5 h-3.5 mr-1.5 text-purple-400" }), "Padrão Editorial Suíço"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-black tracking-tight text-white",
							children: ["Criação de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-400",
								children: "PDFs & Publicações"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1",
							children: "Gere documentos elegantes, prontos para impressão em 300 DPI ou envio imediato via WhatsApp."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/eco",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-3.5 h-3.5 mr-1.5" }), "Hub Ecossistema"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-amber-500/40 hover:bg-amber-500/10 text-amber-300 text-xs font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/boost",
										children: "Turbo Renderer"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										children: ["Abrir Editor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5 ml-1.5" })]
									})
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-slate-800 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-extrabold text-base text-white flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-5 h-5 text-amber-400" }), "Criar Novo Documento Editorial"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Escolha o modelo de base e configure o título da publicação"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleCreateDocument,
					className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "docTitle",
								className: "text-xs font-bold",
								children: "Título do Documento"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "docTitle",
								placeholder: "Ex: Guia de Periodização para Hipertrofia e Endurance 2026",
								value: docTitle,
								onChange: (e) => setDocTitle(e.target.value),
								className: "bg-slate-900 border-slate-800",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "tpl",
								className: "text-xs font-bold",
								children: "Modelo Pré-Configurado"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "tpl",
								value: selectedTemplate,
								onChange: (e) => setSelectedTemplate(e.target.value),
								className: "w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white outline-none focus:border-amber-500 font-bold",
								children: DOCUMENT_TEMPLATES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t.id,
									children: t.title
								}, t.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-3 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								className: "bg-gradient-to-r from-amber-600 to-orange-600 hover:opacity-90 text-white font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 mr-1.5" }), " Abrir no Diagramador Visual"]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-black tracking-tight text-white flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-6 h-6 text-amber-400" }), "Modelos Disponíveis no Ecossistema"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Compatíveis com exportação para PDF de alta fidelidade e envio direto pelo WhatsApp."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-5",
					children: DOCUMENT_TEMPLATES.map((tpl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${tpl.color}`,
										children: tpl.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-slate-700 text-slate-400 text-[10px] px-2 py-0.5 rounded",
										children: tpl.format
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-extrabold text-base text-white",
									children: tpl.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-300 leading-relaxed",
									children: tpl.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "w-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 text-white text-xs font-bold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5 mr-1.5 text-amber-400" }), " Usar este Modelo"]
								})
							})
						})]
					}, tpl.id))
				})]
			})
		]
	});
}
var Route$3 = createFileRoute("/eco")({ component: EcoPage });
var ECOSYSTEM_APPS = [
	{
		id: "construtor-pdf",
		name: "Montanha PDF Studio",
		tag: "Plataforma Atual",
		category: "Diagramação Editorial & PDFs",
		color: "border-amber-500/40 bg-amber-500/10 text-amber-300",
		icon: FileText,
		url: "/",
		isLocal: true,
		description: "Diagramador de fichas de treino, relatórios financeiros, e-books e publicações com padrão editorial suíço."
	},
	{
		id: "sistema-hibrido",
		name: "Montanha Hybrid Training",
		tag: "Treinamento & Periodização",
		category: "Alta Performance & Endurance",
		color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
		icon: Flame,
		url: "http://localhost:5176/eco",
		isLocal: false,
		description: "Plataforma de periodização de treinos com IA, endurance, musculação, LPO e kettlebell."
	},
	{
		id: "eduflow-finance",
		name: "Montanha Personal Studio",
		tag: "EduFlow Finance",
		category: "Finanças & Gestão de Studio",
		color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
		icon: DollarSign,
		url: "http://localhost:5173/eco",
		isLocal: false,
		description: "Gestão financeira para personal trainers, controle de alunos, cobrança e contratos digitais."
	},
	{
		id: "smart-language",
		name: "Montanha Language AI",
		tag: "Smart Language",
		category: "Idiomas & Imersão com IA",
		color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
		icon: Globe,
		url: "http://localhost:5174/eco",
		isLocal: false,
		description: "Tutor de idiomas inteligente com IA, microtreinos de 5 minutos e fluência acelerada."
	},
	{
		id: "whatsapp-lovable",
		name: "Montanha WhatsApp Automation",
		tag: "SaaS WhatsApp",
		category: "Automação & CRM",
		color: "border-purple-500/40 bg-purple-500/10 text-purple-300",
		icon: MessageSquare,
		url: "http://localhost:3000/#/eco",
		isLocal: false,
		description: "Disparos automáticos de PDFs de treino e cobrança diretamente no WhatsApp do aluno."
	}
];
function EcoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 mr-1.5 text-amber-400" }), "Ecossistema Montanha Hub"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 mr-1.5 text-purple-400" }), "Ruflo Eco Engine v2.5"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl md:text-5xl font-black tracking-tight text-white",
							children: ["Hub do Ecossistema ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-400",
								children: "Montanha"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed",
							children: "Central integrada do ecossistema de 5 aplicativos. Gere e diagrame materiais para treinos, relatórios financeiros e apostilas de idiomas com consistência visual absoluta e economia de tokens."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/create",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 mr-2" }), "Estúdio de Diagramação"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-amber-500/40 hover:bg-amber-500/10 text-amber-300 font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/boost",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 mr-2" }), "Turbo Renderer"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-purple-500/40 hover:bg-purple-500/10 text-purple-300 font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/master-admin",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 mr-2" }), "Painel Master SuperAdmin"]
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-5 border border-amber-500/20 bg-slate-900/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Economia de Tokens"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-amber-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-amber-400",
								children: "84.7%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Redução de custo de diagramação com Ruflo /eco"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-5 border border-purple-500/20 bg-slate-900/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Cache de Moldes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-4 h-4 text-purple-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-purple-400",
								children: "0 Tokens"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Layouts e grids armazenados em cache local"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-5 border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Renderização Gráfica"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-4 h-4 text-cyan-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-cyan-400",
								children: "Canvas Otimizado"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Compressão inteligente sem perda tipográfica"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-5 border border-emerald-500/20 bg-slate-900/60 backdrop-blur-md space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Padrão Suíço"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-emerald-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-black text-emerald-400",
								children: "300 DPI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Resolução pronta para impressão profissional"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-black tracking-tight text-white flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-6 h-6 text-amber-400" }), "Aplicativos do Ecossistema Montanha"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Integração nativa para emissão de relatórios, treinos e comunicação."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: ECOSYSTEM_APPS.map((app) => {
						const Icon = app.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl p-6 border transition-all duration-200 hover:shadow-xl hover:border-amber-500/50 bg-slate-900/70 backdrop-blur-md flex flex-col justify-between space-y-4 ${app.isLocal ? "ring-2 ring-amber-500/30" : "border-slate-800"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-end gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${app.color}`,
												children: app.tag
											}), app.isLocal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-amber-400",
												children: "App Local"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-extrabold text-base text-white",
										children: app.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-muted-foreground",
										children: app.category
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-300 leading-relaxed",
										children: app.description
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2",
								children: app.isLocal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "w-full bg-amber-600 hover:bg-amber-500 text-white font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: app.url,
										children: ["Acessar Aplicativo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-1.5" })]
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "w-full border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/10 font-bold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: app.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Abrir Módulo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4 ml-1.5" })]
									})
								})
							})]
						}, app.id);
					})
				})]
			})
		]
	});
}
var $$splitComponentImporter = () => import("./master-admin-Du5eKSc7.mjs");
var Route$2 = createFileRoute("/master-admin")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var AiRequestSchema = objectType({
	prompt: stringType().min(1).max(5e4),
	systemInstruction: stringType().max(1e4).optional()
});
var rateLimitMap = /* @__PURE__ */ new Map();
var RATE_LIMIT_WINDOW_MS = 6e4;
var MAX_REQUESTS_PER_WINDOW = 20;
function checkRateLimit(clientKey) {
	const now = Date.now();
	const record = rateLimitMap.get(clientKey);
	if (rateLimitMap.size > 500) {
		for (const [k, v] of rateLimitMap.entries()) if (now > v.resetTime) rateLimitMap.delete(k);
	}
	if (!record || now > record.resetTime) {
		rateLimitMap.set(clientKey, {
			count: 1,
			resetTime: now + RATE_LIMIT_WINDOW_MS
		});
		return true;
	}
	if (record.count >= MAX_REQUESTS_PER_WINDOW) return false;
	record.count++;
	return true;
}
var Route$1 = createFileRoute("/api/ai")({ server: { handlers: { POST: async ({ request }) => {
	if (!checkRateLimit(request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous")) return new Response(JSON.stringify({ error: "Limite de requisições excedido. Aguarde um minuto antes de solicitar nova geração com IA." }), {
		status: 429,
		headers: {
			"Content-Type": "application/json",
			"Retry-After": "60"
		}
	});
	const apiKey = process.env["GEMINI_API_KEY"];
	if (!apiKey) return new Response(JSON.stringify({ error: "Chave de API Gemini não configurada no servidor. Defina a variável de ambiente GEMINI_API_KEY." }), {
		status: 503,
		headers: { "Content-Type": "application/json" }
	});
	try {
		const rawBody = await request.json();
		const parsed = AiRequestSchema.safeParse(rawBody);
		if (!parsed.success) return new Response(JSON.stringify({
			error: "Parâmetros de requisição inválidos.",
			details: parsed.error.issues
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const { prompt, systemInstruction } = parsed.data;
		const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
		const requestBody = { contents: [{ parts: [{ text: prompt }] }] };
		if (systemInstruction) requestBody["systemInstruction"] = { parts: [{ text: systemInstruction }] };
		const response = await fetch(endpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(requestBody)
		});
		if (!response.ok) {
			const message = (await response.json().catch(() => ({})))?.error?.message || "Erro na resposta da API Gemini.";
			console.error("[Gemini API Server Error]:", message);
			return new Response(JSON.stringify({ error: "Falha na comunicação com o serviço de IA." }), {
				status: 502,
				headers: { "Content-Type": "application/json" }
			});
		}
		const outputText = (await response.json())?.candidates?.[0]?.content?.parts?.[0]?.text;
		if (!outputText) return new Response(JSON.stringify({ error: "A IA não retornou conteúdo textual." }), {
			status: 502,
			headers: { "Content-Type": "application/json" }
		});
		return new Response(JSON.stringify({ text: outputText.trim() }), { headers: { "Content-Type": "application/json" } });
	} catch (err) {
		console.error("[AI Route Error]:", err);
		return new Response(JSON.stringify({ error: "Erro interno no processamento da IA." }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var projectStore = /* @__PURE__ */ new Map();
var latestRecord = null;
var CLOUD_API_URL = `https://api.restful-api.dev/objects/ff808181a067127101a0798e229d2bfb`;
var Route = createFileRoute("/api/project")({ server: { handlers: {
	GET: async ({ request }) => {
		const requestedCode = (new URL(request.url).searchParams.get("code") || "").trim().toUpperCase();
		let targetRecord = null;
		if (requestedCode && projectStore.has(requestedCode)) targetRecord = projectStore.get(requestedCode);
		else if (latestRecord) targetRecord = latestRecord;
		if (!targetRecord || requestedCode && targetRecord.code !== requestedCode) try {
			const res = await fetch(CLOUD_API_URL, { headers: { Accept: "application/json" } });
			if (res.ok) {
				const cloudObj = await res.json();
				if (cloudObj?.data?.project) {
					targetRecord = {
						code: cloudObj.data.code || "MONTANHA",
						project: cloudObj.data.project,
						syncedAt: cloudObj.data.syncedAt || (/* @__PURE__ */ new Date()).toISOString()
					};
					projectStore.set(targetRecord.code, targetRecord);
					latestRecord = targetRecord;
				}
			}
		} catch (err) {
			console.warn("[Cloud API Fetch Warning]:", err);
		}
		if (!targetRecord) return new Response(JSON.stringify({
			error: "Nenhum projeto encontrado na nuvem para este código.",
			code: requestedCode || null
		}), {
			status: 404,
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-store, no-cache, must-revalidate"
			}
		});
		return new Response(JSON.stringify({
			success: true,
			code: targetRecord.code,
			project: targetRecord.project,
			syncedAt: targetRecord.syncedAt
		}), { headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-store, no-cache, must-revalidate"
		} });
	},
	POST: async ({ request }) => {
		try {
			const body = await request.json();
			const project = body?.project;
			const code = (body?.code || "MONTANHA").trim().toUpperCase();
			if (!project || typeof project !== "object" || !Array.isArray(project.articles)) return new Response(JSON.stringify({ error: "Estrutura do projeto inválida para sincronização." }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			const now = (/* @__PURE__ */ new Date()).toISOString();
			const record = {
				code,
				project,
				syncedAt: now
			};
			projectStore.set(code, record);
			latestRecord = record;
			try {
				await fetch(CLOUD_API_URL, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: `Montanha Magazine [${code}]`,
						data: {
							code,
							syncedAt: now,
							project
						}
					})
				});
			} catch (cloudErr) {
				console.warn("[Cloud API Put Warning]:", cloudErr);
			}
			return new Response(JSON.stringify({
				success: true,
				code,
				syncedAt: now
			}), { headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-store, no-cache, must-revalidate"
			} });
		} catch (err) {
			return new Response(JSON.stringify({ error: "Erro interno no servidor ao sincronizar projeto: " + err.message }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	BoostRoute: Route$5.update({
		id: "/boost",
		path: "/boost",
		getParentRoute: () => Route$7
	}),
	CreateRoute: Route$4.update({
		id: "/create",
		path: "/create",
		getParentRoute: () => Route$7
	}),
	EcoRoute: Route$3.update({
		id: "/eco",
		path: "/eco",
		getParentRoute: () => Route$7
	}),
	MasterAdminRoute: Route$2.update({
		id: "/master-admin",
		path: "/master-admin",
		getParentRoute: () => Route$7
	}),
	ApiAiRoute: Route$1.update({
		id: "/api/ai",
		path: "/api/ai",
		getParentRoute: () => Route$7
	}),
	ApiProjectRoute: Route.update({
		id: "/api/project",
		path: "/api/project",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
