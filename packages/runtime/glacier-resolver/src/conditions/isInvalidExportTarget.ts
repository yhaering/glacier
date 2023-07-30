import { isValidURL } from './isValidURL';

export function isInvalidExportTarget(target: string): boolean {
  return (
    target.startsWith('../') || target.startsWith('/') || isValidURL(target)
  );
}
