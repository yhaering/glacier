import { Message } from './Message';
import { Serializable } from 'child_process';

export interface WorkMessage extends Message {
  type: 'work';
  fncPath: string;
  args: Serializable[];
}
