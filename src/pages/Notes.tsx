import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { notes, formatNoteDate } from "@/data/notes";

const Notes = () => (
  <>
    <SEO
      title="Notes: Essays on AI, Measurement and Martech | Adnan Khan"
      description="Long-form thinking on AI, measurement and the marketing technology stack, from customer data platforms to marketing mix modelling."
      path="/notes"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Notes", url: `${SITE.url}/notes` },
      ]}
    />
    <section className="pt-32 pb-24">
      <div className="container mx-auto">
        <p className="eyebrow mb-6">Notes</p>
        <h1 className="font-display-1 text-ink mb-6" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>Notes.</h1>
        <p className="text-subtle text-[20px] leading-snug max-w-[50ch] mb-14">
          Long-form thinking on AI, measurement and the marketing technology stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {notes.map((n) => (
            <Link key={n.slug} to={`/notes/${n.slug}`} className="card group block p-6">
              <p className="mono text-oxblood mb-3">{formatNoteDate(n.date)} · {n.readingTime}</p>
              <h2 className="font-semibold tracking-tight text-ink text-[20px] leading-tight group-hover:text-oxblood transition-colors">{n.title}</h2>
              <p className="text-subtle mt-4 text-[15px]">{n.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Notes;
