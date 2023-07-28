import type { ExportConditions } from './ExportConditions';

export type Exports = string | (string | ExportConditions)[] | ExportConditions;
