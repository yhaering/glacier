import { isLineTerminator } from './isLineTerminator';

export function whileString(separator: string) {
  return (char: string): boolean => {
    return !(isLineTerminator(char) || char === separator);
  };
}
