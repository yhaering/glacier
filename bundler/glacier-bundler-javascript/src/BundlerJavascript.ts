import { BundlerTask } from '@glacier/bundler';
import { ResolvedModule, VirtualModule } from '@glacier/module';
import { normalizePath } from '../../../packages/glacier-pipeline/src/functions/normalizePath';

export class BundlerJavascript extends BundlerTask {
  public async execute(modules: ResolvedModule[]): Promise<VirtualModule[]> {
    const bundle = this.wrapModules(modules);
    return [
      new VirtualModule(null, Buffer.from(bundle), 'bundle.js'),
      new VirtualModule(null, Buffer.from(''), 'bootstrap.js'),
    ];
  }

  private wrapModules(modules: ResolvedModule[]): string {
    return `window.glacier = Object.assign(window.glacier ||{},{
  ${modules
    .map((m) => {
      return `'${normalizePath(m.getSourcePath())}': ${this.wrapModule(m)}`;
    })
    .join(',')}
});`;
  }

  private wrapModule(module: ResolvedModule) {
    const moduleCode = module.getContent().toString();
    return `function(require, module, exports) {
    ${moduleCode}
}`;
  }
}
