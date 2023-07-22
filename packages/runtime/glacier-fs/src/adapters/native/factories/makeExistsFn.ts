import type { ExistsFn } from '../../../interfaces/functions/ExistsFn';
import fs from 'fs';

export function makeExistsFn(): ExistsFn {
  return (path) => {
    return fs.existsSync(path);
  };
}
