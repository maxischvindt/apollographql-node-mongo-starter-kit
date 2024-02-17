module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'eslint:recommended', 'plugin:import/recommended'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '(^_|resolve|reject)' }],
    'jest/no-test-callback': 'off'
  }
}
