// @ts-check
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    '@nuxt/eslint-config',
  ],
  root: true,
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'vue/multi-word-component-names': 'warn',
  },
}
