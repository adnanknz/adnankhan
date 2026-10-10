import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { AppRoutes, Pages, Providers } from "./AppRoutes";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import CaseStudies from "./pages/CaseStudies";
import Thinking from "./pages/Thinking";
import ThinkingPost from "./pages/ThinkingPost";
import Contact from "./pages/Contact";
import Now from "./pages/Now";
import Uses from "./pages/Uses";
import CV from "./pages/CV";
import Notes from "./pages/Notes";
import NotePost from "./pages/NotePost";
import { notes } from "./data/notes";
import NotFound from "./pages/NotFound";
import { thinkingPosts } from "./data/thinking";

const pages: Pages = {
  Index, About, Services, Work, CaseStudies, Thinking, ThinkingPost,
  Contact, Now, Uses, CV, Notes, NotePost, NotFound,
};

export const routes = [
  "/", "/about", "/work", "/services", "/casestudies", "/thinking", "/contact",
  "/now", "/uses", "/cv", "/notes",
  ...notes.map((n) => `/notes/${n.slug}`),
  ...thinkingPosts.map((p) => `/thinking/${p.slug}`),
];

export function render(url: string) {
  const ctx: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={ctx}>
      <Providers>
        <StaticRouter location={url}>
          <AppRoutes pages={pages} />
        </StaticRouter>
      </Providers>
    </HelmetProvider>,
  );
  const h = ctx.helmet!;
  return {
    html,
    htmlAttributes: h.htmlAttributes.toString(),
    head: [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()]
      .filter(Boolean)
      .join("\n    "),
  };
}
