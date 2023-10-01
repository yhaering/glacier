import type { WorkerTaskRegistry } from '../../src/interfaces/WorkerTaskRegistry';
import { fakeWorkerTask } from './fakeWorkerTask';

export function fakeWorkerTaskRegistry(): WorkerTaskRegistry {
  const workerTask = fakeWorkerTask();
  return {
    set: jest.fn(),
    get: jest.fn().mockReturnValue(workerTask),
    delete: jest.fn()
  } as unknown as WorkerTaskRegistry;
}
