import type { MessagePort } from 'node:worker_threads';

export function fakeMessagePort(): MessagePort {
  return {
    postMessage: jest.fn()
  } as unknown as MessagePort;
}
