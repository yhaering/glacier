export function isFilePath(filePath: string): boolean {
  return filePath.startsWith('.') || filePath.startsWith('/');
}
