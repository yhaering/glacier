import { isDirectory } from './isDirectory';
import type { VirtualFileSystem } from '@glacier/vfs/types';

let fs: VirtualFileSystem;;

describe('isDirectory', () => {
  beforeEach(() => {
    fs = {
      existsSync: jest.fn().mockReturnValue(true),
      lstatSync: jest.fn().mockReturnValue({
        isDirectory: jest.fn().mockReturnValue('{{IS_DIRECTORY}}')
      })
    } as unknown as VirtualFileSystem
    isDirectory('{{DIRECTORY_PATH}}', fs);
  });

  test('exports a function called isDirectory', () => {
    expect(isDirectory).toBeInstanceOf(Function);
  });

  test('check if directory exists', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{DIRECTORY_PATH}}');
  });

  test('return false if directory does not exist', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    expect(isDirectory('{{DIRECTORY_PATH}}', fs)).toBe(false);
  });

  test('calls fs.lstatSync with directory path', () => {
    expect(fs.lstatSync).toHaveBeenCalledWith('{{DIRECTORY_PATH}}');
  });

  test('returns outcome of isDirectory', () => {
    const stats = fs.lstatSync('{{PATH}}');
    expect(stats.isDirectory).toHaveBeenCalledWith();
    expect(isDirectory('{{DIRECTORY_PATH}}', fs)).toBe('{{IS_DIRECTORY}}');
  });
});
