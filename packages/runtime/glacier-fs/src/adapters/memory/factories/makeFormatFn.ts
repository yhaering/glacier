import type { FormatFn } from '../../../interfaces/functions/FormatFn';

export function makeFormatFn(): FormatFn {
  return (parsedPath) => {
    const basePath = parsedPath.dir ? `${parsedPath.dir}/` : parsedPath.root;
    const extDot = parsedPath.ext?.startsWith('.') ? '' : '.';
    const fileName = `${parsedPath.name}${extDot}${parsedPath.ext}`;
    const baseName = parsedPath.base ?? `${fileName}`;
    return `${basePath}${baseName}`;
  };
}
