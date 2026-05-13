import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

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
        {caseStudies.map((c, i) => (
          <article
            key={c.slug}
            className="grid grid-cols-12 gap-x-6 gap-y-6 group"
          >
            <p className="mono col-span-12 lg:col-span-1">{String(i + 1).padStart(2, "0")}</p>
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow mb-3">{c.client}</p>
              <h3
                className="font-serif font-bold text-ink"
                style={{ fontSize: "clamp(28px, 3.6vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                {c.headline}
              </h3>
              <p className="mt-6 text-ink/80 text-[16px] leading-relaxed max-w-[58ch]">{c.body}</p>
              <Link
                to={`/work/${c.slug}`}
                className="mt-8 inline-flex items-center gap-2 link-underline text-oxblood font-medium text-[15px]"
              >
                Read the case study <span aria-hidden>→</span>
              </Link>
            </div>
            <ul className="col-span-12 lg:col-span-4 space-y-2 self-start">
              {c.metrics.map((m) => (
                <li key={m} className="text-ink/85 text-[15px] leading-snug border-b border-hairline/60 pb-2">
                  {m}
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
