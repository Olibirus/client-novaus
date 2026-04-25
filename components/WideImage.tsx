import ImagePlaceholder from "./ImagePlaceholder";

/**
 * Full-width breathing room image between two sections.
 * Used to give the page visual rhythm.
 */
export default function WideImage({
  id,
  label,
  prompt,
  invert = false,
  height = "h-[55vh] lg:h-[70vh]",
}: {
  id: string;
  label: string;
  prompt: string;
  invert?: boolean;
  height?: string;
}) {
  return (
    <section className={`relative ${invert ? "bg-cream" : "bg-ink"}`}>
      <div className={`relative w-full ${height}`}>
        <ImagePlaceholder
          id={id}
          label={label}
          prompt={prompt}
          invert={invert}
          ratio="aspect-auto"
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
