export function assertNoTrailingSlash(str: string) {
  if (str.endsWith('/')) {
    throw new Error(`Expected ${str} to not end with /`);
  }
}
