import { createRoundRobin } from './createRoundRobin';

function run() {
  const items = [1, 2, 3];
  const returnValue = createRoundRobin(items);
  return { returnValue };
}

describe('createRoundRobin', () => {
  beforeEach(run);

  test('exports a function called createRoundRobin', () => {
    expect(createRoundRobin).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  it('should return items in correct order', () => {
    const { returnValue } = run();
    expect(returnValue()).toBe(1);
    expect(returnValue()).toBe(2);
    expect(returnValue()).toBe(3);
    expect(returnValue()).toBe(1);
    expect(returnValue()).toBe(2);
  });
});
