import { openCta } from "./CtaModal";
import { useEffect, useState } from "react";
import { Zap, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#writers", label: "Para Escritores" },
    { href: "#categories", label: "Categorías" },
  ];
  const ctaLink = { label: "Empieza aquí" };
  void ctaLink;
  const _unused = [
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--cream)]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(45,80,22,0.08),0_8px_24px_-12px_rgba(15,31,7,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--forest)] text-[color:var(--cream)] transition-transform group-hover:rotate-[-6deg]">
            <Zap className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl tracking-tight text-[color:var(--ink)]">
            TortuTip
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[color:var(--ink)]/75 transition-colors hover:text-[color:var(--forest)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#" onClick={(e) => { e.preventDefault(); openCta(); }}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-sm font-medium text-[color:var(--cream)] transition-all hover:bg-[color:var(--olive)] hover:shadow-lg md:inline-flex"
          >
            Empieza aquí
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-[color:var(--forest)] text-[color:var(--cream)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mb-3 rounded-2xl bg-[color:var(--cream)] p-4 shadow-lg ring-1 ring-[color:var(--border)]">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[color:var(--ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#" onClick={(e) => { e.preventDefault(); openCta(); }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-[color:var(--forest)] px-5 py-2.5 text-center text-[color:var(--cream)]"
              >
                Empieza aquí
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
