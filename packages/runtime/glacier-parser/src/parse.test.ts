import { parse } from './parse';
import { Lexer } from '@glacier/lexer';


describe('parse', () => {
  test('exports a function called parse', () => {
    const lexer = new Lexer('#!Test');
    const tokens = parse({ lexer });
    console.log(tokens);
  });
});
