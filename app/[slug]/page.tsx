import { notFound } from "next/navigation";
import {
  anbietendeItems,
  anbietendeSlugs,
  anbietendeData,
} from "@/app/lib/data";
import type { Metadata } from "next";
import KurseContent from "@/app/components/KurseContent";
import AnbietendeContent from "@/app/components/AnbietendeContent";
import {
  fetchCourses,
  isMonthSlug,
  getMonthLabel,
  getMonthNumber,
  filterCoursesByMonth,
} from "@/app/components/course-api";
import {
  fetchAllCompanies,
  filterCompaniesBySlug,
} from "@/app/components/member-api";

// ─── Static Params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  // Only anbietende slugs are static; kurse month pages are dynamic
  return anbietendeItems.map((item) => ({ slug: item.slug }));
}

// Allow dynamic month slugs that aren't in generateStaticParams
export const dynamicParams = true;

// ─── Metadata ────────────────────────────────────────────────────────────────

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (isMonthSlug(slug)) {
    const label = getMonthLabel(slug);
    return {
      title: `Kurse ${label} – Weiterbildung Küssnacht`,
      description: `Kursangebot für ${label} im Bezirk Küssnacht.`,
    };
  }

  if (anbietendeSlugs.has(slug)) {
    const data = anbietendeData[slug];
    return {
      title: `${data?.label ?? slug} – Anbietende – Weiterbildung Küssnacht`,
      description: data?.description ?? `Anbieter in der Kategorie ${slug}.`,
    };
  }

  return { title: "Weiterbildung Küssnacht" };
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  if (isMonthSlug(slug)) {
    return <KursePage slug={slug} />;
  }

  if (anbietendeSlugs.has(slug)) {
    return <AnbietendePage slug={slug} />;
  }

  notFound();
}

// ─── Kurse Page Template ─────────────────────────────────────────────────────

async function KursePage({ slug }: { slug: string }) {
  const label = getMonthLabel(slug);
  const monthNum = getMonthNumber(slug)!;

  // Fetch all courses, then filter by month client-side
  const allCourses = await fetchCourses();
  const courses = filterCoursesByMonth(allCourses, monthNum);

  return <KurseContent slug={slug} label={label} courses={courses} />;
}

// ─── Anbietende Page Template ────────────────────────────────────────────────

async function AnbietendePage({ slug }: { slug: string }) {
  const data = anbietendeData[slug];
  if (!data) notFound();

  // Fetch all member companies, then filter by anbietende category
  const allCompanies = await fetchAllCompanies();
  const companies = filterCompaniesBySlug(allCompanies, slug);

  return (
    <AnbietendeContent
      slug={slug}
      label={data.label}
      description={data.description}
      companies={companies}
    />
  );
}
