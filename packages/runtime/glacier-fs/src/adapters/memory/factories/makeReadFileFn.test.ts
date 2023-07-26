import { makeReadFileFn } from './makeReadFileFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertMemoryFile } from '../assertions/assertMemoryFile';

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn().mockReturnValue({
    content: '{{CONTENT}}'
  })
}));

jest.mock('../assertions/assertMemoryFile', () => ({
  assertMemoryFile: jest.fn()
}));

function run() {
  const volume = fakeMemoryVolume();
  const fn = makeReadFileFn(volume);
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeReadFileFn', () => {
  beforeEach(run);

  test('exports a function called makeReadFileFn', () => {
    expect(makeReadFileFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls getEntry', () => {
    const volume = fakeMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{PATH}}');
  });

  test('calls assertMemoryFile', () => {
    expect(assertMemoryFile).toHaveBeenCalledWith(
      '{{PATH}}',
      expect.any(Object)
    );
  });

  test('returns value of entry.content', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{CONTENT}}');
  });
});
