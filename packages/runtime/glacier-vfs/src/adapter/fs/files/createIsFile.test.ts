import { createIsFile } from './createIsFile';
import fs from 'fs';

function run() {
  jest
    .spyOn(fs, 'statSync')
    .mockReturnValue({ isFile: jest.fn().mockReturnValue(true) } as any);
  const fnc = createIsFile();
  const returnValue = fnc('{{PATH}}');
  return { fnc, returnValue };
}

describe('createIsFile', () => {
  beforeEach(run);

  test('exports a function called createIsFile', () => {
    expect(createIsFile).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.statSync', () => {
    expect(fs.statSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('calls isFile on stats', () => {
    const stats = fs.statSync('{{PATH}}');
    expect(stats.isFile).toHaveBeenCalledWith();
  });

  test('returns return value of isFile', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });
});
