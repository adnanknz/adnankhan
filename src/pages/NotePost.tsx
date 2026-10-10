import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Markdown from "@/components/Markdown";
import { SITE } from "@/data/site";
import { noteBySlug, wordCount, formatNoteDate } from "@/data/notes";
import NotFound from "./NotFound";

const MODIFIED = "2026-10-10";

const seoTitle = (t: string) => {
  const suffix = " | Adnan Khan";
  if (t.length + suffix.length <= 60) return t + suffix;
  const short = t.split(/[.:?]/)[0].trim();
  if (short.length + suffix.length <= 60) return short + suffix;
  return short.slice(0, 60 - suffix.length - 3).replace(/\s+\S*$/, "") + "..." + suffix;
};

const NotePost = () => {
  const { slug } = useParams();
  const n = slug ? noteBySlug(slug) : undefined;
  if (!n) return <NotFound />;
  const url = `${SITE.url}/notes/${n.slug}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: n.title,
    description: n.description,
    datePublished: n.date,
    dateModified: MODIFIED,
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#person` },
    image: `${SITE.url}/adnan-khan-headshot.jpg`,
    mainEntityOfPage: url,
    wordCount: wordCount(n.body),
    inLanguage: "en-NZ",
  };
  return (
    <>
      <SEO
        title={seoTitle(n.title)}
        description={n.description}
        path={`/notes/${n.slug}`}
        ogType="article"
        jsonLd={[ld]}
        breadcrumbs={[
          { name: "Home", url: `${SITE.url}/` },
          { name: "Notes", url: `${SITE.url}/notes` },
          { name: n.title, url },
        ]}
      />
      <article className="pt-32 pb-24">
        <div className="container mx-auto max-w-[68ch]">
          <Link to="/notes" className="link-underline mono text-ink/70">← All notes</Link>
          <h1 className="font-display-1 text-ink mt-8 mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>{n.title}</h1>
          <p className="mono text-oxblood mb-10">
            <time dateTime={n.date}>{formatNoteDate(n.date)}</time> · {n.readingTime} · By Adnan Khan
          </p>
          <div className="text-ink/85 text-[18px] leading-[1.75]">
            <Markdown source={n.body} />
          </div>

          <div className="mt-14 card p-8">
            <p className="font-semibold tracking-tight text-ink text-[22px] mb-4">Want to talk this through?</p>
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-ink text-bone px-5 py-3 font-medium hover:bg-oxblood transition-colors">
              Get in touch
            </Link>
          </div>

          <aside className="mt-10 hairline-t pt-8 flex items-center gap-5">
            <img src="/adnan-khan-headshot.jpg" alt="Adnan Khan" width={72} height={90} loading="lazy" className="w-[72px] h-[72px] rounded-full object-cover" />
            <p className="text-subtle text-[15px]">
              Adnan Khan is Co-Founder of Stitch and Stitch Predict, based in Auckland.{" "}
              <Link to="/about" className="link-underline text-oxblood">More about Adnan</Link>
            </p>
          </aside>
        </div>
      </article>
    </>
  );
};

export default NotePost;
