import type { WorkerInput } from './WorkerInput';
import type { WorkerOutput } from './WorkerOutput';
import type { WorkerDefinition } from './WorkerDefinition';

export type WorkerRunFn<D extends WorkerDefinition> = <N extends keyof D>(
  name: N,
  input: WorkerInput<D[N]>
) => Promise<WorkerOutput<D[N]>>;
