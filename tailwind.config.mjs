/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cip: {
          ink: "#1C1815",
          cloud: "#F7F3ED",
          maize: "#D9B24C",
          copper: "#B76A3C",
          mineral: "#5E7466",
          blue: "#1C1815",
          navy: "#1C1815",
          gold: "#D9B24C",
          goldHover: "#D9B24C",
          green: "#5E7466",
          cream: "#F7F3ED",
          paper: "#F7F3ED",
          warm: "#EFE8DC",
          mist: "#E8EEE9",
          clay: "#B76A3C",
          body: "#4E4944",
          border: "#DED2C3"
        }
      },
      boxShadow: {
        soft: "0 18px 46px rgba(28, 24, 21, 0.10)",
        lift: "0 28px 70px rgba(28, 24, 21, 0.18)",
        gold: "0 18px 44px rgba(183, 106, 60, 0.24)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
