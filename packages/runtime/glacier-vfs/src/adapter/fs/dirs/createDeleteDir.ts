import type { VFSDeleteDir } from '../../../interfaces/dirs/VFSDeleteDir';
import fs from 'fs';

export function createDeleteDir(): VFSDeleteDir {
  return (path) => {
    fs.rmSync(path, { recursive: true, force: true });
  };
}
