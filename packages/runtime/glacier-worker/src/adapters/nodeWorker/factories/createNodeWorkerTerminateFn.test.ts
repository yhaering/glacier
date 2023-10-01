import { createNodeWorkerTerminateFn } from './createNodeWorkerTerminateFn';
import { fakeNodeWorker } from '../../../../test/fakes/fakeNodeWorker';

async function run() {
  const nodeWorker = fakeNodeWorker();
  const returnValue = createNodeWorkerTerminateFn(nodeWorker);
  await returnValue();
  return { returnValue, nodeWorker };
}

describe('createNodeWorkerTerminateFn', () => {
  beforeEach(run);

  test('exports a function called createNodeWorkerTerminateFn', () => {
    expect(createNodeWorkerTerminateFn).toBeInstanceOf(Function);
  });

  test('returns a function', async () => {
    const { returnValue } = await run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  test('calls Worker.terminate', async () => {
    const { nodeWorker } = await run();
    expect(nodeWorker.terminate).toHaveBeenCalledWith();
  });
});
