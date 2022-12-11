import fs from 'fs';

export function resolveFileWithExtension(filePath: string): string | undefined {
  const fileExists = fs.existsSync(filePath);
  if (fileExists) {
    return filePath;
  }
}
