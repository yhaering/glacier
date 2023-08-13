import type { ResolverFactory } from '../../../interfaces/ResolverFactory';
import { Worker } from 'node:worker_threads';

export function makeResolverFactory<I, O>(
  workerPath: string
): ResolverFactory<I, O> {
  return () => {
    const worker = new Worker(workerPath);
    return {
      resolver: async (input: I): Promise<O> => {
        return new Promise((resolve) => {
          worker.postMessage(input);
          worker.on('message', (data: O) => {
            resolve(data);
            worker.removeAllListeners();
          });
        });
      },
      terminate: async () => {
        await worker.terminate();
      }
    };
  };
}
