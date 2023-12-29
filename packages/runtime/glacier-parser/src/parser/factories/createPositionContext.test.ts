import { createPositionContext } from './createPositionContext';
import { createConsumePosition } from './createConsumePosition';
import { createDecoratePosition } from './createDecoratePosition';
import { createPositionGetter } from './createPositionGetter';

jest.mock('./createConsumePosition', () => ({
  createConsumePosition: jest.fn().mockReturnValue('{{CONSUME}}')
}));

jest.mock('./createDecoratePosition', () => ({
  createDecoratePosition: jest.fn().mockReturnValue('{{DECORATE}}')
}));

jest.mock('./createPositionGetter', () => ({
  createPositionGetter: jest.fn().mockReturnValue('{{POSITION_GETTER}}')
}));

function run() {
  const returnValue = createPositionContext();
  return { returnValue };
}

describe('createPositionContext', () => {
  beforeEach(run);

  test('exports a function called createPositionContext', () => {
    expect(createPositionContext).toBeInstanceOf(Function);
  });

  test('calls createConsumePosition', () => {
    expect(createConsumePosition).toHaveBeenCalledWith({
      line: 1,
      column: 0,
      index: 0
    });
  });

  test('calls createDecoratePosition', () => {
    expect(createDecoratePosition).toHaveBeenCalledWith({
      line: 1,
      column: 0,
      index: 0
    });
  });

  test('calls createPositionGetter', () => {
    expect(createPositionGetter).toHaveBeenCalledWith({
      line: 1,
      column: 0,
      index: 0
    });
  });

  test('returns PositionContext', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      consume: '{{CONSUME}}',
      decorate: '{{DECORATE}}',
      getPosition: '{{POSITION_GETTER}}'
    });
  });
});
