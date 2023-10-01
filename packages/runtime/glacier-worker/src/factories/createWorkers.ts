import type { WorkerDefinition } from '../interfaces/WorkerDefinition';
import type { WorkerFactory } from '../interfaces/WorkerFactory';
import type { GlacierWorker } from '../interfaces/GlacierWorker';

export function createWorkers<D extends WorkerDefinition>(
  threads: number,
  factory: WorkerFactory<D>
): GlacierWorker<D>[] {
  const workers: GlacierWorker<D>[] = [];
  for (let i = 0; i < threads; i++) {
    const worker = factory();
    workers.push(worker);
  }
  return workers;
}
