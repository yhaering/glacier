import type { WorkerMessageResolve } from '../interfaces/WorkerMessageResolve';

export function createResolveEvent(
  id: string,
  output: unknown
): WorkerMessageResolve {
  return {
    id,
    type: 'resolve',
    output
  };
}
