import type { TokenProperties } from '../interfaces/TokenProperties';
import type { CodePoint } from '../interfaces/CodePoint';
import { isIDContinue } from '../checks/isIDContinue';
import { isIDStart } from '../checks/isIDStart';

export function getProperties(codePoint: CodePoint): TokenProperties[] {
  const stringValue = String.fromCodePoint(codePoint);
  const props: TokenProperties[] = [];
  if (isIDStart(stringValue)) {
    props.push('ID_START');
  }

  if (isIDContinue(stringValue)) {
    props.push('ID_CONTINUE');
  }

  return props;
}
