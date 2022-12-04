import type { Linter } from 'eslint';

export function buildConfig(): Linter.Config {
  return {
    extends: ['eslint:recommended'],
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    overrides: [
      {
        files: ['**/*.ts'],
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking'
        ],
        parserOptions: {
          project: './tsconfig.json'
        },
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/consistent-type-imports': [
            'error',
            {
              prefer: 'type-imports'
            }
          ]
        }
      },
      {
        files: ['*'],
        extends: ['prettier'],
        rules: {
          '@typescript-eslint/ban-types': 'off'
        }
      },
      {
        files: ['**/*.test.ts'],
        rules: {
          '@typescript-eslint/unbound-method': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-unsafe-argument': 'off',
          '@typescript-eslint/no-unsafe-call': 'off',
          '@typescript-eslint/no-unsafe-return': 'off',
          '@typescript-eslint/no-unsafe-member-access': 'off',
          '@typescript-eslint/no-empty-function': 'off'
        }
      }
    ]
  };
}
