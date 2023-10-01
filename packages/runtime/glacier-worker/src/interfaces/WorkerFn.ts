export type WorkerFn<I = any, O = any> = (data: I) => O | Promise<O>;
