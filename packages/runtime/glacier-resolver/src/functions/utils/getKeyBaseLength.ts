export function getKeyBaseLength(key: string): number {
  const isPattern = key.includes('*');
  if (isPattern) {
    return key.indexOf('*') + 1;
  }
  return key.length;
}
