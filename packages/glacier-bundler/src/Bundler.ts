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
    const remainingModules = [...this.modules];

    for (const bundleConfig of this.config) {
      const matchingModules = this.getMatchingModules(remainingModules, bundleConfig);
      if (matchingModules.length > 0) {
        bundledModules.push(...(await bundleConfig.bundler.execute(matchingModules)));
      }
    }
    return [...remainingModules, ...bundledModules];
  }

  private getMatchingModules(modules: ResolvedModule[], bundlerConfig: BundlerConfig) {
    const matchingModules = [];
    for (let i = modules.length - 1; i >= 0; i--) {
      if (moduleMatch(modules[i], bundlerConfig)) {
        modules.splice(i, 1);
        matchingModules.push(modules[i]);
      }
    }
    return matchingModules;
  }
}
