import { useRef, MouseEvent, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
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
    // Very subtle magnetic pull (max ~3px)
    const onMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      if (Math.hypot(dx, dy) < 60) {
        gsap.to(el, { x: dx * 0.04, y: dy * 0.04, duration: 0.25, ease: "power2.out" });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-[15px] font-medium rounded-lg transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-ink text-bone hover:bg-oxblood"
      : "bg-bone text-ink border border-hairline hover:border-ink/40";

  const cls = `${base} ${styles} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link
          ref={ref as React.RefObject<HTMLAnchorElement>}
          to={href}
          onClick={(e: MouseEvent) => onClick?.()}
          className={cls}
        >
          {children}
        </Link>
      );
    }
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
