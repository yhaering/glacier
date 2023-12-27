import { whilePunctuation } from './whilePunctuation';
import { PUNCTUATIONS } from '../constants/punctuations';

function run(char = '', characters = '') {
  const returnValue = whilePunctuation(char, characters);
  return { returnValue };
}

describe('whilePunctuation', () => {
  beforeEach(run);

  test('exports a function called whilePunctuation', () => {
    expect(whilePunctuation).toBeInstanceOf(Function);
  });

  test.each(PUNCTUATIONS)('returns true for "%s"', (symbol) => {
    const { returnValue } = run('', symbol);
    expect(returnValue).toBe(true);
  });

  test('returns false if symbol does not exist', () => {
    const { returnValue } = run('(', '(');
    expect(returnValue).toBe(false);
  });
});
