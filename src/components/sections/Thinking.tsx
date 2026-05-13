import { Link } from "react-router-dom";
import { thinkingPosts } from "@/data/thinking";

const Thinking = () => (
  <section id="thinking" className="py-24 lg:py-40 px-5 lg:px-8 bg-bone">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-16">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">Writing</p>
        <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          Recent thinking.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {thinkingPosts.map((p) => (
          <Link
            key={p.slug}
            to={`/thinking/${p.slug}`}
            className="group block bg-paper p-6 hairline-b hairline-t hairline-l hairline-r transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="mono mb-3">{p.dateLabel} · {p.source}</p>
            <h3 className="font-serif font-bold text-ink text-[22px] leading-tight group-hover:text-oxblood transition-colors">
              {p.title}
            </h3>
            <p className="mt-4 text-ink/75 text-[14px] leading-relaxed">{p.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 mono text-sienna">
              Read → 
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/thinking" className="link-underline text-oxblood mono">
          All thinking →
        </Link>
      </div>
    </div>
  </section>
);

export default Thinking;
