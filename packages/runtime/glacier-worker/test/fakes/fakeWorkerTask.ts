import type { WorkerTask } from '../../src/interfaces/WorkerTask';

export function fakeWorkerTask(): WorkerTask {
  return {
    reject: jest.fn(),
    resolve: jest.fn()
  };
}
