import { createWebWorkerTerminateFn } from './createWebWorkerTerminateFn';
import { fakeWebWorker } from '../../../../test/fakes/fakeWebWorker';

async function run() {
  const webWorker = fakeWebWorker();
  const returnValue = createWebWorkerTerminateFn(webWorker);
  await returnValue();
  return { returnValue, webWorker };
}

describe('createWebWorkerTerminateFn', () => {
  beforeEach(run);

  test('exports a function called createWebWorkerTerminateFn', () => {
    expect(createWebWorkerTerminateFn).toBeInstanceOf(Function);
  });

  test('returns a function', async () => {
    const { returnValue } = await run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  test('calls Worker.terminate', async () => {
    const { webWorker } = await run();
    expect(webWorker.terminate).toHaveBeenCalledWith();
  });
});
