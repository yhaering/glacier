import { assertAbsolutePath } from './assertAbsolutePath';

function run() {
  assertAbsolutePath('/');
}

function runWithRelative() {
  assertAbsolutePath('./a');
}

describe('assertAbsolutePath', () => {
  beforeEach(run);

  test('exports a function called assertAbsolutePath', () => {
    expect(assertAbsolutePath).toBeInstanceOf(Function);
  });

  describe('if path does not start with /', () => {
    test('throws an error', () => {
      expect(runWithRelative).toThrow('Path ./a should be absolute');
    });
  });
});
