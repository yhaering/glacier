import { assertDeletableEntry } from './assertDeletableEntry';
import { fakeMemoryFile } from '../../../../test/fakes/fakeMemoryFile';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';

function run() {
  const entry = fakeMemoryFile();
  const returnValue = assertDeletableEntry('{{PATH}}', entry);
  return { returnValue };
}

function runWithVolume() {
  const entry = fakeMemoryVolume();
  const returnValue = assertDeletableEntry('{{PATH}}', entry);
  return { returnValue };
}

describe('assertDeletableEntry', () => {
  beforeEach(run);

  test('exports a function called assertDeletableEntry', () => {
    expect(assertDeletableEntry).toBeInstanceOf(Function);
  });

  describe('if entry is a volume', () => {
    test('throws an error', () => {
      expect(runWithVolume).toThrow(
        'Expected {{PATH}} to be a file or directory'
      );
    });
  });
});
