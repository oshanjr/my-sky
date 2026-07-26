import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        /* Dark Backgrounds */
        midnight: "var(--bg-midnight)",
        navy: "var(--bg-navy)",
        deep: "var(--bg-deep)",
        /* Light Backgrounds */
        snow: "var(--bg-snow)",
        mist: "var(--bg-mist)",
        cream: "var(--bg-cream)",
        /* Brand Gradient Colors */
        "grad-deep": "var(--gradient-deep)",
        "grad-primary": "var(--gradient-primary)",
        "grad-mid": "var(--gradient-mid)",
        "grad-light": "var(--gradient-light)",
        "grad-ice": "var(--gradient-ice)",
        /* Brand Accent */
        accent: "var(--accent-teal)",
        "accent-dark": "var(--accent-teal-dark)",
        "accent-frost": "var(--accent-teal-frost)",
        "accent-border": "var(--accent-teal-border)",
        "accent-glow": "var(--accent-teal-glow)",
        /* Text */
        "t-dark": "var(--text-on-light)",
        "t-dark-secondary": "var(--text-on-light-secondary)",
        "t-dark-muted": "var(--text-on-light-muted)",
        "t-light": "var(--text-on-dark)",
        "t-light-secondary": "var(--text-on-dark-secondary)",
        "t-light-muted": "var(--text-on-dark-muted)",
      },
      animation: {
        "glow-breathe": "glow-breathe 5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease infinite",
        "glass-pulse": "glass-pulse 3s ease-in-out infinite",
        "slide-up": "slide-up-fade 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
