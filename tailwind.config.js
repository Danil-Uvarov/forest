/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            screens: { default: "1715px" },
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors:{
                'green':'#00CC3A',
                'blackGray': '#0D1B05',
                'dark': '#000000',
            },
            fontFamily:{
                'museoModerno' : ['MuseoModerno']
            },
            backgroundImage:{
                    'bgPage': "url('/img/planeta-tree-bg.webp')",
                    'bgMainPage': "url('/img/planeta-tree-bg-main.webp')",
                    'bgAboutUs': "url('/img/about-us-bg.webp')",
                'bgForestProblem': "url('/img/forest-problem-bg.webp')"
            }
        },
    },
    plugins: [],
}