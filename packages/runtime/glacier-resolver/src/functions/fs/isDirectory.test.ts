import { isDirectory } from './isDirectory';
import fs from 'fs';

jest.mock('fs');

describe('isDirectory', () => {
  beforeEach(() => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.lstatSync as jest.Mock).mockReturnValue({
      isDirectory: jest.fn().mockReturnValue('{{IS_DIRECTORY}}')
    });
    isDirectory('{{DIRECTORY_PATH}}');
  });

  test('exports a function called isDirectory', () => {
    expect(isDirectory).toBeInstanceOf(Function);
  });

  test('check if directory exists', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{DIRECTORY_PATH}}');
  });

  test('return false if directory does not exist', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    expect(isDirectory('{{DIRECTORY_PATH}}')).toBe(false);
  });

  test('calls fs.lstatSync with directory path', () => {
    expect(fs.lstatSync).toHaveBeenCalledWith('{{DIRECTORY_PATH}}');
  });

  test('returns outcome of isDirectory', () => {
    const stats = fs.lstatSync('{{PATH}}');
    expect(stats.isDirectory).toHaveBeenCalledWith();
    expect(isDirectory('{{DIRECTORY_PATH}}')).toBe('{{IS_DIRECTORY}}');
  });
});
