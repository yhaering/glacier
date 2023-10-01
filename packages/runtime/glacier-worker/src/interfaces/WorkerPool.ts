import type { GlacierWorker } from './GlacierWorker';
import type { WorkerDefinition } from './WorkerDefinition';

export interface WorkerPool<D extends WorkerDefinition>
  extends GlacierWorker<D> {}
