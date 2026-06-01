import { Bookmark, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const articles = [
  {
    title: "El Rainbow Bowl que cambió mi semana",
    cat: "Comida Saludable",
    time: "8 min",
    author: "Dr. Elena Vance",
    initials: "EV",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "5-Minute Desk Stretches",
    cat: "Fitness",
    time: "5 min",
    author: "Marc Thompson",
    initials: "MT",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "La Regla del 1%: hábitos que se quedan",
    cat: "Productividad",
    time: "12 min",
    author: "Sarah Bloom",
    initials: "SB",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80",
  },
];

export function Articles() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal bg-[color:var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--olive)]">
            Lecturas destacadas
          </span>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--ink)] sm:text-5xl md:text-6xl">
            Contenido que inspira
          </h2>
        </div>

        <div className="mt-14 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group w-[82%] shrink-0 snap-center overflow-hidden rounded-3xl bg-white ring-1 ring-[color:var(--border)] transition-all hover:-translate-y-1 hover:shadow-2xl md:w-auto"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[color:var(--cream)]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[color:var(--forest)]">
                  {a.cat}
                </span>
                <button className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[color:var(--forest)] transition-colors hover:bg-[color:var(--forest)] hover:text-[color:var(--cream)]">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl leading-snug text-[color:var(--ink)]">
                  {a.title}
                </h3>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--forest)] text-xs font-semibold text-[color:var(--cream)]">
                      {a.initials}
                    </div>
                    <span className="text-sm text-[color:var(--ink)]/75">{a.author}</span>
                  </div>
                  <span className="text-xs text-[color:var(--ink)]/55">{a.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://claude.ai/public/artifacts/633ca522-a580-41b0-be43-a9b25e080a0c"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--olive)]"
          >
            Empieza aquí
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
