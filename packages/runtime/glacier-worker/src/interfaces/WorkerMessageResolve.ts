export interface WorkerMessageResolve {
  id: string;
  type: 'resolve';
  output: unknown;
}
