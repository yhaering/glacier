import { isHexadecimal } from './isHexadecimal';

function run(char = 'X') {
  const returnValue = isHexadecimal(char);
  return { returnValue };
}

describe('isHexadecimal', () => {
  beforeEach(run);

  test('exports a function called isHexadecimal', () => {
    expect(isHexadecimal).toBeInstanceOf(Function);
  });

  test('returns true if character is X', () => {
    const { returnValue } = run('X');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is x', () => {
    const { returnValue } = run('x');
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not X or x', () => {
    const { returnValue } = run('B');
    expect(returnValue).toBe(false);
  });
});
