import type { GlacierWorker } from '../../types';

export function fakeGlacierWorker(): GlacierWorker<any> {
  return {
    terminate: jest.fn(),
    run: jest.fn()
  };
}
