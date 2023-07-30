import { assertPatternKeyValid } from './assertPatternKeyValid';
import { assertNoTrailingSlash } from './assertNoTrailingSlash';

jest.mock('./assertNoTrailingSlash', () => ({
  assertNoTrailingSlash: jest.fn()
}));

function run() {
  assertPatternKeyValid('/abc/*.js');
}

describe('assertPatternKeyValid', () => {
  beforeEach(run);

  test('exports a function called assertPatternKeyValid', () => {
    expect(assertPatternKeyValid).toBeInstanceOf(Function);
  });

  test('calls assertNoTrailingSlash', () => {
    expect(assertNoTrailingSlash).toHaveBeenCalledWith('/abc/*.js');
  });

  describe('if pattern contains multiple wildcards', () => {
    test('throws an error', () => {
      expect(() => {
        assertPatternKeyValid('/abc/*/*.js');
      }).toThrow('Pattern /abc/*/*.js should only contain a single wildcard');
    });
  });
});
