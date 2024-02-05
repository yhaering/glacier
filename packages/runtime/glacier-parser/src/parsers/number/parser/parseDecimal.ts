import type { ParserContext } from '../../../interface/ParserContext';
import type { NumberNode } from '../interfaces/NumberNode';
import { is } from '../../../functions/is';
import { until } from '../../../functions/until';
import { isNext } from '../../../functions/isNext';
import { join } from '../../../functions/join';

export function parseDecimal({ lexer }: ParserContext): NumberNode | undefined {
  if (isNext(lexer, 'NUMBER', ['0'])) {
    if (!isNext(lexer, 'SYMBOL', ['.'])) {
      return;
    }
    until(lexer, (token) => {
      return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
    });
    if (isNext(lexer, 'TEXT', ['e', 'E'])) {
      isNext(lexer, 'SYMBOL', ['+', '-']);
      until(lexer, (token) => {
        return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
      });

      const value = join(lexer.commit());
      return {
        type: 'number',
        numberType: 'decimal',
        value,
        rawValue: value
      }
    }

    const value = join(lexer.commit());
    return {
      type: 'number',
      numberType: 'decimal',
      value,
      rawValue: value
    }
  }

  if (isNext(lexer, 'SYMBOL', ['.'])) {
    until(lexer, (token) => {
      return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
    });
    if (isNext(lexer, 'TEXT', ['e', 'E'])) {
      isNext(lexer, 'SYMBOL', ['+', '-']);
      until(lexer, (token) => {
        return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
      });

      const value = join(lexer.commit());
      return {
        type: 'number',
        numberType: 'decimal',
        value,
        rawValue: value
      }
    }
  }

  if (isNext(lexer, 'NUMBER')) {
    // Must be decimal or integer
    const tokens = until(lexer, (token) => {
      return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
    });

    if (isNext(lexer, 'SYMBOL', ['.'])) {
      until(lexer, (token) => {
        return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
      });
      if (isNext(lexer, 'TEXT', ['e', 'E'])) {
        isNext(lexer, 'SYMBOL', ['+', '-']);
        until(lexer, (token) => {
          return !is(token, 'NUMBER') && !is(token, 'SYMBOL', ['_']);
        });

        const value = join(lexer.commit());
        return {
          type: 'number',
          numberType: 'decimal',
          value,
          rawValue: value
        }
      }
    }


    if (isNext(lexer, 'TEXT', ['n'])) {
      const value = join(lexer.commit());
      return {
        type: 'number',
        numberType: 'bigInteger',
        value,
        rawValue: value
      };
    }

    const value = join(lexer.commit());
    return {
      type: 'number',
      numberType: 'integer',
      value,
      rawValue: value
    };
  }
}
