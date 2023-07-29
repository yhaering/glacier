import { patternKeyCompare } from './patternKeyCompare';
import type { ExportConditions } from '../interfaces/ExportConditions';

export function getExpansionKeys(matchObj: ExportConditions) {
  return Object.keys(matchObj)
    .filter((key) => {
      return (key.match(/\*/g) || []).length === 1;
    })
    .sort(patternKeyCompare);
}
