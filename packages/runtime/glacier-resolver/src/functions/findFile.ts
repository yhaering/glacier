import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function findFile(
  url: string,
  { fs, extensions }: ResolverConfig
): string | undefined {
  if (fs.exists(url)) {
    return url;
  }
  for (const extension of extensions) {
    const joinedPath = `${url}${extension}`;
    if (fs.exists(joinedPath)) {
      return joinedPath;
    }
  }
}
