import { parseStatement } from './parseStatement';

function run() {
  const returnValue = parseStatement();
  return { returnValue };
}

describe('parseStatement', () => {
  beforeEach(run);

  test('exports a function called parseStatement', () => {
    expect(parseStatement).toBeInstanceOf(Function);
  });

  test('returns undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBeUndefined();
  });
});
