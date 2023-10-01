import type { WorkerDefinition } from './WorkerDefinition';
import type { WorkerRunFn } from './WorkerRunFn';
import type { WorkerTerminateFn } from './WorkerTerminateFn';

export interface GlacierWorker<E extends WorkerDefinition> {
  terminate: WorkerTerminateFn;
  run: WorkerRunFn<E>;
}
