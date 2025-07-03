/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated brand colors with full scale - TekLumen theme
        primary: {
          50: '#F8F9FA', // Very light gray
          100: '#F1F3F4', // Light gray
          200: '#E8EAED', // Medium light gray
          300: '#DADCE0', // Medium gray
          400: '#BDC1C6', // Darker gray
          500: '#9AA0A6', // Base gray
          600: '#FFFFFF', // Pure white (primary)
          700: '#F8F9FA', // Light gray for darker variant
          800: '#E8EAED', // Medium gray for dark variant
          900: '#DADCE0', // Darker gray for darkest variant
          DEFAULT: '#FFFFFF' // Pure white
        },
        secondary: {
          50: '#F8F9FA', // Very light gray
          100: '#F1F3F4', // Light gray
          200: '#E8EAED', // Medium light gray
          300: '#DADCE0', // Medium gray
          400: '#9AA0A6', // Medium dark gray
          500: '#5F6368', // Dark gray
          600: '#000000', // Pure black (secondary)
          700: '#1F2937', // Dark gray for hover variant
          800: '#111827', // Very dark gray
          900: '#030712', // Near black
          DEFAULT: '#000000' // Pure black
        },
        // Additional utility colors
        'bg-light': '#F9FAFB',
        'text-main': '#1F2937',
        'border-gray': '#E5E7EB',
        success: '#10B981',
        danger: '#EF4444',
        // Standard gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      // Touch-optimized sizes for Ghanaian mobile users
      spacing: {
        'touch-min': '3rem', // 48px - minimum touch target
        'touch-safe': '4rem' // 64px - comfortable touch area
      },
      borderRadius: {
        teklumen: '0.375rem' // Consistent border-radius
      }
    }
  },
  darkMode: 'class', // Enable dark mode
  plugins: [
    require('@tailwindcss/forms') // Add forms plugin
  ]
}
