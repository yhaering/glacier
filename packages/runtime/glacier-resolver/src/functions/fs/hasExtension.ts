import path from 'path';

export function hasExtension(filePath: string): boolean {
  const extension = path.extname(filePath);
  return extension !== '';
}
