module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  
  // daisyUI config (optional)
  daisyui: {
    themes: ["light",],
  },

  plugins: [require("daisyui")],
}
