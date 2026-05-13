import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Notes = () => (
  <>
    <Navbar />
    <main id="main" className="min-h-[80vh] flex items-center px-5 lg:px-8 pt-32 pb-24">
      <div className="container mx-auto max-w-3xl">
        <p className="eyebrow mb-6">Notes</p>
        <h1 className="font-display-1 text-ink mb-8" style={{ fontSize: "clamp(56px, 10vw, 160px)" }}>
          Coming soon.
        </h1>
        <p className="font-lede text-ink/80 max-w-[50ch] mb-12" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>
          Long-form essays on AI, measurement, and the marketing technology stack will live here.
        </p>
        <Link to="/" className="link-underline mono text-ink">← Back to home</Link>
      </div>
    </main>
  </>
);

export default Notes;
