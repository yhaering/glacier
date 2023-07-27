import { assertAbsolutePath } from '../assertions/assertAbsolutePath';

export function normalizePath(path: string): string {
  assertAbsolutePath(path);
  return (
    '/' +
    path
      .split('/')
      .filter((segment) => {
        return segment && segment !== '.';
      })
      .reduce<string[]>((segments, segment) => {
        if (segment === '..') {
          segments.pop();
        } else {
          segments.push(segment);
        }
        return segments;
      }, [])
      .join('/')
  );
}
