import type { ResolveFn } from '../../../interfaces/functions/ResolveFn';
import { assertAbsolutePath } from '../assertions/assertAbsolutePath';
import { normalizePath } from '../functions/normalizePath';

export function makeResolveFn(): ResolveFn {
  return (from, ...segments) => {
    assertAbsolutePath(from);
    let resolvedPath = from;
    for (const segment of segments) {
      if (segment.startsWith('/')) {
        resolvedPath = `/${segment}`;
      } else {
        resolvedPath += `/${segment}`;
      }
    }
    return normalizePath(resolvedPath);
  };
}
