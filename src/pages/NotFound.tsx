import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => (
  <>
    <SEO title="Not found · Adnan Khan" description="The page you were looking for doesn't exist." path="/404" />
    <section className="min-h-[70vh] flex items-center justify-center px-5 text-center pt-24">
      <div>
        <p className="mono mb-4">ERROR / 404</p>
        <h1 className="font-display-1 text-oxblood mb-6" style={{ fontSize: "clamp(80px, 16vw, 200px)" }}>
          Lost.
        </h1>
        <Link to="/" className="link-underline text-ink mono">← Return home</Link>
      </div>
    </section>
  </>
);

export default NotFound;
