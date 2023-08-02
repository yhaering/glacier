import type { Exports } from './Exports';
import type { ExportConditions } from './ExportConditions';

export type PackageJson = {
  name: string;
  exports?: Exports;
  imports?: ExportConditions;
  type?: string;
  main?: string;
} & {
  [key: string]: unknown;
};
