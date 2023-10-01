export interface WorkerMessageExecute {
  id: string;
  type: 'execute';
  name: string;
  input: unknown;
}
