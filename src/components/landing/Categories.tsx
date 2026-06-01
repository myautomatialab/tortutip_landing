import { ArrowUpRight, Salad, Dumbbell, Flower2, Moon, Brain, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const cats = [
  {
    name: "Comida Saludable",
    Icon: Salad,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Fitness",
    Icon: Dumbbell,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
  {
    name: "Meditación",
    Icon: Flower2,
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
  {
    name: "Salud Mental",
    Icon: Brain,
    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
  {
    name: "Productividad",
    Icon: Clock,
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
];

export function Categories() {
  const ref = useReveal();
  return (
    <section id="categories" ref={ref} className="reveal bg-[color:var(--beige)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--olive)]">Categorías</span>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--ink)] sm:text-5xl md:text-6xl">
              Encuentra tu mundo
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--ink)]/65">
            Seis universos cuidadosamente curados. Sigue uno, sigue todos — tú decides el ritmo.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[240px]">
          {cats.map(({ name, Icon, img, span }) => (
            <a key={name} href="#download" className={`group relative overflow-hidden rounded-3xl ${span}`}>
              <img
                src={img}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/30 to-transparent" />
              <div className="absolute inset-0 bg-[color:var(--forest)]/0 transition-colors duration-500 group-hover:bg-[color:var(--forest)]/35" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--cream)]/15 text-[color:var(--cream)] backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="grid h-10 w-10 translate-x-2 place-items-center rounded-full bg-[color:var(--cream)] text-[color:var(--forest)] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[color:var(--cream)] md:text-3xl">{name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
