import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";
import { yearsExperience } from "@/data/site";

const Hero = () => (
  <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
    <div className="container mx-auto">
      <p className="mono mb-8 lg:mb-12">AUCKLAND −36.85°, 174.76° / EST. 2007 / VOL. 03</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 lg:col-span-8">
          <h1 className="font-display-1 text-ink text-balance" style={{ fontSize: "clamp(40px, 6.4vw, 80px)" }}>
            Digital transformation, AI and growth for{" "}
            <span className="text-oxblood">ambitious brands.</span>
          </h1>

          <p className="mt-8 text-subtle max-w-[56ch] text-[17px] leading-[1.6]">
            Adnan Khan. Co-Founder of Stitch and Stitch Predict. {yearsExperience()} years across Meta, Microsoft,
            krunch.co. Auckland, working globally.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <MagneticButton href="/contact" variant="primary">
              Work with me <span aria-hidden>→</span>
            </MagneticButton>
            <Link
              to="/casestudies"
              className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-bone text-ink px-5 py-3 text-[15px] font-medium hover:border-ink/40 transition-colors"
            >
              See the work <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-4">
          <div className="mx-auto lg:mx-0 w-40 sm:w-56 lg:w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-surface">
            <img
              src="/adnan-khan-headshot.jpg"
              alt="Adnan Khan"
              width={720}
              height={900}
              {...{ fetchpriority: "high" }}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
