import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import MagneticButton from "@/components/MagneticButton";

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const words = root.current?.querySelectorAll<HTMLElement>("[data-word]");
        if (words?.length) {
          gsap.set(words, { yPercent: 110, opacity: 0 });
          gsap.to(words, {
            yPercent: 0, opacity: 1, duration: 0.9, ease: "expo.out", stagger: 0.06, delay: 0.15,
          });
        }
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 px-5 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto w-full grid grid-cols-12 gap-x-6">
        <p className="mono col-span-12 mb-8 lg:mb-16">
          AUCKLAND −36.85°, 174.76° / EST. 2009 / VOL. 03
        </p>
      </div>

      <div className="container mx-auto w-full grid grid-cols-12 gap-x-6">
        <h1 className="col-span-12 font-display-1 text-ink select-none" style={{ lineHeight: 0.92, letterSpacing: "-0.025em" }}>
          <span className="block overflow-hidden">
            <span data-word className="inline-block" style={{ fontSize: "clamp(44px, 8.6vw, 132px)" }}>
              Digital transformation,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-word className="inline-block" style={{ fontSize: "clamp(44px, 8.6vw, 132px)" }}>
              AI and growth for
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-word className="inline-block text-oxblood italic" style={{ fontSize: "clamp(44px, 8.6vw, 132px)" }}>
              ambitious brands.
            </span>
          </span>
        </h1>
      </div>

      <div className="container mx-auto w-full grid grid-cols-12 gap-x-6 mt-12 lg:mt-20 items-end">
        <p className="col-span-12 lg:col-span-6 text-ink/85 max-w-[56ch] text-[16px] leading-[1.6]">
          Adnan Khan. Co-Founder of Stitch and Stitch Predict. 18 years across Meta, Microsoft,
          krunch.co. Auckland, working globally.
        </p>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-wrap gap-3 mt-8 lg:mt-0 lg:justify-end">
          <MagneticButton href="/contact" variant="primary">
            Work with me <span aria-hidden>→</span>
          </MagneticButton>
          <Link
            to="/casestudies"
            className="inline-flex items-center gap-2 border border-oxblood text-oxblood px-5 py-3 rounded-[4px] text-[14px] uppercase tracking-[0.06em] font-medium hover:bg-oxblood hover:text-paper transition-colors"
          >
            See the work <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
