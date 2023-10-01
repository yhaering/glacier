import type { WorkerDefinition } from '../../../interfaces/WorkerDefinition';
import { parentPort } from 'node:worker_threads';
import { assertMessagePort } from '../asserts/assertMessagePort';
import { createMessageHandler } from '../../../factories/createMessageHandler';
import { createNodeWorkerPostMessage } from './createNodeWorkerPostMessage';

export function createNodeWorkerThread<D extends WorkerDefinition>(
  definition: D
): D {
  assertMessagePort(parentPort);
  const postMessage = createNodeWorkerPostMessage(parentPort);
  const messageHandler = createMessageHandler(postMessage, definition);
  parentPort.on('message', messageHandler);
  return definition;
}
