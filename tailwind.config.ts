import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#BF9C45',
        'purple': '#1B2137',
        'light-purple': '#2A334D'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}
export default config
