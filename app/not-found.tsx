import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[120px] md:text-[200px] font-extrabold tracking-[-0.05em] leading-none text-primary">
          404
        </p>
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-zinc-900 mt-2">
          Seite nicht gefunden
        </h1>
        <p className="text-sm text-zinc-500 mt-3 max-w-md mx-auto leading-relaxed">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
