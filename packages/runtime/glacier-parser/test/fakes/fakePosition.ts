import type { Position } from '../../src/parser/interfaces/nodes/Position';

export function fakePosition(): Position {
  return {
    index: 0,
    column: 0,
    line: 1
  };
}
