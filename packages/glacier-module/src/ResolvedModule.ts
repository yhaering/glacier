import { readFileSync } from 'fs';
import { extname, basename } from 'path';
import { RootModule } from './RootModule';

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
   * Contains a list of issuer
   * @private
   */
  protected readonly issuer = new Set<ResolvedModule>();

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
    return extname(this.sourcePath).substring(1);
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

  /**
   * Returns the source path of the Module or undefined
   * if it is a virtual module.
   */
  public getSourcePath(): string {
    return this.sourcePath;
  }
}
