export class EntryNotFound extends Error {
  public constructor(path: string) {
    super();
    this.name = 'EntryNotFound';
    this.message = `Could not find a file or directory at ${path}`;
  }
}
