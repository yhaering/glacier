import { resolve } from '../../src/resolve';
import type { ResolveConfig } from '../../src/types/ResolveConfig';
import { defaultVolume } from '../volumes/defaultVolume';

const config: ResolveConfig = {
  fs: defaultVolume,
  conditions: ['node', 'import'],
  mainFields: ['main'],
  extensions: ['.js', '.ts']
};

describe('errors', () => {
  it('should throw an error if context url is a directory', () => {
    expect(() => {
      resolve('/src', '/a.js', config);
    }).toThrowError('Context URL must be a file.');
  });

  it('should throw an error if found file is a directory', () => {
    expect(() => {
      resolve('/index.js', 'dir', config);
    }).toThrowError('Unsupported Directory Import');
  });

  it('should throw an error if module could not be found', () => {
    expect(() => {
      resolve('/index.js', '/dir', config);
    }).toThrowError('Module Not Found');
  });

  it('should throw an error if module could not be found', () => {
    expect(() => {
      resolve('/index.js', 'doterror', config);
    }).toThrowError('Invalid Package Configuration');
  });

  it('should throw an error specifier is equal to #', () => {
    expect(() => {
      resolve('/index.js', '#', config);
    }).toThrowError('Invalid Module Specifier');
  });

  it('should throw an error specifier starts with #/', () => {
    expect(() => {
      resolve('/index.js', '#/test', config);
    }).toThrowError('Invalid Module Specifier');
  });

  it('should throw an error if package import does not exist', () => {
    expect(() => {
      resolve('/src/a.ts', '#doesnotexist', config);
    }).toThrowError('Package Import Not Defined');
  });

  it('should throw an error if package name is an empty string', () => {
    expect(() => {
      resolve('/src/a.ts', '', config);
    }).toThrowError('Invalid Module Specifier');
  });

  it('should throw an error if package name contains no package name but a scope', () => {
    expect(() => {
      resolve('/src/a.ts', '@test', config);
    }).toThrowError('Invalid Module Specifier');
  });

  it('should throw an error if package name starts with a %', () => {
    expect(() => {
      resolve('/src/a.ts', '%', config);
    }).toThrowError('Invalid Module Specifier');
  });

  it('should throw an error if package name ends with a /', () => {
    expect(() => {
      resolve('/src/a.ts', 'test/', config);
    }).toThrowError('Invalid Module Specifier');
  });
});
