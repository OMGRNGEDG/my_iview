module.exports = {
  root: true,

  env: {
    node: true
  },
  plugins: ["vue"],

  rules: {
    "no-console": "off",
    "vue/html-self-closing": "off",
    "no-debugger": "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/essential", "@vue/prettier"]
};
