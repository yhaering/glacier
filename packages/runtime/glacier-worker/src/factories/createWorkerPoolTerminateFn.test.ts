import { createWorkerPoolTerminateFn } from './createWorkerPoolTerminateFn';
import { fakeGlacierWorker } from '../../test/fakes/fakeGlacierWorker';

async function run() {
  jest.spyOn(Promise, 'all');
  const glacierWorker = fakeGlacierWorker();
  glacierWorker.terminate = jest.fn().mockReturnValue('{{TERMINATE}}');
  const fn = createWorkerPoolTerminateFn([glacierWorker]);
  await fn();
  return { fn, glacierWorker };
}

describe('createWorkerPoolTerminateFn', () => {
  beforeEach(run);

  test('exports a function called createWorkerPoolTerminateFn', () => {
    expect(createWorkerPoolTerminateFn).toBeInstanceOf(Function);
  });

  test('returns function', async () => {
    const { fn } = await run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls Promise.all', () => {
    expect(Promise.all).toHaveBeenCalledWith(['{{TERMINATE}}']);
  });
});
