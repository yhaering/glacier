import { assertMemoryFile } from './assertMemoryFile';
import { fakeMemoryFile } from '../../../../test/fakes/fakeMemoryFile';
import { fakeMemoryDirectory } from '../../../../test/fakes/fakeMemoryDirectory';

function run() {
  const entry = fakeMemoryFile();
  const returnValue = assertMemoryFile('{{PATH}}', entry);
  return { returnValue };
}

function runWithDirectory() {
  const entry = fakeMemoryDirectory();
  const returnValue = assertMemoryFile('{{PATH}}', entry);
  return { returnValue };
}

describe('assertMemoryFile', () => {
  beforeEach(run);

  test('exports a function called assertMemoryFile', () => {
    expect(assertMemoryFile).toBeInstanceOf(Function);
  });

  describe('if entry is not a file', () => {
    test('throws an error', () => {
      expect(runWithDirectory).toThrow('Expected {{PATH}} to be a file');
    });
  });
});
