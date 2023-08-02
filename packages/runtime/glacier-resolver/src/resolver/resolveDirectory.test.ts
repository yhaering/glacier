import { resolveDirectory } from './resolveDirectory';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { findFile } from '../functions/findFile';

jest.mock('../functions/findFile', () => ({
  findFile: jest.fn().mockReturnValue('{{FILE_PATH}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  jest.spyOn(resolverConfig.fs, 'resolve').mockReturnValue('{{JOINED_PATH}}');
  const returnValue = resolveDirectory('{{URL}}', resolverConfig);
  return { returnValue, resolverConfig };
}

describe('resolveDirectory', () => {
  beforeEach(run);

  test('exports a function called resolveDirectory', () => {
    expect(resolveDirectory).toBeInstanceOf(Function);
  });

  test('calls fs.resolve', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith('{{URL}}', 'index');
  });

  test('calls findFile', () => {
    const { resolverConfig } = run();
    expect(findFile).toHaveBeenCalledWith('{{JOINED_PATH}}', resolverConfig);
  });

  test('returns file path', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{FILE_PATH}}');
  });
});
