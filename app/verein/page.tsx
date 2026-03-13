import Link from "next/link";
import type { Metadata } from "next";
import {
  vereinItems,
  ueberUnsStatements,
  dokumenteLinks,
} from "@/app/lib/data";
import {
  fetchVorstandMembers,
  extractGroupLabel,
  extractBullets,
} from "@/app/lib/api/functionaries";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Über uns – Verein Weiterbildung Küssnacht",
  description:
    "Der Verein Weiterbildung Küssnacht animiert, koordiniert und ergänzt das Weiterbildungsangebot im Bezirk Küssnacht. Lernen Sie unseren Vorstand kennen und werden Sie Mitglied.",
  keywords: [
    "Weiterbildung Küssnacht",
    "Verein",
    "Über uns",
    "Vorstand",
    "Mitgliedschaft",
    "Bezirk Küssnacht",
    "Weiterbildungsangebot",
  ],
  openGraph: {
    title: "Über uns – Verein Weiterbildung Küssnacht",
    description:
      "Der Verein Weiterbildung Küssnacht animiert, koordiniert und ergänzt das Weiterbildungsangebot im Bezirk Küssnacht.",
    type: "website",
    locale: "de_CH",
    siteName: "Weiterbildung Küssnacht",
  },
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default async function VereinPage() {
  const vorstandMembers = await fetchVorstandMembers();

  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="border-b border-zinc-100 bg-zinc-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-24 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
              Verein
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[1]">
              Über uns
            </h1>
            <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              Verein Weiterbildung Küssnacht – erlernen, erfahren, erleben.
              Wir fördern das vielfältige Weiterbildungsangebot im Bezirk
              Küssnacht.
            </p>
          </div>
        </section>
       
        {/* ── Unsere Aufgaben — card grid ──────────────────── */}
        <section className="border-b border-zinc-100">
           <div className="border-b border-zinc-100 py-4 px-6 md:px-0 flex flex-col md:flex-row md:divide-x divide-zinc-100">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary px-6 md:px-16">
                Unsere Aufgaben
              </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-50  px-6 md:px-8">
            {ueberUnsStatements.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 flex flex-col group hover:bg-zinc-50 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 border border-zinc-200 text-sm font-bold text-zinc-400 mb-6 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-zinc-900 mb-2 group-hover:text-primary transition-colors">
                  {s.bold}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Vorstand — card grid ────────────────────────── */}
        <section className="border-b border-zinc-100">
          <div className="px-6 md:px-16 py-12 md:py-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">
                Vorstand
              </h2>
              <span className="text-xs text-zinc-400">
                {vorstandMembers.length} Mitglieder
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vorstandMembers.map((member) => {
                const groupLabel = extractGroupLabel(member.descriptionHtml);
                const bullets = extractBullets(member.descriptionHtml);

                return (
                  <div
                    key={member.id}
                    className="border border-zinc-200 flex flex-col hover:border-zinc-400 hover:shadow-md transition-all duration-200 group overflow-hidden bg-white"
                  >
                    {/* Header with image + title */}
                    <div className="flex items-center gap-4 p-6">
                      {member.image ? (
                        <div className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 bg-zinc-100 border-2 border-zinc-200 shadow-sm">
                          <img
                            src={member.image}
                            alt={member.fullName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-[72px] h-[72px] rounded-full bg-zinc-50 border-2 border-zinc-200 shadow-sm shrink-0 flex items-center justify-center">
                          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-zinc-900 leading-snug group-hover:text-primary transition-colors">
                          {member.title}
                        </h3>
                        <p className="text-sm text-zinc-500 mt-0.5">
                          {member.fullName}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    {(groupLabel || bullets.length > 0) && (
                      <div className="px-6 pb-4 flex-1">
                        {groupLabel && (
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full mb-3">
                            {groupLabel}
                          </span>
                        )}
                        {bullets.length > 0 && (
                          <ul className="space-y-1.5">
                            {bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-zinc-600"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-1.5" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Footer with Mitglied werden */}
                    <div className="mt-auto px-6 py-4 border-t border-zinc-100 bg-zinc-50/50">
                      <a
                        href={`https://me.onra.ch/signup/?partnerToken=${process.env.NEXT_PUBLIC_CONNECT_TOKEN}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:text-zinc-900 transition-colors"
                      >
                        Mitglied werden
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Mitgliedschaft & Dokumente — split grid ─────── */}
        <section className="border-b border-zinc-100 grid grid-cols-1 md:grid-cols-12 md:divide-x divide-zinc-100">
          {/* Mitgliedschaft */}
          <div className="md:col-span-6 px-6 md:px-16 py-12 md:py-16 border-b md:border-b-0 border-zinc-100">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Mitgliedschaft
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-lg">
              Ob Kurse, Seminare oder Referate:{" "}
              <Link
                href="/mitgliedschaft"
                className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
              >
                Werden Sie Mitglied
              </Link>{" "}
              und profitieren Sie von der Publikation Ihrer
              Weiterbildungsangebote
            </p>

            <ul className="mt-5 space-y-2">
              <li className="flex items-center gap-2 text-sm text-zinc-600">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                auf unserer Webseite
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-600">
                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                in unserem Newsletter (monatlich)
              </li>
            </ul>

            <div className="mt-8 inline-block px-6 py-3 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider">
              CHF 40.- / Jahr
            </div>
          </div>

          {/* Dokumente */}
          <div className="md:col-span-6 px-6 md:px-16 py-12 md:py-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Dokumente
            </h2>
            <div className="space-y-4">
              {dokumenteLinks.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-zinc-200 hover:border-zinc-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-zinc-400 group-hover:text-zinc-900 transition-colors"
                    >
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    <span className="text-sm font-medium text-zinc-900">
                      {doc.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-primary transition-colors">
                    PDF ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bankverbindung & Gestaltung ─────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-zinc-100 bg-white">
          {/* Bankverbindung */}
          <div className="md:col-span-6 px-6 md:px-16 py-12 md:py-16 border-b md:border-b-0 border-zinc-100">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Bankverbindung
            </h2>
            <div className="text-sm text-zinc-500 leading-relaxed">
              <p className="text-zinc-900 font-mono text-xs tracking-wide">
                CH21 0077 7005 0195 4167 0
              </p>
              <p className="mt-3">Verein Weiterbildung Küssnacht</p>
              <p>6403 Küssnacht</p>
            </div>
          </div>

          {/* Gestaltung */}
          <div className="md:col-span-6 px-6 md:px-16 py-12 md:py-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-8">
              Gestaltung
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="http://www.rumede.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-primary transition-colors underline underline-offset-4 decoration-zinc-300 hover:decoration-primary"
                >
                  Reto Ulrich
                </a>
                <p className="text-xs text-zinc-500 mt-0.5">Grafikdesign</p>
              </div>
              <div>
                <a
                  href="https://simoneulrich.wixsite.com/binimedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-primary transition-colors underline underline-offset-4 decoration-zinc-300 hover:decoration-primary"
                >
                  Simone Ulrich
                </a>
                <p className="text-xs text-zinc-500 mt-0.5">Webdesign</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
