/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        court: {
          // Pitch-deck palette — pure black + orange + neon green
          bg: "#000000",
          panel: "#141414",
          elevated: "#1a1a1a",
          line: "rgba(255,255,255,0.14)",
          muted: "#a3a3a3",
          accent: "#ff5b1f",
          accent2: "#ff7a41",
          neon: "#39ff14",
          gold: "#fbbf24",
          lime: "#39ff14",
          rose: "#fb7185",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        brand: ["'Bebas Neue'", "Impact", "sans-serif"],
        tagline: ["'Instrument Serif'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        glow: "0 0 40px -6px rgba(255,91,31,0.55)",
        soft: "0 0 0 1px rgba(255,255,255,0.08), 0 16px 48px -16px rgba(0,0,0,0.7)",
        neon: "0 0 60px -10px rgba(57,255,20,0.45)",
        frame:
          "0 0 0 1px rgba(255,91,31,0.22), 0 0 80px -18px rgba(57,255,20,0.35), 0 28px 80px -28px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "btn-grad": "linear-gradient(135deg, #ff7a41 0%, #ff5b1f 55%, #e0470f 100%)",
        "lime-glow":
          "radial-gradient(80% 60% at 50% 0%, rgba(57,255,20,0.28) 0%, transparent 55%), radial-gradient(55% 45% at 0% 80%, rgba(255,91,31,0.18) 0%, transparent 50%), radial-gradient(55% 45% at 100% 70%, rgba(251,191,36,0.1) 0%, transparent 50%)",
        "app-glow":
          "radial-gradient(70% 50% at 50% -10%, rgba(255,91,31,0.32) 0%, transparent 55%), radial-gradient(50% 40% at 100% 50%, rgba(57,255,20,0.12) 0%, transparent 50%)",
      },
      transitionTimingFunction: {
        saas: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
