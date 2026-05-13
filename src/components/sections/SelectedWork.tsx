const cases = [
  {
    n: "01",
    title: "Turners Cars: rebuilding a brand on data and storytelling.",
    outcomes: [
      "Triple win at TVNZ Marketing Awards 2022",
      "Two Gold Effies",
      "5.3× lead volume",
      "68% drop in cost per lead",
    ],
  },
  {
    n: "02",
    title: "AA Smartfuel: a drive-in cinema in eight days.",
    outcomes: [
      "8× return on ad spend",
      "8,000 tickets sold in a fortnight",
      "Kept partners trading through COVID",
    ],
  },
  {
    n: "03",
    title: "Comvita: marketing automation, global lift.",
    outcomes: [
      "480% increase in new lead conversion in six months",
      "255% uplift in average sale value on nurture",
      "Marketo became one of the highest converting channels",
    ],
  },
];

const SelectedWork = () => (
  <section id="work" className="py-24 lg:py-40 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-20">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">Selected work</p>
        <h2
          className="col-span-12 lg:col-span-9 font-display-2"
          style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
        >
          Outcomes, not outputs.
        </h2>
      </div>

      <div className="space-y-24">
        {cases.map((c) => (
          <article
            key={c.n}
            className="grid grid-cols-12 gap-x-6 gap-y-6 group hover:-translate-y-0.5 transition-transform duration-300"
          >
            <p className="mono col-span-12 lg:col-span-1">{c.n}</p>
            <h3
              className="col-span-12 lg:col-span-7 font-serif font-bold text-ink"
              style={{ fontSize: "clamp(28px, 3.6vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {c.title}
            </h3>
            <ul className="col-span-12 lg:col-span-4 space-y-2">
              {c.outcomes.map((o) => (
                <li key={o} className="text-ink/80 text-[15px] leading-snug border-b border-hairline/60 pb-2">
                  {o}
                </li>
              ))}
            </ul>
            <div className="col-span-12 hairline-t mt-4" />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWork;
