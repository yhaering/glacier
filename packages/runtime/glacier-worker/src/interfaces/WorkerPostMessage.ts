import type { WorkerMessage } from './WorkerMessage';

export type WorkerPostMessage = (message: WorkerMessage) => void;
