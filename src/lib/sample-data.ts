import { MagazineProject, MagazineTheme } from "../types/magazine";

export const MAGAZINE_THEMES: MagazineTheme[] = [
  {
    id: "montanha-titanium",
    name: "Montanha Mad Methods (Industrial Yellow)",
    description: "Estética My Mad Methods: Preto profundo, cinza industrial, amarelo de alta visibilidade e tipografia tática ultra-pesada.",
    primaryColor: "#FACC15", // Industrial Yellow
    accentColor: "#EAB308",
    textColor: "#0F172A",
    bgLight: "#F8FAFC",
    bgDark: "#0B0F19",
    cardBg: "#111827",
    borderColor: "#374151",
    fontHeadline: "font-sans font-black tracking-tighter uppercase",
    fontBody: "font-sans leading-relaxed text-slate-800",
    fontSerif: false,
  },
  {
    id: "tactical-iron",
    name: "Tactical Iron & Orange",
    description: "Laranja de sinalização agressivo, grafite fosco e detalhes em stencil técnico de treinamento não-convencional.",
    primaryColor: "#F97316", // Warning Orange
    accentColor: "#EA580C",
    textColor: "#0F172A",
    bgLight: "#FFF7ED",
    bgDark: "#090D16",
    cardBg: "#1E293B",
    borderColor: "#475569",
    fontHeadline: "font-mono font-black tracking-tight uppercase",
    fontBody: "font-sans leading-relaxed text-slate-800",
    fontSerif: false,
  },
  {
    id: "monochrome-grit",
    name: "Monochrome Heavy Iron & Red",
    description: "Alto contraste bruto em preto e branco marfim, textura de ferro fundido e destaques em vermelho rubi.",
    primaryColor: "#EF4444", // Crimson Red
    accentColor: "#FFFFFF",
    textColor: "#18181B",
    bgLight: "#F4F4F5",
    bgDark: "#000000",
    cardBg: "#18181B",
    borderColor: "#27272A",
    fontHeadline: "font-sans font-black tracking-tight uppercase",
    fontBody: "font-sans leading-relaxed text-zinc-900",
    fontSerif: false,
  },
  {
    id: "cyber-neon",
    name: "Cyber Tech & Conditioning",
    description: "Estética futurista e biohacking com destaques em ciano elétrico e visual geométrico afiado.",
    primaryColor: "#06B6D4",
    accentColor: "#3B82F6",
    textColor: "#0F172A",
    bgLight: "#F0FDF4",
    bgDark: "#020617",
    cardBg: "#0F172A",
    borderColor: "#1E293B",
    fontHeadline: "font-mono font-extrabold tracking-tighter uppercase",
    fontBody: "font-sans leading-relaxed text-slate-700",
    fontSerif: false,
  },
  {
    id: "vogue-haute",
    name: "Editorial Classic & Luxury",
    description: "Elegância pura em preto e branco marfim com tipografia serifada clássica.",
    primaryColor: "#111827",
    accentColor: "#6B7280",
    textColor: "#1F2937",
    bgLight: "#FAFAF9",
    bgDark: "#18181B",
    cardBg: "#F4F4F5",
    borderColor: "#E4E4E7",
    fontHeadline: "font-serif font-bold tracking-normal",
    fontBody: "font-serif leading-loose text-stone-800",
    fontSerif: true,
  },
  {
    id: "wellness-botanic",
    name: "Wellness & Natureza",
    description: "Tons terrosos e verde esmeralda com estilo orgânico para saúde e longevidade.",
    primaryColor: "#059669",
    accentColor: "#10B981",
    textColor: "#064E3B",
    bgLight: "#F0FDF4",
    bgDark: "#064E3B",
    cardBg: "#ECFDF5",
    borderColor: "#A7F3D0",
    fontHeadline: "font-sans font-semibold tracking-wide uppercase",
    fontBody: "font-sans leading-relaxed text-emerald-950",
    fontSerif: false,
  },
];

