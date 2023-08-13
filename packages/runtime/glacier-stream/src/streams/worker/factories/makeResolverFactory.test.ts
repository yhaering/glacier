import { makeResolverFactory } from './makeResolverFactory';
import { Worker } from 'node:worker_threads';

jest.mock('node:worker_threads', () => ({
  Worker: jest.fn().mockReturnValue({
    on: jest.fn().mockImplementation((eventName, callback) => {
      callback('{{DATA}}');
    }),
    postMessage: jest.fn(),
    terminate: jest.fn(),
    removeAllListeners: jest.fn()
  })
}));

function run() {
  const returnValue = makeResolverFactory('{{WORKER_PATH}}');
  return { returnValue };
}

describe('makeResolverFactory', () => {
  beforeEach(run);

  test('exports a function called makeResolverFactory', () => {
    expect(makeResolverFactory).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  test('creates a new Worker', () => {
    const { returnValue } = run();
    returnValue();
    expect(Worker).toHaveBeenCalledWith('{{WORKER_PATH}}');
  });

  test('resolver returns a new promise', () => {
    const { returnValue } = run();
    const { resolver } = returnValue();
    const promise = resolver('{{INPUT}}');
    expect(promise).toBeInstanceOf(Promise);
  });

  test('calls postMessage with Input', async () => {
    const { returnValue } = run();
    const { resolver } = returnValue();
    const worker = new Worker('');
    await resolver('{{INPUT}}');
    expect(worker.postMessage).toHaveBeenCalledWith('{{INPUT}}');
  });

  test('calls on', async () => {
    const { returnValue } = run();
    const { resolver } = returnValue();
    const worker = new Worker('');
    await resolver('{{INPUT}}');
    expect(worker.on).toHaveBeenCalledWith('message', expect.any(Function));
  });

  test('calls removeAllListeners on finish', async () => {
    const { returnValue } = run();
    const { resolver } = returnValue();
    const worker = new Worker('');
    await resolver('{{INPUT}}');
    expect(worker.removeAllListeners).toHaveBeenCalledWith();
  });

  test('calls worker.terminate on termination', async () => {
    const { returnValue } = run();
    const { terminate } = returnValue();
    await terminate();
    const worker = new Worker('');
    expect(worker.terminate).toHaveBeenCalledWith();
  });
});
