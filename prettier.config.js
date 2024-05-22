// prettier.config.js
module.exports = (config) = {
  plugins: ["prettier-plugin-jinja-template"],
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "jinja-template",
      },
    },
  ],
};
