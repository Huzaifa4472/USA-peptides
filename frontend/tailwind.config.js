// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #4f46e5, #ec4899)",
      },
      colors: {
        primary: "#FF020E",
        secondary: "#1155F0",
      },
    },
  },
  plugins: [],
};
