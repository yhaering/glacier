import { parse } from './parse';
import { Lexer } from '@glacier/lexer';


describe('parse', () => {
  test('exports a function called parse', () => {
    const lexer = new Lexer("'a\\'bc'");
    const tokens = parse({ lexer });
    console.log(tokens);
  });
});
