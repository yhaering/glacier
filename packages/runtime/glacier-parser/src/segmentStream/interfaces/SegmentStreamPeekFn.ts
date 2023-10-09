import type { Segment } from './Segment';

export type SegmentStreamPeekFn = () => Segment | undefined;
