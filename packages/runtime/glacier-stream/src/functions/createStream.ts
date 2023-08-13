import type { StreamWorker } from '../interfaces/StreamWorker';
import type { Stream } from '../interfaces/Stream';
import type { WorkItem } from '../interfaces/WorkItem';
import { createEvent } from './createEvent';
import { processItems } from './processItems';

export function createStream<I, O>(
  workers: StreamWorker<I, O>[]
): Stream<I, O> {
  const items: WorkItem<I, O>[] = [];
  const onComplete = createEvent<O>();

  return {
    onComplete,
    terminate: async () => {
      await Promise.all(workers.map((worker) => worker.terminate()));
    },
    execute: async (input) => {
      return new Promise<O>((resolve) => {
        items.push({
          input,
          resolve
        });
        processItems(workers, items, onComplete);
      });
    }
  };
}
