import { whileIdentifier } from './whileIdentifier';

function run(char = 'a') {
  const returnValue = whileIdentifier(char);
  return { returnValue };
}

describe('whileIdentifier', () => {
  beforeEach(run);

  test('exports a function called whileIdentifier', () => {
    expect(whileIdentifier).toBeInstanceOf(Function);
  });

  test('returns true if char is a $', () => {
    const { returnValue } = run('$');
    expect(returnValue).toBe(true);
  });

  test('returns true if char has unicode property ID_Continue', () => {
    const { returnValue } = run('a');
    expect(returnValue).toBe(true);
  });

  test('returns false if char does not have unicode property ID_Continue', () => {
    const { returnValue } = run('#');
    expect(returnValue).toBe(false);
  });
});
