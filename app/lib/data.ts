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
}

export const kurseData: Record<string, { label: string; courses: Kurs[] }> = {
  januar: {
    label: "Januar",
    courses: [
      {
        id: "j1",
        title: "Lichtheilabend",
        description: "Die Lichtheilkraft fliessen lassen, um mich und die Welt heiler zu machen",
        date: "Montag 5. Januar, 19.30-20.30 Uhr",
        category: "Selbsterfahrung",
        instructor: "Priska Kaiser",
        phone: "079 666 72 27",
        image: "https://static.wixstatic.com/media/770a6f_58d1a7f43c084d1695dc517b3fb72822~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Priska%20Kaiser.jpg",
        website: "https://www.weiterbildung-kuessnacht.ch/priskakaiserseeholzer",
      },
      {
        id: "j2",
        title: "English Academy",
        description: "Jetzt Start ins neue Kursjahr.",
        date: "Donnerstag 8. Januar Kursstart",
        category: "Sprachen",
        instructor: "Yvonne Chappell",
        phone: "079 298 05 58",
        image: "https://static.wixstatic.com/media/770a6f_8a46e4b784d842eca8db284701f7ad31~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Yvonne%20Chappell_neu_edited.jpg",
        website: "http://www.english-academy.ch",
      },
      {
        id: "j3",
        title: "Eltern - Raum für Austausch",
        description: "Dieses Angebot richtet sich an Mütter und Väter, die mit ihrem Elternsein wachsen wollen",
        date: "Montag 12. Januar, 19.15-21.15 Uhr",
        category: "Eltern & Kinder",
        instructor: "Aline Seeholzer",
        phone: "079 871 27 61",
        image: "https://static.wixstatic.com/media/347173_ed02d92421d245d4b2e10677607de373~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Aline%20Seeholzer.jpg",
        website: "https://www.alineseeholzer.ch/news",
      },
      {
        id: "j4",
        title: "Meditation & Achtsamkeit",
        description: "Lerne in 8 Wochen, Meditation und Achtsamkeit in deinen Alltag zu bringen- nach MBSR",
        date: "ab 12. Januar, (wöchentlich)",
        category: "Gesundheit",
        instructor: "Barbara Heis",
        phone: "078 790 57 70",
        image: "https://static.wixstatic.com/media/347173_88e1eb3bb68c4b37bc63895cdd5867f5~mv2.jpg/v1/fill/w_270,h_270,al_c,lg_1,q_80,enc_avif,quality_auto/Barbara%20Heis_edited.jpg",
        website: "https://healthyminds.ch/mbsr/",
      },
      {
        id: "j5",
        title: "Malen und Gestalten für Kinder",
        description: "Kinder ab 7 Jahren entdecken und erleben ihre Kreativität ohne Bewertung. (10er-Abo)",
        date: "ab 13. Januar, 16.20-17.45 Uhr (wöchentlich)",
        category: "Malen & Handwerk",
        instructor: "Sandra Krummenacher",
        phone: "079 259 77 71",
        image: "https://static.wixstatic.com/media/770a6f_48a31283becc47cfabb051001ffef777~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sandra%20Krummenacher.jpg",
        website: "http://www.artsein.ch",
      },
      {
        id: "j6",
        title: "Fit für KI im Alltag",
        description: "Erlerne den Umgang mit KI im Alltag",
        date: "18. Januar, 08.30-15.30 Uhr",
        category: "Informatik",
        instructor: "Hedy Schindler",
        phone: "178 963 38 67",
        image: "https://static.wixstatic.com/media/770a6f_eaa7531bbaa94cae88bd76781b9b4424~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hedy%20Schindler_edited.jpg",
        website: "http://www.s2analytics.ch",
      },
      {
        id: "j7",
        title: "Töpfern",
        description: "Kreatives und sinnliches erleben mit dem Material Ton.",
        date: "Mittwoch 21. Januar, 18.30-21.30 Uhr",
        category: "Selbsterfahrung",
        instructor: "Monika Ulrich",
        phone: "079 576 07 80",
        image: "https://static.wixstatic.com/media/770a6f_1f964184deaf40e0bd5d14d2c998026c~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Monika%20Ulrich.jpg",
        website: "https://www.weiterbildung-kuessnacht.ch/monikaulrich",
      },
      {
        id: "j8",
        title: "Malen, Gestalten, Austauschen",
        description: "Freue Dich auf einen kreativen Abend. Keine Vorkenntnisse nötig, lediglich Entdeckerlust.",
        date: "Donnerstag 22. Januar, 19.00-21.00 Uhr",
        category: "Malen & Handwerk",
        instructor: "Sandra Krummenacher",
        phone: "079 259 77 71",
        image: "https://static.wixstatic.com/media/770a6f_48a31283becc47cfabb051001ffef777~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sandra%20Krummenacher.jpg",
        website: "http://www.artsein.ch",
      },
      {
        id: "j9",
        title: "Homöopathie bei Verletzungen",
        description: "Verletzungen selber behandeln mit Homöopathie",
        date: "Donnerstag 22. Januar, 19.00-20.30 Uhr",
        category: "Gesundheit",
        instructor: "Erika Hirsch",
        phone: "079 196 28 81",
        image: "https://static.wixstatic.com/media/770a6f_828fa02daab44916ba8d8a2c3f3737c9~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Erika%20Hirsch.jpg",
        website: "http://www.vital-homoeopathie.ch",
      },
      {
        id: "j10",
        title: "Töpfern",
        description: "Kreatives und sinnliches erleben mit dem Material Ton.",
        date: "Mittwoch 28. Januar, 18.30-21.30 Uhr",
        category: "Selbsterfahrung",
        instructor: "Monika Ulrich",
        phone: "079 576 07 80",
        image: "https://static.wixstatic.com/media/770a6f_1f964184deaf40e0bd5d14d2c998026c~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Monika%20Ulrich.jpg",
        website: "https://www.weiterbildung-kuessnacht.ch/monikaulrich",
      },
    ],
  },
  maerz: {
    label: "März",
    courses: [
      {
        id: "m1",
        title: "Begleitetes Malen",
        description: "Kinder und Jugendliche stärken ihren Ausdruck und erleben ihre Selbstwirksamkeit",
        date: "Mittwochs, 14.00-15.15 Uhr (14-tägig)",
        category: "Malen & Handwerk",
        instructor: "Andrea Renggli",
        phone: "079 628 36 08",
        image: "https://static.wixstatic.com/media/770a6f_a1dbd964859949079b5ed444e3174df3~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Andrea%20Renggli.jpg",
        website: "http://www.maltherapie-renggli.ch",
      },
      {
        id: "m2",
        title: "Golf-Wintertrainings",
        description: "Bleiben Sie Golf-fit auch im Winter oder erweitern Sie Ihre Golfkenntnisse.",
        date: "November 2025 - März 2026",
        category: "Fitness & Yoga",
        instructor: "Golf Küssnacht",
        phone: "041 854 40 20",
        image: "https://static.wixstatic.com/media/347173_f2ad998ff6f44f4891b71f5f01b71282~mv2.png/v1/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_golf_kuessnacht_rgb.png",
        website: "https://www.golfkuessnacht.ch/",
      },
    ],
  },
  juli: {
    label: "Juli",
    courses: [
      {
        id: "ju1",
        title: "Malend zu sich finden",
        description: "Einsichten gewinnen, Altlasten abwerfen, Visionen entwickeln und Stress bewältigen",
        date: "Donnerstags, 14.00-16.00 Uhr (14-tägig)",
        category: "Malen & Handwerk",
        instructor: "Andrea Renggli",
        phone: "079 628 36 08",
        image: "https://static.wixstatic.com/media/770a6f_a1dbd964859949079b5ed444e3174df3~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Andrea%20Renggli.jpg",
        website: "http://www.maltherapie-renggli.ch",
      },
      {
        id: "ju2",
        title: "Malend zu sich finden",
        description: "Einsichten gewinnen, Altlasten abwerfen, Visionen entwickeln und Stress bewältigen",
        date: "Donnerstag, 17.00-19.00 Uhr (14-tägig)",
        category: "Malen & Handwerk",
        instructor: "Andrea Renggli",
        phone: "079 628 36 08",
        image: "https://static.wixstatic.com/media/770a6f_a1dbd964859949079b5ed444e3174df3~mv2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Andrea%20Renggli.jpg",
        website: "http://www.maltherapie-renggli.ch",
      },
    ],
  },
};

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
