import { createPositionGetter } from './createPositionGetter';
import { fakePosition } from '../../../test/fakes/fakePosition';

function run() {
  jest.spyOn(Object, 'freeze').mockReturnValue('{{FROZEN_OBJECT}}');
  const position = fakePosition();
  const getterFn = createPositionGetter(position);
  const returnValue = getterFn();
  return { getterFn, returnValue };
}

describe('createPositionGetter', () => {
  beforeEach(run);

  test('exports a function called createPositionGetter', () => {
    expect(createPositionGetter).toBeInstanceOf(Function);
  });

  test('returns a getter function', () => {
    const { getterFn } = run();
    expect(getterFn).toBeInstanceOf(Function);
  });

  describe('when getter gets called', () => {
    test('calls Object.freeze', () => {
      expect(Object.freeze).toHaveBeenCalledWith({
        column: 0,
        line: 1,
        index: 0
      });
    });

    test('returns frozen object', () => {
      const { returnValue } = run();
      expect(returnValue).toBe('{{FROZEN_OBJECT}}');
    });
  });
});
