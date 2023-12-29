import type { BaseNode } from './BaseNode';
import type { BaseExpression } from './BaseExpression';

export interface RegExpLiteral extends BaseNode, BaseExpression {
  type: 'RegExpLiteral';
  value?: RegExp | null | undefined;
  regex: {
    pattern: string;
    flags: string;
  };
  raw?: string | undefined;
}
