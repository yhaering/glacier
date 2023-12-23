import { readFileSync } from 'node:fs';
import { createCharacterStream } from '../../src/characterStream/createCharacterStream';
import { createTokenStream } from '../../src/tokenStream/createTokenStream';

describe('Performance', () => {
  it('should transform es2015 to segments', () => {
    const source = readFileSync(__dirname + '/../resources/chunk.js', 'utf8');
    const characterStream = createCharacterStream(source);
    const tokenStream = createTokenStream(characterStream);

    const startTime = performance.now();
    while (tokenStream.peek()) {
      const token = tokenStream.next();
      if (token.type === 'UNKNOWN') {
      }
    }
    const endTime = performance.now();
    console.log(`${endTime - startTime}ms`);
  });
});
