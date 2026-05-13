import { useRef, MouseEvent, ReactNode, useEffect } from "react";
import { gsap } from "gsap";

type Props = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

const MagneticButton = ({
  href,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth,
  children,
  className = "",
  disabled,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < 80) {
        gsap.to(el, { x: dx * 0.08, y: dy * 0.08, duration: 0.2, ease: "power2.out" });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1,0.4)" });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold tracking-[0.04em] uppercase rounded-[2px] transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-oxblood text-paper hover:bg-oxblood-dark"
      : "bg-transparent text-ink border border-hairline hover:border-oxblood hover:text-oxblood";

  const cls = `${base} ${styles} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={(e: MouseEvent) => onClick?.()}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${cls} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
