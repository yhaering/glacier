import { createResolver } from './createResolver';
import { fakeResolverConfig } from '../test/fakes/fakeResolverConfig';
import { resolve } from './resolver/resolve';

jest.mock('./resolver/resolve', () => ({
  resolve: jest.fn().mockReturnValue('{{RESOLVED}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  const fn = createResolver(resolverConfig);
  const returnValue = fn('{{SPECIFIER}}', '{{PARENT_URL}}');
  return { fn, returnValue, resolverConfig };
}

describe('createResolver', () => {
  beforeEach(run);

  test('exports a function called createResolver', () => {
    expect(createResolver).toBeInstanceOf(Function);
  });

  test('returns a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls resolve', () => {
    const { resolverConfig } = run();
    expect(resolve).toHaveBeenCalledWith(
      '{{SPECIFIER}}',
      '{{PARENT_URL}}',
      resolverConfig
    );
  });

  test('returns return value of resolve', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{RESOLVED}}');
  });
});
