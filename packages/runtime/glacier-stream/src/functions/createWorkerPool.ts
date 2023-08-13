import type { StreamWorker } from '../interfaces/StreamWorker';
import { createWorker } from './createWorker';
import type { ResolverFactory } from '../interfaces/ResolverFactory';

export function createWorkerPool<I, O>(
  threads: number,
  resolverFactory: ResolverFactory<I, O>
): StreamWorker<I, O>[] {
  return Array.from({ length: threads }).map(() => {
    const { resolver, terminate } = resolverFactory();
    return createWorker(resolver, terminate);
  });
}
