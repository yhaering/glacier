import { makeCreateDirFn } from './makeCreateDirFn';
import fs from 'fs';

jest.mock('fs');

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

  test('calls fs.mkdirSync', () => {
    expect(fs.mkdirSync).toHaveBeenCalledWith('{{PATH}}', {
      recursive: true
    });
  });
});
