import { makeIsFileFn } from './makeIsFileFn';

function run() {
  const fn = makeIsFileFn();
  const returnValue = fn('{{PATH}}');
  return { returnValue, fn };
}

describe('makeIsFileFn', () => {
  beforeEach(run);

  test('exports a function called makeIsFileFn', () => {
    expect(makeIsFileFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
