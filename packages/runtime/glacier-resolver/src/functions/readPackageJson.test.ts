import { readPackageJson } from './readPackageJson';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';

function run() {
  jest.spyOn(JSON, 'parse').mockReturnValue('{{PARSED_JSON}}');
  const resolverConfig = fakeResolverConfig();
  const buffer = { toString: jest.fn().mockReturnValue('{{CONTENT}}') };
  (resolverConfig.fs.readFile as jest.Mock).mockReturnValue(buffer);
  const returnValue = readPackageJson('{{PACKAGE_URL}}', resolverConfig);
  return { returnValue, resolverConfig, buffer };
}

function runWithoutPjson() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(false);
  const returnValue = readPackageJson('{{PACKAGE_URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}

describe('readPackageJson', () => {
  beforeEach(run);

  test('exports a function called readPackageJson', () => {
    expect(readPackageJson).toBeInstanceOf(Function);
  });

  test('call fs.resolve', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
      '{{PACKAGE_URL}}',
      'package.json'
    );
  });

  test('call fs.exists', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.exists).toHaveBeenCalledWith('{{RESOLVED}}');
  });

  test('call fs.readFile', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.readFile).toHaveBeenCalledWith('{{RESOLVED}}');
  });

  test('call buffer.toString', () => {
    const { buffer } = run();
    expect(buffer.toString).toHaveBeenCalledWith('utf8');
  });

  test('calls JSON.parse', () => {
    expect(JSON.parse).toHaveBeenCalledWith('{{CONTENT}}');
  });

  test('returns parsed json', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{PARSED_JSON}}');
  });

  describe('if package.json does not exist', () => {
    test('return undefined', () => {
      const { returnValue } = runWithoutPjson();
      expect(returnValue).toBeUndefined();
    });
  });
});
