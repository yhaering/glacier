import { createCreateDir } from './createCreateDir';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'mkdirSync').mockReturnValue('');
  const fnc = createCreateDir();
  fnc('{{PATH}}');
  return { fnc };
}

describe('createCreateDir', () => {
  beforeEach(run);

  test('exports a function called createCreateDir', () => {
    expect(createCreateDir).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.mkdirSync', () => {
    expect(fs.mkdirSync).toHaveBeenCalledWith('{{PATH}}', { recursive: true });
  });
});
