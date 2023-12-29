const fs = require('node:fs');
const {
  createCharacterStream
} = require('../../dist/src/characterStream/createCharacterStream');
const {
  createTokenStream
} = require('../../dist/src/tokenStream/createTokenStream');
const { readFileSync } = require('node:fs');
const { createParser } = require('../../dist/src/parser/createParser');

const source = readFileSync(__dirname + '/../resources/sandbox.js', 'utf8');
const characterStream = createCharacterStream(source);
const tokenStream = createTokenStream(characterStream);
const parser = createParser({});
const startTime = performance.now();
const ast = parser(tokenStream);
const endTime = performance.now();
console.log(`${endTime - startTime}ms`);
