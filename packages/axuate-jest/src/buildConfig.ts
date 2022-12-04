import type { Config } from 'jest';

export function buildConfig(): Config {
  return {
    preset: 'ts-jest',
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
    coverageDirectory: 'coverage',
    collectCoverage: true,
    coverageReporters: ['clover', 'json', 'lcov', 'text', 'html'],
    collectCoverageFrom: ['src/**/*.ts']
  };
}
