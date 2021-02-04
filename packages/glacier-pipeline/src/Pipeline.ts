import { PipelineConfig } from './PipelineConfig';
import { Module, moduleMatch, ResolvedModule, VirtualModule } from '@glacier/module';
import { Resolver } from '@glacier/resolver';

export class Pipeline {
  private readonly config: PipelineConfig[];
  private readonly modules = new Map<string, ResolvedModule>();
  private readonly queue: ResolvedModule[] = [];
  private readonly resolver: Resolver;

  constructor(config: PipelineConfig[], resolver: Resolver) {
    this.config = config;
    this.resolver = resolver;
  }

  private addModule(module: Module | VirtualModule): void {
    if (module instanceof VirtualModule) {
      this.queue.push(module);
    } else {
      const issuer = module.getIssuer();
      const issuerPath = issuer.getSourcePath();
      const resolvedPath = this.resolver.resolve(issuerPath, module.getImportPath());
      if (this.modules.has(resolvedPath)) {
        const cachedModule = this.modules.get(resolvedPath) as ResolvedModule;
        cachedModule.addIssuer(issuer);
      } else {
        const resolvedModule = new ResolvedModule(issuer, resolvedPath);
        this.queue.push(resolvedModule);
      }
    }
  }

  public async process(modules: Module[]): Promise<ResolvedModule[]> {
    modules.forEach(this.addModule.bind(this));
    while (this.queue.length > 0) {
      const nextModule = this.queue.shift() as ResolvedModule;
      const pipeline = this.config.find((config) => {
        return moduleMatch(nextModule, config);
      });
      if (pipeline) {
        for (const task of pipeline.tasks) {
          const additionalModule = await task.execute(nextModule);
          if (Array.isArray(additionalModule)) {
            additionalModule.forEach(this.addModule.bind(this));
          }
        }
      }
      this.modules.set(nextModule.getSourcePath(), nextModule);
    }
    return Array.from(this.modules.values());
  }
}
