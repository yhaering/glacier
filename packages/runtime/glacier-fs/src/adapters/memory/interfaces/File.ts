import type { Directory } from './Directory';

export interface File {
  type: 'FILE';
  name: string;
  parent?: Directory;
  content: Buffer;
}
