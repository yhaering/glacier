import { assertEntryPath } from './assertEntryPath';

function run() {
  assertEntryPath('/a');
}

describe('assertEntryPath', () => {
  beforeEach(run);

  test('exports a function called assertEntryPath', () => {
    expect(assertEntryPath).toBeInstanceOf(Function);
  });

  describe('if path equals /', () => {
    test('throws an error', () => {
      expect(() => assertEntryPath('/')).toThrow(
        'Expected path to not be the root of the file system'
      );
    });
  });
});
