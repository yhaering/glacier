import type { CharacterStreamNextFn } from './CharacterStreamNextFn';
import type { CharacterStreamPeekFn } from './CharacterStreamPeekFn';

export interface CharacterStream {
  next: CharacterStreamNextFn;
  peek: CharacterStreamPeekFn;
}
