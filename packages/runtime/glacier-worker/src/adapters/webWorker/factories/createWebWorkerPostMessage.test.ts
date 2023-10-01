import { createWebWorkerPostMessage } from './createWebWorkerPostMessage';
import { fakeWorkerMessageResolve } from '../../../../test/fakes/fakeWorkerMessageResolve';

function run() {
  global.postMessage = jest.fn();
  const fn = createWebWorkerPostMessage();
  const message = fakeWorkerMessageResolve();
  fn(message);
  return { fn, message };
}

describe('createWebWorkerPostMessage', () => {
  beforeEach(run);

  test('exports a function called createWebWorkerPostMessage', () => {
    expect(createWebWorkerPostMessage).toBeInstanceOf(Function);
  });

  test('returns a WorkerPostMessage', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls postMessage', () => {
    const { message } = run();
    expect(postMessage).toHaveBeenCalledWith(message);
  });
});
