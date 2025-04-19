
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: "#E0E0E0",
        input: "#BDBDBD",
        ring: "#9E9E9E",
        background: {
          DEFAULT: '#FFFFFF',
          foreground: '#212121',
        },
        primary: {
          DEFAULT: '#6A5ACD', // Slight purple to maintain brand identity
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#9370DB',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#7B68EE',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#9E9E9E',
          foreground: '#212121',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground) / <alpha-value>)',
        }
      },
      textColor: {
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
