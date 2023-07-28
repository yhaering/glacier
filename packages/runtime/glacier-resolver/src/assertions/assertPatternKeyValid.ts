export function assertPatternKeyValid(patternKey: string): void {
  if (!patternKey.endsWith('/')) {
    const count = (patternKey.match(/\*/g) || []).length;
    if (count > 1) {
      throw new Error(
        'Pattern should end with "/" or contains only a single "*"'
      );
    }
  }
}
