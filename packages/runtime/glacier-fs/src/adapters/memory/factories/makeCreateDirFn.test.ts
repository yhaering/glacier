import { makeCreateDirFn } from './makeCreateDirFn';
import { fakeEmptyMemoryVolume } from '../../../../test/fakes/fakeEmptyMemoryVolume';
import { assertNotRootPath } from '../assertions/assertNotRootPath';
import { createMemoryDirectory } from '../functions/createMemoryDirectory';

jest.mock('../assertions/assertNotRootPath', () => ({
  assertNotRootPath: jest.fn()
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

describe('makeCreateDirFn', () => {
  beforeEach(run);

  test('exports a function called makeCreateDirFn', () => {
    expect(makeCreateDirFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls assertNotRootPath', () => {
    expect(assertNotRootPath).toHaveBeenCalledWith('/users/jest');
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
});
