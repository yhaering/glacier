import { CallExpression, File, Identifier, ImportDeclaration } from '@babel/types';
import { NodePath } from '@babel/core';
import traverse from '@babel/traverse';

export function getImports(ast: File) {
  const imports: (NodePath<ImportDeclaration> | NodePath<CallExpression>)[] = [];

  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      imports.push(path);
    },
    CallExpression: (path: NodePath<CallExpression>) => {
      if ((path.node.callee as Identifier).name === 'require') {
        imports.push(path);
      }
    },
  });

  return imports;
}