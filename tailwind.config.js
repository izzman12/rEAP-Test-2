/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}", 
  "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Custom blue
      },
    },
  },
  plugins: [],
};
