import SEO from "@/components/SEO";
import { SITE } from "@/data/site";

const sections: [string, string[]][] = [
  ["Hardware", [
    "MacBook Pro (M-series)",
    "iPhone Pro · daily driver",
    "AirPods Pro",
    "Studio mic for podcasts and webinars",
  ]],
  ["Software", [
    "Linear · planning",
    "Notion · writing and notes",
    "Slack · client comms",
    "Figma · whiteboards and prototypes",
    "Google Workspace · everything else",
  ]],
  ["AI tools", [
    "ChatGPT (GPT-5) · daily research and drafting",
    "Claude · long-form thinking and code review",
    "Perplexity · search and citations",
    "Lovable · web prototypes",
  ]],
  ["Martech stack (client-facing)", [
    "Tealium · CDP",
    "Marketo, HubSpot, Customer.io, Klaviyo · automation",
    "Stitch Predict · MMM",
    "Google Analytics 4 · BigQuery",
  ]],
];

const Uses = () => (
  <>
    <SEO
      title="Uses — Adnan Khan"
      description="The hardware, software, AI tools and martech stack Adnan Khan uses every day."
      path="/uses"
      breadcrumbs={[
        { name: "Home", url: `${SITE.url}/` },
        { name: "Uses", url: `${SITE.url}/uses` },
      ]}
    />
    <article className="pt-32 pb-24 px-5 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <p className="eyebrow mb-6">Uses</p>
        <h1 className="font-display-1 text-ink mb-12" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
          Uses.
        </h1>
        <p className="text-ink/85 text-[17px] leading-[1.65] mb-12 max-w-[60ch]">
          What I use to run consulting, build Stitch Predict, write, speak, and ship.
        </p>
        <div className="space-y-12">
          {sections.map(([title, items]) => (
            <section key={title} className="hairline-t pt-6">
              <p className="eyebrow mb-4">{title}</p>
              <ul className="space-y-2 text-ink/85 text-[15px]">
                {items.map((it) => <li key={it}>· {it}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  </>
);

export default Uses;
