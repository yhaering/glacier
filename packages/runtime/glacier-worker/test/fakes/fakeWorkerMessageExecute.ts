import type { WorkerMessageExecute } from '../../src/interfaces/WorkerMessageExecute';

export function fakeWorkerMessageExecute(): WorkerMessageExecute {
  return {
    type: 'execute',
    id: '{{ID}}',
    name: '{{NAME}}',
    input: '{{INPUT}}'
  };
}
