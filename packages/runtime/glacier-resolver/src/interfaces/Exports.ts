import { ExportConditions } from './ExportConditions';

export type Exports = string | (string | ExportConditions)[] | ExportConditions;
