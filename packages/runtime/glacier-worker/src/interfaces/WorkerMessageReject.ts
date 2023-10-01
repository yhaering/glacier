export interface WorkerMessageReject {
  id: string;
  type: 'reject';
  error: unknown;
}
