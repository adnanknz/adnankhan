import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awards, awardsCredit } from "@/data/awards";

const AwardsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!ref.current) return;
      gsap.from(ref.current.querySelectorAll(".award-row"), {
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className="bg-oxblood text-paper py-20 lg:py-28">
      <div className="container mx-auto px-5 lg:px-8">
        <p className="eyebrow text-paper/60 mb-3">Recognition</p>
        <h2
          className="font-display-2 text-paper mb-12 max-w-[20ch]"
          style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          Six awards. Two stages.
        </h2>
        <ul className="divide-y divide-paper/15 border-y border-paper/15">
          {awards.map((a, i) => (
            <li
              key={i}
              className="award-row grid grid-cols-12 gap-x-6 py-5 items-baseline"
            >
              <span className="mono text-paper/70 col-span-3 lg:col-span-2">{a.year}</span>
              <span className="col-span-9 lg:col-span-10 font-serif font-bold text-paper text-[18px] lg:text-[24px]">
                {a.body}
              </span>
            </li>
          ))}
        </ul>
        <p className="mono text-paper/60 mt-6 max-w-[60ch]">{awardsCredit}</p>
      </div>
    </section>
  );
};

export default AwardsStrip;
