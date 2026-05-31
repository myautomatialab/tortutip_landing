import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function FinalCta() {
  const ref = useReveal();
  return (
    <section
      id="download"
      ref={ref}
      className="reveal relative isolate overflow-hidden bg-[color:var(--ink)] py-28 md:py-36"
    >
      {/* turtle watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <span className="text-[28rem] leading-none">🐢</span>
      </div>
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--amber-brand)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-5xl leading-[1.05] text-[color:var(--cream)] sm:text-6xl md:text-7xl">
          Un tip al día.
          <br />
          <span className="italic">Una vida mejor.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[color:var(--cream)]/70">
          Únete gratis. Sin tarjeta. Sin excusas.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#download"
            className="btn-glow group inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--olive)]"
          >
            Descargar App
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="mt-8 text-sm text-[color:var(--cream)]/50">⭐ 4.9 · 10.000+ personas ya están dentro</p>
      </div>
    </section>
  );
}
