import { makeExistsFn } from './makeExistsFn';

function run() {
  const fn = makeExistsFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeExistsFn', () => {
  beforeEach(run);

  test('exports a function called makeExistsFn', () => {
    expect(makeExistsFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
