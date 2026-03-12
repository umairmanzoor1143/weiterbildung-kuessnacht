// ─── Types (matching API responses directly — not transformed) ───────────────

export interface Member {
  ownerId: string;
  ownerType: string;
  created: string;
}

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

export interface CompanyWeblinks {
  website: string;
  bookingLink: string;
  vrTour: string | null;
  weblinksItems: unknown[];
}

export interface Company {
  id: string;
  company: string;
  email: string;
  phone: string;
  weblinks: CompanyWeblinks;
  openingHours: CompanyOpeningHours;
  image: string;
  profileState: string | null;
  categories: string[];
  address: CompanyAddress;
}

// ─── API config ──────────────────────────────────────────────────────────────

const CONNECT_API_URL = process.env.NEXT_PUBLIC_APP_CONNECT_API_URL || "";
const CONNECT_TOKEN =
  process.env.NEXT_PUBLIC_CONNECT_TOKEN || ""

// ─── Fetch helpers ───────────────────────────────────────────────────────────

async function fetchMembers(): Promise<Member[]> {
  try {
    const res = await fetch(`${CONNECT_API_URL}/connect/associations/members-list`, {
      headers: { "connect-token": CONNECT_TOKEN },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.error("Failed to fetch members:", res.status, res.statusText);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}

async function fetchCompany(ownerId: string): Promise<Company | null> {
  try {
    const res = await fetch(`${CONNECT_API_URL}/connect/company/${ownerId}`, {
      headers: { "connect-token": CONNECT_TOKEN },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.error(`Failed to fetch company ${ownerId}:`, res.status);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching company ${ownerId}:`, error);
    return null;
  }
}

/** Fetch all member companies in parallel */
export async function fetchAllCompanies(): Promise<Company[]> {
  const members = await fetchMembers();
  const promises = members
    .filter((m) => m.ownerType === "COMPANY")
    .map((m) => fetchCompany(m.ownerId));

  const results = await Promise.all(promises);
  return results.filter((c): c is Company => c !== null);
}

// ─── Category mapping: anbietende slug → API category values ─────────────────
//
// The company API uses business-type categories (RESTAURANTS, BANKING, etc.).
// This maps each anbietende navigation slug to the matching API categories.

export const ANBIETENDE_CATEGORY_MAP: Record<string, string[]> = {
  essentrinken: [
    "RESTAURANTS",
    "TAKEAWAY_SNACK_BAR",
    "BAR",
    "BARS",
    "BAKERY",
    "BAKERY_SHOP",
    "BEVERAGES",
    "COFFEE_SHOP",
    "CONDITOREI",
    "BUTCHER",
    "BUTCHERS_SHOP",
    "PASTRY_SHOP_CONFECTIONERY",
    "GROCERY_STORE",
  ],
  fitnessyoga: ["FITNESS_CENTER", "SPORTS_RETAILER"],
  gesundheit: [
    "MOVEMENT_PHYSIOTHERAPY",
    "NATUROPATHY",
    "MASSAGE",
    "DRUGSTORES",
    "HEARING_SPECIALIST",
    "OPTICIANS",
    "VETERINARY",
  ],
  informatik: ["IT_AND_TELECOMMUNICATIONS"],
  kulturgeschichte: [
    "EVENT_LOCATIONS",
    "LEISURE",
    "ARCHITECTURE",
    "PHOTOGRAPHY",
  ],
  modelifestyle: [
    "CLOTHING_STORE",
    "BOUTIQUE_SHOP",
    "BEAUTY",
    "COSMETICS_AND_SKIN",
    "HAIR_STYLIST",
    "BARBER",
    "JEWELRY",
    "WATCHES",
    "LEATHER_GOODS",
    "SHOE_STORE",
    "GOLDSMITH",
    "THRIFT_STORE",
  ],
  malenhandwerk: [
    "CRAFTSMEN",
    "DESIGN",
    "FLOWERS_AND_FLORISTRY",
    "PRINTING_AND_ADVERTISING",
    "STATIONERY",
  ],
  // Broader / catch-all groups
  elternkinder: [],
  erstehilfe: [],
  musik: [],
  selbsterfahrung: [],
  senioren: [],
  sprachen: [],
};

// Reverse lookup: build a Set of all mapped API categories for a given slug
const slugCategorySetCache = new Map<string, Set<string>>();

function getCategorySet(slug: string): Set<string> {
  if (!slugCategorySetCache.has(slug)) {
    slugCategorySetCache.set(
      slug,
      new Set(ANBIETENDE_CATEGORY_MAP[slug] ?? [])
    );
  }
  return slugCategorySetCache.get(slug)!;
}

/** Filter companies whose categories overlap with the anbietende slug */
export function filterCompaniesBySlug(
  companies: Company[],
  slug: string
): Company[] {
  const allowed = getCategorySet(slug);
  if (allowed.size === 0) return companies; // no mapping → show all
  return companies.filter((c) => c.categories.some((cat) => allowed.has(cat)));
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
