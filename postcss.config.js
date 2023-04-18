module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    "postcss-preset-env",
    [
      "tailwindcss",
      {
        // Importante: use a mesma configuração de purge do arquivo tailwind.config.js
        purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      },
    ],
  ],
};
