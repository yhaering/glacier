import { Task } from '@glacier/pipeline';
import { TransformOptions, transformSync } from '@babel/core';
import { ResolvedModule, VirtualModule } from '@glacier/module';

export class TaskBabel extends Task<TransformOptions> {
  public async execute(module: ResolvedModule): Promise<void> {
    const code = module.getContent().toString();
    const transformedCode = transformSync(code, this.config);

    if (transformedCode && transformedCode.code) {
      module.setContent(Buffer.from(transformedCode.code));
      if (transformedCode.map) {
        const sourcemapPath = `${module.getSourcePath()}.map`;
        this.importModule(
          module,
          new VirtualModule(module, Buffer.from(JSON.stringify(transformedCode.map)), sourcemapPath),
        );
      }
    }
  }
}
