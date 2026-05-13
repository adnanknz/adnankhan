import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen flex items-center justify-center px-5 text-center">
    <div>
      <p className="mono mb-4">ERROR / 404</p>
      <h1 className="font-display-1 text-oxblood mb-6" style={{ fontSize: "clamp(80px, 16vw, 200px)" }}>
        Lost.
      </h1>
      <Link to="/" className="link-underline text-ink mono">← Return home</Link>
    </div>
  </main>
);

export default NotFound;
