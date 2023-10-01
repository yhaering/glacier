import { createRejectEvent } from './createRejectEvent';
import { createResolveEvent } from './createResolveEvent';
import type { WorkerDefinition } from '../interfaces/WorkerDefinition';
import type { WorkerMessageExecute } from '../interfaces/WorkerMessageExecute';
import type { WorkerPostMessage } from '../interfaces/WorkerPostMessage';

export function createMessageHandler(
  postMessage: WorkerPostMessage,
  definition: WorkerDefinition
) {
  return (value: WorkerMessageExecute) => {
    const workerFn = definition[value.name];
    if (!workerFn) {
      const error = new Error(`Expected function ${value.name} to exist.`);
      const event = createRejectEvent(value.id, error);
      postMessage(event);
      return;
    }

    Promise.resolve(workerFn(value.input))
      .then((output: unknown) => {
        const event = createResolveEvent(value.id, output);
        postMessage(event);
      })
      .catch((error: unknown) => {
        const event = createRejectEvent(value.id, error);
        postMessage(event);
      });
  };
}
