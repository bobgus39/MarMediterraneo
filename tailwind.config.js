import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#E0F4FF',
              100: '#B3E3FF',
              200: '#80D0FF',
              300: '#4DC0FF',
              400: '#26B2FF',
              500: '#0096C7',
              600: '#0077B6',
              700: '#005F8E',
              800: '#004A70',
              900: '#003855',
              DEFAULT: '#0077B6',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
}
