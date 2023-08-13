import { parentPort } from 'node:worker_threads';
import type { Resolver } from '../../interfaces/Resolver';
import assert from 'node:assert';
export function createWorkerInstance<I, O>(resolver: Resolver<I, O>): void {
  const mainThread = parentPort;
  assert(mainThread, 'Expected function to be called from a worker thread');
  mainThread.on('message', (input: I) => {
    void resolver(input).then((output) => {
      mainThread.postMessage(output);
    });
  });
}
