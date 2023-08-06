import { resolveSubPathPatterns } from './resolveSubPathPatterns';
import { fakeExportConditions } from '../../../test/fakes/fakeExportConditions';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import { getExpansionKeys } from '../../functions/getExpansionKeys';
import { getPatternMatch } from '../../functions/getPatternMatch';
import { resolvePackageTarget } from './resolvePackageTarget';

jest.mock('../../functions/getExpansionKeys', () => ({
  getExpansionKeys: jest.fn().mockReturnValue(['./test/*.js'])
}));

jest.mock('../../functions/getPatternMatch', () => ({
  getPatternMatch: jest.fn().mockReturnValue('{{PATTERN_MATCH}}')
}));

jest.mock('./resolvePackageTarget', () => ({
  resolvePackageTarget: jest.fn().mockReturnValue('{{RESOLVED_PACKAGE_TARGET}}')
}));

function run() {
  const exports = fakeExportConditions();
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolveSubPathPatterns(
    '{{MATCH_KEY}}',
    exports,
    '{{PACKAGE_URL}}',
    resolverConfig
  );
  return { returnValue, resolverConfig, exports };
}

function runWithoutPatternMatch() {
  (getPatternMatch as jest.Mock).mockReturnValue(void 0);
  return run();
}

describe('resolveSubPathPatterns', () => {
  beforeEach(run);

  test('exports a function called resolveSubPathPatterns', () => {
    expect(resolveSubPathPatterns).toBeInstanceOf(Function);
  });

  test('calls getExpansionKeys', () => {
    const { exports } = run();
    expect(getExpansionKeys).toHaveBeenCalledWith(exports);
  });

  test('calls getPatternMatch', () => {
    expect(getPatternMatch).toHaveBeenCalledWith(
      '{{MATCH_KEY}}',
      './test/*.js'
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

  describe('if getPatternMatch returns undefined', () => {
    test('return undefined', () => {
      const { returnValue } = runWithoutPatternMatch();
      expect(returnValue).toBeUndefined();
    });
  });
});
