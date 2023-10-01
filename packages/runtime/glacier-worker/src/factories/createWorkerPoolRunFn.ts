import type { WorkerRunFn } from '../interfaces/WorkerRunFn';
import type { WorkerDefinition } from '../interfaces/WorkerDefinition';
import type { GlacierWorker } from '../interfaces/GlacierWorker';
import { createRoundRobin } from '@glacier/utils';

export function createWorkerPoolRunFn<D extends WorkerDefinition>(
  workers: GlacierWorker<D>[]
): WorkerRunFn<D> {
  const nextWorker = createRoundRobin(workers);
  return (name, data) => {
    const worker = nextWorker();
    return worker.run(name, data);
  };
}
