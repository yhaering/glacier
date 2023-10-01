import { createWebWorker } from './createWebWorker';
import { fakeWebWorker } from '../../../../test/fakes/fakeWebWorker';
import { createWebWorkerMessageHandler } from './createWebWorkerMessageHandler';
import { createWebWorkerTerminateFn } from './createWebWorkerTerminateFn';
import { createWebWorkerRunFn } from './createWebWorkerRunFn';

jest.mock('./createWebWorkerMessageHandler', () => ({
  createWebWorkerMessageHandler: jest
    .fn()
    .mockReturnValue('{{MESSAGE_HANDLER}}')
}));

jest.mock('./createWebWorkerTerminateFn', () => ({
  createWebWorkerTerminateFn: jest.fn().mockReturnValue('{{TERMINATE_FN}}')
}));

jest.mock('./createWebWorkerRunFn', () => ({
  createWebWorkerRunFn: jest.fn().mockReturnValue('{{RUN_FN}}')
}));

function run() {
  const workerTaskRegistry = new Map();
  jest.spyOn(global, 'Map').mockImplementation(() => workerTaskRegistry);
  const webWorker = fakeWebWorker();
  const returnValue = createWebWorker(webWorker);
  return { returnValue, workerTaskRegistry, webWorker };
}

describe('createWebWorker', () => {
  beforeEach(run);

  test('exports a function called createWebWorker', () => {
    expect(createWebWorker).toBeInstanceOf(Function);
  });

  test('calls new Map', () => {
    expect(Map).toHaveBeenCalledWith();
  });

  test('calls createWebWorkerMessageHandler', () => {
    const { workerTaskRegistry } = run();
    expect(createWebWorkerMessageHandler).toHaveBeenCalledWith(
      workerTaskRegistry
    );
  });

  test('calls Worker.addEventListener', () => {
    const { webWorker } = run();
    expect(webWorker.addEventListener).toHaveBeenCalledWith(
      'message',
      '{{MESSAGE_HANDLER}}'
    );
  });

  test('calls createWebWorkerTerminateFn', () => {
    const { webWorker } = run();
    expect(createWebWorkerTerminateFn).toHaveBeenCalledWith(webWorker);
  });

  test('calls createWebWorkerRunFn', () => {
    const { webWorker, workerTaskRegistry } = run();
    expect(createWebWorkerRunFn).toHaveBeenCalledWith(
      webWorker,
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
