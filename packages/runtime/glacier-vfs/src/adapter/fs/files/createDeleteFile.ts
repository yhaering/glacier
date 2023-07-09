import type { VFSDeleteFile } from '../../../interfaces/files/VFSDeleteFile';
import fs from 'fs';

export function createDeleteFile(): VFSDeleteFile {
  return (path) => {
    fs.rmSync(path, { force: true });
  };
}
