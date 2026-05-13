const items = [
  "AI", "ADVERTISING", "MEDIA", "MARTECH", "ADTECH",
  "MARKETING MIX MODELLING", "PRIVACY-FIRST MEASUREMENT",
  "CDP", "TEALIUM", "AGENTIC AI",
];

const Marquee = () => {
  const line = items.map((i) => `${i} ✱`).join(" ") + " ";
  return (
    <section className="hairline-t hairline-b py-6 overflow-hidden bg-oxblood text-paper relative" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="font-serif font-bold text-paper whitespace-nowrap pr-12"
            style={{
              fontSize: "clamp(40px, 8vw, 96px)",
              fontVariationSettings: '"opsz" 96',
              lineHeight: 1,
            }}
          >
            {line.repeat(2).split("✱").map((s, idx, arr) => (
              <span key={idx}>
                {s}
                {idx < arr.length - 1 && <span className="text-sienna mx-2">✱</span>}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
