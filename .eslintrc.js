module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,

    'react-hooks/exhaustive-deps': 1,
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
  },
};
