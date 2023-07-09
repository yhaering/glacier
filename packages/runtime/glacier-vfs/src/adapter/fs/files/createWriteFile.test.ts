import { createWriteFile } from './createWriteFile';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'writeFileSync');
  const fnc = createWriteFile();
  const buffer = Buffer.from('');
  fnc('{{PATH}}', buffer);
  return { fnc, buffer };
}

describe('createWriteFile', () => {
  beforeEach(run);

  test('exports a function called createWriteFile', () => {
    expect(createWriteFile).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.writeFileSync', () => {
    const { buffer } = run();
    expect(fs.writeFileSync).toHaveBeenCalledWith('{{PATH}}', buffer);
  });
});
