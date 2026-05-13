import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        // Editorial palette
        paper: "#F2EDE4",
        surface: "#E8E1D3",
        ink: "#1A1A1A",
        oxblood: { DEFAULT: "#5B1A1A", dark: "#3F1010" },
        sienna: "#C8553D",
        hairline: "#A39A88",
        bone: "#FBF7F0",

        // shadcn token bridge — mapped to editorial palette
        border: "#A39A88",
        input: "#A39A88",
        ring: "#5B1A1A",
        background: "#F2EDE4",
        foreground: "#1A1A1A",
        primary: { DEFAULT: "#5B1A1A", foreground: "#F2EDE4" },
        secondary: { DEFAULT: "#E8E1D3", foreground: "#1A1A1A" },
        destructive: { DEFAULT: "#C8553D", foreground: "#FBF7F0" },
        muted: { DEFAULT: "#E8E1D3", foreground: "#3a342b" },
        accent: { DEFAULT: "#5B1A1A", foreground: "#F2EDE4" },
        popover: { DEFAULT: "#FBF7F0", foreground: "#1A1A1A" },
        card: { DEFAULT: "#FBF7F0", foreground: "#1A1A1A" },
      },
      borderRadius: {
        lg: "4px",
        md: "3px",
        sm: "2px",
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
