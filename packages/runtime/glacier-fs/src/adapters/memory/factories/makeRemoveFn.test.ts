import { makeRemoveFn } from './makeRemoveFn';

function run() {
  const fn = makeRemoveFn();
  fn('{{PATH}}');
  return { fn };
}

describe('makeRemoveFn', () => {
  beforeEach(run);

  test('exports a function called makeRemoveFn', () => {
    expect(makeRemoveFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
