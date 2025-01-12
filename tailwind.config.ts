import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: colors.current,
      transparent: colors.transparent,
      white: colors.white,
      black: "#1e2046",
      primary: "#151730",
      yellow: colors.yellow,
      body_color: "#959CB1",
      red: colors.red,
      pink: colors.pink,
      purple: colors.purple
    },
    screens: {
      "2xs": "340px",
      
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
export default config
