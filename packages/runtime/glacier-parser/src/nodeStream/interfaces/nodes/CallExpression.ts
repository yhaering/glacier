import type { SimpleCallExpression } from './SimpleCallExpression';
import type { NewExpression } from './NewExpression';

export type CallExpression = SimpleCallExpression | NewExpression;
