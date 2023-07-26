import { makeIsFileFn } from './makeIsFileFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertEntryExists } from '../assertions/assertEntryExists';

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn().mockReturnValue({
    type: 'FILE'
  })
}));

jest.mock('../assertions/assertEntryExists', () => ({
  assertEntryExists: jest.fn()
}));

function run() {
  const volume = fakeMemoryVolume();
  const fn = makeIsFileFn(volume);
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

function runWithDirectory() {
  (getEntry as jest.Mock).mockReturnValue({
    type: 'DIRECTORY'
  });
  return run();
}

describe('makeIsFileFn', () => {
  beforeEach(run);

  test('exports a function called makeIsFileFn', () => {
    expect(makeIsFileFn).toBeInstanceOf(Function);
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
      type: 'FILE'
    });
  });

  test('returns true if type is FILE', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  describe('if type is not FILE', () => {
    test('returns false', () => {
      const { returnValue } = runWithDirectory();
      expect(returnValue).toBe(false);
    });
  });
});
