module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)', // Dark Blue
        'header-cyna': 'var(--header-cyna)', // Bright Cyan
        'nav-hover': 'var(--nav-hover)', // Soft Cyan
        'bt-hover': 'var(--bt-hover)', // Slightly Darker Blue
        'accent-cyan': '#00e5ff',
        'dark-bg': '#060d19',
        'icon-bg': '#1c1c24',
      },
      boxShadow: {
        'glow': '0 0 8px rgba(0,229,255,0.5)',
      },
      fontFamily: {
        'para-all': ['var(--para-all)'], // Montserrat
        'track-header': ['var(--track-header)'], // Outfit
        'font-footer': ['var(--font-footer)'], // Poppins
        'delivery': ['Delivery', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'border-animation': {
          '0%': { borderWidth: '1px', borderColor: '#00e5ff' },
          '50%': { borderWidth: '2px', borderColor: '#00E0FF' },
          '100%': { borderWidth: '2px', borderColor: '#00E0FF' },
        },
      },
      animation: {
        'border-animation': 'border-animation 0.5s forwards',
      },
    },
  },
  plugins: [],
};