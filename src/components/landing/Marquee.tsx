export function Marquee() {
  const items = [
    "🥗 Comida Saludable",
    "💪 Fitness",
    "🧘 Meditación",
    "😴 Sueño",
    "🧠 Salud Mental",
    "⏰ Productividad",
    "✍️ Comparte tu expertise",
    "📖 Lee cada día",
  ];
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden bg-[color:var(--forest)] py-5">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {row.concat(row).map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl text-[color:var(--cream)] md:text-3xl"
          >
            {t}
            <span className="ml-12 text-[color:var(--amber-brand)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
