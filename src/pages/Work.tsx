import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { stitchClients, krunchClients } from "@/data/clients";

const Work = () => (
  <>
    <SEO
      title="Work — Adnan Khan"
      description="18 years of digital transformation, martech, customer data, AI and media work for Comvita, Cisco, AA Smartfuel, Turners, Mr Apple, BNZ, Bayleys, Hyundai, Canon, Toyota, Honda and more."
      path="/work"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Work", url: `${SITE.url}/work` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Work</p>
        <h1 className="font-display-1 text-ink mb-8 max-w-[20ch]" style={{ fontSize: "clamp(56px, 9vw, 144px)" }}>
          Selected work.
        </h1>
        <p className="text-ink/85 text-[18px] leading-[1.6] max-w-[64ch] mb-16">
          18 years across global tech, transformation consultancies, and now Stitch. A few of the brands I've helped grow.
        </p>

        <section className="mb-20">
          <p className="eyebrow mb-6">Stitch era · 2019 – now</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 hairline-t hairline-l">
            {stitchClients.map((c) => (
              <div key={c} className="hairline-r hairline-b px-4 py-8 flex items-center justify-center text-center">
                <span className="font-sans font-medium text-ink text-[14px] uppercase tracking-[0.06em]">{c}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow mb-6">krunch.co heritage · 2014 – 2019</p>
          <div className="grid grid-cols-2 md:grid-cols-4 hairline-t hairline-l">
            {krunchClients.map((c) => (
              <div key={c} className="hairline-r hairline-b px-4 py-8 flex items-center justify-center text-center">
                <span className="font-sans font-medium text-ink/80 text-[14px] uppercase tracking-[0.06em]">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-ink/75 text-[15px] leading-relaxed max-w-[72ch] mt-8">
            Pre-Stitch transformation work for global brands. I led the Marketo and martech transformation that
            delivered Comvita's 480% lead-conversion lift and 255% nurture uplift, and produced the Cisco global
            integration case study that was a world first.
          </p>
        </section>
      </div>
    </article>
  </>
);

export default Work;
