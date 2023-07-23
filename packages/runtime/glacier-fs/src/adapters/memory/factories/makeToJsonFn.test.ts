import { makeToJsonFn } from './makeToJsonFn';

function run() {
  const fn = makeToJsonFn();
  const returnValue = fn();
  return { fn, returnValue };
}

describe('makeToJsonFn', () => {
  beforeEach(run);

  test('exports a function called makeToJsonFn', () => {
    expect(makeToJsonFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
