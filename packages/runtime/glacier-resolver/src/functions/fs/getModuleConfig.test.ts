import { getModuleConfig } from './getModuleConfig';
import fs from 'fs';

jest.mock('fs');
describe('getModuleConfig', () => {
  beforeEach(() => {
    jest.spyOn(JSON, 'parse').mockReturnValue('{{PARSED}}');
    (fs.readFileSync as jest.Mock).mockReturnValue('{{CONTENT}}');
    getModuleConfig('{{FILE_PATH}}');
  });

  test('exports a function called getModuleConfig', () => {
    expect(getModuleConfig).toBeInstanceOf(Function);
  });

  test('calls fs.readFileSync with file path', () => {
    expect(fs.readFileSync).toHaveBeenCalledWith('{{FILE_PATH}}', 'utf-8');
  });

  test('parse config content', () => {
    expect(JSON.parse).toHaveBeenCalledWith('{{CONTENT}}');
  });

  test('return parsed content', () => {
    const content = getModuleConfig('{{FILE_PATH}}');
    expect(content).toBe('{{PARSED}}');
  });
});
