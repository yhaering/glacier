import { assertValidPackageName } from './assertValidPackageName';

function run() {
  assertValidPackageName('test');
}

describe('assertValidPackageName', () => {
  beforeEach(run);

  test('exports a function called assertValidPackageName', () => {
    expect(assertValidPackageName).toBeInstanceOf(Function);
  });

  describe('if package name starts with a dot', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidPackageName('.test');
      }).toThrow('Package .test should not start with a dot');
    });
  });

  describe('if package name includes a back slash', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidPackageName('test\\mocks');
      }).toThrow('Package test\\mocks should not contain back slashes');
    });
  });

  describe('if package name includes a percentage sign', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidPackageName('test%mocks');
      }).toThrow('Package test%mocks should not contain percentage signs');
    });
  });
});
