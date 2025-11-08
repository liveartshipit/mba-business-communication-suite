module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220, 8%, 90%)",
        input: "hsl(220, 8%, 90%)",
        ring: "hsl(12, 78%, 64%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(220, 26%, 10%)",
        primary: {
          DEFAULT: "hsl(218, 43%, 19%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(216, 30%, 38%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(12, 78%, 64%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(48, 21%, 96%)",
          foreground: "hsl(218, 43%, 19%)",
          50: "hsl(0, 0%, 98%)",
          100: "hsl(220, 10%, 96%)",
          200: "hsl(220, 8%, 90%)",
          300: "hsl(220, 7%, 80%)",
          400: "hsl(220, 6%, 60%)",
          500: "hsl(220, 7%, 45%)",
          600: "hsl(220, 9%, 36%)",
          700: "hsl(220, 11%, 25%)",
          800: "hsl(220, 18%, 17%)",
          900: "hsl(220, 26%, 10%)",
        },
        success: "hsl(145, 38%, 45%)",
        warning: "hsl(36, 78%, 55%)",
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(220, 10%, 96%)",
          foreground: "hsl(220, 9%, 36%)",
        },
        accent: {
          DEFAULT: "hsl(12, 78%, 64%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 26%, 10%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 26%, 10%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
        heading: ['"IBM Plex Sans"', "sans-serif"],
      },
      fontSize: {
        h1: ["2.827rem", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        h2: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        h3: ["1.414rem", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        h4: ["1rem", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        base: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.4" }],
        large: ["1.25rem", { lineHeight: "1.5" }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "8px",
        md: "8px",
        sm: "8px",
        card: "24px",
      },
      backgroundImage: {
        'gradient-1': "linear-gradient(135deg, hsl(218, 43%, 19%) 0%, hsl(216, 30%, 38%) 100%)",
        'gradient-2': "linear-gradient(135deg, hsl(218, 43%, 19%) 0%, hsl(12, 78%, 64%) 100%)",
        'button-border-gradient': "linear-gradient(90deg, hsla(218, 43%, 19%, 0.8) 0%, hsla(12, 78%, 64%, 0.8) 100%)",
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
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
