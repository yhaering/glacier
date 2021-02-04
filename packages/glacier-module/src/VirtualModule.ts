import { ResolvedModule } from './ResolvedModule';

/**
 * A VirtualModule is a ResolvedModule where the content
 * is set immediately.
 */
export class VirtualModule extends ResolvedModule {
  /**
   * @constructor
   * @param issuer
   * @param content
   * @param sourcePath
   */
  constructor(issuer: ResolvedModule | null, content: Buffer, sourcePath: string) {
    super(issuer, sourcePath);
    this.content = content;
  }
}
