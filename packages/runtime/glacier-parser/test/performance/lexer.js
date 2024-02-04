const { readFileSync } = require('node:fs');
const { TokenStream } = require('../../dist');
const source = readFileSync(__dirname + '/../resources/code.js', 'utf8');

const tokenStream = new TokenStream(source);

const startTime = performance.now();
let t;
while ((t = tokenStream.next())) {}
const endTime = performance.now();
console.log(`${endTime - startTime}ms`);
