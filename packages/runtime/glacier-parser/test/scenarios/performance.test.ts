import { readFileSync } from 'node:fs';
import { createCharacterStream } from '../../src/characterStream/createCharacterStream';
import { createTokenStream } from '../../src/tokenStream/createTokenStream';
import { createParser } from '../../src/parser/createParser';

describe('Performance', () => {
  it('should transform es2015 to segments', () => {
    const source = readFileSync(__dirname + '/../resources/sandbox.js', 'utf8');
    const characterStream = createCharacterStream(source);
    const tokenStream = createTokenStream(characterStream);
    const parser = createParser({});
    const ast = parser(tokenStream);
    expect(ast).toMatchSnapshot();
  });
});
