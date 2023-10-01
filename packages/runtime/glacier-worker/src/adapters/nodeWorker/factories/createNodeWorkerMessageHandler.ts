import type { WorkerMessageResolve } from '../../../interfaces/WorkerMessageResolve';
import type { WorkerMessageReject } from '../../../interfaces/WorkerMessageReject';
import type { WorkerTaskRegistry } from '../../../interfaces/WorkerTaskRegistry';
import { assertTaskExists } from '../asserts/assertTaskExists';

export function createNodeWorkerMessageHandler(tasks: WorkerTaskRegistry) {
  return (value: WorkerMessageResolve | WorkerMessageReject) => {
    const workerTask = tasks.get(value.id);
    assertTaskExists(workerTask);
    tasks.delete(value.id);
    if (value.type === 'resolve') {
      workerTask.resolve(value.output);
    } else {
      workerTask.reject(value.error);
    }
  };
}
