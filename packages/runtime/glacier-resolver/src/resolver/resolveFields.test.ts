import { resolveFields } from './resolveFields';
import { fakePackageJson } from '../../test/fakes/fakePackageJson';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { isPropertyOf } from '../conditions/isPropertyOf';

jest.mock('../conditions/isPropertyOf', () => ({
  isPropertyOf: jest.fn()
}));

function run() {
  const pjson = fakePackageJson();
  const resolverConfig = fakeResolverConfig();
  const returnValue = resolveFields(pjson, resolverConfig);
  return { returnValue, pjson };
}

function runWithExistingField() {
  (isPropertyOf as jest.Mock).mockReturnValueOnce(true);
  return run();
}

describe('resolveFields', () => {
  beforeEach(run);

  test('exports a function called resolveFields', () => {
    expect(resolveFields).toBeInstanceOf(Function);
  });

  test('calls isPropertyOf', () => {
    const { pjson } = run();
    expect(isPropertyOf).toHaveBeenCalledWith(pjson, 'main');
  });

  describe('if property exists in pjson', () => {
    test('return field name', () => {
      const { returnValue } = runWithExistingField();
      expect(returnValue).toBe('main');
    });
  });
});
