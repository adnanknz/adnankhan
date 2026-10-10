import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { services } from "@/data/services";

const Services = () => (
  <>
    <SEO
      title="Digital Transformation, CDP & MMM Consulting | Adnan Khan"
      description="Digital transformation. Customer data platforms. Marketing technology. Media and advertising. Marketing mix modelling. Auckland-based, global-ready."
      path="/services"
      jsonLd={services.map((s) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.title,
        description: [s.lead, ...s.long, ...s.included].join(" "),
        serviceType: s.title,
        provider: { "@id": `${SITE.url}/#person` },
        areaServed: ["NZ", "AU", "Global"],
        url: `${SITE.url}/services#${s.slug}`,
      }))}
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Services", url: `${SITE.url}/services` },
      ]}
    />
    <article className="pt-32 pb-24">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Services</p>
        <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
          Services.
        </h1>

        <div className="space-y-20">
          {services.map((s) => (
            <section key={s.n} id={s.slug} className="grid grid-cols-12 gap-x-6 gap-y-6 hairline-t pt-10 scroll-mt-32">
              <div className="col-span-12 lg:col-span-3">
                <p className="font-semibold tracking-tight text-oxblood text-5xl">{s.n}</p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className="font-display-2 text-ink mb-6" style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}>
                  {s.title}
                </h2>
                <div className="space-y-4 text-ink/85 text-[17px] leading-[1.65] max-w-[64ch]">
                  <p className="text-ink font-medium">{s.lead}</p>
                  {s.long.map((p, i) => (
                    <p key={i}>
                      {i === 0 && s.introLink && p.startsWith(s.introLink.label) ? (
                        <>
                          <a href={s.introLink.href} target="_blank" rel="noopener noreferrer" className="link-underline text-oxblood">{s.introLink.label}</a>
                          {p.slice(s.introLink.label.length)}
                        </>
                      ) : p}
                    </p>
                  ))}
                </div>
                <div className="mt-6 max-w-[64ch]">
                  <h3 className="eyebrow mb-3">What's included</h3>
                  <ul className="list-disc pl-5 space-y-2 text-ink/85 text-[16px] leading-relaxed">
                    {s.included.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <h3 className="eyebrow mt-6 mb-3">Related work</h3>
                  <ul className="flex flex-wrap gap-x-6 gap-y-3 text-oxblood font-medium">
                    {s.relatedWork.map((work) => (
                      <li key={work.href}>
                        {work.href.startsWith("/") ? (
                          <Link to={work.href} className="link-underline">{work.label} →</Link>
                        ) : (
                          <a href={work.href} target="_blank" rel="noopener noreferrer" className="link-underline">{work.label} →</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="mt-8 inline-flex link-underline text-oxblood font-medium">
                  Discuss an engagement →
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  </>
);

export default Services;
