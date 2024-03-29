import { makeRemoveFn } from './makeRemoveFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertDeletableEntry } from '../assertions/assertDeletableEntry';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';
import { makeResolveFn } from './makeResolveFn';

jest.mock('./makeResolveFn', () => ({
  makeResolveFn: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue('{{PARENT_PATH}}'))
}));

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn()
}));

jest.mock('../assertions/assertDeletableEntry', () => ({
  assertDeletableEntry: jest.fn()
}));

jest.mock('../assertions/assertMemoryDirectoryLike', () => ({
  assertMemoryDirectoryLike: jest.fn()
}));

function run() {
  const parentEntry = {
    type: 'DIRECTORY',
    entries: {
      delete: jest.fn()
    }
  };
  (getEntry as jest.Mock)
    .mockReturnValueOnce({
      type: 'FILE',
      name: '{{NAME}}'
    })
    .mockReturnValueOnce(parentEntry);
  const volume = fakeMemoryVolume();
  const fn = makeRemoveFn(volume);
  fn('{{PATH}}');
  return { fn, parentEntry };
}

describe('makeRemoveFn', () => {
  beforeEach(run);

  test('exports a function called makeRemoveFn', () => {
    expect(makeRemoveFn).toBeInstanceOf(Function);
  });

  test('calls makeResolveFn', () => {
    expect(makeResolveFn).toHaveBeenCalledWith();
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls getEntry', () => {
    const volume = fakeMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{PATH}}');
  });

  test('calls assertNotMemoryVolume', () => {
    expect(assertDeletableEntry).toHaveBeenCalledWith(
      '{{PATH}}',
      expect.any(Object)
    );
  });

  test('calls resolve', () => {
    const resolve = makeResolveFn();
    expect(resolve).toHaveBeenCalledWith('{{PATH}}', '../');
  });

  test('calls getEntry for parent', () => {
    const volume = fakeMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{PATH}}');
  });

  test('calls assertMemoryDirectoryLike', () => {
    expect(assertMemoryDirectoryLike).toHaveBeenCalledWith(
      '{{PARENT_PATH}}',
      expect.any(Object)
    );
  });

  test('calls delete with entry name', () => {
    const { parentEntry } = run();
    expect(parentEntry.entries.delete).toHaveBeenCalledWith('{{NAME}}');
  });
});
