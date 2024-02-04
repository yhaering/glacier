import { getNextLocation } from './getNextLocation';
import type { TokenLocation } from '../interfaces/TokenLocation';
import type { TokenType } from '../interfaces/TokenType';

function run(type: TokenType = 'TEXT') {
  const loc: TokenLocation = { col: 0, line: 1, index: 0 };
  const returnValue = getNextLocation(type, loc);
  return { returnValue };
}

describe('getNextLocation', () => {
  beforeEach(run);

  test('exports a function called getNextLocation', () => {
    expect(getNextLocation).toBeInstanceOf(Function);
  });

  test('returns next location', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      index: 1,
      col: 1,
      line: 1
    });
  });

  describe('if token type is LINE_TERMINATOR', () => {
    test('returns next location', () => {
      const { returnValue } = run('LINE_TERMINATOR');
      expect(returnValue).toEqual({
        index: 1,
        col: 0,
        line: 2
      });
    });
  });
});
