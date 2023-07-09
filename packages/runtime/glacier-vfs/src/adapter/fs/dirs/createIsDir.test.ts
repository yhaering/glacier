import { createIsDir } from './createIsDir';
import fs from 'fs';

function run() {
  jest
    .spyOn(fs, 'statSync')
    .mockReturnValue({ isDirectory: jest.fn().mockReturnValue(true) } as any);
  const fnc = createIsDir();
  const returnValue = fnc('{{PATH}}');
  return { fnc, returnValue };
}

describe('createIsDir', () => {
  beforeEach(run);

  test('exports a function called createIsDir', () => {
    expect(createIsDir).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.statSync', () => {
    expect(fs.statSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('calls isDirectory on stats', () => {
    const stats = fs.statSync('{{PATH}}');
    expect(stats.isDirectory).toHaveBeenCalledWith();
  });

  test('returns return value of isDirectory', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });
});
