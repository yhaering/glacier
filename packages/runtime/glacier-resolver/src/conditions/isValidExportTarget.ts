import { isValidURL } from './isValidURL';

export function isValidExportTarget(target: string): boolean {
  return !(
    target.startsWith('../') ||
    target.startsWith('/') ||
    isValidURL(target)
  );
}
