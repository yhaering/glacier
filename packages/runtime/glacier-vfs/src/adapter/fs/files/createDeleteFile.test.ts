import { createDeleteFile } from './createDeleteFile';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'rmSync');
  const fnc = createDeleteFile();
  fnc('{{PATH}}');
  return { fnc };
}

describe('createDeleteFile', () => {
  beforeEach(run);

  test('exports a function called createDeleteFile', () => {
    expect(createDeleteFile).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.rmSync', () => {
    expect(fs.rmSync).toHaveBeenCalledWith('{{PATH}}', { force: true });
  });
});
