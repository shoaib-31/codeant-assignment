import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
      },
      boxShadow: {
        "all-sides":
          "0 4px 10px rgba(0, 0, 0, 0.05), 0 -4px 10px rgba(0, 0, 0, 0.05), 4px 0 10px rgba(0, 0, 0, 0.05), -4px 0 10px rgba(0, 0, 0, 0.05)",
      },
      borderColor: {
        DEFAULT: "#E9EAEB",
      },
    },
  },
  plugins: [],
} satisfies Config;
