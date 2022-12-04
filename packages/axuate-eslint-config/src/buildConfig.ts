import type { Linter } from 'eslint';
import { buildTypescript } from './overrides/buildTypescript';
import { buildTests } from './overrides/buildTests';
import { buildPrettier } from './overrides/buildPrettier';

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
      buildTypescript(),
      buildPrettier(),
      buildTests()
    ]
  };
}
