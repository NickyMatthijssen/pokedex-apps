/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../library/styles/tailwind.config")],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**.ts",
  ],
};
