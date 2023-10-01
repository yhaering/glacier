import { createNodeWorker } from './createNodeWorker';
import { fakeNodeWorker } from '../../../../test/fakes/fakeNodeWorker';
import { createNodeWorkerMessageHandler } from './createNodeWorkerMessageHandler';
import { createNodeWorkerTerminateFn } from './createNodeWorkerTerminateFn';
import { createNodeWorkerRunFn } from './createNodeWorkerRunFn';

jest.mock('./createNodeWorkerMessageHandler', () => ({
  createNodeWorkerMessageHandler: jest
    .fn()
    .mockReturnValue('{{MESSAGE_HANDLER}}')
}));

jest.mock('./createNodeWorkerTerminateFn', () => ({
  createNodeWorkerTerminateFn: jest.fn().mockReturnValue('{{TERMINATE_FN}}')
}));
jest.mock('./createNodeWorkerRunFn', () => ({
  createNodeWorkerRunFn: jest.fn().mockReturnValue('{{RUN_FN}}')
}));

function run() {
  const workerTaskRegistry = new Map();
  jest.spyOn(global, 'Map').mockImplementation(() => workerTaskRegistry);
  const nodeWorker = fakeNodeWorker();
  const returnValue = createNodeWorker(nodeWorker);
  return { returnValue, nodeWorker, workerTaskRegistry };
}

describe('createNodeWorker', () => {
  beforeEach(run);

  test('exports a function called createNodeWorker', () => {
    expect(createNodeWorker).toBeInstanceOf(Function);
  });

  test('creates new WorkerTaskRegistry', () => {
    expect(Map).toHaveBeenCalledWith();
  });

  test('calls createNodeWorkerMessageHandler', () => {
    const { workerTaskRegistry } = run();
    expect(createNodeWorkerMessageHandler).toHaveBeenCalledWith(
      workerTaskRegistry
    );
  });

  test('calls worker.on', () => {
    const { nodeWorker, workerTaskRegistry } = run();
    const messageHandler = createNodeWorkerMessageHandler(workerTaskRegistry);
    expect(nodeWorker.on).toHaveBeenCalledWith('message', messageHandler);
  });

  test('calls createNodeWorkerTerminateFn', () => {
    const { nodeWorker } = run();
    expect(createNodeWorkerTerminateFn).toHaveBeenCalledWith(nodeWorker);
  });

  test('calls createNodeWorkerRunFn', () => {
    const { nodeWorker, workerTaskRegistry } = run();
    expect(createNodeWorkerRunFn).toHaveBeenCalledWith(
      nodeWorker,
      workerTaskRegistry
    );
  });

  test('returns GlacierWorker', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      terminate: '{{TERMINATE_FN}}',
      run: '{{RUN_FN}}'
    });
  });
});
