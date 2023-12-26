import { whileTemplateString } from './whileTemplateString';

function run(char = '{{CHAR}}') {
  const returnValue = whileTemplateString(char);
  return { returnValue };
}

describe('whileTemplateString', () => {
  beforeEach(run);

  test('exports a function called whileTemplateString', () => {
    expect(whileTemplateString).toBeInstanceOf(Function);
  });

  test('returns true if char is not `', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if char is a `', () => {
    const { returnValue } = run('`');
    expect(returnValue).toBe(false);
  });
});
