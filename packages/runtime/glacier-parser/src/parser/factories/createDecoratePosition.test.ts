import { createDecoratePosition } from './createDecoratePosition';
import { fakePosition } from '../../../test/fakes/fakePosition';

function run() {
  jest.spyOn(Object, 'freeze').mockReturnValue('{{OBJECT_FREEZE}}');
  const position = fakePosition();
  const parserFn = jest.fn().mockReturnValue({ '{{KEY}}': '{{VALUE}}' });
  const consumeFn = createDecoratePosition(position);
  const returnValue = consumeFn(parserFn);
  return { returnValue, parserFn, consumeFn, position };
}

describe('createDecoratePosition', () => {
  beforeEach(run);

  test('exports a function called createDecoratePosition', () => {
    expect(createDecoratePosition).toBeInstanceOf(Function);
  });

  test('returns a decorate function', () => {
    const { consumeFn } = run();
    expect(consumeFn).toBeInstanceOf(Function);
  });

  test('calls Object.freeze for start', () => {
    expect(Object.freeze).toHaveBeenCalledWith({
      line: 1,
      column: 0,
      index: 0
    });
  });

  test('calls parserFn', () => {
    const { parserFn } = run();
    expect(parserFn).toHaveBeenCalledWith();
  });

  test('returns parserFn return value plus loc', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      loc: {
        end: '{{OBJECT_FREEZE}}',
        start: '{{OBJECT_FREEZE}}'
      },
      '{{KEY}}': '{{VALUE}}'
    });
  });
});
