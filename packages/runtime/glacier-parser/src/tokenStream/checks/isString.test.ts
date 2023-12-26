import { isString } from './isString';

function run(char = '"') {
  const returnValue = isString(char);
  return { returnValue };
}

describe('isString', () => {
  beforeEach(run);

  test('exports a function called isString', () => {
    expect(isString).toBeInstanceOf(Function);
  });

  test('returns true if char is a "', () => {
    const { returnValue } = run('"');
    expect(returnValue).toBe(true);
  });

  test("returns true if char is a '", () => {
    const { returnValue } = run("'");
    expect(returnValue).toBe(true);
  });

  test('returns true if char is `', () => {
    const { returnValue } = run('`');
    expect(returnValue).toBe(true);
  });

  test('returns false if char is not a string start', () => {
    const { returnValue } = run('a');
    expect(returnValue).toBe(false);
  });
});
