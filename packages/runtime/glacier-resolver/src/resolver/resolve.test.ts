import { resolve } from './resolve';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { isValidURL } from '../conditions/isValidURL';
import { isRealPath } from '../conditions/isRealPath';
import { isPrivateMapping } from '../conditions/isPrivateMapping';
import { resolvePackage } from './resolvePackage';
import { resolveModulePath } from './resolveModulePath';
import { resolveRealPath } from './resolveRealPath';
import { resolvePackageImports } from './resolvePackageImports';

jest.mock('./resolveModulePath', () => ({
  resolveModulePath: jest.fn().mockReturnValue('{{RESOLVED_MODULE_PATH}}')
}));
jest.mock('../conditions/isValidURL', () => ({
  isValidURL: jest.fn().mockReturnValue(false)
}));

jest.mock('../conditions/isRealPath', () => ({
  isRealPath: jest.fn().mockReturnValue(false)
}));

jest.mock('../conditions/isPrivateMapping', () => ({
  isPrivateMapping: jest.fn().mockReturnValue(false)
}));

jest.mock('./resolvePackage', () => ({
  resolvePackage: jest.fn().mockReturnValue('{{RESOLVED}}')
}));

jest.mock('./resolveRealPath', () => ({
  resolveRealPath: jest.fn()
}));

jest.mock('./resolvePackageImports', () => ({
  resolvePackageImports: jest.fn()
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolve(
    '{{SPECIFIER}}',
    '{{PARENT_URL}}',
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithNoResult() {
  (resolvePackage as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

function runWithURL() {
  (isValidURL as jest.Mock).mockReturnValueOnce(true);
  return run();
}

function runWithRealPath() {
  (isRealPath as jest.Mock).mockReturnValueOnce(true);
  return run();
}

function runWithPrivateMapping() {
  (isPrivateMapping as jest.Mock).mockReturnValueOnce(true);
  return run();
}

describe('resolve', () => {
  beforeEach(run);

  test('exports a function called resolve', () => {
    expect(resolve).toBeInstanceOf(Function);
  });

  test('calls isValidURL', () => {
    expect(isValidURL).toHaveBeenCalledWith('{{SPECIFIER}}');
  });

  test('calls isRealPath', () => {
    expect(isRealPath).toHaveBeenCalledWith('{{SPECIFIER}}');
  });

  test('calls isPrivateMapping', () => {
    expect(isPrivateMapping).toHaveBeenCalledWith('{{SPECIFIER}}');
  });

  test('calls resolvePackage', () => {
    const { resolverConfig } = run();
    expect(resolvePackage).toHaveBeenCalledWith(
      '{{SPECIFIER}}',
      '{{PARENT_URL}}',
      resolverConfig
    );
  });

  test('calls resolveModulePath', () => {
    const { resolverConfig } = run();
    expect(resolveModulePath).toHaveBeenCalledWith(
      '{{RESOLVED}}',
      resolverConfig
    );
  });

  test('returns resolved module path', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_MODULE_PATH}}');
  });

  describe('if resolved path is undefined', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithNoResult();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if specifier is an URL', () => {
    test('returns URL', () => {
      const { returnValue } = runWithURL();
      expect(returnValue).toBe('{{SPECIFIER}}');
    });
  });

  describe('if is real path', () => {
    test('calls resolveRealPath', () => {
      const { resolverConfig } = runWithRealPath();
      expect(resolveRealPath).toHaveBeenCalledWith(
        '{{PARENT_URL}}',
        '{{SPECIFIER}}',
        resolverConfig
      );
    });
  });

  describe('if is private mapping', () => {
    test('calls resolvePackageImports', () => {
      const { resolverConfig } = runWithPrivateMapping();
      expect(resolvePackageImports).toHaveBeenCalledWith(
        '{{SPECIFIER}}',
        '{{PARENT_URL}}',
        resolverConfig
      );
    });
  });
});
