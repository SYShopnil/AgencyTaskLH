/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['PublicSans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
        '2xl': '1352px',
        'max-md': { raw: '(max-width: 991px)' },
        'max-sm': { raw: '(max-width: 767px)' },
      },
      colors: {
        primary_yellow: '#FFCB05',
        primary_blue: '#2B73B9',
        secondary_light_green: '#9BCC50',
        secondary_light_violet: '#B97FC9',
        secondary_orange: '#FC7C23',
        secondary_pink: '#F366B9',
        secondary_blue: '#4592C4',
        secondary_deep_green: '#729F3F',
        accent_gray: '#D9D9D9',
        accent_black: '#000000',
        light_blue: '#3DC7EF',
        //This color will applied in this application
        primary_500: '#90E900',
        primary_300: '#BCF266',
        secondary_500: '#EFE600',
        secondary_300: '#F5F066',
        neutral_500: '#1E2A37',
      },
      backgroundImage: {
        primaryGradient:
          'linear-gradient(90deg, #90E900 0.33%, #EFE600 100.33%)',
      },
      fontSize: {
        base: ['0.875rem', { lineHeight: '150%', fontWeight: 400 }],
        base_2: ['1rem', { lineHeight: '150%', fontWeight: 400 }],
        md: ['1.25rem', { lineHeight: '130%', fontWeight: 500 }],
        lg: ['1.75rem', { lineHeight: '130%', fontWeight: 500 }],
        xl: ['2.5rem', { lineHeight: '120%', fontWeight: 500 }],
        '2xl': ['4rem', { lineHeight: '110%', fontWeight: 600 }],
        '3xl': ['6rem', { lineHeight: '110%', fontWeight: 600 }],
      },
      keyframes: {},
      animation: {},
      borderRadius: {
        none: '0',
        primary: '1.5rem',
        secondary: '2.5 rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
