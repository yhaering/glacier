import type { Stream } from '../../interfaces/Stream';
import { cpus } from 'node:os';
import { createWorkerPool } from '../../functions/createWorkerPool';
import { createStream } from '../../functions/createStream';
import { makeResolverFactory } from './factories/makeResolverFactory';

export function createWorkerStream<I, O>(workerPath: string): Stream<I, O> {
  const threadCount = cpus().length;
  const resolverFactory = makeResolverFactory<I, O>(workerPath);
  const workers = createWorkerPool<I, O>(threadCount, resolverFactory);
  return createStream<I, O>(workers);
}
