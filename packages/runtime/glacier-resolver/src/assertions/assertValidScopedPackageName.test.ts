import { assertValidScopedPackageName } from './assertValidScopedPackageName';

function run() {
  assertValidScopedPackageName('test/mocks');
}

describe('assertValidScopedPackageName', () => {
  beforeEach(run);

  test('exports a function called assertValidScopedPackageName', () => {
    expect(assertValidScopedPackageName).toBeInstanceOf(Function);
  });

  describe('if package does not contain a slash', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidScopedPackageName('@test');
      }).toThrow('Scoped package name @test should include a /');
    });
  });
});
