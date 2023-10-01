import type { WorkerTask } from '../../../interfaces/WorkerTask';

export function assertTaskExists(
  task?: WorkerTask
): asserts task is WorkerTask {
  if (!task) {
    throw new Error(`Expected task to exist`);
  }
}
