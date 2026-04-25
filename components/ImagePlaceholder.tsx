type Props = {
  id: string;
  label: string;
  prompt: string;
  className?: string;
  ratio?: string;
  invert?: boolean;
};

/**
 * Visible placeholder for client image upload.
 * Replace by <img src="/assets/{id}.png" /> once the asset is delivered.
 * The prompt is shown in dev for clarity & also documented in IMAGES.md.
 */
export default function ImagePlaceholder({
  id,
  label,
  prompt,
  className = "",
  ratio = "aspect-[4/3]",
  invert = false,
}: Props) {
  return (
    <div
      className={`relative ${ratio} ${className} overflow-hidden ${
        invert
          ? "bg-ink/[0.04] border border-ink/15"
          : "bg-cream/[0.04] border border-cream/15"
      }`}
    >
      {/* Diagonal hash pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: invert
            ? "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(10,10,10,0.06) 12px, rgba(10,10,10,0.06) 13px)"
            : "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(239,234,224,0.06) 12px, rgba(239,234,224,0.06) 13px)",
        }}
      />

      {/* Corner ticks */}
      <span
        className={`absolute top-3 left-3 w-4 h-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute top-3 left-3 h-4 w-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute top-3 right-3 w-4 h-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute top-3 right-3 h-4 w-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute bottom-3 left-3 w-4 h-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute bottom-3 left-3 h-4 w-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute bottom-3 right-3 w-4 h-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />
      <span
        className={`absolute bottom-3 right-3 h-4 w-px ${
          invert ? "bg-ink/40" : "bg-cream/40"
        }`}
      />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <p
          className={`text-[10px] uppercase tracking-widest mb-3 ${
            invert ? "text-ink/40" : "text-cream/40"
          }`}
        >
          Image placeholder
        </p>
        <p
          className={`font-display text-lg lg:text-xl font-light leading-tight max-w-md ${
            invert ? "text-ink/70" : "text-cream/70"
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-3 text-[10px] uppercase tracking-extra-wide text-gold`}
        >
          /assets/{id}.png
        </p>
        <p
          className={`mt-4 text-xs leading-relaxed max-w-sm font-light ${
            invert ? "text-ink/45" : "text-cream/45"
          }`}
        >
          <span className="opacity-60">prompt:</span> {prompt}
        </p>
      </div>
    </div>
  );
}
