import { Link } from "react-router-dom";
import { careerTimeline } from "@/data/credentials";

const About = () => (
  <section id="about" className="py-24 lg:py-40 px-5 lg:px-8 bg-bone">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-16">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">Bio</p>
        <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          Built at Meta. Sharpened in martech. Returned to measurement.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-16">
        <div className="col-span-12 lg:col-span-7 space-y-6 text-ink/90 text-[17px] leading-[1.65] max-w-[64ch] bio-short">
          <p className="dropcap">
            Sydney-raised, Auckland-based. I started in media planning at Initiative, moved to
            Microsoft Australia, then joined Facebook in 2009 as the 5th employee in APAC and one of
            the first four in ANZ. Six years later I had opened Facebook's New Zealand office and
            served as Country Manager.
          </p>
          <p>
            Between 2014 and 2019 I was a partner at krunch.co, leading global marketing
            transformations for Cisco, Comvita, Bank of New Zealand, Bayleys, Hyundai and others. We
            built ANZ's first Facebook Lead Ads and Marketo integration, the first fully operational
            people-based attribution product in ANZ, and the world's first integrated marketing
            automation, digital media, attribution and BI case study with Cisco Global.
          </p>
          <p>
            In 2019 I co-founded Stitch with Simon Wedde. In 2023 we co-founded Stitch Predict with
            Alex Rowley (ex-Quantium) to democratise marketing mix modelling. Today Stitch is
            Tealium's primary certified deployment partner in NZ and one of Customer.io's first Gold
            agency partners in ANZ.
          </p>
          <p>
            <Link to="/about" className="link-underline text-oxblood font-medium">
              Read the long version →
            </Link>
          </p>
        </div>

        <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-24 self-start">
          <p className="eyebrow mb-6">Markers</p>
          <dl className="space-y-6">
            {[
              ["16+", "years in marketing transformation"],
              ["5th", "Facebook employee in APAC"],
              ["6", "awards in 2022 alone"],
              ["700%", "return on the ListingLogic exit"],
            ].map(([k, v]) => (
              <div key={k} className="hairline-t pt-3">
                <dt className="font-serif font-bold text-oxblood text-3xl">{k}</dt>
                <dd className="text-ink/80 text-[14px] mt-1">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <p className="eyebrow mb-4">Career</p>
            <ul className="space-y-3 mono text-ink/80">
              {careerTimeline.slice(0, 6).map(([d, r]) => (
                <li key={r}><span className="text-oxblood/80">{d}</span> · {r}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default About;
