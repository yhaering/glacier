export class ResolveException extends Error {
  constructor(sourcePath: string, modulePath: string) {
    super(`Could not resolve '${modulePath}' from '${sourcePath}'`);
  }
}
