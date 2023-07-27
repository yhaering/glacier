import type { ParsedPath } from './ParsedPath';

export type PartialParsedPath =
  | ((
      | {
          root: string;
          dir?: never;
        }
      | {
          dir: string;
          root?: never;
        }
    ) &
      (
        | { base: string; ext?: never; name?: never }
        | { base?: never; ext: string; name: string }
      ))
  | ParsedPath;
