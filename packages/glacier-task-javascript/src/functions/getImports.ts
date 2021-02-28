import { simple } from 'acorn-walk';
import { Node } from 'acorn';

export function getImports(ast: Node): Node[] {
  const imports: Node[] = [];

  simple(ast, {
    ImportDeclaration: (node: Node) => {
      imports.push(node);
    },
    CallExpression: (node: Node) => {
      if ((node as any).callee.name === 'require') {
        imports.push(node);
      }
    },
    ImportExpression: (node: Node) => {
      imports.push(node);
    },
  });

  return imports;
}
