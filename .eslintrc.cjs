module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': 'error',
    'eqeqeq': ['error', 'smart'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-shadow': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', { 'functions': false }],
    'no-var': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'none'],
    'prefer-arrow-callback': 'error',
    'quotes': ['error', 'single'],
    'react/no-unescaped-entities': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': ['error', { 'multiline': 'consistent', 'singleline': 'consistent' }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', { 'declaration': 'parens', 'logical': 'parens-new-line' }],
    'react/prop-types': 'off',
    'semi': 'error',
    'space-before-blocks': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
