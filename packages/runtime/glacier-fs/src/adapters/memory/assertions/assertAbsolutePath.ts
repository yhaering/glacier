export function assertAbsolutePath(path: string): void {
  if (!path.startsWith('/')) {
    throw new Error(`Path ${path} should be absolute`);
  }
}
