import type { Token } from './Token';

export type TokenStreamPeekFn = () => Token | undefined;
