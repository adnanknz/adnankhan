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
        yPercent: 60, opacity: 0, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: wordmark.current, start: "top 90%", once: true },
      });
    });
    return () => mm.revert();
  }, []);

  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Services", "/services"],
    ["Case Studies", "/casestudies"],
    ["Thinking", "/thinking"],
    ["Contact", "/contact"],
    ["CV", "/cv"],
    ["Now", "/now"],
    ["Uses", "/uses"],
  ] as const;

  const social: [string, string][] = [
    ["LinkedIn", SITE.linkedin],
    ["Facebook", SITE.facebook],
    ["About.me", SITE.aboutMe],
    ["Stitch", SITE.stitch],
    ["Stitch Predict", SITE.stitchPredict],
  ];

  return (
    <footer className="hairline-t bg-ink text-paper relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-8 pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif font-bold text-paper text-2xl mb-3">Adnan Khan</p>
          <p className="mono text-paper/70 text-[13px] mb-1">
            Co-Founder, Stitch & Stitch Predict
          </p>
          <p className="mono text-paper/70 text-[13px] mb-6">Auckland, New Zealand</p>
          <p className="mono text-paper/50 text-[12px]">© {new Date().getFullYear()} Adnan Khan</p>
        </div>

        <div>
          <p className="eyebrow text-paper/60 mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-y-2 mono text-paper/85 text-[13px]">
            {nav.map(([l, h]) => (
              <li key={l}>
                <Link to={h} className="link-underline">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-paper/60 mb-4">Elsewhere</p>
          <ul className="space-y-2 mono text-paper/85 text-[13px]">
            {social.map(([l, h]) => (
              <li key={l}>
                <a className="link-underline" href={h} target="_blank" rel="noopener noreferrer">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-8 pb-8 flex flex-wrap justify-between mono text-paper/70 gap-3 text-[13px]">
        <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
        <a href={`tel:${SITE.phoneTel}`} className="link-underline">{SITE.phone}</a>
      </div>

      <div ref={wordmark} className="px-5 lg:px-8 -mb-[6vw]">
        <p
          className="font-display-1 text-oxblood leading-[0.85] whitespace-nowrap"
          style={{ fontSize: "clamp(96px, 22vw, 320px)" }}
        >
          ADNAN KHAN
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
