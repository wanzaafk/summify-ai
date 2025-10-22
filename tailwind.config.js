// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}" // <-- include your styles folder
  ],
  theme: {
    extend: {
      opacity: {
        15: '0.15', // allows `opacity-15` class
      },
      height: {
        fit: 'fit-content', // allows `h-fit` class
      },
      maxWidth: {
        '640': '640px', // ensures max-w-[640px] works
      },
    },
  },
  plugins: [],
}
