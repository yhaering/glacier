import type { Worker } from 'node:worker_threads';
import type { GlacierWorker } from '../../../interfaces/GlacierWorker';
import type { WorkerDefinition } from '../../../interfaces/WorkerDefinition';
import { createNodeWorkerTerminateFn } from './createNodeWorkerTerminateFn';
import { createNodeWorkerRunFn } from './createNodeWorkerRunFn';
import { createNodeWorkerMessageHandler } from './createNodeWorkerMessageHandler';
import type { WorkerTaskRegistry } from '../../../interfaces/WorkerTaskRegistry';

export function createNodeWorker<D extends WorkerDefinition>(
  worker: Worker
): GlacierWorker<D> {
  const tasks: WorkerTaskRegistry = new Map();
  const messageHandler = createNodeWorkerMessageHandler(tasks);
  worker.on('message', messageHandler);

  return {
    terminate: createNodeWorkerTerminateFn(worker),
    run: createNodeWorkerRunFn(worker, tasks)
  };
}
