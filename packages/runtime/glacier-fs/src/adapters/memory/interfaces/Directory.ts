import type { File } from './File';
export interface Directory {
  type: 'DIRECTORY';
  name?: string;
  parent?: Directory;
  entries: Map<string, File | Directory>;
}
