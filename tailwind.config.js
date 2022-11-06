module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: true, // or 'media' or 'class'
  variants: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('~/assets/img.png')",
      },
    },
  },
  plugins: [],
};
