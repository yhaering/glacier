import { makeCreateDirFn } from './makeCreateDirFn';
import { fakeEmptyMemoryVolume } from '../../../../test/fakes/fakeEmptyMemoryVolume';
import { createMemoryDirectory } from '../functions/createMemoryDirectory';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';

jest.mock('../assertions/assertMemoryDirectoryLike', () => ({
  assertMemoryDirectoryLike: jest.fn()
}));

jest.mock('../functions/createMemoryDirectory', () => ({
  createMemoryDirectory: jest.fn().mockImplementation((name: string) => {
    return {
      type: 'DIRECTORY',
      name,
      entries: new Map()
    };
  })
}));

function run(path: string = '/users/jest') {
  const volume = fakeEmptyMemoryVolume();
  const fn = makeCreateDirFn(volume);
  fn(path);
  return { fn, volume };
}

function runWithExistingDirectory() {
  const volume = fakeMemoryVolume();
  const fn = makeCreateDirFn(volume);
  fn('/users/home');
  return { fn, volume };
}

describe('makeCreateDirFn', () => {
  beforeEach(run);

  test('exports a function called makeCreateDirFn', () => {
    expect(makeCreateDirFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls createMemoryDirectory', () => {
    expect(createMemoryDirectory).toHaveBeenCalledWith('users');
    expect(createMemoryDirectory).toHaveBeenCalledWith('jest');
  });

  test('creates directory structure', () => {
    const { volume } = run();
    expect(volume).toEqual({
      type: 'VOLUME',
      entries: new Map([
        [
          'users',
          {
            type: 'DIRECTORY',
            name: 'users',
            entries: new Map([
              [
                'jest',
                {
                  type: 'DIRECTORY',
                  name: 'jest',
                  entries: new Map()
                }
              ]
            ])
          }
        ]
      ])
    });
  });

  describe('if folder already exists', () => {
    beforeEach(runWithExistingDirectory);

    test('calls assertMemoryDirectoryLike', () => {
      const volume = fakeMemoryVolume();
      const users = volume.entries.get('users') as MemoryDirectory;
      const home = users.entries.get('home');
      expect(assertMemoryDirectoryLike).toHaveBeenCalledWith('/users', users);
      expect(assertMemoryDirectoryLike).toHaveBeenCalledWith(
        '/users/home',
        home
      );
    });
  });
});
