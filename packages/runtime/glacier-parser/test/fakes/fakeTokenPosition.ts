import type { TokenPosition } from '../../src/tokenStream/interfaces/tokens/TokenPosition';

export function fakeTokenPosition(): TokenPosition {
  return {
    line: 1,
    column: 0
  };
}
