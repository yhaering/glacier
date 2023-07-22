import type { FileSystem } from '../../interfaces/FileSystem';
import fs from 'fs';

export class NativeFileSystem implements FileSystem {
  public createDir(path: string): void {
    fs.mkdirSync(path, { recursive: true });
  }

  public exists(path: string): boolean {
    return fs.existsSync(path);
  }

  public isDirectory(path: string): boolean {
    const stats = fs.statSync(path);
    return stats.isDirectory();
  }

  public isFile(path: string): boolean {
    const stats = fs.statSync(path);
    return stats.isFile();
  }

  public readDir(path: string): ReadonlySet<string> {
    const entries = fs.readdirSync(path);
    return new Set(entries);
  }

  public readFile(path: string): Buffer {
    return fs.readFileSync(path);
  }

  public remove(path: string): void {
    fs.rmSync(path, { force: true, recursive: true });
  }

  public writeFile(path: string, content: Buffer): void {
    fs.writeFileSync(path, content);
  }
}
