"use client";

import { useState, useMemo } from "react";
import { type Kurs } from "@/app/lib/api/courses";

// ─── Icons ───────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const GridIcon = ({ active }: { active: boolean }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "#a1a1aa"} strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const ListIcon = ({ active }: { active: boolean }) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "#a1a1aa"} strokeWidth="1.5" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const SortIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M3 6h18M3 12h14M3 18h10" />
  </svg>
);

// ─── Sort Options ────────────────────────────────────────────────────────────

type SortOption = "default" | "title-asc" | "title-desc" | "instructor";

function sortCourses(courses: Kurs[], sort: SortOption): Kurs[] {
  const sorted = [...courses];
  switch (sort) {
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "instructor":
      return sorted.sort((a, b) => a.instructor.localeCompare(b.instructor));
    default:
      return sorted;
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

interface KurseContentProps {
  slug: string;
  label: string;
  courses: Kurs[];
}

export default function KurseContent({ slug, label, courses }: KurseContentProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortOption>("default");
  const [view, setView] = useState<"list" | "grid">("list");

  // Get unique categories
  const categories = useMemo(
    () => Array.from(new Set(courses.map((c) => c.category))).sort(),
    [courses]
  );

  // Filter & sort
  const filtered = useMemo(() => {
    let result = courses;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q)
      );
    }

    if (category !== "all") {
      result = result.filter((c) => c.category === category);
    }

    return sortCourses(result, sort);
  }, [courses, search, category, sort]);

  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col">
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

            {/* Filter by Category — hidden on mobile */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="hidden md:block border border-zinc-200 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 bg-white focus:outline-none cursor-pointer"
            >
              <option value="all">Alle Kategorien</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

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
                <option value="title-asc">Titel A–Z</option>
                <option value="title-desc">Titel Z–A</option>
                <option value="instructor">Kursleiter</option>
              </select>
            </div>

            {/* View Toggle — hidden on mobile */}
            <div className="hidden md:flex items-center border border-zinc-200 divide-x divide-zinc-200">
              <button
                onClick={() => setView("list")}
                className={`p-2 transition-colors ${view === "list" ? "bg-zinc-900 text-white" : "bg-white text-zinc-400 hover:text-zinc-900"}`}
                title="Listenansicht"
              >
                <ListIcon active={view === "list"} />
              </button>
              <button
                onClick={() => setView("grid")}
                className={`p-2 transition-colors ${view === "grid" ? "bg-zinc-900 text-white" : "bg-white text-zinc-400 hover:text-zinc-900"}`}
                title="Rasteransicht"
              >
                <GridIcon active={view === "grid"} />
              </button>
            </div>
          </div>
        </div>
        {/* ── Results ───────────────────────────────────── */}
        <section className="border-b border-zinc-100 px-6 md:px-16 py-12 md:py-16">
          {filtered.length === 0 ? (
            <div className="max-w-4xl mx-auto text-center py-16">
              <p className="text-zinc-400 text-sm">Keine Kurse gefunden.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary hover:text-zinc-900 transition-colors"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : view === "list" ? (
            /* ── List View ─────────────────────────────── */
            <div className="max-w-4xl mx-auto space-y-6">
              {filtered.map((course) => (
                <div
                  key={course.id}
                  className="border border-zinc-100 bg-white hover:border-zinc-200 transition-colors flex flex-col md:flex-row overflow-hidden"
                >
                  <div className="md:w-48 shrink-0">
                    <img
                      src={course.image}
                      alt={course.instructor}
                      className="w-full h-48 md:h-full object-contain bg-zinc-50"
                    />
                  </div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-100">
                      <span className="inline-block px-2.5 py-1 bg-zinc-100 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                        {course.category}
                      </span>
                      <span className="text-xs text-zinc-400">{course.date}</span>
                    </div>
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-primary leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed mt-2">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 border-t border-zinc-100">
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{course.instructor}</p>
                        <p className="text-xs text-zinc-400">{course.phone}</p>
                      </div>
                      <a
                        href={course.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-zinc-900 transition-colors"
                      >
                        Website →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ── Grid View ─────────────────────────────── */
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100">
              {filtered.map((course) => (
                <div
                  key={course.id}
                  className="bg-white flex flex-col"
                >
                  <div className="aspect-square overflow-hidden bg-zinc-50">
                    <img
                      src={course.image}
                      alt={course.instructor}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 py-2 border-b border-zinc-100">
                    <span className="inline-block px-2 py-0.5 bg-zinc-100 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                      {course.category}
                    </span>
                    <span className="text-[10px] text-zinc-400">{course.date}</span>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="text-base font-extrabold tracking-tight text-primary leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-1.5 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-zinc-100">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-zinc-900 truncate">{course.instructor}</p>
                      <p className="text-[10px] text-zinc-400">{course.phone}</p>
                    </div>
                    <a
                      href={course.website}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-[10px] font-semibold uppercase tracking-wider text-primary hover:text-zinc-900 transition-colors shrink-0"
                    >
                      Website →
                    </a>
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
