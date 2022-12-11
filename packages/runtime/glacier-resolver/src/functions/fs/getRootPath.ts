import path from 'path';

/**
 * Returns the file systems root directory path.
 * For Windows this could be "c:" and for Linux "/"
 */
export function getRootPath(): string {
  const cwd = process.cwd();
  const { root } = path.parse(cwd);
  return root;
}
