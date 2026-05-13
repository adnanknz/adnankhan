import { certifications, governance, firsts } from "@/data/credentials";

const cols = [
  { title: "Certifications", items: certifications },
  { title: "Governance", items: governance },
  { title: "Firsts", items: firsts },
];

const Credentials = () => (
  <section className="py-24 lg:py-32 px-5 lg:px-8 bg-surface">
    <div className="container mx-auto">
      <p className="eyebrow mb-3">Credentials</p>
      <h2 className="font-display-2 text-ink mb-12 max-w-[24ch]" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
        Certifications, governance &amp; notable firsts.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cols.map((c) => (
          <div key={c.title} className="hairline-t pt-6">
            <p className="eyebrow mb-5">{c.title}</p>
            <ul className="space-y-3">
              {c.items.map((it) => (
                <li key={it} className="text-ink/85 text-[15px] leading-snug">{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials;