import type { Stream } from '../../interfaces/Stream';
import { createStream } from '../../functions/createStream';
import { createWorker } from '../../functions/createWorker';
import type { Resolver } from '../../interfaces/Resolver';
import { makeBrowserTerminator } from './factories/makeBrowserTerminator';

export function createBrowserStream<I, O>(
  resolver: Resolver<I, O>
): Stream<I, O> {
  const terminator = makeBrowserTerminator();
  const worker = createWorker<I, O>(resolver, terminator);
  return createStream<I, O>([worker]);
}
