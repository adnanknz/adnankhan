const timeline = [
  ["2023 — present", "Co-founder, Stitch Predict"],
  ["2019 — present", "Co-founder & Managing Partner, Stitch"],
  ["2014 — 2019", "Founding Partner, krunch.co"],
  ["2011 — 2014", "Country Manager NZ, Facebook (Meta)"],
  ["2009 — 2011", "Account Manager ANZ, Facebook (Meta)"],
  ["2008 — 2009", "Technical Account Manager, Microsoft Australia"],
  ["2007 — 2008", "Digital Media Buyer & Planner, Initiative Australia"],
  ["2003 — 2006", "B.Media & Communications (Hons), UNSW"],
];

const About = () => (
  <section id="about" className="py-24 lg:py-40 px-5 lg:px-8 bg-bone">
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-6 mb-16">
        <p className="eyebrow col-span-12 lg:col-span-3 mb-4 lg:mb-0">About</p>
        <h2 className="col-span-12 lg:col-span-9 font-display-2" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          The long version.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-16">
        <div className="col-span-12 lg:col-span-7 space-y-6 text-ink/90 text-[17px] leading-[1.65] max-w-[64ch]">
          <p className="dropcap">
            Adnan helps brands grow through media, technology, and AI.
          </p>
          <p>
            He co-founded Stitch in 2019 with Simon Wedde to fill a gap he kept seeing as a
            Facebook country manager: brands had bought sophisticated marketing platforms but had
            no one helping them stitch the data together. Stitch now works with Turners, Tourism
            New Zealand, Comvita, AA Smartfuel, and a roster of independent New Zealand brands on
            digital transformation, customer data platforms, and martech.
          </p>
          <p>
            In 2023 he co-founded Stitch Predict with Simon and ex-Quantium data scientist Alex
            Rowley, on a simple premise: sophisticated marketing mix modelling should not be
            reserved for brands with multi-million dollar media budgets.
          </p>
          <p>
            Before Stitch, Adnan was one of the first five employees at Facebook in APAC and
            opened the company's Auckland office. He has held roles at Microsoft Australia and
            Initiative Media. He chairs the Marketing Association New Zealand Digital Special
            Interest Group, leads the IAB New Zealand AI Working Group, and judges the IAB New
            Zealand Digital Advertising Awards.
          </p>
          <p>He also advises law firms on AI and digital technology.</p>
        </div>

        <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-24 self-start">
          <p className="eyebrow mb-6">Career</p>
          <ul className="space-y-5">
            {timeline.map(([date, role]) => (
              <li key={role} className="border-l border-hairline pl-4">
                <p className="mono mb-1">{date}</p>
                <p className="text-ink font-medium text-[14px] leading-snug">{role}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  </section>
);

export default About;
