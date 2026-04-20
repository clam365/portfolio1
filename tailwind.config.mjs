/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libreBaskerville: ['Libre Baskerville', 'serif'],
      },
      colors: {
        'white': "var(--color-white)",
        'black': "var(--color-black)",
        'gray': "var(--color-gray)",
        'content-bg': "var(--color-content-bg)",
        'content-border': "var(--color-content-border)",
        'brand-primary': "var(--color-brand-primary)",
        'surface-decorative': "var(--color-baby-blue-300)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
          {
            '.all-unset': {
              all: 'unset',
            },
          },
          ['responsive', 'hover']
      );
    },
  ],
  darkMode: 'class',
};
