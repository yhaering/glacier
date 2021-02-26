import { readFileSync } from 'fs';
import { basename, extname } from 'path';
import { ImportedModule } from './ImportedModule';

/**
 * A Module is an importable file of any kind.
 */
export class ResolvedModule {
  /**
   * The absolute path to the module
   * @private
   */
  protected readonly sourcePath: string;

  /**
   * Contains the content of the Module
   * @private
   */
  protected content?: Buffer;

  /**
   * Contains the module extension
   * @protected
   */
  protected extension: string;

  /**
   * A list of all imports
   * @protected
   */
  protected imports: ImportedModule[] = [];

  /**
   * Contains a list of issuer
   * @private
   */
  protected readonly issuer = new Set<ResolvedModule>();

  private static uuid = -1;

  public uuid = (ResolvedModule.uuid++).toString();

  /**
   * @constructor
   * @param issuer
   * @param sourcePath The absolute path to the module
   */
  constructor(issuer: ResolvedModule | null, sourcePath: string) {
    if (issuer) {
      this.issuer.add(issuer);
    }
    this.sourcePath = sourcePath;
    this.extension = extname(this.sourcePath);
  }

  public addImport(importPath: string, module: ResolvedModule, async = false): void {
    this.imports.push(new ImportedModule(module, importPath, async));
  }

  public getImports(): ImportedModule[] {
    return this.imports;
  }

  public getImportByPath(importPath: string): ImportedModule | undefined {
    return this.imports.find((i) => i.getImportPath() === importPath);
  }

  /**
   * Replaces the content of the Module
   * @param content
   */
  public setContent(content: Buffer): void {
    this.content = content;
  }

  /**
   * Returns the size of the Module
   */
  public getSize(): number {
    const content = this.getContent();
    return Buffer.byteLength(content);
  }

  /**
   * Adds an issuer to the Module.
   * @param issuer
   */
  public addIssuer(issuer: ResolvedModule): void {
    this.issuer.add(issuer);
  }

  /**
   * Returns a list of issuer.
   */
  public getIssuers(): ResolvedModule[] {
    return Array.from(this.issuer);
  }

  /**
   * Returns the Module name
   */
  public getName(): string {
    return basename(this.sourcePath);
  }

  /**
   * Returns the file extension of the Module
   */
  public getExtension(): string {
    return this.extension;
  }

  /**
   * Sets the extension of the module.
   * @param extension
   */
  public setExtension(extension: string): void {
    this.extension = extension;
  }

  /**
   * Returns the content of the Module
   */
  public getContent(): Buffer {
    if (typeof this.content === 'undefined') {
      this.content = readFileSync(this.sourcePath);
    }
    return this.content as Buffer;
  }

  public getPath(): string {
    const extension = this.getExtension();
    const sourceExtension = extname(this.sourcePath);
    return this.sourcePath.replace(sourceExtension, extension);
  }

  /**
   * Returns the source path of the Module or undefined
   * if it is a virtual module.
   */
  public getSourcePath(): string {
    return this.sourcePath;
  }
}
