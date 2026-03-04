import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATELIER VÖID - Structural Harmony",
  description:
    "Defining space through the absence of clutter. Exploring the balance between heavy raw materials and ethereal light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        {children}
         {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:divide-x divide-zinc-100 max-w-[1800px] mx-auto border-l border-l-zinc-100 border-r border-r-zinc-100">
          {/* Logo & Branding */}
          <div className="md:col-span-4 p-8 md:p-10">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={160}
                height={80}
                className="max-h-[44px] object-contain"
              />
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Entdecke das vielfältige Weiterbildungsangebot im Bezirk Küssnacht.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 p-8 md:p-10 border-t md:border-t-0 border-zinc-100">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-5">
              Kontakt
            </h5>
            <div className="space-y-3 text-sm text-zinc-500">
              <div>
                <span className="font-medium text-zinc-700">Geschäftsstelle</span>
                <p className="mt-0.5">Kathi Derendinger</p>
              </div>
              <div>
                <span className="font-medium text-zinc-700">Adresse</span>
                <p className="mt-0.5">Schwertweg 1, 6405 Immensee</p>
              </div>
              <div>
                <a href="mailto:kurse@weiterbildung-kuessnacht.ch" className="text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-2 decoration-zinc-300">
                  kurse@weiterbildung-kuessnacht.ch
                </a>
              </div>
            </div>
          </div>

          {/* Links & Copyright */}
          <div className="md:col-span-4 p-8 md:p-10 border-t md:border-t-0 border-zinc-100 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-5">
                Links
              </h5>
              <div className="flex flex-col gap-2.5">
                <a href="https://www.weiterbildung-kuessnacht.ch" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  www.weiterbildung-kuessnacht.ch
                </a>
                <Link href="/januar" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Kursangebot
                </Link>
                <Link href="/verein" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Über uns
                </Link>
              </div>
            </div>
            <p className="text-xs text-zinc-400 mt-8">
              © {new Date().getFullYear()} Weiterbildung Küssnacht. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
