import Link from "next/link";
import type { Metadata } from "next";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Clubtreffen – Weiterbildung Küssnacht",
  description:
    "Jeden ersten Montag im Monat treffen sich Vereinsmitglieder und Interessierte in der Schwyzerhof Bar in Küssnacht.",
  keywords: [
    "Weiterbildung Küssnacht",
    "Clubtreffen",
    "Schwyzerhof Bar",
    "Vereinsmitglieder",
    "Bezirk Küssnacht",
  ],
  openGraph: {
    title: "Clubtreffen – Weiterbildung Küssnacht",
    description:
      "Jeden ersten Montag im Monat treffen sich Vereinsmitglieder und Interessierte in der Schwyzerhof Bar.",
    type: "website",
    locale: "de_CH",
    siteName: "Weiterbildung Küssnacht",
  },
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default function ClubPage() {
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
              Clubtreffen
            </h1>
            <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              Jeden ersten Montag im Monat – austauschen, kennenlernen und
              Neues erfahren.
            </p>
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────── */}
        <section className="border-b border-zinc-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-6 md:px-16 py-12 md:py-16">
            {/* Image */}
            <div className="flex items-center justify-center md:col-span-5">
              <div className="aspect-[3/2] md:aspect-auto md:h-full relative overflow-hidden bg-zinc-100 w-full">
                <img
                  src="https://static.wixstatic.com/media/11062b_a6c2b070d3ea4f4da545fe0fe091024a~mv2.jpg/v1/crop/x_752,y_0,w_4630,h_4090/fill/w_480,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Leute%20in%20einer%20Bar.jpg"
                  alt="Leute in einer Bar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-sm text-zinc-600 leading-relaxed max-w-xl">
                Jeden ersten Montag im Monat treffen sich Vereinsmitglieder und
                Interessierte ab 19.00 Uhr in der Schwyzerhof Bar in
                entspannter Atmosphäre, um sich auszutauschen und Neues zu
                erfahren.
              </p>

              <p className="text-sm text-zinc-600 leading-relaxed max-w-xl mt-6">
                <Link
                  href="/mitgliedschaft"
                  className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
                >
                  Werden Sie Mitglied
                </Link>{" "}
                von Weiterbildung Küssnacht und besuchen Sie unsere Treffs,
                jeweils um 19.00 Uhr. Lernen Sie in gemütlicher Runde neue
                Menschen kennen und erfahren Sie mehr über das vielfältige
                Kursangebot im Bezirk Küssnacht.
              </p>

              {/* Details */}
              <div className="mt-8 space-y-2">
                <p className="text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900">Ort:</span>{" "}
                  Schwyzerhof Bar, Bahnhofstrasse 27, Küssnacht
                </p>
                <p className="text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900">Kosten:</span>{" "}
                  keine, Getränke auf eigene Kosten
                </p>
              </div>

              {/* Anmeldung */}
              <div className="mt-10">
                <h3 className="text-lg font-extrabold text-primary tracking-tight">
                  Anmeldung
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                  an Iris Meier 079 320 32 19, Ressort Anlässe, oder unter{" "}
                  <a
                    href="mailto:kurse@weiterbildung-kuessnacht.ch"
                    className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
                  >
                    kurse@weiterbildung-kuessnacht.ch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
