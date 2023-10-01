import type { WorkerMessageExecute } from '../interfaces/WorkerMessageExecute';

export function createExecuteEvent(
  id: string,
  name: string,
  input: unknown
): WorkerMessageExecute {
  return {
    type: 'execute',
    id,
    name,
    input
  };
}
