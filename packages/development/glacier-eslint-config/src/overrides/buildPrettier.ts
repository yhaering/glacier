import type { Linter } from 'eslint';

export function buildPrettier(): Linter.ConfigOverride<Linter.RulesRecord> {
  return {
    files: ['*'],
    extends: ['prettier'],
    rules: {
      '@typescript-eslint/ban-types': 'off'
    }
  }
}
