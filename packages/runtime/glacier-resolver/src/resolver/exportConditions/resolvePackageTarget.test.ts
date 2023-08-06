import { resolvePackageTarget } from './resolvePackageTarget';
import { fakeExportConditions } from '../../../test/fakes/fakeExportConditions';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import type { Exports } from '../../interfaces/Exports';
import { resolvePackageTargetString } from './resolvePackageTargetString';
import { resolvePackageTargetArray } from './resolvePackageTargetArray';
import { resolvePackageTargetObject } from './resolvePackageTargetObject';

jest.mock('./resolvePackageTargetString', () => ({
  resolvePackageTargetString: jest
    .fn()
    .mockReturnValue('{{RESOLVED_PACKAGE_TARGET_STRING}}')
}));
jest.mock('./resolvePackageTargetArray', () => ({
  resolvePackageTargetArray: jest
    .fn()
    .mockReturnValue('{{RESOLVED_PACKAGE_TARGET_ARRAY}}')
}));
jest.mock('./resolvePackageTargetObject', () => ({
  resolvePackageTargetObject: jest
    .fn()
    .mockReturnValue('{{RESOLVED_PACKAGE_TARGET_OBJECT}}')
}));

function run(target: Exports = fakeExportConditions()) {
  const resolvedConfig = fakeResolverConfig();
  const returnValue = resolvePackageTarget(
    '{{PACKAGE_URL}}',
    target,
    '{{PATTERN_MATCH}}',
    resolvedConfig
  );
  return { returnValue, target, resolvedConfig };
}

function runWithString() {
  return run('{{EXPORTS}}');
}

function runWithArray() {
  return run(['{{EXPORTS}}']);
}

function runWithObject() {
  return run();
}

describe('resolvePackageTarget', () => {
  beforeEach(runWithObject);

  test('exports a function called resolvePackageTarget', () => {
    expect(resolvePackageTarget).toBeInstanceOf(Function);
  });

  describe('if target is a string', () => {
    test('calls resolvePackageTargetString', () => {
      const { target, resolvedConfig } = runWithString();
      expect(resolvePackageTargetString).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        target,
        '{{PATTERN_MATCH}}',
        resolvedConfig
      );
    });

    test('returns return value of resolvePackageTargetString', () => {
      const { returnValue } = runWithString();
      expect(returnValue).toBe('{{RESOLVED_PACKAGE_TARGET_STRING}}');
    });
  });

  describe('if target is an array', () => {
    test('calls resolvePackageTargetArray', () => {
      const { target, resolvedConfig } = runWithArray();
      expect(resolvePackageTargetArray).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        target,
        '{{PATTERN_MATCH}}',
        resolvedConfig
      );
    });

    test('returns return value of resolvePackageTargetArray', () => {
      const { returnValue } = runWithArray();
      expect(returnValue).toBe('{{RESOLVED_PACKAGE_TARGET_ARRAY}}');
    });
  });

  describe('if target is an object', () => {
    test('calls resolvePackageTargetObject', () => {
      const { target, resolvedConfig } = runWithObject();
      expect(resolvePackageTargetObject).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        target,
        '{{PATTERN_MATCH}}',
        resolvedConfig
      );
    });

    test('returns return value of resolvePackageTargetObject', () => {
      const { returnValue } = runWithObject();
      expect(returnValue).toBe('{{RESOLVED_PACKAGE_TARGET_OBJECT}}');
    });
  });
});
