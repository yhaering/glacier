import { GlacierPoolConfig } from './GlacierPoolConfig';
import { fork, Serializable } from 'child_process';
import * as path from 'path';
import { Message } from './messages/Message';
import { WorkerState } from './WorkerState';
import { WorkItem } from './WorkItem';
import { WorkDoneMessage } from './messages/WorkDoneMessage';
import { WorkMessage } from './messages/WorkMessage';
import { v4 } from 'uuid';

export class GlacierPool {
  private readonly config: GlacierPoolConfig;
  private readonly workers: WorkerState[] = [];
  private readonly queue: Record<string, WorkItem> = {};
  private readonly unprocessed: WorkItem[] = [];
  private readonly callback?: (data: Serializable) => void;

  constructor(config: GlacierPoolConfig, callback?: (data: Serializable) => void) {
    this.config = config;
    this.callback = callback;
    for (let i = 0; i < config.worker; i++) {
      const child = fork(path.resolve(__dirname, 'Worker.ts'), [`${i}`], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
      });
      child.addListener('message', this.handleMessage.bind(this));
      this.workers.push({
        child,
      });
    }
  }

  public getSize(): number {
    return this.workers.length;
  }

  private handleMessage(message: Message) {
    const { ref, data } = message as WorkDoneMessage;
    const workItem = this.queue[ref];
    const usedWorker = this.findWorker(ref) as WorkerState;
    usedWorker.item = undefined;
    delete this.queue[ref];
    workItem.resolve(data);
    if (this.callback) {
      this.callback(data);
    }
    this.next();
  }

  private next() {
    const worker = this.findWorker(undefined);
    if (worker && this.unprocessed.length > 0) {
      const item = this.unprocessed.shift() as WorkItem;
      worker.item = item.ref;
      worker.child.send({
        type: 'work',
        ref: item.ref,
        args: item.args,
        fncPath: item.fncPath,
      } as WorkMessage);
    }
  }

  private findWorker(item?: string): WorkerState | undefined {
    return this.workers.find((worker) => worker.item === item);
  }

  public shutdown(): void {
    for (const worker of this.workers) {
      worker.child.kill();
    }
  }

  public execute(fncPath: string, args: Serializable[]): Promise<Serializable> {
    return new Promise((resolve) => {
      const ref = v4();
      const item = {
        fncPath: path.resolve(fncPath),
        args,
        ref,
        resolve,
      };
      this.unprocessed.push(item);
      this.queue[ref] = item;
      this.next();
    });
  }
}