export const INITIAL_MAGAZINE_PROJECT: MagazineProject = {
  id: "montanha-mag-01",
  title: "MONTANHA MAGAZINE",
  subtitle: "UNCONVENTIONAL STRENGTH & PERFORMANCE",
  editionNumber: "01",
  volume: "VOL. 01",
  date: "SETEMBRO 2026",
  category: "UNCONVENTIONAL TRAINING",
  themeId: "montanha-titanium",
  coverConfig: {
    mastheadText: "MONTANHA MAGAZINE",
    sloganText: "UNCONVENTIONAL STRENGTH & PERFORMANCE",
    issueBadge: "ISSUE #01 • SPECIAL COLLECTOR DOSSIER",
    mainHeadline: "UNCONVENTIONAL STRENGTH: THE HEAVY IRON REVOLUTION",
    subHeadline: "DOMINANDO KETTLEBELLS, MACES, SANDBAGS E PROTOCOLOS DE FORÇA BRUTA PARA UMA PERFORMANCE INDESTRUTÍVEL.",
    authorCallout: "POR COACH MONTANHA & MASTER ATHLETES",
    categoryTag: "EXCLUSIVE DOSSIER",
    issueDate: "SETEMBRO 2026",
    editionNumber: "Nº 01",
    priceBadge: "TECHNICAL SPEC / ED. 01",
    barcodeText: "9 771234 567003 01",
    hexBadgeText: "VOL.01 // DOC.01",
    coverStyleVariant: "mad-methods",
    showHazardStripe: true,
    showTechHud: true,
    backgroundImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85",
    backgroundOverlayOpacity: 45,
    highlights: [
      {
        id: "hl-1",
        tag: "// 01. BALÍSTICA & POTÊNCIA",
        title: "Kettlebell Swing Pesado: O Segredo para Cadeia Posterior e Condicionamento de Choque",
        authorCallout: "Coach Montanha",
        pageTarget: 5,
      },
      {
        id: "hl-2",
        tag: "// 02. TORQUE ROTACIONAL",
        title: "Steel Mace & Clubbell: Blindando Ombros e Construindo Força Funcional 3D",
        authorCallout: "Dra. Helena Vasconcelos",
        pageTarget: 6,
      },
      {
        id: "hl-3",
        tag: "// 03. MINDSET DE FERRO",
        title: "A Psicologia do Implacável: Como Executar Quando a Motivação Desaparece",
        authorCallout: "Coach Montanha",
        pageTarget: 7,
      },
    ],
    footerHighlights: [
      "KETTLEBELL DYNAMICS",
      "STEEL MACEBELLS",
      "SANDBAGS",
      "HEAVY IRON",
      "RAW CONDITIONING",
    ],
  },
  editorialInfo: {
    editorName: "Coach Montanha",
    editorRole: "Fundador & Editor-Chefe",
    editorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
    editorActionPhoto: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=85",
    editorLetterTitle: "O MANIFESTO DA FORÇA NÃO-CONVENCIONAL",
    editorLetter: `Bem-vindo à edição inaugural da MONTANHA MAGAZINE.

Esta publicação é uma declaração de guerra contra o treino passivo, as máquinas guiadas que anestesiam o corpo e as ilusões de atalhos confortáveis. Inspirada pela metodologia crua e visceral do treinamento não-convencional (My Mad Methods style), nossa missão é resgatar a capacidade física primordial do ser humano.

Aqui, o ferro fundido, os kettlebells pesados, as clavas de aço, os sacos de areia e o próprio peso corporal são ferramentas de transformação profunda. Não buscamos apenas hipertrofia estética; forjamos poder explosivo, estabilidade angular, mobilidade blindada e uma mente que não se curva sob pressão.

Abrace a fricção. Domine a técnica nos detalhes invisíveis. Seja bem-vindo à irmandade da alta performance.`,
    editorialNote: "Montanha Magazine é um periódico dedicado a métodos não-convencionais de força, calistenia pesada, condicionamento tático e mindset espartano.",
    disclaimerText: "AVISO LEGAL & MÉDICO: Os métodos de treinamento, exercícios não-convencionais e protocolos descritos nesta publicação exigem disciplina e supervisão técnica. Consulte sempre um médico e um profissional de educação física antes de iniciar qualquer programa de alta intensidade. Todos os direitos reservados à Montanha Media Group © 2026.",
    credits: [
      { id: "c1", role: "Editor-Chefe & Direção Geral", name: "Coach Montanha" },
      { id: "c2", role: "Direção de Arte & Design Tático", name: "Montanha Tactical Design" },
      { id: "c3", role: "Pesquisa & Fisiologia Não-Convencional", name: "Conselho de Força & Biomecânica" },
      { id: "c4", role: "Fotografia Editorial de Ação", name: "Montanha Iron Media" },
    ],
    contributors: [
      {
        id: "con-1",
        name: "COACH MONTANHA",
        title: "MASTER KETTLEBELL INSTRUCTOR // FOUNDER",
        bio: "Pioneiro do treinamento não-convencional e biomecânica de alta performance no Brasil. Especialista em força balística e periodização tática.",
        photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
        handle: "@coachmontanha",
        facility: "MONTANHA IRON LAB // MATRIZ",
      },
      {
        id: "con-2",
        name: "DRA. HELENA VASCONCELOS",
        title: "NEUROCIENTISTA & BIOHACKER // MD",
        bio: "Pesquisadora em fisiologia do sono profundo, variabilidade cardíaca (HRV) e restauração neuromuscular em atletas de alto rendimento.",
        photo: "https://images.unsplash.com/photo-1594824813628-98e3b48a1c97?auto=format&fit=crop&w=400&q=80",
        handle: "@drahelenavasconcelos",
        facility: "NEURORECOVERY INSTITUTE",
      },
      {
        id: "con-3",
        name: "MARCUS 'VIKING' SILVA",
        title: "STEEL MACE & CLUBBELL SPECIALIST // CSCS",
        bio: "Instrutor sênior de alavancas rotacionais e treinamento tridimensional. Focado em saúde escapular e prevenção de lesões em esportes de combate.",
        photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
        handle: "@viking.strength",
        facility: "TACTICAL COMBAT LAB",
      },
    ],
  },
  articles: [
    {
      id: "art-1",
      title: "KETTLEBELL DYNAMICS: O PODER BALÍSTICO DO SWING",
      subtitle: "Como o kettlebell pesado recruta a cadeia posterior, desenvolve potência de quadril e cria um motor cardiovascular inesgotável.",
      category: "UNCONVENTIONAL IRON",
      author: "Coach Montanha",
      authorBio: "Master Kettlebell Instructor e especialista em força funcional não-convencional.",
      authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "A extensão violenta do quadril gera aceleração balística inigualável.",
      heroImagePrompt: "Athletic fighter doing heavy kettlebell swing in dark gritty industrial gym, chalk dust, cinematic rim lighting, 8k",
      content: `O kettlebell não é apenas um haltere com alça; é uma ferramenta de aceleração centrífuga e desaceleração excêntrica violenta. Ao contrário dos pesos convencionais onde a trajetória é linear e estática, o kettlebell exige que o sistema neuromuscular estabilize forças dinâmicas em múltiplos planos.

**A Explosão do Hinge de Quadril**
O exercício mestre — o Kettlebell Swing Hardstyle — ensina o corpo a gerar potência máxima a partir dos glúteos e isquiotibiais, transferindo essa força através de um core travado em prancha balística. Em milissegundos, o atleta transita do relaxamento elástico para uma contração isométrica total.

**Densidade e Capacidade de Trabalho**
Ao combinar protocolos de 10x10 com kettlebells de 32kg ou 40kg, o limiar de lactato é empurrado a níveis extremos. O coração opera na zona anaeróbica enquanto as fibras musculares do tipo II são recrutadas em sua plenitude.`,
      pullQuotes: [
        "O kettlebell pune a negligência e premia o respeito: domine a trajetória ou seja dominado por ela.",
        "Potência não é o quanto você levanta, mas com que velocidade e violência você projeta a massa no espaço.",
      ],
      calloutBox: {
        title: "PROTOCOLOS DE CHOQUE DO COACH",
        content: "EMOM 10 Minutos: 10 Heavy Swings (32kg+) no início de cada minuto com postura perfeita e travamento de glúteos.",
      },
      keyTakeaways: [
        "A força vem do quadril, nunca dos braços.",
        "Mantenha a coluna neutra e a dorsal engatada para proteger a lombar.",
        "Expire com força no topo do movimento criando pressão intra-abdominal máxima.",
      ],
      layoutTemplate: "editorial-lead",
      tags: ["Kettlebell", "Balística", "Cadeia Posterior", "Montanha"],
      estimatedReadTime: 5,
      featuredOnCover: true,
    },
    {
      id: "art-2",
      title: "STEEL MACE & CLUBBELLS: A ARTE DO TORQUE 3D",
      subtitle: "Restaurando a saúde escapular, a força de pegada e a rotação anti-fragilidade com alavancas assimétricas.",
      category: "ROTATIONAL STRENGTH",
      author: "Dra. Helena Vasconcelos",
      authorBio: "Fisioterapeuta esportiva e treinadora de mobilidade tática.",
      heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "A distribuição desbalanceada do peso desafia o manguito rotador em todos os ângulos.",
      content: `A vida e o esporte acontecem em rotação e espirais, mas a musculação clássica insiste em treinar apenas em linhas retas (flexão e extensão no plano sagital). É exatamente nesse vácuo que a Steel Mace (maça de aço) se torna uma arma revolucionária.

**O Efeito da Alavanca Longa**
Com 90% da massa concentrada na ponta de uma haste de aço de 1 metro, uma maça de apenas 7kg produz torque comparável a dezenas de quilos nas articulações dos ombros e oblíquos. O exercício tradicional 360 e 10-to-2 força a cintura escapular a abrir espaço articular e desenvolver estabilidade reflexa.

**Força de Punho e Antebraço**
A empunhadura espessa e a constante rotação exigem que os flexores e extensores do punho trabalhem em co-contração, eliminando fraquezas e dores crônicas nos cotovelos e ombros.`,
      pullQuotes: [
        "Treinar em rotação é a chave para construir um corpo verdadeiramente à prova de lesões.",
      ],
      calloutBox: {
        title: "CHECKLIST DO 360",
        content: "Mãos fechadas no final da haste • Costelas para baixo sem hiperestender a coluna • Movimento fluido gerado pelos cotovelos.",
      },
      keyTakeaways: [
        "Elimine pontos cegos articulares através do treino com alavancas assimétricas.",
        "Desenvolva pegada e antebraço de aço sem sobrecarregar tendões.",
        "Integre movimentos multiplanares na sua rotina semanal.",
      ],
      layoutTemplate: "two-column-quote",
      tags: ["Macebell", "Clubbell", "Ombros", "Torque"],
      estimatedReadTime: 4,
      featuredOnCover: true,
    },
    {
      id: "art-3",
      title: "MENTE DE FERRO: A PSICOLOGIA DO IMPLACÁVEL",
      subtitle: "Por que depender de motivação é o erro número um e como construir disciplina blindada contra a desistência.",
      category: "WARRIOR MINDSET",
      author: "Coach Montanha",
      authorBio: "Mentor de atletas e executivos.",
      heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "A mente manda, o corpo obedece.",
      content: `No universo da alta performance não existem dias neutros: ou você está avançando ou está retrocedendo. Quando você condiciona sua mente a executar os treinos mais duros mesmo quando todo o seu corpo implora pelo sofá, você transcende a mediocridade.

**O Princípio da Exigência Pessoal**
A autoconfiança inabalável não é fruto de pensamentos positivos; ela é construída sobre uma pilha incontestável de evidências de tarefas difíceis completadas dia após dia.

**Vencendo o Diálogo Interno**
No momento em que o cansaço atinge o ápice na décima série de um treino pesado, a voz do conforto sussurrará para você parar. O guerreiro reconhece essa voz e a usa como combustível para acelerar ainda mais.`,
      pullQuotes: [
        "A disciplina liberta: quem controla a própria vontade não é escravo de impulsos fracos.",
      ],
      keyTakeaways: [
        "Construa sua reputação interna completando o que prometeu a si mesmo.",
        "Trate o desconforto como um sinal biológico de crescimento.",
        "Não negocie com a preguiça: estabeleça rituais inegociáveis.",
      ],
      layoutTemplate: "infographic-tips",
      tags: ["Mindset", "Disciplina", "Espartano"],
      estimatedReadTime: 3,
      featuredOnCover: true,
    },
  ],
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
      email: "contato@coachmontanha.com.br",
    },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
