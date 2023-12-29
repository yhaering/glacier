import type { BaseExpression } from './BaseExpression';
import type { TemplateElement } from './TemplateElement';
import type { Expression } from './Expression';

export interface TemplateLiteral extends BaseExpression {
  type: 'TemplateLiteral';
  quasis: TemplateElement[];
  expressions: Expression[];
}
