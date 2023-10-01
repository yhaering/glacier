import type { WorkerDefinition } from '../../../interfaces/WorkerDefinition';
import { createWebWorkerPostMessage } from './createWebWorkerPostMessage';
import { createMessageHandler } from '../../../factories/createMessageHandler';
import type { WorkerMessageExecute } from '../../../interfaces/WorkerMessageExecute';

export function createWebWorkerThread(
  definition: WorkerDefinition
): WorkerDefinition {
  const postMessage = createWebWorkerPostMessage();
  const messageHandler = createMessageHandler(postMessage, definition);
  addEventListener('message', ({ data }) => {
    messageHandler(data as WorkerMessageExecute);
  });
  return definition;
}
