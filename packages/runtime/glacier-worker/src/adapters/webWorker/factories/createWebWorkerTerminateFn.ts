import type { WorkerTerminateFn } from '../../../interfaces/WorkerTerminateFn';

export function createWebWorkerTerminateFn(worker: Worker): WorkerTerminateFn {
  return () => {
    worker.terminate();
  };
}
