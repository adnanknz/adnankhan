import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { services } from "@/data/services";

const Services = () => (
  <>
    <SEO
      title="Services — Adnan Khan"
      description="Digital transformation. Customer data platforms. Marketing technology. Media and advertising. Marketing mix modelling. Auckland-based, global-ready."
      path="/services"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Services", url: `${SITE.url}/services` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Services</p>
        <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Services.
        </h1>

        <div className="space-y-20">
          {services.map((s) => (
            <section key={s.n} id={s.slug} className="grid grid-cols-12 gap-x-6 gap-y-6 hairline-t pt-10 scroll-mt-32">
              <div className="col-span-12 lg:col-span-3">
                <p className="font-serif font-bold text-oxblood text-5xl">{s.n}</p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h2 className="font-display-2 text-ink mb-6" style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}>
                  {s.title}
                </h2>
                <div className="space-y-4 text-ink/85 text-[17px] leading-[1.65] max-w-[64ch]">
                  {s.long.map((p, i) => <p key={i}>{p}</p>)}
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
