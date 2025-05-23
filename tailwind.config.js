/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'sm': '480px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1368px',
      // 'md-lg': '1368px',
      '2xl': '1536px',
      // Add custom breakpoints here
      '3xl': '1650px',
    },
    extend: {
      colors: {
        grey: '#808080',
        orange: '#FFA500',
        black: '#000000',
        white: '#FFFFFF',
        // yellow: '#FFFF00',
        // red: '#FF0000',
        blue: '#0000FF',
        maincolor: '#6935d3',
        mainbgcolor: '#F4F3FF', // light purple color
        maintextcolor: '#6935D3', // purple text color
        bgactive: '#12B76A1A', // light green color 
        textactive: '#12B76A', // green text color
        bgdraft: '#6935D31A', // light gray color 
        btnhover: "#4c15bc",
        linkcolor: "#4010b7",
        iconcolor: "#101828",
        subicon: "#6935d3",
        labelcolor: "#101828",
        subtitle: "#98a2b3",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      
    },
  },
  plugins: [require("tailwindcss-animate")],

}