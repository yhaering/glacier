import type { WriteFileFn } from '../../../interfaces/functions/WriteFileFn';
import fs from 'node:fs';

export function makeWriteFileFn(): WriteFileFn {
  return (path, content) => {
    fs.writeFileSync(path, content);
  };
}
