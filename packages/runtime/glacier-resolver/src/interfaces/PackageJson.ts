import type { Exports } from './Exports';
import type { Imports } from './Imports';

export type PackageJson = {
  name: string;
  exports?: Exports;
  imports?: Imports;
  type?: string;
  main?: string;
} & {
  [key: string]: string;
};
