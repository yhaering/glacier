import { assertEntryExists } from './assertEntryExists';
import { fakeEmptyMemoryVolume } from '../../../../test/fakes/fakeEmptyMemoryVolume';

function run() {
  const entry = fakeEmptyMemoryVolume();
  const returnValue = assertEntryExists('{{PATH}}', entry);
  return { returnValue };
}

function runWithUndefined() {
  const returnValue = assertEntryExists('{{PATH}}');
  return { returnValue };
}

describe('assertEntryExists', () => {
  beforeEach(run);

  test('exports a function called assertEntryExists', () => {
    expect(assertEntryExists).toBeInstanceOf(Function);
  });

  describe('if entry is undefined', () => {
    test('throws an error', () => {
      expect(runWithUndefined).toThrow('Expected entry at {{PATH}} to exist');
    });
  });
});
