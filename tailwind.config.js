/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //Poppins and inter fonts 
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
 
    extend: {
      colors: {
        'black':'#000000',
        'light1': '#18DD98',
        'white': '#ffffff',
        'dark1' : '#19353f',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: {
        "banner": "url('/stone.jpg')",
      }
    },
  },
  plugins: [
    // ...
],
}