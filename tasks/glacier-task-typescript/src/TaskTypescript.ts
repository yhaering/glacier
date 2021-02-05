import { Task } from '@glacier/pipeline';
import { ResolvedModule, VirtualModule } from '@glacier/module';
import * as ts from 'typescript';
import { CompilerOptions } from 'typescript';

export class TaskTypescript extends Task<CompilerOptions> {
  public async execute(module: ResolvedModule): Promise<void> {
    const code = module.getContent().toString();
    const result = ts.transpileModule(code, { compilerOptions: this.config });
    module.setContent(Buffer.from(result.outputText));
    module.setExtension('.js');
    if (result.sourceMapText) {
      const sourcemapPath = `${module.getPath()}.map`;
      this.importModule(new VirtualModule(module, Buffer.from(result.sourceMapText), sourcemapPath));
    }
  }
}
