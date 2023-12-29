import type { PositionDecoratorFn } from '../interfaces/PositionDecoratorFn';
import type { Position } from '../interfaces/nodes/Position';

export function createDecoratePosition(
  position: Position
): PositionDecoratorFn {
  return <T>(fn: () => Omit<T, 'loc'>): T => {
    const start = Object.freeze({ ...position });
    const returnValue = fn();
    const end = Object.freeze({ ...position });
    return {
      ...returnValue,
      loc: { start, end }
    } as T;
  };
}
