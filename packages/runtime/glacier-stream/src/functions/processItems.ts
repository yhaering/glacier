import type { StreamWorker } from '../interfaces/StreamWorker';
import type { WorkItem } from '../interfaces/WorkItem';
import type { Event } from '../interfaces/Event';

export function processItems<I, O>(
  workers: StreamWorker<I, O>[],
  items: WorkItem<I, O>[],
  onComplete: Event<O>
) {
  for (const worker of workers) {
    if (worker.isBusy) {
      continue;
    }
    const nextItem = items.shift();
    if (!nextItem) {
      return;
    }

    void worker.execute(nextItem.input).then((output) => {
      nextItem.resolve(output);
      onComplete.emit(output);
      processItems(workers, items, onComplete);
    });
  }
}
