import type { SegmentStreamNextFn } from './SegmentStreamNextFn';
import type { SegmentStreamPeekFn } from './SegmentStreamPeekFn';

export interface SegmentStream {
  next: SegmentStreamNextFn;
  peek: SegmentStreamPeekFn;
}
