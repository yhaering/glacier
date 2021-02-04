import { Serializable } from 'child_process';

export interface WorkItem {
  ref: string;
  resolve: (value: PromiseLike<string | object | number | boolean> | string | object | number | boolean) => void;
  fncPath: string;
  args: Serializable[];
}
