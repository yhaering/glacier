import type { Linter } from 'eslint';

export function buildTests(): Linter.ConfigOverride<Linter.RulesRecord> {
  return {
    files: ['**/*.test.*', '**/__mocks__/**/*'],
    plugins: ['jest'],
    extends: ['plugin:jest/recommended', 'plugin:jest-formatting/recommended'],
    env: {
      'jest/globals': true
    },
    rules: {
      'max-lines': 'off',
      'sonarjs/no-duplicate-string': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'unicorn/no-null': 'off'
    }
  };
}
