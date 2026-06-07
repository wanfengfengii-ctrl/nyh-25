/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@skeletonlabs/skeleton/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'sundial-gold': '#f59e0b',
        'sundial-copper': '#92400e',
        'sundial-blue': '#38bdf8',
        'sundial-dark': '#0f172a',
        'sundial-darker': '#020617'
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
