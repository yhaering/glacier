import type { Linter } from 'eslint';
import { buildTypescript } from './overrides/buildTypescript';
import { buildTests } from './overrides/buildTests';
import { buildPrettier } from './overrides/buildPrettier';
import { buildJavascript } from './overrides/buildJavascript';

export function buildConfig(): Linter.Config {
  return {
    overrides: [
      buildJavascript(),
      buildTypescript(),
      buildPrettier(),
      buildTests()
    ]
  };
}
