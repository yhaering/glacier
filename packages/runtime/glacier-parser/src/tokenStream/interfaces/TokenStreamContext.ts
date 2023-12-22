import type { Segment } from '../../segmentStream/interfaces/Segment';
import type { TokenLocation } from './tokens/TokenLocation';

export interface TokenStreamContext {
  getLoc: (segments: Segment[]) => TokenLocation;
}
