import { resolvePackageImports } from './resolvePackageImports';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { assertValidImportSpecifier } from '../assertions/assertValidImportSpecifier';
import { getPackageScope } from '../functions/getPackageScope';
import { readPackageJson } from '../functions/readPackageJson';
import { resolveExportConditions } from './exportConditions/resolveExportConditions';

jest.mock('../assertions/assertValidImportSpecifier');
jest.mock('../functions/getPackageScope', () => ({
  getPackageScope: jest.fn().mockReturnValue('{{PACKAGE_URL}}')
}));

jest.mock('../functions/readPackageJson', () => ({
  readPackageJson: jest.fn().mockReturnValue({ imports: '{{IMPORTS}}' })
}));

jest.mock('./exportConditions/resolveExportConditions', () => ({
  resolveExportConditions: jest
    .fn()
    .mockReturnValue('{{RESOLVED_EXPORT_CONDITIONS}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolvePackageImports(
    '{{SPECIFIER}}',
    '{{PARENT_URL}}',
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithNoPackageScope() {
  (getPackageScope as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

function runWithNoPackageJson() {
  (readPackageJson as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

function runWithNoImports() {
  (readPackageJson as jest.Mock).mockReturnValueOnce({});
  return run();
}

describe('resolvePackageImports', () => {
  beforeEach(run);

  test('exports a function called resolvePackageImports', () => {
    expect(resolvePackageImports).toBeInstanceOf(Function);
  });

  test('calls assertValidImportSpecifier', () => {
    expect(assertValidImportSpecifier).toHaveBeenCalledWith('{{SPECIFIER}}');
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
      '{{PACKAGE_URL}}',
      resolverConfig
    );
  });

  test('calls resolveExportConditions', () => {
    const { resolverConfig } = run();
    expect(resolveExportConditions).toHaveBeenCalledWith(
      '{{SPECIFIER}}',
      '{{IMPORTS}}',
      '{{PACKAGE_URL}}',
      resolverConfig
    );
  });

  test('returns return value of resolveExportConditions', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED_EXPORT_CONDITIONS}}');
  });

  describe('if packageURL is undefined', () => {
    test('return undefined', () => {
      const { returnValue } = runWithNoPackageScope();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if package json does not exist', () => {
    test('return undefined', () => {
      const { returnValue } = runWithNoPackageJson();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if package json has no imports definition', () => {
    test('return undefined', () => {
      const { returnValue } = runWithNoImports();
      expect(returnValue).toBeUndefined();
    });
  });
});
