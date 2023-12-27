import { whileMultiLineComment } from './whileMultiLineComment';

function run(characters = '*/') {
  const returnValue = whileMultiLineComment('', characters);
  return { returnValue };
}

describe('whileMultiLineComment', () => {
  beforeEach(run);

  test('exports a function called whileMultiLineComment', () => {
    expect(whileMultiLineComment).toBeInstanceOf(Function);
  });

  test('returns true if last two characters are not */', () => {
    const { returnValue } = run('abc');
    expect(returnValue).toBe(true);
  });

  test('returns false if last two characters are */', () => {
    const { returnValue } = run('*/');
    expect(returnValue).toBe(false);
  });
});
