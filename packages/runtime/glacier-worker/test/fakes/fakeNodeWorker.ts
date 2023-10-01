import type { Worker } from 'node:worker_threads';

export function fakeNodeWorker(): Worker {
  return {
    on: jest.fn(),
    terminate: jest.fn(),
    postMessage: jest.fn()
  } as unknown as Worker;
}
