// ─── Types ───────────────────────────────────────────────────────────────────

export interface CompanyAddress {
  street: string;
  streetNumber: string;
  zip: number;
  city: string;
  state: string;
  coordinate: {
    longitude: number;
    latitude: number;
  };
}

export interface OpeningHoursItem {
  weekday: string;
  from: string;
  to: string;
  message: string;
}

export interface CompanyOpeningHours {
  message: string;
  items: OpeningHoursItem[];
}

export interface WeblinkItem {
  code: string;
  url: string;
}

export interface VrTour {
  image: string;
  url: string;
}

export interface CompanyWeblinks {
  website: string;
  bookingLink: string;
  vrTour: VrTour | string | null;
  weblinksItems: WeblinkItem[];
}

export interface Company {
  id: string;
  company: string;
  email: string;
  phone: string;
  weblinks: CompanyWeblinks;
  openingHours: CompanyOpeningHours;
  image: string;
  profileState: { message: string } | string | null;
  categories: string[];
  address: CompanyAddress;
  customName: string;
  customLogo: string;
  tags: string[];
}

// ─── API config ──────────────────────────────────────────────────────────────

const CONNECT_API_URL =
  process.env.NEXT_PUBLIC_APP_CONNECT_API_URL || "https://me.onra.ch/api";
const CONNECT_TOKEN =
  process.env.NEXT_PUBLIC_CONNECT_TOKEN || "";

// ─── Fetch helpers ───────────────────────────────────────────────────────────

/** Fetch all member companies from the association members list */
export async function fetchAllCompanies(): Promise<Company[]> {
  try {
    const res = await fetch(
      `${CONNECT_API_URL}/connect/associations/members-list`,
      {
        headers: { "connect-token": CONNECT_TOKEN },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch members:", res.status, res.statusText);
      return [];
    }

    const companies: Company[] = await res.json();
    return companies.filter((c): c is Company => c !== null);
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}

// ─── Tag mapping: anbietende slug → tag values used for filtering ────────────

export const ANBIETENDE_TAG_MAP: Record<string, string[]> = {
  elternkinder: ["Eltern & Kinder"],
  essentrinken: ["Essen & Trinken"],
  erstehilfe: ["Erste Hilfe"],
  fitnessyoga: ["Fitness & Yoga"],
  gesundheit: ["Gesundheit"],
  informatik: ["Informatik"],
  kulturgeschichte: ["Kultur & Geschichte"],
  modelifestyle: ["Mode & Lifestyle"],
  malenhandwerk: ["Malen & Handwerk"],
  musik: ["Musik"],
  selbsterfahrung: ["Selbsterfahrung"],
  senioren: ["Senioren"],
  sprachen: ["Sprachen"],
};

const slugTagSetCache = new Map<string, Set<string>>();

function getTagSet(slug: string): Set<string> {
  if (!slugTagSetCache.has(slug)) {
    slugTagSetCache.set(slug, new Set(ANBIETENDE_TAG_MAP[slug] ?? []));
  }
  return slugTagSetCache.get(slug)!;
}

/** Filter companies whose tags overlap with the anbietende slug */
export function filterCompaniesBySlug(
  companies: Company[],
  slug: string
): Company[] {
  const allowed = getTagSet(slug);
  if (allowed.size === 0) return [];
  return companies.filter((c) => c.tags?.some((tag) => allowed.has(tag)));
}

// ─── Human-readable German labels for API categories ─────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  RESTAURANTS: "Restaurants",
  TAKEAWAY_SNACK_BAR: "Takeaway & Snackbar",
  BAR: "Bar",
  BARS: "Bars",
  BAKERY: "Bäckerei",
  BAKERY_SHOP: "Bäckerei",
  BEVERAGES: "Getränke",
  COFFEE_SHOP: "Café",
  CONDITOREI: "Konditorei",
  BUTCHER: "Metzgerei",
  BUTCHERS_SHOP: "Metzgerei",
  PASTRY_SHOP_CONFECTIONERY: "Konditorei & Confiserie",
  GROCERY_STORE: "Lebensmittel",
  FITNESS_CENTER: "Fitnesscenter",
  SPORTS_RETAILER: "Sportfachhandel",
  MOVEMENT_PHYSIOTHERAPY: "Physiotherapie",
  NATUROPATHY: "Naturheilkunde",
  MASSAGE: "Massage",
  DRUGSTORES: "Drogerie",
  HEARING_SPECIALIST: "Hörgeräte",
  OPTICIANS: "Optiker",
  VETERINARY: "Tierarzt",
  IT_AND_TELECOMMUNICATIONS: "IT & Telekommunikation",
  EVENT_LOCATIONS: "Eventlocation",
  LEISURE: "Freizeit",
  ARCHITECTURE: "Architektur",
  PHOTOGRAPHY: "Fotografie",
  CLOTHING_STORE: "Bekleidung",
  BOUTIQUE_SHOP: "Boutique",
  BEAUTY: "Beauty",
  COSMETICS_AND_SKIN: "Kosmetik & Hautpflege",
  HAIR_STYLIST: "Coiffeur",
  BARBER: "Barbershop",
  JEWELRY: "Schmuck",
  WATCHES: "Uhren",
  LEATHER_GOODS: "Lederwaren",
  SHOE_STORE: "Schuhe",
  GOLDSMITH: "Goldschmied",
  THRIFT_STORE: "Secondhand",
  CRAFTSMEN: "Handwerker",
  DESIGN: "Design",
  FLOWERS_AND_FLORISTRY: "Blumen & Floristik",
  PRINTING_AND_ADVERTISING: "Druck & Werbung",
  STATIONERY: "Papeterie",
  ADVOCACY: "Rechtsberatung",
  BANKING: "Bank",
  BANK: "Bank",
  CAR_AND_MOTO: "Auto & Moto",
  FIDUCIARY: "Treuhand",
  HOTELS: "Hotels",
  INSURANCE: "Versicherung",
  REALESTATE: "Immobilien",
  REAL_ESTATE: "Immobilien",
  BIKE_STORE: "Velogeschäft",
  TRAVEL_AGENCY: "Reisebüro",
  SHOPS: "Geschäfte",
};

/** Get a German label for an API category value */
export function getCategoryLabel(cat: string): string {
  return CATEGORY_LABELS[cat] ?? cat.replace(/_/g, " ").toLowerCase();
}
