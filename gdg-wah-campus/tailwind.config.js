/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                google: {
                    blue: '#4285F4',
                    red: '#EA4335',
                    yellow: '#FBBC05',
                    green: '#34A853',
                    'matt-black': '#202124',
                    grey: '#5F6368',
                    'light-grey': '#F8F9FA'
                }
            },
            fontFamily: {
                sans: ['Google Sans', 'Roboto', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
