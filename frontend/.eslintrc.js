const builtInModules = require('builtin-modules')

module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-import-helpers', 'react', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: 'off',
    'import/no-anonymous-default-export': 'off',

    // https://github.com/Tibfib/eslint-plugin-import-helpers
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          ['/^react/'],
          [`/^(${builtInModules.join('|')})$/`],
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],

    'jsx-a11y/no-autofocus': 'off',

    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'off',
    'react/no-find-dom-node': 'warn',
    'react/prop-types': 'off',

    'react-hooks/exhaustive-deps': 'warn',

    'no-alert': 'off',
    'no-case-declarations': 'off',
    'no-inner-declarations': 'off',
    'no-prototype-builtins': 'off',
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error', 'dir', 'group', 'groupEnd'],
      },
    ],
  },
  settings: { react: { version: 'detect' } },

  // Typescript Settings Start Here
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: { browser: true, es6: true, node: true },
      globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: [
        'eslint-plugin-import-helpers',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'prettier',
      ],
      extends: [
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
        'airbnb/hooks',
        'react-app',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        semi: 'off',
        'consistent-return': 'warn',
        'no-alert': 'off',

        // '@typescript-eslint/semi': ["never", { "beforeStatementContinuationChars": "always" }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'none',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
            multilineDetection: 'brackets',
          },
        ],

        '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',

        'react/jsx-key': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'warn',
      },
      settings: { react: { version: 'detect' } },
    },
  ],
}