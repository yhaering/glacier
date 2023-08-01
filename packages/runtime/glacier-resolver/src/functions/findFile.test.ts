import { findFile } from './findFile';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';

function run() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);
  const returnValue = findFile('{{URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}

function runWithExistingUrl() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(true);
  const returnValue = findFile('{{URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}
function runWithUnknownFile() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false);
  const returnValue = findFile('{{URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}

describe('findFile', () => {
  beforeEach(run);

  test('exports a function called findFile', () => {
    expect(findFile).toBeInstanceOf(Function);
  });

  test('calls fs.exists with url', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.exists).toHaveBeenCalledWith('{{URL}}');
  });

  test('calls fs.exists with extension', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.exists).toHaveBeenCalledWith('{{URL}}.js');
  });

  describe('if url exists', () => {
    test('return url immediately', () => {
      const { returnValue } = runWithExistingUrl();
      expect(returnValue).toEqual('{{URL}}');
    });
  });

  describe('if url does not exist', () => {
    test('return undefined', () => {
      const { returnValue } = runWithUnknownFile();
      expect(returnValue).toBeUndefined();
    });
  });
});
