module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': ['error', { 'allow': ['info', 'warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
