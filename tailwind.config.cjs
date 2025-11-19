/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Neo둥근모", "NeoDunggeunmo", "sans-serif"],
                mono: ["Neo둥근모 Code", "NeoDunggeunmo Code", "monospace"],
            },
        },
    },
    plugins: [],
}