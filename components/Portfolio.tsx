"use client";

import { useState, useEffect, useCallback } from "react";
import SectionHeader from "./SectionHeader";

type Project = {
  src: string;
  title: string;
  meta: string;
  category: "novaus" | "signature";
};

const projects: Project[] = [
  // Novaus projects (recent)
  { src: "/assets/naya-1.png", title: "Naya", meta: "Stand sur-mesure · 9m²", category: "novaus" },
  { src: "/assets/naya-sfrms.png", title: "Naya, SFRMS", meta: "Stand modulaire · Salon médical", category: "novaus" },
  { src: "/assets/seriderm-1.png", title: "Sériderm", meta: "Stand cosmétique professionnel", category: "novaus" },
  { src: "/assets/seriderm-2.png", title: "Sériderm", meta: "Vue de détail", category: "novaus" },
  { src: "/assets/seriderm-3.png", title: "Sériderm", meta: "Espace accueil", category: "novaus" },
  { src: "/assets/tente-1.png", title: "Tente", meta: "Stand corporate · Productivité", category: "novaus" },
  { src: "/assets/tente-2.png", title: "Tente", meta: "Vue détail", category: "novaus" },
  { src: "/assets/tente-3.png", title: "Tente", meta: "Vue d'ensemble", category: "novaus" },
  { src: "/assets/global-industrie-1.png", title: "Global Industrie", meta: "Stand 18m² · Salon industriel", category: "novaus" },
  { src: "/assets/global-industrie-2.png", title: "Global Industrie", meta: "Vue alternative", category: "novaus" },
];

export default function Portfolio() {
  // Index into the novausProjects array (null = modal closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Only Novaus projects are clickable / navigable
  const novausProjects = projects.filter((p) => p.category === "novaus");
  const currentProject = openIndex !== null ? novausProjects[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % novausProjects.length));
  }, [novausProjects.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + novausProjects.length) % novausProjects.length
    );
  }, [novausProjects.length]);

  // Keyboard navigation: ← → Esc
  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIndex, next, prev, close]);

  return (
    <section id="realisations" className="relative bg-ink py-28 lg:py-40 border-t border-line">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SectionHeader
          num="06"
          eyebrow="Nos réalisations"
          title={
            <>
              Des espaces qui <em className="text-gold not-italic">laissent une trace.</em>
            </>
          }
        />

        <div className="grid grid-cols-12 gap-6 mb-16">
          <p className="col-span-12 lg:col-span-6 lg:col-start-4 text-cream/70 text-lg leading-relaxed font-light">
            Chaque projet est une réponse architecturale à un message de marque.
            Chaque image, le résultat d'une conversation, d'une contrainte
            transformée en opportunité.
          </p>
        </div>

        {/* Novaus projects */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8 border-b border-line pb-4">
            <h3 className="font-display text-2xl text-cream font-light">
              Réalisations <em className="text-gold not-italic">Novaus</em>
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-cream/40">
              Sélection
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {novausProjects.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setOpenIndex(i)}
                className="group text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="img-hover w-full h-full object-cover group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-cream/0 group-hover:ring-gold/40 transition-all" />
                </div>
                <div className="mt-3">
                  <p className="text-sm text-cream font-light">{p.title}</p>
                  <p className="text-[11px] text-cream/40 mt-0.5">{p.meta}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Signature projects (legacy) */}
        <div className="mt-24 pt-16 border-t border-line">
          <div className="flex items-baseline justify-between mb-2 flex-wrap gap-4">
            <h3 className="font-display text-2xl text-cream font-light">
              Projets <em className="text-gold not-italic">signature</em>
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-cream/40">
              15 ans d'expérience
            </span>
          </div>
          <p className="text-sm text-cream/50 max-w-2xl mb-10 leading-relaxed">
            Une sélection de projets conçus et pilotés par Nicolas Revel,
            fondateur de Novaus, au cours de ses 15 années d'expérience dans le
            design d'espaces événementiels, pour des marques telles que Valeo,
            JVC, Sagemcom, NH Industries, Bragard, PAUL, AREFIM, Elanco, Smar+,
            Citel et bien d'autres.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Valeo", "JVC", "Sagemcom", "NH Industries", "Smar+", "MPI Corp",
              "Bragard", "PAUL", "AREFIM", "Elanco", "Citel", "Delta",
              "Tente", "Books from Luxembourg", "Afimilk", "République Dominicaine",
              "Punsuré Campus", "ISIS Diabète",
            ].map((brand) => (
              <div
                key={brand}
                className="border border-line py-5 px-4 text-center hover:border-gold/40 hover:bg-ink-soft transition-colors"
              >
                <p className="text-xs uppercase tracking-extra-wide text-cream/60">
                  {brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal lightbox with prev / next navigation (loops) */}
      {currentProject && (
        <div
          className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6 lg:p-12"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${currentProject.title}`}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-cream hover:text-gold text-3xl font-light z-10"
            aria-label="Fermer"
          >
            ×
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Image précédente"
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-cream/20 bg-ink/40 backdrop-blur text-cream hover:text-gold hover:border-gold/60 transition-colors flex items-center justify-center text-xl lg:text-2xl"
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Image suivante"
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-cream/20 bg-ink/40 backdrop-blur text-cream hover:text-gold hover:border-gold/60 transition-colors flex items-center justify-center text-xl lg:text-2xl"
          >
            →
          </button>

          {/* Content */}
          <div
            className="max-w-6xl w-full px-6 lg:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentProject.src}
              alt={currentProject.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-6 flex items-baseline justify-between border-t border-line pt-4">
              <div>
                <p className="font-display text-2xl text-cream font-light">
                  {currentProject.title}
                </p>
                <p className="text-sm text-cream/50 mt-1">{currentProject.meta}</p>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gold">
                {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(novausProjects.length).padStart(2, "0")} · Novaus
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
