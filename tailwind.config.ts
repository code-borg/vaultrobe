import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lux: {
          bg: "rgb(var(--lux-bg) / <alpha-value>)",
          surface: "rgb(var(--lux-surface) / <alpha-value>)",
          raised: "rgb(var(--lux-raised) / <alpha-value>)",
          card: "rgb(var(--lux-card) / <alpha-value>)",
          border: "rgb(var(--lux-border) / <alpha-value>)",
          gold: "rgb(var(--lux-gold) / <alpha-value>)",
          "gold-bright": "rgb(var(--lux-gold-bright) / <alpha-value>)",
          "gold-edge": "rgb(var(--lux-gold-edge) / <alpha-value>)",
          "gold-dim": "rgb(var(--lux-gold-dim) / <alpha-value>)",
          "rose-gold": "rgb(var(--lux-rose) / <alpha-value>)",
          emerald: "rgb(var(--lux-emerald) / <alpha-value>)",
          "emerald-dim": "rgb(var(--lux-emerald) / <alpha-value>)",
          ivory: "rgb(var(--lux-ivory) / <alpha-value>)",
          ink: "rgb(var(--lux-ink) / <alpha-value>)",
          "ink-soft": "rgb(var(--lux-ink-soft) / <alpha-value>)",
          "ink-faint": "rgb(var(--lux-ink-faint) / <alpha-value>)",
          midnight: "rgb(var(--lux-midnight) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, var(--gold-grad-a) 0%, var(--gold-grad-b) 45%, var(--gold-grad-c) 100%)",
        "gold-shine":
          "linear-gradient(120deg, transparent 30%, rgba(229,202,114,0.25) 50%, transparent 70%)",
        "radial-glow":
          "radial-gradient(ellipse at 50% 0%, rgb(var(--lux-gold) / 0.28) 0%, transparent 62%)",
        "radial-emerald":
          "radial-gradient(ellipse at 80% 80%, rgb(var(--lux-emerald) / 0.16) 0%, transparent 50%)",
        "radial-rose":
          "radial-gradient(ellipse at 20% 60%, rgb(var(--lux-rose) / 0.14) 0%, transparent 50%)",
        "card-sheen":
          "linear-gradient(135deg, rgb(var(--lux-gold) / 0.08) 0%, transparent 45%, rgb(var(--lux-gold) / 0.04) 100%)",
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-lg":
          "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        gold: "0 0 40px rgb(var(--lux-gold) / 0.3), 0 0 90px rgb(var(--lux-gold) / 0.12)",
        "gold-sm": "0 0 24px rgb(var(--lux-gold) / 0.25)",
        "gold-lg":
          "0 0 50px rgb(var(--lux-gold) / 0.22), 0 20px 60px rgba(0,0,0,0.35)",
        emerald: "0 0 30px rgb(var(--lux-emerald) / 0.18)",
        rose: "0 0 28px rgb(var(--lux-rose) / 0.16)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "glow-breathe": "glowBreathe 5s ease-in-out infinite",
        "orb-drift": "orbDrift 18s ease-in-out infinite",
        "orb-drift-reverse": "orbDrift 22s ease-in-out infinite reverse",
        "gradient-shift": "gradientShift 8s ease infinite",
        "soft-spin": "softSpin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowBreathe: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
        orbDrift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -24px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 16px) scale(0.94)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        softSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
