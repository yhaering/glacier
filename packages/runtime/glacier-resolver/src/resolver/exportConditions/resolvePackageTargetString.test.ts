import { resolvePackageTargetString } from './resolvePackageTargetString';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import { isValidExportTarget } from '../../conditions/isValidExportTarget';
import { resolvePackage } from '../resolvePackage';
import { resolveRealPath } from '../resolveRealPath';

jest.mock('../../conditions/isValidExportTarget', () => ({
  isValidExportTarget: jest.fn().mockReturnValue(true)
}));

jest.mock('../resolvePackage', () => ({
  resolvePackage: jest.fn().mockReturnValue('{{RESOLVED_PACKAGE}}')
}));

jest.mock('../resolveRealPath', () => ({
  resolveRealPath: jest.fn().mockReturnValue('{{RESOLVED_REAL_PATH}}')
}));

function run(target = '{{TARGET}}', patternMatch?: string) {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePackageTargetString(
    '{{PACKAGE_URL}}',
    target,
    patternMatch,
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithPattern() {
  return run('{{TARGET}}/*', '{{PATTERN_MATCH}}');
}

function runWithRealPath() {
  return run('./{{TARGET}}');
}

function runWithInvalidTarget() {
  (isValidExportTarget as jest.Mock).mockReturnValueOnce(false);
  return run('{{TARGET}}');
}

describe('resolvePackageTargetString', () => {
  beforeEach(run);

  test('exports a function called resolvePackageTargetString', () => {
    expect(resolvePackageTargetString).toBeInstanceOf(Function);
  });

  test('calls isValidExportTarget', () => {
    expect(isValidExportTarget).toHaveBeenCalledWith('{{TARGET}}');
  });

  test('calls resolvePackage', () => {
    const { resolverConfig } = run();
    expect(resolvePackage).toHaveBeenCalledWith(
      '{{TARGET}}',
      '{{PACKAGE_URL}}/',
      resolverConfig
    );
  });

  test('returns return value of resolvePackage', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_PACKAGE}}');
  });

  describe('if target starts with ./', () => {
    test('calls resolveRealPath', () => {
      const { resolverConfig } = runWithRealPath();
      expect(resolveRealPath).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        './{{TARGET}}',
        resolverConfig,
        undefined
      );
    });

    test('returns return value of resolveRealPath', () => {
      const { returnValue } = runWithRealPath();
      expect(returnValue).toBe('{{RESOLVED_REAL_PATH}}');
    });
  });

  describe('if target is not a valid export target', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithInvalidTarget();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if a pattern match exists', () => {
    test('calls resolvePackage', () => {
      const { resolverConfig } = runWithPattern();
      expect(resolvePackage).toHaveBeenCalledWith(
        '{{TARGET}}/{{PATTERN_MATCH}}',
        '{{PACKAGE_URL}}/',
        resolverConfig
      );
    });

    test('returns return value of resolvePackage', () => {
      const { returnValue } = runWithPattern();
      expect(returnValue).toBe('{{RESOLVED_PACKAGE}}');
    });
  });
});
