export interface FileSystem {
  isDirectory: (path: string) => boolean;
  isFile: (path: string) => boolean;
  exists: (path: string) => boolean;
  remove: (path: string) => void;
  writeFile: (path: string, content: Buffer) => void;
  readFile: (path: string) => Buffer;
  readDir: (path: string) => ReadonlySet<string>;
  createDir: (path: string) => void;
}
