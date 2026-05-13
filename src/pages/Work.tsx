import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

const Work = () => (
  <>
    <SEO
      title="Work · Award-winning Martech & MMM Case Studies · Adnan Khan"
      description="Award-winning martech and MMM case studies. Turners, Mr Apple, AA Smartfuel. TVNZ Marketing Awards Supreme winner. 2x Gold Effie. Global Effie Finalist 2023."
      path="/work"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Work", url: `${SITE.url}/work` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Work</p>
        <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Outcomes, not outputs.
        </h1>
        <div className="space-y-20">
          {caseStudies.map((c) => (
            <Link key={c.slug} to={`/work/${c.slug}`} className="group block hairline-t pt-10">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-7">
                  <p className="eyebrow mb-3">{c.client}</p>
                  <h2 className="font-serif font-bold text-ink group-hover:text-oxblood transition-colors" style={{ fontSize: "clamp(28px, 3.6vw, 52px)", lineHeight: 1.05 }}>
                    {c.headline}
                  </h2>
                  <p className="mt-6 text-ink/80 text-[16px] leading-relaxed max-w-[58ch]">{c.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 link-underline text-oxblood mono">
                    Read case study →
                  </span>
                </div>
                <ul className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-2 mt-6 lg:mt-0">
                  {c.metrics.map((m) => (
                    <li key={m} className="text-ink/85 text-[15px] border-b border-hairline/60 pb-2">{m}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  </>
);

export default Work;