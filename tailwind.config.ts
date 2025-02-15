import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  darkMode: ['class'],
  content: {
    files: [
      './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      backgroundImage: {
        'black-gradient':
          'linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)',
        'black-gradient-ni':
          'linear-gradient(153.47deg,rgba(255, 255, 255, 0) -341.94%,#14101d 95.11%)',
        'blue-gradient':
          'linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)',
        'gray-gradient':
          'linear-gradient(153.47deg,rgba(255, 255, 255, 0) -341.94%, #14101d 95.11%)',
        'pink-gradient':
          'linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)',
        'turq-linear-gradient':
          'linear-gradient(158deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)',
        'turq-radial-gradient':
          'radial-gradient(64.33% 64.33% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)',
      },
      borderRadius: {
        sxl: '0.625rem',
      },
      boxShadow: {
        shade: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        turq: '#5CE1E6',
        'mute-white': 'rgba(255, 255, 255, 0.70)',
      },
      screens: {
        '7l': '74rem',
      },
    },
  },
  plugins: [fluid, require('tailwindcss-animate')],
} satisfies Config;
