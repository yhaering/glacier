import { makeExistsFn } from './makeExistsFn';
import { fakeEmptyMemoryVolume } from '../../../../test/fakes/fakeEmptyMemoryVolume';
import { getEntry } from '../functions/getEntry';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn()
}));

function run() {
  const volume = fakeEmptyMemoryVolume();
  const fn = makeExistsFn(volume);
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

function runWithEntry() {
  const entry = fakeMemoryVolume();
  (getEntry as jest.Mock).mockReturnValue(entry);
  return run();
}

describe('makeExistsFn', () => {
  beforeEach(run);

  test('exports a function called makeExistsFn', () => {
    expect(makeExistsFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls getEntry', () => {
    const volume = fakeEmptyMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{PATH}}');
  });

  test('returns false if getEntry returns undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(false);
  });

  describe('if getEntry returns an entry', () => {
    test('return true', () => {
      const { returnValue } = runWithEntry();
      expect(returnValue).toBe(true);
    });
  });
});
