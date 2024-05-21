module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-only': { 'max': '991.98px' },
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")]
}
