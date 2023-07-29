import { patternKeyCompare } from './patternKeyCompare';
import type { Imports } from '../interfaces/Imports';
import type { ExportConditions } from '../interfaces/ExportConditions';

export function getExpansionKeys(matchObj: Imports | ExportConditions) {
  return Object.keys(matchObj)
    .filter((key) => {
      return (key.match(/\*/g) || []).length === 1;
    })
    .sort(patternKeyCompare);
}
