import { findFile } from './findFile';
import fs from 'fs';

describe('findFile', () => {
  it('should return undefined if the file does not exists ', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    expect(findFile('/src/test', ['.ts'])).toBeUndefined();
  });

  it('should return path if file exists', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    expect(findFile('/src/test', ['ts'])).toBe('/src/test.ts');
  });
});
