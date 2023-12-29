import type { BaseNodeWithoutComments } from './nodes/BaseNodeWithoutComments';

export type PositionDecoratorFn = <T extends BaseNodeWithoutComments>(
  fn: () => Omit<T, 'loc'>
) => T;
