import { getEntry } from './getEntry';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';

function run(path = '/users/home/index.txt') {
  const volume = fakeMemoryVolume();
  const returnValue = getEntry(volume, path);
  return { returnValue };
}

describe('getEntry', () => {
  beforeEach(run);

  test('exports a function called getEntry', () => {
    expect(getEntry).toBeInstanceOf(Function);
  });

  test('returns a MemoryFile', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'FILE',
      name: 'index.txt',
      content: Buffer.from('Hello World')
    });
  });

  describe('if path equals /users/home/index.txt/test', () => {
    test('returns undefined', () => {
      const { returnValue } = run('/users/home/index.txt/test');
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if path equals /tmp', () => {
    test('returns undefined', () => {
      const { returnValue } = run('/tmp');
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if path equals /users', () => {
    test('returns MemoryDirectory', () => {
      const { returnValue } = run('/users');
      expect(returnValue).toEqual({
        type: 'DIRECTORY',
        name: 'users',
        entries: new Map([
          [
            'home',
            {
              type: 'DIRECTORY',
              name: 'home',
              entries: new Map([
                [
                  'index.txt',
                  {
                    type: 'FILE',
                    name: 'index.txt',
                    content: Buffer.from('Hello World')
                  }
                ]
              ])
            }
          ]
        ])
      });
    });
  });

  describe('if path equals /users/', () => {
    test('returns MemoryDirectory', () => {
      const { returnValue } = run('/users/');
      expect(returnValue).toEqual({
        type: 'DIRECTORY',
        name: 'users',
        entries: new Map([
          [
            'home',
            {
              type: 'DIRECTORY',
              name: 'home',
              entries: new Map([
                [
                  'index.txt',
                  {
                    type: 'FILE',
                    name: 'index.txt',
                    content: Buffer.from('Hello World')
                  }
                ]
              ])
            }
          ]
        ])
      });
    });
  });

  describe('if path equals /', () => {
    test('returns memory volume', () => {
      const { returnValue } = run('/');
      const memoryVolume = fakeMemoryVolume();
      expect(returnValue).toEqual(memoryVolume);
    });
  });
});
