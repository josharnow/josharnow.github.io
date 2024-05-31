import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   gray: {
      //     200: "#D5DAE1"
      //   },
      //   black: {
      //     DEFAULT: "#000",
      //     500: "#1D2235"
      //   },
      //   blue: {
      //     500: "#2b77e7"
      //   }
      // },
      // fontFamily: {
      //   worksans: ["Work Sans", "sans-serif"],
      //   poppins: ['Poppins', "sans-serif"]
      // },
      // boxShadow: {
      //   card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      // },
    },
  },
  plugins: [],
};
export default config;
