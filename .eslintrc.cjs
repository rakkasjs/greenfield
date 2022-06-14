require("@cyco130/eslint-config/patch");

module.exports = {
  root: true,
  extends: ["@cyco130/eslint-config/react"],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
