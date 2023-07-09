import type { VFSWriteFile } from '../../../interfaces/files/VFSWriteFile';
import fs from 'fs';

export function createWriteFile(): VFSWriteFile {
  return (path, buffer) => {
    fs.writeFileSync(path, buffer);
  };
}
