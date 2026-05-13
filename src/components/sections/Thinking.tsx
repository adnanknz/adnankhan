const entries = [
  { year: "2024", title: "Marketing Masters podcast with Zania Guy", source: "Podcast" },
  { year: "2024", title: "The Future of Marketing and AI panel", source: "IAB NZ" },
  { year: "2024", title: "Zero, first, second, third party data: a plain-English guide", source: "IAB NZ" },
  { year: "2024", title: "Generative versus agentic AI, explained simply", source: "MA Brainy Breakfast" },
  { year: "2023", title: "Why isn't marketing mix modelling more accessible?", source: "Stitch Predict" },
];

const Thinking = () => {
  const buckets = entries.reduce<Record<string, typeof entries>>((acc, e) => {
    (acc[e.year] ||= []).push(e);
    return acc;
  }, {});
  return (
    <section id="thinking" className="py-24 lg:py-40 px-5 lg:px-8 bg-bone">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-x-6 mb-16">
          <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">Recent thinking</p>
          <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
            Notes on AI, measurement, and the work.
          </h2>
        </div>

        <div className="hairline-t">
          {Object.entries(buckets).map(([year, list]) => (
            <div key={year} className="grid grid-cols-12 gap-x-6 hairline-b py-6">
              <div className="col-span-12 lg:col-span-2">
                <p className="font-serif font-bold text-oxblood text-2xl lg:text-3xl">{year}</p>
              </div>
              <ul className="col-span-12 lg:col-span-10 -mx-2">
                {list.map((e) => (
                  <li key={e.title}>
                    <a
                      href="/notes"
                      className="group grid grid-cols-12 gap-x-4 items-baseline px-2 py-3 rounded-sm transition-colors hover:bg-paper"
                    >
                      <span className="mono col-span-3 lg:col-span-1 group-hover:text-sienna group-hover:underline underline-offset-4">
                        {e.year}
                      </span>
                      <span className="col-span-9 lg:col-span-9 font-serif font-semibold text-ink text-[18px] lg:text-[22px] leading-snug group-hover:text-oxblood transition-colors">
                        {e.title}
                      </span>
                      <span className="hidden lg:block col-span-2 text-right mono">{e.source}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thinking;
