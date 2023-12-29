import type { Token } from '../../tokenStream/interfaces/Token';

export interface TokenizerContext {
  peek: () => Token | undefined;
  next: () => Token;
}
