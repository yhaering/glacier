import type { Token } from '../../tokenStream/interfaces/Token';

export type PositionConsumeFn = (token: Token) => void;
