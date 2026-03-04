"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { anbietendeItems, anbietendeData, type Kurs } from "@/app/lib/data";

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

interface AnbietendeContentProps {
  slug: string;
  label: string;
  description: string;
  courses: Kurs[];
}

export default function AnbietendeContent({ slug, label, description, courses }: AnbietendeContentProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortOption>("default");
  const [view, setView] = useState<"list" | "grid">("grid");

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
          ) : view === "grid" ? (
            /* ── Grid View ─────────────────────────────── */
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <div
                  key={course.id}
                  className="group border border-zinc-100 hover:border-zinc-200 transition-colors flex flex-col overflow-hidden"
                >
                  <div className="h-56 overflow-hidden bg-zinc-50 flex items-center justify-center relative">
                    {/* Blurred background image */}
                    <img
                      src={course.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-40"
                    />
                    <div className="w-44 h-44 rounded-full overflow-hidden relative z-10 shadow-lg">
                      <img
                        src={course.image}
                        alt={course.instructor}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-5 py-2.5 border-b border-zinc-100">
                    <span className="px-2 py-0.5 bg-zinc-100 text-[9px] font-semibold uppercase tracking-wider text-zinc-500 truncate min-w-0">
                      {course.category}
                    </span>
                    <span className="text-[10px] text-zinc-400 shrink-0 whitespace-nowrap">{course.date}</span>
                  </div>
                  <div className="px-5 py-4 flex-1">
                    <h4 className="text-sm font-semibold text-primary leading-snug">{course.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed line-clamp-2">{course.description}</p>
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
          ) : (
            /* ── List View ─────────────────────────────── */
            <div className="max-w-4xl mx-auto space-y-6">
              {filtered.map((course) => (
                <div
                  key={course.id}
                  className="border border-zinc-100 bg-white hover:border-zinc-200 transition-colors flex flex-col md:flex-row overflow-hidden"
                >
                  <div className="md:w-56 shrink-0 flex items-center justify-center p-6 bg-zinc-50 relative overflow-hidden">
                    <img
                      src={course.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-60"
                    />
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden z-10 shadow-lg">
                      <img
                        src={course.image}
                        alt={course.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center justify-between gap-3 px-6 py-3 border-b border-zinc-100">
                      <span className="inline-block px-2.5 py-1 bg-zinc-100 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 truncate min-w-0">
                        {course.category}
                      </span>
                      <span className="text-xs text-zinc-400 shrink-0 whitespace-nowrap">{course.date}</span>
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
          )}
        </section>
      </main>
    </div>
  );
}
