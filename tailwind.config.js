/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'scaleX(1)' }, // start at full width
          '50%': { transform: 'scaleX(0.3)' }, // shrink a bit
          '100%': { transform: 'scaleX(1)' }, // back to full
        },
      },
      animation: {
        slide: 'slide 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
