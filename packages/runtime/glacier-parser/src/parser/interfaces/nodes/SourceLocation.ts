import type { Position } from './Position';

export interface SourceLocation {
  start: Readonly<Position>;
  end: Readonly<Position>;
}
