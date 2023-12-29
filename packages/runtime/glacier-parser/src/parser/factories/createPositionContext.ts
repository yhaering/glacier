import type { Position } from '../interfaces/nodes/Position';
import { createConsumePosition } from './createConsumePosition';
import type { PositionContext } from '../interfaces/PositionContext';
import { createDecoratePosition } from './createDecoratePosition';
import { createPositionGetter } from './createPositionGetter';

export function createPositionContext(): PositionContext {
  const position: Position = {
    line: 1,
    column: 0,
    index: 0
  };

  return {
    consume: createConsumePosition(position),
    decorate: createDecoratePosition(position),
    getPosition: createPositionGetter(position)
  };
}
