module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths according to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Set the default primary color to black
          // Add more shades if needed
        },
        secondary: {
          DEFAULT: '#fff4d9', // Example secondary color
          // Add more shades if needed
        },
        tertiary: {
          DEFAULT: '#f2f2f2', // Example tertiary color
          // Add more shades if needed
        },
      },
      fontFamily: {
        base: ['Roboto', 'Arial', 'sans-serif'], // Base font family
      },
      boxShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.16)', // Default box shadow
        hover: '0 4px 6px rgba(0, 0, 0, 0.32)', // Hover box shadow
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
