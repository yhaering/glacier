import type { ExportConditions } from '../../src/interfaces/ExportConditions';

export function fakeExportConditions(): ExportConditions {
  return {
    './test/*.js': './src/*.js',
    './mocks/*.js': './src/*.js',
    './index.js': './index.js'
  };
}
