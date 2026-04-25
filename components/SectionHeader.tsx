export default function SectionHeader({
  num,
  eyebrow,
  title,
  invert = false,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24">
      <div className="col-span-12 lg:col-span-3">
        <div className="flex items-baseline gap-4">
          <span className="section-num text-2xl">{num}</span>
          <span
            className={`text-[10px] uppercase tracking-widest ${
              invert ? "text-ink/50" : "text-cream/40"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <h2
          className={`font-display font-light text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-tight ${
            invert ? "text-ink" : "text-cream"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
