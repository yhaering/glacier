import type { WorkItem } from '../../src/interfaces/WorkItem';

export function fakeWorkItem<I = unknown, O = unknown>(
  input: I
): WorkItem<I, O> {
  return {
    input,
    resolve: jest.fn()
  };
}
