import type { Exports } from './Exports';

export type Imports = {
  [key: `#${string}`]: Exports;
};
