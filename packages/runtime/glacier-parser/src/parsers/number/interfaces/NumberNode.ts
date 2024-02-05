import type { ValueNode } from '../../../interface/ValueNode';
import type { NumberType } from './NumberType';

export interface NumberNode extends ValueNode {
  type: 'number';
  numberType: NumberType;
}
