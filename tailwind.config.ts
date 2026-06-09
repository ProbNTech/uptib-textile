import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-default)",
        foreground: "var(--text-primary)",
        card: "var(--bg-white)",
        "card-foreground": "var(--text-primary)",
        popover: "var(--bg-white)",
        "popover-foreground": "var(--text-primary)",
        muted: "var(--bg-alt)",
        "muted-foreground": "var(--text-muted)",
        border: "var(--border-default)",
        input: "var(--border-default)",
        ring: "var(--primary)",
        primary: {
          DEFAULT: "#2F7549",
          hover: "#245C3A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "var(--bg-alt)",
          foreground: "var(--text-primary)",
        },
        accent: {
          DEFAULT: "var(--bg-alt)",
          foreground: "var(--text-primary)",
          green: "#3E8F5E",
          "green-hover": "#2F7549",
        },
        /* Natural green brand scale (from logo waves) — PRIMARY lead */
        green: {
          50: "#EEF6F0",
          100: "#D7EADD",
          200: "#B3D7C0",
          500: "#4FA873",
          600: "#3C8F5E",
          700: "#2F7549",
          800: "#245C3A",
          900: "#15402A",
        },
        /* Muted blue — minor accent only (from logo emblem); never the lead */
        blue: {
          500: "#3A6BA5",
          700: "#2A5689",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        /* Editorial palette tokens — soft green-tinted neutrals */
        editorial: {
          bg: "#F1F5F1",
          "bg-alt": "#E8EFE9",
          rule: "#DCE2DC",
          dark: "#16291E",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        heading: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // ─── Header / Navigation ───────────────────────────────────
        "nav-label":  ["10px", { lineHeight: "1", letterSpacing: "0.13em" }],   // taglines, CTA buttons, micro-labels
        "nav-item":   ["15px", { lineHeight: "1.2", letterSpacing: "0.12em" }], // top-bar nav links (Home, About…)
        "nav-cta":    ["11px", { lineHeight: "1", letterSpacing: "0.14em" }],   // "Become a Member" button text

        // ─── Mega-panel dropdown ───────────────────────────────────
        "panel-eyebrow":  ["11px", { lineHeight: "1", letterSpacing: "0.2em" }],  // "Who we are", "Section index"
        "panel-title":    ["32px", { lineHeight: "1.1", letterSpacing: "-0.01em" }], // Left-col section title
        "panel-item":     ["17px", { lineHeight: "1.3", letterSpacing: "0" }],    // Centre-col item label
        "panel-desc":     ["14px", { lineHeight: "1.7", letterSpacing: "0" }],    // Centre-col item description
        "panel-quote":    ["22px", { lineHeight: "1.3", letterSpacing: "-0.01em" }], // Right-col pull-quote
        "panel-body":     ["14px", { lineHeight: "1.7", letterSpacing: "0" }],    // Right-col body copy
        "panel-index":    ["12px", { lineHeight: "1", letterSpacing: "0" }],      // "01", "02" index numbers

        // ─── Mobile drawer ─────────────────────────────────────────
        "mobile-group":   ["13px", { lineHeight: "1.2", letterSpacing: "0.16em" }], // Group accordion labels
        "mobile-item":    ["14px", { lineHeight: "1.3", letterSpacing: "0" }],    // Sub-item labels
        "mobile-desc":    ["12px", { lineHeight: "1.6", letterSpacing: "0" }],    // Sub-item descriptions
        "mobile-cta":     ["11px", { lineHeight: "1", letterSpacing: "0.14em" }], // Drawer CTA buttons
      },
      maxWidth: {
        content: "1200px",
        container: "var(--container-width)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
        full: "9999px",
      },
      spacing: {
        section: "var(--space-section)",
        "section-lg": "var(--space-section-lg)",
        "section-xl": "var(--space-section-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "glow-primary": "var(--shadow-glow-primary)",
        "glow-hover": "var(--shadow-glow-hover)",
      },
      keyframes: {
        "shimmer-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(47, 117, 73, 0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(47, 117, 73, 0.1)" },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        shimmer: "shimmer-sweep 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        "ticker-scroll": "ticker-scroll 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
