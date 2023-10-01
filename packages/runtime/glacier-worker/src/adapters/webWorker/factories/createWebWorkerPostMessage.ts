import type { WorkerPostMessage } from '../../../interfaces/WorkerPostMessage';

export function createWebWorkerPostMessage(): WorkerPostMessage {
  return (message) => {
    postMessage(message);
  };
}
