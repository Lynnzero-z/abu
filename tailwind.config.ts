import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        meadow: "#EDF4E3",
        sage: "#A9C58F",
        ink: "#35483A",
        mist: "#DDEFF0",
        butter: "#F2DEA0",
        blush: "#E6C3BC",
        lilac: "#CBC5DF",
        paper: "#FAF8F0",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(53, 72, 58, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
