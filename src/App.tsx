import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/layouts/SiteLayout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const About = lazy(() => import("./pages/About.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Work = lazy(() => import("./pages/Work.tsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies.tsx"));
const Thinking = lazy(() => import("./pages/Thinking.tsx"));
const ThinkingPost = lazy(() => import("./pages/ThinkingPost.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Notes = lazy(() => import("./pages/Notes.tsx"));
const Now = lazy(() => import("./pages/Now.tsx"));
const Uses = lazy(() => import("./pages/Uses.tsx"));
const CV = lazy(() => import("./pages/CV.tsx"));

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) return; // let the browser jump to the anchor
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    ScrollTrigger.refresh();
  }, [pathname, hash]);
  return null;
};

const App = () => {
  useEffect(() => {
    const update = () => ScrollTrigger.update();
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  const reduce = typeof window !== "undefined"
    && (window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || window.innerWidth < 768);

  const tree = (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<SiteLayout><Index /></SiteLayout>} />
          <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
          <Route path="/services" element={<SiteLayout><Services /></SiteLayout>} />
          <Route path="/work" element={<SiteLayout><Work /></SiteLayout>} />
          <Route path="/casestudies" element={<SiteLayout><CaseStudies /></SiteLayout>} />
          <Route path="/case-studies" element={<Navigate to="/casestudies" replace />} />
          <Route path="/case-studies/*" element={<Navigate to="/casestudies" replace />} />
          <Route path="/thinking" element={<SiteLayout><Thinking /></SiteLayout>} />
          <Route path="/thinking/:slug" element={<SiteLayout><ThinkingPost /></SiteLayout>} />
          <Route path="/contact" element={<SiteLayout><Contact /></SiteLayout>} />
          <Route path="/now" element={<SiteLayout><Now /></SiteLayout>} />
          <Route path="/uses" element={<SiteLayout><Uses /></SiteLayout>} />
          <Route path="/cv" element={<SiteLayout><CV /></SiteLayout>} />
          <Route path="/notes" element={<SiteLayout><Notes /></SiteLayout>} />
          <Route path="*" element={<SiteLayout><NotFound /></SiteLayout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {reduce ? tree : (
          <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, syncTouch: false }}>
            {tree}
          </ReactLenis>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
