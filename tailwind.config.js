module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#023344',
        secondary: '#05A6DE',
        tertiary: '#1A2529',
        darkblue: '#263237',
        blue: '#040F2D',
        
      },
      fontSize: {
        'xs': '0.75rem',      // Extra small font size
        'sm': '0.875rem',     // Small font size
        'base': '1rem',       // Base font size
        'lg': '1.125rem',     // Large font size
        'xl': '1.25rem',      // Extra large font size
        '2xl': '1.5rem',      // 2x large font size
        '3xl': '1.875rem',    // 3x large font size
        '4xl': '2.25rem',     // 4x large font size
        '5xl': '3rem',        // 5x large font size
        '6xl': '4rem',        // 6x large font size
      },
      fontWeight: {
        'hairline': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
};
