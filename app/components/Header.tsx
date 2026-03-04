"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { kurseItems, anbietendeItems, vereinItems } from "@/app/lib/data";

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width={10}
    height={10}
    viewBox="0 0 16 11"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 10.5L16 1.86193L14.7387 0.5L8 7.77613L1.26133 0.5L0 1.86193L8 10.5Z" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-[1800px] mx-auto flex items-stretch h-16 border-l border-l-zinc-100 border-r border-r-zinc-100">
        {/* Logo Block */}
        <div className="w-full md:w-64 shrink-0 border-r border-zinc-100 flex items-center px-6 justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tighter text-lg uppercase flex items-center gap-2"
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={256}
              height={80}
              className="max-h-[41px] object-contain"
            />
          </Link>

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[6px] p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-1 items-center px-8 gap-6 text-xs font-medium uppercase tracking-wide text-zinc-500">
          {/* Kurse Dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors py-2">
              Kurse
              <ChevronIcon className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-zinc-200 rounded-lg shadow-lg py-2 min-w-[160px]">
                {kurseItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block px-4 py-2 text-xs text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors normal-case tracking-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Anbietende Dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors py-2">
              Anbietende
              <ChevronIcon className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-zinc-200 rounded-lg shadow-lg py-2 min-w-[200px] max-h-[400px] overflow-y-auto">
                {anbietendeItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block px-4 py-2 text-xs text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors normal-case tracking-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Verein Dropdown */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors py-2">
              Verein
              <ChevronIcon className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-zinc-200 rounded-lg shadow-lg py-2 min-w-[180px]">
                {vereinItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block px-4 py-2 text-xs text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors normal-case tracking-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setNewsletterOpen(true)}
            className="h-full border-l border-zinc-100 px-6 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer text-xs font-medium uppercase tracking-wide"
          >
            Newsletter abonnieren
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-zinc-100 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="bg-white py-4 px-6 space-y-1 overflow-y-auto max-h-[70vh]">
          {/* Kurse */}
          <div>
            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-zinc-900 uppercase tracking-wide"
              onClick={() => toggleMobileDropdown("kurse")}
            >
              Kurse
              <ChevronIcon
                className={`w-3 h-3 transition-transform duration-200 ${
                  mobileDropdown === "kurse" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileDropdown === "kurse" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                {kurseItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block py-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-100" />

          {/* Anbietende */}
          <div>
            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-zinc-900 uppercase tracking-wide"
              onClick={() => toggleMobileDropdown("anbietende")}
            >
              Anbietende
              <ChevronIcon
                className={`w-3 h-3 transition-transform duration-200 ${
                  mobileDropdown === "anbietende" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileDropdown === "anbietende" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                {anbietendeItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block py-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-100" />

          {/* Verein */}
          <div>
            <button
              className="w-full flex items-center justify-between py-3 text-sm font-medium text-zinc-900 uppercase tracking-wide"
              onClick={() => toggleMobileDropdown("verein")}
            >
              Verein
              <ChevronIcon
                className={`w-3 h-3 transition-transform duration-200 ${
                  mobileDropdown === "verein" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileDropdown === "verein" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-4 pb-2 space-y-1">
                {vereinItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block py-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-100" />

          {/* Newsletter CTA on mobile */}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                setNewsletterOpen(true);
              }}
              className="w-full bg-primary text-white text-center py-3 text-sm font-medium uppercase tracking-wide cursor-pointer"
            >
              Newsletter abonnieren
            </button>
          </div>
        </nav>
      </div>
    </header>

      {/* Newsletter Fullscreen Overlay */}
      {newsletterOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-white flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4 sm:p-6 md:p-10 shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setNewsletterOpen(false);
              }}
              className="p-2 text-primary hover:text-primary/70 transition-colors"
              aria-label="Schliessen"
            >
              <svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary tracking-tight mb-4 sm:mb-6 text-center">
              Newsletter
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed mb-8 sm:mb-10 max-w-sm sm:max-w-md text-center px-2">
              Wir informieren dich jeweils zu Ende des Monat über
              bevorstehende Weiterbildungsangebote im Bezirk Küssnacht
            </p>

            <form
              className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md gap-3 sm:gap-0 px-2 sm:px-0"
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterOpen(false);
              }}
            >
              <input
                type="email"
                required
                placeholder="E-Mail-Adresse"
                className="flex-1 border border-zinc-300 sm:border-r-0 px-5 py-3.5 text-sm outline-none focus:border-primary transition-colors placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors shrink-0"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
