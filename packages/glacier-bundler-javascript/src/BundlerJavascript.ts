import { BundlerTask } from '@glacier/bundler';
import { ResolvedModule, VirtualModule } from '@glacier/module';
import { parse } from 'acorn';
import { getImports } from '@glacier/task-javascript/src/functions/getImports';
import { generate } from 'escodegen';

export class BundlerJavascript extends BundlerTask {
  public async execute(modules: ResolvedModule[]): Promise<VirtualModule[]> {
    const bundle = this.wrapModules(modules);
    const mainModule = modules.slice(-1)[0].uuid;

    return [
      new VirtualModule(null, Buffer.from(bundle), 'bundle.js'),
      new VirtualModule(null, Buffer.from(this.buildBootstrap(mainModule)), 'bootstrap.js'),
    ];
  }

  private buildBootstrap(main: string): string {
    return `(function() {
  const cache = {};

  function require(importPath) {
    if (cache.hasOwnProperty(importPath)) {
      return cache[importPath];
    }
    const module = window.glacier[importPath];
    const m = { exports: {} };
    module(require, m, m.exports);
    cache[importPath] = m.exports;
    return cache[importPath];
  }

  require('${main}');
})();`;
  }

  private wrapModules(modules: ResolvedModule[]): string {
    return `window.glacier = Object.assign(window.glacier ||{},{
  ${modules
    .map((m) => {
      return `'${m.uuid}': ${this.wrapModule(m)}`;
    })
    .join(',')}
});`;
  }

  private wrapModule(module: ResolvedModule) {
    return `function(require, module, exports) {
    ${this.processModule(module)}
}`;
  }

  private processModule(module: ResolvedModule) {
    const moduleCode = module.getContent().toString();
    const ast = parse(moduleCode, { sourceType: 'module', ecmaVersion: 'latest' });
    const imports = getImports(ast);

    for (const i of imports) {
      let importPath;
      if (i.type === 'CallExpression') {
        importPath = (i as any).arguments[0].value;
      }

      if (i.type === 'ImportExpression') {
        importPath = (i as any).source.value;
      }

      const importedModule = module.getImportByPath(importPath);
      if (importedModule) {
        if (i.type === 'CallExpression') {
          (i as any).arguments[0].value = importedModule.getModule().uuid;
        }

        if (i.type === 'ImportExpression') {
          (i as any).source.value = importedModule.getModule().uuid;
        }
      } else {
        throw new Error(`Could not find module ${importPath} in ${module.getSourcePath()}`);
      }
    }
    return generate(ast);
  }
}
