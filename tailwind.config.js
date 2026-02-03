/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxs: "0px",
        xs: "380px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl": "1600px",
      },
      fontFamily: {
        roboto: ['"Roboto"'],
        lufga: ['"Lufga"'],
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        "app-primary": {
          50: "var(--app-primary-50)",
          100: "var(--app-primary-100)",
          500: "var(--app-primary-500)",
          600: "var(--app-primary-600)",
          800: "var(--app-primary-800)",
          900: "var(--app-primary-900)",
          text: "var(--app-primary-text)",
        },
        "app-secondary": {
          50: "var(--app-secondary-50)",
          100: "var(--app-secondary-100)",
          200: "var(--app-secondary-200)",
          300: "var(--app-secondary-300)",
          400: "var(--app-secondary-400)",
          500: "var(--app-secondary-500)",
          800: "var(--app-secondary-800)",
          900: "var(--app-secondary-900)",
          text: "var(--app-secondary-text)",
        },
        "app-bg": {
          primary: "var(--app-bg-primary)",
          secondary: "var(--app-bg-secondary)",
        },
        "app-text": {
          primary: "var(--app-text-primary)",
          secondary: "var(--app-text-secondary)",
        },
        "app-white": "var(--app-white)",
        "app-black": "var(--app-black)",
        "app-success": "var(--app-success)",
        "app-warning": "var(--app-warning)",
        "app-error": "var(--app-error)",
      },
    },
  },
  plugins: [],
};

