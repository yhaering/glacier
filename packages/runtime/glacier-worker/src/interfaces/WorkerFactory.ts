import type { GlacierWorker } from './GlacierWorker';
import type { WorkerDefinition } from './WorkerDefinition';

export type WorkerFactory<D extends WorkerDefinition> = () => GlacierWorker<D>;
