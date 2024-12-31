import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hilight-p": "#D99904",
        hr: "#E8E8E8"
      }
    },
  },
  plugins: [daisyui],
}

