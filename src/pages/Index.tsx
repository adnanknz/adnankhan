import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/Contact";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { thinkingPosts } from "@/data/thinking";
import { SITE, yearsExperience } from "@/data/site";

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
  "3x Gold Effie", "Global Effie Finalist", "LinkedIn Top Voice",
  "IAB NZ AI Working Group Lead", "Chair, MA Digital SIG",
];

const achievements = [
  [`${yearsExperience()}+`, "years digital transformation, media, AI"],
  ["5th", "Facebook employee in APAC"],
  ["1st", "Account Manager in Facebook APAC"],
  ["Founding", "Partner, krunch.co (2014–2019)"],
  ["700%", "return successful exit, ListingLogic"],
  ["4", "Effies (3x Gold + Global finalist) + 3 TVNZ awards 2022"],
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
      title="Adnan Khan | AI & Marketing Consultant in Auckland"
      description={`Co-Founder of Stitch and Stitch Predict. ${yearsExperience()}+ years across Meta and Microsoft. Helping NZ and global brands grow with AI, data, and martech.`}
      path="/"
      jsonLd={[faqJsonLd]}
    />
    <Hero />

    {/* Credentials strip */}
    <section aria-label="Credentials" className="pb-16">
      <div className="container mx-auto">
        <ul className="flex flex-wrap gap-2">
          {credentials.map((c) => (
            <li key={c} className="rounded-full border border-hairline bg-bone px-3 py-1.5 text-[13px] font-medium text-subtle">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* What I do */}
    <section id="what-i-do" className="py-20 lg:py-28 border-t border-hairline">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">What I do</p>
        <h2 className="font-display-2 mb-10" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Five practices, one operator.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services#${s.slug}`}
              className={`card group p-6 flex flex-col justify-between min-h-[180px] ${
                i < 2 ? "lg:col-span-3 lg:min-h-[220px]" : "lg:col-span-2"
              }`}
            >
              <span className="mono text-oxblood">{s.n}</span>
              <span className={`font-semibold tracking-tight text-ink leading-tight group-hover:text-oxblood transition-colors ${i < 2 ? "text-[26px]" : "text-[20px]"}`}>
                {s.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Recent work */}
    <section id="recent-work" className="py-20 lg:py-28 border-t border-hairline">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Recent work</p>
        <h2 className="font-display-2 mb-10" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Five proofs.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teaserCases.map((c, i) => (
            <Link
              key={c.slug}
              to={`/casestudies#${c.slug}`}
              className={`card group p-6 flex flex-col justify-between min-h-[180px] ${i === 0 ? "sm:col-span-2 lg:row-span-2 lg:min-h-[376px]" : ""}`}
            >
              <div>
                <p className="eyebrow mb-3">{c.t}</p>
                <p className={`font-semibold tracking-tight text-ink leading-tight group-hover:text-oxblood transition-colors ${i === 0 ? "text-[32px] lg:text-[40px]" : "text-[20px]"}`}>
                  {c.m}
                </p>
              </div>
              <span className="text-[14px] font-medium text-subtle group-hover:text-oxblood mt-6 inline-block transition-colors">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-20 lg:py-28 border-t border-hairline">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Achievements</p>
        <h2 className="font-display-2 mb-10" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          {yearsExperience()} years, six markers.
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map(([k, v]) => (
            <div key={k} className="card p-6">
              <dt className="font-semibold text-ink text-[44px] leading-none tracking-[-0.04em] mb-3">{k}</dt>
              <dd className="text-subtle text-[14px]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Built with */}
    <section className="py-20 lg:py-24 border-t border-hairline">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href={SITE.stitch} target="_blank" rel="noopener noreferrer" className="card group block p-8">
          <p className="eyebrow mb-3">Co-Founder & Managing Partner</p>
          <p className="font-semibold tracking-[-0.03em] text-ink text-4xl group-hover:text-oxblood transition-colors">Stitch</p>
          <p className="text-subtle mt-4 text-[15px]">Auckland-based consultancy: media, marketing, advertising and data-driven technology.</p>
          <span className="mono text-oxblood mt-6 inline-block">stitchtech.co →</span>
        </a>
        <a href={SITE.stitchPredict} target="_blank" rel="noopener noreferrer" className="card group block p-8">
          <p className="eyebrow mb-3">Co-Founder</p>
          <p className="font-semibold tracking-[-0.03em] text-ink text-4xl group-hover:text-oxblood transition-colors">Stitch Predict</p>
          <p className="text-subtle mt-4 text-[15px]">Marketing mix modelling SaaS. Cookieless, privacy-safe causal attribution using ML.</p>
          <span className="mono text-oxblood mt-6 inline-block">stitchpredict.com →</span>
        </a>
      </div>
    </section>

    {/* Recent thinking */}
    <section id="thinking" className="py-20 lg:py-28 border-t border-hairline">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Recent thinking</p>
        <h2 className="font-display-2 mb-10" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          Articles, podcasts, talks.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {thinkingPosts.slice(0, 3).map((p) => (
            <a
              key={p.slug}
              href={p.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block p-6"
            >
              <p className="mono text-oxblood mb-3">{p.dateLabel} · {p.kind}</p>
              <h3 className="font-semibold tracking-tight text-ink text-[20px] leading-tight group-hover:text-oxblood transition-colors">
                {p.title}
              </h3>
              <p className="mono mt-4">{p.source}</p>
            </a>
          ))}
        </div>
        <Link to="/thinking" className="mt-8 inline-block link-underline text-ink font-medium text-[15px]">All thinking →</Link>
      </div>
    </section>

    <FaqSection />
    <ContactSection />
  </>
);

export default Index;
