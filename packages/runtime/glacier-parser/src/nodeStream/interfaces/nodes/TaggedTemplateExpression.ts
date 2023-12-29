import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';

import type { TemplateLiteral } from './TemplateLiteral';

export interface TaggedTemplateExpression extends BaseExpression {
  type: 'TaggedTemplateExpression';
  tag: Expression;
  quasi: TemplateLiteral;
}
