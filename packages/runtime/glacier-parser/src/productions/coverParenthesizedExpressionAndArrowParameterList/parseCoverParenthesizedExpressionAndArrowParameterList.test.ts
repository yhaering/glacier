import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import {
  parseCoverParenthesizedExpressionAndArrowParameterList
} from './parseCoverParenthesizedExpressionAndArrowParameterList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCoverParenthesizedExpressionAndArrowParameterList(context);
  return { returnValue };
}

describe('parseCoverParenthesizedExpressionAndArrowParameterList', () => {
  beforeEach(run);

  it('should return a function called parseCoverParenthesizedExpressionAndArrowParameterList', () => {
    expect(parseCoverParenthesizedExpressionAndArrowParameterList).toBeInstanceOf(Function);
  });
});
