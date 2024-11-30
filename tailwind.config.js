/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'global' : ['montserrat', 'sans-serif', 'poppins'],
        'open-sans' : ['Open sans', 'sans-serif', 'poppins'],
      },
      colors: {
        'primary' : '#80d0c7',
        'second' : '#00557A',
        'third' : '#E4F1FF',
        'title' : '#091514',
        'para' : '#717275',
      },
      screens : {
        'ss' : '360px',
        'ssm' : '540px',
        'mm' : '992px',
        'xm' : '1200px',
        'xx' : '1400px',
      },
      backgroundImage :{
        'finance' : 'url("../images/businesswoman-using-tablet-analysis.jpg")',
        'working' : 'url("../images/colleagues-working-cozy-office-medium-shot.jpg")',
      },
    },
  },
  plugins: [],
}