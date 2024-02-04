import type { CodePoint } from './CodePoint';
import type { PartialToken } from './PartialToken';

export type LookupTable = Record<CodePoint, PartialToken>;
