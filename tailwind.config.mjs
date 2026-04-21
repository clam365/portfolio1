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
        'brand-primary': "var(--color-brand-primary)",

        'surface-base': "var(--color-surface-base)",
        'surface-decorative': "var(--color-surface-decorative)",
        'surface-raised': "var(--color-surface-raised)",

        'border': "var(--color-border)",

        'primary': "var(--color-text-primary)",
        'secondary': "var(--color-text-secondary)",
        'tertiary': "var(--color-text-tertiary)",

        'button': "var(--color-button-text)",
        'button-bg-primary': "var(--color-button-bg-primary)",
        'button-bg-primary-hover': "var(--color-button-bg-primary-hover)",
        'button-bg-outline-hover': "var(--color-button-bg-outline-hover)",
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
