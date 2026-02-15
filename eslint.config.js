import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: { ...globals.node, ...globals.jest } } },
  globalIgnores(['**/coverage/**', '**/dist/**', '**/templates/**']),
  {
    rules: {
      // Formatting
      'indent': ['error', 2, { SwitchCase: 1 }],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      'space-infix-ops': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'padded-blocks': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',

      // Best practices
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'no-param-reassign': ['error', { props: false }],
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-return-assign': ['error', 'always'],
      'no-throw-literal': 'error',
      'no-new-wrappers': 'error',
      'no-loop-func': 'error',
      'curly': ['error', 'multi-line'],
      'dot-notation': 'error',
      'no-multi-assign': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'radix': 'error',

      // Variables
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-shadow': 'error',
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'no-undef': 'error',

      // ES6+
      'no-duplicate-imports': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'object-shorthand': ['error', 'always'],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'template-curly-spacing': ['error', 'never'],

      // Project-specific overrides
      'no-console': 0,
    },
  },
]);
