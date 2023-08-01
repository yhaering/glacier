import { getPatternMatch } from './getPatternMatch';

function run(matchKey = 'test/a.js', expansionKey = 'test/*.js') {
  const returnValue = getPatternMatch(matchKey, expansionKey);
  return { returnValue };
}

describe('getPatternMatch', () => {
  beforeEach(run);

  test('exports a function called getPatternMatch', () => {
    expect(getPatternMatch).toBeInstanceOf(Function);
  });

  test('return a for test/a.js and test/*.js', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('a');
  });

  test('return a.js for test/a.js and test/*', () => {
    const { returnValue } = run('test/a.js', 'test/*');
    expect(returnValue).toBe('a.js');
  });

  describe('if matchKey does not match expansion base and trailer', () => {
    test('return undefined', () => {
      const { returnValue } = run('abc', 'test/*.js');
      expect(returnValue).toBeUndefined();
    });
  });
});
