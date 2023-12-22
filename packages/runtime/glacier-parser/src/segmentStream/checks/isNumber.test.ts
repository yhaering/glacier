import { isNumber } from './isNumber';

function run(char = '1') {
  const returnValue = isNumber(char);
  return { returnValue };
}

describe('isNumber', () => {
  beforeEach(run);

  test('exports a function called isNumber', () => {
    expect(isNumber).toBeInstanceOf(Function);
  });

  test('returns true if character is a "1"', () => {
    const { returnValue } = run('1');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "2"', () => {
    const { returnValue } = run('2');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "3"', () => {
    const { returnValue } = run('3');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "4"', () => {
    const { returnValue } = run('4');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "5"', () => {
    const { returnValue } = run('5');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "6"', () => {
    const { returnValue } = run('6');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "7"', () => {
    const { returnValue } = run('7');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "8"', () => {
    const { returnValue } = run('8');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is a "9"', () => {
    const { returnValue } = run('9');
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not a number', () => {
    const { returnValue } = run('a');
    expect(returnValue).toBe(false);
  });
});
