import type { SegmentStream } from '../../src/segmentStream/interfaces/SegmentStream';

export function fakeSegmentStream(): SegmentStream {
  return {
    next: jest.fn().mockReturnValue('{{SEGMENT}}'),
    peek: jest.fn().mockReturnValue('{{SEGMENT}}')
  };
}
