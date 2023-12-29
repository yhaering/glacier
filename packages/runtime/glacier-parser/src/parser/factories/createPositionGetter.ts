import type { Position } from '../interfaces/nodes/Position';
import type { PositionGetterFn } from '../interfaces/PositionGetterFn';

export function createPositionGetter(position: Position): PositionGetterFn {
  return () => Object.freeze({ ...position });
}
