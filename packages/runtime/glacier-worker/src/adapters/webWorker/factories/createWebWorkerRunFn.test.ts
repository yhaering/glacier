import { createWebWorkerRunFn } from './createWebWorkerRunFn';
import { fakeWorkerTaskRegistry } from '../../../../test/fakes/fakeWorkerTaskRegistry';
import { createExecuteEvent } from '../../../factories/createExecuteEvent';
import { fakeWebWorker } from '../../../../test/fakes/fakeWebWorker';
import { createControlledPromise } from '@glacier/utils';

jest.mock('../../../factories/createExecuteEvent', () => ({
  createExecuteEvent: jest.fn().mockReturnValue('{{EVENT}}')
}));

async function run() {
  global.crypto = { randomUUID: jest.fn().mockReturnValue('{{UUID}}') } as any;
  const webWorker = fakeWebWorker();
  const tasks = fakeWorkerTaskRegistry();
  const fn = createWebWorkerRunFn(webWorker, tasks);
  const returnValue = await fn('{{NAME}}', '{{INPUT}}');
  return { returnValue, fn, webWorker, tasks };
}

describe('createWebWorkerRunFn', () => {
  beforeEach(run);

  test('exports a function called createWebWorkerRunFn', () => {
    expect(createWebWorkerRunFn).toBeInstanceOf(Function);
  });

  test('returns a function', async () => {
    const { fn } = await run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls createControlledPromise', () => {
    expect(createControlledPromise).toHaveBeenCalledWith();
  });

  test('calls randomUUID', () => {
    expect(crypto.randomUUID).toHaveBeenCalledWith();
  });

  test('calls WorkerTask.set', async () => {
    const { tasks } = await run();
    expect(tasks.set).toHaveBeenCalledWith('{{UUID}}', {
      resolve: '{{RESOLVE}}',
      reject: '{{REJECT}}'
    });
  });

  test('calls createExecuteEvent', () => {
    expect(createExecuteEvent).toHaveBeenCalledWith(
      '{{UUID}}',
      '{{NAME}}',
      '{{INPUT}}'
    );
  });

  test('calls WebWorker.postMessage', async () => {
    const { webWorker } = await run();
    expect(webWorker.postMessage).toHaveBeenCalledWith('{{EVENT}}');
  });

  test('returns controlled promise', async () => {
    const { returnValue } = await run();
    expect(returnValue).toBe('{{PROMISE}}');
  });
});
