import type { StreamWorker } from '../interfaces/StreamWorker';
import type { Resolver } from '../interfaces/Resolver';
import type { Terminator } from '../interfaces/Terminator';

export function createWorker<I, O>(
  resolver: Resolver<I, O>,
  terminate: Terminator
): StreamWorker<I, O> {
  let isBusy = false;
  return {
    isBusy,
    terminate,
    execute: async (input) => {
      isBusy = true;
      const result = await resolver(input);
      isBusy = false;
      return result;
    }
  };
}
