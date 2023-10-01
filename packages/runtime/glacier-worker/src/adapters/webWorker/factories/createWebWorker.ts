import type { WorkerDefinition } from '../../../interfaces/WorkerDefinition';
import type { GlacierWorker } from '../../../interfaces/GlacierWorker';
import { createWebWorkerTerminateFn } from './createWebWorkerTerminateFn';
import type { WorkerTaskRegistry } from '../../../interfaces/WorkerTaskRegistry';
import { createWebWorkerRunFn } from './createWebWorkerRunFn';
import { createWebWorkerMessageHandler } from './createWebWorkerMessageHandler';

export function createWebWorker<D extends WorkerDefinition>(
  worker: Worker
): GlacierWorker<D> {
  const tasks: WorkerTaskRegistry = new Map();
  const messageHandler = createWebWorkerMessageHandler(tasks);
  worker.addEventListener('message', messageHandler);

  return {
    terminate: createWebWorkerTerminateFn(worker),
    run: createWebWorkerRunFn(worker, tasks)
  };
}
