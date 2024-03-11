const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}' // Add the ui package
  ],
  theme: {
    fontSize: {
      h1: ['5px', { fontWeight: 500 }],
      h1Light: ['55px', { fontWeight: 500 }],
      h2: ['40px', { fontWeight: 400 }],
      h3: ['38px', { fontWeight: 500 }],
      h4: ['30px', { fontWeight: 500 }],
      h5: ['26px', { fontWeight: 500 }],
      h6: ['24px', { fontWeight: 500 }],
      subtitle1: ['22px', { fontWeight: 500, lineHeight: '35px' }],
      subtitle1Light: ['22px', { fontWeight: 300 }],
      subtitle2: ['20px', { fontWeight: 500 }],
      subtitle2Light: ['20px', { fontWeight: 300 }],
      paragraph1Bold: ['18px', { fontWeight: 600 }],
      paragraph1: ['18px', { fontWeight: 500 }],
      paragraph1Light: ['18px', { fontWeight: 400 }],
      paragraph1ExtraLight: ['18px', { fontWeight: 300 }],
      paragraph2: ['16px', { fontWeight: 500 }],
      paragraph2Light: ['16px', { fontWeight: 300, lineHeight: '26px' }],
      tagBold: ['14px', { fontWeight: 600 }],
      tag: ['14px', { fontWeight: 500 }],
      tagLight: ['14px', { fontWeight: 300 }]
    },
    colors: {
      primary: '#141414',
      secondary: '#606060',
      success: '#26AD5C',
      error: '#FF4343',
      warning: '#FFBF1A',
      black: '#000000',
      white: '#FFFFFF',
      bg: '#F5F5F5',
      headerBoxBorder: '#DADADA',
      placeholderText: '#979797',
      transparent: 'transparent'
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif']
    },
    extend: {
      container: {
        center: true
      }
    }
  }
};
