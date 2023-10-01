import type { WorkerDefinition } from '../interfaces/WorkerDefinition';
import type { WorkerFactory } from '../interfaces/WorkerFactory';
import { createWorkers } from './createWorkers';
import { createWorkerPoolTerminateFn } from './createWorkerPoolTerminateFn';
import { createWorkerPoolRunFn } from './createWorkerPoolRunFn';
import type { WorkerPool } from '../interfaces/WorkerPool';

export function createWorkerPool<D extends WorkerDefinition>(
  threads: number,
  factory: WorkerFactory<D>
): WorkerPool<D> {
  const workers = createWorkers(threads, factory);
  return {
    terminate: createWorkerPoolTerminateFn(workers),
    run: createWorkerPoolRunFn(workers)
  };
}
