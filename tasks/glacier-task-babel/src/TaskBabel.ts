import { Task } from '@glacier/pipeline';
import { parseSync, transformFromAstSync, TransformOptions } from '@babel/core';
import { Module, ResolvedModule, VirtualModule } from '@glacier/module';
import { File, StringLiteral } from '@babel/types';
import { getImports } from './functions/getImports';

export class TaskBabel extends Task<TransformOptions> {
  public async execute(module: ResolvedModule): Promise<void> {
    const code = module.getContent().toString();
    const ast = parseSync(code, this.config) as File;
    const imports = getImports(ast);

    for (const importNode of imports) {
      const { node } = importNode;
      if (node.type === 'CallExpression') {
        const requireArgument = node.arguments[0] as StringLiteral;
        const importPath = requireArgument.value;
        requireArgument.value = await this.importModule(module, new Module(module, importPath));
      }

      if (node.type === 'ImportDeclaration') {
        const importPath = node.source.value;
        node.source.value = await this.importModule(module, new Module(module, importPath));
      }
    }

    const transformedCode = transformFromAstSync(ast, undefined, this.config);

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
