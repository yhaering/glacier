import type { ParserContext } from '../interfaces/ParserContext';
import type { BaseNodeWithoutComments } from '../interfaces/nodes/BaseNodeWithoutComments';

type Parser<T extends BaseNodeWithoutComments> = (
  context: ParserContext
) => T | undefined;

type ReturnNodes<P extends Parser<any>[]> = {
  [I in keyof P]: ReturnType<P[I]>;
}[0];

export function tryParser<T extends Parser<any>[]>(
  context: ParserContext,
  parserList: T
): ReturnNodes<T> | undefined {
  for (const parser of parserList) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const returnValue = parser(context);
    if (returnValue !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return returnValue;
    }
  }
}
