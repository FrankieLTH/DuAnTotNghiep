/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          earth: '#3E2C23',     // Primary 900 (Deep Earth)
          terracotta: '#C85A32',// Primary 700 (Brand Main Color)
          amber: '#E07A5F',     // Primary 500 (Warm Amber Accent)
          tint: '#FDF0ED',      // Primary 100 (Warm Tint)
        },
        secondary: {
          olive: '#5B7052',     // Olive Pine (Rêu núi)
          herbal: '#7B9074',    // Herbal Mist (Rêu sương)
          sand: '#E8DFD1',      // Warm Sand (Cát nắng)
          cream: '#FDF9F3',     // Cream Clean (Nền kem mộc)
        },
        semantic: {
          success: '#3D7B62',
          successBg: '#EAF4F0',
          warning: '#D9822B',
          warningBg: '#FEF8EC',
          error: '#D14949',
          errorBg: '#FDF0F0',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
