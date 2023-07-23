import { makeIsDirectoryFn } from './makeIsDirectoryFn';

function run() {
  const fn = makeIsDirectoryFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeIsDirectoryFn', () => {
  beforeEach(run);

  test('exports a function called makeIsDirectoryFn', () => {
    expect(makeIsDirectoryFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
