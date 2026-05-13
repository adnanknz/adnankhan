import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { caseStudyBySlug } from "@/data/caseStudies";
import NotFound from "./NotFound";

const WorkDetail = () => {
  const { slug } = useParams();
  const c = slug ? caseStudyBySlug(slug) : undefined;
  if (!c) return <NotFound />;
  return (
    <>
      <SEO
        title={c.metaTitle}
        description={c.metaDescription}
        path={`/work/${c.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: `${SITE.url}/` },
          { name: "Work", url: `${SITE.url}/work` },
          { name: c.client, url: `${SITE.url}/work/${c.slug}` },
        ]}
      />
      <article className="pt-32 pb-24 px-5 lg:px-8">
        <div className="container mx-auto">
          <Link to="/work" className="link-underline mono text-ink/70">← All work</Link>
          <p className="eyebrow mt-6 mb-3">{c.client}</p>
          <h1 className="font-display-1 text-ink mb-12 max-w-[20ch]" style={{ fontSize: "clamp(48px, 8vw, 144px)" }}>
            {c.headline}
          </h1>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7 space-y-6 text-ink/90 text-[17px] leading-[1.65] max-w-[64ch]">
              <p className="dropcap">{c.body}</p>
              <p className="mono text-oxblood">{c.tag}</p>
              {c.recognition && (
                <ul className="space-y-2 hairline-t pt-4">
                  {c.recognition.map((r) => <li key={r} className="text-ink/85">· {r}</li>)}
                </ul>
              )}
              {c.externalLink && (
                <a href={c.externalLink.href} target="_blank" rel="noopener noreferrer" className="link-underline text-oxblood font-medium inline-block mt-4">
                  {c.externalLink.label} →
                </a>
              )}
            </div>
            <aside className="col-span-12 lg:col-span-4 lg:col-start-9 self-start">
              <p className="eyebrow mb-4">Outcomes</p>
              <ul className="space-y-3">
                {c.metrics.map((m) => (
                  <li key={m} className="hairline-t pt-2 font-serif font-bold text-ink text-xl">{m}</li>
                ))}
              </ul>
            </aside>
          </div>
          <div className="mt-20 hairline-t pt-10">
            <Link to="/contact" className="link-underline text-oxblood font-medium">Discuss your project →</Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default WorkDetail;