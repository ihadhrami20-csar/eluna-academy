module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#0A2540',
        'turquoise': '#4FB4C6',
        'sky-blue': '#6CB4EE',
        'soft-gold': '#F4C95D',
        'charcoal': '#1A1A1A',
        'deep-ocean-blue': '#0A2540',
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(135deg, #4FB4C6 0%, #6CB4EE 100%)',
      }
    },
  },
  plugins: [],
}
