import { Task } from '@glacier/pipeline';
import { Module, ResolvedModule } from '@glacier/module';
import { Node, Options, parse } from 'acorn';
import { generate } from 'escodegen';
import { getImports } from './functions/getImports';

export class TaskJavascript extends Task<Options> {
  public async execute(module: ResolvedModule): Promise<void> {
    const code = module.getContent().toString();
    const ast = parse(code, { sourceType: 'module', ...this.config, ecmaVersion: 'latest' });
    const imports = getImports(ast);
    for (const i of imports) {
      await this.processImport(module, i);
    }
    const generatedCode = generate(ast);
    module.setContent(Buffer.from(generatedCode));
  }

  private async processImport(issuer: ResolvedModule, node: Node) {
    if (node.type === 'CallExpression') {
      const importPath = (node as any).arguments[0].value;
      (node as any).arguments[0].value = await this.importModule(issuer, new Module(issuer, importPath));
    }

    if (node.type === 'ImportDeclaration') {
      const importPath = (node as any).source.value;
      (node as any).source.value = await this.importModule(issuer, new Module(issuer, importPath));
    }
  }
}
