import { resolvePackageTargetObject } from './resolvePackageTargetObject';
import { fakeExportConditions } from '../../../test/fakes/fakeExportConditions';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import { filterConditions } from '../../functions/filterConditions';
import { resolvePackageTarget } from './resolvePackageTarget';

jest.mock('../../functions/filterConditions', () => ({
  filterConditions: jest.fn().mockReturnValue(['./test/*.js'])
}));

jest.mock('./resolvePackageTarget', () => ({
  resolvePackageTarget: jest.fn().mockReturnValue('{{RESOLVED_PACKAGE_TARGET}}')
}));

function run() {
  const target = fakeExportConditions();
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePackageTargetObject(
    '{{PACKAGE_URL}}',
    target,
    '{{PATTERN_MATCH}}',
    resolverConfig
  );
  return { returnValue, target, resolverConfig };
}

function runWithoutTarget() {
  (resolvePackageTarget as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

describe('resolvePackageTargetObject', () => {
  beforeEach(run);

  test('exports a function called resolvePackageTargetObject', () => {
    expect(resolvePackageTargetObject).toBeInstanceOf(Function);
  });

  test('calls filterConditions', () => {
    const { resolverConfig } = run();
    expect(filterConditions).toHaveBeenCalledWith(
      ['./test/*.js', './mocks/*.js', './index.js'],
      resolverConfig
    );
  });

  test('calls resolvePackageTarget', () => {
    const { resolverConfig } = run();
    expect(resolvePackageTarget).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      './src/*.js',
      '{{PATTERN_MATCH}}',
      resolverConfig
    );
  });

  test('returns return value of resolvePackageTarget', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_PACKAGE_TARGET}}');
  });

  describe('if resolvePackageTarget returns undefined', () => {
    test('return undefined', () => {
      const { returnValue } = runWithoutTarget();
      expect(returnValue).toBe(undefined);
    });
  });
});
