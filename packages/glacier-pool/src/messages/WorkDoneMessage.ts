import { Message } from './Message';
import { Serializable } from 'child_process';

export interface WorkDoneMessage extends Message {
  type: 'done';
  data: Serializable;
}
