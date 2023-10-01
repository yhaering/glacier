import { createWebWorkerThread } from './createWebWorkerThread';
import { fakeWorkerDefinition } from '../../../../test/fakes/fakeWorkerDefinition';
import { createWebWorkerPostMessage } from './createWebWorkerPostMessage';
import { createMessageHandler } from '../../../factories/createMessageHandler';

jest.mock('node:worker_threads', () => ({
  parentPort: {
    on: jest.fn()
  }
}));

jest.mock('./createWebWorkerPostMessage', () => ({
  createWebWorkerPostMessage: jest.fn().mockReturnValue('{{POST_MESSAGE}}')
}));

jest.mock('../../../factories/createMessageHandler', () => ({
  createMessageHandler: jest.fn().mockReturnValue(jest.fn())
}));

function run() {
  global.addEventListener = jest.fn().mockImplementation((type, callback) => {
    callback({ data: '{{DATA}}' });
  });
  const workerDefinition = fakeWorkerDefinition();
  const returnValue = createWebWorkerThread(workerDefinition);
  return { returnValue, workerDefinition };
}

describe('createWebWorkerThread', () => {
  beforeEach(run);

  test('exports a function called createWebWorkerThread', () => {
    expect(createWebWorkerThread).toBeInstanceOf(Function);
  });

  test('calls createWebWorkerPostMessage', () => {
    expect(createWebWorkerPostMessage).toHaveBeenCalledWith();
  });

  test('calls createMessageHandler', () => {
    const { workerDefinition } = run();
    expect(createMessageHandler).toHaveBeenCalledWith(
      '{{POST_MESSAGE}}',
      workerDefinition
    );
  });

  test('calls addEventListener', () => {
    expect(addEventListener).toHaveBeenCalledWith(
      'message',
      expect.any(Function)
    );
  });

  test('calls messageHandler', () => {
    const postMessage = createWebWorkerPostMessage();
    const definition = fakeWorkerDefinition();
    const messageHandler = createMessageHandler(postMessage, definition);
    expect(messageHandler).toHaveBeenCalledWith('{{DATA}}');
  });

  test('returns WorkerDefinition', () => {
    const { returnValue, workerDefinition } = run();
    expect(returnValue).toBe(workerDefinition);
  });
});
