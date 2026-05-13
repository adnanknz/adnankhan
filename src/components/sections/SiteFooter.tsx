import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/data/site";

const SiteFooter = () => {
  const wordmark = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!wordmark.current) return;
      gsap.from(wordmark.current, {
        yPercent: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: wordmark.current, start: "top 90%", once: true },
      });
    });
    return () => mm.revert();
  }, []);

  const work = [
    ["Home", "/"],
    ["Work", "/work"],
    ["Services", "/services"],
    ["Thinking", "/thinking"],
    ["Contact", "/contact"],
  ] as const;

  const companies = [
    ["Stitch", SITE.stitch],
    ["Stitch Predict", SITE.stitchPredict],
  ] as const;

  const elsewhere = [
    ["LinkedIn", SITE.linkedin],
    ["IMANZ profile", SITE.imanz],
    ["MA author hub", SITE.maHub],
    ["About.me", SITE.aboutMe],
  ] as const;

  return (
    <footer className="hairline-t bg-ink text-paper relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-8 pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow text-paper/60 mb-4">Work</p>
          <ul className="space-y-2 mono text-paper/85">
            {work.map(([l, h]) => (
              <li key={l}>
                <Link to={h} className="link-underline">{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-paper/60 mb-4">Companies</p>
          <ul className="space-y-2 mono text-paper/85">
            {companies.map(([l, h]) => (
              <li key={l}>
                <a className="link-underline" href={h} target="_blank" rel="noopener noreferrer">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-paper/60 mb-4">Elsewhere</p>
          <ul className="space-y-2 mono text-paper/85">
            {elsewhere.map(([l, h]) => (
              <li key={l}>
                <a className="link-underline" href={h} target="_blank" rel="noopener noreferrer">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-8 pb-8 flex flex-wrap justify-between mono text-paper/60 gap-3">
        <span>© {new Date().getFullYear()} Adnan Khan. Auckland, Aotearoa New Zealand.</span>
        <span className="text-sienna">Built with care.</span>
      </div>
      <div ref={wordmark} className="px-5 lg:px-8 -mb-[6vw]">
        <p
          className="font-display-1 text-oxblood leading-[0.85] whitespace-nowrap"
          style={{ fontSize: "clamp(96px, 22vw, 320px)" }}
        >
          ADNAN KHAN
        </p>
      </div>
      <div className="hairline-t border-paper/20 overflow-hidden py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap mono text-sienna text-sm tracking-[0.3em]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="pr-8" aria-hidden={i > 0 ? true : undefined}>
              ✱ AUCKLAND ✱ MARTECH ✱ MMM ✱ AI ✱ PRIVACY-FIRST MEASUREMENT ✱ STITCH ✱ STITCH PREDICT ✱
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
