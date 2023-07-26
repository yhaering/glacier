import type { FormatFn } from '../../../interfaces/functions/FormatFn';
import path from 'node:path';

export function makeFormatFn(): FormatFn {
  return (parsedPath) => {
    return path.format(parsedPath);
  };
}
