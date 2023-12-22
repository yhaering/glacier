import type { Linter } from 'eslint';

export function buildJavascript(): Linter.ConfigOverride<Linter.RulesRecord> {
  return {
    files: ['*'],
    plugins: ['only-error', 'sonarjs'],
    extends: [
      'eslint:recommended',
      'plugin:sonarjs/recommended',
      'plugin:unicorn/recommended'
    ],
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {
      'max-lines': ['error', 50],
      'unicorn/no-array-reduce': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-switch': 'off',
      'sonarjs/cognitive-complexity': ['error', 5]
    }
  };
}
