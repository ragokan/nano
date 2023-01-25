/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["node_modules/", ".nuxt/", "dist/", "coverage/", "*.vue"],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@nuxtjs/eslint-config-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    indent: "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    curly: ["error", "all"],
    eqeqeq: "error",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-control-regex": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
