export interface StreamWorker<I, O> {
  isBusy: boolean;
  execute: (input: I) => Promise<O>;
  terminate: () => Promise<void>;
}
