import { createWebWorkerMessageHandler } from './createWebWorkerMessageHandler';
import { fakeWorkerTaskRegistry } from '../../../../test/fakes/fakeWorkerTaskRegistry';
import { fakeWorkerMessageResolve } from '../../../../test/fakes/fakeWorkerMessageResolve';
import { fakeWorkerMessageReject } from '../../../../test/fakes/fakeWorkerMessageReject';

function run() {
  const taskRegistry = fakeWorkerTaskRegistry();
  const fn = createWebWorkerMessageHandler(taskRegistry);
  fn({ data: fakeWorkerMessageResolve() } as MessageEvent);
  return { fn, taskRegistry };
}

function runWithRejection() {
  const taskRegistry = fakeWorkerTaskRegistry();
  const fn = createWebWorkerMessageHandler(taskRegistry);
  fn({ data: fakeWorkerMessageReject() } as MessageEvent);
  return { fn, taskRegistry };
}

function runWithUnknownTask() {
  const taskRegistry = fakeWorkerTaskRegistry();
  jest.spyOn(taskRegistry, 'get').mockReturnValue(void 0);
  const fn = createWebWorkerMessageHandler(taskRegistry);
  fn({ data: fakeWorkerMessageResolve() } as MessageEvent);
  return { fn, taskRegistry };
}

describe('createWebWorkerMessageHandler', () => {
  beforeEach(run);

  test('exports a function called createWebWorkerMessageHandler', () => {
    expect(createWebWorkerMessageHandler).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls TaskRegistry.get', () => {
    const { taskRegistry } = run();
    expect(taskRegistry.get).toHaveBeenCalledWith('{{ID}}');
  });

  test('calls TaskRegistry.delete', () => {
    const { taskRegistry } = run();
    expect(taskRegistry.delete).toHaveBeenCalledWith('{{ID}}');
  });

  test('calls WorkerTask.resolve', () => {
    const { taskRegistry } = run();
    const workerTask = taskRegistry.get('{{ID}}')!;
    expect(workerTask.resolve).toHaveBeenCalledWith('{{OUTPUT}}');
  });

  describe('if WorkerTask does not exist', () => {
    test('throw an error', () => {
      expect(() => {
        runWithUnknownTask();
      }).toThrow('Expected task to exist');
    });
  });

  describe('if value.type is not resolve', () => {
    test('calls WorkerTask.reject', () => {
      const { taskRegistry } = runWithRejection();
      const workerTask = taskRegistry.get('{{ID}}')!;
      expect(workerTask.reject).toHaveBeenCalledWith('{{ERROR}}');
    });
  });
});
