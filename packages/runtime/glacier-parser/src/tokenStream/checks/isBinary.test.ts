import { isBinary } from './isBinary';

function run(char = 'B') {
  const returnValue = isBinary(char);
  return { returnValue };
}

describe('isBinary', () => {
  beforeEach(run);

  test('exports a function called isBinary', () => {
    expect(isBinary).toBeInstanceOf(Function);
  });

  test('returns true if character is B', () => {
    const { returnValue } = run('B');
    expect(returnValue).toBe(true);
  });

  test('returns true if character is b', () => {
    const { returnValue } = run('b');
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not B or b', () => {
    const { returnValue } = run('X');
    expect(returnValue).toBe(false);
  });
});
