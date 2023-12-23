const fs = require('node:fs');
const {
  createCharacterStream
} = require('../../dist/src/characterStream/createCharacterStream');
const {
  createSegmentStream
} = require('../../dist/src/segmentStream/createSegmentStream');
const {
  createTokenStream
} = require('../../dist/src/tokenStream/createTokenStream');

const sourceCode = fs.readFileSync('../resources/code.js', 'utf8');
const characterStream = createCharacterStream(sourceCode);
const segmentStream = createSegmentStream(characterStream);
const tokenStream = createTokenStream(segmentStream);

const startTime = performance.now();
try {
  while (tokenStream.next()) {}
} catch {}
const endTime = performance.now();
console.log(`${endTime - startTime}ms`);
