import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/Contact";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { thinkingPosts } from "@/data/thinking";
import { SITE } from "@/data/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const credentials = [
  "Ex-Meta", "Ex-Microsoft", "TVNZ Marketing Awards Supreme Winner",
  "2x Gold Effie 2022", "Global Effie Finalist", "LinkedIn Top Voice",
  "IAB NZ AI Working Group Lead", "Chair, MA Digital SIG",
];

const achievements = [
  ["18+", "years digital transformation, media, AI"],
  ["5th", "Facebook employee in APAC"],
  ["1st", "Account Manager in Facebook APAC"],
  ["Founding", "Partner, krunch.co (2014–2019)"],
  ["700%", "return successful exit, ListingLogic"],
  ["4", "Effies (2x Gold + finalist) + 3 TVNZ awards 2022"],
];

const teaserCases = [
  { slug: "comvita", t: "Comvita", m: "480% lift in lead conversion" },
  { slug: "aa-smartfuel", t: "AA Smartfuel", m: "8x ROAS in 8 days" },
  { slug: "turners", t: "Turners / Tina", m: "Supreme + 2x Gold Effie" },
  { slug: "mr-apple", t: "Mr Apple", m: "150% database growth" },
  { slug: "cisco", t: "Cisco", m: "World-first integrated case study" },
];

const Index = () => (
  <>
    <SEO
      title="Adnan Khan — Digital Transformation, AI & Marketing Consultant, Auckland"
      description="Co-Founder of Stitch and Stitch Predict. 18+ years across Meta, Microsoft, krunch.co. 2x Gold Effie 2022, TVNZ Marketing Awards Supreme Winner. Helping NZ and global brands grow with data, AI, and martech."
      path="/"
      jsonLd={[faqJsonLd]}
    />
    <Hero />

    {/* Credentials strip */}
    <section className="bg-oxblood text-paper py-6 px-5 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <p className="mono text-paper text-[12px] tracking-[0.18em] flex flex-wrap gap-x-3 gap-y-1 justify-center text-center">
          {credentials.map((c, i) => (
            <span key={c}>
              {c}{i < credentials.length - 1 && <span className="text-sienna mx-2" aria-hidden>·</span>}
            </span>
          ))}
        </p>
      </div>
    </section>

    {/* What I do */}
    <section id="what-i-do" className="py-24 lg:py-32 px-5 lg:px-8 bg-paper">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">What I do</p>
        <h2 className="font-display-2 mb-12" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          Five practices, one operator.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 hairline-t hairline-l">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services#${s.slug}`}
              className="group hairline-r hairline-b p-6 flex flex-col justify-between min-h-[200px] hover:bg-bone transition-colors"
            >
              <span className="mono text-oxblood">{s.n}</span>
              <span className="font-serif font-bold text-ink text-[22px] leading-tight group-hover:text-oxblood transition-colors">
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Recent work */}
    <section id="recent-work" className="py-24 lg:py-32 px-5 lg:px-8 bg-bone">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Recent work</p>
        <h2 className="font-display-2 mb-12" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          Five proofs.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {teaserCases.map((c) => (
            <Link
              key={c.slug}
              to={`/casestudies#${c.slug}`}
              className="group block bg-paper p-6 hairline-t hairline-b hairline-l hairline-r hover:-translate-y-1 transition-transform"
            >
              <p className="eyebrow mb-3">{c.t}</p>
              <p className="font-serif font-bold text-ink text-[20px] leading-tight group-hover:text-oxblood transition-colors">
                {c.m}
              </p>
              <span className="mono text-sienna mt-6 inline-block">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-20 lg:py-28 px-5 lg:px-8 bg-paper">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Achievements</p>
        <h2 className="font-display-2 mb-12" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          Eighteen years, six markers.
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {achievements.map(([k, v]) => (
            <div key={k} className="hairline-t pt-4">
              <dt className="font-serif font-bold text-oxblood text-5xl mb-2">{k}</dt>
              <dd className="text-ink/85 text-[15px]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Built with */}
    <section className="py-20 lg:py-24 px-5 lg:px-8 bg-bone hairline-t hairline-b">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <a href={SITE.stitch} target="_blank" rel="noopener noreferrer" className="group block hairline-r-0 md:hairline-r p-8">
          <p className="eyebrow mb-3">Co-Founder & Managing Partner</p>
          <p className="font-serif font-bold text-ink text-5xl group-hover:text-oxblood transition-colors">Stitch</p>
          <p className="text-ink/75 mt-4 text-[15px]">Auckland-based consultancy: media, marketing, advertising and data-driven technology.</p>
          <span className="mono text-oxblood mt-6 inline-block link-underline">stitchtech.co →</span>
        </a>
        <a href={SITE.stitchPredict} target="_blank" rel="noopener noreferrer" className="group block p-8">
          <p className="eyebrow mb-3">Co-Founder</p>
          <p className="font-serif font-bold text-ink text-5xl group-hover:text-oxblood transition-colors">Stitch Predict</p>
          <p className="text-ink/75 mt-4 text-[15px]">Marketing mix modelling SaaS. Cookieless, privacy-safe causal attribution using ML.</p>
          <span className="mono text-oxblood mt-6 inline-block link-underline">stitchpredict.com →</span>
        </a>
      </div>
    </section>

    {/* Recent thinking */}
    <section id="thinking" className="py-24 lg:py-32 px-5 lg:px-8 bg-paper">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Recent thinking</p>
        <h2 className="font-display-2 mb-12" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          Articles, podcasts, talks.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {thinkingPosts.slice(0, 3).map((p) => (
            <a
              key={p.slug}
              href={p.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bone p-6 hairline-t hairline-b hairline-l hairline-r hover:-translate-y-1 transition-transform"
            >
              <p className="mono text-oxblood text-[12px] mb-3">{p.dateLabel} · {p.kind}</p>
              <h3 className="font-serif font-bold text-ink text-[22px] leading-tight group-hover:text-oxblood transition-colors">
                {p.title}
              </h3>
              <p className="mono mt-4 text-ink/70 text-[12px]">{p.source}</p>
            </a>
          ))}
        </div>
        <Link to="/thinking" className="mt-10 inline-block link-underline text-oxblood mono">All thinking →</Link>
      </div>
    </section>

    <FaqSection />
    <ContactSection />
  </>
);

export default Index;
