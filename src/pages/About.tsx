import SEO from "@/components/SEO";
import { SITE } from "@/data/site";

const paragraphs = [
  "Adnan Khan is Co-Founder and Managing Partner of Stitch and Co-Founder of Stitch Predict, both based in Auckland, New Zealand. Over the last 18 years he has led digital transformation, customer data, marketing technology and AI work for some of the most demanding brands in the world.",
  "He joined Facebook in August 2009 as the 5th Facebook employee in APAC and the first Account Manager in Facebook APAC, becoming one of the first 200 sales employees globally. He went on to lead Facebook in New Zealand as Country Manager between 2013 and 2014, after senior client partner and account roles across ANZ. Before that he spent a year at Microsoft Australia as a Technical Account Manager, and started his career as a digital media planner and buyer at Initiative Media in Sydney.",
  "In 2014 he co-founded krunch.co as a founding partner, leading digital and then business development and innovation through to 2019. The krunch.co team pioneered the ANZ-first integration of Facebook Lead Ads with Marketo, built the first people-based attribution product in ANZ, delivered the first SkyTV + Telescope + Facebook live TV integration, and produced the world's first global integrated digital transformation, marketing automation, digital media, people-based attribution and business intelligence case study, for Cisco. Heritage clients from this era include Cisco, Comvita, Bank of New Zealand, Bayleys, Hyundai, Canon, Toyota and Honda.",
  "He led the Comvita Marketo transformation that delivered a 480% increase in new lead conversion in six months and a 255% uplift in average sale value on nurture, with email becoming the second-highest revenue source online.",
  "In May 2019 he co-founded Stitch, an Auckland-based consultancy specialising in media, marketing, advertising and data-driven technology. In October 2023 he co-founded Stitch Predict, a marketing mix modelling SaaS platform that isolates the causal impact of each marketing activity on business outcomes using large data and machine learning, with no reliance on cookies or device tracking.",
  "Adnan was also a board member and investor in ListingLogic between 2013 and 2020, which culminated in a 700% return successful exit.",
  "He chairs the Marketing Association of New Zealand's Digital Special Interest Group, leads the IAB NZ AI Working Group, contributes to the IAB NZ Emerging Technology Council, and is a member of the IMANZ Innovation & Technology Group. He is a LinkedIn Top Voice in Digital Marketing.",
];

const About = () => (
  <>
    <SEO
      title="About Adnan Khan — Co-Founder, Stitch & Stitch Predict"
      description="5th Facebook employee in APAC, ex-Microsoft, Founding Partner krunch.co. Now Co-Founder of Stitch and Stitch Predict. Chair, MA Digital SIG. IAB NZ AI Working Group Lead."
      path="/about"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "About", url: `${SITE.url}/about` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">About</p>
        <h1 className="font-display-1 text-ink mb-12 max-w-[20ch]" style={{ fontSize: "clamp(56px, 9vw, 144px)" }}>
          I help ambitious brands grow with technology and AI.
        </h1>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-8 space-y-6 text-ink/90 text-[17px] leading-[1.7] max-w-[64ch]">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "dropcap" : ""}>{p}</p>
            ))}

            <section className="hairline-t pt-6 mt-8">
              <p className="eyebrow mb-3">Education</p>
              <p>B.Media & Communications (Hons), University of New South Wales, 2003–2006, with High Distinction.</p>
            </section>

            <section className="hairline-t pt-6">
              <p className="eyebrow mb-3">Certifications</p>
              <p>Certified Agency Partner (Meta), Meta Certified Media Buying Professional, Tealium iQ Technical, Tealium iQ Basic.</p>
            </section>

            <section className="hairline-t pt-6">
              <p className="eyebrow mb-3">Recent recognition</p>
              <p>
                TVNZ Marketing Awards 2022 — Supreme Award Winner, Excellence in Brand Transformation Strategy, and
                Excellence in Consumer Products & Services Strategy. 2x Gold Effie 2022 (Strategic Thinking, Retail).
                Global Effie Finalist 2023.
              </p>
            </section>

            <section className="hairline-t pt-6">
              <p className="eyebrow mb-3">Recent speaking and writing</p>
              <p>
                Moderator at "The Future of Marketing & AI" (IAB NZ × Google Auckland, 5 March 2026), moderator of the
                AI panel at Marketing Association's Digital Day Out 2025, contributor and quoted source in IAB NZ's
                "Kiwi Search Habits 2025" report, contributor to IAB NZ's Q4 2025 and Q1 2026 AI Tools Reports,
                co-author of IAB NZ's "Zero, First, Second, Third: A Plain-English Guide to Data for Everyone" (2026),
                industry panellist at the University of Auckland BUSMGT 719 course.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  </>
);

export default About;
