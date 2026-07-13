/**
 * Anact Ortho color system — pitch-deck palette.
 *
 * Pure black surfaces, neon green (#39ff14) secondary, orange (#ff5b1f) primary.
 * Matches the vsHacks slide deck: black / neon green / bright orange / white.
 */
export const palette = {
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#2a2a2a",
    800: "#141414",
    900: "#0a0a0a",
    950: "#000000",
  },
  violet: {
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
  },
  orange: {
    50: "#fff4ed",
    100: "#ffe4d3",
    200: "#ffc4a3",
    300: "#ff9d6b",
    400: "#ff7a41",
    500: "#ff5b1f",
    600: "#e0470f",
    700: "#b8380c",
    800: "#8f2c0b",
    900: "#742609",
  },
  /** Neon green — slide-deck secondary / data accent (replaces cyan in UI). */
  cyan: {
    50: "#f0ffe8",
    100: "#d9ffc2",
    200: "#b3ff85",
    300: "#85ff47",
    400: "#39ff14",
    500: "#2de00f",
    600: "#22b30c",
    700: "#1a860a",
    800: "#145c08",
    900: "#0e3d06",
  },
  amber: {
    400: "#fbbf24",
    500: "#f59e0b",
  },
  rose: {
    400: "#fb7185",
    500: "#f43f5e",
  },
} as const;

export const semanticColors = {
  /** Absolute base surface — pure black, matches slide deck. */
  background: palette.slate[950],
  /** Elevated surface — cards, panels, sheets. */
  surface: palette.slate[800],
  /** Doubly elevated — modals, popovers, hero blocks. */
  surfaceElevated: "#1a1a1a",
  /** Hairline dividers, subtle borders. */
  border: "rgba(255, 255, 255, 0.14)",
  borderStrong: "rgba(255, 255, 255, 0.24)",
  /** Primary text. */
  text: "#ffffff",
  /** Secondary text — captions, hints (high contrast). */
  textMuted: palette.slate[400],
  /** Placeholder / disabled text. */
  textFaint: "#737373",
  /** Primary action — slide-deck orange. */
  primary: palette.orange[500],
  primaryHover: palette.orange[400],
  primaryPressed: palette.orange[600],
  primarySoft: "rgba(255, 91, 31, 0.18)",
  onPrimary: "#ffffff",
  /** Secondary — neon green scout / data. */
  secondary: palette.cyan[400],
  secondaryHover: palette.cyan[300],
  secondaryPressed: palette.cyan[500],
  secondarySoft: "rgba(57, 255, 20, 0.15)",
  onSecondary: palette.slate[950],
  /** Heat / streak / warning. */
  warning: palette.amber[400],
  /** Whistle / danger / stop. */
  danger: palette.rose[500],
  /** Live indicator. */
  live: palette.rose[500],
} as const;

export type SemanticColor = keyof typeof semanticColors;
