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
        'gradient-main': 'linear-gradient(to left bottom, #eedfc3, #eee6cc, #eeecd6, #f0f2e0, #f3f8ea, #f3f8ec, #f4f9ed, #f4f9ef, #f0f5e9, #edf0e3, #eaecdc, #e7e7d6)',
      },
    },
  },
  plugins: [],
}
export default config
