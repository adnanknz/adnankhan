import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { careerTimeline, governanceTimeline, certifications, governance, firsts, speakingItems, pressItems } from "@/data/credentials";

const About = () => (
  <>
    <SEO
      title="About Adnan Khan · Ex-Meta Martech Pioneer, NZ"
      description="16+ years across martech, adtech and media. Ex-Meta (5th in APAC). Ex-Microsoft. Co-founder of Stitch and Stitch Predict. Chair, Digital SIG, Marketing Association NZ."
      path="/about"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "About", url: `${SITE.url}/about` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">About</p>
        <h1 className="font-display-1 text-ink mb-12 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Built at Meta. Sharpened in martech.
        </h1>

        <section className="mb-16 max-w-[68ch] bg-bone p-8 hairline-t hairline-b">
          <p className="eyebrow mb-3">Quick answer</p>
          <p className="text-ink/90 text-[17px] leading-[1.65]">
            Adnan Khan is a marketing technology pioneer based in Auckland, New Zealand. He is
            Co-Founder and Managing Partner of Stitch and Co-Founder of Stitch Predict. Ex-Meta
            (5th employee in APAC, opened Facebook NZ). Ex-Microsoft. 16+ years in marketing
            transformation. Multiple Effie and TVNZ Marketing Award winner. Chair of the Digital
            Special Interest Group at the Marketing Association of NZ. AI Working Group Lead at
            IAB New Zealand.
          </p>
        </section>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-7 space-y-6 text-ink/90 text-[17px] leading-[1.65] max-w-[64ch]">
            <p className="dropcap">
              Sydney-raised, Auckland-based. I started in media planning at Initiative, moved to
              Microsoft Australia, then joined Facebook in 2009 as the 5th employee in APAC and one
              of the first four in ANZ. Six years later I had opened Facebook's New Zealand office
              and served as Country Manager.
            </p>
            <p>
              Between 2014 and 2019 I was a partner at krunch.co, leading global marketing
              transformations for Cisco, Comvita, Bank of New Zealand, Bayleys, Hyundai and others.
              We built ANZ's first Facebook Lead Ads and Marketo integration, the first fully
              operational people-based attribution product in ANZ, and the world's first integrated
              marketing automation, digital media, attribution and BI case study with Cisco Global.
            </p>
            <p>
              In 2019 I co-founded Stitch with Simon Wedde. In 2023 we co-founded Stitch Predict
              with Alex Rowley (ex-Quantium) to democratise marketing mix modelling. Today Stitch
              is Tealium's primary certified deployment partner in NZ and one of Customer.io's
              first Gold agency partners in ANZ.
            </p>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-10">
            <div>
              <p className="eyebrow mb-4">Career</p>
              <ul className="space-y-3">
                {careerTimeline.map(([d, r]) => (
                  <li key={r} className="hairline-t pt-2">
                    <p className="mono">{d}</p>
                    <p className="text-ink text-[14px]">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Governance</p>
              <ul className="space-y-3">
                {governanceTimeline.map(([d, r]) => (
                  <li key={r} className="hairline-t pt-2">
                    <p className="mono">{d}</p>
                    <p className="text-ink text-[14px]">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            ["Certifications", certifications],
            ["Governance", governance],
            ["Firsts", firsts],
          ].map(([t, items]) => (
            <div key={t as string} className="hairline-t pt-6">
              <p className="eyebrow mb-4">{t as string}</p>
              <ul className="space-y-2 text-ink/85 text-[14px] leading-snug">
                {(items as string[]).map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-4">Speaking</p>
            <ul className="space-y-2 mono text-ink/80">
              {speakingItems.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Press</p>
            <ul className="space-y-2">
              {pressItems.map((p) => (
                <li key={p.title}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">
                    <span className="mono text-oxblood">{p.source}</span> · {p.title} · <span className="mono">{p.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  </>
);

export default About;