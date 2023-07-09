import { createHasDir } from './createHasDir';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'existsSync').mockReturnValue(true);
  const fnc = createHasDir();
  const returnValue = fnc('{{PATH}}');
  return { returnValue, fnc };
}

describe('createHasDir', () => {
  beforeEach(run);

  test('exports a function called createHasDir', () => {
    expect(createHasDir).toBeInstanceOf(Function);
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
