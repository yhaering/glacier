import type { Program } from './nodes/Program';
import type { TokenStream } from '../../tokenStream/interfaces/TokenStream';

export type Parser = (tokenizer: TokenStream) => Program;
