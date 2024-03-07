/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "358px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    // fontFamily: {
    // sans: ["ui-sans-serif", "system-ui"],
    // serif: ["ui-serif", "Georgia"],
    // mono: ["ui-monospace", "SFMono-Regular"],
    // display: ["Oswald"],
    // body: ['"Open Sans", "Inter", "Dancing Script", "Roboto", "Bebas Neue",'],
    // },
  },
  plugins: [],
};