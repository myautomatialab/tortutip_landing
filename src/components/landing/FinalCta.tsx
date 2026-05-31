import { Apple, Play } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function FinalCta() {
  const ref = useReveal();
  return (
    <section
      id="download"
      ref={ref}
      className="reveal relative isolate overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(135deg, #2D5016 0%, #4A7C2F 100%)",
      }}
    >
      {/* turtle watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <span className="text-[28rem] leading-none">🐢</span>
      </div>
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--amber-brand)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Un tip al día.
          <br />
          <span className="italic">Una vida mejor.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Únete gratis. Sin tarjeta. Sin excusas.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Apple className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wider text-[color:var(--ink)]/55">
                Descarga en
              </span>
              <span className="block font-display text-lg">App Store</span>
            </span>
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[color:var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Play className="h-6 w-6 fill-[color:var(--ink)]" />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wider text-[color:var(--ink)]/55">
                Disponible en
              </span>
              <span className="block font-display text-lg">Google Play</span>
            </span>
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">⭐ 4.9 · 10.000+ personas ya están dentro</p>
      </div>
    </section>
  );
}
