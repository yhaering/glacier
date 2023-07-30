import { assertNoTrailingSlash } from './assertNoTrailingSlash';

function run() {
  assertNoTrailingSlash('abc');
}

describe('assertNoTrailingSlash', () => {
  beforeEach(run);

  test('exports a function called assertNoTrailingSlash', () => {
    expect(assertNoTrailingSlash).toBeInstanceOf(Function);
  });

  describe('if string ends with /', () => {
    test('throws an error', () => {
      expect(() => {
        assertNoTrailingSlash('abc/');
      }).toThrow('Expected abc/ to not end with /');
    });
  });
});
