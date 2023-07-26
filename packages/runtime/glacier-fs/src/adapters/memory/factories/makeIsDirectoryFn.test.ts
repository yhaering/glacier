import { makeIsDirectoryFn } from './makeIsDirectoryFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertEntryExists } from '../assertions/assertEntryExists';

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn().mockReturnValue({
    type: 'DIRECTORY'
  })
}));

jest.mock('../assertions/assertEntryExists', () => ({
  assertEntryExists: jest.fn()
}));

function run() {
  const volume = fakeMemoryVolume();
  const fn = makeIsDirectoryFn(volume);
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

function runWithFile() {
  (getEntry as jest.Mock).mockReturnValue({
    type: 'FILE'
  });
  return run();
}

describe('makeIsDirectoryFn', () => {
  beforeEach(run);

  test('exports a function called makeIsDirectoryFn', () => {
    expect(makeIsDirectoryFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls getEntry', () => {
    const volume = fakeMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{PATH}}');
  });

  test('calls assertEntryExists', () => {
    expect(assertEntryExists).toHaveBeenCalledWith('{{PATH}}', {
      type: 'DIRECTORY'
    });
  });

  test('returns true if type is directory', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  describe('if type is not directory', () => {
    test('returns false', () => {
      const { returnValue } = runWithFile();
      expect(returnValue).toBe(false);
    });
  });
});
