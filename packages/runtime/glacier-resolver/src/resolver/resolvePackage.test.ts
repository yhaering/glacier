import { resolvePackage } from './resolvePackage';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { assertNoEmptyString } from '../assertions/assertNoEmptyString';
import { getPackageName } from '../functions/getPackageName';
import { assertNoTrailingSlash } from '../assertions/assertNoTrailingSlash';
import { resolveSelf } from './resolveSelf';
import { resolveModule } from './resolveModule';

jest.mock('../assertions/assertNoTrailingSlash');
jest.mock('../assertions/assertNoEmptyString');

jest.mock('../functions/getPackageName', () => ({
  getPackageName: jest.fn().mockReturnValue('{{PACKAGE_NAME}}')
}));

jest.mock('./resolveSelf', () => ({
  resolveSelf: jest.fn()
}));

jest.mock('./resolveModule', () => ({
  resolveModule: jest.fn().mockReturnValue('{{RESOLVED_MODULE}}')
}));

function run(packageName = '{{PACKAGE_NAME}}') {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePackage(
    packageName,
    '{{PARENT_URL}}',
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithInternalModule() {
  return run('node:fs');
}

function runWithSelfUrl() {
  (resolveSelf as jest.Mock).mockReturnValueOnce('{{SELF_URL}}');
  return run();
}

describe('resolvePackage', () => {
  beforeEach(run);

  test('exports a function called resolvePackage', () => {
    expect(resolvePackage).toBeInstanceOf(Function);
  });

  test('calls assertNoEmptyString', () => {
    expect(assertNoEmptyString).toHaveBeenCalledWith('{{PACKAGE_NAME}}');
  });

  test('calls getPackageName', () => {
    expect(getPackageName).toHaveBeenCalledWith('{{PACKAGE_NAME}}');
  });

  test('calls assertNoTrailingSlash', () => {
    expect(assertNoTrailingSlash).toHaveBeenCalledWith('.');
  });

  test('calls resolveSelf', () => {
    const { resolverConfig } = run();
    expect(resolveSelf).toHaveBeenCalledWith(
      '{{PACKAGE_NAME}}',
      '.',
      '{{PARENT_URL}}',
      resolverConfig
    );
  });

  test('calls resolveModule', () => {
    const { resolverConfig } = run();
    expect(resolveModule).toHaveBeenCalledWith(
      '{{PARENT_URL}}',
      '{{PACKAGE_NAME}}',
      '.',
      resolverConfig
    );
  });

  test('returns return value of resolveModule', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_MODULE}}');
  });

  describe('if package specifier starts with node:', () => {
    test('returns package specifier', () => {
      const { returnValue } = runWithInternalModule();
      expect(returnValue).toBe('node:fs');
    });
  });

  describe('if self url exists', () => {
    test('returns self url', () => {
      const { returnValue } = runWithSelfUrl();
      expect(returnValue).toBe('{{SELF_URL}}');
    });
  });
});
