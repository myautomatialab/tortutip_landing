import { openCta } from "./CtaModal";
import { PenLine, Image as ImageIcon, Tags, BarChart3, ArrowRight, Bold, Italic, Link2, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  { Icon: PenLine, title: "Editor de artículos con formato enriquecido", body: "Escribe como en Notion. Publica como en Medium." },
  { Icon: ImageIcon, title: "Covers vertical y horizontal", body: "Máximo impacto visual en cualquier feed." },
  { Icon: Tags, title: "Categorización automática", body: "TortuTip detecta la temática y la etiqueta por ti." },
  { Icon: BarChart3, title: "Métricas reales", body: "Sabe cuántas personas guardaron tu artículo." },
];

export function ForWriters() {
  const ref = useReveal();
  return (
    <section id="writers" ref={ref} className="reveal relative overflow-hidden bg-[color:var(--ink)] py-24 text-[color:var(--cream)] md:py-32">
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[color:var(--olive)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[480px] w-[480px] rounded-full bg-[color:var(--amber-brand)]/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        {/* Mockup */}
        <div className="order-2 md:order-1">
          <div className="rounded-3xl bg-[#1a2310] p-2 shadow-2xl ring-1 ring-white/5">
            <div className="rounded-2xl bg-[#0b1605] p-6">
              <div className="flex items-center justify-between text-xs text-[color:var(--cream)]/50">
                <span>Nuevo artículo · Borrador</span>
                <span className="rounded-full bg-[color:var(--amber-brand)]/20 px-2 py-0.5 text-[color:var(--amber-brand)]">
                  Guardado
                </span>
              </div>
              <div className="mt-5 flex gap-1 border-b border-white/10 pb-3">
                {[Bold, Italic, Link2, Quote].map((I, i) => (
                  <button key={i} className="grid h-8 w-8 place-items-center rounded-lg text-[color:var(--cream)]/60 hover:bg-white/5">
                    <I className="h-4 w-4" />
                  </button>
                ))}
              </div>
              <h3 className="mt-6 font-display text-3xl text-[color:var(--cream)]">
                Cómo descansar mejor sin cambiar tu colchón
              </h3>
              <div className="mt-5 space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-white/8" />
                <div className="h-2.5 w-11/12 rounded-full bg-white/8" />
                <div className="h-2.5 w-10/12 rounded-full bg-white/8" />
                <div className="h-2.5 w-9/12 rounded-full bg-white/8" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[color:var(--olive)]/40 to-[color:var(--forest)]/60 ring-1 ring-white/10" />
                <div className="col-span-2 aspect-[16/9] rounded-xl bg-gradient-to-br from-[color:var(--amber-brand)]/30 to-[color:var(--olive)]/40 ring-1 ring-white/10" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Sueño", "Bienestar", "Hábitos"].map((t) => (
                  <span key={t} className="rounded-full bg-[color:var(--olive)]/25 px-3 py-1 text-xs text-[color:var(--cream)]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 md:order-2">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--amber-brand)]">
            Para Escritores
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-[color:var(--cream)] sm:text-5xl md:text-6xl">
            Tu conocimiento merece una audiencia
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--cream)]/70 leading-relaxed">
            ¿Eres periodista, experto en nutrición, coach o simplemente tienes algo
            valioso que aportar? TortuTip te da las herramientas para publicar y el
            alcance para que te lean.
          </p>

          <ul className="mt-10 space-y-5">
            {features.map(({ Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--olive)]/20 text-[color:var(--amber-brand)] ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-[color:var(--cream)]">{title}</p>
                  <p className="text-sm text-[color:var(--cream)]/60">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#" onClick={(e) => { e.preventDefault(); openCta(); }}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--olive)]"
          >
            Empieza aquí
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
