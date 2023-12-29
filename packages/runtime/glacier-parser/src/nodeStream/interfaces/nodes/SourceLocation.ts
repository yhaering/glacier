import type { Position } from './Position';

export interface SourceLocation {
  source?: string | null | undefined;
  start: Position;
  end: Position;
}
