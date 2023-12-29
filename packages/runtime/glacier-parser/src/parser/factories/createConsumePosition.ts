import type { PositionConsumeFn } from '../interfaces/PositionConsumeFn';
import type { Position } from '../interfaces/nodes/Position';

export function createConsumePosition(position: Position): PositionConsumeFn {
  return (token) => {
    if (token.type === 'LINE_TERMINATOR') {
      position.column = 0;
      position.line += 1;
      position.index += 1;
    } else if (token.type === 'STRING') {
      position.column += token.value.length + 2;
      position.index += token.value.length + 2;
    } else {
      position.column += token.value.length;
      position.index += token.value.length;
    }
  };
}
