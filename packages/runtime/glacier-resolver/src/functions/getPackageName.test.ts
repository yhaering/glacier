import { getPackageName } from './getPackageName';
import { isScopedPackageName } from '../conditions/isScopedPackageName';
import { assertValidPackageName } from '../assertions/assertValidPackageName';
import { assertValidScopedPackageName } from '../assertions/assertValidScopedPackageName';

jest.mock('../assertions/assertValidScopedPackageName', () => ({
  assertValidScopedPackageName: jest.fn()
}));

jest.mock('../conditions/isScopedPackageName', () => ({
  isScopedPackageName: jest.fn().mockReturnValue(false)
}));

jest.mock('../assertions/assertValidPackageName', () => ({
  assertValidPackageName: jest.fn()
}));

function run(packageSpecifier = '{{PACKAGE_SPECIFIER}}/index') {
  const returnValue = getPackageName(packageSpecifier);
  return { returnValue };
}

function runWithScopedPackage() {
  (isScopedPackageName as jest.Mock).mockReturnValue(true);
  return run('@test/package/index');
}

describe('getPackageName', () => {
  beforeEach(run);

  test('exports a function called getPackageName', () => {
    expect(getPackageName).toBeInstanceOf(Function);
  });

  test('calls isScopedPackageName', () => {
    expect(isScopedPackageName).toHaveBeenCalledWith(
      '{{PACKAGE_SPECIFIER}}/index'
    );
  });

  test('calls assertValidPackageName', () => {
    expect(assertValidPackageName).toHaveBeenCalledWith(
      '{{PACKAGE_SPECIFIER}}'
    );
  });

  test('returns package name', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{PACKAGE_SPECIFIER}}');
  });

  describe('if package specifier is a scoped package', () => {
    beforeEach(runWithScopedPackage);

    test('calls assertValidScopedPackageName', () => {
      expect(assertValidScopedPackageName).toHaveBeenCalledWith(
        '@test/package/index'
      );
    });

    test('calls assertValidPackageName', () => {
      expect(assertValidPackageName).toHaveBeenCalledWith('@test/package');
    });

    test('returns package name', () => {
      const { returnValue } = runWithScopedPackage();
      expect(returnValue).toBe('@test/package');
    });
  });
});
