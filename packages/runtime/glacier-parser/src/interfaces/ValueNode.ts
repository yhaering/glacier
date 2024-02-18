import type { BaseNode } from './BaseNode';

export interface ValueNode extends BaseNode {
  value: string;
  rawValue: string;
}
