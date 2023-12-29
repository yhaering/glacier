import type { BlockStatement } from './BlockStatement';

export interface StaticBlock extends Omit<BlockStatement, 'type'> {
  type: 'StaticBlock';
}
