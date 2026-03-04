import type { Metadata } from "next";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Anlässe – Weiterbildung Küssnacht",
  description:
    "Aktuelle Anlässe und Veranstaltungen des Vereins Weiterbildung Küssnacht. Generalversammlung, Events und mehr.",
  keywords: [
    "Weiterbildung Küssnacht",
    "Anlässe",
    "Veranstaltungen",
    "Generalversammlung",
    "Events",
    "Bezirk Küssnacht",
  ],
  openGraph: {
    title: "Anlässe – Weiterbildung Küssnacht",
    description:
      "Aktuelle Anlässe und Veranstaltungen des Vereins Weiterbildung Küssnacht.",
    type: "website",
    locale: "de_CH",
    siteName: "Weiterbildung Küssnacht",
  },
};

// ─── Event Data ──────────────────────────────────────────────────────────────

interface Anlass {
  date: string;
  title: string;
  description: string;
}

const anlaesse: Anlass[] = [
  {
    date: "Freitag, 20. Februar 2026",
    title: "Generalversammlung",
    description:
      "Wir treffen uns in diesem Jahr wieder im Monséjour. Nähere Details werden per Mail verschickt.",
  },
];

// ─── Page Component ──────────────────────────────────────────────────────────

export default function AnlaessePage() {
  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 flex flex-col relative">
      <main className="flex-1 flex flex-col">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="border-b border-zinc-100 bg-zinc-900 text-white">
          <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-24 text-center">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
              Verein
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[1]">
              Anlässe
            </h1>
            <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              Aktuelle Veranstaltungen und Events des Vereins Weiterbildung
              Küssnacht.
            </p>
          </div>
        </section>

        {/* ── Events ───────────────────────────────────────── */}
        <section className="border-b border-zinc-100">
          <div className="border-b border-zinc-100 py-4 px-6 md:px-16">
            <h2 className="text-sm text-center font-semibold uppercase tracking-wider text-primary">
              Kommende Anlässe
            </h2>
          </div>

          <div className="flex justify-center max-w-5xl mx-auto px-6 md:px-16 py-12 md:py-16 space-y-8">
            {anlaesse.map((event, i) => (
              <div
                key={i}
                className="bg-primary text-white p-8 md:p-12 max-w-3xl"
              >
                <p className="text-lg md:text-2xl font-extrabold tracking-tight leading-tight">
                  {event.date}
                </p>
                <h3 className="text-lg md:text-2xl font-extrabold tracking-tight leading-tight mt-1">
                  {event.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
