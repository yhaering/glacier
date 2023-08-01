import { getKeyBaseLength } from './getKeyBaseLength';

function run(key = '{{KEY}}') {
  const returnValue = getKeyBaseLength(key);
  return { returnValue };
}

describe('getKeyBaseLength', () => {
  beforeEach(run);

  test('exports a function called getKeyBaseLength', () => {
    expect(getKeyBaseLength).toBeInstanceOf(Function);
  });

  test('if key includes a * return the index + 1', () => {
    const { returnValue } = run('abc*de');
    expect(returnValue).toBe(4);
  });

  test('if key does not include a * return the length', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(7);
  });
});
