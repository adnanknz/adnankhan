const quotes = [
  {
    quote:
      "To partner with someone of Adnan's caliber was inspirational. He is one of the smartest people in the industry, always at the forefront of technology and trends, and a thought leader in the AI space.",
    name: "Tealium partner",
    role: "",
  },
  {
    quote:
      "[Client testimonial pending confirmation] A trusted advisor who can translate ambitious measurement goals into operational reality.",
    name: "Pending confirmation",
    role: "Placeholder",
  },
  {
    quote:
      "[Client testimonial pending confirmation] Practical, senior, and refreshingly direct. The kind of partner you bring back for the next problem.",
    name: "Pending confirmation",
    role: "Placeholder",
  },
];

const Testimonials = () => (
  <section className="py-24 lg:py-32 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto space-y-16">
      <p className="eyebrow">Word of mouth</p>
      {quotes.map((q, i) => (
        <figure key={i} className="border-l-[6px] border-oxblood pl-8 lg:pl-12 max-w-[80ch]">
          <blockquote
            className="font-lede text-ink"
            style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
          >
            <span className="text-oxblood">“</span>{q.quote}<span className="text-oxblood">”</span>
          </blockquote>
          <figcaption className="mt-6 font-sans font-medium text-ink/80 text-[15px]">
            {q.name}{q.role && <span className="text-hairline"> — {q.role}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Testimonials;
