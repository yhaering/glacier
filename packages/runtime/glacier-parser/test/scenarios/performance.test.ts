import { readFileSync } from 'node:fs';
import { createCharacterStream } from '../../src/characterStream/createCharacterStream';
import { createTokenStream } from '../../src/tokenStream/createTokenStream';

describe('Performance', () => {
  it('should transform es2015 to segments', () => {
    const source = readFileSync(__dirname + '/../resources/small.js', 'utf8');
    const characterStream = createCharacterStream(source);
    const tokenStream = createTokenStream(characterStream);

    const tokens = [];
    while (tokenStream.peek()) {
      tokens.push(tokenStream.next());
    }

    expect(tokens).toMatchSnapshot();
  });
});
