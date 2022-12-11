import { createLstatSync } from './createLstatSync';

describe('creatLstatSync', () => {
  beforeEach(() => {
    createLstatSync(new Map());
  });

  test('exports a function called lstatSync', () => {
    expect(createLstatSync).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    expect(createLstatSync(new Map())).toBeInstanceOf(Function);
  });

  test('throws an error if file does not exist', () => {
    const volume = new Map();
    const lstatSync = createLstatSync(volume);
    expect(() => {
      lstatSync('{{PATH}}');
    }).toThrowError('File does not exist');
  });

  test('returns an object', () => {
    const volume = new Map();
    jest.spyOn(volume, 'get').mockReturnValue({ type: 'directory' });
    const lstatSync = createLstatSync(volume);
    const stats = lstatSync('{{PATH}}');
    expect(stats).toEqual({
      isFile: expect.any(Function),
      isDirectory: expect.any(Function)
    });
  });

  test('isFile returns true if type is file', () => {
    const volume = new Map();
    jest.spyOn(volume, 'get').mockReturnValue({ type: 'file' });
    const lstatSync = createLstatSync(volume);
    const stats = lstatSync('{{PATH}}');
    expect(stats.isFile()).toBe(true);
  });

  test('isFile returns false if type is directory', () => {
    const volume = new Map();
    jest.spyOn(volume, 'get').mockReturnValue({ type: 'directory' });
    const lstatSync = createLstatSync(volume);
    const stats = lstatSync('{{PATH}}');
    expect(stats.isFile()).toBe(false);
  });

  test('isDirectory returns true if type is directory', () => {
    const volume = new Map();
    jest.spyOn(volume, 'get').mockReturnValue({ type: 'directory' });
    const lstatSync = createLstatSync(volume);
    const stats = lstatSync('{{PATH}}');
    expect(stats.isDirectory()).toBe(true);
  });

  test('isDirectory returns false if type is file', () => {
    const volume = new Map();
    jest.spyOn(volume, 'get').mockReturnValue({ type: 'file' });
    const lstatSync = createLstatSync(volume);
    const stats = lstatSync('{{PATH}}');
    expect(stats.isDirectory()).toBe(false);
  });
});
