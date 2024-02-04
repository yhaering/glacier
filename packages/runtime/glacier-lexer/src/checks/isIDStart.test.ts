import { isIDStart } from './isIDStart';

function run(char = 'a') {
  const returnValue = isIDStart(char);
  return { returnValue };
}

describe('isIDStart', () => {
  beforeEach(run);

  test('exports a function called isIDStart', () => {
    expect(isIDStart).toBeInstanceOf(Function);
  });

  test('returns true if character is a valid identifier start', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not a valid identifier start', () => {
    const { returnValue } = run('0');
    expect(returnValue).toBe(false);
  });
});
