import { ReactNode } from "react";
import { Link } from "react-router-dom";

/** Tiny SSR-safe Markdown renderer: ##, ###, paragraphs, **bold**, links, - and 1. lists. */
const inline = (text: string, key = ""): ReactNode[] => {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${i++}`;
    if (m[1] !== undefined) out.push(<strong key={k} className="font-semibold text-ink">{inline(m[1], k)}</strong>);
    else {
      const href = m[3];
      out.push(
        href.startsWith("/") ? (
          <Link key={k} to={href} className="link-underline text-oxblood">{m[2]}</Link>
        ) : (
          <a key={k} href={href} target="_blank" rel="noopener noreferrer" className="link-underline text-oxblood">{m[2]}</a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
};

const Markdown = ({ source }: { source: string }) => {
  const blocks = source.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((b, i) => {
        const lines = b.split("\n");
        const k = String(i);
        if (b.startsWith("### ")) return <h3 key={k} className="font-semibold tracking-tight text-ink text-[22px] leading-snug mt-10 mb-3">{inline(b.slice(4), k)}</h3>;
        if (b.startsWith("## ")) return <h2 key={k} className="font-semibold tracking-[-0.03em] text-ink text-[28px] lg:text-[32px] leading-tight mt-14 mb-4">{inline(b.slice(3), k)}</h2>;
        if (lines.every((l) => /^- /.test(l)))
          return <ul key={k} className="list-disc pl-6 space-y-2 my-6 marker:text-oxblood">{lines.map((l, j) => <li key={j}>{inline(l.slice(2), `${k}-${j}`)}</li>)}</ul>;
        if (lines.every((l) => /^\d+\. /.test(l)))
          return <ol key={k} className="list-decimal pl-6 space-y-2 my-6 marker:text-oxblood">{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s/, ""), `${k}-${j}`)}</li>)}</ol>;
        return <p key={k} className="my-6">{inline(lines.join(" "), k)}</p>;
      })}
    </>
  );
};

export default Markdown;
