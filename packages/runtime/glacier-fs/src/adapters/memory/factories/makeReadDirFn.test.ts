import { makeReadDirFn } from './makeReadDirFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertMemoryDirectory } from '../assertions/assertMemoryDirectory';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn().mockReturnValue({
    entries: {
      keys: jest.fn().mockReturnValue(['{{KEY}}'])
    }
  })
}));

jest.mock('../assertions/assertMemoryDirectory', () => ({
  assertMemoryDirectory: jest.fn()
}));

function run() {
  const volume = fakeMemoryVolume();
  const fn = makeReadDirFn(volume);
  const returnValue = fn('{{PATH}}');
  return { returnValue, fn };
}

describe('makeReadDirFn', () => {
  beforeEach(run);

  test('exports a function called makeReadDirFn', () => {
    expect(makeReadDirFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls getEntry', () => {
    const volume = fakeMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{PATH}}');
  });

  test('calls assertMemoryDirectory', () => {
    expect(assertMemoryDirectory).toHaveBeenCalledWith(
      '{{PATH}}',
      expect.any(Object)
    );
  });

  test('calls entries.keys', () => {
    const volume = fakeMemoryVolume();
    const entry = getEntry(volume, '{{PATH}}') as MemoryDirectory;
    expect(entry.entries.keys).toHaveBeenCalledWith();
  });

  test('returns set of entries', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual(new Set(['{{KEY}}']));
  });
});
