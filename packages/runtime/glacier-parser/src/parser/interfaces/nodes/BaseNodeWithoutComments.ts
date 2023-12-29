import type { SourceLocation } from './SourceLocation';

export interface BaseNodeWithoutComments {
  type: string;
  loc: SourceLocation;
}
