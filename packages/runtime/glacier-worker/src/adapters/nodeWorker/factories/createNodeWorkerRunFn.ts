import type { Worker } from 'node:worker_threads';
import type { WorkerTaskRegistry } from '../../../interfaces/WorkerTaskRegistry';
import type { WorkerRunFn } from '../../../interfaces/WorkerRunFn';
import { randomUUID } from 'node:crypto';
import { createExecuteEvent } from '../../../factories/createExecuteEvent';
import type { WorkerDefinition } from '../../../interfaces/WorkerDefinition';
import type { WorkerOutput } from '../../../interfaces/WorkerOutput';
import type { WorkerInput } from '../../../interfaces/WorkerInput';
import { createControlledPromise } from '@glacier/utils';

export function createNodeWorkerRunFn<D extends WorkerDefinition>(
  worker: Worker,
  tasks: WorkerTaskRegistry
): WorkerRunFn<D> {
  return async <N extends keyof D>(name: N, input: WorkerInput<D[N]>) => {
    const { promise, resolve, reject } =
      await createControlledPromise<WorkerOutput<D[N]>>();
    const id = randomUUID();
    tasks.set(id, { resolve, reject });
    const event = createExecuteEvent(id, name as string, input);
    worker.postMessage(event);
    return promise;
  };
}
