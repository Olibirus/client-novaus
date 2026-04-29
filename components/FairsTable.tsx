"use client";

import { useState } from "react";
import type { Fair } from "@/lib/cities";

/**
 * Expandable, SEO-friendly fairs table.
 *
 * Strategy:
 *  - Every row is rendered in the DOM at all times (Google sees the full list).
 *  - Visually, only the first `previewRows` are shown by default.
 *  - The remaining rows sit behind a gradient mask. Clicking "Voir tous les salons"
 *    expands; clicking "Réduire la liste" collapses.
 *  - No JavaScript-required reveal — the rows are real `<tr>` elements,
 *    just visually clipped via max-height + overflow.
 */
export default function FairsTable({
  fairs,
  cityName,
  previewRows = 5,
}: {
  fairs: Fair[];
  cityName: string;
  previewRows?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!fairs.length) return null;

  // Approximate row height (py-4 + line-height) — used to clip the preview.
  // 4.5rem (~72px) per row is a safe estimate for our padding.
  const collapsedMaxHeight = `calc(${previewRows} * 4.75rem + 3.5rem)`; // + header height

  return (
    <div className="relative">
      {/* Table — always fully rendered for SEO */}
      <div
        className={`relative overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          expanded ? "max-h-[8000px]" : ""
        }`}
        style={!expanded ? { maxHeight: collapsedMaxHeight } : undefined}
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-line">
              <th className="text-[10px] uppercase tracking-widest text-cream/40 font-normal py-4 pr-4 w-[8%]">
                #
              </th>
              <th className="text-[10px] uppercase tracking-widest text-cream/40 font-normal py-4 pr-4 w-[42%]">
                Salon / Congrès à {cityName}
              </th>
              <th className="text-[10px] uppercase tracking-widest text-cream/40 font-normal py-4 pr-4 w-[30%]">
                Secteur
              </th>
              <th className="text-[10px] uppercase tracking-widest text-cream/40 font-normal py-4 pr-4 w-[12%] hidden md:table-cell">
                Type
              </th>
              <th className="text-[10px] uppercase tracking-widest text-cream/40 font-normal py-4 w-[8%] text-right">
                Année
              </th>
            </tr>
          </thead>
          <tbody>
            {fairs.map((f, i) => (
              <tr
                key={`${f.name}-${i}`}
                className="border-b border-line/60 hover:bg-ink-soft/40 transition-colors"
              >
                <td className="py-4 pr-4 align-top">
                  <span className="section-num text-xs text-cream/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </td>
                <td className="py-4 pr-4 align-top">
                  <span className="text-cream font-light text-base lg:text-lg leading-snug">
                    {f.name}
                  </span>
                </td>
                <td className="py-4 pr-4 align-top">
                  <span className="text-cream/60 text-sm leading-snug">
                    {f.sector}
                  </span>
                </td>
                <td className="py-4 pr-4 align-top hidden md:table-cell">
                  <span className="text-cream/40 text-xs leading-snug">
                    {f.type ?? "—"}
                  </span>
                </td>
                <td className="py-4 align-top text-right">
                  <span className="text-bronze text-sm">{f.year ?? ""}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Gradient fade — only visible when collapsed */}
        {!expanded && (
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-ink/80 to-ink"
          />
        )}
      </div>

      {/* Toggle button */}
      <div className="mt-8 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-extra-wide border border-gold/60 text-gold px-7 py-3.5 hover:bg-gold hover:text-ink transition-all"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              Réduire la liste
              <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
                ↑
              </span>
            </>
          ) : (
            <>
              Voir tous les salons à {cityName} ({fairs.length})
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
