import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const CTA_EVENT = "tortutip:open-cta";
export const openCta = () => window.dispatchEvent(new Event(CTA_EVENT));

export function CtaModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(CTA_EVENT, handler);
    return () => window.removeEventListener(CTA_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[90vh] w-[90vw] overflow-hidden rounded-2xl bg-[color:var(--cream)] shadow-2xl"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[color:var(--ink)] shadow-md transition hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>
        <iframe
          src="https://claude.site/public/artifacts/40462bf8-07a9-4c88-a790-366e08283bd1/embed"
          title="tortutip_presentation.html"
          className="h-full w-full"
          frameBorder={0}
          allow="clipboard-write"
          allowFullScreen
        />
      </div>
    </div>
  );
}
