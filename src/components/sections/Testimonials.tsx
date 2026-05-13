const quotes = [
  {
    quote:
      "He is brave in his application of advice, audacious enough to swim against the tide of traditional media agencies and their preach of reach is everything. He is a staunch advocate that the work of his contemporaries should be tried, tested and measured against genuine ROI metrics.",
    name: "Justin Flitter",
    role: "Global CMO, ValocityGlobal and DataInsight",
  },
  {
    quote:
      "I have worked with Adnan both during his time at Microsoft and at Facebook. He is always keen to go the extra mile to ensure that our campaigns deliver to the maximum of their potential.",
    name: "Joel Pearson",
    role: "Executive Strategy Director, R/GA",
  },
];

const Testimonials = () => (
  <section className="py-24 lg:py-32 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto space-y-16">
      {quotes.map((q) => (
        <figure key={q.name} className="border-l-[6px] border-oxblood pl-8 lg:pl-12 max-w-[80ch]">
          <blockquote
            className="font-lede text-ink"
            style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
          >
            “{q.quote}”
          </blockquote>
          <figcaption className="mt-6 font-sans font-medium text-ink/80 text-[15px]">
            {q.name} <span className="text-hairline">— {q.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Testimonials;
