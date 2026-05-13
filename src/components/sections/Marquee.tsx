const items = [
  "DIGITAL TRANSFORMATION",
  "CUSTOMER DATA PLATFORMS",
  "MARTECH",
  "MEDIA",
  "AI",
  "MARKETING MIX MODELLING",
];

const Marquee = () => {
  const line = items.join(" · ") + " · ";
  return (
    <section className="hairline-t hairline-b py-6 overflow-hidden bg-paper relative">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="font-serif font-bold text-oxblood whitespace-nowrap pr-12"
            style={{
              fontSize: "clamp(40px, 8vw, 96px)",
              fontVariationSettings: '"opsz" 96',
              lineHeight: 1,
            }}
            aria-hidden={k === 1}
          >
            {line.repeat(2)}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
