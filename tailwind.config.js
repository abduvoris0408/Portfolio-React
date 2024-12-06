/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                parkinsans: ['"Parkinsans", sans-serif'],
                fontArrows: ['"Parkinsans", sans-serif'],
            },
            colors: {
                bgprimary: "rgba(24,24,27)",
                bgmuted: "rgba(255,255,255,0.5)",
            },
            backgroundImage: {
                hero: "url('./src/img/body.png')",
            },
        },

        screens: {
            xs: "320px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
};
