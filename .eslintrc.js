module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'vue/multi-word-component-names': 'off'
  },
}
