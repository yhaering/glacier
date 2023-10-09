import type { TokenPosition } from '../interfaces/tokens/TokenPosition';
import type { Segment } from '../../segmentStream/interfaces/Segment';
import type { TokenLocation } from '../interfaces/tokens/TokenLocation';

export function calculateLocation(
  currentPosition: TokenPosition,
  segments: Segment[]
): TokenLocation {
  const endPosition: TokenPosition = {
    column: currentPosition.column,
    line: currentPosition.line
  };

  for (const segment of segments) {
    if (segment.type === 'NEW_LINE') {
      endPosition.line++;
      endPosition.column = 0;
    } else {
      endPosition.column += segment.value.length;
    }
  }

  return {
    start: {
      column: currentPosition.column,
      line: currentPosition.line
    },
    end: endPosition
  };
}
