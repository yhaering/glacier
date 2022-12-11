import type { VirtualFileSystem } from '@glacier/vfs';

export function isDirectory(dirPath: string, fs: VirtualFileSystem): boolean {
  if (!fs.existsSync(dirPath)) {
    return false;
  }
  const lstat = fs.lstatSync(dirPath);
  return lstat.isDirectory();
}
