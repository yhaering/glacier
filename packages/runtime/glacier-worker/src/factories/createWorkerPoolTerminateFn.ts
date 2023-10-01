import type { GlacierWorker } from '../interfaces/GlacierWorker';
import type { WorkerDefinition } from '../interfaces/WorkerDefinition';
import type { WorkerTerminateFn } from '../interfaces/WorkerTerminateFn';

export function createWorkerPoolTerminateFn<D extends WorkerDefinition>(
  workers: GlacierWorker<D>[]
): WorkerTerminateFn {
  return async () => {
    const promises = workers.map((worker) => worker.terminate());
    await Promise.all(promises);
  };
}
