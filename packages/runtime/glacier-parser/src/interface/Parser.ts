import type { ParserContext } from './ParserContext';

export type Parser<T> = ( context: ParserContext) => T | undefined;
