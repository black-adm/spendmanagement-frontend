import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: {
        'primary-black': '#191919',
        'primary-gray': '#DDDDDD',
        'primary-red': '#C00',
        'primary-orange' :'#EC7000',
        'primary-green': '#55A630',
        'medium-orange': '#FF8700',
        'light-orange': '#FFAB3B',
        'light-gray': '#EEEEEE',
        'yellow-orange': '#FFD12F',
      }
    },
  },
  plugins: [],
}
export default config
