export function assertNotRootPath(path: string): void {
  if (path === '/') {
    throw new Error('Expected path to not be the root of the file system');
  }
}
