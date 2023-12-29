import type { AssignmentProperty } from './AssignmentProperty';
import type { CatchClause } from './CatchClause';
import type { Class } from './Class';
import type { ClassBody } from './ClassBody';
import type { Expression } from './Expression';
import type { Identifier } from './Identifier';
import type { Literal } from './Literal';
import type { MethodDefinition } from './MethodDefinition';
import type { ModuleDeclaration } from './ModuleDeclaration';
import type { ModuleSpecifier } from './ModuleSpecifier';
import type { Pattern } from './Pattern';
import type { PrivateIdentifier } from './PrivateIdentifier';
import type { Program } from './Program';
import type { Property } from './Property';
import type { SpreadElement } from './SpreadElement';
import type { Statement } from './Statement';
import type { Super } from './Super';
import type { SwitchCase } from './SwitchCase';
import type { TemplateElement } from './TemplateElement';
import type { VariableDeclarator } from './VariableDeclarator';

export interface NodeMap {
  AssignmentProperty: AssignmentProperty;
  CatchClause: CatchClause;
  Class: Class;
  ClassBody: ClassBody;
  Expression: Expression;
  Function: Function;
  Identifier: Identifier;
  Literal: Literal;
  MethodDefinition: MethodDefinition;
  ModuleDeclaration: ModuleDeclaration;
  ModuleSpecifier: ModuleSpecifier;
  Pattern: Pattern;
  PrivateIdentifier: PrivateIdentifier;
  Program: Program;
  Property: Property;
  PropertyDefinition: PropertyDefinition;
  SpreadElement: SpreadElement;
  Statement: Statement;
  Super: Super;
  SwitchCase: SwitchCase;
  TemplateElement: TemplateElement;
  VariableDeclarator: VariableDeclarator;
}
