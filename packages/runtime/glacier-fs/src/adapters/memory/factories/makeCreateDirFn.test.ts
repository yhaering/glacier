import { makeCreateDirFn } from './makeCreateDirFn';

function run() {
  const fn = makeCreateDirFn();
  fn('{{PATH}}');
  return { fn };
}

describe('makeCreateDirFn', () => {
  beforeEach(run);

  test('exports a function called makeCreateDirFn', () => {
    expect(makeCreateDirFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
