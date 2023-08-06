import { resolveSubPaths } from './resolveSubPaths';
import { fakeExportConditions } from '../../../test/fakes/fakeExportConditions';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import { resolvePackageTarget } from './resolvePackageTarget';

jest.mock('./resolvePackageTarget', () => ({
  resolvePackageTarget: jest.fn().mockReturnValue('{{RESOLVED_PACKAGE_TARGET}}')
}));

function run(key = './index.js') {
  const exports = fakeExportConditions();
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolveSubPaths(
    key,
    exports,
    '{{PACKAGE_URL}}',
    resolverConfig
  );
  return { returnValue, exports, resolverConfig };
}

function runWithWildcard() {
  return run('./test/*.js');
}

function runWithUnknownKey() {
  return run('./index.ts');
}

describe('resolveSubPaths', () => {
  beforeEach(run);

  test('exports a function called resolveSubPaths', () => {
    expect(resolveSubPaths).toBeInstanceOf(Function);
  });

  test('calls resolvePackageTarget', () => {
    const { resolverConfig } = run();
    expect(resolvePackageTarget).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      './index.js',
      undefined,
      resolverConfig
    );
  });

  test('returns return value of resolvePackageTarget', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_PACKAGE_TARGET}}');
  });

  describe('if matchKey includes a wildcard', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithWildcard();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if matchKey does not exist in matchObj', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithUnknownKey();
      expect(returnValue).toBeUndefined();
    });
  });
});
