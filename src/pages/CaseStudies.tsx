import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

const articleLd = (c: typeof caseStudies[number]) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: c.headline,
  about: c.client,
  keywords: c.tag,
  author: { "@id": `${SITE.url}/#person` },
  publisher: { "@id": "https://stitchtech.co/#org" },
  mainEntityOfPage: `${SITE.url}/casestudies#${c.slug}`,
});

const CaseStudies = () => (
  <>
    <SEO
      title="Case Studies — Adnan Khan"
      description="Comvita 480% lead conversion. AA Smartfuel 8x ROAS. Turners triple TVNZ win + 2x Gold Effie. Mr Apple 150% database growth with Tealium. Cisco world-first integrated case study."
      path="/casestudies"
      jsonLd={caseStudies.map(articleLd)}
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Case Studies", url: `${SITE.url}/casestudies` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Case studies</p>
        <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Outcomes, not outputs.
        </h1>

        <div className="space-y-24">
          {caseStudies.map((c) => (
            <section key={c.slug} id={c.slug} className="hairline-t pt-12 scroll-mt-32">
              <div className="grid grid-cols-12 gap-x-6 gap-y-8">
                <div className="col-span-12 lg:col-span-7">
                  <p className="eyebrow mb-3">{c.client}</p>
                  <h2
                    className="font-serif font-bold text-ink mb-6"
                    style={{ fontSize: "clamp(28px, 3.6vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                  >
                    {c.headline}
                  </h2>
                  <p className="text-ink/85 text-[17px] leading-[1.65] max-w-[64ch]">{c.body}</p>
                  {c.recognition && (
                    <ul className="mt-6 space-y-1 text-ink/80 text-[14px]">
                      {c.recognition.map((r) => <li key={r}>· {r}</li>)}
                    </ul>
                  )}
                  {c.externalLink && (
                    <a
                      href={c.externalLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex link-underline text-oxblood font-medium"
                    >
                      {c.externalLink.label} →
                    </a>
                  )}
                  {c.tag && <p className="mono text-oxblood/80 mt-6">{c.tag}</p>}
                </div>
                <aside className="col-span-12 lg:col-span-4 lg:col-start-9 self-start">
                  <p className="eyebrow mb-4">Result strip</p>
                  <ul className="space-y-3">
                    {c.metrics.map((m) => (
                      <li key={m} className="hairline-t pt-2 font-serif font-bold text-ink text-xl leading-tight">{m}</li>
                    ))}
                  </ul>
                </aside>
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  </>
);

export default CaseStudies;
