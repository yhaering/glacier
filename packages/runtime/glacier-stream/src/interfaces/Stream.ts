import type { Event } from './Event';

export interface Stream<I, O> {
  execute: (input: I) => Promise<O>;
  onComplete: Event<O>;
  terminate: () => Promise<void>;
}
