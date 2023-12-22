export function isWhitespace(char: string): boolean {
  return (
    char === '\u0020' ||
    char === '\u00A0' ||
    char === '\u1680' ||
    char === '\u2000' ||
    char === '\u2001' ||
    char === '\u2002' ||
    char === '\u2003' ||
    char === '\u2004' ||
    char === '\u2005' ||
    char === '\u2006' ||
    char === '\u2007' ||
    char === '\u2008' ||
    char === '\u2009' ||
    char === '\u200A' ||
    char === '\u202F' ||
    char === '\u205F' ||
    char === '\u3000' ||
    char === '\u0009' ||
    char === '\u000B' ||
    char === '\u000C' ||
    char === '\uFEFF'
  );
}
