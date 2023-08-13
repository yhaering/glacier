import { processItems } from './processItems';
import { fakeWorker } from '../../test/fakes/fakeWorker';
import { fakeWorkItem } from '../../test/fakes/fakeWorkItem';
import { fakeEvent } from '../../test/fakes/fakeEvent';

function run() {
  const workers = [fakeWorker()];
  const items = [fakeWorkItem('{{INPUT}}')];
  const onComplete = fakeEvent();
  processItems(workers, items, onComplete);
  return { workers, items, onComplete };
}

function runWhenBusy() {
  const worker = fakeWorker();
  worker.isBusy = true;
  const workers = [worker];
  const items = [fakeWorkItem('{{INPUT}}')];
  const onComplete = fakeEvent();
  processItems(workers, items, onComplete);
  return { workers, items, onComplete };
}

describe('processItems', () => {
  beforeEach(run);

  test('exports a function called processItems', () => {
    expect(processItems).toBeInstanceOf(Function);
  });

  test('remove first element of items', () => {
    const { items } = run();
    expect(items).toEqual([]);
  });

  test('calls execute method on worker', () => {
    const { workers } = run();
    expect(workers[0].execute).toHaveBeenCalledWith('{{INPUT}}');
  });

  describe('if all workers are busy', () => {
    beforeEach(runWhenBusy);

    test('do not remove first item', () => {
      const { items } = runWhenBusy();
      expect(items).toHaveLength(1);
    });
  });
});
