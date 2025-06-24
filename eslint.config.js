import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';


export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: { ...globals.node, ...globals.jest } } },
  globalIgnores(['**/coverage/**', '**/dist/**', '**/templates/**']),
  {
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 0,
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'eqeqeq': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
]);
