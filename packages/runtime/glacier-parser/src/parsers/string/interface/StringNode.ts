import type { ValueNode } from '../../../interface/ValueNode';
import type { StringType } from './StringType';

export interface StringNode extends ValueNode {
  type: 'string';
  stringType: StringType;
}
