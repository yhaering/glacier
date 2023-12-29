import type { SimpleLiteral } from './SimpleLiteral';
import type { RegExpLiteral } from './RegExpLiteral';
import type { BigIntLiteral } from './BigIntLiteral';

export type Literal = SimpleLiteral | RegExpLiteral | BigIntLiteral;
