import { createDeleteDir } from './createDeleteDir';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'rmSync');
  const fnc = createDeleteDir();
  fnc('{{PATH}}');
  return { fnc };
}

describe('createDeleteDir', () => {
  beforeEach(run);

  test('exports a function called createDeleteDir', () => {
    expect(createDeleteDir).toBeInstanceOf(Function);
  });
  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('calls fs.rmSync', () => {
    expect(fs.rmSync).toHaveBeenCalledWith('{{PATH}}', {
      force: true,
      recursive: true
    });
  });
});
