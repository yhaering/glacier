import type { WorkerMessageReject } from '../../src/interfaces/WorkerMessageReject';

export function fakeWorkerMessageReject(): WorkerMessageReject {
  return {
    type: 'reject',
    id: '{{ID}}',
    error: '{{ERROR}}'
  };
}
