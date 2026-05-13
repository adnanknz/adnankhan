import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 3, suffix: "x", caption: "TVNZ MARKETING AWARDS 2022 (INCL. SUPREME)" },
  { value: 2, suffix: "x", caption: "GOLD EFFIE AWARDS 2022" },
  { value: 1, suffix: "x", caption: "GLOBAL EFFIE FINALIST 2023" },
  { value: 1, suffix: " of 5", caption: "FACEBOOK APAC FOUNDING TEAM, 2009" },
];

const AwardsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const nums = ref.current?.querySelectorAll<HTMLElement>("[data-num]");
      if (!nums) return;
      nums.forEach((n) => {
        const target = parseInt(n.dataset.num || "0", 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: n, start: "top 85%", once: true },
          onUpdate: () => {
            n.textContent = String(Math.round(obj.v));
          },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="bg-oxblood text-paper py-20 lg:py-28">
      <div className="container mx-auto px-5 lg:px-8">
        <p className="eyebrow text-paper/60 mb-12">A few markers</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-4 lg:px-8 ${i > 0 ? "lg:border-l lg:border-paper/20" : ""}`}
            >
              <div
                className="font-display-1 text-paper leading-none mb-4 flex items-baseline"
                style={{ fontSize: "clamp(56px, 8vw, 128px)" }}
              >
                <span data-num={s.value}>0</span>
                <span className="text-paper/80" style={{ fontSize: "0.55em" }}>{s.suffix}</span>
              </div>
              <p className="mono text-paper/70 leading-relaxed max-w-[24ch]">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsStrip;
