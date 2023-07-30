import type { FileSystem } from '../../src/interfaces/FileSystem';

export function mockFileSystem(): FileSystem {
  return {
    parse: jest.fn().mockReturnValue({
      root: '{{ROOT}}',
      dir: '{{DIR}}',
      base: '{{DIR}}',
      name: '{{NAME}}',
      ext: '{{EXT}}'
    }),
    resolve: jest.fn().mockReturnValue('{{RESOLVED}}'),
    exists: jest.fn().mockReturnValue(true),
    isDirectory: jest.fn().mockReturnValue(true),
    readFile: jest.fn().mockReturnValue(Buffer.from('{{CONTENT}}')),
    format: jest.fn().mockReturnValue('{{FORMAT}}'),
    isFile: jest.fn().mockReturnValue(true),
    readDir: jest.fn().mockReturnValue(new Set()),
    remove: jest.fn(),
    createDir: jest.fn(),
    relative: jest.fn().mockReturnValue('{{RELATIVE}}'),
    writeFile: jest.fn()
  };
}
