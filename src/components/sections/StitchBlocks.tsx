const blocks = [
  {
    name: "Stitch",
    body: "An independent Auckland consultancy of industry veterans. Data, advertising, and marketing technology that drives measurable outcomes.",
    href: "https://stitchtech.co",
    cta: "Visit stitchtech.co",
  },
  {
    name: "Stitch Predict",
    body: "Marketing mix modelling, democratised. Automated, modern, cookie-free measurement for brands of any size.",
    href: "https://stitchpredict.com",
    cta: "Visit stitchpredict.com",
  },
];

const StitchBlocks = () => (
  <section className="px-5 lg:px-8 pb-24 lg:pb-40">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 hairline-t hairline-l">
      {blocks.map((b) => (
        <article key={b.name} className="hairline-r hairline-b p-8 lg:p-14 flex flex-col gap-6">
          <h3
            className="font-display-2 text-ink"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            {b.name}
          </h3>
          <p className="text-ink/80 text-[17px] leading-relaxed max-w-[42ch]">{b.body}</p>
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-oxblood font-medium text-[15px] mt-auto inline-flex items-center gap-2"
          >
            {b.cta} <span aria-hidden>→</span>
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default StitchBlocks;
