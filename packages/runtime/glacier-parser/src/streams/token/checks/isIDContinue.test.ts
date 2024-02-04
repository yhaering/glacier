import { isIDContinue } from './isIDContinue';

function run(char = 'a') {
  const returnValue = isIDContinue(char);
  return { returnValue };
}

describe('isIDContinue', () => {
  beforeEach(run);

  test('exports a function called isIDContinue', () => {
    expect(isIDContinue).toBeInstanceOf(Function);
  });

  test('returns true if char is a valid identifier part', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if char is a not valid identifier part', () => {
    const { returnValue } = run(' ');
    expect(returnValue).toBe(false);
  });
});
