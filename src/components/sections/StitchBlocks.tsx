import { SITE } from "@/data/site";

const StitchBlocks = () => (
  <>
    <section className="px-5 lg:px-8 py-20 lg:py-28 bg-surface">
      <div className="container mx-auto grid grid-cols-12 gap-x-6 gap-y-10">
        <p className="eyebrow col-span-12 lg:col-span-3">Company one</p>
        <div className="col-span-12 lg:col-span-9">
          <h2 className="font-display-2 text-ink mb-6" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Stitch · The independent martech agency.
          </h2>
          <p className="text-ink/85 text-[17px] leading-relaxed max-w-[64ch] mb-10">
            Stitch is the Auckland consultancy I co-founded with Simon Wedde in 2019. We stitch
            data, advertising and marketing technology together to drive measurable business
            outcomes. Tealium's Primary Certified Strategic Deployment Partner in NZ. Customer.io
            Gold Agency Partner. Member of IMANZ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              ["Strategy", "Audit and discovery, media planning, customer journey, measurement strategy, segmentation, audience insights."],
              ["Data & Tech", "CDPs, adtech and martech integration, server-side attribution, advanced analytics, real-time dashboards, data governance."],
              ["Demand Gen", "Traditional and digital media buying, omni-channel marketing automation, Amazon and Chinese marketplaces, CX personalisation, B2B and ABM, CRO and SEO."],
            ].map(([h, b]) => (
              <div key={h} className="hairline-t pt-4">
                <p className="eyebrow mb-2">{h}</p>
                <p className="text-ink/80 text-[14px] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <a href={SITE.stitch} target="_blank" rel="noopener noreferrer"
             className="link-underline text-oxblood font-medium inline-flex items-center gap-2">
            Visit Stitch → stitchtech.co
          </a>
        </div>
      </div>
    </section>

    <section className="px-5 lg:px-8 py-20 lg:py-28 bg-oxblood text-paper">
      <div className="container mx-auto grid grid-cols-12 gap-x-6 gap-y-10">
        <p className="eyebrow text-paper/60 col-span-12 lg:col-span-3">Company two</p>
        <div className="col-span-12 lg:col-span-9">
          <h2 className="font-display-2 text-paper mb-6" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Stitch Predict · <span className="text-sienna">MMM for the rest of us.</span>
          </h2>
          <p className="text-paper/90 text-[17px] leading-relaxed max-w-[64ch] mb-10">
            Stitch Predict is the marketing mix modelling SaaS platform I co-founded in 2023 with
            Simon Wedde and Alex Rowley (ex-Quantium). It uses big data, machine learning and
            aggregated, anonymous business data to isolate the causal impact of every marketing
            dollar. No cookies. No tracking. No personally identifiable information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              "Map marketing to business results",
              "Measure beyond what's trackable",
              "Separate causality from correlation",
            ].map((t) => (
              <div key={t} className="bg-surface text-ink px-5 py-6 rounded-sm">
                <p className="font-serif font-bold text-[18px] uppercase tracking-tight">{t}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 mb-10 border-y border-paper/20 py-6">
            {[
              ["6-10 weeks", "deployment"],
              ["±6-10%", "variance"],
              ["2-3 years", "of weekly data ideal"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-serif font-bold text-paper text-2xl lg:text-3xl">{k}</p>
                <p className="mono text-paper/70 mt-1">{v}</p>
              </div>
            ))}
          </div>
          <p className="mono text-paper/70 mb-6">
            Foundation clients: Turners Auto Retail Division and RestoreMe Clinic.
          </p>
          <a href={SITE.stitchPredict} target="_blank" rel="noopener noreferrer"
             className="link-underline text-sienna font-medium inline-flex items-center gap-2">
            Visit Stitch Predict → stitchpredict.com
          </a>
        </div>
      </div>
    </section>
  </>
);

export default StitchBlocks;
