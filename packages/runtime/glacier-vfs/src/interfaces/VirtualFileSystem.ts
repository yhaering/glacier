import type { VFSReadFile } from './files/VFSReadFile';
import type { VFSWriteFile } from './files/VFSWriteFile';
import type { VFSHasFile } from './files/VFSHasFile';
import type { VFSDeleteFile } from './files/VFSDeleteFile';
import type { VFSDeleteDir } from './dirs/VFSDeleteDir';
import type { VFSCreateDir } from './dirs/VFSCreateDir';
import type { VFSHasDir } from './dirs/VFSHasDir';
import type { VFSGetFileSize } from './files/VFSGetFileSize';
import type { VFSIsFile } from './files/VFSIsFile';
import type { VFSIsDir } from './dirs/VFSIsDir';

export interface VirtualFileSystem {
  readFile: VFSReadFile;
  writeFile: VFSWriteFile;
  hasFile: VFSHasFile;
  deleteFile: VFSDeleteFile;
  getFileSize: VFSGetFileSize;
  isFile: VFSIsFile;
  deleteDir: VFSDeleteDir;
  createDir: VFSCreateDir;
  hasDir: VFSHasDir;
  isDir: VFSIsDir;
}
