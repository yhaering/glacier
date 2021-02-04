import { ResolvedModule } from './ResolvedModule';

/**
 * A Module is an unresolved import.
 */
export class Module {
  /**
   * The import path that is used to import the module
   * @private
   */
  private readonly importPath: string;

  /**
   * The ResolvedModule that imported the Module
   * @private
   */
  private readonly issuer: ResolvedModule;

  /**
   * @constructor
   * @param issuer
   * @param importPath
   */
  constructor(issuer: ResolvedModule, importPath: string) {
    this.issuer = issuer;
    this.importPath = importPath;
  }

  /**
   * Returns the path that has been used to import
   * this module.
   */
  public getImportPath(): string {
    return this.importPath;
  }

  /**
   * Returns the issuer of the module.
   */
  public getIssuer(): ResolvedModule {
    return this.issuer;
  }
}
