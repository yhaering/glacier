import type { VirtualFileSystem } from '../../interfaces/VirtualFileSystem';
import { createCreateDir } from './dirs/createCreateDir';
import { createDeleteFile } from './files/createDeleteFile';
import { createDeleteDir } from './dirs/createDeleteDir';
import { createGetFileSize } from './files/createGetFileSize';
import { createHasFile } from './files/createHasFile';
import { createHasDir } from './dirs/createHasDir';
import { createIsFile } from './files/createIsFile';
import { createIsDir } from './dirs/createIsDir';
import { createReadFile } from './files/createReadFile';
import { createWriteFile } from './files/createWriteFile';

export function createFsAdapter(): VirtualFileSystem {
  return {
    createDir: createCreateDir(),
    deleteFile: createDeleteFile(),
    deleteDir: createDeleteDir(),
    getFileSize: createGetFileSize(),
    hasFile: createHasFile(),
    hasDir: createHasDir(),
    isFile: createIsFile(),
    isDir: createIsDir(),
    readFile: createReadFile(),
    writeFile: createWriteFile()
  };
}
