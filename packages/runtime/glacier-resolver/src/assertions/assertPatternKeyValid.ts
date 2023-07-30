import { assertNoTrailingSlash } from './assertNoTrailingSlash';

export function assertPatternKeyValid(patternKey: string): void {
  assertNoTrailingSlash(patternKey);

  const count = patternKey.split('*').length;
  if (count > 2) {
    throw new Error(
      `Pattern ${patternKey} should only contain a single wildcard`
    );
  }
}
