import { PipelineConfig } from './PipelineConfig';
import { Module, moduleMatch, ResolvedModule, VirtualModule } from '@glacier/module';
import { Resolver } from '@glacier/resolver';
import { dirname, relative } from 'path';
import { normalizePath } from './functions/normalizePath';

export class Pipeline {
  private readonly config: PipelineConfig[];
  private readonly modules = new Map<string, ResolvedModule>();
  private readonly resolver: Resolver;

  constructor(config: PipelineConfig[], resolver: Resolver) {
    this.config = config;
    this.resolver = resolver;
  }

  private resolveModule(module: Module | VirtualModule): { cached: boolean; module: ResolvedModule } {
    if (module instanceof VirtualModule) {
      return {
        cached: false,
        module,
      };
    }
    const issuer = module.getIssuer();
    const issuerPath = issuer.getSourcePath();
    const resolvedPath = this.resolver.resolve(issuerPath, module.getImportPath());
    if (this.modules.has(resolvedPath)) {
      const cachedModule = this.modules.get(resolvedPath) as ResolvedModule;
      cachedModule.addIssuer(issuer);
      return {
        cached: true,
        module: cachedModule,
      };
    }
    return {
      cached: false,
      module: new ResolvedModule(issuer, resolvedPath),
    };
  }

  private findPipeline(module: ResolvedModule) {
    return this.config.find((config) => {
      return moduleMatch(module, config);
    });
  }

  private async importModule(module: Module | VirtualModule): Promise<ResolvedModule> {
    const resolvedModule = this.resolveModule(module);
    if (resolvedModule.cached) {
      return resolvedModule.module;
    }
    const processedModule = await this.processModule(resolvedModule.module);
    this.modules.set(processedModule.getSourcePath(), processedModule);
    return processedModule;
  }

  private async processModule(module: ResolvedModule): Promise<ResolvedModule> {
    const pipeline = this.findPipeline(module);
    if (pipeline) {
      for (const task of pipeline.tasks) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        task.importModule = async (issuer: ResolvedModule, module: Module | VirtualModule) => {
          const resolvedModule = await this.importModule(module);
          const importPath = './' + normalizePath(relative(dirname(issuer.getPath()), resolvedModule.getPath()));
          if (module instanceof Module) {
            issuer.addImport(importPath, resolvedModule);
          }
          return importPath;
        };
        await task.execute(module);
      }
    }
    return module;
  }

  public async process(modules: Module[]): Promise<ResolvedModule[]> {
    for (const module of modules) {
      await this.importModule(module);
    }
    return Array.from(this.modules.values());
  }
}
