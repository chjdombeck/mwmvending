/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy: '#2D3192',
        'navy-dark': '#262a80',
        cyan: '#01AEF0',
        ink: '#14172E',
        slate: '#667085',
        mist: '#F4F7FB',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { sm: '8px', md: '16px', full: '999px' },
      boxShadow: {
        card: '0 1px 2px rgba(20,23,46,0.06), 0 4px 12px rgba(20,23,46,0.06)',
        hover: '0 8px 20px rgba(20,23,46,0.10)',
      },
      maxWidth: { content: '1120px' },
    },
  },
};
