import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';

export interface SpreadElement extends BaseNode {
  type: 'SpreadElement';
  argument: Expression;
}
