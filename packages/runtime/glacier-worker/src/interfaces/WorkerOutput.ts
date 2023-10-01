import type { WorkerFn } from './WorkerFn';

export type WorkerOutput<R> = R extends WorkerFn<any, infer O> ? O : never;
