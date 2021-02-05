import { Task } from '@glacier/pipeline';
import { NodePath, TransformOptions, transformSync } from '@babel/core';
import { Module, ResolvedModule, VirtualModule } from '@glacier/module';
import { ImportDeclaration } from '@babel/types';

export class TaskBabel extends Task<TransformOptions> {
  public async execute(module: ResolvedModule): Promise<void> {
    const code = module.getContent();
    const transformedCode = transformSync(code.toString(), {
      ...this.config,
      plugins: [
        ...(this.config.plugins || []),
        () => ({
          visitor: {
            ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
              const importPath = path.node.source.value;
              this.importModule(new Module(module, importPath));
              path.node.source.value = 'BLABLA';
            },
            CallExpression: (path: NodePath<any>) => {
              if (path.node.callee.name === 'require') {
                const importPath = path.node.arguments[0].value;
                this.importModule(new Module(module, importPath));
              }
            },
          },
        }),
      ],
    });
    if (transformedCode && transformedCode.code) {
      module.setContent(Buffer.from(transformedCode.code));
      if (transformedCode.map) {
        const sourcemapPath = `${module.getSourcePath()}.map`;
        this.importModule(new VirtualModule(module, Buffer.from(JSON.stringify(transformedCode.map)), sourcemapPath));
      }
    }
  }
}
