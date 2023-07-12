/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    colors: {
      'dark-grey': '#5D5D6D',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#F3F5F6',
      white: '#ffffff',
      black: '#000000',
      red: '#DE3838',
      gray: '#DEDEDE',
      orange: '#FFA585',
      light: '#E9E9F0',
      dark: '#41414D',
      'blue-gray': '#617480',
      'brand-blue': '#115D8C',
    },
    theme: {
      extend: {
        fontFamily: {
          saira: ['var(--font-saira)'],
        },
      },
    },
  },
  plugins: [],
}
