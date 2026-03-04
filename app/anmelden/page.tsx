import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursanmeldung – Weiterbildung Küssnacht",
  description:
    "Melden Sie sich für Kurse und Veranstaltungen der Weiterbildung Küssnacht an.",
  keywords: [
    "Weiterbildung Küssnacht",
    "Kursanmeldung",
    "Anmeldung",
    "Kurse",
    "Bezirk Küssnacht",
  ],
  openGraph: {
    title: "Kursanmeldung – Weiterbildung Küssnacht",
    description:
      "Melden Sie sich für Kurse und Veranstaltungen der Weiterbildung Küssnacht an.",
    type: "website",
    locale: "de_CH",
    siteName: "Weiterbildung Küssnacht",
  },
};

export default function AnmeldenPage() {
  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 flex flex-col relative">
      <main className="flex-1 flex flex-col">
   

        {/* ── Form ─────────────────────────────────────────── */}
        <section className="border-b border-zinc-100">
       

          <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-zinc-100">
            {/* Left: Form fields */}
            <div className="md:col-span-7 px-6 md:px-16 py-12 md:py-16">
              <form
                action="https://formsubmit.co/kurse@weiterbildung-kuessnacht.ch"
                method="POST"
                className="space-y-px bg-zinc-100"
              >
                {/* Row: Nachname / Vorname */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                  <div className="bg-white p-5">
                    <label
                      htmlFor="nachname"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Nachname <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="nachname"
                      name="nachname"
                      required
                      maxLength={100}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <label
                      htmlFor="vorname"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Vorname <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="vorname"
                      name="vorname"
                      required
                      maxLength={100}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                </div>

                {/* Adresse */}
                <div className="bg-white p-5">
                  <label
                    htmlFor="adresse"
                    className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Adresse <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    required
                    maxLength={100}
                    className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                    placeholder="Strasse und Hausnummer"
                  />
                </div>

                {/* Row: PLZ / Ort */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                  <div className="bg-white p-5">
                    <label
                      htmlFor="plz"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      PLZ <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="plz"
                      name="plz"
                      required
                      maxLength={10}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="z.B. 6403"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <label
                      htmlFor="ort"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Ort <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="ort"
                      name="ort"
                      required
                      maxLength={100}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihr Ort"
                    />
                  </div>
                </div>

                {/* Row: Telefon / E-Mail */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
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
                      maxLength={20}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
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
                      maxLength={100}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Ihre E-Mailadresse"
                    />
                  </div>
                </div>

                {/* Row: Kurs / Anzahl */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                  <div className="bg-white p-5">
                    <label
                      htmlFor="kurs"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Name des Kurses <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="kurs"
                      name="name-des-kurses"
                      required
                      maxLength={100}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="Kursbezeichnung"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <label
                      htmlFor="anzahl"
                      className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2"
                    >
                      Anzahl Personen <span className="text-primary">*</span>
                    </label>
                    <input
                      type="number"
                      id="anzahl"
                      name="anzahl-personen"
                      required
                      min={1}
                      className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none border-b border-zinc-200 focus:border-zinc-900 pb-2 transition-colors"
                      placeholder="1"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="bg-white p-5 pt-8">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors"
                  >
                    Anmelden
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Info panel */}
            <div className="hidden md:flex md:col-span-5 px-6 md:px-16 py-12 md:py-16 flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-6">
                  Hinweise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-200 text-[10px] font-bold text-zinc-400 shrink-0 mt-0.5">
                      01
                    </span>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Füllen Sie alle Felder vollständig aus und klicken Sie auf
                      «Anmelden».
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-200 text-[10px] font-bold text-zinc-400 shrink-0 mt-0.5">
                      02
                    </span>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Einige Tage vor dem Anlass erhalten Sie eine
                      Erinnerungsmail mit allen wichtigen Infos.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 border border-zinc-200 text-[10px] font-bold text-zinc-400 shrink-0 mt-0.5">
                      03
                    </span>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Bei Fragen kontaktieren Sie uns unter{" "}
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

              <div className="mt-10 p-6 bg-zinc-50 border border-zinc-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Wir freuen uns auf Sie!
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Weiterbildung Küssnacht – erlernen, erfahren, erleben.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
