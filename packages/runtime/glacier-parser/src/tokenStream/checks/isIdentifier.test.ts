import { isIdentifier } from './isIdentifier';

function run(char = 'r') {
  const returnValue = isIdentifier(char);
  return { returnValue };
}

describe('isIdentifier', () => {
  beforeEach(run);

  test('exports a function called isIdentifier', () => {
    expect(isIdentifier).toBeInstanceOf(Function);
  });

  test('returns true if char is a $', () => {
    const { returnValue } = run('$');
    expect(returnValue).toBe(true);
  });

  test('returns true if char is a _', () => {
    const { returnValue } = run('_');
    expect(returnValue).toBe(true);
  });

  test('returns true if char has property unicode ID_Start', () => {
    const { returnValue } = run('x');
    expect(returnValue).toBe(true);
  });

  test('returns false if char is a 5', () => {
    const { returnValue } = run('5');
    expect(returnValue).toBe(false);
  });
});
