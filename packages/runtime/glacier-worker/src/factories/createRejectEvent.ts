import type { WorkerMessageReject } from '../interfaces/WorkerMessageReject';

export function createRejectEvent(
  id: string,
  error: unknown
): WorkerMessageReject {
  return {
    id,
    type: 'reject',
    error
  };
}
