import { resolveExportConditions } from './resolveExportConditions';
import { fakeResolverConfig } from '../../../test/fakes/fakeResolverConfig';
import { fakeExportConditions } from '../../../test/fakes/fakeExportConditions';
import { resolveSubPaths } from './resolveSubPaths';
import { resolveSubPathPatterns } from './resolveSubPathPatterns';

jest.mock('./resolveSubPaths', () => ({
  resolveSubPaths: jest.fn().mockReturnValue('{{RESOLVED_SUB_PATHS}}')
}));

jest.mock('./resolveSubPathPatterns', () => ({
  resolveSubPathPatterns: jest
    .fn()
    .mockReturnValue('{{RESOLVED_SUB_PATH_PATTERNS}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  const exports = fakeExportConditions();
  const returnValue = resolveExportConditions(
    '{{MATCH_KEY}}',
    exports,
    '{{PACKAGE_URL}}',
    resolverConfig
  );
  return { returnValue, resolverConfig, exports };
}

function runWithPatterns() {
  (resolveSubPaths as jest.Mock).mockReturnValue(void 0);
  return run();
}

describe('resolveExportConditions', () => {
  beforeEach(run);

  test('exports a function called resolveExportConditions', () => {
    expect(resolveExportConditions).toBeInstanceOf(Function);
  });

  test('calls resolveSubPaths', () => {
    const { resolverConfig, exports } = run();
    expect(resolveSubPaths).toHaveBeenCalledWith(
      '{{MATCH_KEY}}',
      exports,
      '{{PACKAGE_URL}}',
      resolverConfig
    );
  });

  test('returns return value of resolveSubPaths', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_SUB_PATHS}}');
  });

  describe('if resolveSubPaths returns undefined', () => {
    test('calls resolveSubPathPatterns', () => {
      const { resolverConfig, exports } = runWithPatterns();
      expect(resolveSubPathPatterns).toHaveBeenCalledWith(
        '{{MATCH_KEY}}',
        exports,
        '{{PACKAGE_URL}}',
        resolverConfig
      );
    });

    test('returns return value of resolveSubPathPatterns', () => {
      const { returnValue } = runWithPatterns();
      expect(returnValue).toBe('{{RESOLVED_SUB_PATH_PATTERNS}}');
    });
  });
});
