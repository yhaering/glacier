import { createNodeWorkerPostMessage } from './createNodeWorkerPostMessage';
import { fakeMessagePort } from '../../../../test/fakes/fakeMessagePort';
import { fakeWorkerMessageResolve } from '../../../../test/fakes/fakeWorkerMessageResolve';

function run() {
  const messagePort = fakeMessagePort();
  const returnValue = createNodeWorkerPostMessage(messagePort);
  const workerMessage = fakeWorkerMessageResolve();
  returnValue(workerMessage);
  return { returnValue, messagePort, workerMessage };
}

describe('createNodeWorkerPostMessage', () => {
  beforeEach(run);

  test('exports a function called createNodeWorkerPostMessage', () => {
    expect(createNodeWorkerPostMessage).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  test('calls MessagePort.postMessage', () => {
    const { messagePort, workerMessage } = run();
    expect(messagePort.postMessage).toHaveBeenCalledWith(workerMessage);
  });
});
