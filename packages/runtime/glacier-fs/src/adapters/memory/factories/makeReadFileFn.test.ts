import { makeReadFileFn } from './makeReadFileFn';

function run() {
  const fn = makeReadFileFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeReadFileFn', () => {
  beforeEach(run);

  test('exports a function called makeReadFileFn', () => {
    expect(makeReadFileFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
