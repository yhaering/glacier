import { isScopedPackageName } from './isScopedPackageName';

function run(packageName = '@test/mocks') {
  const returnValue = isScopedPackageName(packageName);
  return { returnValue };
}

describe('isScopedPackageName', () => {
  beforeEach(run);

  test('exports a function called isScopedPackageName', () => {
    expect(isScopedPackageName).toBeInstanceOf(Function);
  });

  test('returns true if package name starts with an @', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if package name does not start with an @', () => {
    const { returnValue } = run('mocks');
    expect(returnValue).toBe(false);
  });
});
