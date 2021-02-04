import { ResolvedModule, VirtualModule } from '@glacier/module';

/**
 * A Task is a single unit of work. It can also return
 * additional modules to be processed by the pipeline.
 */
export class Task<Config> {
  private readonly config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * Executes the task and optionally returns additional modules.
   * @param module
   */
  public async execute(module: ResolvedModule): Promise<(ResolvedModule | VirtualModule)[] | void> {
    return;
  }
}
