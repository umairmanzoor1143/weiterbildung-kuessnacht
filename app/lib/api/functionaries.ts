// ─── Types ───────────────────────────────────────────────────────────────────

export interface Functionary {
  id: string;
  firstname: string;
  name: string;
  organisationFunctionId: string;
  email: string | null;
  phone: string | null;
  linkedin: string | null;
  visibility: string;
}

export interface FunctionaryDetail extends Functionary {
  image: string;
  ownerId: string;
  ownerType: string;
}

export interface OrganisationFunction {
  id: string;
  email: string;
  titleDE: string;
  titleEN: string;
  titleFR: string;
  titleIT: string;
  descriptionDE: string;
  descriptionEN: string;
  descriptionFR: string;
  descriptionIT: string;
  languages: string[];
  ownerId: string;
  ownerType: string;
  roleTypes: string[];
}

export interface FunctionariesResponse {
  functionaries: Functionary[];
  organisationFunctions: OrganisationFunction[];
}

/** Combined functionary with resolved function data and image */
export interface VorstandMember {
  id: string;
  fullName: string;
  title: string;
  descriptionHtml: string;
  email: string;
  image: string;
}

// ─── API config ──────────────────────────────────────────────────────────────

const CONNECT_API_URL =
  process.env.NEXT_PUBLIC_APP_CONNECT_API_URL || "https://me.onra.ch/api";
const CONNECT_TOKEN =
  process.env.NEXT_PUBLIC_CONNECT_TOKEN || "";

// ─── Fetch helpers ───────────────────────────────────────────────────────────

/** Fetch all functionaries and their organisation functions */
async function fetchFunctionariesList(): Promise<FunctionariesResponse | null> {
  try {
    const res = await fetch(
      `${CONNECT_API_URL}/connect/organisation/functionaries`,
      {
        headers: { "connect-token": CONNECT_TOKEN },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error(
        "Failed to fetch functionaries:",
        res.status,
        res.statusText
      );
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching functionaries:", error);
    return null;
  }
}

/** Fetch a single functionary's detail (includes image) */
async function fetchFunctionaryDetail(
  id: string
): Promise<FunctionaryDetail | null> {
  try {
    const res = await fetch(
      `${CONNECT_API_URL}/connect/organisation/functionaries/${id}`,
      {
        headers: { "connect-token": CONNECT_TOKEN },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch functionary ${id}:`, res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Error fetching functionary ${id}:`, error);
    return null;
  }
}

// ─── HTML parsing utilities ──────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

/** Extract the group label (e.g. "Vorstand", "Beirat") from the description HTML */
export function extractGroupLabel(html: string): string {
  const match = html.match(/<b[^>]*>(.*?)<\/b>/i);
  return match ? stripHtml(match[1]) : "";
}

/** Extract bullet points from description HTML */
export function extractBullets(html: string): string[] {
  const liMatches = html.match(/<li[^>]*>(.*?)<\/li>/gi);
  if (!liMatches) return [];
  return liMatches
    .map((li) => stripHtml(li))
    .filter((text) => text.length > 0);
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** Fetch all Vorstand members with their images and resolved function data */
export async function fetchVorstandMembers(): Promise<VorstandMember[]> {
  const data = await fetchFunctionariesList();
  if (!data) return [];

  const { functionaries, organisationFunctions } = data;

  // Build a lookup map for organisation functions
  const funcMap = new Map<string, OrganisationFunction>();
  for (const fn of organisationFunctions) {
    funcMap.set(fn.id, fn);
  }

  // Only show PUBLIC functionaries
  const publicFunctionaries = functionaries.filter(
    (f) => f.visibility === "PUBLIC"
  );

  // Fetch all images in parallel
  const details = await Promise.all(
    publicFunctionaries.map((f) => fetchFunctionaryDetail(f.id))
  );

  // Build the combined VorstandMember array
  const members: VorstandMember[] = [];

  for (let i = 0; i < publicFunctionaries.length; i++) {
    const f = publicFunctionaries[i];
    const detail = details[i];
    const orgFunc = funcMap.get(f.organisationFunctionId);

    if (!orgFunc) continue;

    members.push({
      id: f.id,
      fullName: `${f.firstname} ${f.name}`.trim(),
      title: orgFunc.titleDE || orgFunc.titleEN || "",
      descriptionHtml: orgFunc.descriptionDE || "",
      email: orgFunc.email || "",
      image: detail?.image || "",
    });
  }

  return members;
}
