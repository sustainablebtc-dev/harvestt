import type { Config } from "tailwindcss";

/**
 * Harvestt Design System — Tailwind Configuration
 *
 * This config is the engineering implementation of tokens defined in:
 *   .github/instructions/design-system/tokens.json
 *
 * All token values must stay in sync with tokens.json.
 * Do NOT add arbitrary values in component files — extend this config instead.
 *
 * Figma source: FRYoDiBSYuje0Nk9fNedRp / node 5:1089
 */

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // ─── Screens / Breakpoints ────────────────────────────────────────────────
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },

    // ─── Container ────────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem", // 20px — mobile
        sm: "2.5rem",       // 40px
        lg: "5rem",         // 80px — matches Figma gutter
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    // ─── Font Family ──────────────────────────────────────────────────────────
    fontFamily: {
      geist: ["var(--font-geist)", "sans-serif"],      // Inter is loaded italic-only — use `font-inter italic` for pull-quotes/block-quotes      inter: ["var(--font-inter)", "sans-serif"],
      sans:  ["var(--font-geist)", "sans-serif"], // override default sans
    },

    // ─── Border Radius ────────────────────────────────────────────────────────
    // Zero radius system — all corners are square
    borderRadius: {
      none:    "0px",
      DEFAULT: "0px", // ensures `rounded` = `rounded-none`
    },

    extend: {
      // ─── Colors ─────────────────────────────────────────────────────────────
      colors: {
        // Brand
        brand:  "#1b1b1b",
        accent: "#ff6e00",

        // Semantic
        success:     "#289e4b",
        "success-bg": "rgba(40, 158, 75, 0.10)",

        // Text
        text: {
          primary:   "#1b1b1b",
          dark:      "#000000",
          body:      "#3a3a3a",
          secondary: "#555555",
          muted:     "#a3a3a3",
        },

        // Backgrounds
        bg: {
          white: "#ffffff",
          muted: "#f5f5f5",
          warm:  "#fff6f0",
          dark:  "#1b1b1b",
        },

        // Borders
        border: {
          default:   "#e5e5e5",
          brand:     "#1b1b1b",
          accent:    "#ff6e00",
          separator: "#a3a3a3",
        },
      },

      // ─── Typography Scale ────────────────────────────────────────────────────
      fontSize: {
        // Display — Hero-level headings
        "display-1": ["64px", { lineHeight: "1.2", letterSpacing: "-0.03125em", fontWeight: "700" }],
        "display-2": ["48px", { lineHeight: "1.2", letterSpacing: "-0.0208em",  fontWeight: "700" }],

        // Headings — Section and component headings
        "heading-2": ["36px", { lineHeight: "1.2", letterSpacing: "-0.0278em",  fontWeight: "700" }],
        "heading-3": ["24px", { lineHeight: "1.2", letterSpacing: "-0.0417em",  fontWeight: "700" }],
        "heading-4": ["20px", { lineHeight: "1.2", letterSpacing: "-0.0085em",  fontWeight: "600" }],
        "heading-5": ["14px", { lineHeight: "1.2", letterSpacing: "-0.0121em",  fontWeight: "600" }],

        // Body copy
        "body-lg": ["16px", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-sm": ["14px", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-xs": ["12px", { lineHeight: "1.6", letterSpacing: "0" }],

        // Labels — Functional, uppercase text
        "label-lg": ["13px", { lineHeight: "1.4", letterSpacing: "0.0577em"  }], // Button text
        "label-md": ["11px", { lineHeight: "1.4", letterSpacing: "0.1136em"  }], // Section labels
        "label-sm": ["10px", { lineHeight: "1.4", letterSpacing: "0.1em"     }], // Footer headings
        "label-xs": ["10px", { lineHeight: "1.4", letterSpacing: "0.125em"   }], // Timestamps, categories

        // Tags
        "tag": ["11px", { lineHeight: "1", letterSpacing: "0.0455em" }],
      },

      // ─── Line Heights ────────────────────────────────────────────────────────
      lineHeight: {
        heading: "1.2",
        body:    "1.6",
        label:   "1.4",
      },

      // ─── Letter Spacing ──────────────────────────────────────────────────────
      letterSpacing: {
        "label-xl": "0.1136em", // 1.25px at 11px
        "label-lg": "0.1em",    // 1px at 10px
        "label-md": "0.125em",  // 1.25px at 10px
        "label-sm": "0.0577em", // 0.75px at 13px
        "label-xs": "0.0455em", // 0.5px at 11px
        "heading-xl": "-0.03125em", // -2px at 64px
        "heading-lg": "-0.0278em",  // -1px at 36px
        "heading-md": "-0.0417em",  // -1px at 24px
        "heading-sm": "-0.0085em",  // -0.17px at 20px
        "heading-xs": "-0.0121em",  // -0.17px at 14px
      },

      // ─── Spacing ─────────────────────────────────────────────────────────────
      // Tailwind v3 default uses 4px × n. Most values exist natively.
      // Only adding values that do NOT exist in default Tailwind scale.
      spacing: {
        // Button-specific padding — isolated to button component only
        "btn-x": "33px",  // button horizontal padding
        "btn-y": "17px",  // button vertical padding
        "btn-nav-x": "25px",
        "btn-nav-y": "9px",

        // Large layout values — verify against Tailwind default scale
        // Tailwind default: 20 = 80px ✓, 24 = 96px ✓, 12 = 48px ✓
        // These are confirmed correct in Tailwind v3+
      },

      // ─── Box Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        nav:  "0 1px 0 #a3a3a3",
        none: "none",
      },

      // ─── Max Width ───────────────────────────────────────────────────────────
      maxWidth: {
        "page":    "1440px",
        "content": "1280px",
        "prose":   "672px",   // CTA section text width
        "hero-text": "573px", // Hero content column
        "hero-image": "630px",
        "col-left": "576px",  // Two-col left column
        "col-right": "573px", // Two-col right column
      },

      // ─── Width ───────────────────────────────────────────────────────────────
      width: {
        "page":    "1440px",
        "content": "1280px",
      },

      // ─── Height ──────────────────────────────────────────────────────────────
      height: {
        "hero-image": "831px",
        "table-row":  "72px",
        "table-header": "48px",
      },

      // ─── Background Color (reference) ────────────────────────────────────────
      // Colors are defined above under `colors` — no duplication needed here

      // ─── Transition Timing ───────────────────────────────────────────────────
      transitionTimingFunction: {
        "system": "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        "micro":  "150ms",
        "layout": "250ms",
        "page":   "400ms",
      },
    },
  },

  plugins: [],
};

export default config;
