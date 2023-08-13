import type { StreamWorker } from '../../src/interfaces/StreamWorker';

export function fakeWorker<I = unknown, O = unknown>(): StreamWorker<I, O> {
  return {
    isBusy: false,
    execute: jest.fn().mockResolvedValue('{{OUTPUT}}'),
    terminate: jest.fn()
  };
}
