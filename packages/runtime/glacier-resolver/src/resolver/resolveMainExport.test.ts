import { resolveMainExport } from './resolveMainExport';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { fakeExportConditions } from '../../test/fakes/fakeExportConditions';
import { getMainExports } from '../functions/getMainExports';
import { resolvePackageTarget } from './exportConditions/resolvePackageTarget';

jest.mock('../functions/getMainExports', () => ({
  getMainExports: jest.fn().mockReturnValue('{{MAIN_EXPORTS}}')
}));

jest.mock('./exportConditions/resolvePackageTarget', () => ({
  resolvePackageTarget: jest.fn().mockReturnValue('{{RESOLVED_PACKAGE_TARGET}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  const exports = fakeExportConditions();
  const returnValue = resolveMainExport(
    '{{PACKAGE_URL}}',
    exports,
    resolverConfig
  );
  return { returnValue, exports, resolverConfig };
}

function runWithUndefinedMainExport() {
  (getMainExports as jest.Mock).mockReturnValue(void 0);
  return run();
}

describe('resolveMainExport', () => {
  beforeEach(run);

  test('exports a function called resolveMainExport', () => {
    expect(resolveMainExport).toBeInstanceOf(Function);
  });

  test('calls getMainExports', () => {
    const { exports } = run();
    expect(getMainExports).toHaveBeenCalledWith(exports);
  });

  test('calls resolvePackageTarget', () => {
    const { resolverConfig } = run();
    expect(resolvePackageTarget).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      '{{MAIN_EXPORTS}}',
      undefined,
      resolverConfig
    );
  });

  test('returns return value of resolvePackageTarget', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_PACKAGE_TARGET}}');
  });

  describe('if getMainExports returns undefined', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithUndefinedMainExport();
      expect(returnValue).toBeUndefined();
    });
  });
});
