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
        '25': '6.25rem',
        'contact-bgc': '#f8f7f6',
        'card-bg': '#dcdcdc',
      },
    },
  },
  plugins:
    ['preline/plugin'],
}
