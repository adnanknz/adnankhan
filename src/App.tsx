import { BrowserRouter } from "react-router-dom";
import { lazy, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const update = () => ScrollTrigger.update();
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  // ReactLenis in root mode renders no DOM of its own, so this choice can't cause a hydration mismatch.
  const reduce = typeof window === "undefined"
    || window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || window.innerWidth < 768;

  const tree = (
    <BrowserRouter>
      <AppRoutes pages={pages} />
    </BrowserRouter>
  );

  return (
    <Providers>
      {reduce ? tree : (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, syncTouch: false }}>
          {tree}
        </ReactLenis>
      )}
    </Providers>
  );
};

export default App;
