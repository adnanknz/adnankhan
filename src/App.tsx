import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { AppRoutes, Pages, Providers } from "./AppRoutes";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const pages: Pages = {
  Index,
  NotFound,
  About: lazy(() => import("./pages/About.tsx")),
  Services: lazy(() => import("./pages/Services.tsx")),
  Work: lazy(() => import("./pages/Work.tsx")),
  CaseStudies: lazy(() => import("./pages/CaseStudies.tsx")),
  Thinking: lazy(() => import("./pages/Thinking.tsx")),
  ThinkingPost: lazy(() => import("./pages/ThinkingPost.tsx")),
  Contact: lazy(() => import("./pages/Contact.tsx")),
  Notes: lazy(() => import("./pages/Notes.tsx")),
  Now: lazy(() => import("./pages/Now.tsx")),
  Uses: lazy(() => import("./pages/Uses.tsx")),
  CV: lazy(() => import("./pages/CV.tsx")),
};

const App = () => (
  <Providers>
    <BrowserRouter>
      <AppRoutes pages={pages} />
    </BrowserRouter>
  </Providers>
);

export default App;
