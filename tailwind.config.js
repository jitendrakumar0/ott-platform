const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|badge|button|dropdown|input|user|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'poppins': ['"Poppins", sans-serif'],
    }
  },
  plugins: [
    nextui(),
    require('autoprefixer')
  ],
};
