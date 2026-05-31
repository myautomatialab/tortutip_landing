import { ArrowRight, Play, Star, Bookmark } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-grain pt-32 pb-16 md:pt-36 md:pb-20">
      {/* Atmospheric blob */}
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-[640px] w-[640px] rounded-full mesh-blob opacity-70" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full mesh-blob opacity-50" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        {/* Left */}
        <div className="stagger">
          <span
            className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-[color:var(--forest)]/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[color:var(--forest)]"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--olive)]" />
            Bienestar · Conocimiento · Comunidad
          </span>

          <h1
            className="mt-6 animate-fade-up font-display text-[2.75rem] leading-[1.02] text-[color:var(--ink)] sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.18s" }}
          >
            Crea una vida{" "}
            <span className="italic text-[color:var(--forest)]">que te guste</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-[color:var(--ink)]/70"
            style={{ animationDelay: "0.32s" }}
          >
            Descubre tips diarios creados por expertos reales. O comparte tu
            conocimiento con miles de personas apasionadas por vivir mejor.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: "0.46s" }}
          >
            <a
              href="#download"
              className="btn-glow group inline-flex items-center gap-2 rounded-full bg-[color:var(--forest)] px-6 py-3.5 text-sm font-medium text-[color:var(--cream)] transition-all hover:bg-[color:var(--olive)]"
            >
              Empezar Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-[color:var(--ink)] ring-1 ring-[color:var(--ink)]/15 transition-all hover:bg-white"
            >
              <Play className="h-4 w-4" /> Ver demo
            </a>
          </div>

          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--ink)]/65"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-[color:var(--amber-brand)] text-[color:var(--amber-brand)]" />
              <strong className="font-semibold text-[color:var(--ink)]">4.9</strong>
            </span>
            <span>·</span>
            <span><strong className="font-semibold text-[color:var(--ink)]">10k+</strong> usuarios</span>
            <span>·</span>
            <span><strong className="font-semibold text-[color:var(--ink)]">500+</strong> artículos</span>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="relative mx-auto w-full max-w-sm animate-float md:max-w-md">
          <div className="phone-frame">
            <div className="overflow-hidden rounded-[2rem] bg-[color:var(--cream)]">
              <div className="relative h-72">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80"
                  alt="Rainbow bowl"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[color:var(--cream)]/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[color:var(--forest)]">
                  Comida Saludable
                </span>
                <button className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[color:var(--forest)]">
                  <Bookmark className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl leading-tight text-white">
                    El Rainbow Bowl que cambió mi semana
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--forest)] text-xs font-semibold text-[color:var(--cream)]">
                    EV
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--ink)]">Dr. Elena Vance</p>
                    <p className="text-xs text-[color:var(--ink)]/55">8 min de lectura</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2.5 w-full rounded-full bg-[color:var(--beige)]" />
                  <div className="h-2.5 w-11/12 rounded-full bg-[color:var(--beige)]" />
                  <div className="h-2.5 w-9/12 rounded-full bg-[color:var(--beige)]" />
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-[color:var(--ink)]/60">
                  <span>♡ 1.2k</span>
                  <span>🔖 482</span>
                  <span>💬 96</span>
                </div>
              </div>
            </div>
          </div>

          {/* floating turtle signature */}
          <div className="absolute -right-6 -top-6 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--amber-brand)] text-2xl shadow-xl">
            🐢
          </div>
        </div>
      </div>
    </section>
  );
}
