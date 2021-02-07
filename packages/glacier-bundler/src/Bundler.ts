import { ResolvedModule, VirtualModule, moduleMatch } from '@glacier/module';
import { BundlerConfig } from './BundlerConfig';

export class Bundler {
  private readonly modules: ResolvedModule[];
  private readonly config: BundlerConfig[];

  constructor(modules: ResolvedModule[], config: BundlerConfig[]) {
    this.modules = modules;
    this.config = config;
  }

  public async bundle(): Promise<VirtualModule[]> {
    const bundledModules: VirtualModule[] = [];
    for (const bundleTask of this.config) {
      const matchingModules = this.modules.filter((m) => moduleMatch(m, bundleTask));
      const resultingModules = await bundleTask.bundler.execute(matchingModules);
      bundledModules.push(...resultingModules);
    }
    return bundledModules;
  }
}
