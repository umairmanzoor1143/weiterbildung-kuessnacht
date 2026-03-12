// ─── Navigation Data ─────────────────────────────────────────────────────────

export const kurseItems = [
  { slug: "januar", label: "Januar" },
  { slug: "maerz", label: "März" },
  { slug: "juli", label: "Juli" },
] as const;

export const anbietendeItems = [
  { slug: "elternkinder", label: "Eltern & Kinder" },
  { slug: "essentrinken", label: "Essen & Trinken" },
  { slug: "erstehilfe", label: "Erste Hilfe" },
  { slug: "fitnessyoga", label: "Fitness & Yoga" },
  { slug: "gesundheit", label: "Gesundheit" },
  { slug: "informatik", label: "Informatik" },
  { slug: "kulturgeschichte", label: "Kultur & Geschichte" },
  { slug: "modelifestyle", label: "Mode & Lifestyle" },
  { slug: "malenhandwerk", label: "Malen & Handwerk" },
  { slug: "musik", label: "Musik" },
  { slug: "selbsterfahrung", label: "Selbsterfahrung" },
  { slug: "senioren", label: "Senioren" },
  { slug: "sprachen", label: "Sprachen" },
] as const;

export const vereinItems = [
  { slug: "verein", label: "Über uns" },
  { slug: "anlaesse", label: "Anlässe" },
  { slug: "club", label: "Clubtreffen" },
  { slug: "anmelden", label: "Kursanmeldung" },
  { slug: "mitgliedschaft", label: "Mitgliedschaft" },
] as const;

// ─── Slug Sets (for quick lookup) ────────────────────────────────────────────

export const kurseSlugs = new Set<string>(kurseItems.map((i) => i.slug));
export const anbietendeSlugs = new Set<string>(anbietendeItems.map((i) => i.slug));
export const vereinSlugs = new Set<string>(vereinItems.map((i) => i.slug));

// ─── Verein Data ─────────────────────────────────────────────────────────────

export interface VorstandMember {
  name: string;
  role: string;
  image: string;
}

export const vorstandMembers: VorstandMember[] = [
  {
    name: "Marco Birrer",
    role: "Präsident",
    image:
      "https://static.wixstatic.com/media/347173_67958b0331154cb2935d089c2d1522d2~mv2.png/v1/fill/w_213,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Marco_edited_edited.png",
  },
  {
    name: "Salome Muoth",
    role: "Anlässe & Events",
    image:
      "https://static.wixstatic.com/media/347173_d3433082a42f4c71a26fb3a22963713f~mv2.png/v1/fill/w_213,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/02%20Salome_edited_edited.png",
  },
  {
    name: "Kathi Derendinger",
    role: "Geschäftsstelle & Finanzen",
    image:
      "https://static.wixstatic.com/media/347173_9b05038588aa430f8f342757b3000a1e~mv2.png/v1/crop/x_0,y_248,w_1280,h_853/fill/w_183,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kathi_edited.png",
  },
];

export const ueberUnsStatements = [
  {
    bold: "Wir animieren",
    text: "die örtlichen Vereine zu Weiterbildungsanlässen für die Bevölkerung.",
  },
  {
    bold: "Wir koordinieren",
    text: "das Weiterbildungsangebot sowie Vereinsanlässe und Veranstaltungen im Bezirk Küssnacht.",
  },
  {
    bold: "Wir ergänzen",
    text: "das Angebot durch eigene Veranstaltungen.",
  },
  {
    bold: "Wir orientieren",
    text: "die Bevölkerung über Weiterbildungsangebote im Bezirk Küssnacht.",
  },
  {
    bold: "Wir vertreten",
    text: "die Interessen der Weiterbildung gegenüber den Bezirksbehörden und weiteren Interessengruppen.",
  },
  {
    bold: "Wir beraten",
    text: "Veranstaltende bei der Raumsuche, bei Kostenfragen und bei der Themenwahl.",
  },
  {
    bold: "Wir vermitteln",
    text: "Kontakt zu möglichen Referent*innen und Kursleiter*innen.",
  },
  {
    bold: "Wir empfehlen",
    text: "lokale Anbieter*innen für einen professionellen Auftritt on- und offline.",
  },
];

