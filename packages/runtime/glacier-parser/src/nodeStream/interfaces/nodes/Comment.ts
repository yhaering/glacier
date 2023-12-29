import type { BaseNodeWithoutComments } from './BaseNodeWithoutComments';

export interface Comment extends BaseNodeWithoutComments {
  type: 'Line' | 'Block';
  value: string;
}
