import { createWorkerInstance } from './createWorkerInstance';
import assert from 'node:assert';
import { parentPort } from 'node:worker_threads';

jest.mock('node:worker_threads', () => ({
  parentPort: {
    on: jest.fn().mockImplementation((eventName, callback) => {
      callback('{{INPUT}}');
    }),
    postMessage: jest.fn()
  }
}));

jest.mock('node:assert', () => jest.fn());

function run() {
  const resolver = jest.fn().mockResolvedValue('{{OUTPUT}}');
  createWorkerInstance(resolver);
  return { resolver };
}

describe('createWorkerInstance', () => {
  beforeEach(run);

  test('exports a function called createWorkerInstance', () => {
    expect(createWorkerInstance).toBeInstanceOf(Function);
  });

  test('calls assert', () => {
    expect(assert).toHaveBeenCalledWith(
      parentPort,
      'Expected function to be called from a worker thread'
    );
  });

  test('subscribes to message event', () => {
    expect(parentPort!.on).toHaveBeenCalledWith(
      'message',
      expect.any(Function)
    );
  });

  test('calls postMessage on resolve', () => {
    expect(parentPort!.postMessage).toHaveBeenCalledWith('{{OUTPUT}}');
  });
});
