import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { postBySlug } from "@/data/thinking";
import NotFound from "./NotFound";

const ThinkingPost = () => {
  const { slug } = useParams();
  const p = slug ? postBySlug(slug) : undefined;
  if (!p) return <NotFound />;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    datePublished: p.date,
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#person` },
    mainEntityOfPage: `${SITE.url}/thinking/${p.slug}`,
  };
  return (
    <>
      <SEO
        title={`${p.title} · Adnan Khan`}
        description={p.excerpt}
        path={`/thinking/${p.slug}`}
        ogType="article"
        jsonLd={[articleLd]}
        breadcrumbs={[
          { name: "Home", url: `${SITE.url}/` },
          { name: "Thinking", url: `${SITE.url}/thinking` },
          { name: p.title, url: `${SITE.url}/thinking/${p.slug}` },
        ]}
      />
      <article className="pt-32 pb-24 px-5 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link to="/thinking" className="link-underline mono text-ink/70">← All thinking</Link>
          <p className="mono mt-6 mb-3 text-oxblood">{p.dateLabel} · {p.kind} · {p.source}</p>
          <h1 className="font-display-1 text-ink mb-12" style={{ fontSize: "clamp(40px, 6vw, 96px)" }}>
            {p.title}
          </h1>
          <p className="text-ink/90 text-[18px] leading-[1.7] dropcap">{p.excerpt}</p>
          <div className="mt-12 hairline-t pt-6">
            <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-oxblood font-medium">
              Open source →
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ThinkingPost;
