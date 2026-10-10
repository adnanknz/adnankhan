import { ComponentType, ReactNode, Suspense, useLayoutEffect, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/layouts/SiteLayout";

/** Page components, supplied lazily on the client and eagerly on the server. */
export type Pages = Record<
  | "Index" | "About" | "Services" | "Work" | "CaseStudies" | "Thinking" | "ThinkingPost"
  | "Contact" | "Now" | "Uses" | "CV" | "Notes" | "NotFound",
  ComponentType
>;

// Safe on the server: layout effects never run during renderToString.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useIsoLayoutEffect(() => {
    if (hash) return; // let the browser jump to the anchor
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
};

export const AppRoutes = ({ pages: P }: { pages: Pages }) => {
  const L = (C: ComponentType) => <SiteLayout><C /></SiteLayout>;
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={L(P.Index)} />
          <Route path="/about" element={L(P.About)} />
          <Route path="/services" element={L(P.Services)} />
          <Route path="/work" element={L(P.Work)} />
          <Route path="/casestudies" element={L(P.CaseStudies)} />
          <Route path="/case-studies" element={<Navigate to="/casestudies" replace />} />
          <Route path="/case-studies/*" element={<Navigate to="/casestudies" replace />} />
          <Route path="/thinking" element={L(P.Thinking)} />
          <Route path="/thinking/:slug" element={L(P.ThinkingPost)} />
          <Route path="/contact" element={L(P.Contact)} />
          <Route path="/now" element={L(P.Now)} />
          <Route path="/uses" element={L(P.Uses)} />
          <Route path="/cv" element={L(P.CV)} />
          <Route path="/notes" element={L(P.Notes)} />
          <Route path="*" element={L(P.NotFound)} />
        </Routes>
      </Suspense>
    </>
  );
};

const queryClient = new QueryClient();

/** Shared providers, rendered identically on server and client to keep hydration in sync. */
export const Providers = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);
