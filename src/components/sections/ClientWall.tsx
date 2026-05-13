import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stitchClients, krunchClients } from "@/data/clients";

const ClientWall = () => {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cells = grid.current?.querySelectorAll(".cell");
      if (!cells) return;
      gsap.from(cells, {
        opacity: 0,
        y: 8,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.out",
        scrollTrigger: { trigger: grid.current, start: "top 75%" },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="py-24 lg:py-32 px-5 lg:px-8">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">Trusted by</p>
        <h2
          className="font-display-2 text-ink mb-10 max-w-[20ch]"
          style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
        >
          A short list of long-term work.
        </h2>
        <div ref={grid} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 hairline-t hairline-l">
          {stitchClients.map((c) => (
            <div
              key={c}
              className="cell hairline-r hairline-b px-4 py-8 flex items-center justify-center text-center"
            >
              <span className="font-sans font-medium text-ink text-[15px] uppercase tracking-[0.06em]">{c}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="mono mb-4">Past global work (pre-Stitch, via krunch.co)</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {krunchClients.map((c) => (
              <span key={c} className="text-ink/45 text-[13px] uppercase tracking-[0.08em] font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
