import type { WriteFileFn } from '../../../interfaces/functions/WriteFileFn';

export function makeWriteFileFn(): WriteFileFn {
  return (path, content) => {};
}
