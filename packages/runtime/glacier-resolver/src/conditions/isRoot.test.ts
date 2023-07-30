import { isRoot } from './isRoot';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';

function run(path = '{{PATH}}') {
  const resolverConfig = fakeResolverConfig();
  const returnValue = isRoot(path, resolverConfig);
  return { returnValue, resolverConfig };
}

describe('isRoot', () => {
  beforeEach(run);

  test('exports a function called isRoot', () => {
    expect(isRoot).toBeInstanceOf(Function);
  });

  test('calls fs.parse', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.parse).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns true if path equals root', () => {
    const { returnValue } = run('{{ROOT}}');
    expect(returnValue).toBe(true);
  });

  test('returns false if path is not equal to root', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(false);
  });
});
