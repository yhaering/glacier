import { isOctal } from './isOctal';

function run(char = 'O') {
  const returnValue = isOctal(char);
  return { returnValue };
}

describe('isOctal', () => {
  beforeEach(run);

  test('exports a function called isOctal', () => {
    expect(isOctal).toBeInstanceOf(Function);
  });

  test('returns true if character is O', () => {
    const { returnValue } = run('O');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is o', () => {
    const { returnValue } = run('o');
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not O or o', () => {
    const { returnValue } = run('B');
    expect(returnValue).toBe(false);
  });
});
