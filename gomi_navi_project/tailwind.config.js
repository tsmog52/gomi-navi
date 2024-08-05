/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/js/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // カスタムカラーを追加
        'primary-font': '#8f9faa',
        'background': '#e0efff',
      },
    },
  },
  plugins:
    ['preline/plugin'],
}
