import { readFileSync } from 'node:fs';
import { createSegmentStream } from '../../src/segmentStream/createSegmentStream';
import { createCharacterStream } from '../../src/characterStream/createCharacterStream';
import { createTokenStream } from '../../src/tokenStream/createTokenStream';

describe('Performance', () => {
  it('should transform es2015 to segments', () => {
    const source = readFileSync(__dirname + '/../resources/chunk.js', 'utf8');
    const characterStream = createCharacterStream(source);
    const segmentStream = createSegmentStream(characterStream);
    const tokenStream = createTokenStream(segmentStream);

    const startTime = performance.now();
    while (tokenStream.peek()) {
      tokenStream.next();
    }
    const endTime = performance.now();
    console.log(`${endTime - startTime}ms`);
  });
});
