import { assertNextValue } from './assertNextValue';

function run() {
  assertNextValue('{{VALUE}}');
}

function runWithoutNextValue() {
  assertNextValue();
}

describe('assertNextValue', () => {
  beforeEach(run);

  test('exports a function called assertNextValue', () => {
    expect(assertNextValue).toBeInstanceOf(Function);
  });

  describe('if nextValue is undefined', () => {
    test('throws an error', () => {
      expect(runWithoutNextValue).toThrow('Reached end of stream');
    });
  });
});
