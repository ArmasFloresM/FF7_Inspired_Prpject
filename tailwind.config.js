/** @type {import('tailwindcss').Config} */

import {colorAvailables} from './src/data/Colors'



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
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {

        
      }
      
        
      
    },
  },
  plugins: [],
}