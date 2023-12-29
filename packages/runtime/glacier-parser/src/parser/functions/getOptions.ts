import type { ParserOptions } from '../interfaces/ParserOptions';

export function getOptions(options?: Partial<ParserOptions>): ParserOptions {
  return { ...options };
}
