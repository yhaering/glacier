import path from 'path';
import { isDirectory } from './functions/fs/isDirectory';
import { isFilePath } from './functions/fs/isFilePath';
import type { ResolveConfig } from './types/ResolveConfig';
import { packageImportsResolve } from './functions/resolver/packageImportsResolve';
import { packageResolve } from './functions/resolver/packageResolve';

export function resolve(
  parentURL: string,
  specifier: string,
  config: ResolveConfig
): string {
  let resolved: string;
  parentURL = path.dirname(parentURL);

  if (isFilePath(specifier)) {
    // Set resolved to the URL resolution of specifier relative to parentURL.
    resolved = path.resolve(parentURL, specifier);
  }
  // Otherwise, if specifier starts with "#", then
  else if (specifier.startsWith('#')) {
    // Set resolved to the result of PACKAGE_IMPORTS_RESOLVE(specifier, parentURL).
    resolved = packageImportsResolve(specifier, parentURL, config);
  }
  // Otherwise,
  else {
    // Note: specifier is now a bare specifier.
    // Set resolved the result of PACKAGE_RESOLVE(specifier, parentURL).
    resolved = packageResolve(specifier, parentURL, config);
  }

  // If the file at resolved is a directory, then
  if (isDirectory(resolved, config.fs)) {
    // Throw an Unsupported Directory Import error.
    throw new Error('Unsupported Directory Import');
  }

  // If the file at resolved does not exist, then
  if (!config.fs.existsSync(resolved)) {
    // Throw a Module Not Found error.
    throw new Error('Module Not Found');
  }

  return resolved;
}
