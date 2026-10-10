import { ReactNode } from "react";
import { Link } from "react-router-dom";

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
          to={href}
          onClick={onClick}
          className={cls}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <button
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
