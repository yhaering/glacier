import { createReadFile } from './createReadFile';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'readFileSync').mockReturnValue('{{BUFFER}}');
  const fnc = createReadFile();
  const returnValue = fnc('{{PATH}}');
  return { fnc, returnValue };
}

describe('createReadFile', () => {
  beforeEach(run);

  test('exports a function called createReadFile', () => {
    expect(createReadFile).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.readFileSync', () => {
    expect(fs.readFileSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns return value of fs.readFileSync', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{BUFFER}}');
  });
});
