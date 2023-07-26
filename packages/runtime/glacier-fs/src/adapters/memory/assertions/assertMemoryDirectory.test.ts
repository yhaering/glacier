import { assertMemoryDirectory } from './assertMemoryDirectory';
import { fakeMemoryDirectory } from '../../../../test/fakes/fakeMemoryDirectory';
import { fakeMemoryFile } from '../../../../test/fakes/fakeMemoryFile';

function run() {
  const entry = fakeMemoryDirectory();
  const returnValue = assertMemoryDirectory('{{PATH}}', entry);
  return { returnValue };
}

function runWithFile() {
  const entry = fakeMemoryFile();
  const returnValue = assertMemoryDirectory('{{PATH}}', entry);
  return { returnValue };
}

describe('assertMemoryDirectory', () => {
  beforeEach(run);

  test('exports a function called assertMemoryDirectory', () => {
    expect(assertMemoryDirectory).toBeInstanceOf(Function);
  });

  describe('if entry is not a directory', () => {
    test('throw an error', () => {
      expect(runWithFile).toThrow('Expected {{PATH}} to be a directory');
    });
  });
});
