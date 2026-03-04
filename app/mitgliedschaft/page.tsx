import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitglied werden – Weiterbildung Küssnacht",
  description:
    "Werden Sie Mitglied von Weiterbildung Küssnacht und profitieren Sie von der Publikation Ihrer Weiterbildungsangebote.",
  keywords: [
    "Weiterbildung Küssnacht",
    "Mitgliedschaft",
    "Mitglied werden",
    "Bezirk Küssnacht",
  ],
  openGraph: {
    title: "Mitglied werden – Weiterbildung Küssnacht",
    description:
      "Werden Sie Mitglied von Weiterbildung Küssnacht und profitieren Sie von der Publikation Ihrer Weiterbildungsangebote.",
    type: "website",
    locale: "de_CH",
    siteName: "Weiterbildung Küssnacht",
  },
};

export default function MitgliedschaftPage() {
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
              Mitglied werden
            </h1>
            <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
              Für einen Jahresbeitrag von CHF 40.– profitieren Sie von der
              Publikation Ihrer Weiterbildungsangebote.
            </p>
          </div>
        </section>

        {/* ── Info + Form ──────────────────────────────────── */}
        <section className="border-b border-zinc-100">
          <div className="border-b border-zinc-100 py-4 px-6 md:px-16">
            <h2 className="text-sm text-center font-semibold uppercase tracking-wider text-primary">
              Mitgliedschaftsantrag
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-zinc-100">
            {/* Left: Form fields */}
            <div className="md:col-span-7 px-6 md:px-16 py-12 md:py-16">
              <form
                action="https://formsubmit.co/kurse@weiterbildung-kuessnacht.ch"
                method="POST"
                className="space-y-px bg-zinc-100"
              >
                {/* Name / Firma */}
                <div className="bg-white p-5">
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Vor- / Nachname (bzw. Firma){" "}
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                    placeholder="Max Muster / Firma AG"
                  />
                </div>

                {/* Adresse, PLZ, Ort */}
                <div className="bg-white p-5">
                  <label
                    htmlFor="adresse"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Adresse, PLZ, Ort{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    required
                    maxLength={100}
                    className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                    placeholder="Musterstrasse 1, 6403 Küssnacht"
                  />
                </div>

                {/* Row: E-Mail / Telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                  <div className="bg-white p-5">
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      E-Mail <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={250}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihre E-Mailadresse"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <label
                      htmlFor="telefon"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Telefon <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      required
                      maxLength={50}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>

                {/* Webseite */}
                <div className="bg-white p-5">
                  <label
                    htmlFor="webseite"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Webseite
                  </label>
                  <input
                    type="text"
                    id="webseite"
                    name="webseite"
                    maxLength={100}
                    className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                    placeholder="www.beispiel.ch"
                  />
                </div>

                {/* Angebot */}
                <div className="bg-white p-5">
                  <label
                    htmlFor="angebot"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Beschreiben Sie Ihr Angebot{" "}
                    <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="angebot"
                    name="angebot"
                    required
                    rows={4}
                    className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Weiterbildungsangebot…"
                  />
                </div>

                {/* Statuten & Leitbild Hinweis */}
                <div className="bg-white p-5">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Mit dem Einreichen dieses Formulars bestätigen Sie, dass Sie
                    die{" "}
                    <a
                      href="https://www.weiterbildung-kuessnacht.ch/_files/ugd/770a6f_d9a1df78194b4f798bda6946b6e46836.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
                    >
                      Statuten
                    </a>{" "}
                    und das{" "}
                    <a
                      href="https://www.weiterbildung-kuessnacht.ch/_files/ugd/770a6f_f5455e9f7acb40788a2f2bbf560233c1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
                    >
                      Leitbild
                    </a>{" "}
                    gelesen haben. Ihnen ist bewusst, dass Sie für Ihre Kurse die
                    Kostenverantwortung, Rechnungsstellung und Haftung selber
                    übernehmen.
                  </p>
                </div>

                {/* Einverständnis */}
                <div className="bg-white p-5">
                  <p className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Sind Sie damit einverstanden?{" "}
                    <span className="text-primary">*</span>
                  </p>
                  <label className="inline-flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="einverstanden"
                      value="Ja"
                      required
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-zinc-900 group-hover:text-primary transition-colors">
                      Ja
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="bg-white p-5 pt-8">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors"
                  >
                    Einreichen
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Info panel */}
            <div className="hidden md:flex md:col-span-5 px-6 md:px-16 py-12 md:py-16 flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-6">
                  Ihre Vorteile
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-200 text-[10px] font-bold text-zinc-400 shrink-0 mt-0.5">
                      01
                    </span>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Publikation Ihrer Angebote auf unserer Webseite
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-200 text-[10px] font-bold text-zinc-400 shrink-0 mt-0.5">
                      02
                    </span>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Veröffentlichung in unserem monatlichen Newsletter
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-200 text-[10px] font-bold text-zinc-400 shrink-0 mt-0.5">
                      03
                    </span>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Monatliches{" "}
                      <Link
                        href="/club"
                        className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors"
                      >
                        Clubtreffen
                      </Link>{" "}
                      zum Austausch und Netzwerken
                    </p>
                  </div>
                </div>

                <div className="mt-8 inline-block px-6 py-3 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider">
                  CHF 40.– / Jahr
                </div>
              </div>

              <div className="mt-10 p-6 bg-zinc-50 border border-zinc-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Herzlichen Dank für Ihr Interesse!
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Wir prüfen Ihren Mitgliederantrag und melden uns in den
                  nächsten Tagen bei Ihnen für das weitere Vorgehen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
