import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {plugins: { 'react-refresh': reactRefresh }},
  {
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
  },
  {
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    }
  },
  {
    plugins: { 'import': importPlugin },
    rules: {
      'semi': 2,
      'indent': [2, 2],
      'quotes': [2, 'single'],
      'no-tabs': 0,
      'eqeqeq': 2,
      'no-console': 1,
      'react/react-in-jsx-scope': 'off',
      'import/newline-after-import': [2, { 'count': 2 }],
      'react/jsx-max-props-per-line': [
        'warn',
        { 'maximum': 2, 'when': 'multiline' }
      ],
      'react/prop-types': 'off',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
    },
  },
];