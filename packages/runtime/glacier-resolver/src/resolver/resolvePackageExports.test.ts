import { resolvePackageExports } from './resolvePackageExports';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { resolveMainExport } from './resolveMainExport';
import { fakeExportConditions } from '../../test/fakes/fakeExportConditions';
import type { Exports } from '../interfaces/Exports';
import { resolveExportConditions } from './exportConditions/resolveExportConditions';

jest.mock('./resolveMainExport', () => ({
  resolveMainExport: jest.fn().mockReturnValue('{{RESOLVED_MAIN_EXPORT}}')
}));

jest.mock('./exportConditions/resolveExportConditions', () => ({
  resolveExportConditions: jest
    .fn()
    .mockReturnValue('{{RESOLVED_EXPORT_CONDITIONS}}')
}));

function run(subpath = '{{SUBPATH}}', exports: Exports = '{{EXPORTS}}') {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePackageExports(
    '{{PACKAGE_URL}}',
    subpath,
    exports,
    resolverConfig
  );
  return { returnValue, resolverConfig, exports };
}

function runWithSubpath() {
  return run('.');
}

function runWithExportsObject() {
  const exports = fakeExportConditions();
  return run('{{SUBPATH}}', exports);
}

describe('resolvePackageExports', () => {
  beforeEach(run);

  test('exports a function called resolvePackageExports', () => {
    expect(resolvePackageExports).toBeInstanceOf(Function);
  });

  test('return undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBeUndefined();
  });

  describe('if subpath equals .', () => {
    test('calls resolveMainExport', () => {
      const { resolverConfig } = runWithSubpath();
      expect(resolveMainExport).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        '{{EXPORTS}}',
        resolverConfig
      );
    });

    test('returns return value of resolveMainExport', () => {
      const { returnValue } = runWithSubpath();
      expect(returnValue).toBe('{{RESOLVED_MAIN_EXPORT}}');
    });
  });

  describe('if exports is an object with only relative paths', () => {
    test('calls resolveExportConditions', () => {
      const { resolverConfig, exports } = runWithExportsObject();
      expect(resolveExportConditions).toHaveBeenCalledWith(
        '{{SUBPATH}}',
        exports,
        '{{PACKAGE_URL}}',
        resolverConfig
      );
    });

    test('returns return value of resolveExportConditions', () => {
      const { returnValue } = runWithExportsObject();
      expect(returnValue).toBe('{{RESOLVED_EXPORT_CONDITIONS}}');
    });
  });
});
