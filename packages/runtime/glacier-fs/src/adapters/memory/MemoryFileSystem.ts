import type { FileSystem } from '../../interfaces/FileSystem';
import type { MemoryDirectory } from './interfaces/MemoryDirectory';
import type { MemoryFile } from './interfaces/MemoryFile';
import type { JsonVolume } from './interfaces/JsonVolume';
import type { MemoryVolume } from './interfaces/MemoryVolume';

export class MemoryFileSystem implements FileSystem {
  private readonly volume: MemoryVolume;

  public constructor(volume?: JsonVolume) {
    if (volume) {
      this.volume = this.toVolume(volume);
    } else {
      this.volume = {
        type: 'DIRECTORY',
        entries: new Map()
      };
    }
  }

  private toVolume(
    volume: JsonVolume,
    parent?: MemoryDirectory,
    name?: string
  ): MemoryVolume {
    const rootDirectory: MemoryDirectory = {
      type: 'DIRECTORY',
      parent,
      name,
      entries: new Map()
    };

    for (const [key, value] of Object.entries(volume)) {
      if (typeof value === 'string') {
        rootDirectory.entries.set(key, {
          type: 'FILE',
          name: key,
          parent: rootDirectory,
          content: Buffer.from(value)
        });
      } else {
        rootDirectory.entries.set(
          key,
          this.toVolume(volume, rootDirectory, key)
        );
      }
    }

    return rootDirectory;
  }

  public createDir(path: string): void {
    if (path === '/') {
      return;
    }
    const segments = path.split('/').slice(1);
    let pointer: MemoryDirectory = this.volume;

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const entry = pointer.entries.get(segment);

      if (typeof entry === 'undefined') {
        const directory: MemoryDirectory = {
          type: 'DIRECTORY',
          name: segment,
          parent: pointer,
          entries: new Map()
        };
        pointer.entries.set(segment, directory);
        pointer = directory;
      } else if (entry.type === 'FILE') {
        throw new Error(
          `There is already a file at ${segments.slice(0, i).join('/')}`
        );
      } else if (entry.type === 'DIRECTORY') {
        pointer = entry;
      }
    }
  }

  private getEntry(path: string): MemoryFile | MemoryDirectory | undefined {
    if (path === '/') {
      return this.volume;
    }
    const segments = path.split('/').slice(1);
    let pointer: MemoryDirectory = this.volume;

    for (let i = 0; i < segments.length; i++) {
      const isLast = i === segments.length - 1;
      const segment = segments[i];
      const entry = pointer.entries.get(segment);
      if (entry) {
        if (entry.type === 'FILE') {
          if (isLast) {
            return entry;
          }
          return;
        } else {
          pointer = entry;
        }
      } else {
        return;
      }
    }

    return pointer;
  }

  public exists(path: string): boolean {
    const entry = this.getEntry(path);
    return typeof entry !== 'undefined';
  }

  public isDirectory(path: string): boolean {
    const entry = this.getEntry(path);
    if (typeof entry === 'undefined') {
      throw new Error(`Could not find ${path}`);
    }
    return entry.type === 'DIRECTORY';
  }

  public isFile(path: string): boolean {
    const entry = this.getEntry(path);
    if (typeof entry === 'undefined') {
      throw new Error(`Could not find ${path}`);
    }
    return entry.type === 'FILE';
  }

  public readDir(path: string): ReadonlySet<string> {
    const entry = this.getEntry(path);
    if (typeof entry === 'undefined') {
      throw new Error(`Could not find ${path}`);
    }
    if (entry.type === 'FILE') {
      throw new Error(`Expected a directory but got a file at ${path}`);
    }
    return new Set(entry.entries.keys());
  }

  public readFile(path: string): Buffer {
    const entry = this.getEntry(path);
    if (typeof entry === 'undefined') {
      throw new Error(`Could not find ${path}`);
    }
    if (entry.type === 'DIRECTORY') {
      throw new Error(`Expected a file but got a directory at ${path}`);
    }
    return entry.content;
  }

  public remove(path: string): void {
    const entry = this.getEntry(path);
    if (typeof entry === 'undefined') {
      throw new Error(`Could not find ${path}`);
    }
    if (
      typeof entry.parent === 'undefined' ||
      typeof entry.name === 'undefined'
    ) {
      throw new Error('Can not remove root of file system');
    }
    entry.parent.entries.delete(entry.name);
  }

  public writeFile(path: string, content: Buffer): void {
    if (path === '/') {
      throw new Error(
        'Can not create a file called / as it is the root of the file system'
      );
    }
    const segments = path.split('/');
    this.createDir(segments.slice(0, -1).join('/'));
    const directory = this.getEntry(path) as MemoryDirectory;
    const fileName = segments.pop() as string;
    directory.entries.set(fileName, {
      type: 'FILE',
      name: fileName,
      parent: directory,
      content: content
    });
  }
}
