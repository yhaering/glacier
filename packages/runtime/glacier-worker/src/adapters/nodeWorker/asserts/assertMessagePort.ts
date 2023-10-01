import type { MessagePort } from 'node:worker_threads';

export function assertMessagePort(
  parentPort: MessagePort | null
): asserts parentPort is MessagePort {
  if (!parentPort) {
    throw new Error('Expected file to be started as worker.');
  }
}
