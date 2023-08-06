import { resolvePjson } from './resolvePjson';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { readPackageJson } from '../functions/readPackageJson';
import { resolveFields } from './resolveFields';
import { resolvePackageExports } from './resolvePackageExports';

jest.mock('../functions/readPackageJson', () => ({
  readPackageJson: jest.fn().mockReturnValue({})
}));

jest.mock('./resolveFields', () => ({
  resolveFields: jest.fn()
}));

jest.mock('./resolvePackageExports', () => ({
  resolvePackageExports: jest
    .fn()
    .mockReturnValue('{{RESOLVED_PACKAGE_EXPORTS}}')
}));

function run(subPath = '{{PACKAGE_SUB_PATH}}') {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePjson('{{PACKAGE_URL}}', subPath, resolverConfig);
  return { returnValue, resolverConfig };
}

function runWithoutPjson() {
  (readPackageJson as jest.Mock).mockReturnValue(void 0);
  return run();
}

function runWithExports() {
  (readPackageJson as jest.Mock).mockReturnValue({ exports: '{{EXPORTS}}' });
  return run();
}

function runWithMain() {
  (readPackageJson as jest.Mock).mockReturnValue({ '{{FIELD}}': '{{MAIN}}' });
  (resolveFields as jest.Mock).mockReturnValue('{{FIELD}}');
  return run('.');
}

describe('resolvePjson', () => {
  beforeEach(run);

  test('exports a function called resolvePjson', () => {
    expect(resolvePjson).toBeInstanceOf(Function);
  });

  test('calls readPackageJson', () => {
    const { resolverConfig } = run();
    expect(readPackageJson).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      resolverConfig
    );
  });

  test('calls resolveFields', () => {
    const { resolverConfig } = run();
    expect(resolveFields).toHaveBeenCalledWith({}, resolverConfig);
  });

  test('calls fs.resolve', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      '{{PACKAGE_SUB_PATH}}'
    );
  });

  describe('if package json does not exist', () => {
    beforeEach(runWithoutPjson);

    test('calls fs.resolve', () => {
      const { resolverConfig } = runWithoutPjson();
      expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        '{{PACKAGE_SUB_PATH}}'
      );
    });

    test('returns return value of fs.resolve', () => {
      const { returnValue } = runWithoutPjson();
      expect(returnValue).toBe('{{RESOLVED}}');
    });
  });

  describe('if package json has an exports field', () => {
    test('calls resolvePackageExports', () => {
      const { resolverConfig } = runWithExports();
      expect(resolvePackageExports).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        '{{PACKAGE_SUB_PATH}}',
        '{{EXPORTS}}',
        resolverConfig
      );
    });

    test('returns return value of resolvePackageExports', () => {
      const { returnValue } = runWithExports();
      expect(returnValue).toBe('{{RESOLVED_PACKAGE_EXPORTS}}');
    });
  });

  describe('if package sub path is . and main field exists', () => {
    test('calls fs.resolve', () => {
      const { resolverConfig } = runWithMain();
      expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
        '{{PACKAGE_URL}}',
        '{{MAIN}}'
      );
    });

    test('returns return value of fs.resolve', () => {
      const { returnValue } = runWithMain();
      expect(returnValue).toBe('{{RESOLVED}}');
    });
  });
});
