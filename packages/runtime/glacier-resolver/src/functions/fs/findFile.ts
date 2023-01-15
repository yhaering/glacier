import type { Optional } from '@glacier/types';
import path from 'path';
import type { VirtualFileSystem } from '@glacier/vfs';

export function findFile(
  filePath: string,
  extensions: string[],
  fs: VirtualFileSystem
): Optional<string> {
  const extension = path.extname(filePath);
  if (extension !== '') {
    return filePath;
  }
  for (const extension of extensions) {
    const fileWithExtension = filePath + extension;
    if (fs.existsSync(fileWithExtension)) {
      return fileWithExtension;
    }
  }
}
