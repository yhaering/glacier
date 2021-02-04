import { ChildProcess } from 'child_process';

export interface WorkerState {
  child: ChildProcess;
  item?: string;
}
