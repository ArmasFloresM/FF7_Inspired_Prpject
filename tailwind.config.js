/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  /*   corePlugins: {
      // otras directivas core que necesites
      preflight: false, // deshabilita la preflight si no la estás usando
    }, */
    
    extend: {
      container: {
        center: true
      }
      
        
      
    },
  },
  plugins: [],
}