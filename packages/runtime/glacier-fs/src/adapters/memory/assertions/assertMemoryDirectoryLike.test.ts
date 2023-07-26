import { assertMemoryDirectoryLike } from './assertMemoryDirectoryLike';
import { fakeMemoryDirectory } from '../../../../test/fakes/fakeMemoryDirectory';
import { assertEntryExists } from './assertEntryExists';
import { fakeMemoryFile } from '../../../../test/fakes/fakeMemoryFile';

jest.mock('./assertEntryExists', () => ({
  assertEntryExists: jest.fn()
}));

function run() {
  const entry = fakeMemoryDirectory();
  const returnValue = assertMemoryDirectoryLike('{{PATH}}', entry);
  return { returnValue };
}

function runWithFile() {
  const entry = fakeMemoryFile();
  const returnValue = assertMemoryDirectoryLike('{{PATH}}', entry);
  return { returnValue };
}

describe('assertMemoryDirectoryLike', () => {
  beforeEach(run);

  test('exports a function called assertMemoryDirectoryLike', () => {
    expect(assertMemoryDirectoryLike).toBeInstanceOf(Function);
  });

  test('calls assertEntryExists', () => {
    const entry = fakeMemoryDirectory();
    expect(assertEntryExists).toHaveBeenCalledWith('{{PATH}}', entry);
  });

  describe('if entry is not directory like', () => {
    test('throws an error', () => {
      expect(runWithFile).toThrow(
        'Expected {{PATH}} to be a volume or directory'
      );
    });
  });
});
