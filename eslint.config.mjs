import babelParser from '@babel/eslint-parser';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
