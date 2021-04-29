// eslint-disable-next-line no-undef
module.exports = {
  extends: ["codingitwrong", "plugin:cypress/recommended"],
  parser: "babel-eslint",
  plugins: ["cypress", "jest", "react"],
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    jquery: true,
  },
  rules: {
    "no-redeclare": "error",
    "no-use-before-define": ["error"],
  },
};
