/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'line-seed-sans-th' : ['Line Seed Sans TH' , 'sans-serif'],
      },
    },
  },
  plugins: [],
}

