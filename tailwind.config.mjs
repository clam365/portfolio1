/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'spotify': '#3cda64',
        'slight-black': '#141517',
        'newGray': '#808080',
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
