import type { MemberExpression } from './MemberExpression';
import type { SimpleCallExpression } from './SimpleCallExpression';

export type ChainElement = SimpleCallExpression | MemberExpression;
