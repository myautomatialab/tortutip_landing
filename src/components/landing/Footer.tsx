import { Zap, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const cols = [
    {
      title: "Producto",
      links: ["Features", "Categorías", "Para Escritores", "Descargar"],
    },
    {
      title: "Empresa",
      links: ["Sobre nosotros", "Blog", "Carreras", "Prensa"],
    },
    {
      title: "Legal",
      links: ["Privacidad", "Términos", "Cookies", "Contacto"],
    },
  ];
  return (
    <footer style={{ backgroundColor: "#0A1505" }} className="text-[color:var(--cream)]/75">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--amber-brand)] text-[color:var(--ink)]">
                <Zap className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-xl text-[color:var(--cream)]">TortuTip</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[color:var(--cream)]/60">
              Get better, one tip at a time. 🐢
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--cream)]/8 transition-colors hover:bg-[color:var(--olive)]"
                  aria-label="social"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--amber-brand)]">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm transition-colors hover:text-[color:var(--cream)]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--cream)]/10 pt-8 text-xs text-[color:var(--cream)]/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TortuTip. Todos los derechos reservados.</p>
          <p>Hecho con 🐢 y café.</p>
        </div>
      </div>
    </footer>
  );
}
