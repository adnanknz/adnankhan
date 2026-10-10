import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Prerendered pages ship markup inside #root: hydrate it. Dev/preview starts empty: render fresh.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
