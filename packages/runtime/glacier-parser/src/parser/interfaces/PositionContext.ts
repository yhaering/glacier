import type { PositionConsumeFn } from './PositionConsumeFn';
import type { PositionDecoratorFn } from './PositionDecoratorFn';
import type { PositionGetterFn } from './PositionGetterFn';

export interface PositionContext {
  consume: PositionConsumeFn;
  decorate: PositionDecoratorFn;
  getPosition: PositionGetterFn;
}
