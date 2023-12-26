import type { Token } from './Token';

export type TokenStreamNextFn = () => Token | undefined;
