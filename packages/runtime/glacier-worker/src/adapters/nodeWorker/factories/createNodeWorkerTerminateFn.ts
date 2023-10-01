import type { WorkerTerminateFn } from '../../../interfaces/WorkerTerminateFn';
import type { Worker } from 'node:worker_threads';

export function createNodeWorkerTerminateFn(worker: Worker): WorkerTerminateFn {
  return async () => {
    await worker.terminate();
  };
}
