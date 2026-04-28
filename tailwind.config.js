/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fff9fb",
        ink: "#2f2328",
        pine: "#a24b6b",
        sage: "#f7dfe8",
        petal: "#ff8fb3",
        blush: "#ffe4eb",
        lilac: "#d9d0ff",
        mint: "#d8edff",
        marigold: "#ead8c4"
      },
      boxShadow: {
        sketch: "8px 10px 0 rgba(162, 75, 107, 0.18)",
        button: "0 8px 18px rgba(162, 75, 107, 0.22)"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
        hand: ["Segoe Print", "Bradley Hand ITC", "Comic Sans MS", "cursive"],
        poster: ["Cooper Black", "Arial Black", "Impact", "sans-serif"]
      }
    }
  },
  plugins: []
};
