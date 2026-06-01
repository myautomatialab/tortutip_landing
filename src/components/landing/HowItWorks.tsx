import { openCta } from "./CtaModal";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    title: "Accede con Google",
    body: "Un click. Sin formularios. Sin contraseñas que olvidar.",
  },
  {
    n: "02",
    title: "Elige tus categorías",
    body: "Tu feed se construye alrededor de lo que realmente te importa.",
  },
  {
    n: "03",
    title: "Lee, guarda y comparte",
    body: "Convierte el aprendizaje diario en un hábito que se queda.",
  },
];

export function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="features" ref={ref} className="reveal bg-[color:var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--olive)]">
            Cómo funciona
          </span>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--ink)] sm:text-5xl md:text-6xl">
            Tan simple como leer el periódico de la mañana
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 transition-all hover:-translate-y-1 hover:border-[color:var(--olive)] hover:shadow-xl"
            >
              <span className="font-display text-7xl leading-none text-[color:var(--olive)]/15 transition-colors group-hover:text-[color:var(--olive)]/30">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-2xl text-[color:var(--ink)]">
                {s.title}
              </h3>
              <p className="mt-3 text-[color:var(--ink)]/65 leading-relaxed">
                {s.body}
              </p>
              <div className="mt-8 h-px w-12 bg-[color:var(--olive)] transition-all group-hover:w-24" />
            </div>
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
