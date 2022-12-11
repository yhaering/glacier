import { findFile } from './findFile';
import fs from 'fs';
import path from 'path';

jest.mock('fs');
jest.mock('path');

describe('findFile', () => {
  beforeEach(() => {
    (path.resolve as jest.Mock).mockReturnValue('{{RESOLVED}}');
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    findFile('{{CWD}}', '{{FILENAME}}', ['{{EXTENSION}}']);
  });

  test('call path.resolve for every extension', () => {
    expect(path.resolve).toHaveBeenCalledWith(
      '{{CWD}}',
      '{{FILENAME}}{{EXTENSION}}'
    );
  });

  test('call fs.existSync for every extension', () => {
    expect(fs.existsSync('{{RESOLVED}}'));
  });

  test('returns the file path if the file exists', () => {
    const filePath = findFile('{{CWD}}', '{{FILENAME}}', ['{{EXTENSION}}']);
    expect(filePath).toBe('{{RESOLVED}}');
  });

  test('return undefined if file does not exist', () => {
    (fs.existsSync as jest.Mock).mockReturnValueOnce(false);
    const filePath = findFile('{{CWD}}', '{{FILENAME}}', ['{{EXTENSION}}']);
    expect(filePath).toBeUndefined();
  });
});
