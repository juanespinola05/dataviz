/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: '#12475e',
        red: '#ba2525',
        aquamarine: '#7bdde6',
        yellow: '#f7d156'
      }
    }
  },
  plugins: []
}
