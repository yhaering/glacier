import { createHasFile } from './createHasFile';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'existsSync').mockReturnValue(true);
  const fnc = createHasFile();
  const returnValue = fnc('{{PATH}}');
  return { fnc, returnValue };
}

describe('createHasFile', () => {
  beforeEach(run);

  test('exports a function called createHasFile', () => {
    expect(createHasFile).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.existsSync', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns return value of fs.existSync', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });
});
