import { createWorkerPoolRunFn } from './createWorkerPoolRunFn';
import { fakeGlacierWorker } from '../../test/fakes/fakeGlacierWorker';
import { createRoundRobin } from '@glacier/utils';

async function run() {
  const workers = [fakeGlacierWorker()];
  const fn = createWorkerPoolRunFn(workers);
  const returnValue = await fn('{{NAME}}', '{{DATA}}');
  return { returnValue, fn, workers };
}

describe('createWorkerPoolRunFn', () => {
  beforeEach(run);

  test('exports a function called createWorkerPoolRunFn', () => {
    expect(createWorkerPoolRunFn).toBeInstanceOf(Function);
  });

  test('calls createRoundRobin', async () => {
    const { workers } = await run();
    expect(createRoundRobin).toHaveBeenCalledWith(workers);
  });

  test('returns a function', async () => {
    const { fn } = await run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls GlacierWorker.run', async () => {
    const { workers } = await run();
    const firstWorker = workers[0];
    expect(firstWorker.run).toHaveBeenCalledWith('{{NAME}}', '{{DATA}}');
  });
});
