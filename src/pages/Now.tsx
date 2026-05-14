import SEO from "@/components/SEO";
import { SITE } from "@/data/site";

const Now = () => (
  <>
    <SEO
      title="Now — Adnan Khan"
      description="What Adnan Khan is focused on right now. Stitch Predict, IAB NZ AI Working Group, MA Digital SIG, NZ and global brands."
      path="/now"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Now", url: `${SITE.url}/now` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <p className="eyebrow mb-6">What I'm doing now</p>
        <h1 className="font-display-1 text-ink mb-12" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Now.
        </h1>
        <p className="text-ink/90 text-[18px] leading-[1.7] mb-8">
          Right now I'm focused on scaling Stitch Predict, leading the IAB NZ AI Working Group,
          chairing the MA Digital SIG, and helping a small group of NZ and global brands navigate
          the move from cookies to causal, AI-driven measurement. Based in Auckland.
        </p>
        <ul className="space-y-3 text-ink/85 text-[16px] hairline-t pt-6">
          <li>· Scaling Stitch Predict (MMM SaaS) into new ANZ verticals.</li>
          <li>· Leading IAB NZ's AI Working Group programme for 2026.</li>
          <li>· Chairing the Marketing Association NZ Digital SIG.</li>
          <li>· Co-authoring IAB NZ's plain-English data guide.</li>
          <li>· Advising a small group of NZ and global brands on AI-driven measurement.</li>
        </ul>
      </div>
    </article>
  </>
);

export default Now;
