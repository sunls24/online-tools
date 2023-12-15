import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--rounded-box": "0.375rem",
          "--rounded-btn": "0.375rem",
        },
      },
    ],
  },
};
export default config;
