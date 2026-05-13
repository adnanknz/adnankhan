import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { thinkingPosts } from "@/data/thinking";

const Thinking = () => (
  <>
    <SEO
      title="Thinking · Martech, MMM & AI Marketing Insights · Adnan Khan"
      description="Essays and field notes on marketing mix modelling, customer data platforms, privacy-first measurement and AI marketing, from Auckland."
      path="/thinking"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Thinking", url: `${SITE.url}/thinking` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Thinking</p>
        <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Notes from the field.
        </h1>
        <ul className="hairline-t">
          {thinkingPosts.map((p) => (
            <li key={p.slug} className="hairline-b">
              <Link to={`/thinking/${p.slug}`} className="group grid grid-cols-12 gap-x-6 py-8 items-baseline">
                <span className="mono col-span-12 lg:col-span-2 text-oxblood">{p.dateLabel}</span>
                <span className="col-span-12 lg:col-span-8 font-serif font-bold text-ink group-hover:text-oxblood transition-colors text-[22px] lg:text-[28px] leading-snug">
                  {p.title}
                </span>
                <span className="mono col-span-12 lg:col-span-2 lg:text-right">{p.source}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </>
);

export default Thinking;