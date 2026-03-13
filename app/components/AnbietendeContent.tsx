"use client";

import { useState, useMemo } from "react";
import { type Company } from "./member-api";

// ─── Icons ───────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);


const SortIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M3 6h18M3 12h14M3 18h10" />
  </svg>
);

// ─── Sort Options ────────────────────────────────────────────────────────────

type SortOption = "default" | "name-asc" | "name-desc" | "city";

function sortCompanies(companies: Company[], sort: SortOption): Company[] {
  const sorted = [...companies];
  switch (sort) {
    case "name-asc":
      return sorted.sort((a, b) => a.company.localeCompare(b.company));
    case "name-desc":
      return sorted.sort((a, b) => b.company.localeCompare(a.company));
    case "city":
      return sorted.sort((a, b) =>
        (a.address?.city ?? "").localeCompare(b.address?.city ?? "")
      );
    default:
      return sorted;
  }
}

// ─── Placeholder icon when company has no image ─────────────────────────────

const CompanyPlaceholder = () => (
  <svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="#d4d4d8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

// ─── Component ───────────────────────────────────────────────────────────────

interface AnbietendeContentProps {
  slug: string;
  label: string;
  description: string;
  companies: Company[];
}

export default function AnbietendeContent({ slug, label, description, companies }: AnbietendeContentProps) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sort, setSort] = useState<SortOption>("default");
  const [view, setView] = useState<"list" | "grid">("grid");

  // Get unique tags from the companies on this page
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const c of companies) {
      for (const tag of (c.tags ?? [])) tags.add(tag);
    }
    return Array.from(tags).sort();
  }, [companies]);

  // Filter & sort
  const filtered = useMemo(() => {
    let result = companies;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.company.toLowerCase().includes(q) ||
          c.email?.toLowerCase().includes(q) ||
          c.phone?.toLowerCase().includes(q) ||
          c.address?.city?.toLowerCase().includes(q) ||
          c.address?.street?.toLowerCase().includes(q)
      );
    }

    if (categoryFilter !== "all") {
      result = result.filter((c) => c.tags?.includes(categoryFilter));
    }

    return sortCompanies(result, sort);
  }, [companies, search, categoryFilter, sort]);

  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col">

        {/* ── Toolbar: Search, Filter, Sort, View ───────── */}
        <div className="sticky top-16 z-20 bg-white border-b border-zinc-100 px-4 md:px-16 py-3">
          <div className="max-w-4xl mx-auto flex flex-row items-center gap-2 md:gap-3">
            {/* Search */}
            <div className="flex-1 min-w-0 flex items-center gap-2 border border-zinc-200 px-3 py-2 bg-white">
              <SearchIcon />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Suchen…"
                className="flex-1 min-w-0 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-zinc-400 hover:text-zinc-900 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter by tag — hidden on mobile */}
            {allTags.length > 1 && (
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="hidden md:block border border-zinc-200 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-white focus:outline-none cursor-pointer"
              >
                <option value="all">Alle Kategorien</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            )}

            {/* Sort — icon button wrapping a native select */}
            <div className="relative border border-zinc-200 bg-white">
              <div className="p-2 pointer-events-none flex items-center justify-center text-zinc-600">
                <SortIcon />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title="Sortierung"
              >
                <option value="default">Sortierung</option>
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
                <option value="city">Ort</option>
              </select>
            </div>
          </div>
        </div>

        {/* ── Results ───────────────────────────────────── */}
        <section className="border-b border-zinc-100 px-6 md:px-16 py-12 md:py-16">
          {filtered.length === 0 ? (
            <div className="max-w-4xl mx-auto text-center py-16">
              <p className="text-zinc-400 text-sm">Keine Anbietende gefunden.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategoryFilter("all");
                }}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary hover:text-zinc-900 transition-colors"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) :  (
            /* ── Grid View ─────────────────────────────── */
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((company) => (
                <div
                  key={company.id}
                  className="group border border-zinc-100 hover:border-zinc-200 transition-colors flex flex-col overflow-hidden"
                >
                  {/* Image / Placeholder */}
                  <div className="h-56 overflow-hidden bg-zinc-50 flex items-center justify-center relative">
                    {(company.customLogo || company.image) ? (
                      <>
                        <img
                          src={company.customLogo || company.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-40"
                        />
                        <div className="w-44 h-44 rounded-full overflow-hidden relative z-10 shadow-lg">
                          <img
                            src={company.customLogo || company.image}
                            alt={company.customName || company.company}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </>
                    ) : (
                      <CompanyPlaceholder />
                    )}
                  </div>

                  {/* Tag badges */}
                  <div className="flex flex-wrap items-center gap-1.5 px-5 py-2.5 border-b border-zinc-100">
                    {(company.tags ?? []).length > 0 ? (
                      company.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-zinc-100 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 truncate"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-[10px] text-zinc-300">—</span>
                    )}
                  </div>

                  {/* Company info */}
                  <div className="px-5 py-4 flex-1">
                    <h4 className="text-base font-semibold text-primary leading-snug">
                      {company.customName || company.company}
                    </h4>
                    {company.address && (
                      <p className="text-sm text-zinc-500 mt-1.5 leading-relaxed">
                        {company.address.street} {company.address.streetNumber}
                        {company.address.city && `, ${company.address.zip} ${company.address.city}`}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-zinc-100">
                    <div className="min-w-0">
                      {company.phone && (
                        <p className="text-sm text-zinc-600 truncate">{company.phone}</p>
                      )}
                      {company.email && (
                        <a
                          href={`mailto:${company.email}`}
                          className="text-xs text-primary underline underline-offset-2 hover:text-zinc-900 transition-colors truncate block"
                        >
                          E-Mail
                        </a>
                      )}
                    </div>
                    {company.weblinks?.website && (
                      <a
                        href={company.weblinks.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-zinc-900 transition-colors shrink-0"
                      >
                        Website →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
         
          )}
        </section>
      </main>
    </div>
  );
}
