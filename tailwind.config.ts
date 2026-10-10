import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // Tech-minimal palette (legacy names kept as aliases)
        paper: "#FAFAFA",
        surface: "#F4F4F5",
        bone: "#FFFFFF",
        ink: "#0A0A0A",
        subtle: "#52525B",
        oxblood: { DEFAULT: "#7A1F2B", dark: "#5E1720" },
        sienna: "#7A1F2B",
        hairline: "#E4E4E7",

        border: "#E4E4E7",
        input: "#E4E4E7",
        ring: "#7A1F2B",
        background: "#FAFAFA",
        foreground: "#0A0A0A",
        primary: { DEFAULT: "#0A0A0A", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#F4F4F5", foreground: "#0A0A0A" },
        destructive: { DEFAULT: "#B91C1C", foreground: "#FFFFFF" },
        muted: { DEFAULT: "#F4F4F5", foreground: "#52525B" },
        accent: { DEFAULT: "#7A1F2B", foreground: "#FFFFFF" },
        popover: { DEFAULT: "#FFFFFF", foreground: "#0A0A0A" },
        card: { DEFAULT: "#FFFFFF", foreground: "#0A0A0A" },
      },
      borderRadius: {
        xl: "16px",
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
