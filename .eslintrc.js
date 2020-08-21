module.exports = {
  root: true,
  env: {
    node: true
  },
<<<<<<< HEAD
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
=======
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
<<<<<<< HEAD
    "@typescript-eslint/no-explicit-any": "off"
=======
    "no-useless-catch": "off"
>>>>>>> f6b52c979dad93a753c2d2bd3780fcafe89068ff
  }
};
