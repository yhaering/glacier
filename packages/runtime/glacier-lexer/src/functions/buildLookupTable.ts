import { getTokenType } from './getTokenType';
import { getProperties } from './getProperties';
import type { LookupTable } from '../interfaces/LookupTable';

export function buildLookupTable(from: number, to: number): LookupTable {
  const unicodeMap: LookupTable = {};
  for (let codePoint = from; codePoint <= to; codePoint++) {
    const type = getTokenType(codePoint);
    const props = getProperties(codePoint);

    if (props.length > 0 || type !== 'TEXT') {
      unicodeMap[codePoint] = { type, props };
    }
  }
  return unicodeMap;
}
