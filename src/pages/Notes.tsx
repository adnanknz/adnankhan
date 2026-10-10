import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Notes = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
    <section className="min-h-[80vh] flex items-center pt-32 pb-24">
      <div className="container mx-auto max-w-3xl">
        <p className="eyebrow mb-6">Notes</p>
        <h1 className="font-display-1 text-ink mb-8" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
          Coming soon.
        </h1>
        <p className="text-subtle font-normal leading-snug max-w-[50ch] mb-12" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>
          Long-form essays on AI, measurement, and the marketing technology stack will live here.
        </p>
        <Link to="/" className="link-underline mono text-ink">← Back to home</Link>
      </div>
    </section>
  </>
);

export default Notes;
