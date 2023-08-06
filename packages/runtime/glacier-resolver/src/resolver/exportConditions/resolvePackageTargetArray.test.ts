import { resolvePackageTargetArray } from './resolvePackageTargetArray';
import { fakeExportConditions } from '../../../test/fakes/fakeExportConditions';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import { resolvePackageTarget } from './resolvePackageTarget';
import { resolveModulePath } from '../resolveModulePath';

jest.mock('./resolvePackageTarget', () => ({
  resolvePackageTarget: jest.fn().mockReturnValue('{{RESOLVED_PACKAGE_TARGET}}')
}));

jest.mock('../resolveModulePath', () => ({
  resolveModulePath: jest.fn().mockReturnValue('{{RESOLVED_MODULE_PATH}}')
}));

function run() {
  const target = [fakeExportConditions()];
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePackageTargetArray(
    '{{PACKAGE_URL}}',
    target,
    '{{PATTERN_MATCH}}',
    resolverConfig
  );
  return { returnValue, target, resolverConfig };
}

function runWithoutPackageTarget() {
  (resolvePackageTarget as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

function runWithoutModulePath() {
  (resolveModulePath as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

describe('resolvePackageTargetArray', () => {
  beforeEach(run);

  test('exports a function called resolvePackageTargetArray', () => {
    expect(resolvePackageTargetArray).toBeInstanceOf(Function);
  });

  test('calls resolvePackageTarget', () => {
    const { resolverConfig, target } = run();
    expect(resolvePackageTarget).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      target[0],
      '{{PATTERN_MATCH}}',
      resolverConfig
    );
  });

  test('calls resolveModulePath', () => {
    const { resolverConfig } = run();
    expect(resolveModulePath).toHaveBeenCalledWith(
      '{{RESOLVED_PACKAGE_TARGET}}',
      resolverConfig
    );
  });

  test('returns return value of resolveModulePath', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_MODULE_PATH}}');
  });

  describe('if package target could not been resolved', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithoutPackageTarget();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if module path could not been resolved', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithoutModulePath();
      expect(returnValue).toBeUndefined();
    });
  });
});
