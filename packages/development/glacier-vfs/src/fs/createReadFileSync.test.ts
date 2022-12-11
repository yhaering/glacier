import { createReadFileSync } from './createReadFileSync';

describe('createReadFileSync', () => {
  beforeEach(() => {
    createReadFileSync(new Map());
  });

  test('exports a function called createReadFileSync', () => {
    expect(createReadFileSync).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    expect(createReadFileSync(new Map())).toBeInstanceOf(Function);
  });

  test('throws an error if file does not exist', () => {
    const volume = new Map();
    const readFileSync = createReadFileSync(volume);
    expect(() => {
      readFileSync('{{PATH}}', 'utf-8');
    }).toThrowError('File does not exist');
  });

  test('throws an error if path is a directory', () => {
    const volume = new Map();
    jest.spyOn(volume, 'get').mockReturnValue({ type: 'directory' });
    const readFileSync = createReadFileSync(volume);
    expect(() => {
      readFileSync('{{PATH}}', 'utf-8');
    }).toThrowError('Can not read directory');
  });

  test('returns file content', () => {
    const volume = new Map();
    jest
      .spyOn(volume, 'get')
      .mockReturnValue({ type: 'file', content: '{{CONTENT}}' });
    const readFileSync = createReadFileSync(volume);
    const content = readFileSync('{{PATH}}', 'utf-8');
    expect(content).toBe('{{CONTENT}}');
  });
});
