import { createNodeWorkerMessageHandler } from './createNodeWorkerMessageHandler';
import { fakeWorkerTaskRegistry } from '../../../../test/fakes/fakeWorkerTaskRegistry';
import { fakeWorkerMessageResolve } from '../../../../test/fakes/fakeWorkerMessageResolve';
import { fakeWorkerMessageReject } from '../../../../test/fakes/fakeWorkerMessageReject';
import { assertTaskExists } from '../asserts/assertTaskExists';

jest.mock('../asserts/assertTaskExists');

function run() {
  const workerTaskRegistry = fakeWorkerTaskRegistry();
  const returnValue = createNodeWorkerMessageHandler(workerTaskRegistry);
  const workerMessageResolve = fakeWorkerMessageResolve();
  returnValue(workerMessageResolve);
  return { returnValue, workerTaskRegistry };
}

function runWithRejection() {
  const workerTaskRegistry = fakeWorkerTaskRegistry();
  const returnValue = createNodeWorkerMessageHandler(workerTaskRegistry);
  const workerMessageReject = fakeWorkerMessageReject();
  returnValue(workerMessageReject);
  return { returnValue, workerTaskRegistry };
}

describe('createNodeWorkerMessageHandler', () => {
  beforeEach(run);

  test('exports a function called createNodeWorkerMessageHandler', () => {
    expect(createNodeWorkerMessageHandler).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  test('calls WorkerTaskRegistry.get', () => {
    const { workerTaskRegistry } = run();
    expect(workerTaskRegistry.get).toHaveBeenCalledWith('{{ID}}');
  });

  test('calls assertTaskExists', () => {
    const { workerTaskRegistry } = run();
    const workerTask = workerTaskRegistry.get('{{ID}}')!;
    expect(assertTaskExists).toHaveBeenCalledWith(workerTask);
  });

  test('calls WorkerTaskRegistry.delete', () => {
    const { workerTaskRegistry } = run();
    expect(workerTaskRegistry.delete).toHaveBeenCalledWith('{{ID}}');
  });

  test('calls WorkerTask.resolve', () => {
    const { workerTaskRegistry } = run();
    const workerTask = workerTaskRegistry.get('{{ID}}')!;
    expect(workerTask.resolve).toHaveBeenCalledWith('{{OUTPUT}}');
  });

  describe('if value.type is not resolve', () => {
    test('calls WorkerTask.reject', () => {
      const { workerTaskRegistry } = runWithRejection();
      const workerTask = workerTaskRegistry.get('{{ID}}')!;
      expect(workerTask.reject).toHaveBeenCalledWith('{{ERROR}}');
    });
  });
});
