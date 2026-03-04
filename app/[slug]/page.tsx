import { notFound } from "next/navigation";
import {
  kurseItems,
  anbietendeItems,
  kurseSlugs,
  anbietendeSlugs,
  kurseData,
  anbietendeData,
} from "@/app/lib/data";
import type { Metadata } from "next";
import KurseContent from "@/app/components/KurseContent";
import AnbietendeContent from "@/app/components/AnbietendeContent";

// ─── Static Params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  const kursParams = kurseItems.map((item) => ({ slug: item.slug }));
  const anbietendeParams = anbietendeItems.map((item) => ({ slug: item.slug }));
  return [...kursParams, ...anbietendeParams];
}

// ─── Metadata ────────────────────────────────────────────────────────────────

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (kurseSlugs.has(slug)) {
    const data = kurseData[slug];
    return {
      title: `Kurse ${data?.label ?? slug} – Weiterbildung Küssnacht`,
      description: `Kursangebot für ${data?.label ?? slug} im Bezirk Küssnacht.`,
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

  if (kurseSlugs.has(slug)) {
    return <KursePage slug={slug} />;
  }

  if (anbietendeSlugs.has(slug)) {
    return <AnbietendePage slug={slug} />;
  }

  notFound();
}

// ─── Kurse Page Template ─────────────────────────────────────────────────────

function KursePage({ slug }: { slug: string }) {
  const data = kurseData[slug];
  if (!data) notFound();

  return <KurseContent slug={slug} label={data.label} courses={data.courses} />;
}

// ─── Anbietende Page Template ────────────────────────────────────────────────

function AnbietendePage({ slug }: { slug: string }) {
  const data = anbietendeData[slug];
  if (!data) notFound();

  const allCourses = Object.values(kurseData).flatMap((d) => d.courses);

  return (
    <AnbietendeContent
      slug={slug}
      label={data.label}
      description={data.description}
      courses={allCourses}
    />
  );
}
