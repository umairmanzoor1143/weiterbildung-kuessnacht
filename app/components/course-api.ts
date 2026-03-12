// ─── Course Types (matching the backend CourseModel response) ────────────────

export interface CourseInstructor {
  name: string;
  phone: string;
  photo: string;
  websiteUrl: string;
  email: string;
}

export interface CourseFromAPI {
  courseId: string;
  ownerId: string;
  ownerName: string;
  ownerType: string;
  ownerLogo: string;
  associationIds: string[];
  title: string;
  description: string;
  category: string;
  date: string;
  dayOfWeek: string;
  timeRange: string;
  instructor: CourseInstructor;
  state: string;
  created: string;
}

// ─── Kurs type used by KurseContent / AnbietendeContent components ──────────

export interface Kurs {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  date: string;
  image: string;
  phone: string;
  website: string;
  email: string;
  dayOfWeek: string;
  timeRange: string;
}

// ─── Transform API response to Kurs format ──────────────────────────────────

export function mapCourseToKurs(course: CourseFromAPI): Kurs {
  return {
    id: course.courseId,
    title: course.title,
    description: course.description,
    instructor: course.instructor?.name || "",
    category: course.category || "",
    date: course.date || "",
    image: course.instructor?.photo || course.ownerLogo || "",
    phone: course.instructor?.phone || "",
    website: course.instructor?.websiteUrl || "",
    email: course.instructor?.email || "",
    dayOfWeek: course.dayOfWeek || "",
    timeRange: course.timeRange || "",
  };
}

// ─── German month mapping ────────────────────────────────────────────────────

const MONTH_NAMES: Record<number, { slug: string; label: string }> = {
  1:  { slug: "januar",    label: "Januar" },
  2:  { slug: "februar",   label: "Februar" },
  3:  { slug: "maerz",     label: "März" },
  4:  { slug: "april",     label: "April" },
  5:  { slug: "mai",       label: "Mai" },
  6:  { slug: "juni",      label: "Juni" },
  7:  { slug: "juli",      label: "Juli" },
  8:  { slug: "august",    label: "August" },
  9:  { slug: "september", label: "September" },
  10: { slug: "oktober",   label: "Oktober" },
  11: { slug: "november",  label: "November" },
  12: { slug: "dezember",  label: "Dezember" },
};

const SLUG_TO_MONTH: Record<string, number> = Object.fromEntries(
  Object.entries(MONTH_NAMES).map(([num, { slug }]) => [slug, Number(num)])
);

/** Check if a slug corresponds to a valid month */
export function isMonthSlug(slug: string): boolean {
  return slug in SLUG_TO_MONTH;
}

/** Get month number (1-12) from a slug like "maerz" → 3 */
export function getMonthNumber(slug: string): number | undefined {
  return SLUG_TO_MONTH[slug];
}

/** Get German label for a month slug, e.g. "maerz" → "März" */
export function getMonthLabel(slug: string): string {
  const num = SLUG_TO_MONTH[slug];
  return num ? MONTH_NAMES[num].label : slug;
}

/** Filter courses whose date ("YYYY-MM-DD") matches a given month number */
export function filterCoursesByMonth(courses: Kurs[], month: number): Kurs[] {
  return courses.filter((c) => {
    if (!c.date || typeof c.date !== "string") return false;
    const m = parseInt(c.date.split("-")[1], 10);
    return m === month;
  });
}

// ─── Fetch courses from the API ──────────────────────────────────────────────

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function fetchCourses(): Promise<Kurs[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/web/courses`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch courses:", res.status, res.statusText);
      return [];
    }

    const data: CourseFromAPI[] = await res.json();
    return data.map(mapCourseToKurs);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

// ─── Fetch available months from the API ─────────────────────────────────────

export interface MonthItem {
  slug: string;
  label: string;
}

export async function fetchAvailableMonths(): Promise<MonthItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/web/courses/months`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch months:", res.status, res.statusText);
      return [];
    }

    const monthNumbers: number[] = await res.json();
    return monthNumbers
      .filter((n) => n >= 1 && n <= 12)
      .map((n) => MONTH_NAMES[n]);
  } catch (error) {
    console.error("Error fetching available months:", error);
    return [];
  }
}
