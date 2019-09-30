module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
   'semi': ['error', 'always'],
   'quotes': ['error', 'single'],
   'indent': ['error', 2],
   'object-curly-spacing': [2, 'always'],
   'linebreak-style': ["error", "windows"]
  },
  parser: 'babel-eslint'
};
