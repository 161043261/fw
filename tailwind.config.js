/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Yuanti SC', 'YouYuan'],
      serif: ['Yuanti SC', 'YouYuan'],
      mono: ['Menlo', 'Cascadia Code', 'monospace']
    }
  },
  plugins: []
}
