import type { WorkerMessageResolve } from '../../src/interfaces/WorkerMessageResolve';

export function fakeWorkerMessageResolve(): WorkerMessageResolve {
  return {
    type: 'resolve',
    id: '{{ID}}',
    output: '{{OUTPUT}}'
  };
}