export const dokumenteLinks = [
  {
    label: "Leitbild",
    url: "https://www.weiterbildung-kuessnacht.ch/_files/ugd/770a6f_474392bcd2e449b0888bcaabdc151408.pdf",
  },
  {
    label: "Statuten",
    url: "https://www.weiterbildung-kuessnacht.ch/_files/ugd/770a6f_0fdfa1f2786444d88df0ba09d87cbf56.pdf",
  },
  {
    label: "Raumangebot",
    url: "https://www.weiterbildung-kuessnacht.ch/_files/ugd/770a6f_dab4abd023b44ccf838f981ee5450e54.pdf",
  },
];

// ─── Kurse Data ──────────────────────────────────────────────────────────────

export interface Kurs {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  instructor: string;
  phone: string;
  image: string;
  website: string;
  email: string;
  dayOfWeek: string;
  timeRange: string;
}



// ─── Demo: Anbietende Data ───────────────────────────────────────────────────

export interface Anbieter {
  id: string;
  name: string;
  description: string;
  courses: string[];
  image?: string;
}

export const anbietendeData: Record<
  string,
  { label: string; description: string; providers: Anbieter[] }
> = {
  elternkinder: {
    label: "Eltern & Kinder",
    description:
      "Kurse und Workshops für Familien – gemeinsam lernen, spielen und wachsen.",
    providers: [
      {
        id: "ek1",
        name: "Sandra Bühler",
        description: "Kreative Workshops für Kinder und Familien.",
        courses: ["Kinderschminken & Basteln", "Eltern-Kind-Kochen"],
      },
      {
        id: "ek2",
        name: "Monika Zemp",
        description: "Bewegung und Spiel für die Kleinsten.",
        courses: ["Eltern-Kind-Turnen", "Babymassage"],
      },
    ],
  },
  essentrinken: {
    label: "Essen & Trinken",
    description:
      "Kulinarische Erlebnisse – von regionaler Küche bis zu internationalen Spezialitäten.",
    providers: [
      {
        id: "et1",
        name: "Sandra Bühler",
        description: "Kochen mit Leidenschaft und lokalen Produkten.",
        courses: ["Kochen mit regionalen Zutaten", "Brotbackkurs"],
      },
      {
        id: "et2",
        name: "Hans Müller",
        description: "Weinexperte und Sommelier.",
        courses: ["Weinverkostung Schweizer Weine", "Weinseminar Burgund"],
      },
    ],
  },
  erstehilfe: {
    label: "Erste Hilfe",
    description:
      "Lebensrettende Kenntnisse für den Alltag – Kurse für Anfänger und Fortgeschrittene.",
    providers: [
      {
        id: "eh1",
        name: "Dr. Thomas Keller",
        description: "Notarzt und Erste-Hilfe-Ausbilder mit 20 Jahren Erfahrung.",
        courses: ["Erste-Hilfe-Kurs Refresher", "Nothilfe Grundkurs"],
      },
    ],
  },
  fitnessyoga: {
    label: "Fitness & Yoga",
    description:
      "Körper und Geist in Einklang bringen – Bewegung für jedes Level.",
    providers: [
      {
        id: "fy1",
        name: "Lisa Meier",
        description: "Zertifizierte Yoga- und Pilates-Lehrerin.",
        courses: ["Yoga für Einsteiger", "Pilates Intensiv"],
      },
      {
        id: "fy2",
        name: "Katrin Wolf",
        description: "Kampfsport- und Selbstverteidigungstrainerin.",
        courses: ["Selbstverteidigung für Frauen"],
      },
    ],
  },
  gesundheit: {
    label: "Gesundheit",
    description:
      "Ganzheitliche Gesundheitsangebote für mehr Wohlbefinden.",
    providers: [
      {
        id: "g1",
        name: "Dr. Sabine Lang",
        description: "Fachärztin für Naturheilkunde.",
        courses: ["Heilkräuter im Garten", "Naturheilkunde Basics"],
      },
    ],
  },
  informatik: {
    label: "Informatik",
    description:
      "Digitale Kompetenzen für Beruf und Alltag erweitern.",
    providers: [
      {
        id: "i1",
        name: "Peter Schmid",
        description: "IT-Spezialist und Kursleiter.",
        courses: ["Excel für den Alltag", "Word & PowerPoint"],
      },
      {
        id: "i2",
        name: "Julia Frei",
        description: "Digital Coach für alle Altersgruppen.",
        courses: ["Smartphone-Kurs für Senioren", "Social Media Basics"],
      },
    ],
  },
  kulturgeschichte: {
    label: "Kultur & Geschichte",
    description:
      "Tauchen Sie ein in die reiche Kultur und Geschichte unserer Region.",
    providers: [
      {
        id: "kg1",
        name: "Prof. Urs Weber",
        description: "Historiker und Buchautor aus Küssnacht.",
        courses: ["Geschichte von Küssnacht", "Schlachtfeier – Tradition und Bedeutung"],
      },
    ],
  },
  modelifestyle: {
    label: "Mode & Lifestyle",
    description:
      "Stil, Trends und persönliche Entfaltung – Kurse rund um Mode und Lifestyle.",
    providers: [
      {
        id: "ml1",
        name: "Nina Graf",
        description: "Modeberaterin und Stilcoach.",
        courses: ["Farbberatung & Stiltyp", "Upcycling Mode-Workshop"],
      },
    ],
  },
  malenhandwerk: {
    label: "Malen & Handwerk",
    description:
      "Kreativität entdecken – von Aquarell bis Töpfern.",
    providers: [
      {
        id: "mh1",
        name: "Maria Huber",
        description: "Freischaffende Künstlerin mit Atelier in Küssnacht.",
        courses: ["Aquarellmalerei für Anfänger", "Acryl auf Leinwand"],
      },
      {
        id: "mh2",
        name: "Anna Bachmann",
        description: "Keramikerin und Kursleiterin.",
        courses: ["Töpferkurs: Keramik-Grundlagen"],
      },
      {
        id: "mh3",
        name: "Eva Steinmann",
        description: "Kalligrafin und Handlettering-Künstlerin.",
        courses: ["Kalligrafie Workshop"],
      },
    ],
  },
  musik: {
    label: "Musik",
    description:
      "Musikalische Weiterbildung für Anfänger und Fortgeschrittene.",
    providers: [
      {
        id: "mu1",
        name: "Daniel Kunz",
        description: "Gitarrenlehrer und Musiker.",
        courses: ["Gitarre für Anfänger", "Songwriting Workshop"],
      },
    ],
  },
  selbsterfahrung: {
    label: "Selbsterfahrung",
    description:
      "Sich selbst besser kennenlernen – Workshops für persönliches Wachstum.",
    providers: [
      {
        id: "se1",
        name: "Claudia Roth",
        description: "Coach und Meditationslehrerin.",
        courses: ["Meditation & Achtsamkeit", "Journaling Workshop"],
      },
    ],
  },
  senioren: {
    label: "Senioren",
    description:
      "Speziell zugeschnittene Angebote für die ältere Generation.",
    providers: [
      {
        id: "sn1",
        name: "Julia Frei",
        description: "Spezialisiert auf digitale Bildung für Senioren.",
        courses: ["Smartphone-Kurs für Senioren", "Tablet für Einsteiger"],
      },
    ],
  },
  sprachen: {
    label: "Sprachen",
    description:
      "Sprachen lernen in kleinen Gruppen – kommunikativ und praxisnah.",
    providers: [
      {
        id: "sp1",
        name: "Marco Rossi",
        description: "Muttersprachlicher Italienischlehrer.",
        courses: ["Italienisch A1", "Italienisch Konversation"],
      },
      {
        id: "sp2",
        name: "Claire Dupont",
        description: "Muttersprachliche Französischlehrerin.",
        courses: ["Französisch Konversation", "Französisch A2"],
      },
    ],
  },
};
