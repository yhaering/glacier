import type { Identifier } from './Identifier';
import type { ObjectPattern } from './ObjectPattern';
import type { ArrayPattern } from './ArrayPattern';
import type { RestElement } from './RestElement';
import type { AssignmentPattern } from './AssignmentPattern';

import type { MemberExpression } from './MemberExpression';

export type Pattern =
  | Identifier
  | ObjectPattern
  | ArrayPattern
  | RestElement
  | AssignmentPattern
  | MemberExpression;
