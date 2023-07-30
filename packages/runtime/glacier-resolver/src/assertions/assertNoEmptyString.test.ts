import { assertNoEmptyString } from './assertNoEmptyString';

function run() {
  assertNoEmptyString('{{STRING}}');
}

describe('assertNoEmptyString', () => {
  beforeEach(run);

  test('exports a function called assertNoEmptyString', () => {
    expect(assertNoEmptyString).toBeInstanceOf(Function);
  });

  describe('if string is empty', () => {
    test('should throw an error', () => {
      expect(() => {
        assertNoEmptyString('');
      }).toThrow('Expected string to not be empty');
    });
  });
});
