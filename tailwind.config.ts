
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
        border: "#6E59A5",
        input: "#7E69AB",
        ring: "#9b87f5",
        background: {
          DEFAULT: '#1A1F2C',
          foreground: '#D6BCFA',
        },
        primary: {
          DEFAULT: '#9b87f5',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#7E69AB',
          foreground: '#F1F0FB',
        },
        accent: {
          DEFAULT: '#6E59A5',
          foreground: '#F2FCE2',
        },
        muted: {
          DEFAULT: '#8E9196',
          foreground: '#D3E4FD',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
