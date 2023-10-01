import type { WorkerMessageExecute } from './WorkerMessageExecute';
import type { WorkerMessageResolve } from './WorkerMessageResolve';
import type { WorkerMessageReject } from './WorkerMessageReject';

export type WorkerMessage =
  | WorkerMessageExecute
  | WorkerMessageResolve
  | WorkerMessageReject;
