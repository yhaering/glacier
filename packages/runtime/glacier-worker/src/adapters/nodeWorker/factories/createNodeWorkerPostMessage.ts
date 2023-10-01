import type { WorkerPostMessage } from '../../../interfaces/WorkerPostMessage';
import type { MessagePort } from 'node:worker_threads';

export function createNodeWorkerPostMessage(
  messagePort: MessagePort
): WorkerPostMessage {
  return (message) => {
    messagePort.postMessage(message);
  };
}
