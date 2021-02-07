export function normalizePath(windowsPath: string): string {
  const isExtendedLengthPath = /^\\\\\?\\/.test(windowsPath);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(windowsPath); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return windowsPath;
  }

  return windowsPath.replace(/\\/g, '/');
}
