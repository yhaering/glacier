import { getPackageScope } from './getPackageScope';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { isRoot } from '../conditions/isRoot';

jest.mock('../conditions/isRoot', () => ({
  isRoot: jest.fn().mockReturnValue(true)
}));

function run(url = '{{URL}}') {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.resolve as jest.Mock).mockReturnValue('{{PJSON_URL}}');
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(false);
  const returnValue = getPackageScope(url, resolverConfig);
  return { returnValue, resolverConfig };
}

function runWithPjson() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.resolve as jest.Mock).mockReturnValue('{{PJSON_URL}}');
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(true);
  const returnValue = getPackageScope('{{URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}

function runInSubDirectory() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.resolve as jest.Mock).mockReturnValue('{{PJSON_URL}}');
  (resolverConfig.fs.exists as jest.Mock)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);
  (isRoot as jest.Mock).mockReturnValue(false);
  const returnValue = getPackageScope('{{URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}

describe('getPackageScope', () => {
  beforeEach(run);

  test('exports a function called getPackageScope', () => {
    expect(getPackageScope).toBeInstanceOf(Function);
  });

  test('calls fs.resolve with url and package.json', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
      '{{URL}}',
      'package.json'
    );
  });

  test('calls fs.exists', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.exists).toHaveBeenCalledWith('{{PJSON_URL}}');
  });

  test('calls isRoot', () => {
    const { resolverConfig } = run();
    expect(isRoot).toHaveBeenCalledWith('{{URL}}', resolverConfig);
  });

  test('return undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBeUndefined();
  });

  describe('if url ends with node_modules', () => {
    test('returns the url', () => {
      const { returnValue } = run('{{URL}}/node_modules');
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if package json exists within the url', () => {
    test('returns the url', () => {
      const { returnValue } = runWithPjson();
      expect(returnValue).toBe('{{URL}}');
    });
  });

  describe('if root is not reached', () => {
    beforeEach(runInSubDirectory);

    test('calls fs.resolve', () => {
      const { resolverConfig } = runInSubDirectory();
      expect(resolverConfig.fs.resolve).toHaveBeenCalledWith('{{URL}}', '../');
    });
  });
});
