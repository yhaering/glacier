import { createNodeWorkerRunFn } from './createNodeWorkerRunFn';
import { fakeNodeWorker } from '../../../../test/fakes/fakeNodeWorker';
import { fakeWorkerTaskRegistry } from '../../../../test/fakes/fakeWorkerTaskRegistry';
import { randomUUID } from 'node:crypto';
import { createExecuteEvent } from '../../../factories/createExecuteEvent';
import { createControlledPromise } from '@glacier/utils';

jest.mock('../../../factories/createExecuteEvent', () => ({
  createExecuteEvent: jest.fn().mockReturnValue('{{EVENT}}')
}));

jest.mock('node:crypto', () => ({
  randomUUID: jest.fn().mockReturnValue('{{UUID}}')
}));

async function run() {
  const nodeWorker = fakeNodeWorker();
  const tasks = fakeWorkerTaskRegistry();
  const fn = createNodeWorkerRunFn(nodeWorker, tasks);
  const returnValue = await fn('{{NAME}}', '{{INPUT}}');
  return { returnValue, fn, nodeWorker, tasks };
}

describe('createNodeWorkerRunFn', () => {
  beforeEach(run);

  test('exports a function called createNodeWorkerRunFn', () => {
    expect(createNodeWorkerRunFn).toBeInstanceOf(Function);
  });

  test('returns a function', async () => {
    const { fn } = await run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls createControlledPromise', () => {
    expect(createControlledPromise).toHaveBeenCalledWith();
  });

  test('calls randomUUID', () => {
    expect(randomUUID).toHaveBeenCalledWith();
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

  test('calls NodeWorker.postMessage', async () => {
    const { nodeWorker } = await run();
    expect(nodeWorker.postMessage).toHaveBeenCalledWith('{{EVENT}}');
  });

  test('returns controlled promise', async () => {
    const { returnValue } = await run();
    expect(returnValue).toBe('{{PROMISE}}');
  });
});
