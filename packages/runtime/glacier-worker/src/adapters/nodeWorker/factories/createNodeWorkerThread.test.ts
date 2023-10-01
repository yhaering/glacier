import { createNodeWorkerThread } from './createNodeWorkerThread';
import { fakeWorkerDefinition } from '../../../../test/fakes/fakeWorkerDefinition';
import { assertMessagePort } from '../asserts/assertMessagePort';
import { parentPort } from 'node:worker_threads';
import { createNodeWorkerPostMessage } from './createNodeWorkerPostMessage';
import { createMessageHandler } from '../../../factories/createMessageHandler';

jest.mock('node:worker_threads', () => ({
  parentPort: {
    on: jest.fn()
  }
}));

jest.mock('./createNodeWorkerPostMessage', () => ({
  createNodeWorkerPostMessage: jest.fn().mockReturnValue('{{POST_MESSAGE}}')
}));

jest.mock('../../../factories/createMessageHandler', () => ({
  createMessageHandler: jest.fn().mockReturnValue('{{MESSAGE_HANDLER}}')
}));

jest.mock('../asserts/assertMessagePort');

function run() {
  const workerDefinition = fakeWorkerDefinition();
  const returnValue = createNodeWorkerThread(workerDefinition);
  return { returnValue, workerDefinition };
}

describe('createNodeWorkerThread', () => {
  beforeEach(run);

  test('exports a function called createNodeWorkerThread', () => {
    expect(createNodeWorkerThread).toBeInstanceOf(Function);
  });

  test('calls assertMessagePort', () => {
    expect(assertMessagePort).toHaveBeenCalledWith(parentPort);
  });

  test('calls createNodeWorkerPostMessage', () => {
    expect(createNodeWorkerPostMessage).toHaveBeenCalledWith(parentPort);
  });

  test('calls createMessageHandler', () => {
    const { workerDefinition } = run();
    expect(createMessageHandler).toHaveBeenCalledWith(
      '{{POST_MESSAGE}}',
      workerDefinition
    );
  });

  test('calls MessagePort.on', () => {
    expect(parentPort!.on).toHaveBeenCalledWith(
      'message',
      '{{MESSAGE_HANDLER}}'
    );
  });

  test('returns WorkerDefinition', () => {
    const { returnValue, workerDefinition } = run();
    expect(returnValue).toBe(workerDefinition);
  });
});
