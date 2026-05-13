const outlets = [
  "NZ Herald", "Idealog", "StopPress", "M+AD!", "IT Brief NZ",
  "IAB New Zealand", "Marketing Association NZ",
  "University of Auckland Business School", "Marketing Masters Podcast",
];

const Press = () => (
  <section id="speaking" className="py-20 lg:py-28 px-5 lg:px-8 bg-paper">
    <div className="container mx-auto">
      <p className="eyebrow mb-8">As seen in</p>
      <p
        className="font-serif font-medium text-ink leading-snug text-balance"
        style={{ fontSize: "clamp(22px, 2.6vw, 38px)" }}
      >
        {outlets.map((o, i) => (
          <span key={o}>
            {o}
            {i < outlets.length - 1 && <span className="text-sienna mx-3 mono">✱</span>}
          </span>
        ))}
      </p>
    </div>
  </section>
);

export default Press;
