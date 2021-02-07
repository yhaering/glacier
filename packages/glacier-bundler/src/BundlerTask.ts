import { ResolvedModule, VirtualModule } from '@glacier/module';

export class BundlerTask {
  public async execute(modules: ResolvedModule[]): Promise<VirtualModule[]> {
    return [];
  }
}
