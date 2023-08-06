import { resolveSelf } from './resolveSelf';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { getPackageScope } from '../functions/getPackageScope';
import { readPackageJson } from '../functions/readPackageJson';
import { resolvePackageExports } from './resolvePackageExports';

jest.mock('../functions/getPackageScope', () => ({
  getPackageScope: jest.fn().mockReturnValue('{{PACKAGE_SCOPE}}')
}));

jest.mock('../functions/readPackageJson', () => ({
  readPackageJson: jest
    .fn()
    .mockReturnValue({ name: '{{PACKAGE_NAME}}', exports: '{{EXPORTS}}' })
}));

jest.mock('./resolvePackageExports', () => ({
  resolvePackageExports: jest
    .fn()
    .mockReturnValue('{{RESOLVED_PACKAGE_EXPORTS}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolveSelf(
    '{{PACKAGE_NAME}}',
    '{{PACKAGE_SUB_PATH}}',
    '{{PARENT_URL}}',
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithoutScope() {
  (getPackageScope as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

function runWithoutPjson() {
  (readPackageJson as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

function runWithoutExports() {
  (readPackageJson as jest.Mock).mockReturnValueOnce({});
  return run();
}

function runWithDifferentName() {
  (readPackageJson as jest.Mock).mockReturnValueOnce({
    exports: '{{EXPORTS}}',
    name: '{{NAME}}'
  });
  return run();
}

describe('resolveSelf', () => {
  beforeEach(run);

  test('exports a function called resolveSelf', () => {
    expect(resolveSelf).toBeInstanceOf(Function);
  });

  test('calls getPackageScope', () => {
    const { resolverConfig } = run();
    expect(getPackageScope).toHaveBeenCalledWith(
      '{{PARENT_URL}}',
      resolverConfig
    );
  });

  test('calls readPackageJson', () => {
    const { resolverConfig } = run();
    expect(readPackageJson).toHaveBeenCalledWith(
      '{{PACKAGE_SCOPE}}',
      resolverConfig
    );
  });

  test('calls resolvePackageExports', () => {
    const { resolverConfig } = run();
    expect(resolvePackageExports).toHaveBeenCalledWith(
      '{{PACKAGE_SCOPE}}',
      '{{PACKAGE_SUB_PATH}}',
      '{{EXPORTS}}',
      resolverConfig
    );
  });

  test('returns return value of resolvePackageExports', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_PACKAGE_EXPORTS}}');
  });

  describe('if no package scope has been found', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithoutScope();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if package json does not exist', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithoutPjson();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if package json does not have an export definition', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithoutExports();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if package name does not match', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithDifferentName();
      expect(returnValue).toBeUndefined();
    });
  });
});
