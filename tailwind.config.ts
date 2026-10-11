import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0B3D2E',
        forestDeep: '#082C21',
        gold: '#C89B3C',
        goldLight: '#E8C468',
        cream: '#FAF9F5',
        ink: '#1C2620',
      },
    },
  },
  plugins: [],
};

export default config;
