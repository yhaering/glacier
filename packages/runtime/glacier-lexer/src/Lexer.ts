import type { Token } from './interfaces/Token';
import type { TokenLocation } from './interfaces/TokenLocation';
import { buildLookupTable } from './functions/buildLookupTable';
import { getNextLocation } from './functions/getNextLocation';

export class Lexer {
  private location: TokenLocation = {
    col: 0,
    line: 1,
    index: 0
  };

  private readonly unicodeMap = buildLookupTable(0, 0x10ffff);
  private cursor: number = 0;
  public constructor(private readonly source: string) {}

  public next(): Token | undefined {
    const nextChar = this.source[this.cursor++];
    if (nextChar === undefined) return;
    const token = this.buildToken(nextChar);
    this.location.line = token.loc.line;
    this.location.col = token.loc.col;
    this.location.index = token.loc.index;
    return token;
  }

  private buildToken(char: string) {
    const codePoint = char.codePointAt(0)!;
    const metadata = this.unicodeMap[codePoint] ?? {
      type: 'TEXT',
      props: []
    };
    return {
      type: metadata.type,
      props: metadata.props,
      loc: getNextLocation(metadata.type, this.location),
      value: char
    };
  }
}
