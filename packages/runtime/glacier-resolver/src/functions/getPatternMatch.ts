export function getPatternMatch(
  matchKey: string,
  expansionKey: string
): string | undefined {
  const [base, trailer] = expansionKey.split('*');
  const isMatching = matchKey.startsWith(base) && matchKey.endsWith(trailer);

  if (!isMatching) {
    return;
  }

  const from = base.length;
  const to = matchKey.length - trailer.length;
  return matchKey.slice(from, to);
}
