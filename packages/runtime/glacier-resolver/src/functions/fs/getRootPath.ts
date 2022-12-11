import path from 'path';

export function getRootPath(parentURL: string): string {
  const { root } = path.parse(parentURL);
  return root;
}
