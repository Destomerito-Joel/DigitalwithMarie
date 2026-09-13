import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        background: '#15161B',
        surface: '#1C1F27',
        card: '#20232C',
        primary: '#3C5DFC',
        secondary: '#7350F7',
        text: '#F3F5F9',
        muted: '#A6A9B5',
        border: '#303441',
        ivory: '#15161B',
        charcoal: '#F3F5F9',
        accent: '#3C5DFC',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
