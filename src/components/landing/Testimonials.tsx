import { openCta } from "./CtaModal";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    quote: "Llevo 14 días con mi racha y nunca me había sentido tan constante.",
    name: "María G.",
    role: "Diseñadora · Madrid",
    initials: "MG",
    offset: "md:translate-y-0",
  },
  {
    quote: "Publiqué mi primer artículo y 200 personas lo guardaron en una semana.",
    name: "Dr. Carlos R.",
    role: "Nutricionista · CDMX",
    initials: "CR",
    offset: "md:translate-y-10",
  },
  {
    quote: "El feed personalizado es exactamente lo que necesitaba. Sin ruido.",
    name: "Ana P.",
    role: "Product Manager · BCN",
    initials: "AP",
    offset: "md:-translate-y-6",
  },
];

export function Testimonials() {
  const ref = useReveal();
  return (
    <section ref={ref} className="reveal bg-[color:var(--beige)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--olive)]">
            Comunidad
          </span>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--ink)] sm:text-5xl md:text-6xl">
            Ellos ya lo están viviendo
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={t.name}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`rounded-3xl border-l-4 border-[color:var(--forest)] bg-[color:var(--cream)] p-8 shadow-sm transition-transform ${t.offset}`}
            >
              <blockquote className="font-display text-xl leading-snug text-[color:var(--ink)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--forest)] text-sm font-semibold text-[color:var(--cream)]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[color:var(--ink)]">{t.name}</p>
                  <p className="text-xs text-[color:var(--ink)]/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
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
