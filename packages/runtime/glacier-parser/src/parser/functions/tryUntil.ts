import type { ParserContext } from '../interfaces/ParserContext';
import { ParserError } from '../errors/ParserError';

export type TryFn<T> = () => T;
export type ConditionFn = (context: ParserContext) => boolean;

export function tryUntil<T>(
  context: ParserContext,
  conditionFn: ConditionFn,
  tryFn: TryFn<T | undefined>
): T[] {
  const returnValues: T[] = [];
  while (conditionFn(context)) {
    const returnValue = tryFn();
    if (returnValue === undefined) {
      throw new ParserError(context);
    } else {
      returnValues.push(returnValue);
    }
  }
  return returnValues;
}
