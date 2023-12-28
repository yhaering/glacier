/* eslint-disable max-lines */
export function whilePunctuation(char: string, characters: string): boolean {
  const nextPunctuation = characters + char;

  return (
    nextPunctuation === '{' ||
    nextPunctuation === '}' ||
    nextPunctuation === '(' ||
    nextPunctuation === ')' ||
    nextPunctuation === '[' ||
    nextPunctuation === ']' ||
    nextPunctuation === '.' ||
    nextPunctuation === '..' ||
    nextPunctuation === '...' ||
    nextPunctuation === ';' ||
    nextPunctuation === ',' ||
    nextPunctuation === '<' ||
    nextPunctuation === '<=' ||
    nextPunctuation === '<<' ||
    nextPunctuation === '>' ||
    nextPunctuation === '>=' ||
    nextPunctuation === '>>' ||
    nextPunctuation === '>>>' ||
    nextPunctuation === '=' ||
    nextPunctuation === '==' ||
    nextPunctuation === '=>' ||
    nextPunctuation === '===' ||
    nextPunctuation === '!' ||
    nextPunctuation === '!=' ||
    nextPunctuation === '!==' ||
    nextPunctuation === '+' ||
    nextPunctuation === '++' ||
    nextPunctuation === '+=' ||
    nextPunctuation === '-' ||
    nextPunctuation === '-=' ||
    nextPunctuation === '--' ||
    nextPunctuation === '*' ||
    nextPunctuation === '**' ||
    nextPunctuation === '*=' ||
    nextPunctuation === '**=' ||
    nextPunctuation === '%' ||
    nextPunctuation === '%=' ||
    nextPunctuation === '&' ||
    nextPunctuation === '&=' ||
    nextPunctuation === '&&' ||
    nextPunctuation === '&&=' ||
    nextPunctuation === '|' ||
    nextPunctuation === '||' ||
    nextPunctuation === '^' ||
    nextPunctuation === '^=' ||
    nextPunctuation === '~' ||
    nextPunctuation === '?' ||
    nextPunctuation === '??' ||
    nextPunctuation === ':' ||
    nextPunctuation === '<<=' ||
    nextPunctuation === '>>=' ||
    nextPunctuation === '>>>=' ||
    nextPunctuation === '|=' ||
    nextPunctuation === '||=' ||
    nextPunctuation === '??=' ||
    nextPunctuation === '/' ||
    nextPunctuation === '/=' ||
    nextPunctuation === '?.'
  );
}
