import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Categories } from "@/components/landing/Categories";
import { ForWriters } from "@/components/landing/ForWriters";
import { Articles } from "@/components/landing/Articles";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TortuTip — Get better, one tip at a time" },
      {
        name: "description",
        content:
          "Descubre tips diarios de bienestar creados por expertos reales, o comparte tu conocimiento con miles de personas. TortuTip: editorial, cálido, premium.",
      },
      { property: "og:title", content: "TortuTip — Crea una vida que te guste" },
      {
        property: "og:description",
        content: "Tips diarios de bienestar, fitness, sueño, mente y productividad.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-[color:var(--cream)]">
      <Navbar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Categories />
      <ForWriters />
      <Articles />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}
