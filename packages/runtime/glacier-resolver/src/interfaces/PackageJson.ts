import { Exports } from './Exports';
import { Imports } from './Imports';

export type PackageJson = {
  name: string;
  exports?: Exports;
  imports?: Imports;
  type?: string;
  main?: string;
} & {
  [key: string]: any;
};
