import { resolveRealPath } from './resolveRealPath';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';

function run(patternMatch?: string) {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.resolve as jest.Mock).mockReturnValue('./test/*');
  const returnValue = resolveRealPath(
    '{{PARENT_URL}}',
    '{{SPECIFIER}}',
    resolverConfig,
    patternMatch
  );
  return { returnValue, resolverConfig };
}

function runWithPatternMatch() {
  return run('{{PATTERN_MATCH}}');
}

function runWithoutPatternMatch() {
  return run(void 0);
}

describe('resolveRealPath', () => {
  beforeEach(runWithPatternMatch);

  test('exports a function called resolveRealPath', () => {
    expect(resolveRealPath).toBeInstanceOf(Function);
  });

  test('calls fs.resolve', () => {
    const { resolverConfig } = runWithPatternMatch();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
      '{{PARENT_URL}}',
      '{{SPECIFIER}}'
    );
  });

  test('return resolved path', () => {
    const { returnValue } = runWithPatternMatch();
    expect(returnValue).toBe('./test/{{PATTERN_MATCH}}');
  });

  describe('if no patternMatch has been defined', () => {
    test('returns resolved target', () => {
      const { returnValue } = runWithoutPatternMatch();
      expect(returnValue).toBe('./test/*');
    });
  });
});
