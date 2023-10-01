import type { WorkerMessageResolve } from '../../../interfaces/WorkerMessageResolve';
import type { WorkerMessageReject } from '../../../interfaces/WorkerMessageReject';
import type { WorkerTaskRegistry } from '../../../interfaces/WorkerTaskRegistry';

export function createWebWorkerMessageHandler(tasks: WorkerTaskRegistry) {
  return ({ data }: MessageEvent) => {
    const message = data as WorkerMessageResolve | WorkerMessageReject;
    const promise = tasks.get(message.id);
    if (!promise) {
      throw new Error(`Expected task to exist`);
    }
    tasks.delete(message.id);
    if (message.type === 'resolve') {
      promise.resolve(message.output);
    } else {
      promise.reject(message.error);
    }
  };
}
