import type { BaseNode } from './BaseNode';

export interface PrivateIdentifier extends BaseNode {
  type: 'PrivateIdentifier';
  name: string;
}
