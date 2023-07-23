import { makeWriteFileFn } from './makeWriteFileFn';

function run() {
  const fn = makeWriteFileFn();
  const buffer = Buffer.from('');
  fn('{{PATH}}', buffer);
  return { fn, buffer };
}

describe('makeWriteFileFn', () => {
  beforeEach(run);

  test('exports a function called makeWriteFileFn', () => {
    expect(makeWriteFileFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });
});
