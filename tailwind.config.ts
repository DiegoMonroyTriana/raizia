import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'banner': "url('/back.png')",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        prussianBlue: '#0B3142',
        lvory: '#FFFCE8',
        darkGreen: '#062726',
        orangeCrayola: '#FE5F55',
        goldFusion: '#7B7554',
        lightGreen: '#43eba7',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
