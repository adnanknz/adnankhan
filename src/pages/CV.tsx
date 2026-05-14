import SEO from "@/components/SEO";
import { SITE } from "@/data/site";

const roles: [string, string][] = [
  ["May 2019 – Present", "Co-Founder & Managing Partner, Stitch"],
  ["October 2023 – Present", "Co-Founder, Stitch Predict"],
  ["November 2021 – Present", "Chair, Digital SIG, Marketing Association NZ (Board Member April–November 2021 prior)"],
  ["December 2024 – Present", "AI Working Group Lead, IAB NZ Emerging Technology Council"],
  ["September 2024 – Present", "Innovation & Technology Group Member, IMANZ"],
  ["February 2013 – February 2020", "Board Member & Investor, ListingLogic (700% return successful exit)"],
  ["October 2017 – May 2019", "Head of BD & Innovation, Founding Partner, krunch.co"],
  ["December 2014 – October 2017", "Head of Digital, Founding Partner, krunch.co"],
  ["October 2013 – December 2014", "Country Manager NZ, Meta (Facebook)"],
  ["November 2011 – October 2013", "Client Partner NZ, Facebook"],
  ["September 2010 – November 2011", "Account Manager ANZ, Facebook"],
  ["August 2009 – September 2010", "Account Planner ANZ, Facebook (5th Facebook employee in APAC, first Account Manager in Facebook APAC, one of first 200 sales employees globally)"],
  ["July 2008 – August 2009", "Technical Account Manager, Microsoft Australia"],
  ["May 2007 – July 2008", "Digital Media Planner & Buyer, Initiative Media"],
];

const CV = () => (
  <>
    <SEO
      title="CV — Adnan Khan"
      description="Full career timeline of Adnan Khan: Stitch, Stitch Predict, krunch.co, Meta, Microsoft, Initiative Media. Plus education and certifications."
      path="/cv"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "CV", url: `${SITE.url}/cv` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <p className="eyebrow mb-6">CV</p>
        <h1 className="font-display-1 text-ink mb-12" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          CV.
        </h1>

        <section className="mb-16">
          <p className="eyebrow mb-6">Roles</p>
          <ul className="hairline-t">
            {roles.map(([d, r]) => (
              <li key={r} className="grid grid-cols-12 gap-x-6 py-5 hairline-b items-baseline">
                <span className="mono col-span-12 lg:col-span-4 text-oxblood">{d}</span>
                <span className="col-span-12 lg:col-span-8 text-ink text-[16px]">{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 hairline-t pt-8">
          <p className="eyebrow mb-3">Education</p>
          <p className="text-ink text-[16px]">
            B.Media & Communications (Hons), University of New South Wales, 2003–2006, with High Distinction.
          </p>
        </section>

        <section className="hairline-t pt-8">
          <p className="eyebrow mb-3">Certifications</p>
          <p className="text-ink text-[16px]">
            Certified Agency Partner (Meta) · Meta Certified Media Buying Professional · Tealium iQ Technical · Tealium iQ Basic.
          </p>
        </section>
      </div>
    </article>
  </>
);

export default CV;
