import { Module, ResolvedModule, VirtualModule } from '@glacier/module';

/**
 * A Task is a single unit of work. It can also return
 * additional modules to be processed by the pipeline.
 */
export class Task<Config> {
  protected readonly config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  protected async importModule(issuer: ResolvedModule, module: Module | VirtualModule, async = false): Promise<string> {
    throw new Error('Not implemented');
  }

  /**
   * Executes the task and optionally returns additional modules.
   * @param module
   */
  public async execute(module: ResolvedModule): Promise<void> {
    return;
  }
}
