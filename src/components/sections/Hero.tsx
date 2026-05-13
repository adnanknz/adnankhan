import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const words = root.current?.querySelectorAll<HTMLElement>("[data-word]");
        if (words?.length) {
          gsap.set(words, { yPercent: 110, opacity: 0 });
          gsap.to(words, {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.06,
            delay: 0.15,
          });
        }
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "bottom 40%",
          onEnter: () => markRef.current?.classList.add("is-in"),
        });
        // Trigger soon after load too
        setTimeout(() => markRef.current?.classList.add("is-in"), 1200);
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
          VOL. 01 / AUCKLAND −36.85°, 174.76° / EST. 2009
        </p>
      </div>

      <div className="container mx-auto w-full grid grid-cols-12 gap-x-6">
        <h1 className="col-span-12 lg:col-span-11 font-display-1 text-ink select-none">
          <span className="block overflow-hidden">
            <span data-word className="inline-block" style={{ fontSize: "clamp(64px, 14vw, 220px)" }}>
              Adnan
            </span>
          </span>
          <span className="block overflow-hidden pl-[16vw] lg:pl-[18vw]">
            <span data-word className="inline-block" style={{ fontSize: "clamp(64px, 14vw, 220px)" }}>
              Khan
            </span>
          </span>
        </h1>
      </div>

      <div className="container mx-auto w-full grid grid-cols-12 gap-x-6 mt-10 lg:mt-16">
        <h2
          className="col-span-12 lg:col-span-9 font-display-2 text-ink"
          style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
        >
          Helping brands{" "}
          <mark ref={markRef} className="grow-mark text-ink bg-transparent">
            grow
          </mark>{" "}
          through media, technology, and AI.
        </h2>
      </div>

      <div className="container mx-auto w-full grid grid-cols-12 gap-x-6 mt-12 lg:mt-20 items-end">
        <p className="col-span-12 lg:col-span-5 text-ink/85 max-w-[50ch] text-[15px] leading-[1.55]">
          Co-founder of Stitch and Stitch Predict. Former Country Manager for Facebook New Zealand.
          Three-time TVNZ Marketing Award winner. Building the next generation of marketing
          measurement from Auckland.
        </p>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-wrap gap-3 mt-8 lg:mt-0 lg:justify-end">
          <MagneticButton href="#contact" variant="primary">
            Work with me <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href="#thinking" variant="ghost">
            Read recent thinking <span aria-hidden>→</span>
          </MagneticButton>
        </div>
      </div>

      <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 mono rotate-90 origin-right tracking-[0.3em]">
        SCROLL ↓
      </div>
    </section>
  );
};

export default Hero;
