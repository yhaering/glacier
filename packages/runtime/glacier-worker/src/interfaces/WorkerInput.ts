import type { WorkerFn } from './WorkerFn';

export type WorkerInput<R> = R extends WorkerFn<infer I> ? I : never;
