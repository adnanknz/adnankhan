import SEO from "@/components/SEO";
import { SITE } from "@/data/site";
import { thinkingPosts } from "@/data/thinking";

const yearOf = (iso: string) => iso.slice(0, 4);

const Thinking = () => {
  const grouped = thinkingPosts.reduce<Record<string, typeof thinkingPosts>>((acc, p) => {
    const y = yearOf(p.date);
    (acc[y] = acc[y] || []).push(p);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <SEO
        title="Thinking — Adnan Khan"
        description="Articles, podcasts and talks on AI, marketing mix modelling, customer data, and the future of measurement. Plus IAB NZ AI Working Group outputs."
        path="/thinking"
        breadcrumbs={[
          { name: "Home", url: `${SITE.url}/` },
          { name: "Thinking", url: `${SITE.url}/thinking` },
        ]}
      />
      <article className="pt-32 pb-24 px-5 lg:px-8">
        <div className="container mx-auto">
          <p className="eyebrow mb-6">Thinking</p>
          <h1 className="font-display-1 text-ink mb-16 max-w-[18ch]" style={{ fontSize: "clamp(56px, 9vw, 168px)" }}>
            Thinking.
          </h1>

          <div className="space-y-16">
            {years.map((y) => (
              <section key={y}>
                <p className="font-serif font-bold text-oxblood text-4xl mb-6">{y}</p>
                <ul className="hairline-t">
                  {grouped[y].map((p) => (
                    <li key={p.slug} className="hairline-b">
                      <a
                        href={p.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-12 gap-x-6 py-6 items-baseline"
                      >
                        <span className="mono col-span-12 lg:col-span-2 text-oxblood">{p.dateLabel}</span>
                        <span className="col-span-12 lg:col-span-7 font-serif font-bold text-ink group-hover:text-oxblood transition-colors text-[20px] lg:text-[24px] leading-snug">
                          {p.title}
                        </span>
                        <span className="mono col-span-12 lg:col-span-3 lg:text-right text-ink/70">
                          {p.kind} · {p.source}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Thinking;
