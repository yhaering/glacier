import { createMemoryFs } from '../../src/adapters/memory/createMemoryFs';

describe('Scenario #1', () => {
  const volume = createMemoryFs();

  it('should create an empty volume', () => {
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({});
  });

  it('should add a new directory', () => {
    volume.createDir('/users');
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({ users: {} });
  });

  it('should add a new sub directory', () => {
    volume.createDir('/users/home');
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({ users: { home: {} } });
  });

  it('should write to a new file', () => {
    volume.writeFile('/users/home/test.txt', Buffer.from('Test'));
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({ users: { home: { 'test.txt': 'Test' } } });
  });

  it('should remove the file', () => {
    volume.remove('/users/home/test.txt');
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({ users: { home: {} } });
  });

  it('should write to a new file and create directories', () => {
    volume.writeFile('/users/home/tmp/test.txt', Buffer.from('Test'));
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({
      users: { home: { tmp: { 'test.txt': 'Test' } } }
    });
  });

  it('should return all entries in directory', () => {
    const entries = volume.readDir('/users/home/tmp');
    expect(entries).toEqual(new Set(['test.txt']));
  });

  it('should read file', () => {
    const entries = volume.readFile('/users/home/tmp/test.txt');
    expect(entries).toEqual(Buffer.from('Test'));
  });

  it('should return true if path is a file', () => {
    const isFile = volume.isFile('/users/home/tmp/test.txt');
    expect(isFile).toEqual(true);
  });

  it('should remove directory', () => {
    volume.remove('/users/home');
    const snapshot = volume.toJson();
    expect(snapshot).toEqual({ users: {} });
  });

  it('should return true if path is a directory', () => {
    const isDirectory = volume.isDirectory('/users');
    expect(isDirectory).toEqual(true);
  });

  it('should return true if path exists', () => {
    const isDirectory = volume.exists('/users');
    expect(isDirectory).toEqual(true);
  });
});
